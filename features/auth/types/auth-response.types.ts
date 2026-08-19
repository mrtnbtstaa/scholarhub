export type LoginResponse = {
    access_token: string;
    refresh_token: string;
    id: string;
    email: string;
    role: "admin" | "student"
}

export type RefreshAndAccessTokenResponse = {
    access_token: string;
    refresh_token: string;
}