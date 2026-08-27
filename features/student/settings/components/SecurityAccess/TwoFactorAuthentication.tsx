import Card from "@/components/shared/Card/Card";
import Navigate from "@/components/ui/Navigate/Navigate";
import { cn } from "@/lib/helpers/cn";

const TwoFactorAuthentication = ({ isEnabled }: { isEnabled?: boolean }) => {
  return (
    <Card
      variants="custom"
      className="p-4 mt-4 flex items-center gap-3 md:text-start text-center md:flex-row flex-col justify-between w-full border border-[#cfdcf0]"
    >
      <div>
        <h4 className="text-md tracking-wider text-primary">
          Two-Factor Authentication
        </h4>
        <div className="flex items-center md:justify-start justify-center gap-2">
          <span
            className={cn(
              "w-2 h-2 rounded-full",
              isEnabled ? "bg-green-600" : "bg-red-600",
            )}
          ></span>
          <span
            className={cn(
              "text-sm tracking-wider font-semibold",
              isEnabled ? "text-green-600" : "text-red-600",
            )}
          >
            {isEnabled ? "Enabled" : "Not Enabled"}
          </span>
        </div>
      </div>
      <Navigate
        variants="primary"
        className="p-3 font-normal md:w-auto w-full"
        href="/update-password"
      >
        Enable 2FA
      </Navigate>
    </Card>
  );
};

export default TwoFactorAuthentication;
