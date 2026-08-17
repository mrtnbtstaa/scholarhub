import {
  forgotPassword,
  login,
  logout,
  refresh,
  register,
  resetPassword,
} from "@/features/auth/services/auth.service";
import { ENDPOINTS } from "@/lib/constants/endpoints";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const isProd = process.env.NODE_ENV === "production";

  try {
    const { path } = await params;

    if (path.includes(ENDPOINTS.register)) {
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

      if (result.success) {
        return NextResponse.json(result, { status: result.status });
      }

      return NextResponse.json(result, { status: result.status });
    }

    if (path.includes(ENDPOINTS.login)) {
      const cookieStore = await cookies();

      const body = await request.json();

      const { email, password } = body;

      const result = await login({ email, password });

      if (result.success) {
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
      }

      return NextResponse.json(result, { status: result.status });
    }

    if (path.includes(ENDPOINTS.logout)) {
      const cookieStore = await cookies();

      const refreshToken = cookieStore.get("refresh_token")?.value;

      if (!refreshToken) {
        return NextResponse.json(
          { message: "Unauthenticated" },
          { status: 401 },
        );
      }

      const result = await logout({ refresh: refreshToken });

      if (result.success) {
        cookieStore.delete("access_token");
        cookieStore.delete("refresh_token");
        return NextResponse.json(result, { status: result.status });
      }

      return NextResponse.json(result, { status: result.status });
    }

    if (path.includes(ENDPOINTS.refreshToken)) {
      const cookieStore = await cookies();

      const refreshToken = cookieStore.get("refresh_token")?.value;

      if (!refreshToken) {
        return NextResponse.json(
          { message: "Unauthenticated" },
          { status: 401 },
        );
      }

      const result = await refresh({ refresh: refreshToken });

      if (result.success) {
        cookieStore.set({
          name: "access_token",
          value: result.data.refresh_token,
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
      }

      cookieStore.delete("access_token");
      cookieStore.delete("refresh_token");
      return NextResponse.json(result, { status: result.status });
    }

    if (path.includes(ENDPOINTS.forgotPassword)) {
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

      if (result.success) {
        return NextResponse.json(result, { status: result.status });
      }

      return NextResponse.json(result, { status: result.status });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Route not found",
      },
      { status: 404 },
    );
  } catch (e) {
    console.error("Error", e);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {

  const {path} = await params;

   if (path.includes(ENDPOINTS.resetPassword)) {

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

      if (result.success) {
        return NextResponse.json(result, { status: result.status });
      }
      
      return NextResponse.json(result, { status: result.status });
    }

}
