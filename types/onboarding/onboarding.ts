export type Gender = "male" | "female"  
export type EducationLevel =
  | "high_school"
  | "associate"
  | "bachelor"
  | "master"
  | "doctorate"; 
  
export interface OnboardingDraft {
    // USER INFORMATION
    avatar?: File | null;
    date_of_birth?: Date;
    gender?: string;
    nationality?: string;
    country?:string;
    phone_number?:Number;

    // USER ACADEMIC
    education_level?: EducationLevel;
    institution_name?: string;
    degree?: string;
    field_of_study?: string;
    current_year?: string;
    graduation_year?:string;
    gpa?: Number;
 
    // USER PREFERENCE
    preferred_countries: string[];
    preferred_funding: string[];
    preferred_fields: string[];

    // USER DOCUMENTS
    resume_cv?: File | null;
    academic_transcript?: File | null;
    recommendation_letter?: File | null;
    personal_statement?: File | null;
}

