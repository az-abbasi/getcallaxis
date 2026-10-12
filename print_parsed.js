const fs = require('fs');
const summary = JSON.parse(fs.readFileSync('parsed_summary.json', 'utf8'));

for (const k in summary) {
  console.log('=== PAGE:', k);
  console.log('Title:', summary[k].title);
  console.log('Eyebrow:', summary[k].eyebrow);
  console.log('HeroSub:', summary[k].heroSub);
  console.log('MainSectionTitle:', summary[k].mainSectionTitle);
  console.log('Benefits count:', summary[k].benefits.length);
  summary[k].benefits.forEach(b => console.log('  -', b.title, ':', b.desc));
}
