import { createClient } from '@sanity/client';
import 'dotenv/config';

// YOU NEED TO ADD YOUR SANITY WRITE TOKEN TO .env OR PASS IT AS AN ENV VAR
const token = process.env.SANITY_WRITE_TOKEN;

if (!token) {
  console.error("Missing SANITY_WRITE_TOKEN. Please add it to your .env file.");
  process.exit(1);
}

const client = createClient({
  projectId: 'icj6zpww', // From your env.ts
  dataset: 'production',
  apiVersion: '2024-04-22',
  token: token,
  useCdn: false,
});

const testimonials = [
  {
    _id: 'testimonial-michael',
    _type: 'testimonial',
    title: 'Flew from Alaska for Frozen Shoulder Treatment',
    slug: { _type: 'slug', current: 'frozen-shoulder-michael' },
    featured: true,
    priority: 1,
    category: 'shoulder-pain',
    quote: 'I came back because it worked.',
    summary: 'After trying multiple treatments overseas without success, Michael returned to YAPCHANKOR — travelling over 7,000 miles — for treatment of his second frozen shoulder.',
    details: {
      conditionTag: 'Frozen Shoulder',
      caseType: 'International Case',
      severity: 'Chronic',
      location: 'Overseas -> Malaysia'
    },
    before: [
      '5 years of frozen shoulder',
      'Tried acupuncture, physiotherapy, massage',
      'Limited improvement'
    ],
    treatment: [
      'Integrated physiotherapy + herbal formulation',
      'Structured sessions over time'
    ],
    outcome: [
      '75–80% improvement',
      'Returned for second treatment',
      'Functional recovery achieved'
    ],
    patientWords: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Michael returned to YAPCHANKOR after failing to find relief in the US. His recovery was so significant that he traveled 7,000 miles for his second frozen shoulder treatment.' }]
      }
    ],
    relatedConditions: ['Frozen Shoulder', 'Shoulder Pain']
  },
  {
    _id: 'testimonial-j-tong',
    _type: 'testimonial',
    title: 'Chronic Back Pain Improved After Multiple Failed Treatments',
    slug: { _type: 'slug', current: 'j-tong-disc-degeneration' },
    featured: true,
    priority: 2,
    category: 'back-pain',
    quote: "I'm back to outdoor activities — happily.",
    summary: 'After trying medication, acupuncture, chiropractic and exercise without lasting relief, the patient underwent structured treatment and regained function.',
    details: {
      conditionTag: 'Back Pain / Disc Degeneration',
      caseType: 'Chronic Case',
      severity: 'Chronic',
      location: 'Local'
    },
    before: [
      'Medication, acupuncture, chiropractic and exercise without lasting relief',
      'Chronic pain affecting daily life'
    ],
    treatment: [
      'Structured treatment plan',
      'Regained function through herbal patches and physio'
    ],
    outcome: [
      'Chronic pain improved',
      'Mobility restored',
      'Returned to daily activity'
    ],
    patientWords: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "The patient is now back to outdoor activities happily after years of suffering." }]
      }
    ],
    relatedConditions: ['Back Pain', 'Disc Degeneration']
  },
  {
    _id: 'testimonial-cheong',
    _type: 'testimonial',
    title: 'Slipped Disc Pain Reduced Without Surgery',
    slug: { _type: 'slug', current: 'cheong-slipped-discs' },
    featured: true,
    priority: 3,
    category: 'back-pain',
    details: {
      conditionTag: 'Slipped Disc',
      caseType: 'Avoided Surgery',
      severity: 'Severe',
      location: 'Local'
    },
    summary: 'Patient suffered from significant spinal pain and functional limitation. Treatment led to improvement without requiring surgery.',
    before: [
      'Significant spinal pain',
      'Functional limitation'
    ],
    treatment: [
      'Non-surgical recovery plan',
      'Intensive physiotherapy and herbal patches'
    ],
    outcome: [
      'Pain reduced',
      'Function restored',
      'Non-surgical recovery'
    ],
    patientWords: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Avoiding surgery was the main goal, and we achieved it." }]
      }
    ],
    relatedConditions: ['Slipped Disc']
  },
  {
    _id: 'testimonial-knee-oa',
    _type: 'testimonial',
    title: 'Knee Osteoarthritis Improved Without Surgery',
    slug: { _type: 'slug', current: 'a-healing-journey-with-an-osteoarthritis-patient' },
    featured: false,
    priority: 4,
    category: 'knee-pain',
    details: {
      conditionTag: 'Knee Osteoarthritis',
      caseType: 'Chronic Degenerative',
      severity: 'Moderate',
      location: 'Local'
    },
    summary: 'Patient experienced knee pain affecting daily movement. With treatment, mobility improved and pain reduced.',
    before: [
      'Knee pain affecting daily movement',
      'Difficulty walking'
    ],
    treatment: [
      'Targeted physiotherapy',
      'Herbal formulation treatment'
    ],
    outcome: [
      'Improved walking ability',
      'Reduced joint pain',
      'Avoided invasive procedures'
    ],
    patientWords: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "The patient can now walk much better and avoid surgery." }]
      }
    ],
    relatedConditions: ['Knee Osteoarthritis']
  },
  {
    _id: 'testimonial-bilateral-knee',
    _type: 'testimonial',
    title: 'Severe Knee Osteoarthritis in Both Knees Improved',
    slug: { _type: 'slug', current: 'bilateral-knee-oa' },
    featured: false,
    priority: 5,
    category: 'knee-pain',
    details: {
      conditionTag: 'Bilateral Knee Osteoarthritis',
      caseType: 'Severe Case',
      severity: 'Severe',
      location: 'Local'
    },
    summary: 'Patient presented with osteoarthritis affecting both knees. Treatment led to improved movement and reduced discomfort.',
    before: [
      'Osteoarthritis affecting both knees',
      'Significant discomfort'
    ],
    treatment: [
      'Comprehensive knee recovery program',
      'Dual knee therapy sessions'
    ],
    outcome: [
      'Both knees improved',
      'Increased mobility',
      'Better daily function'
    ],
    patientWords: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Treatment for both knees simultaneously led to a great outcome." }]
      }
    ],
    relatedConditions: ['Knee Osteoarthritis']
  },
  {
    _id: 'testimonial-jamilah',
    _type: 'testimonial',
    title: 'Sciatica Pain Improved After Persistent Symptoms',
    slug: { _type: 'slug', current: 'jamilah-sciatica' },
    featured: false,
    priority: 6,
    category: 'back-pain',
    details: {
      conditionTag: 'Sciatica',
      caseType: 'Nerve Pain',
      severity: 'Persistent',
      location: 'Local'
    },
    summary: 'Patient experienced ongoing nerve pain affecting mobility and daily life. Treatment reduced symptoms and improved movement.',
    before: [
      'Ongoing nerve pain',
      'Affected mobility and daily life'
    ],
    treatment: [
      'Sciatica-specific treatment protocol',
      'Decompression and anti-inflammatory therapy'
    ],
    outcome: [
      'Reduced nerve pain',
      'Improved mobility',
      'Returned to normal activities'
    ],
    patientWords: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "The sharp radiating pain is now gone." }]
      }
    ],
    relatedConditions: ['Sciatica', 'Back Pain']
  }
];

async function seed() {
  console.log("Seeding testimonials...");
  for (const t of testimonials) {
    try {
      await client.createOrReplace(t);
      console.log(`Created/Updated: ${t.title}`);
    } catch (e) {
      console.error(`Error creating ${t.title}:`, e.message);
    }
  }
  console.log("Done!");
}

seed();

