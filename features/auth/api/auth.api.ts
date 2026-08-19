import { RegisterInput } from "../schema/register.schema";
import { LoginInput } from "../schema/login.schema";
import { axiosClient } from "@/lib/axios/axios.client";
import { ENDPOINTS } from "@/lib/constants/endpoints";
import { ApiResponse } from "@/types/api/api.response";
import { LoginResponse } from "../types/auth-response.types";
import { ForgotPasswordInput } from "../schema/forgot-password.schema";
import { ResetPasswordInput } from "../schema/reset-password.schema";


export const register = async (input: RegisterInput, idempotencyKey: string) : Promise<ApiResponse<null>> => 
    ((await axiosClient.post(ENDPOINTS.client.auth.register, input, {headers: {"Idempotency-Key": idempotencyKey}})).data)

export const login = async (input: LoginInput) : Promise<ApiResponse<LoginResponse>> => 
    ((await axiosClient.post(ENDPOINTS.client.auth.login, input)).data)

export const logout = async () : Promise<ApiResponse<never>> => 
    ((await axiosClient.post(ENDPOINTS.client.auth.logout)).data)

export const forgotPassword = async (input: ForgotPasswordInput, idempotencyKey: string) : Promise<ApiResponse<never>> => 
    ((await axiosClient.post(ENDPOINTS.client.auth.forgotPassword, input, {headers: {"Idempotency-Key": idempotencyKey}})).data)

export const resetPassword = async (input: ResetPasswordInput, idempotencyKey: string) : Promise<ApiResponse<never>> => 
    ((await axiosClient.patch(ENDPOINTS.client.auth.resetPassword, input, {headers: {"Idempotency-Key": idempotencyKey}})).data)