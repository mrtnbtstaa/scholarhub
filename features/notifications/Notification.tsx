import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/helpers/cn";
import { useNotificationDropdownStore } from "@/store/useNotificationDropdownStore";
import Heading from "@/components/shared/Heading/Heading";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import NotificationList from "./components/NotificationList";
import { NoticationLabel } from "./types/notificationsData";
import { capitalize } from "@/lib/helpers/utils";


const notificationBtns: NoticationLabel[] = [
  { label: "general" },
  { label: "applications" },
  { label: "deadlines" },
  { label: "messages" },
];

const Notification = () => {
  const isNotificationOpen = useNotificationDropdownStore(
    (state) => state.isNotificationOpen,
  );
  const [currentActiveNotification, setActiveNotification] = useState<
    NoticationLabel | string
  >("general");
  return (
    <Card
      variants="custom"
      as="header"
      className={cn(
        "absolute bg-white border shadow-md shadow-slate-200 md:top-18.5 top-18 overflow-hidden border-primary-border z-100 duration-50 ease-linear rounded-none w-fit md:right-44 right-12",
        isNotificationOpen ? "block" : "hidden",
      )}
    >
      <Heading className="text-lg tracking-wider mx-4 my-4">
        Notifications
      </Heading>
      <div className="mt-4 flex items-start justify-start gap-4 mx-4">
        {notificationBtns.map(({ label }) => (
          <Button
            key={label}
            onClick={() => setActiveNotification(label)}
            variants="custom"
            className={cn(
              "py-1 px-3 text-sm rounded-full transition-colors duration-100 ease-linear",
              currentActiveNotification === label
                ? "bg-btn-primary text-white"
                : "text-slate-900 border-primary-border border",
            )}
          >
            {capitalize(label)}
          </Button>
        ))}
      </div>
      <NotificationList currentActiveNotification={currentActiveNotification} />
    </Card>
  );
};

export default Notification;
