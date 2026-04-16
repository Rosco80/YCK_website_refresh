export type Cluster = 'spine' | 'upper-limb' | 'lower-limb' | 'solutions';

export interface ClusterMapping {
  cluster: Cluster;
  related: string[];
}

export const CLUSTER_MAP: Record<string, ClusterMapping> = {
  // CLUSTER A — SPINE / BACK
  'back-pain': { cluster: 'spine', related: ['lower-back-pain', 'slipped-disc', 'sciatica'] },
  'lower-back-pain': { cluster: 'spine', related: ['back-pain', 'slipped-disc', 'sciatica'] },
  'slipped-disc': { cluster: 'spine', related: ['back-pain', 'lower-back-pain', 'sciatica'] },
  'sciatica': { cluster: 'spine', related: ['back-pain', 'lower-back-pain', 'slipped-disc'] },
  'neck-pain': { cluster: 'spine', related: ['back-pain', 'shoulder-pain'] },

  // CLUSTER B — UPPER LIMB
  'shoulder-pain': { cluster: 'upper-limb', related: ['frozen-shoulder', 'neck-pain', 'elbow-pain'] },
  'frozen-shoulder': { cluster: 'upper-limb', related: ['shoulder-pain', 'neck-pain'] },
  'elbow-pain': { cluster: 'upper-limb', related: ['shoulder-pain', 'wrist-pain'] },
  'wrist-pain': { cluster: 'upper-limb', related: ['elbow-pain', 'shoulder-pain'] },

  // CLUSTER C — LOWER LIMB
  'knee-pain': { cluster: 'lower-limb', related: ['osteoarthritis-knee', 'hip-pain'] },
  'osteoarthritis-knee': { cluster: 'lower-limb', related: ['knee-pain', 'hip-pain', 'osteoarthritis'] },
  'hip-pain': { cluster: 'lower-limb', related: ['knee-pain', 'osteoarthritis'] },
  'osteoarthritis': { cluster: 'lower-limb', related: ['hip-pain', 'osteoarthritis-knee'] },
  'sprained-ankle': { cluster: 'lower-limb', related: ['knee-pain', 'plantar-fasciitis'] },
  'plantar-fasciitis': { cluster: 'lower-limb', related: ['sprained-ankle', 'knee-pain'] },

  // CLUSTER D — SOLUTIONS
  'sports-injury': { cluster: 'solutions', related: ['chronic-pain', 'post-surgery-rehab', 'knee-pain'] },
  'post-surgery-rehab': { cluster: 'solutions', related: ['sports-injury', 'chronic-pain'] },
  'chronic-pain': { cluster: 'solutions', related: ['sports-injury', 'post-surgery-rehab', 'back-pain'] },
};

export function getRelatedConditions(slug: string, max: number = 4): string[] {
  return CLUSTER_MAP[slug]?.related.slice(0, max) || [];
}

export function getClusterTitle(cluster: Cluster): string {
  switch (cluster) {
    case 'spine': return 'Spine & Back';
    case 'upper-limb': return 'Upper Limb';
    case 'lower-limb': return 'Lower Limb';
    case 'solutions': return 'Specialized Solutions';
    default: return 'Related Conditions';
  }
}
