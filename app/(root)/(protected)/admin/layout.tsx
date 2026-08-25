import { requireRole } from "@/lib/auth/require-role";
import { USER_ROLE } from "@/lib/constants/user-role";

const AdminLayout = async ({children}: {children: React.ReactNode}) => {

    await requireRole(USER_ROLE.ADMIN);

    return <>{children}</>

}

export default AdminLayout;