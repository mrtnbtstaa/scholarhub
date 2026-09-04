import Main from "@/components/shared/Section/Main";
import CalendarCards from "./components/CalendarCard/CalendarCards";
import Calendar from "./components/Calendar/Calendar";
import CalendarBanner from "./components/CalendarBanner/CalendarBanner";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import CalendarHeader from "./components/CalendarPageHeader/CalendarHeader";
import CalendarWidgetContainer from "./components/CalendarWidget/CalendarWidgetContainer";

const CalendarPage = () => {
  return (
    <>
      <RightSidebar />
      <Main>
        <CalendarHeader />
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1 space-y-4">
            <CalendarBanner />
            <CalendarCards />
            <Calendar />
          </div>
          <CalendarWidgetContainer />
        </div>
      </Main>
    </>
  );
};

export default CalendarPage;
