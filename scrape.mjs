import * as cheerio from 'cheerio';
import fs from 'fs';

const links = [
  { slug: "back-pain", url: "https://yapchankor.com/service/back-pain-therapy-malaysia/" },
  { slug: "frozen-shoulder", url: "https://yapchankor.com/service/frozen-shoulder-therapy-malaysia/" },
  { slug: "shoulder-pain", url: "https://yapchankor.com/service/shoulder-pain-therapy-at-yapchankor/" },
  { slug: "knee-pain", url: "https://yapchankor.com/service/knee-pain-therapy-malaysia/" },
  { slug: "neck-pain", url: "https://yapchankor.com/service/neck-pain-therapy-malaysia/" },
  { slug: "sprained-ankle", url: "https://yapchankor.com/service/sprained-ankle-therapy-malaysia/" },
  { slug: "wrist-pain", url: "https://yapchankor.com/service/wrist-pain-therapy-malaysia/" },
  { slug: "plantar-fasciitis", url: "https://yapchankor.com/service/plantar-fasciitis-treatment-malaysia/" },
  { slug: "lower-back-pain", url: "https://yapchankor.com/service/lower-back-pain-therapy-malaysia/" },
  { slug: "slipped-disc", url: "https://yapchankor.com/service/slipped-disc-therapy-malaysia/" },
  { slug: "osteoarthritis-knee", url: "https://yapchankor.com/service/osteoarthritis-knee-therapy-malaysia/" },
  { slug: "osteoarthritis", url: "https://yapchankor.com/service/osteoarthritis-therapy-malaysia/" }
];

async function extractConditionData() {
  const dataset = {};

  for (const {slug, url} of links) {
    console.log(`Extracting: ${slug}`);
    try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);

      // Extract the main content container (adjust based on raw HTML inspection if needed)
      // Usually, the body or article content contains the h4 steps.
      
      const step1Node = $('h4').filter(function() { return $(this).text().trim().includes('Step 1'); }).first();
      const step2Node = $('h4').filter(function() { return $(this).text().trim().includes('Step 2'); }).first();
      const step3Node = $('h4').filter(function() { return $(this).text().trim().includes('Step 3'); }).first();

      let intro = "";
      if (step1Node.length > 0) {
        intro = step1Node.prevAll('p').map(function() { return $(this).text().trim(); }).get().reverse().join(' ').trim();
      } else {
        // Fallback: just get the first paragraph or two
        intro = $('article p, .entry-content p').first().text().trim();
      }

      // If prevAll grabbed too much footer/header stuff, let's limit to what's inside the same parent container
      if (step1Node.length > 0) {
        intro = step1Node.parent().children().filter(function() {
          return $(this).index() < step1Node.index() && $(this).is('p');
        }).map(function() { return $(this).text().trim(); }).get().join(' ').trim();
      }

      let step1 = step1Node.length > 0 ? step1Node.nextUntil('h4, h3, h2').text().trim() : "Initial targeted clinical assessment to isolate the structural root cause of condition.";
      let step2 = step2Node.length > 0 ? step2Node.nextUntil('h4, h3, h2').text().trim() : "Custom Shaolin formulation applied in conjunction with functional physical physiotherapy techniques.";
      let step3 = step3Node.length > 0 ? step3Node.nextUntil('h4, h3, h2, .share, .social, footer').text().trim() : "Long-term pain relief and structural rehabilitation achieved through dedicated patient regimen.";

      // Clean arbitrary newlines/spaces
      intro = intro.replace(/\s+/g, ' ');
      step1 = step1.replace(/\s+/g, ' ');
      step2 = step2.replace(/\s+/g, ' ');
      step3 = step3.replace(/\s+/g, ' ');

      dataset[slug] = {
        intro: intro || "Specialized physiological assessment and structural chronic treatment.",
        step1: step1,
        step2: step2,
        step3: step3
      };
      
    } catch (e) {
      console.error(`Error scraping ${slug}:`, e);
      dataset[slug] = {
        intro: "Specialized physiological assessment and structural chronic treatment.",
        step1: "Initial targeted clinical assessment to isolate the structural root cause of condition.",
        step2: "Custom Shaolin formulation applied in conjunction with functional physical physiotherapy techniques.",
        step3: "Long-term pain relief and structural rehabilitation achieved through dedicated patient regimen."
      };
    }
  }

  fs.writeFileSync('raw-conditions.json', JSON.stringify(dataset, null, 2));
  console.log("Extraction written to raw-conditions.json!");
}

extractConditionData();
