export const conditionSlugs = [
  "back-pain",
  "frozen-shoulder",
  "shoulder-pain",
  "knee-pain",
  "neck-pain",
  "sprained-ankle",
  "wrist-pain",
  "plantar-fasciitis",
  "lower-back-pain",
  "slipped-disc",
  "osteoarthritis-knee",
  "osteoarthritis",
  "sciatica",
  "hip-pain",
  "elbow-pain"
] as const;

export type ConditionSlug = typeof conditionSlugs[number];

// Generic mappings if we need to expand metadata beyond translations
export const conditionsData: Record<ConditionSlug, { iconName: string }> = {
  "back-pain": { iconName: "Activity" },
  "frozen-shoulder": { iconName: "Activity" },
  "shoulder-pain": { iconName: "Activity" },
  "knee-pain": { iconName: "Activity" },
  "neck-pain": { iconName: "Activity" },
  "sprained-ankle": { iconName: "Activity" },
  "wrist-pain": { iconName: "Activity" },
  "plantar-fasciitis": { iconName: "Activity" },
  "lower-back-pain": { iconName: "Activity" },
  "slipped-disc": { iconName: "Activity" },
  "osteoarthritis-knee": { iconName: "Activity" },
  "osteoarthritis": { iconName: "Activity" },
  "sciatica": { iconName: "Activity" },
  "hip-pain": { iconName: "Activity" },
  "elbow-pain": { iconName: "Activity" }
};
