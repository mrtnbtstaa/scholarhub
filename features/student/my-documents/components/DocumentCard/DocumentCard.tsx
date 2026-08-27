import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/helpers/cn";
import { ElementType } from "react";

interface DocumentProps {
  icon: ElementType;
  count: number;
  title: string;
  subDescription: string;
  variants?: "total-docs" | "using-docs" | "expiring" | "missing" | "recent";
}

const DocumentCard = ({
  icon: Icon,
  count,
  title,
  subDescription,
  variants = "total-docs",
}: DocumentProps) => {
  return (
    <Card className="p-6 flex flex-col items-start gap-1">
      <div
        className={cn(
          "p-3 rounded-lg mb-2",
          variants === "total-docs" && "bg-[#eff5fe]",
          variants === "using-docs" && "bg-[#e3fff1]",
          variants === "expiring" && "bg-[#fef9f7]",
          variants === "missing" && "bg-[#ececed]",
          variants === "recent" && "bg-[#e4efff]",
        )}
      >
        <Icon
          className={cn(
            "text-3xl",
            variants === "total-docs" && "text-[#272044]",
            variants === "using-docs" && "text-[#006c49]",
            variants === "expiring" && "text-[#c6211b]",
            variants === "missing" && "text-[#42474f]",
            variants === "recent" && "text-[#002045]",
          )}
        />
      </div>
      <h3 className="text-sm tracking-wider text-gray-600">{title}</h3>
      <span className="font-semibold text-primary text-2xl tracking-wider leading-none">
        {count}
      </span>
      <p className="text-xs tracking-wider text-gray-400">{subDescription}</p>
    </Card>
  );
};

export default DocumentCard;
