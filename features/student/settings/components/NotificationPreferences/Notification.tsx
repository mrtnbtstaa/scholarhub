import Card from "@/components/shared/Card/Card";
import NotificationCard from "./NotificationCard";
import Header from "../Header/Header";

const Notification = () => {
  return (
    <Card as="section" className="w-full p-4" id="Notification Preferences">
      <Header title="Notification Preferences" hasRightContent={true} />
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 w-full mt-4">
        <NotificationCard
          title="Email Notifications"
          description="Receive weekly digests and important alerts via email."
        />
        <NotificationCard
          title="In-App Notifications"
          description="Real-time alerts while you're using ScholarHub."
        />
        <NotificationCard
          title="Deadline Reminders"
          description="Get notified 7 days before application deadlines."
        />
        <NotificationCard
          title="Scholarship Recommendations"
          description="AI-curated matches based on your profile."
        />
      </div>
    </Card>
  );
};

export default Notification;
