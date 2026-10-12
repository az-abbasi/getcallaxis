const fs = require('fs');

const rawData = JSON.parse(fs.readFileSync('reference_htmls.json', 'utf8'));

function clean(str) {
  return str ? str.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
}

const detailedData = {};

for (const pageName in rawData) {
  const html = rawData[pageName];

  // Hero title
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const heroTitle = h1Match ? clean(h1Match[1]) : '';

  // Eyebrow / category
  const eyebrowMatch = html.match(/<span class="eyebrow"[^>]*>([\s\S]*?)<\/span>/);
  const categoryPill = eyebrowMatch ? clean(eyebrowMatch[1]).replace(/^[^\w]+/, '') : '';

  // Hero Sub
  const heroSubMatch = html.match(/<p class="hero-sub"[^>]*>([\s\S]*?)<\/p>/);
  const heroDescription = heroSubMatch ? clean(heroSubMatch[1]) : '';

  // Main H2 in service details section
  const h2Match = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const howItWorksHeading = h2Match ? clean(h2Match[1]) : '';

  // Paragraphs inside main section
  // Look for text under h2
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => clean(m[1]));
  // Paragraphs after hero-sub usually include intro paragraphs
  const introP1 = pMatches[1] || '';
  const introP2 = pMatches[2] || '';

  // Benefits
  const benefits = [];
  const bCards = [...html.matchAll(/<div class="benefit-card[^"]*">([\s\S]*?)<\/div>/g)];
  for (const b of bCards) {
    const h4 = b[1].match(/<h4[^>]*>([\s\S]*?)<\/h4>/);
    const p = b[1].match(/<p[^>]*>([\s\S]*?)<\/p>/);
    if (h4 || p) {
      benefits.push({
        title: h4 ? clean(h4[1]) : '',
        desc: p ? clean(p[1]) : clean(b[1])
      });
    }
  }

  // Related links
  const related = [];
  const relMatches = [...html.matchAll(/<a class="related-card[^"]*" href="([^"]+)">([\s\S]*?)<\/a>/g)];
  for (const r of relMatches) {
    const url = r[1];
    const rTitle = r[2].match(/<h4[^>]*>([\s\S]*?)<\/h4>/) || r[2].match(/<div class="related-title"[^>]*>([\s\S]*?)<\/div>/);
    const rDesc = r[2].match(/<p[^>]*>([\s\S]*?)<\/p>/);
    related.push({
      url: url.replace('home-services-', '').replace('insurance-', ''),
      title: rTitle ? clean(rTitle[1]) : '',
      desc: rDesc ? clean(rDesc[1]) : ''
    });
  }

  detailedData[pageName] = {
    heroTitle,
    categoryPill,
    heroDescription,
    howItWorksHeading,
    introP1,
    introP2,
    benefits,
    related
  };
}

fs.writeFileSync('detailed_reference_data.json', JSON.stringify(detailedData, null, 2));
console.log('Detailed reference data created!');
