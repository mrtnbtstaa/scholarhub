import { BaseTimestampModel } from "./baseTimestampModel";

// Core Profile Interface
export interface Profile extends BaseTimestampModel {
  id: string;
  avatarUrl: string;
}
