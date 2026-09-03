import { cn } from "@/lib/utils";



const pen = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  pathLength: 1,
} as const;

type InkProps = {
  className?: string;
  delay?: number;
};

const inkDelay = (delay?: number) =>
  delay ? ({ "--ink-delay": `${delay}s` } as React.CSSProperties) : undefined;

export const InkUnderline = ({ className, delay }: InkProps) => (
  <svg
    viewBox="0 0 220 14"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
    style={inkDelay(delay)}
    className={cn(
      "ink-draw pointer-events-none absolute inset-x-0 bottom-0 h-[0.16em] w-full text-ink",
      className,
    )}
  >
    <path
      {...pen}
      vectorEffect="non-scaling-stroke"
      d="M3 9c34-4 70-6 105-5 36 1 71 3 107 2"
    />
    <path
      {...pen}
      vectorEffect="non-scaling-stroke"
      strokeWidth={1.7}
      d="M14 12c40-3 82-4 122-3 24 1 48 2 72 2"
    />
  </svg>
);

export const InkArrow = ({
  variant = "sweep",
  className,
  delay,
}: InkProps & { variant?: "sweep" | "hook" }) =>
  variant === "sweep" ? (
    <svg
      viewBox="0 0 140 64"
      aria-hidden="true"
      focusable="false"
      style={inkDelay(delay)}
      className={cn("ink-draw pointer-events-none text-ink", className)}
    >
      <path {...pen} d="M132 9c-24 3-48 11-67 25-9 6-17 13-24 21" />
      <path {...pen} d="M41 55c5-1 10-2 15-4" />
      <path {...pen} d="M41 55c2-5 4-10 6-15" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 100 76"
      aria-hidden="true"
      focusable="false"
      style={inkDelay(delay)}
      className={cn("ink-draw pointer-events-none text-ink", className)}
    >
      <path {...pen} d="M90 8c-14 9-29 19-42 30-9 8-17 16-24 25" />
      <path {...pen} d="M24 63c5-1 9-2 14-4" />
      <path {...pen} d="M24 63c1-5 3-9 5-14" />
    </svg>
  );

export const InkNote = ({
  children,
  variant = "sweep",
  className,
  arrowClassName,
  noteClassName,
  delay,
}: InkProps & {
  children: React.ReactNode;
  variant?: "sweep" | "hook";
  arrowClassName?: string;
  noteClassName?: string;
}) => (
  <span className={cn("flex items-start gap-1", className)}>
    <InkArrow
      variant={variant}
      delay={delay}
      className={cn("h-12 w-24 shrink-0", arrowClassName)}
    />
    <span
      className={cn(
        "font-hand text-ink -rotate-3 pt-1 text-lg leading-tight",
        noteClassName,
      )}
    >
      {children}
    </span>
  </span>
);
