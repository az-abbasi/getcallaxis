const fs = require('fs');

const html = fs.readFileSync('home-services-roofing.html.ref.html', 'utf8');

// Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  fs.writeFileSync('ref_roofing_body.html', bodyMatch[1]);
  console.log("Saved ref_roofing_body.html");
}

const hsHtml = fs.readFileSync('home-services.html.ref.html', 'utf8');
const hsBodyMatch = hsHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (hsBodyMatch) {
  fs.writeFileSync('ref_homeservices_body.html', hsBodyMatch[1]);
  console.log("Saved ref_homeservices_body.html");
}

const insHtml = fs.readFileSync('insurance.html.ref.html', 'utf8');
const insBodyMatch = insHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (insBodyMatch) {
  fs.writeFileSync('ref_insurance_body.html', insBodyMatch[1]);
  console.log("Saved ref_insurance_body.html");
}
