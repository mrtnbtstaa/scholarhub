import { cn } from "@/lib/cn";
import Image from "next/image";

const Avatar = ({
  source,
  alt,
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  source: string;
  alt: string;
  className?: string;
  sizes?: string;
}) => {
  return (
    <div
      className={cn(
        "w-18 h-18 relative rounded-full overflow-hidden",
        className,
      )}
    >
      <Image
        alt={alt}
        src={source}
        loading="eager"
        priority
        fill
        sizes={sizes}
        className="rounded-full aspect-square object-cover"
      />
    </div>
  );
};

export default Avatar;
