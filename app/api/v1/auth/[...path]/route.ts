import { login, refresh, register } from "@/features/auth/services/auth.service";
import { ENDPOINTS } from "@/lib/constants/endpoints";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(
    request: Request,
    {params}: {params: Promise<{path: string[]}>}
){

    const isProd = process.env.NODE_ENV === "production";

    try{

        const { path } = await params;

        if(path.includes(ENDPOINTS.register)){

            const header = await headers()

            const body = await request.json()

            const result = await register(body, header.get("Idempotency-Key"))   

            if(result.success){
                return NextResponse.json(result, {status: result.status})
            }

            return NextResponse.json(result, {status: result.status})

        }

        if(path.includes(ENDPOINTS.login)){

            const cookieStore = await cookies();

            const body = await request.json();

            const result = await login(body);

            if(result.success){

                cookieStore.set({
                    name: "access_token",
                    value: result.data.access_token,
                    httpOnly: true,
                    secure: isProd,
                    sameSite: "lax",
                    maxAge: 1 * 60, // 60 seconds
                    expires: new Date(Date.now() + 1 * 60 * 1000)
                })

                cookieStore.set({
                    name: "refresh_token",
                    value: result.data.refresh_token,
                    httpOnly: true,
                    secure: isProd,
                    sameSite: "lax",
                    maxAge: 7 * 24 * 60 * 60, // 604,800 seconds
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                })


                return NextResponse.json(result, {status: result.status})
            }

            return NextResponse.json(result, {status: result.status})
        }

        if(path.includes(ENDPOINTS.logout)){



        }

        if(path.includes(ENDPOINTS.refreshToken)){

            const cookieStore = await cookies();
            
            const refreshToken = cookieStore.get("refresh_token")?.value;

            if(!refreshToken){
                return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
            }

            const result = await refresh({refresh: refreshToken});

            if(result.success){

                cookieStore.set({
                    name: "access_token",
                    value: result.data.access_token,
                    httpOnly: true,
                    secure: isProd,
                    sameSite: "lax",
                    maxAge: 1 * 60, // 60 seconds
                    expires: new Date(Date.now() + 1 * 60 * 1000)
                })

                cookieStore.set({
                    name: "refresh_token",
                    value: result.data.refresh_token,
                    httpOnly: true,
                    secure: isProd,
                    sameSite: "lax",
                    maxAge: 7 * 24 * 60 * 60, // 604,800 seconds
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                })

                return NextResponse.json(result, {status: result.status})
            }
            

            cookieStore.delete("access_token");
            cookieStore.delete("refresh_token");
            return NextResponse.json(result, {status: result.status})
        }
        
        return NextResponse.json(
            {
                success: false,
                message: "Route not found"
            },
            {status: 404}
        )


    }catch(e){
        console.error("Error", e)
        return NextResponse.json(
                {
                    success: false,
                    message: "Internal server error"
                },
                {status: 500}
        )
    }

}