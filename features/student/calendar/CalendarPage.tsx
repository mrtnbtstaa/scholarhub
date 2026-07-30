import Main from "@/components/shared/Section/Main";
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
      <Main>
        <CalendarHeader />
        <CalendarBanner />
        <CalendarCards />
        <Calendar />
      </Main>
    </>
  );
};

export default CalendarPage;
