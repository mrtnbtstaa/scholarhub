import { useForm } from "react-hook-form"
import { LoginInput, loginSchema } from "../schema/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../api/auth.api"
import { ApiResponse } from "@/types/api/api.response"
import { LoginResponse } from "../types/auth-response.types"
import { AxiosError } from "axios"
import showToast from "@/lib/toast/show.toast"
import { useRouter } from "next/navigation"
import { routes } from "@/lib/constants/routes"

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
        mutationFn: loginUser,
        onSuccess: (data) => {
            showToast({message: data.message, type: "success"})
            router.push(routes.student.dashboard)
        },
        onError(error){
            showToast({message: error.response?.data.message ?? "Something went wrong", type: "error"})
        }
    })

    return {
        form,
        onSubmit: form.handleSubmit((data) => mutation.mutate(data)),
        isPending: mutation.isPending,
        error: form.formState.errors,
    }

}