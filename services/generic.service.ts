import { serverApi } from "@/lib/axios/axios.server";
import { ApiResponse } from "@/types/api/api.response";
import { ServiceResponse } from "@/types/service/service.response";
import axios, { AxiosRequestConfig } from "axios";
import z from "zod";

export const genericService = async <T = null, M = null> (
    schema: z.ZodType,
    input: unknown,
    config: AxiosRequestConfig,

): Promise<ServiceResponse<T, M>> => {

    const result = schema.safeParse(input)

    if(!result.success){
        console.log("Not success!");
        const {fieldErrors, formErrors} = z.flattenError(result.error);
        return {
            success: false,
            errors: fieldErrors,
            errorCode: "VALIDATION_ERRORS",
            message: formErrors[0] ?? "Validation failed",
            status: 400,
        }
    }

    try{

        const response = await serverApi.request<ApiResponse<T, M>>({
            ...config,
            data: result.data
        })

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
        
    }catch(error){
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