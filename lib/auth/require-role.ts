import { redirect } from "next/navigation";
import { getCurrentUser } from "./get-current-user";
import { routes } from "../constants/_routes";
import { Role } from "../constants/user-role";

const roleRoutes: Record<Role, string> = {
    admin: routes.admin.dashboard,
    student: routes.student.dashboard
}

// Authorization guard for role-based routes.
export async function requireRole(requiredRole: Role) {
    
    const user = await getCurrentUser();

    if (!user) {
        redirect(routes.public.login);
    }

    if(user.role !== requiredRole){
        redirect(roleRoutes[user.role as Role])
    }

    return user;
}