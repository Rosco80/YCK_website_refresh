import fs from 'fs';

const enJsonPath = './src/messages/en.json';
const rawConditionsPath = './raw-conditions.json';

const enData = JSON.parse(fs.readFileSync(enJsonPath, 'utf-8'));
const rawData = JSON.parse(fs.readFileSync(rawConditionsPath, 'utf-8'));

for (const slug in rawData) {
  if (enData.Conditions.list[slug]) {
    // Clean up trailing repetitive CTA text from scraping
    const cleanStep3 = rawData[slug].step3
      .replace(/View Testimonials.*$/, '')
      .replace(/book an appointment.*$/, '')
      .replace(/Michael is a US citizen.*$/, '')
      .trim();

    enData.Conditions.list[slug].intro = rawData[slug].intro;
    enData.Conditions.list[slug].step1 = rawData[slug].step1;
    enData.Conditions.list[slug].step2 = rawData[slug].step2;
    enData.Conditions.list[slug].step3 = cleanStep3;
  }
}

fs.writeFileSync(enJsonPath, JSON.stringify(enData, null, 2));
console.log('Successfully hydrated en.json with native English clinical text!');
