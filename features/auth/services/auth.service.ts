import { LoginInput, loginSchema } from "../schema/login.schema";
import { RegisterInput, registerSchema } from "../schema/register.schema";
import { genericService } from "@/services/generic.service";
import { LoginResponse, RefreshAndAccessTokenResponse } from "../types/auth-response.types";
import { ServiceResponse } from "@/types/service/service.response";
import { RefreshInput, refreshSchema } from "../schema/refresh.schema";

export const register = async (input: RegisterInput, idempotencyKey: string | null) : Promise<ServiceResponse<null>> => {
    return genericService(
        registerSchema,
        input,
        {
            method: "POST",
            url: "v1/auth/register/",
            headers: {
                "Content-Type": "application/json",
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
            headers: {
                "Content-Type": "application/json"
            }
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
            headers: {
                "Content-Type": "application/json"
            },
        }
    )
}