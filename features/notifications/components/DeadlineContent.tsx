import { DeadlineNotification } from "../types/notificationsData";

const DeadlineContent = ({deadlines}: {deadlines: DeadlineNotification}) => {
  const {isUrgent, deadlineTitle, timestamp, status} = deadlines;
  return (
    <div className="w-full p-4 cursor-pointer transition-colors duration-100 ease-linear hover:bg-[#f7f9ff]">
      <div className="mx-4">
        {/* Status Header */}
        <p className={`text-sm font-semibold ${isUrgent ? 'text-red-600' : 'text-slate-900'}`}>
          {status}
        </p>

        {/* Title */}
        <h4 className="text-base font-bold text-slate-900">
          {deadlineTitle}
        </h4>

        {/* Timestamp / Details */}
        <p className="text-sm tracking-wide text-gray-500">
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default DeadlineContent;