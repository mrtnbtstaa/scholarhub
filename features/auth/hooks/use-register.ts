import { Register, useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/auth.api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterInput, registerSchema } from "../schema/register.schema";
import showToast from "@/lib/toast/show.toast";
import { ApiResponse } from "@/types/api/api.response";
import { AxiosError } from "axios";
import { useRef } from "react";

export const useRegister = () => {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  // One key for the current registration operation
  // Normal re-renders the key will not change unless page refresh causes the component to mount again then only the key will change.
  const idempotencyKey = useRef<string>(crypto.randomUUID())

  const mutation = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<never>>,
    RegisterInput
  >({
    mutationFn: (data) => registerUser(data, idempotencyKey.current),
    onSuccess: (response) => {
      // Show the toast success
      showToast({message: response.message, type: "success"});
      // Generate new idempotency key on success
      idempotencyKey.current = crypto.randomUUID()
    },
    onError(error) {
      // Show the toast error
      showToast({ message: error.response?.data.message ?? "Something went wrong.", type: "error" });
    },
  });

  const onSubmit = (data: RegisterInput) => mutation.mutate(data);

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending: mutation.isPending,
    error: form.formState.errors,
  };
};
