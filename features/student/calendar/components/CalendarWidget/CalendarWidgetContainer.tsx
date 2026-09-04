import { FC } from "react";
import { TaskWidget } from "./TaskWidget"

interface CalendarWidgetContainerProps {
}

const CalendarWidgetContainer: FC<CalendarWidgetContainerProps> = () => {
  return (
    <div className="w-fit space-y-4 sticky top-24 self-start p-1 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <TaskWidget /> 
    </div>
  );
};

export default CalendarWidgetContainer;

