import { BaseUser } from "@/types/models/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: BaseUser | null;
}

interface AuthAction {
  setAuth: (user: BaseUser) => void;
  removeAuth: () => void;
}

const initialState: AuthState = {
  user: null,
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      ...initialState,
      setAuth: (user) => set({ user }),
      removeAuth: () => set(initialState),
    }),
    {
      name: "scholarhub-auth-storage",
      storage: {
        getItem(name) {
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem(name, value) {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem(name) {
          sessionStorage.removeItem(name);
        },
      },
    },
  ),
);
