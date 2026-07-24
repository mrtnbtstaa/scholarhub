import Banner from "@/components/shared/Banner/Banner";

const CalendarBanner = () => {
  return (
    <Banner iconColor="text-[#006c49]" className="mb-4">
      <p className="tracking-wider text-md text-secondary">
        You have <strong>12 upcoming events</strong> this month, including 3
        application deadlines and 2 document submission reminders.
      </p>
    </Banner>
  );
};

export default CalendarBanner;
