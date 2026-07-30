import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/cn";
import { FaGraduationCap } from "react-icons/fa";

interface AnalyticProps {
  count: number | string;
  title: string;
  variants?:
    | "total-scholarships"
    | "active-students"
    | "providers"
    | "active-apps"
    | "pending-reviews"
    | "sync-today";
}

const AnalyticCard = ({
  count,
  title,
  variants = "total-scholarships",
}: AnalyticProps) => {
  return (
    <Card className="p-4">
      <div className="flex flex-col items-start">
        <div
          className={cn(
            "p-2 rounded-lg",
            variants === "total-scholarships" && "bg-[#acc7f6]",
            variants === "active-students" && "bg-[#6df9bb]",
            variants === "providers" && "bg-[#dde8ff]",
            variants === "active-apps" && "bg-[#dde8ff]",
            variants === "pending-reviews" && "bg-[#fedbd6]",
            variants === "sync-today" && "bg-[#d3e4fe]",
          )}
        >
          <FaGraduationCap
            className={cn(
              "text-2xl",
              variants === "total-scholarships" && "text-[#002045]",
              variants === "active-students" && "text-[#005236]",
              variants === "providers" && "text-[#0a1c31]",
              variants === "active-apps" && "text-[#0a1c31]",
              variants === "pending-reviews" && "text-[#93010b]",
              variants === "sync-today" && "text-[#42474f]",
            )}
          />
        </div>
        <div className="mt-4">
          <span className="font-semibold text-2xl tracking-wider">{count}</span>
          <h4 className="text-sm text-gray-700 tracking-wider">
            {title}
          </h4>
        </div>
      </div>
    </Card>
  );
};

export default AnalyticCard;
