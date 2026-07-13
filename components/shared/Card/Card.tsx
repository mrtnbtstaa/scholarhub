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
            "bg-white rounded-md"
        )
    }>
        {children}
    </div>
  );
};

export default Card;
