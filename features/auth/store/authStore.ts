import { BaseUser } from "@/types/models/user";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
