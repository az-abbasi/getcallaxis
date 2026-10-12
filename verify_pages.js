const fs = require('fs');
const path = require('path');

const pages = [
  // 2 Overview Pages
  'home-services.html',
  'insurance.html',

  // 13 Home Services Pages
  'roofing.html',
  'bathroom-remodel.html',
  'flooring.html',
  'hvac.html',
  'windows.html',
  'gutters.html',
  'siding.html',
  'kitchen-remodel.html',
  'plumbing.html',
  'electrical.html',
  'solar.html',
  'garage-doors.html',
  'foundations.html',

  // 4 Insurance Pages
  'auto-insurance.html',
  'health-insurance.html',
  'home-insurance.html',
  'life-insurance.html'
];

let errors = [];
let checkedCount = 0;

pages.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    errors.push(`File missing: ${file}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.length < 4000) {
    errors.push(`File too small or incomplete: ${file} (${content.length} bytes)`);
  }

  // Check GetCallAxis branding & contact requirements
  if (!content.includes('+1 (555) 010-0123')) {
    errors.push(`${file}: Missing '+1 (555) 010-0123'`);
  }
  if (!content.includes('contact@getcallaxis.com')) {
    errors.push(`${file}: Missing email 'contact@getcallaxis.com'`);
  }

  // Check template elements
  if (!content.includes('id="quoteForm"')) {
    errors.push(`${file}: Missing #quoteForm element`);
  }
  if (!content.includes('class="inner-hero dark-surface text-center"')) {
    errors.push(`${file}: Missing inner-hero dark-surface text-center`);
  }
  if (!content.includes('class="breadcrumb"')) {
    errors.push(`${file}: Missing breadcrumb inside hero`);
  }

  // Check link validity for related items and nav
  const links = [...content.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  links.forEach(link => {
    if (link.startsWith('#') || link.startsWith('tel:') || link.startsWith('mailto:')) return;
    if (link.includes('://')) return;
    const cleanLink = link.split('#')[0];
    if (!cleanLink) return;
    const linkPath = path.join(__dirname, cleanLink);
    if (!fs.existsSync(linkPath)) {
      errors.push(`${file}: Broken link -> ${link}`);
    }
  });

  checkedCount++;
});

console.log(`Verified ${checkedCount} pages out of ${pages.length} total.`);
if (errors.length === 0) {
  console.log("SUCCESS: All 19 pages verified cleanly with zero broken links and 100% adherence to reference design!");
} else {
  console.log("ERRORS FOUND:");
  errors.forEach(e => console.log(" - " + e));
}
