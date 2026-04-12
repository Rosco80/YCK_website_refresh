import fs from 'fs';

async function translateText(text, targetLang) {
  if (!text) return "";
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json[0].map(item => item[0]).join('');
  } catch (e) {
    console.error(`Translation fail for lang ${targetLang}:`, e.message);
    return text;
  }
}

async function hydrateTitles(lang, outPath) {
  const fileData = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
  const enData = JSON.parse(fs.readFileSync('./src/messages/en.json', 'utf-8'));
  console.log(`Translating titles and descriptions for [${lang}]...`);
  
  for (const slug in enData.Conditions.list) {
    if (!fileData.Conditions.list[slug]) {
      fileData.Conditions.list[slug] = {};
      console.log(` >> Initializing missing slug [${slug}]`);
    }
    
    // Fetch the English source strings
    const sourceTitle = enData.Conditions.list[slug].title;
    const sourceDesc = enData.Conditions.list[slug].desc;
    
    fileData.Conditions.list[slug].title = await translateText(sourceTitle, lang);
    fileData.Conditions.list[slug].desc = await translateText(sourceDesc, lang);
    
    console.log(` >> Translated [${slug}] titles to ${lang}`);
  }
  
  fs.writeFileSync(outPath, JSON.stringify(fileData, null, 2));
  console.log(`Safely committed localized condition titles to ${outPath}\n`);
}

async function main() {
  await hydrateTitles('ms', './src/messages/ms.json');
  await hydrateTitles('zh-CN', './src/messages/zh.json');
}

main();
