import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
    path?: string[]
}

export type HandlerContext = {
    request: NextRequest;
    isProd: boolean;
    params: RouteParams,
    searchParams: URLSearchParams
}

export type ActionHandler = (ctx: HandlerContext) => Promise<NextResponse>;

// Higher-order function that creates an HTTP action dispatcher.
// It maps the requested route action to its corresponding handler.
export function createActionDispatcher(handlers: Record<string, ActionHandler>){
    return async function HTTPHandler(
        request: NextRequest,
        context: {params: Promise<RouteParams>}
    ){
        const isProd = process.env.NODE_ENV === "production";

        const resolvedParams = context?.params ? await context.params : undefined;

        // Filter out empty strings caused by trailing slashes
        const pathSegments = resolvedParams?.path?.filter(Boolean) ?? []

        // -----------------------------------------
        // Determine route

        // Catch all routes
        // api/v1/auth/login/
        // api/v1/auth/register/

        // Single segment route
        // api/v1/calendar/
        // -----------------------------------------
        
        const routeKey = 
            pathSegments.at(-1) ??
            request.nextUrl.pathname
            .split("/")
            .filter(Boolean)
            .at(-1) 


        // Validate the requested endpoint action exists in the handler map 
        if(!routeKey || !handlers[routeKey]){
            return NextResponse.json(
                {message: "Endpoint not found"},
                {status: 404}
            )
        }

        try{
            // Execute the mapped handler function
            return await handlers[routeKey]({
                request,
                isProd,
                params: resolvedParams as RouteParams,
                searchParams: request.nextUrl.searchParams
            })
        }catch(error){
            console.error(`[API Error - ${routeKey}]`, error)
            return NextResponse.json(
                {message: "Internal server errror"},
                {status: 500}
            )
        }

    }
}