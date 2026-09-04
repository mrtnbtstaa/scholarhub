import { create } from "zustand";

export type ModalType =
  | "login"
  | "register"
  | "create-event"
  | "create-scholarship"
  | "";

export type ActiveModalType = Exclude<ModalType, "">;

interface ModalState {
  type: ModalType;
  data?: Record<string, unknown>;
  action: {
    openModal: (type: ModalType, data?: Record<string, unknown>) => void;
    closeModal: () => void;
  };
}

export const useModalStore = create<ModalState>((set) => ({
  type: "",
  data: undefined,
  action: {
    openModal: (type, data) => set({ type, data }),
    closeModal: () => set({ type: "", data: undefined }),
  },
}));

export const useModalActions = () => useModalStore((state) => state.action);

export const useModalType = () => useModalStore((state) => state.type);

export const useIsModalOpen = (type: ActiveModalType) =>
  useModalStore((state) => state.type === type);

export const useModalData = <T = Record<string, unknown>>() =>
  useModalStore((state) => state.data as T | undefined);
