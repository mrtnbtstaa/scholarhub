export interface ApplicationData {
  id: string;
  scholarship: string;
  deadline: string;
  progress: number;
  status: "Preparing" | "Submitted" | "Under Review" | "Not Started";
  priority: string;
  createdAt: string;
  country: string;
}
