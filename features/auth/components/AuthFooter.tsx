import Button from "@/components/ui/Button/Button";
import Navigate from "@/components/ui/Navigate/Navigate";
import { FcGoogle } from "react-icons/fc";

type AuthProps = {
  title: string;
  navigateTitle: string;
  href: "/login" | "/register";
};

const AuthFooter = ({ title, navigateTitle, href }: AuthProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">

      <div className="mt-6 flex items-center w-full">
        <div className="flex-1 h-px bg-primary-border"></div>
        <span className="px-3 text-sm text-gray-500">or sign in with</span>
        <div className="flex-1 h-px bg-primary-border"></div>
      </div>

      <Button suffixIcon={FcGoogle} variants="custom" className="p-3 hover:bg-btn-primary/2 transition-colors ease-in-out duration-75 text-center my-6 w-full border border-primary-border rounded-md">
        Continue With Google
      </Button>

      <div className="mt-3 flex items-center justify-center w-full">
        <span className="text-md tracking-wide">{title}&nbsp;</span>
        <Navigate href={href} variants="custom" className="tracking-wider text-base text-btn-primary">
          {navigateTitle}
        </Navigate>
      </div>
    </div>
  );
};

export default AuthFooter;
