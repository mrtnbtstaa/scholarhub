"use client";

import Button from "@/components/ui/Button/Button";
import { IoMdCalendar } from "react-icons/io";
import { IoTimer } from "react-icons/io5";
import { useRightSidebarStore } from "../../store/useRightSidebarStore";
import { cn } from "@/lib/utils";
import { CiCircleCheck } from "react-icons/ci";
import CloseButton from "@/components/shared/CloseButton/CloseButton";
import { useDisableScroll } from "@/hooks/useDisableScroll";

const RightSidebar = () => {
  const { setSidebar } = useRightSidebarStore((state) => state.action);
  const toggleSideBar = useRightSidebarStore((state) => state.toggleSideBar);

  useDisableScroll(toggleSideBar);

  return (
    <div
      onClick={() => setSidebar(false)}
      className={cn(
        "bg-[#cdd3da]/50 min-h-full w-full fixed left-0 top-0 z-1000 transition-transform duration-300 ease-in-out backdrop-blur-xs overflow-hidden",
        toggleSideBar ? "translate-x-0" : "translate-x-600",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-6 min-h-full w-96 top-0 right-0 bg-white absolute overflow-hidden flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center gap-2 justify-between">
            <div className="px-4 py-1 rounded-full bg-[#fef8c2]">
              <span className="text-[#966526] text-xs font-semibold tracking-widest">
                INTERVIEW
              </span>
            </div>
            <CloseButton onClick={() => setSidebar(false)} />
          </div>
          <div className="mt-8">
            <h3 className="text-gray-600 font-semibold tracking-wider text-md">
              Embassy Appt
            </h3>
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-1">
                <IoMdCalendar className="text-gray-600" />
                <p className="text-sm text-gray-600 tracking-wider">
                  September 18, 2026
                </p>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <IoTimer className="text-gray-600" />
                <p className="text-sm text-gray-600 tracking-wider">
                  10:30 AM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-gray-600 font-semibold tracking-wider text-md mb-1">
              Status
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#f2d36e]"></div>
              <p className="text-[#844d0f] text-md tracking-wider leading-none font-semibold">
                Pending Submission
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-gray-600 font-semibold tracking-wider text-md">
              Notes
            </h3>
            <p className="text-sm tracking-wider text-gray-600 leading-5 font-normal">
              Letter is required for the application. Please ensure all
              documents are scanned correctly.
            </p>
          </div>
        </div>
        <Button
          variants="custom"
          className="p-3   bg-[#006c49] w-full text-white font-medium text-sm tracking-wider text-center"
          suffixIcon={CiCircleCheck}
        >
          Mark as Completed
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
