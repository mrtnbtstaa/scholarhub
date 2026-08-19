import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginResponse } from "../types/auth-response.types";
import { ApiResponse } from "@/types/api/api.response";
import { AxiosError } from "axios";
import showToast from "@/lib/toast/show.toast";
import { routes } from "@/lib/constants/routes";
import { LoginInput, loginSchema } from "../schema/login.schema";
import { forgotPassword, login, logout, register, resetPassword } from "../api/auth.api";
import { RegisterInput, registerSchema } from "../schema/register.schema";
import { ForgotPasswordInput, forgotPasswordSchema } from "../schema/forgot-password.schema";
import { ResetPasswordInput, resetPasswordSchema } from "../schema/reset-password.schema";
import { USER_ROLE } from "@/lib/constants/user-role";
import { useAuthStore } from "../store/authStore";
import { useIdempotencyKey } from "@/hooks/useIdempotencyKey";

export const useLogin = () => {

  const setAuth = useAuthStore((state) => state.setAuth);

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
    onSuccess: (response) => {

      if(!response.success) return;

      // Show toast success
      showToast({message: response.message, type: "success"})

      // Destructure the response data
      const {id, email, role} = response.data;
        
      setAuth({
        id: id,
        email: email,
        role: role,
        profile: null
      })

      // Reset the forms
      form.reset()
      
      const redirectRoute = role === USER_ROLE.ADMIN 
        ? routes.admin.dashboard 
        : routes.student.dashboard;

      router.push(redirectRoute);
    },
    onError(error){
      console.log(error.response?.data.message)
      // Show toast error
      showToast({message: error.response?.data.message ?? "Unauthenticated", type: "error"})
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

  const router = useRouter();

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      role: USER_ROLE.STUDENT
    },
  });


  const {key, regenerate} = useIdempotencyKey();

  const mutation = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<never>>,
    RegisterInput
  >({
    mutationFn: (data) => register(data, key.current),
    onSuccess: (response) => {
      // Show the toast success
      showToast({message: response.message, type: "success"});

      // Prepare a new key for the next registration operation.
      regenerate()

      // Reset the forms
      form.reset()

      // Redirect to login after successfully registering an account
      router.push(routes.public.login)
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
  const queryClient = useQueryClient();
  const removeAuth = useAuthStore((state) => state.removeAuth);

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

        // Remove client-side authentication state
        removeAuth();

        // Clear cached server state from the previous session
        queryClient.clear();

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

  const {key, regenerate} = useIdempotencyKey();

  const mutation = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<never>>,
    ForgotPasswordInput
  >({
    mutationFn: async (data) => forgotPassword(data, key.current),
    onSuccess: (data) => {
      // Show toast success
      showToast({message: data.message, type: "success"})

      // Prepare a new key for the next registration operation.
      regenerate()
      
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

  const {key, regenerate} = useIdempotencyKey();

  const mutation = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<never>>,
    ResetPasswordInput
  >({
    mutationFn: async (data) => resetPassword(data, key.current),
    onSuccess: (data) => {
      // Show toast success
      showToast({message: data.message, type: "success"})

      // Prepare a new key for the next registration operation.
      regenerate()

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