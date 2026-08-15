import Divider from "@/components/shared/Divider/Divider";
import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/helpers/cn";
import { NavigationIndex } from "../types/tabNavigation";

const tabNavigation = [
  { label: "Basic Information" },
  { label: "Eligibility & Benefits" },
  { label: "Application Details" },
  { label: "Media & Resources" },
  { label: "SEO & Publishing" },
];

const TabNavigation = ({
  currentNavigationIdx,
  setCurrentNavigation,
}: {
  currentNavigationIdx: NavigationIndex;
  setCurrentNavigation: (index: NavigationIndex) => void;
}) => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        {tabNavigation.map(({label}, index) => (
          <div
            key={label}
            className="relative transition-all duration-75 ease-in-out"
          >
            {currentNavigationIdx === index && (
              <div className="absolute bottom-0 border border-b w-full h-0.5"></div>
            )}
            <Button
              className={cn(
                "text-sm tracking-wider mb-2",
                currentNavigationIdx === index && "font-semibold",
              )}
              onClick={() => setCurrentNavigation(index as NavigationIndex)}
              variants="custom"
            >
              {label}
            </Button>
          </div>
        ))}
      </div>
      <Divider className="mt-1" />
    </>
  );
};

export default TabNavigation;
