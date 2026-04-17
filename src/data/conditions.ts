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
  "elbow-pain",
  "post-surgery-rehab",
  "chronic-pain",
  "sports-injury"
] as const;

export type ConditionSlug = typeof conditionSlugs[number];

// Generic mappings if we need to expand metadata beyond translations
export const conditionsData: Record<ConditionSlug, { iconPath: string }> = {
  "back-pain": { iconPath: "/images/back_spine.png" },
  "lower-back-pain": { iconPath: "/images/back_spine.png" },
  "slipped-disc": { iconPath: "/images/back_spine.png" },
  "sciatica": { iconPath: "/images/hipsandlegs.png" },
  "knee-pain": { iconPath: "/images/knee.png" },
  "osteoarthritis-knee": { iconPath: "/images/knee.png" },
  "frozen-shoulder": { iconPath: "/images/neck_shoulder.png" },
  "shoulder-pain": { iconPath: "/images/neck_shoulder.png" },
  "neck-pain": { iconPath: "/images/neck_shoulder.png" },
  "sprained-ankle": { iconPath: "/images/ankle_foot.png" },
  "plantar-fasciitis": { iconPath: "/images/ankle_foot.png" },
  "wrist-pain": { iconPath: "/images/hand_wrist_elbow.png" },
  "elbow-pain": { iconPath: "/images/hand_wrist_elbow.png" },
  "hip-pain": { iconPath: "/images/hipsandlegs.png" },
  "osteoarthritis": { iconPath: "/images/back_spine.png" },
  "post-surgery-rehab": { iconPath: "/images/knee.png" },
  "chronic-pain": { iconPath: "/images/back_spine.png" },
  "sports-injury": { iconPath: "/images/hipsandlegs.png" }
};
