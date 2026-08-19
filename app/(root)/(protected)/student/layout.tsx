import { requireRole } from "@/lib/auth/require-role";
import { USER_ROLE } from "@/lib/constants/user-role";

const StudentLayout = async ({children}: {children: React.ReactNode}) => {

    await requireRole(USER_ROLE.STUDENT);

    return <>{children}</>

}

export default StudentLayout;