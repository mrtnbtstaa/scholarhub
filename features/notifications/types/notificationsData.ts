export type NoticationLabel = {
  label: "general" | "applications" | "deadlines" | "messages";
};

interface BaseNotification {
  id: string;
  isRead: boolean;
}

type ApplicationNotificationStatus =
  | "Application Submitted"
  | "Status Update"
  | "Document Verified";

export interface ApplicationNotification extends BaseNotification {
  type: "applications"
  status: ApplicationNotificationStatus;
  applicationTitle: string;
  timestamp: string;
  applicationType: string;
  applicationStatus?: string;
}

export interface DeadlineNotification extends BaseNotification {
  type: "deadlines";
  status: string;
  deadlineTitle: string;
  timestamp: string;
  isUrgent?: boolean;
}

export interface MessageNotification extends BaseNotification {
  type: "messages";
  sender: string;
  subject: string;
  previewOrMeta: string;
  isNew?: boolean;
}

// Discriminated union types
export type NotificationData =
  | ApplicationNotification
  | DeadlineNotification
  | MessageNotification;
