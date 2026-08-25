import { cn } from "@/lib/helpers/cn";


interface ComponentEventProps {
  title: string;
  type?: "scholarship deadline" | "personal goal" | "document due date" | "others";
}

const CustomComponentEvent = ({
  title, type = "scholarship deadline"
}: ComponentEventProps) => {

  return (
    <div
      className={cn(
        "p-2 rounded-full border-l-3 text cursor-default",
        type === "scholarship deadline" && "bg-[#fef8c2] border-[#eec33b]",
        type === "personal goal" && "bg-[#f3e8ff] border-[#a954f7]",
        type === "document due date" && "bg-[#ddfde7] border-[#22c55e]",
        type === "others" && "bg-[#dbeafe] border-[#3b82f6]",
      )}
    >
      <h4
        className={cn(
          "truncate",
          type === "scholarship deadline" && "text-[#956a70]",
          type === "personal goal" && "text-[#783bac]",
          type === "document due date" && "text-[#2894ae]",
          type === "others" && "text-[#3053b4]",
        )}
      >
        {title}
      </h4>
    </div>
  );
};

export default CustomComponentEvent;
