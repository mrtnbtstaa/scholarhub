import { ValidationErrors } from "./api.errors";

// API backend contract

export interface BaseApiResponse<M = null> {
    message: string;
    meta?: M;
}

export type SuccessApiResponse<T, M = null> =
    BaseApiResponse<M> & {
        success: true;
        data: T;
    };

export type ErrorApiResponse<M = null> =
    BaseApiResponse<M> & {
        success: false;
        errors?: ValidationErrors;
        error_code?: string;
    };

export type ApiResponse<T, M = null> =
    | SuccessApiResponse<T, M>
    | ErrorApiResponse<M>;