import { useAuthStore } from "@/features/auth/store/authStore";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export const useAuth = () => {
  // Returns false on the server/initial SSR, true on the client
  const hasHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,  // Client snapshot
    () => false  // Server snapshot
  );

  const user = useAuthStore((state) => state.user);

  return {
    user: hasHydrated ? user : null,
    hasHydrated,
  };
};