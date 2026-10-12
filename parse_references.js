const fs = require('fs');

const rawData = JSON.parse(fs.readFileSync('reference_htmls.json', 'utf8'));

// Helper to extract text between tags or regex
function extract(html, regex, defaultVal = '') {
  const match = html.match(regex);
  return match ? match[1].trim() : defaultVal;
}

function cleanText(str) {
  return str ? str.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
}

const parsedPages = {};

for (const pageName in rawData) {
  const html = rawData[pageName];

  // Title
  const title = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/);
  // Eyebrow / Category
  const eyebrow = extract(html, /<span class="eyebrow"[^>]*>([\s\S]*?)<\/span>/);
  // Hero sub / description
  const heroSub = extract(html, /<p class="hero-sub"[^>]*>([\s\S]*?)<\/p>/);
  
  // Section heading (How it works for ...)
  const sectionTitleMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || [];
  const mainSectionTitle = sectionTitleMatch[0] ? cleanText(sectionTitleMatch[0]) : '';
  
  // Paragraphs under the main section
  // Let's find paragraphs in left column
  const leftColMatch = html.match(/<div class="service-details">([\s\S]*?)<\/div>/) ||
                       html.match(/<div class="[^"]*left[^"]*">([\s\S]*?)<\/div>/) ||
                       html.match(/<article[^>]*>([\s\S]*?)<\/article>/);

  // Benefits / Feature grid
  const benefits = [];
  const benefitMatches = html.matchAll(/<div class="benefit-card[^"]*">([\s\S]*?)<\/div>/g);
  for (const b of benefitMatches) {
    const bTitle = extract(b[1], /<h4[^>]*>([\s\S]*?)<\/h4>/);
    const bDesc = extract(b[1], /<p[^>]*>([\s\S]*?)<\/p>/);
    if (bTitle || bDesc) {
      benefits.push({ title: cleanText(bTitle), desc: cleanText(bDesc) });
    }
  }

  // Fallback for benefit cards if different class
  if (benefits.length === 0) {
    const featureMatches = html.matchAll(/<div class="feature-[^"]*">([\s\S]*?)<\/div>/g) ||
                           html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g);
    for (const f of featureMatches) {
      const fText = cleanText(f[1]);
      if (fText && fText.length > 5) {
        benefits.push({ title: fText.split('.')[0], desc: fText });
      }
    }
  }

  parsedPages[pageName] = {
    title: cleanText(title),
    eyebrow: cleanText(eyebrow),
    heroSub: cleanText(heroSub),
    mainSectionTitle,
    benefits
  };
}

fs.writeFileSync('parsed_summary.json', JSON.stringify(parsedPages, null, 2));
console.log('Parsed summary written!');
