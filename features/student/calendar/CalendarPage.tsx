import Section from "@/components/shared/Section/Section";
import CalendarCards from "./components/CalendarCard/CalendarCards";
import Calendar from "./components/Calendar/Calendar";
import CalendarBanner from "./components/CalendarBanner/CalendarBanner";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import AddNewEvent from "./components/AddNewEvent/AddNewEvent";
import CalendarHeader from "./components/CalendarPageHeader/CalendarHeader";

const CalendarPage = () => {
  return (
    <>
      <AddNewEvent />
      <RightSidebar />
      <Section>
        <CalendarHeader />
        <CalendarBanner />
        <CalendarCards />
        <Calendar />
      </Section>
    </>
  );
};

export default CalendarPage;
