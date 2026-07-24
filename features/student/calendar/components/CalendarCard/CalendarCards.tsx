import { MdCalendarMonth, MdWarning } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import CalendarCard from "./CalendarCard";

const CalendarCards = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 grid-rows-1 gap-4">
      <CalendarCard icon={MdCalendarMonth} title="Upcoming Events" count={12} />
      <CalendarCard icon={MdWarning} title="App Deadlines" count={12} variants="app-deadline" />
      <CalendarCard icon={IoMdDocument} title="Docs Deadlines" count={12} variants="docs-deadline" />
      <CalendarCard icon={MdWarning} title="Interviews" count={12} variants="interviews" />
      <CalendarCard icon={MdWarning} title="Personal Goals" count={12} variants="personal goals" />
    </div>
  );
};

export default CalendarCards;
