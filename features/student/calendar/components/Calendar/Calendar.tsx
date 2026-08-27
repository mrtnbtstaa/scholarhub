"use client";

import CalendarTags from "../CalendarTag/CalendarTag";
import CustomComponentEvent from "../ComponentEvent/CustomComponentEvent";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import { useRef, useState } from "react";
import FullCalendar, { CalendarRef, EventInput } from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import TimeGridPlugin from "@fullcalendar/react/timegrid";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/monarch/theme.css";
import "@fullcalendar/react/themes/monarch/palettes/purple.css";
import { useRightSidebarStore } from "../../store/useRightSidebarStore";
import { Card } from "@/components/ui/card";
import { useListCalendarEvent } from "../../hooks/use-events";

const sampleEvents: EventInput[] = [
  {
    id: "1",
    title: "Sprint Planning",
    start: "2026-07-20T10:00:00",
    end: "2026-07-20T11:30:00",
    extendedProps: { type: "deadline" },
  },
  {
    id: "2",
    title: "SDLC",
    type: "interview",
    start: "2026-07-25T10:00:00",
    end: "2026-07-25T11:30:00",
    extendedProps: { type: "document" },
  },
];

const Calendar = () => {

  const { setSidebar, setId } = useRightSidebarStore((state) => state.action);
  const calendarRef = useRef<CalendarRef>(null);
  const [currentView, setCurrentView] = useState<"dayGridMonth" | "timeGridWeek" | "timeGridDay">("dayGridMonth");
  const [currentTitle, setCurrentTitle] = useState("");
  const { listCalendarEvents, handlePreviousMonth, handleNextMonth } =  useListCalendarEvent();

  return (
    <Card as="section" className="w-full p-4">
      <CalendarHeader
        calendarRef={calendarRef}
        currentView={currentView}
        setCurrentView={setCurrentView}
        currentTitle={currentTitle}
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
      />
      <CalendarTags />
      <Card className="mt-4 p-4 w-full" variants="custom">
        <FullCalendar
          ref={calendarRef}
          className="bg-transparent!"
          plugins={[themePlugin, dayGridPlugin, TimeGridPlugin]}
          initialView={currentView}
          headerToolbar={false}
          dayHeaderContent={(dayInfo) => {
            return (
              <div className="p-2">
                <span className="text-sm font-semibold tracking-wider">
                  {dayInfo.weekdayText}
                </span>
              </div>
            );
          }}
          datesSet={(dateInfo) => setCurrentTitle(dateInfo.view.title)}
          events={listCalendarEvents}
          eventClick={(info) => {
            setId(info.event.id)
            info.jsEvent.preventDefault();
            setSidebar(true);
          }}
          eventContent={(eventInfo) => {
            return (
              <CustomComponentEvent
                title={eventInfo.event.title}
                type={eventInfo.event.extendedProps.type}
              />
            );
          }}
          dayCellDidMount={(info) => {
            info.el.classList.add(
              "hover:bg-[#e4efff]/50",
              "transition-colors",
              "duration-150",
              "cursor-pointer",
            );
          }}
        />
      </Card>
    </Card>
  );
};

export default Calendar;
