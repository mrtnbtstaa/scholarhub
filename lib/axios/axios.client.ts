import axios, { InternalAxiosRequestConfig } from "axios";
import { ENDPOINTS } from "../constants/endpoints";

// Browser -> NextJS
export const axiosClient = axios.create({
    baseURL: "/api/", // /api/
    withCredentials: true,
})

axiosClient.interceptors.request.use((config) => {
    // console.log("CLIENT API REQUEST:", `${config.baseURL}${config.url}`);
    return config;
});


// let refreshPromise: Promise<void> | null = null;

// axiosClient.interceptors.response.use(
//     (response) => {
//         console.log("CLIENT API RESPONSE:", response.status);
//         return response
//     },

//     async (error) => {

//         console.log("RUNNING INTERCEPTOR!")

//         const originalRequest = error.config as InternalAxiosRequestConfig & {
//             _retry?: boolean;
//         };

//         // Skip if not 401, already retried, or if the failed request IS the refresh endpoint itself
//         if (
//             error.response?.status !== 401 ||
//             originalRequest._retry ||
//             originalRequest.url?.includes("auth/refresh")
//         ) {
//             return Promise.reject(error);
//         }

//         originalRequest._retry = true;

//         try {
//             if (!refreshPromise) {
//                 //  Use plain axios to call your internal Next.js Route Handler (bypasses this interceptor)
//                 refreshPromise = axios
//                     .post(`/api/${ENDPOINTS.client.auth.refreshToken}`, {}, {withCredentials: true, headers: {"Content-Type": "application/json"}})
//                     .then(() => undefined)
//                     .finally(() => {
//                         refreshPromise = null;
//                     });
//             }

//             await refreshPromise;

//             // Retry the original request
//             return axiosClient(originalRequest);
//         } catch (refreshError) {
//             console.error("Failed to refresh token:", refreshError);

//             // if (typeof window !== "undefined") {
//             //     window.location.href = routes.public.login;
//             // }

//             // Return the rejected promise
//             return Promise.reject(refreshError);
//         }
//     }
// );