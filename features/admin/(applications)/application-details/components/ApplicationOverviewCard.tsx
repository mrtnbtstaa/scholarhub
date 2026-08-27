import Avatar from "@/components/shared/Avatar/Avatar";
import Card from "@/components/shared/Card/Card";
import Navigate from "@/components/ui/Navigate/Navigate";
import { cn } from "@/lib/helpers/cn";
import { LuMedal } from "react-icons/lu";

interface KeyValueDetail {
  label: string;
  value: string;
  highlight?: boolean; // red text for deadline
}

interface ApplicationOverviewCardProps {
  type?: "student" | "scholarship";
  title: string;
  subtitle: string;
  avatarUrl?: string; // For student profile picture
  details: KeyValueDetail[];
  actionLabel: string;
  status?: string;
}

const ApplicationOverviewCard = ({
  type = "student",
  title,
  subtitle,
  avatarUrl,
  //   badges,
  details,
  actionLabel,
  status,
}: ApplicationOverviewCardProps) => {
  return (
    <Card className="md:col-span-4 col-span-12 p-4 flex flex-col w-full items-start mt-4">
      <div className="flex items-center gap-4">
        {type === "student" ? (
          <Avatar source={avatarUrl ?? "/assets/hero.png"} />
        ) : (
          <div className="rounded-md p-4 bg-[#e4efff]">
            <LuMedal className="text-4xl text-btn-primary" />
          </div>
        )}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-between w-full md:gap-4 gap-1">
            <div>
              <h4 className="text-primary tracking-wider text-md">{title}</h4>
              <p className="text-sm tracking-wider text-gray-800">{subtitle}</p>
            </div>
            {type === "student" ? (
              <div className="bg-[#6df9bb] rounded-md px-3 py-1">
                <span className="text-xs font-semibold tracking-wider text-[#00704c]">
                  Active
                </span>
              </div>
            ) : (
              status && (
                <div className="bg-btn-primary rounded-md px-3 py-1">
                  <span className="text-xs font-semibold text-white tracking-wider bg-btn-primary">
                    {status}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-1 gap-4 mt-4">
        {details &&
          details.map(({ label, value, highlight }) => (
            <div key={label}>
              <h4 className="text-xs tracking-wider font-semibold text-gray-600">
                {label}
              </h4>
              <p
                className={cn(
                  "text-sm tracking-wider font-semibold",
                  highlight && "text-red-600",
                )}
              >
                {value}
              </p>
            </div>
          ))}
      </div>
      <Navigate className={cn("p-3 w-full text-center mt-2")} href={"/"}>
        {actionLabel}
      </Navigate>
    </Card>
  );
};

export default ApplicationOverviewCard;
