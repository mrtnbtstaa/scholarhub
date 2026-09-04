"use client";

import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Button from "@/components/ui/Button/Button";
import { MdAdd } from "react-icons/md";
import { useModalActions } from "@/store/useModalStore";

const CalendarHeader = () => {
  const { openModal } = useModalActions();
  return (
    <div className="w-full md:flex-row flex-col flex items-center justify-between">
      <PageHeader
        title="Calendar"
        description="Stay organized by tracking scholarship deadlines, personal milestones, document due dates, interviews, and reminder schedules—all in one calendar."
      />
      <Button
        aria-label="Open Event Button"
        className="p-2 whitespace-nowrap mb-4 md:w-auto w-full"
        suffixIcon={MdAdd}
        onClick={() => openModal("create-event")}
      >
        Add Personal Event
      </Button>
    </div>
  );
};

export default CalendarHeader;
