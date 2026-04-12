import fs from 'fs';
import path from 'path';

const csvPath = 'C:/Users/Andrea/Yap Chan Kor New Website/yapchankor-refresh/public/YCK_testimonials_complete.csv';
const outputPath = 'C:/Users/Andrea/Yap Chan Kor New Website/yapchankor-refresh/src/data/testimonials.ts';

function parseCSV(content) {
  const lines = content.split('\n');
  const headers = lines[0].split(',');
  const results = [];

  // Simple CSV parser for this specific structure
  // Handling quoted text with newlines (which this CSV has)
  let currentRecord = [];
  let currentField = '';
  let inQuotes = false;

  const charArray = content.slice(content.indexOf('\n') + 1);
  
  for (let i = 0; i < charArray.length; i++) {
    const char = charArray[i];
    const nextChar = charArray[i+1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRecord.push(currentField.trim());
      currentField = '';
    } else if (char === '\n' && !inQuotes) {
      currentRecord.push(currentField.trim());
      if (currentRecord.length >= 4) {
        results.push({
          title: currentRecord[0],
          link: currentRecord[2],
          content: currentRecord[3]
        });
      }
      currentRecord = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }
  return results;
}

const csvContent = fs.readFileSync(csvPath, 'utf-8');
const rawData = parseCSV(csvContent);

const conditionMappings = [
  { slug: 'knee-pain', keywords: ['knee', 'lutut'] },
  { slug: 'back-pain', keywords: ['back', 'belakang', 'spine', 'pinggang'] },
  { slug: 'frozen-shoulder', keywords: ['frozen shoulder'] },
  { slug: 'shoulder-pain', keywords: ['shoulder', 'bahu'] },
  { slug: 'neck-pain', keywords: ['neck', 'leher', 'cervical'] },
  { slug: 'sprained-ankle', keywords: ['ankle', 'buku lali', 'sprain'] },
  { slug: 'wrist-pain', keywords: ['wrist', 'hand', 'tangan', 'carpal', 'quervain'] },
  { slug: 'plantar-fasciitis', keywords: ['plantar', 'heel', 'tumit'] },
  { slug: 'slipped-disc', keywords: ['slipped disc', 'herniated'] },
  { slug: 'osteoarthritis-knee', keywords: ['osteoarthritis', 'oa knee'] }
];

const processed = rawData.map((item, index) => {
  let slug = 'general';
  const titleLower = item.title?.toLowerCase() || '';
  const contentLower = item.content?.toLowerCase() || '';

  for (const mapping of conditionMappings) {
    if (mapping.keywords.some(k => titleLower.includes(k) || contentLower.includes(k))) {
      slug = mapping.slug;
      break;
    }
  }

  // Clean content - remove [addtoany] and other artifacts
  let cleanContent = item.content?.replace(/\[addtoany\]/g, '').trim() || '';
  
  // Identify outcome (usually the last sentence or paragraph with "recover", "thank", "better")
  const paragraphs = cleanContent.split('\n').filter(p => p.trim().length > 0);
  const outcomeCandidate = paragraphs.find(p => p.toLowerCase().includes('thank') || p.toLowerCase().includes('better') || p.toLowerCase().includes('recover')) || paragraphs[paragraphs.length - 1] || '';

  return {
    id: `testimonial-${index}`,
    title: item.title,
    slug,
    content: cleanContent,
    outcome: outcomeCandidate.length > 200 ? outcomeCandidate.slice(0, 200) + '...' : outcomeCandidate,
    link: item.link,
    length: cleanContent.length
  };
});

// Selection for Hub (Top 10 diverse ones)
// We'll pick one per category if possible
const categories = [...new Set(processed.map(p => p.slug))].filter(s => s !== 'general');
const heroTestimonials = categories.map(cat => {
    return processed.filter(p => p.slug === cat).sort((a, b) => b.length - a.length)[0];
}).filter(Boolean);

const tsContent = `export interface Testimonial {
  id: string;
  title: string;
  slug: string;
  content: string;
  outcome: string;
  link: string;
}

export const testimonialsData: Testimonial[] = ${JSON.stringify(processed, null, 2)};

export const heroTestimonials = ${JSON.stringify(heroTestimonials, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent);
console.log(`Successfully processed ${processed.length} testimonials.`);
console.log(`Generated ${heroTestimonials.length} hero cases.`);
