import { BaseTimestampModel } from "./baseTimestampModel";
import { Profile } from "./profile";

// Core User Interface (BaseUser)
export interface BaseUser extends BaseTimestampModel {
  id: string;
  profile: Profile;   
}
