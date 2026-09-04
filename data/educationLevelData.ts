import { GenericSelect } from "@/types/shared/select.types";

export const EducationLevelData: GenericSelect[] = [
  { value: "high_school", label: "High School" },
  { value: "associate", label: "Associate Degree" },
  { value: "bachelor", label: "Bachelor's Degree" },
  { value: "master", label: "Master's Degree" },
  { value: "doctorate", label: "Doctorate Degree" },
];


export const DegreeOptionsByLevel: Record<string, GenericSelect[]> = {
  bachelor: [
    { value: "B.Sc", label: "B.Sc" },
    { value: "B.A", label: "B.A" },
  ],
  master: [
    { value: "M.Sc", label: "M.Sc" },
    { value: "M.A", label: "M.A" },
  ],
  associate: [
    { value: "A.A", label: "A.A" },
    { value: "A.S", label: "A.S" },
  ],
  doctorate: [
    { value: "Ph.D", label: "Ph.D" },
    { value: "J.D", label: "J.D" },
  ],
  high_school: [],
};