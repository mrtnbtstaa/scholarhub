"use client";
import { CalendarRef } from "@fullcalendar/react";
import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/helpers/cn";
import { RefObject } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type FilterButton = {
  id: "dayGridMonth" | "timeGridWeek" | "timeGridDay";
  name: "Month" | "Week" | "Day";
};
const filterButtonData: FilterButton[] = [
  {
    id: "dayGridMonth",
    name: "Month",
  },
  {
    id: "timeGridWeek",
    name: "Week",
  },
  {
    id: "timeGridDay",
    name: "Day",
  },
];

const CalendarHeader = ({
  calendarRef,
  currentView,
  setCurrentView,
  currentTitle,
  handlePreviousMonth,
  handleNextMonth,
}: {
  calendarRef: RefObject<CalendarRef | null>;
  currentView: string;
  setCurrentView: (viewName: "dayGridMonth" | "timeGridWeek" | "timeGridDay") => void;
  currentTitle: string;
  handlePreviousMonth: () => void;
  handleNextMonth: () => void;
}) => {

  const handleNavigate = (action: "prev" | "next" | "today") => {
    const calendarApi = calendarRef.current?.getApi();
    if (!calendarApi) return;
    if(action === "next") handleNextMonth();
    else if(action ===  "prev") handlePreviousMonth();
    calendarApi[action](); 
  };

  const handleViewChange = (
    viewName: "dayGridMonth" | "timeGridWeek" | "timeGridDay",
  ) => {
    const calendarApi = calendarRef.current?.getApi();
    if(!calendarApi) return;
    calendarApi.changeView(viewName);
    setCurrentView(viewName);
  };

  return (
    <header className="flex flex-wrap items-center md:justify-between justify-center gap-4">
      <div className="flex items-center gap-6">
        <Button
          variants="custom"
          aria-label="Previous Calendar Button"
          onClick={() => handleNavigate("prev")}
        >
          <MdChevronLeft className="text-2xl" />
        </Button>
        <Button variants="custom" aria-label="Today Button" onClick={() => handleNavigate("today")}>
          <span className="text-lg tracking-wider text-gray-700">Today</span>
        </Button>
        <Button
          variants="custom"
          aria-label="Next Calendar Button"
          onClick={() => handleNavigate("next")}
        >
          <MdChevronRight className="text-2xl" />
        </Button>
      </div>
      <h3 className="font-medium tracking-wider text-2xl">{currentTitle}</h3>
      <div className="p-2 bg-[#eff5fe] rounded-lg flex items-center gap-2">
        {filterButtonData.map(({ name, id }) => (
          <Button
            onClick={() => handleViewChange(id)}
            key={name}
            variants="custom"
            aria-label={`${name} Button`}
            className={cn(
              "p-2 tracking-wider text-md",
              id === currentView && "bg-[#fefffe] font-medium",
            )}
          >
            {name}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default CalendarHeader;
