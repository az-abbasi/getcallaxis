const fs = require('fs');
const https = require('https');

const pages = [
  'insurance.html',
  'insurance-auto.html',
  'insurance-health.html',
  'insurance-home.html',
  'insurance-life.html',
  'home-services.html',
  'home-services-roofing.html',
  'home-services-bathroom.html',
  'home-services-flooring.html',
  'home-services-hvac.html',
  'home-services-windows.html',
  'home-services-gutters.html',
  'home-services-siding.html',
  'home-services-kitchen.html',
  'home-services-plumbing.html',
  'home-services-electrical.html',
  'home-services-solar.html',
  'home-services-garage-doors.html',
  'home-services-foundations.html'
];

function fetchPage(page) {
  return new Promise((resolve, reject) => {
    const url = `https://nexcallsolution.com/${page}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ page, html: data }));
    }).on('error', (err) => reject(err));
  });
}

async function run() {
  const results = {};
  for (const p of pages) {
    try {
      console.log(`Fetching ${p}...`);
      const { page, html } = await fetchPage(p);
      results[page] = html;
    } catch (e) {
      console.error(`Failed to fetch ${p}:`, e.message);
    }
  }
  fs.writeFileSync('reference_htmls.json', JSON.stringify(results, null, 2));
  console.log('Done fetching all reference pages!');
}

run();
