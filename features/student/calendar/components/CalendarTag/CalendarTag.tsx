import { cn } from "@/lib/cn";

interface TagProps{
  variants?: "deadline" | "personal" | "document" | "interview";
  title: string;
}

const Tag = ({variants = "deadline", title} : TagProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={
        cn(
          "w-3 h-3 rounded-full",
          variants === "deadline" && "bg-[#3b82f6]",
          variants === "personal" && "bg-[#22c55e]",
          variants === "document" && "bg-[#ebb309]",
          variants === "interview" && "bg-[#a954f7]",
        )
      }></div>
      <h4 className="text-sm tracking-wider">{title}</h4>
    </div>
  )
}

const CalendarTags = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
      <Tag title="Scholarship Deadline" />
      <Tag variants="personal" title="Personal Goal" />
      <Tag variants="document" title="Document Due" />
      <Tag variants="interview" title="Interview" />
    </div>
  );
};

export default CalendarTags;
