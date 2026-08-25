import { EMAIL_REGEX } from "@/lib/constants/regex";
import z from "zod";

export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, {message: "Email is required."})
        .regex(EMAIL_REGEX, "Please enter a valid email address.")
})

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>