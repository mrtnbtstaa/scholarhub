"use client";

import Button from "@/components/ui/Button/Button";
import { IoMdCalendar } from "react-icons/io";
import { IoTimer } from "react-icons/io5";
import { useRightSidebarStore } from "../../store/useRightSidebarStore";
import { cn } from "@/lib/helpers/cn";
import { CiCircleCheck } from "react-icons/ci";
import CloseButton from "@/components/shared/CloseButton/CloseButton";
import { useDisableScroll } from "@/hooks/useDisableScroll";
import { useGetCalendarEvent, useUpdateCalendarEvent } from "../../hooks/use-events";
import { formatDate, formatTime } from "@/lib/helpers/formatter";
import { capitalize } from "@/lib/helpers/helper";

const RightSidebar = () => {
  const { setSidebar } = useRightSidebarStore((state) => state.action);
  const toggleSideBar = useRightSidebarStore((state) => state.toggleSideBar);
  useDisableScroll(toggleSideBar);
  const { data } = useGetCalendarEvent();
  const {markEventAsCompleted, isPending} = useUpdateCalendarEvent();

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
          <div className="flex items-center gap-2 justify-end">
            <CloseButton onClick={() => setSidebar(false)} />
          </div>
          <div>
            <div className="px-4 py-2 rounded-full bg-[#fef8c2] inline-block mb-2">
              <h3 className="text-[#966526] text-xs font-semibold tracking-widest">
                {data?.title}
              </h3>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-1">
                <IoMdCalendar className="text-gray-600" />
                <p className="text-sm text-gray-600 tracking-wider">
                  {formatDate(data?.start)}
                </p>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <IoTimer className="text-gray-600" />
                <p className="text-sm text-gray-600 tracking-wider">
                  {formatTime(data?.extendedProps?.time)}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-gray-600 font-semibold tracking-wider text-md mb-1">
              Status
            </h3>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  data?.extendedProps?.status === "pending"
                    ? "bg-[#f2d36e]"
                    : "bg-green-600",
                )}
              ></div>
              <p
                className={cn(
                  "text-md tracking-wider leading-none font-semibold",
                  data?.extendedProps?.status === "pending"
                    ? "text-[#844d0f]"
                    : "text-green-600",
                )}
              >
                {capitalize(data?.extendedProps?.status)}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-gray-600 font-semibold tracking-wider text-md">
              Notes
            </h3>
            <p className="text-sm tracking-wider text-gray-600 leading-5 font-normal">
              {data?.extendedProps?.description
                ? data?.extendedProps?.description
                : "No notes provided."}
            </p>
          </div>
        </div>
          <Button
            disabled={data?.extendedProps?.status === "completed"}
            onClick={markEventAsCompleted}
            variants="primary"
            className="p-3"
            suffixIcon={CiCircleCheck}
            type="submit"
            isLoading={isPending}
          >
            Mark as Completed
          </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
