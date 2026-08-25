import { LoginInput, loginSchema } from "../schema/login.schema";
import { RegisterInput, registerSchema } from "../schema/register.schema";
import { genericService } from "@/services/generic.service";
import { LoginResponse, RefreshAndAccessTokenResponse } from "../types/auth-response.types";
import { ServiceResponse } from "@/types/service/service.response";
import { RefreshInput, refreshSchema } from "../schema/refresh.schema";
import { ForgotPasswordInput, forgotPasswordSchema } from "../schema/forgot-password.schema";
import { ResetPasswordInput, resetPasswordSchema } from "../schema/reset-password.schema";

export const register = async (input: RegisterInput, idempotencyKey: string | null) : Promise<ServiceResponse<null>> => {
    return genericService(
        registerSchema,
        input,
        {
            method: "POST",
            url: "v1/auth/register/",
            headers: {
                "Idempotency-Key": idempotencyKey
            },
        }
    )
}
    
export const login = async (input: LoginInput) : Promise<ServiceResponse<LoginResponse>> => (
    genericService(
        loginSchema,
        input,
        {
            method: "POST",
            url: "v1/auth/login/",
        }
    )
)

export const logout = async (input: RefreshInput) : Promise<ServiceResponse<null>> => {
    return genericService(
        refreshSchema,
        input,
        {
            method: "POST",
            url: "v1/auth/logout/",
            headers: {
                "Content-Type": "application/json"
            },
        }
    )
}

export const refresh = async (input: RefreshInput) : Promise<ServiceResponse<RefreshAndAccessTokenResponse>> => {
    return genericService(
        refreshSchema,
        input,
        {
            method: "POST",
            url: "v1/auth/refresh/",
        }
    )
}

export const logout = async (input: RefreshInput) : Promise<ServiceResponse<null>> => {
    return genericService(
        refreshSchema,
        input,
        {
            method: "POST",
            url: "v1/auth/logout/",
        }
    )
}

export const forgotPassword = async (input: ForgotPasswordInput, idempotencyKey: string | null) : Promise<ServiceResponse<null>> => {
    return genericService(
        forgotPasswordSchema,
        input,
        {
            method: "POST",
            url: "v1/auth/forgot-password/",
            headers: {"Idempotency-Key": idempotencyKey}
        }
    )
}

export const resetPassword = async (input: ResetPasswordInput, idempotencyKey: string | null) : Promise<ServiceResponse<null>> => {
    return genericService(
        resetPasswordSchema,
        input,
        {
            method: "PATCH",
            url: "v1/auth/reset-password/",
            headers: {"Idempotency-Key": idempotencyKey}
        }
    )
}