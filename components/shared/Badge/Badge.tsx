import { cn } from "@/lib/utils";

const Badge = ({
  className,
  count,
  title,
}: {
  className?: string;
  count?: number | string;
  title: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-full px-3 py-2 text-xs tracking-wider inline-block",
        className,
      )}
    >
      {count && <span className="text-md">{count}</span>}{" "}
      <span className="text-md">{title}</span>
    </div>
  );
};

export default Badge;
