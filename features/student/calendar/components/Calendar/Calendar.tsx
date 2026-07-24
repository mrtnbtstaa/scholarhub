"use client";

import Card from "@/components/shared/Card/Card";
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
  const { setSidebar } = useRightSidebarStore((state) => state.action);

  const calendarRef = useRef<CalendarRef>(null);
  const [currentView, setCurrentView] = useState<
    "dayGridMonth" | "timeGridWeek" | "timeGridDay"
  >("dayGridMonth");
  const [currentTitle, setCurrentTitle] = useState("");

  return (
    <Card as="section" className="mt-4 p-4">
      <CalendarHeader
        calendarRef={calendarRef}
        currentView={currentView}
        setCurrentView={setCurrentView}
        currentTitle={currentTitle}
      />
      <CalendarTags />
      <Card className="mt-4 p-4 w-full" variants="custom">
        <FullCalendar
          ref={calendarRef}
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
          events={sampleEvents}
          eventClick={(info) => {
            info.jsEvent.preventDefault();
            setSidebar(true);
          }}
          eventContent={(eventInfo) => {
            const props = eventInfo.event.extendedProps as {
              type?: "document" | "interview" | "goal" | "deadline";
            };
            return (
              <CustomComponentEvent
                title={eventInfo.event.title}
                type={props.type}
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
