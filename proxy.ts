import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routes } from './lib/constants/_routes'

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

  // const path = request.nextUrl.pathname;

  // const isProtectedRoute = protectedRoutes.some((route) => path === route || path.startsWith(`${route}/`))

  // const cookieStore = await cookies() 

  // const accessToken = cookieStore.get("access_token")?.value;

  // // Access token exists but has expired
  // if(accessToken && isTokenExpired(accessToken)){
  //   const response = NextResponse.redirect(
  //     new URL(routes.public.login, request.nextUrl)
  //   )

  //   response.cookies.delete("access_token")
  //   response.cookies.delete("refresh_token")

  //   return response
  // }

  // // Protected routes requires authentication
  // if(isProtectedRoute && !accessToken){
  //   return NextResponse.redirect(new URL(routes.public.login, request.nextUrl))
  // }


  // return NextResponse.next()
}
  
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};