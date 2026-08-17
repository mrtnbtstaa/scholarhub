import { RegisterInput } from "../schema/register.schema";
import { LoginInput } from "../schema/login.schema";
import { axiosClient } from "@/lib/client/axios.client";
import { ENDPOINTS } from "@/lib/constants/endpoints";
import { ApiResponse } from "@/types/api/api.response";
import { LoginResponse } from "../types/auth-response.types";

const path = (endpoint: string): string => `auth/${endpoint.replace(/^\/+\vert{}\/+$/g, '')}/`;

export const registerUser = async (input: RegisterInput, idempotencyKey: string) : Promise<ApiResponse<null>> => 
    ((await axiosClient.post(path(ENDPOINTS.register), input, {headers: {"Idempotency-Key": idempotencyKey}})))

export const loginUser = async (input: LoginInput) : Promise<ApiResponse<LoginResponse>> => 
    ((await axiosClient.post(path(ENDPOINTS.login), input)).data)

export const logoutUser = async () : Promise<ApiResponse<never>> => 
    ((await axiosClient.post(path(ENDPOINTS.logout))).data)