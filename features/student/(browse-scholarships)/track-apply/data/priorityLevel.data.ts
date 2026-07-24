interface PriorityLevel {
  priority: string;
  currentPriority: "high" | "medium" | "low";
}

export const PriorityData: PriorityLevel[] = [
  {
    priority: "High",
    currentPriority: "high",
  },
  {
    priority: "Medium",
    currentPriority: "medium",
  },
  {
    priority: "Low",
    currentPriority: "low",
  },
];
