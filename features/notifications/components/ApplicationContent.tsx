import { ApplicationNotification } from "../types/notificationsData";

const ApplicationContent = ({
  applications,
}: {
  applications: ApplicationNotification;
}) => {
  const {
    status,
    applicationTitle,
    applicationStatus,
    timestamp,
    applicationType,
  } = applications;
  return (
    <div className="transition-colors duration-100 ease-linear p-4 hover:bg-[#f7f9ff] cursor-pointer w-full">
      <div className="mx-4 divide-red-500 divider">
        <p className="text-sm text-gray-600 tracking-wide">
          <strong className="text-slate-900">{status}</strong>
          &nbsp; {applicationTitle}
          {status === "Status Update" && status && (
            <strong>{applicationStatus}</strong>
          )}
        </p>
        <p className="text-sm tracking-wide text-gray-600">
          {timestamp} • {applicationType}
        </p>
      </div>
    </div>
  );
};

export default ApplicationContent;
