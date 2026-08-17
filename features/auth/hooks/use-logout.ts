import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { logoutUser } from "../api/auth.api"
import { ApiResponse } from "@/types/api/api.response"
import { AxiosError } from "axios"
import showToast from "@/lib/toast/show.toast"
import { useRouter } from "next/navigation"
import { routes } from "@/lib/constants/routes"

export const useLogout = () => {

    const router = useRouter();

    const form = useForm({})

    const mutation = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<never>>
    >({
        mutationFn: logoutUser,
        onSuccess: (data) => {
            console.log("qweqweqwe")
            // Show toast success
            showToast({message: data.message, type: "success"});
            // Redirect to login after successfully logged out
            router.push(routes.public.login)
        },
        onError(error) {
            console.log("qweqweqwe", error, error.response?.data.message)
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