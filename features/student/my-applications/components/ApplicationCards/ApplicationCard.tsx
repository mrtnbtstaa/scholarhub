import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/helpers/cn";
import { ElementType } from "react";
import { MdEditDocument } from "react-icons/md";

interface ApplicationProps {
  icon: ElementType;
  title: string;
  count: number;
  variants?:
    | "total"
    | "preparing"
    | "submitted"
    | "reviewing"
    | "awarded"
    | "30days";
}

const ApplicationCard = ({
  icon: Icon,
  title,
  count,
  variants = "total",
}: ApplicationProps) => {
  return (
    <Card variants="custom" className={
        cn(
            "p-4 flex flex-col items-start w-full border-r-6 bg-white",
            variants === "total" && "border-secondary",
            variants === "preparing" && "border-[#42474f]",
            variants === "submitted" && "border-[#42474f]",
            variants === "reviewing" && "border-[#42474f]",
            variants === "awarded" && "border-[#016f55]",
            variants === "30days" && "border-[#ba1f25]",
        )
    }>
      <div
        className={cn(
          "rounded-lg p-2",
          variants === "total" && "bg-[#dee3ed]",
          variants === "preparing" && "bg-[#e4efff]",
          variants === "submitted" && "bg-[#e4efff]",
          variants === "reviewing" && "bg-[#e4efff]",
          variants === "awarded" && "bg-[#cff9eb]",
          variants === "30days" && "bg-[#f2e3e8]",
        )}
      >
        <Icon
          className={cn(
            variants === "total" && "text-primary",
            variants === "preparing" && "text-[#42474f]",
            variants === "submitted" && "text-[#42474f]",
            variants === "reviewing" && "text-[#42474f]",
            variants === "awarded" && "text-[#016f55]",
            variants === "30days" && "text-[#ba1f25]",
          )}
        />
      </div>
      <div className="mt-4">
        <h3 className="font-normal text-lg tracking-wider text-gray-600">{title}</h3>
        <span className="text-lg tracking-wider text-primary font-medium">{count}</span>
      </div>
    </Card>
  );
};

export default ApplicationCard;
