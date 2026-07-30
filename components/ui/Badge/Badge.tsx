import { cn } from "@/lib/cn";

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
        "rounded-full px-3 py-1 text-xs font-semibold tracking-wider inline-block",
        className,
      )}
    >
      {count && <span className="text-md">{count}</span>}{" "}
      <span className="text-md">{title}</span>
    </div>
  );
};

export default Badge;
