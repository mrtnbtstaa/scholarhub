import Divider from "@/components/shared/Divider/Divider";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import Notification from "./components/NotificationPreferences/Notification";
import SecurityAndAccess from "./components/SecurityAccess/SecurityAndAccess";
import DataExport from "./components/DataExport/DataExport";
import DangerZone from "./components/DangerZone/DangerZone";

const SettingsPage = () => {
  return (
    <Main>
      <PageHeader
        title="Settings"
        description="Manage your account preferences, notifications, privacy, security, and your personalized application experience."
      />
      <Divider />
        <div className="flex flex-col items-start gap-4 w-full mt-4">
          <Notification />
          <SecurityAndAccess />
          <DataExport />
          <DangerZone />
        </div>
    </Main>
  );
};

export default SettingsPage;
