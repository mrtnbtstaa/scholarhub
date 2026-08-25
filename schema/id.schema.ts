import z from "zod";

export const idSchema = z.object({
    id: z
        .string()
        .trim()
})

export type IdInput = z.infer<typeof idSchema>