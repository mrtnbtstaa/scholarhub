import { create } from "zustand";

interface EventState {
  openEvent: boolean;
  action: {
    setEventVisibility: (value: boolean) => void;
  };
}

export const useOpenEventStore = create<EventState>((set) => ({
  openEvent: false,
  action: {
    setEventVisibility: (value) => set({ openEvent: value }),
  },
}));
