import { EMAIL_REGEX, PASSWORD_REGEX } from "@/lib/constants/regex";
import z from "zod";

export const registerSchema = z.object({
    first_name: z
        .string()
        .trim()
        .min(1, {"message": "Firstname is required."}),
    last_name: z
        .string()
        .trim()
        .min(1, {"message": "Lastname is required."}),
    email: z
        .string()
        .trim()
        .min(1, {"message": "Email is required."})
        .regex(EMAIL_REGEX, "Please enter a valid email address."),
    password: z
        .string()
        .trim()
        .min(1, {"message": "Password is required"})
        .superRefine((password, ctx) => {
            // Don't perform additional validation if empty
            if(!password) return;
            
            if(password.length < 8){
                ctx.addIssue({
                    code: "custom",
                    message: "Password must be atleast 8 characters."
                })
                return;
            }

            // if(!PASSWORD_REGEX.test(password)){
            //     ctx.addIssue({
            //         code: "custom",
            //         message: "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
            //     })
            // }
        }),
    confirm_password: z
        .string()
        .trim()
        .min(1, {"message": "Confirm password is required"})
        .superRefine((confirmPassword, ctx) => {
            if(!confirmPassword) return;

            if(confirmPassword.length < 8){
                ctx.addIssue({
                    code: "custom",
                    message: "Confirm password must be atleast 8 characters."
                })
                return;
            }

            //  if(!PASSWORD_REGEX.test(confirmPassword)){
            //     ctx.addIssue({
            //         code: "custom",
            //         message: "Confirm Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
            //     })
            // }

        }),
    role: z
        .string()
        .trim()
        .superRefine((role, ctx) => {
            const validRole = ["admin", "student"];

            if(!validRole.includes(role)){
                ctx.addIssue({
                    code: "custom",
                    message: "Invalid role."
                })
            }

        })
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"]
})

export type RegisterInput = z.infer<typeof registerSchema>