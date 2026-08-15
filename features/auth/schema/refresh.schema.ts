import z from "zod";

export const refreshSchema = z.object({
    refresh: z
        .string()
        .trim()
        .min(1, {message: "Refresh token is required"})
})

export type RefreshInput = z.infer<typeof refreshSchema>