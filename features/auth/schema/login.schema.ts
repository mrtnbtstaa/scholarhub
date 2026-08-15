import { EMAIL_REGEX } from "@/lib/constants/regex";
import z from "zod";


export const loginSchema = z.object({
    
    email: z
        .string()
        .trim()
        .min(1, {"message": "Email is required"})
        .superRefine((email, ctx) => {
            if(!email) return;
            if(!EMAIL_REGEX.test(email)){
                ctx.addIssue({
                    code: "custom",
                    message: "Please enter a valid email address."
                })
            }
        }),
    password: z
        .string()
        .trim()
        .min(1, {"message": "Password is required"})

})

export type LoginInput = z.infer<typeof loginSchema>