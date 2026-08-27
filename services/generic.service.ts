import { serverApi } from "@/lib/axios/axios.server";
import { routes } from "@/lib/constants/_routes";
import { ApiResponse } from "@/types/api/api.response";
import { ServiceResponse } from "@/types/service/service.response";
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import z from "zod";

const whiteListed = [
    routes.public.forgotPassword,
    routes.public.login,
    routes.public.register,
    routes.public.resetPassword,
]

const buildServerRequestConfig = async (
    config: AxiosRequestConfig,
    data: unknown 
): Promise<AxiosRequestConfig<unknown, unknown>> => {

    const cookieStore = await cookies();

    const accessToken = cookieStore.get("access_token")?.value;

    const requestUrl = config.url ?? "";

    const isPublicRoute = whiteListed.some((route) => 
        requestUrl.startsWith(route)
    )

    const requestHeaders = new Headers();

    // Copy existing headers
    if(config.headers){
        const existingHeaders = config.headers as Record<string, string>

        Object.entries(existingHeaders).forEach(([key, value]) => {
            requestHeaders.set(key, value)
        })
    }

    // Automatically inject Authorization from the protected routes
    if(!isPublicRoute && accessToken){
        requestHeaders.set("Authorization", `Bearer ${accessToken}`);
    }

    const _config: AxiosRequestConfig = {
        ...config,
        headers: Object.fromEntries(requestHeaders.entries()),
        data: data
    }

    return _config;

}

export const genericService = async <T = null, M = null> (
    schema: z.ZodType,
    input: unknown,
    config: AxiosRequestConfig,

): Promise<ServiceResponse<T, M>> => {

  const result = schema.safeParse(input);

    if(!result.success){
        const {fieldErrors, formErrors} = z.flattenError(result.error);
        return {
            success: false,
            errors: fieldErrors,
            errorCode: "VALIDATION_ERRORS",
            message: formErrors[0] ?? "Validation failed",
            status: 400,
        }
    }

    const requestConfig = await buildServerRequestConfig(config, result.data);

    try{

        const response = await serverApi.request<ApiResponse<T, M>>(requestConfig)

    const apiData = response.data;

        // Success response
        if(apiData.success){
            return {
                success: apiData.success,
                message: apiData.message,
                data: apiData.data,
                meta: apiData.meta,
                status: response.status,
            }
        }
        // Error response
        return {
            success: apiData.success,
            message: apiData.message,
            errors: apiData.errors,
            errorCode: apiData.error_code ?? "UNKNOWN_ERROR",
            meta: apiData.meta,
            status: response.status,
        };
        
    } catch(error){
        if(axios.isAxiosError<ApiResponse<never, M>>(error)){
            const errorResponse = error.response?.data;
            return {
                success: false,
                message: errorResponse?.message ?? error.message,
                errors: errorResponse?.success === false ? errorResponse.errors : {},
                meta: errorResponse?.meta,
                errorCode: errorResponse?.success === false ? errorResponse.error_code : "UNKNOWN_CODE",
                status: error.response?.status ?? 500
            }
        }
        throw error;
    }
  } 
