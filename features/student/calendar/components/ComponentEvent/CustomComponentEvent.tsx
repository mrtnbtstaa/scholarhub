import { cn } from "@/lib/utils";


interface ComponentEventProps {
  title: string;
  type?: "document" | "interview" | "goal" | "deadline";
}

const CustomComponentEvent = ({
  title, type = "document"
}: ComponentEventProps) => {


  return (
    <div
      className={cn(
        "p-2 rounded-full border-l-3 text cursor-default",
        type === "document" && "bg-[#fef8c2] border-[#eec33b]",
        type === "interview" && "bg-[#f3e8ff] border-[#a954f7]",
        type === "goal" && "bg-[#ddfde7] border-[#22c55e]",
        type === "deadline" && "bg-[#dbeafe] border-[#3b82f6]",
      )}
    >
      <h4
        className={cn(
          "truncate",
          type === "document" && "text-[#956a70]",
          type === "interview" && "text-[#783bac]",
          type === "goal" && "text-[#2894ae]",
          type === "deadline" && "text-[#3053b4]",
        )}
      >
        {title}
      </h4>
    </div>
  );
};

export default CustomComponentEvent;
