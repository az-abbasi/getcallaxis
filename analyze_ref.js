const fs = require('fs');

function analyze(file) {
  console.log(`=== ANALYZING ${file} ===`);
  const html = fs.readFileSync(file, 'utf8');
  
  // Find all sections
  const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/gi) || [];
  console.log(`Found ${sections.length} sections:`);
  sections.forEach((s, idx) => {
    const classMatch = s.match(/class="([^"]*)"/);
    const idMatch = s.match(/id="([^"]*)"/);
    const headingMatch = s.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i);
    const hText = headingMatch ? headingMatch[1].replace(/<[^>]+>/g, '').trim() : 'No Heading';
    console.log(`  Section ${idx + 1}: class="${classMatch ? classMatch[1] : ''}" id="${idMatch ? idMatch[1] : ''}" -> Heading: "${hText}"`);
  });
}

analyze('home-services-roofing.html.ref.html');
analyze('home-services.html.ref.html');
analyze('insurance.html.ref.html');
