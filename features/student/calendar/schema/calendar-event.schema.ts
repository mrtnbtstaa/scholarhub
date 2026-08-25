import z from "zod";

export const calendarEventSchema = z.object({
    event_title: z
        .string()
        .trim()
        .min(1, {message: "Event title is required"}),
    event_date: z
        .string()
        .superRefine((data, ctx) => {
            
            if(data === "" || data == undefined){
                ctx.addIssue({
                    message: "Event date is required",
                    code: "custom"
                })
            }
        }),
    event_time: z
        .string()
          .superRefine((data, ctx) => {
            
            if(data === "" || data == undefined){
                ctx.addIssue({
                    message: "Event time is required",
                    code: "custom"
                })
            }

            if(!isNaN(Date.parse(data))){
                ctx.addIssue({
                    message: "Invalid time",
                    code: "custom" 
                })
            }

        }),
    event_category: z
        .string()
        .trim()
        .min(1, {message: "Event category is required"}),
    description: z // Optional description
        .string()
        .trim()
        .nullable()
})

export type CalendarEventInput = z.infer<typeof calendarEventSchema>


export const calendarQuerySchema = z.object({
    start_date: z
        .string()
        .trim()
        .superRefine((data, ctx) => {
            if(data === "" || data == undefined){
                ctx.addIssue({
                    message: "Start date is required",
                    code: "custom"
                })
            }
        }),
    end_date: z
        .string()
        .trim()
        .superRefine((data, ctx) => {
            if(data === "" || data == undefined){
                ctx.addIssue({
                    message: "End date is required",
                    code: "custom"
                })
            }
        })
})

export type CalendarQueryInput = z.infer<typeof calendarQuerySchema>