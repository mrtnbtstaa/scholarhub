import Navigate from "@/components/ui/Navigate/Navigate";

type AuthProps = {
    title: string;
    navigateTitle: string;
    href: "/login" | "/register"
}

const AuthFooter = ({title, navigateTitle, href} : AuthProps) => {
  return (
    <div className="mt-4 flex items-center justify-center w-full">
      <span className="text-md tracking-wide">
        {title}
      </span>
      <Navigate href={href} variants="redirect">
        {navigateTitle}
      </Navigate>
    </div>
  );
};

export default AuthFooter;
