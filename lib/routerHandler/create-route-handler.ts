import { NextRequest, NextResponse } from "next/server";

export type HandlerContext = {
    request: NextRequest;
    isProd: boolean;
    params: {path: string[]},
    searchParams: URLSearchParams
}

export type ActionHandler = (ctx: HandlerContext) => Promise<NextResponse>;

// Higher-order function that creates an HTTP action dispatcher.
// It maps the requested route action to its corresponding handler.
export function createActionDispatcher(handlers: Record<string, ActionHandler>){
    return async function HTTPHandler(
        request: NextRequest,
        {params}: {params: Promise<{path: string[]}>}
    ){
        const isProd = process.env.NODE_ENV === "production";
        const resolvedParams = await params;
        // Extract the specific endpoint action (e.g., "register" or "login") from the route
        const action = resolvedParams.path.at(-1);

        // Validate the requested endpoint action exists in the handler map 
        if(!action || !handlers[action]){
            return NextResponse.json(
                {message: "Endpoint not found"},
                {status: 404}
            )
        }

        try{
            // Execute the mapped handler function
            return await handlers[action]({
                request,
                isProd,
                params: resolvedParams,
                searchParams: request.nextUrl.searchParams
            })
        }catch(error){
            console.error(`[API Error - ${action}]`, error)
            return NextResponse.json(
                {message: "Internal server errror"},
                {status: 500}
            )
        }

    }
}