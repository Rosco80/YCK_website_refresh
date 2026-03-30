import fs from 'fs';

const rawConditionsPath = './raw-conditions.json';
const rawData = JSON.parse(fs.readFileSync(rawConditionsPath, 'utf-8'));

async function translateText(text, targetLang) {
  if (!text) return "";
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    // Google Translate API returns sentences clustered in an array, reduce them back to paragraphs.
    return json[0].map(item => item[0]).join('');
  } catch (e) {
    console.error(`Translation fail for lang ${targetLang}:`, e.message);
    return text; // Fallback to English seamlessly if blocked.
  }
}

async function hydrateTranslate(lang, outPath) {
  const fileData = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
  console.log(`Starting dynamic API translation matrix for [${lang}]...`);
  
  for (const slug in rawData) {
    if (fileData.Conditions.list[slug]) {
      const cleanStep3 = rawData[slug].step3
        .replace(/View Testimonials.*$/i, '')
        .replace(/book an appointment.*$/i, '')
        .replace(/Michael is a US citizen.*$/i, '')
        .trim();

      fileData.Conditions.list[slug].intro = await translateText(rawData[slug].intro, lang);
      fileData.Conditions.list[slug].step1 = await translateText(rawData[slug].step1, lang);
      fileData.Conditions.list[slug].step2 = await translateText(rawData[slug].step2, lang);
      fileData.Conditions.list[slug].step3 = await translateText(cleanStep3, lang);
      
      console.log(` >> Translated [${slug}] to ${lang}`);
    }
  }
  
  fs.writeFileSync(outPath, JSON.stringify(fileData, null, 2));
  console.log(`Safely committed ${Object.keys(rawData).length} localized condition maps to ${outPath}\n`);
}

async function main() {
  await hydrateTranslate('ms', './src/messages/ms.json');
  await hydrateTranslate('zh-CN', './src/messages/zh.json');
}

main();
