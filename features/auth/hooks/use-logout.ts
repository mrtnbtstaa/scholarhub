import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { AxiosError } from "axios"
import { logoutUser } from "../api/auth.api"
import { ApiResponse } from "@/types/api/api.response"
import showToast from "@/lib/toast/show.toast"
import { routes } from "@/lib/constants/routes"

export const useLogout = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation<ApiResponse<null>, AxiosError<ApiResponse<never>>>({
    mutationFn: logoutUser,

    onSettled: () => {
      queryClient.clear()
      router.replace(routes.public.login)
    },

    onError: (error) => {
      showToast({ message: error.response?.data.message ?? "Logout failed", type: "error" })
    },
  })

  return { logout: () => mutation.mutate(), isPending: mutation.isPending }
}