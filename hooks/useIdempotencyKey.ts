import { useRef } from "react";

// One idempotency key per registration operation.
// Re-renders do not change the key.
// A new key is generated after a successful registration.
export const useIdempotencyKey = () => {
  const keyRef = useRef(crypto.randomUUID());

  const regenerate = () => {
    keyRef.current = crypto.randomUUID();
  };

  return {
    key: keyRef,
    regenerate,
  };
};