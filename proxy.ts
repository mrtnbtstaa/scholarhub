import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ["/auth/login", "/auth/register"]

function isTokenExpired(token: string) : boolean {
  try{

    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64url").toString()
    )
    if(!payload.exp) return false;

    return payload.exp * 1000 <= Date.now()

  }catch {
    return true;
  }
}

export async function proxy(request: NextRequest) {
  
  const path = request.nextUrl.pathname;

  const isPublicRoutes = publicRoutes.includes(path)

  const isProtectedRoutes = path.startsWith("/dashboard")

  const cookieStore = await cookies() 

  const accessToken = cookieStore.get("access_token")?.value;

  // Access token exists but has expired
  if(accessToken && isTokenExpired(accessToken)){
    const response = NextResponse.redirect(
      new URL("/auth/login", request.nextUrl)
    )
    response.cookies.delete("access_token")
    return response
  }

  // Protected routes requires authentication
  if(isProtectedRoutes && !accessToken){
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl))
  }

  // Authenticated users doesnt need register/login 
  if(isPublicRoutes && accessToken){
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl))
  }

  return NextResponse.next()
}
  
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};