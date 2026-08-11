import { BaseTimestampModel } from "../models/baseTimestampModel";
import { BaseUser } from "../models/user";

type CurrentYear = 1 | 2 | 3 | 4 | 5 | 6

export interface StudentPreferences extends BaseTimestampModel {
  id: string;
  userId: string;
  preferredCountries: string[];
  preferredFundingTypes: string[];
  preferredFields: string[];
}

export interface StudentDocument extends BaseTimestampModel {
  id: string;
  userId: string;
  documentType: string;
  originalFileName: string;
  storageFileName: string;
  fileUrl: string;
  fileSize: string;
  mimeType: string;
  status: "uploaded" | "pending" | "verified" | "rejected";
}

export interface StudentAcademic extends BaseTimestampModel {
  id: string;
  userId: string;
  educationLevel: string;
  institutionName: string;
  degreeType: string;
  fieldOfStudy: string;
  currentYear: CurrentYear;
  graduationYear: number;
  gpa: number;
}       

export interface StudentUser extends BaseUser {
  dateOfBirth: string;
  gender: "male" | "female";
  nationality: string;
  country: string;
  phoneNumber: string;

  profileCompleted: boolean;
  profileCompletion: number // 0-100
  emailVerified: boolean; 
}
