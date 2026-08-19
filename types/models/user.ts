import { Role } from "@/lib/constants/user-role";
import { Profile } from "./profile";

// Core User Interface (BaseUser)
export interface BaseUser {
  id: string;
  role: Role;
  email: string;
  profile: Profile | null;   
}
