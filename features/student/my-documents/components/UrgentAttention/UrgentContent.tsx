import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/helpers/cn";

interface UrgentProps {
  variants?: "danger" | "near-expiry" | "missing";
  title: string;
  description: string;
}

const UrgentContent = ({variants = "danger", title, description} : UrgentProps) => {
  return (
    <Card
      variants="custom"
      className={
        cn(
            "p-4 border-l-6 rounded-none",
            variants === "danger" && "border-[#bb1b1a] bg-[#fefafb]",
            variants === "near-expiry" && "border-[#5da2f7] bg-[#f2f5f7]",
            variants === "missing" && "border-[#c5c7cf] bg-[#e4efff]",
        )
      }
    >
      <h3 className="text-primary text-lg tracking-wider font-medium">
        {title}
      </h3>
      <p className="text-sm text-gray-500 tracking-wider">
        {description}
      </p>
    </Card>
  );
};

export default UrgentContent;
