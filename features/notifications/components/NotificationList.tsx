import { ComponentType, useMemo } from "react";
import { ApplicationNotification, DeadlineNotification, MessageNotification, NoticationLabel, NotificationData } from "../types/notificationsData";
import ApplicationContent from "./ApplicationContent";
import DeadlineContent from "./DeadlineContent";
import MessageContent from "./MessagesContent";

// Mapping outside component to prevent recreating components on render
const NOTIFICATION_COMPONENTS: Record<
  string,
  ComponentType<{ notification: NotificationData }>
> = {
  applications: ({notification}) => <ApplicationContent applications={notification as ApplicationNotification} />,
  deadlines: ({notification}) => <DeadlineContent deadlines={notification as DeadlineNotification} />,
  messages: ({notification}) => <MessageContent messages={notification as MessageNotification} />
};

const notificationList: NotificationData[] = [
  {
    id: "1",
    type: "applications",
    isRead: false,
    timestamp: "Just now",
    status: "Application Submitted",
    applicationTitle: "Global Leaders Grant",
    applicationType: "Application Portal",
  },
  {
    id: "4",
    type: "applications",
    isRead: false,
    timestamp: "Just now",
    status: "Document Verified",
    applicationTitle: "Financial Aid Statement",
    applicationType: "Compliance",
  },
  {
    id: "2",
    type: "messages",
    isRead: false,
    sender: "Scholarship Board",
    subject: "Interview Invitation for Global Scholars",
    previewOrMeta:
      "Hello Alex, we would like to invite you for a virtual interview...",
  },
  {
    id: "3",
    isRead: false,
    type: "deadlines",
    status: "Deadline Extended",
    deadlineTitle: "Arts & Humanity Grant",
    timestamp: "New Deadline: Oct 15, 2026",
  },
];

const NotificationList = ({
  currentActiveNotification,
}: {
  currentActiveNotification: NoticationLabel | string;
}) => {

  const filteredNotifications = useMemo(() => {
    const activeFilters = String(currentActiveNotification)
    if (activeFilters === "general") return notificationList;
    return notificationList.filter(
      (notification) => notification.type === activeFilters,
    );
  }, [currentActiveNotification]);

  return (
    <div className="flex flex-col items-start gap-4 w-full mt-4">
      {filteredNotifications && filteredNotifications.map((notification) => {
        const Component = NOTIFICATION_COMPONENTS[notification.type];

        if(!Component) return null; // Gracefully fallback for unknown types

        return <Component key={notification.id} notification={notification} />
      })}
    </div>
  );
};

export default NotificationList;
