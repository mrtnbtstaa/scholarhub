import { GenericSelect } from "@/types/shared/select.types";

export const EducationLevelData:GenericSelect[] = [
    {
        value: "Bachelor's Degree",
        label: "Bachelor's Degree"
    },
    {
        value: "Doctorate Degree",
        label: "Doctorate Degree"
    },
    {
        value: "Associate Degree",
        label: "Associate Degree"
    },
    {
        value: "Master's Degree",
        label: "Master's Degree"
    }

]


export const DegreeOptionsByLevel: Record<string, GenericSelect[]> = {
  "Bachelor's Degree": [
    { value: "B.Sc", label: "B.Sc" },
    { value: "B.A", label: "B.A" },
  ],
  "Master's Degree": [
    { value: "M.Sc", label: "M.Sc" },
    { value: "M.A", label: "M.A" },
  ],
  "Associate Degree": [
    { value: "A.A", label: "A.A" },
    { value: "A.S", label: "A.S" },
  ],
  "Doctorate Degree": [
    { value: "Ph.D", label: "Ph.D" },
    { value: "J.D", label: "J.D" },
  ],
};