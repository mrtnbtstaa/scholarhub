import { create } from "zustand";

interface NotificationState {
  isNotificationOpen: boolean;
  action: {
    toggleNotification: (value: boolean) => void;
  };
}

export const useNotificationDropdownStore = create<NotificationState>()(
  (set) => ({
    isNotificationOpen: false,
    action: {
      toggleNotification: (value) => set({ isNotificationOpen: !value }),
    },
  }),
);
