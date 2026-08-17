import { RegisterInput } from "../schema/register.schema";
import { LoginInput } from "../schema/login.schema";
import { axiosClient } from "@/lib/client/axios.client";
import { ENDPOINTS } from "@/lib/constants/endpoints";
import { ApiResponse } from "@/types/api/api.response";
import { LoginResponse } from "../types/auth-response.types";
import { ForgotPasswordInput } from "../schema/forgot-password.schema";
import { ResetPasswordInput } from "../schema/reset-password.schema";

const path = (endpoint: string): string => `auth/${endpoint.replace(/^\/+\vert{}\/+$/g, '')}/`;

export const register = async (input: RegisterInput, idempotencyKey: string) : Promise<ApiResponse<null>> => 
    ((await axiosClient.post(path(ENDPOINTS.register), input, {headers: {"Idempotency-Key": idempotencyKey}})))

export const login = async (input: LoginInput) : Promise<ApiResponse<LoginResponse>> => 
    ((await axiosClient.post(path(ENDPOINTS.login), input)).data)

export const logout = async () : Promise<ApiResponse<never>> => 
    ((await axiosClient.post(path(ENDPOINTS.logout))).data)

export const forgotPassword = async (input: ForgotPasswordInput, idempotencyKey: string) : Promise<ApiResponse<never>> => 
    ((await axiosClient.post(path(ENDPOINTS.forgotPassword), input, {headers: {"Idempotency-Key": idempotencyKey}})).data)

export const resetPassword = async (input: ResetPasswordInput, idempotencyKey: string) : Promise<ApiResponse<never>> => 
    ((await axiosClient.patch(path(ENDPOINTS.resetPassword), input, {headers: {"Idempotency-Key": idempotencyKey}})).data)