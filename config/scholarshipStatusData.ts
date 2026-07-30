import { GenericSelect } from "@/types/select.types";

export const scholarshipStatusData: GenericSelect[] = [
  {
    label: "All Status",
    default: "All Status",
  },
  {
    label: "Published",
    value: "published",
  },
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Pending",
    value: "pending",
  },
];