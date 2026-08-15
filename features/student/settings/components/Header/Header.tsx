import Divider from "@/components/shared/Divider/Divider";
import { cn } from "@/lib/helpers/cn";

const Header = ({
  title,
  hasRightContent = false,
  className,
  isDanger = false
}: {
  title: string;
  hasRightContent?: boolean;
  className?: string;
  isDanger?: boolean
}) => {
  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <h3 className={
          cn(
            "lg:text-2xl md:text-lg text-md text-secondary font-medium tracking-wider",
            className
          )
        }>
          {title}
        </h3>
        {hasRightContent && (
          <div className="bg-[#6df9bb] px-3 py-1 rounded-full">
            <span className="text-[#15734d] text-xs tracking-wider font-semibold">
              CHANNELS
            </span>
          </div>
        )}
      </header>
      <Divider className={`${isDanger && "bg-red-400"}`} />
    </>
  );
};

export default Header;
