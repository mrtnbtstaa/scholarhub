import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoginResponse } from "../types/auth-response.types";
import { ApiResponse } from "@/types/api/api.response";
import { AxiosError } from "axios";
import showToast from "@/lib/toast/show.toast";
import { routes } from "@/lib/constants/routes";
import { useRef } from "react";
import { LoginInput, loginSchema } from "../schema/login.schema";
import { forgotPassword, login, logout, register, resetPassword } from "../api/auth.api";
import { RegisterInput, registerSchema } from "../schema/register.schema";
import { ForgotPasswordInput, forgotPasswordSchema } from "../schema/forgot-password.schema";
import { ResetPasswordInput, resetPasswordSchema } from "../schema/reset-password.schema";

export const useLogin = () => {

    const router = useRouter();

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const mutation = useMutation<
    ApiResponse<LoginResponse>,
    AxiosError<ApiResponse<never>>,
    LoginInput
    >({
        mutationFn: login,
        onSuccess: (data) => {
          // Show toast success
          showToast({message: data.message, type: "success"})
          // Reset the forms
          form.reset()
          // Redirect to dashboard after successfully logged in
          router.push(routes.student.dashboard)
        },
        onError(error){
          // Show toast error
          showToast({message: error.response?.data.message ?? "Unathenticated", type: "error"})
        }
    })

    const onSubmit = (data: LoginInput) => mutation.mutate(data);

    return {
        form,
        handleSubmit: form.handleSubmit(onSubmit),
        isPending: mutation.isPending,
        error: form.formState.errors,
    }

}

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
    mutationFn: (data) => register(data, idempotencyKey.current),
    onSuccess: (response) => {
      // Show the toast success
      showToast({message: response.message, type: "success"});
      // Generate new idempotency key on success
      idempotencyKey.current = crypto.randomUUID()
      // Reset the forms
      form.reset()
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


export const useLogout = () => {

    const router = useRouter();

    const form = useForm({})

    const mutation = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<never>>
    >({
        mutationFn: logout,
        onSuccess: (data) => {
          // Show toast success
          showToast({message: data.message, type: "success"});
          // Reset the forms
          form.reset()
          // Redirect to login after successfully logged out
          router.push(routes.public.login)
        },
        onError(error) {
          // Show toast error
          showToast({message: error.response?.data.message ?? "Unknown message", type: "error"})
        },
    })

    const onSubmit = () => mutation.mutate();

    return {
        form,
        handleSubmit: form.handleSubmit(onSubmit),
        isPending: mutation.isPending,
        error: form.formState.errors
    }

}

export const useForgotPassword = () => {

  const form = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  })


  // One key for the current registration operation
  // Normal re-renders the key will not change unless page refresh causes the component to mount again then only the key will change.
  const idempotencyKey = useRef<string>(crypto.randomUUID())

  const mutation = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<never>>,
    ForgotPasswordInput
  >({
    mutationFn: async (data) => forgotPassword(data, idempotencyKey.current),
    onSuccess: (data) => {
      // Show toast success
      showToast({message: data.message, type: "success"})
      // Generate new idempotency key on success
      idempotencyKey.current = crypto.randomUUID();
      // Reset the forms
      form.reset()
    },
    onError: (error) => {
      // Show toast error
      showToast({message: error.response?.data.message ?? "Unknown message", type: "error"})
    }
  })

  const onSubmit = (data: ForgotPasswordInput) => mutation.mutate(data);

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending: mutation.isPending,
    error: form.formState.errors
  }

}

export const useResetPassword = () => {

  const params = useSearchParams()

  const form = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      uid: params.get("uid")?.toString(),
      token: params.get("token")?.toString(),
      new_password: "",
      confirm_password: ""
    }
  })

  // One key for the current registration operation
  // Normal re-renders the key will not change unless page refresh causes the component to mount again then only the key will change.
  const idempotencyKey = useRef<string>(crypto.randomUUID())

  const mutation = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<never>>,
    ResetPasswordInput
  >({
    mutationFn: async (data) => resetPassword(data, idempotencyKey.current),
    onSuccess: (data) => {
      // Show toast success
      showToast({message: data.message, type: "success"})
      // Generate new idempotency key on success
      idempotencyKey.current = crypto.randomUUID();
      // Reset the forms
      form.reset()
    },
    onError: (error) => {
      // Show toast error
      showToast({message: error.response?.data.message ?? "Unknown message", type: "error"})
    }
  })

  const onSubmit = (data: ResetPasswordInput) => mutation.mutate(data);

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending: mutation.isPending,
    error: form.formState.errors
  }

}