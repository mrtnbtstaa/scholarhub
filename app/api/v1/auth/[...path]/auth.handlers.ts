import { forgotPassword, login, logout, refresh, register, resetPassword } from "@/features/auth/services/auth.service";
import { ENDPOINTS } from "@/lib/constants/endpoints";
import { ActionHandler } from "@/lib/routerHandler/create-route-handler";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export const authPostHandlers: Record<string, ActionHandler> = {

    [ENDPOINTS.server.auth.register]: async ({request}) => {

        const body = await request.json();
        const header = await headers();
        const idempotencyKey = header.get("Idempotency-Key");

        if (!idempotencyKey) {
            return NextResponse.json(
                { message: "Idempotency key is missing." },
                { status: 400 },
            );
        }

        const result = await register(body, idempotencyKey);

        return NextResponse.json(result, {status: result.status})

    },

    [ENDPOINTS.server.auth.login]: async ({request, isProd}) => {
        const cookieStore = await cookies();
        
        const body = await request.json();

        const { email, password } = body;

        const result = await login({ email, password });

        if(!result.success)
            return NextResponse.json(result, { status: result.status });
        
        cookieStore.set({
        name: "access_token",
        value: result.data.access_token,
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: 15 * 60, // 900 seconds
        expires: new Date(Date.now() + 15 * 60 * 1000),
        });

        cookieStore.set({
        name: "refresh_token",
        value: result.data.refresh_token,
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60, // 604,800 seconds
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        return NextResponse.json(result, { status: result.status });
    },

    [ENDPOINTS.server.auth.logout]: async ({}) => {

        const cookieStore = await cookies();
        
        const refreshToken = cookieStore.get("refresh_token")?.value;

        const clear = () => {
        cookieStore.delete("access_token");
        cookieStore.delete("refresh_token");
        }

        if (!refreshToken) {
            clear();
            return NextResponse.json(
                { message: "Unauthenticated" },
                { status: 401 },
            );
        }

        const result = await logout({ refresh: refreshToken });

        if(!result.success){
            return NextResponse.json(result, { status: result.status });
        }
        
        clear();
        return NextResponse.json(result, { status: result.status });

    },

    [ENDPOINTS.server.auth.refreshToken]: async ({isProd}) => {

        const cookieStore = await cookies();
        
        const refreshToken = cookieStore.get("refresh_token")?.value;

        if (!refreshToken) {
        return NextResponse.json(
            { message: "Unauthenticated" },
            { status: 401 },
        );
        }

        const clear = () => {
            cookieStore.delete("access_token");
            cookieStore.delete("refresh_token");
        }

        const result = await refresh({ refresh: refreshToken });

        if(!result.success){
            clear();
            return NextResponse.json(result, { status: result.status });
        }

        cookieStore.set({
        name: "access_token",
        value: result.data.access_token,
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: 15 * 60, // 900 seconds
        expires: new Date(Date.now() + 15 * 60 * 1000),
        });

        cookieStore.set({
        name: "refresh_token",
        value: result.data.refresh_token,
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60, // 604,800 seconds
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        return NextResponse.json(result, { status: result.status });
    },

    [ENDPOINTS.server.auth.forgotPassword]: async ({request}) => {
        const body = await request.json();
        
        const header = await headers();

        const idempotencyKey = header.get("Idempotency-Key");

        if (!idempotencyKey) {
        return NextResponse.json(
            { message: "Idempotency key is missing." },
            { status: 400 },
        );
        }

        const result = await forgotPassword(body, idempotencyKey);

        return NextResponse.json(result, { status: result.status });
    }
}

export const authPatchHandler: Record<string, ActionHandler> = {

    [ENDPOINTS.server.auth.resetPassword]: async ({request}) => {
        const body = await request.json();
        
        const header = await headers();

        const idempotencyKey = header.get("Idempotency-Key");

        if (!idempotencyKey) {
        return NextResponse.json(
            { message: "Idempotency key is missing." },
            { status: 400 },
        );
        }

        const result = await resetPassword(body, idempotencyKey);

        return NextResponse.json(result, { status: result.status });
    }

}