import { z } from 'zod'

enum Gender {
    male = "male",
    female = "female",
}

enum EducationLevel {
    undegraduate = "undergraduate",
    high_school =  "high_school" ,
    associate  = "associate",
    bachelor =  "bachelor",
    master = "master",
}
const CountrySchema = z.enum(["PH", "US", "JP"]);
const FundingSchema = z.enum([""]);
const FieldSchema = z.enum([""]);

export const onboardSchema = z.object({
    avatar: z.file(),
    date_of_bith: z.date(),
    gender: Gender,
    nationality: z.string(),
    country: z.string(),
    phone_number: z.number(),
    
    education_level: EducationLevel,
    institution_name: z.string(),
    defree: z.string(),
    field_of_study: z.string(),
    current_year: z.string(),
    graduation_year: z.string(),
    gpa: z.number(),

    preferred_countries :z.array(CountrySchema),
    preferred_funding: z.array(FundingSchema),
    preferred_fields: z.array(FieldSchema),

    resume_cv: z.file(),
    academic_transcript: z.file(),
    recommendation_letter: z.file(),
    personal_statement: z.file(),
})

export type OnboardSchema = z.infer<typeof onboardSchema>