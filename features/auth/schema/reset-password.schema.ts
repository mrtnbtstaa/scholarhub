import { PASSWORD_REGEX } from "@/lib/constants/regex";
import z from "zod";

export const resetPasswordSchema = z.object({
  uid: z
    .string()
    .trim().
    nullable(),
  token: z
    .string()
    .trim()
    .nullable(),
  new_password: z
    .string()
    .trim()
    .min(1, { message: "Password is required." })
    .superRefine((password, ctx) => {
      // Don't perform additional validation if empty
      if (!password) return; 
      
      if (password.length < 8) {
        ctx.addIssue({
          code: "custom",
          message: "Password must be atleast 8 characters.",
        });
        return;
      }
      
      if (!PASSWORD_REGEX.test(password)) {
        ctx.addIssue({
          code: "custom",
          message: "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
        });
      }
    }),
  confirm_password: z
    .string()
    .trim()
    .min(1, { message: "Confirm password is required" })
    .superRefine((confirmPassword, ctx) => {
      // Don't perform additional validation if empty
      if (!confirmPassword) return; 

      if (confirmPassword.length < 8) {
        ctx.addIssue({
          code: "custom",
          message: "Confirm password must be atleast 8 characters.",
        });
        return;
      }

      if (!PASSWORD_REGEX.test(confirmPassword)) {
        ctx.addIssue({
          code: "custom",
          message: "Confirm Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
        });
      }
    }),
})


export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>