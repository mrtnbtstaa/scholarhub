import { ValidationErrors } from "../api/api.errors";

// Frontend contract
export interface BaseServiceResponse<M = null> {
    message: string;
    meta?: M;
    status: number;
}

export interface SuccessServiceResponse<T, M = null> extends BaseServiceResponse<M>{
    success: true;
    data: T;
}

export interface ErrorServiceResponse<M = null> extends BaseServiceResponse<M>{
    success: false,
    errors?: ValidationErrors,
    errorCode?: string
}

export type ServiceResponse<T, M = null> =
    | SuccessServiceResponse<T, M>
    | ErrorServiceResponse<M>;