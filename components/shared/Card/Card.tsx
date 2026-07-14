import { cn } from "@/lib/utils";

type Card = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: Card) => {
  return (
    <div className={
        cn(
            className,
            "bg-white rounded-lg border border-[#c5c7cf]"
        )
    }>
        {children}
    </div>
  );
};

export default Card;
