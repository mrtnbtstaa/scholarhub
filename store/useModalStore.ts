import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  action: {
    setModalVisibility: (value: boolean) => void;
  };
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  action: {
    setModalVisibility: (value) => set({ isModalOpen: value }),
  },
}));
