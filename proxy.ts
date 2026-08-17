import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routes } from './lib/constants/routes'

const publicRoutes = [
  routes.public.login,
  routes.public.register
]
const protectedRoutes = [
  routes.student.dashboard,
  routes.student.applications,
  routes.student.browseScholarships,
  routes.student.savedScholarships,
  routes.student.profile,
  routes.student.calendar,
  routes.student.documents,
  routes.student.settings,
  routes.admin.dashboard,
  routes.admin.applications,
  routes.admin.editScholarship,
  routes.admin.providers,
  routes.admin.scholarships,
  routes.admin.students,
  routes.admin.viewScholarship,
]

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

  console.log("PROXY RUNNING!")

  const path = request.nextUrl.pathname;

  const isPublicRoutes = publicRoutes.includes(path)

  const isProtectedRoutes = protectedRoutes.includes(path)

  const cookieStore = await cookies() 

  const accessToken = cookieStore.get("access_token")?.value;

  // Access token exists but has expired
  if(accessToken && isTokenExpired(accessToken)){
    const response = NextResponse.redirect(
      new URL(routes.public.login, request.nextUrl)
    )
    response.cookies.delete("access_token")
    response.cookies.delete("refresh_token")
    return response
  }

  // Protected routes but no access token found requires authentication
  if(isProtectedRoutes && !accessToken){
    return NextResponse.redirect(new URL(routes.public.login, request.nextUrl))
  }

  // Public routes and has access token automatically redirect to protected routes 
  if(isPublicRoutes && accessToken){
    console.log("Inside public routes")
    return NextResponse.redirect(new URL(routes.student.dashboard, request.nextUrl))
  }

  return NextResponse.next()
}
  
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};