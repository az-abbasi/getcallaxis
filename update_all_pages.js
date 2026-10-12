const fs = require('fs');
const path = require('path');

// Master Data Object for all 17 Subpages and 2 Overview Pages
const subpagesData = [
  // --- 13 HOME SERVICES SUBPAGES ---
  {
    filename: "roofing.html",
    service: "Roofing",
    service_full: "Roofing Repair & Replacement",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Repairs, replacements & storm damage — handled by verified local pros.",
    meta_desc: "Connect with licensed local roofers for repairs, full replacements, or storm damage claims. Free quotes, zero obligation.",
    main_title: "How it works for roofing",
    para1: "Connect with licensed local roofers for repairs, full replacements, or storm damage claims, and get quotes without the hassle of cold calls.",
    para2: "Every provider we connect you with is licensed and verified for your state. There's no obligation to move forward, and the service costs you nothing.",
    benefits: [
      "Asphalt, metal & tile roofing options",
      "Storm & insurance-claim specialists",
      "Free on-site inspections",
      "Licensed & insured local crews"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Bathroom Remodel", url: "bathroom-remodel.html" },
      { title: "Flooring", url: "flooring.html" },
      { title: "HVAC", url: "hvac.html" },
      { title: "Windows", url: "windows.html" }
    ]
  },
  {
    filename: "bathroom-remodel.html",
    service: "Bathroom Remodel",
    service_full: "Bathroom Remodeling & Renovation",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "From quick walk-in shower refreshes to complete master bath gut renovations.",
    meta_desc: "Transform your bathroom with custom tile, walk-in showers, and modern vanities. Compare quotes from verified local contractors.",
    main_title: "How it works for bathroom remodeling",
    para1: "Connect with specialized bathroom remodeling contractors who design and build high-quality master baths, guest baths, and tub-to-shower conversions.",
    para2: "Whether you need a quick 1-day acrylic tub liner update or a complete luxury custom overhaul, get matched with top-rated local craftsmen.",
    benefits: [
      "Tub-to-shower conversions & acrylic liners",
      "Custom tile, vanities & plumbing fixtures",
      "1-Day & full-scale remodel options",
      "Licensed, bonded & insured remodelers"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Kitchen Remodel", url: "kitchen-remodel.html" },
      { title: "Plumbing", url: "plumbing.html" },
      { title: "Flooring", url: "flooring.html" },
      { title: "Electrical", url: "electrical.html" }
    ]
  },
  {
    filename: "flooring.html",
    service: "Flooring",
    service_full: "Flooring Installation & Refinishing",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Hardwood, tile, luxury vinyl plank & carpet installed with precision.",
    meta_desc: "Upgrade your floors with durable hardwood, tile, or LVP. Get free estimates from background-checked flooring installers.",
    main_title: "How it works for flooring installation",
    para1: "Connect with certified local flooring contractors specializing in hardwood refinishing, luxury vinyl plank (LVP), ceramic tile, and plush carpet.",
    para2: "Get free in-home sample consultations and accurate square-footage estimates from top-rated installers in your area.",
    benefits: [
      "Solid hardwood & dustless refinishing",
      "Waterproof luxury vinyl plank (LVP)",
      "Custom ceramic & porcelain tile work",
      "Free in-home material consultations"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Bathroom Remodel", url: "bathroom-remodel.html" },
      { title: "Kitchen Remodel", url: "kitchen-remodel.html" },
      { title: "Foundations", url: "foundations.html" },
      { title: "Roofing", url: "roofing.html" }
    ]
  },
  {
    filename: "hvac.html",
    service: "HVAC",
    service_full: "Heating & Air Conditioning Services",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Heating & cooling repairs, seasonal tune-ups, and heat pump upgrades.",
    meta_desc: "Keep your home comfortable year-round with professional HVAC repair, furnace replacement, and AC installation services.",
    main_title: "How it works for HVAC services",
    para1: "Connect with EPA-certified heating and air conditioning technicians for emergency repairs, annual maintenance tune-ups, or full system replacement.",
    para2: "Lower your energy bills with modern high-efficiency heat pumps, ductless mini-splits, and central air units fitted for your home's layout.",
    benefits: [
      "24/7 Emergency AC & heating repair",
      "High-efficiency heat pumps & ductless mini-splits",
      "Seasonal maintenance & duct cleaning",
      "Licensed & EPA-certified technicians"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Electrical", url: "electrical.html" },
      { title: "Solar", url: "solar.html" },
      { title: "Windows", url: "windows.html" },
      { title: "Roofing", url: "roofing.html" }
    ]
  },
  {
    filename: "windows.html",
    service: "Windows",
    service_full: "Window Replacement & Repair",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Energy-efficient double & triple pane replacement windows installed right.",
    meta_desc: "Lower heating and cooling costs with custom replacement windows. Compare quotes from verified local window installation pros.",
    main_title: "How it works for window replacement",
    para1: "Connect with replacement window specialists offering vinyl, wood composite, and aluminum frames with Low-E glass technology.",
    para2: "Stop drafts and lower monthly utility costs with custom-fit windows engineered for maximum weather resistance and curb appeal.",
    benefits: [
      "Double & triple-pane Low-E glass options",
      "Vinyl, wood composite & fiberglass frames",
      "Custom bay, bow, slider & double-hung styles",
      "Professional lifetime installation warranty"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Siding", url: "siding.html" },
      { title: "Gutters", url: "gutters.html" },
      { title: "Roofing", url: "roofing.html" },
      { title: "HVAC", url: "hvac.html" }
    ]
  },
  {
    filename: "gutters.html",
    service: "Gutters",
    service_full: "Gutter Guard & Seamless Gutter Services",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Seamless aluminum gutters, leaf guard protection & downspout routing.",
    meta_desc: "Prevent water damage to your foundation with custom seamless gutters and micro-mesh leaf guards. Free estimates from verified contractors.",
    main_title: "How it works for gutter installation",
    para1: "Connect with local gutter contractors offering seamless aluminum gutters and micro-mesh leaf protection systems.",
    para2: "Shield your foundation and fascia from rainwater damage with fast, zero-obligation estimates from verified pros.",
    benefits: [
      "Custom seamless aluminum & copper gutters",
      "Micro-mesh gutter guard protection",
      "Fascia board repair & downspout routing",
      "Free roofline inspection & estimate"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Roofing", url: "roofing.html" },
      { title: "Siding", url: "siding.html" },
      { title: "Foundations", url: "foundations.html" },
      { title: "Windows", url: "windows.html" }
    ]
  },
  {
    filename: "siding.html",
    service: "Siding",
    service_full: "Siding Repair & Installation",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Durable vinyl, fiber cement & engineered wood siding for maximum curb appeal.",
    meta_desc: "Upgrade your home exterior with durable vinyl, fiber cement, or James Hardie siding. Get free quotes from verified siding contractors.",
    main_title: "How it works for siding replacement",
    para1: "Connect with exterior siding contractors specializing in high-durability vinyl, fiber cement panels, and insulated board-and-batten.",
    para2: "Boost curb appeal and thermal efficiency with free material proposals from state-licensed crews.",
    benefits: [
      "Vinyl, fiber cement & cedar siding options",
      "Insulated siding for enhanced energy savings",
      "Siding repair & full exterior replacement",
      "Licensed exterior installation crews"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Roofing", url: "roofing.html" },
      { title: "Windows", url: "windows.html" },
      { title: "Gutters", url: "gutters.html" },
      { title: "Foundations", url: "foundations.html" }
    ]
  },
  {
    filename: "kitchen-remodel.html",
    service: "Kitchen Remodel",
    service_full: "Kitchen Remodeling & Custom Cabinets",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Custom cabinetry, quartz countertops, island builds & open layouts.",
    meta_desc: "Create your dream kitchen with custom cabinets, quartz countertops, and modern lighting. Compare quotes from verified kitchen remodelers.",
    main_title: "How it works for kitchen remodeling",
    para1: "Connect with premier kitchen design and remodeling contractors who transform outdated kitchens into stunning, functional cooking spaces.",
    para2: "From cabinet refacing and granite island installs to full structural wall removals, receive detailed proposals with zero pressure.",
    benefits: [
      "Custom solid wood cabinetry & refacing",
      "Quartz, granite & marble countertops",
      "Kitchen island builds & open-concept design",
      "Full plumbing, electrical & appliance setup"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Bathroom Remodel", url: "bathroom-remodel.html" },
      { title: "Flooring", url: "flooring.html" },
      { title: "Electrical", url: "electrical.html" },
      { title: "Plumbing", url: "plumbing.html" }
    ]
  },
  {
    filename: "plumbing.html",
    service: "Plumbing",
    service_full: "Plumbing Repair & Installation",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Drain cleaning, tankless water heaters, pipe repair & fixture install.",
    meta_desc: "Fast, reliable plumbing repair, drain cleaning, and tankless water heater installation. Get connected with master plumbers nearby.",
    main_title: "How it works for plumbing services",
    para1: "Connect with licensed master plumbers for emergency leaks, sewer camera inspections, water heater replacements, and bathroom fixture installs.",
    para2: "Solve low water pressure, clogged lines, and aging pipe issues with upfront pricing from trusted local plumbers.",
    benefits: [
      "24/7 Emergency leak repair & drain cleaning",
      "Tankless & conventional water heater installs",
      "Sewer camera inspection & re-piping",
      "Licensed master plumbers with clean guarantees"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Bathroom Remodel", url: "bathroom-remodel.html" },
      { title: "Kitchen Remodel", url: "kitchen-remodel.html" },
      { title: "Foundations", url: "foundations.html" },
      { title: "HVAC", url: "hvac.html" }
    ]
  },
  {
    filename: "electrical.html",
    service: "Electrical",
    service_full: "Electrical Services & Panel Upgrades",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Panel upgrades, EV charger installs, rewiring & custom lighting.",
    meta_desc: "Safe, code-compliant electrical work including panel upgrades, EV chargers, and recessed lighting. Compare local electrician estimates.",
    main_title: "How it works for electrical services",
    para1: "Connect with licensed master electricians for 200-amp panel upgrades, Tesla/EV charger installations, safety rewiring, and smart home setups.",
    para2: "Ensure your home meets current safety codes and supports modern power loads with fast estimates from top local pros.",
    benefits: [
      "200-Amp electrical panel upgrades",
      "Level 2 EV charger & generator wiring",
      "Recessed LED lighting & ceiling fan installs",
      "Licensed & insured master electricians"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Solar", url: "solar.html" },
      { title: "HVAC", url: "hvac.html" },
      { title: "Kitchen Remodel", url: "kitchen-remodel.html" },
      { title: "Garage Doors", url: "garage-doors.html" }
    ]
  },
  {
    filename: "solar.html",
    service: "Solar",
    service_full: "Solar Panel Installation & Battery Backup",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Cut utility bills with high-efficiency solar panels & battery storage.",
    meta_desc: "Harness solar power and lower electric bills. Get free custom solar design proposals and battery storage quotes from certified installers.",
    main_title: "How it works for solar panel installation",
    para1: "Connect with NABCEP-certified solar energy installers who calculate your roof solar potential, net metering, and federal tax credit savings.",
    para2: "Pair solar panels with battery storage solutions to keep power running during outage events while locking in low energy costs.",
    benefits: [
      "30% Federal solar tax credit guidance",
      "High-efficiency solar panels & microinverters",
      "Tesla Powerwall & battery backup systems",
      "NABCEP-certified local installation teams"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Roofing", url: "roofing.html" },
      { title: "Electrical", url: "electrical.html" },
      { title: "HVAC", url: "hvac.html" },
      { title: "Windows", url: "windows.html" }
    ]
  },
  {
    filename: "garage-doors.html",
    service: "Garage Doors",
    service_full: "Garage Door Repair & Replacement",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Spring replacements, smart opener installations & custom steel doors.",
    meta_desc: "Repair broken garage door springs or upgrade to insulated carriage-house doors. Fast local service from top garage door technicians.",
    main_title: "How it works for garage door services",
    para1: "Connect with local garage door technicians for torsion spring repair, off-track fixes, smart Wi-Fi opener upgrades, and new door installs.",
    para2: "Enhance home security and curb appeal with durable insulated steel, wood-grain, and aluminum glass garage doors.",
    benefits: [
      "Same-day spring & cable repair",
      "Insulated steel, composite & carriage doors",
      "Smart Wi-Fi opener & keypad installation",
      "Licensed & safety-inspected garage door pros"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Siding", url: "siding.html" },
      { title: "Electrical", url: "electrical.html" },
      { title: "Windows", url: "windows.html" },
      { title: "Foundations", url: "foundations.html" }
    ]
  },
  {
    filename: "foundations.html",
    service: "Foundations & Waterproofing",
    service_full: "Foundation Repair & Basement Waterproofing",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Crack repair, piering, sump pumps & basement encapsulation.",
    meta_desc: "Protect your structural foundation from settling, wall cracks, and water intrusion. Get free engineering inspections from local specialists.",
    main_title: "How it works for foundation repair",
    para1: "Connect with foundation repair and basement waterproofing specialists who fix wall bowed cracks, sinking slabs, and wet crawl spaces.",
    para2: "Shield your biggest financial asset with steel piers, wall anchors, sump pumps, and heavy-duty vapor barrier encapsulation.",
    benefits: [
      "Helical piering & slab leveling",
      "Foundation crack injection & wall anchors",
      "Basement waterproofing & sump pumps",
      "Transferable lifetime structural warranty"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Gutters", url: "gutters.html" },
      { title: "Plumbing", url: "plumbing.html" },
      { title: "Siding", url: "siding.html" },
      { title: "Flooring", url: "flooring.html" }
    ]
  },

  // --- 4 INSURANCE SUBPAGES ---
  {
    filename: "auto-insurance.html",
    service: "Auto Insurance",
    service_full: "Auto Insurance Coverage",
    category: "Insurance",
    cat_slug: "insurance",
    tagline: "Comprehensive, collision & liability coverage tailored for your vehicle.",
    meta_desc: "Compare auto insurance rates from top national carriers. Save up to $500/year on car insurance with free personalized quotes.",
    main_title: "How it works for auto insurance",
    para1: "Connect with licensed auto insurance agents to compare liability, collision, comprehensive, and uninsured motorist coverage options.",
    para2: "Discover potential discounts for safe driving, multi-car bundling, and low annual mileage without sitting through pushy sales tactics.",
    benefits: [
      "Comprehensive, collision & liability coverage",
      "Safe driver & multi-policy discount options",
      "24/7 Roadside assistance & rental reimbursement",
      "Fast, zero-obligation rate comparison"
    ],
    related_heading: "Other insurance you might need",
    related: [
      { title: "Health Insurance", url: "health-insurance.html" },
      { title: "Home Insurance", url: "home-insurance.html" },
      { title: "Life Insurance", url: "life-insurance.html" }
    ]
  },
  {
    filename: "health-insurance.html",
    service: "Health Insurance",
    service_full: "Health Insurance Plans",
    category: "Insurance",
    cat_slug: "insurance",
    tagline: "Individual, family & small business health plans with comprehensive care.",
    meta_desc: "Find affordable health insurance coverage for individuals and families. Compare ACA plans, HMOs, and PPOs with subsidy guidance.",
    main_title: "How it works for health insurance",
    para1: "Connect with health insurance advisors to evaluate ACA marketplace plans, private coverage options, dental/vision riders, and HSA plans.",
    para2: "Get expert assistance determining tax subsidy eligibility so you can lock in affordable monthly premiums for your family.",
    benefits: [
      "ACA compliant, HMO & PPO network plans",
      "Subsidy eligibility calculation & guidance",
      "Add-on dental, vision & prescription coverage",
      "Zero agent consultation fees"
    ],
    related_heading: "Other insurance you might need",
    related: [
      { title: "Auto Insurance", url: "auto-insurance.html" },
      { title: "Home Insurance", url: "home-insurance.html" },
      { title: "Life Insurance", url: "life-insurance.html" }
    ]
  },
  {
    filename: "home-insurance.html",
    service: "Home Insurance",
    service_full: "Homeowners Insurance",
    category: "Insurance",
    cat_slug: "insurance",
    tagline: "Protect your home, roof & personal property from storm, fire & liability.",
    meta_desc: "Protect your home and personal property against fire, storm, and theft. Get free homeowners insurance quotes from top carriers.",
    main_title: "How it works for homeowners insurance",
    para1: "Connect with licensed homeowners insurance agents to safeguard your dwelling, roof, and personal belongings from loss.",
    para2: "Compare coverage limits, flood riders, and home-auto bundling discounts to save on your annual premiums.",
    benefits: [
      "Dwelling, roof & personal property coverage",
      "Liability protection & medical payments",
      "Bundling discounts with auto insurance",
      "Custom deductible & endorsement options"
    ],
    related_heading: "Other insurance you might need",
    related: [
      { title: "Auto Insurance", url: "auto-insurance.html" },
      { title: "Health Insurance", url: "health-insurance.html" },
      { title: "Life Insurance", url: "life-insurance.html" }
    ]
  },
  {
    filename: "life-insurance.html",
    service: "Life Insurance",
    service_full: "Life Insurance Coverage",
    category: "Insurance",
    cat_slug: "insurance",
    tagline: "Term & whole life insurance policies to protect your family's future.",
    meta_desc: "Secure financial peace of mind for your loved ones with term or whole life insurance. Get free quotes starting under $1/day.",
    main_title: "How it works for life insurance",
    para1: "Connect with life insurance specialists offering flexible 10 to 30-year term and permanent whole life policy options.",
    para2: "Protect your family's financial security with affordable rates, including no-medical-exam plan options.",
    benefits: [
      "10, 20 & 30 year term life options",
      "Permanent whole & universal life policies",
      "No-medical-exam coverage options available",
      "Rates starting under $1/day"
    ],
    related_heading: "Other insurance you might need",
    related: [
      { title: "Auto Insurance", url: "auto-insurance.html" },
      { title: "Health Insurance", url: "health-insurance.html" },
      { title: "Home Insurance", url: "home-insurance.html" }
    ]
  },
  {
    filename: "medicare-insurance.html",
    service: "Medicare",
    service_full: "Medicare Coverage",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Get help comparing Medicare options from licensed agents.",
    meta_desc: "Get help comparing Medicare Advantage, Medigap supplements, and Part D prescription options from independent licensed agents.",
    main_title: "How it works for Medicare",
    para1: "Navigating Medicare options can feel overwhelming with numerous plans, rules, and enrollment deadlines. CallAxis connects you with independent, licensed insurance agents who can help clarify your options and guide you through the process.",
    para2: "Whether you are approaching age 65 or looking to evaluate your current healthcare coverage during an open enrollment period, compare available options with professional guidance at no cost to you.",
    benefits: [
      "Medicare Advantage plan comparisons",
      "Medicare Supplement (Medigap) options",
      "Part D prescription drug coverage",
      "Guidance during enrollment periods"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Roofing", url: "roofing.html" },
      { title: "HVAC", url: "hvac.html" },
      { title: "Plumbing", url: "plumbing.html" },
      { title: "Electrical", url: "electrical.html" }
    ]
  }
];

// DUMMY NUMBER, REPLACE WITH CLIENT'S REAL NUMBER
const PHONE_DISPLAY = "+1 (555) 010-0123";
const PHONE_TEL = "+15550100123";

// DUMMY ADDRESS, REPLACE WITH CLIENT'S REAL ADDRESS
const ADDRESS_DISPLAY = "1234 Business Park Drive, Suite 100, Dover, DE 19901";

const SITE_CONFIG = {
  address: ADDRESS_DISPLAY,
  phone: PHONE_DISPLAY,
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  email: "arsalanmanunited@gmail.com"
};

const sharedFooterHTML = `  <!-- Shared Site Footer -->
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="brand-logo" style="margin-bottom:16px; display:inline-flex; align-items:center; gap:8px; text-decoration:none;">
          <img src="logo.jpg" alt="CallAxis Logo" style="width:32px;height:32px;border-radius:6px;object-fit:cover;">
          <span class="logo-text"><span class="footer-brand-call">Call</span><span class="footer-brand-axis">Axis</span></span>
        </a>
        <p class="footer-desc">Connecting US consumers with trusted insurance agents and home service contractors — free, fast, and no obligation.</p>
        
        <div class="footer-contact">
          <div class="footer-contact-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:+15550100123" class="footer-link" style="color:inherit;text-decoration:none;">+1 (555) 010-0123</a>
          </div>
          <div class="footer-contact-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${SITE_CONFIG.address}</span>
          </div>
          <div class="footer-contact-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <a href="mailto:arsalanmanunited@gmail.com" class="footer-link" style="color:inherit;text-decoration:none;">arsalanmanunited@gmail.com</a>
          </div>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">INSURANCE</h4>
        <ul class="footer-list">
          <li><a href="auto-insurance.html" class="footer-link">Auto Insurance</a></li>
          <li><a href="health-insurance.html" class="footer-link">Health Insurance</a></li>
          <li><a href="home-insurance.html" class="footer-link">Home Insurance</a></li>
          <li><a href="life-insurance.html" class="footer-link">Life Insurance</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">HOME SERVICES</h4>
        <ul class="footer-list">
          <li><a href="roofing.html" class="footer-link">Roofing</a></li>
          <li><a href="bathroom-remodel.html" class="footer-link">Bathroom Remodel</a></li>
          <li><a href="hvac.html" class="footer-link">HVAC</a></li>
          <li><a href="solar.html" class="footer-link">Solar</a></li>
          <li><a href="medicare-insurance.html" class="footer-link">Medicare</a></li>
          <li><a href="home-services.html" class="footer-link">View all &rarr;</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">COMPANY</h4>
        <ul class="footer-list">
          <li><a href="about.html" class="footer-link">About Us</a></li>
          <li><a href="contact.html" class="footer-link">Contact</a></li>
          <li><a href="privacy-policy.html" class="footer-link">Privacy Policy</a></li>
          <li><a href="terms.html" class="footer-link">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2026 CallAxis. All rights reserved.</span>
      <span><a href="privacy-policy.html" class="footer-link">Privacy Policy</a> · <a href="terms.html" class="footer-link">Terms of Service</a></span>
    </div>
  </footer>`;

// Shared Hero Component Generator
function generateHeroHTML({ category, cat_slug, service, tagline, isOverview = false }) {
  const isInsurance = category.toLowerCase().includes('insurance');
  const isMedicare = service.toLowerCase() === 'medicare';

  let disclaimerP1 = isInsurance
    ? `<strong>Disclaimer:</strong> CallAxis is a free referral service. We are not an insurance carrier, agency or broker, and we do not issue policies or give coverage advice. The agents we connect you with are independent and licensed in their own right.`
    : `<strong>Disclaimer:</strong> CallAxis is a free service that helps homeowners get in touch with local home service providers. The contractors we connect you with are independent businesses. CallAxis does not perform the work and does not guarantee its quality. Before hiring, please check that the provider holds the licenses and insurance required for the job in your state.`;

  let disclaimerP2 = isInsurance
    ? `Quotes, coverage options and availability vary by state and by applicant, and a quote request does not guarantee coverage.`
    : `Same-day and 24/7 emergency service depends on provider participation, your location, technician availability and demand. Availability is not guaranteed and can vary by market and appointment capacity.`;

  let medicareComment = '';
  if (isMedicare) {
    medicareComment = '<!-- CLIENT TO CONFIRM required Medicare marketing disclaimers with compliance -->\n          ';
    disclaimerP1 = `<strong>Disclaimer:</strong> CallAxis is a free referral service, not an insurance carrier, agency or broker. CallAxis is not connected with, affiliated with, or endorsed by the U.S. government or the federal Medicare program.`;
    disclaimerP2 = `The agents we connect you with are independent and licensed in their respective jurisdictions. Plans, benefits, and availability vary by location, carrier, and eligibility.`;
  }

  const breadcrumbHTML = isOverview
    ? `<nav class="hero-breadcrumb" aria-label="Breadcrumb" data-animate="fade-up">
          <a href="index.html">Home</a><span class="sep">/</span><span class="current">${category}</span>
        </nav>`
    : `<nav class="hero-breadcrumb" aria-label="Breadcrumb" data-animate="fade-up">
          <a href="index.html">Home</a><span class="sep">/</span><a href="${cat_slug}.html">${category}</a><span class="sep">/</span><span class="current">${service}</span>
        </nav>`;

  const disclaimerHTML = isOverview ? '' : `
        <hr class="hero-divider" data-animate="fade-up" />

        <div class="hero-disclaimer-wrap">
          ${medicareComment}<p class="hero-disclaimer-p" data-animate="fade-up">${disclaimerP1}</p>
          <p class="hero-disclaimer-p" data-animate="fade-up">${disclaimerP2}</p>
        </div>`;

  return `  <!-- 1. Inner Hero (Dark Navy, Hero Block) -->
  <section class="inner-hero dark-surface">
    <div class="container">
      <div class="hero-block">
        ${breadcrumbHTML}

        <p class="hero-label hero-pill eyebrow-pill" data-animate="fade-up">${category.toUpperCase()}</p>
        <h1 class="hero-title" data-animate="fade-up">${service}</h1>
        <p class="hero-desc" data-animate="fade-up">${tagline}</p>

        <div class="hero-buttons" data-animate="fade-up">
          <a href="tel:+15550100123" class="btn btn-accent btn-lg">Call Now: +1 (555) 010-0123</a>
          <a href="#quoteForm" class="btn btn-ghost btn-lg" id="hero-quote-btn">Get my free quote &rarr;</a>
        </div>${disclaimerHTML}
      </div>
    </div>
  </section>`;
}

// Generator for Subpages
function generateSubpageHTML(data) {
  const {
    filename, service, service_full, category, cat_slug, tagline, meta_desc,
    main_title, para1, para2, benefits, related_heading, related
  } = data;

  const heroHTML = generateHeroHTML({
    category,
    cat_slug,
    service,
    tagline,
    isOverview: false
  });

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${service_full} | CallAxis Referral Network</title>
  <meta name="description" content="${meta_desc}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
    <!-- Apply saved theme before first paint to prevent flash -->
  <script>
    (function() {
      try {
        var savedTheme = localStorage.getItem('callaxis_theme');
        if (savedTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else if (savedTheme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      } catch (e) {}
    })();
  </script>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Top Announcement Bar -->
  <div class="top-ticker-bar" role="region" aria-label="Announcement ticker">
    <div class="ticker-track">
      <div class="ticker-group">
        <span class="ticker-item">📞 Call Us Direct: <strong>+1 (555) 010-0123</strong></span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">✉️ Email: <strong>arsalanmanunited@gmail.com</strong></span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">⚡ 100% Free, No-Obligation Quotes</span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">🇺🇸 Serving All 50 U.S. States</span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">🛡️ Licensed & Verified Providers Only</span>
        <span class="ticker-sep">•</span>
      </div>
      <div class="ticker-group" aria-hidden="true">
        <span class="ticker-item">📞 Call Us Direct: <strong>+1 (555) 010-0123</strong></span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">✉️ Email: <strong>arsalanmanunited@gmail.com</strong></span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">⚡ 100% Free, No-Obligation Quotes</span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">🇺🇸 Serving All 50 U.S. States</span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">🛡️ Licensed & Verified Providers Only</span>
        <span class="ticker-sep">•</span>
      </div>
    </div>
  </div>

  <!-- Sticky Navbar -->
  <header class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-logo" aria-label="CallAxis Homepage">
        <img src="logo.jpg" alt="CallAxis Logo" class="brand-logo-img">
        <span class="logo-text">Call<span class="logo-accent">Axis</span></span>
      </a>

      <div class="nav-links-wrap">
        <div class="nav-indicator" id="nav-indicator"></div>
        <nav class="nav-links" id="nav-menu">
          <!-- Insurance Dropdown -->
          <div class="nav-dropdown">
            <a href="insurance.html" class="dropdown-trigger">
              Insurance
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="dropdown-menu insurance-menu" role="menu">
              <div class="menu-grid single-col-grid">
                <a href="insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">All Insurance</span></a>
                <a href="auto-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Auto Insurance</span></a>
                <a href="health-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Health Insurance</span></a>
                <a href="home-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Home Insurance</span></a>
                <a href="life-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Life Insurance</span></a>
              </div>
            </div>
          </div>

          <!-- Home Services Dropdown -->
          <div class="nav-dropdown">
            <a href="home-services.html" class="dropdown-trigger">
              Home Services
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="dropdown-menu mega-menu" role="menu">
              <div class="menu-grid">
                <a href="roofing.html" class="dropdown-item" role="menuitem"><span class="item-title">Roofing</span></a>
                <a href="bathroom-remodel.html" class="dropdown-item" role="menuitem"><span class="item-title">Bathroom Remodel</span></a>
                <a href="flooring.html" class="dropdown-item" role="menuitem"><span class="item-title">Flooring</span></a>
                <a href="hvac.html" class="dropdown-item" role="menuitem"><span class="item-title">HVAC</span></a>
                <a href="windows.html" class="dropdown-item" role="menuitem"><span class="item-title">Windows</span></a>
                <a href="gutters.html" class="dropdown-item" role="menuitem"><span class="item-title">Gutters</span></a>
                <a href="siding.html" class="dropdown-item" role="menuitem"><span class="item-title">Siding</span></a>
                <a href="kitchen-remodel.html" class="dropdown-item" role="menuitem"><span class="item-title">Kitchen Remodel</span></a>
                <a href="plumbing.html" class="dropdown-item" role="menuitem"><span class="item-title">Plumbing</span></a>
                <a href="electrical.html" class="dropdown-item" role="menuitem"><span class="item-title">Electrical</span></a>
                <a href="solar.html" class="dropdown-item" role="menuitem"><span class="item-title">Solar</span></a>
                <a href="garage-doors.html" class="dropdown-item" role="menuitem"><span class="item-title">Garage Doors</span></a>
                <a href="foundations.html" class="dropdown-item" role="menuitem"><span class="item-title">Foundations &amp; Waterproofing</span></a>
                <a href="medicare-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Medicare</span></a>
                <a href="home-services.html" class="dropdown-item view-all-item" role="menuitem"><span class="item-title">View All &rarr;</span></a>
              </div>
            </div>
          </div>

          <a href="about.html" class="nav-link">About</a>
          <a href="contact.html" class="nav-link">Contact</a>
        </nav>
      </div>

      <div class="nav-actions">
        <button type="button" class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Toggle dark/light theme">
          <svg class="theme-icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="theme-icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>

        <a href="tel:+15550100123" class="phone-link" aria-label="Call CallAxis Directly">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span class="phone-number">+1 (555) 010-0123</span>
        </a>

        <a href="#quoteForm" class="btn btn-teal nav-quote-btn">Get a Free Quote</a>

        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </header>

  ${heroHTML}

  <!-- 2. Two-Column Content Section (How it works + Sticky 3-step quote form) -->
  <section class="content-section" id="how-it-works-sec">
    <div class="container content-columns">
      
      <!-- Left Column: How it works & 2x2 Benefit Grid -->
      <div class="content-left">
        <h2 class="reveal-heading" data-animate="fade-up">${main_title}</h2>
        <p data-animate="fade-up">${para1}</p>
        <p data-animate="fade-up">${para2}</p>

        <div class="benefit-grid">
          ${benefits.map(b => `
          <div class="benefit-card" data-animate="fade-up">
            <div class="benefit-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <p>${b}</p>
          </div>`).join('')}
        </div>
      </div>

      <!-- Right Column: Working 3-Step Quote Form -->
      <div class="content-right">
        <form class="quote-form sticky-quote" id="quoteForm" novalidate>
          <div class="form-progress">
            <span class="step-label" id="stepLabel">Step 1 of 3</span>
            <div class="progress-track">
              <div class="progress-fill" id="progressFill" style="width: 33.3%;"></div>
            </div>
          </div>

          <!-- Step 1: Confirm Service & Zip Code -->
          <div class="form-step active" data-step="1">
            <h3>Confirm your service</h3>
            <div class="confirmed-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <div class="info">
                <strong>${service}</strong>
                <span>${category}</span>
              </div>
            </div>
            <input type="hidden" name="service" value="${service}">
            <input type="hidden" name="category" value="${category}">

            <label class="field">
              <span>Your zip code *</span>
              <input type="text" name="zip" id="zipInput" placeholder="Enter 5-digit zip code" maxlength="5" pattern="[0-9]{5}" required />
              <span class="field-error" id="zipError" style="display:none; color:#EF4444; font-size:12.5px; margin-top:4px;">Please enter a valid 5-digit US zip code.</span>
            </label>

            <button type="button" class="btn btn-accent btn-block next-step">Continue &rarr;</button>
          </div>

          <!-- Step 2: Timeline Selection -->
          <div class="form-step" data-step="2">
            <h3>How soon do you need this?</h3>
            <label class="field">
              <span>Timeline *</span>
              <select name="timeline" id="timelineSelect" required>
                <option value="">Select timeline</option>
                <option value="As soon as possible">As soon as possible</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="1-3 months">1–3 months</option>
                <option value="Just researching">Just researching</option>
              </select>
              <span class="field-error" id="timelineError" style="display:none; color:#EF4444; font-size:12.5px; margin-top:4px;">Please select a timeline.</span>
            </label>

            <div class="form-nav">
              <button type="button" class="btn btn-ghost prev-step">&larr; Back</button>
              <button type="button" class="btn btn-accent next-step">Continue &rarr;</button>
            </div>
          </div>

          <!-- Step 3: Contact Info -->
          <div class="form-step" data-step="3">
            <h3>How should we reach you?</h3>
            <label class="field">
              <span>Full name *</span>
              <input type="text" name="name" id="nameInput" placeholder="Jane Doe" required />
            </label>
            <label class="field">
              <span>Phone number *</span>
              <input type="tel" name="phone" id="phoneInput" placeholder="(555) 123-4567" required />
            </label>
            <label class="field">
              <span>Email address *</span>
              <input type="email" name="email" id="emailInput" placeholder="you@example.com" required />
            </label>

            <p class="fine-print">By submitting, you agree to our <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms.html">Terms of Service</a>. A verified provider may call you at the number provided.</p>

            <div class="form-nav">
              <button type="button" class="btn btn-ghost prev-step">&larr; Back</button>
              <button type="submit" class="btn btn-accent">Get My Free Quote &rarr;</button>
            </div>
          </div>

          <!-- Success State -->
          <div class="form-step success-step" data-step="success" style="display:none;">
            <div class="success-icon">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <h3>You're all set, <span id="successName">there</span>!</h3>
            <p>A verified local provider will call <span id="successPhone">you</span> shortly. Keep your phone nearby.</p>
            <a href="tel:+15550100123" class="btn btn-ghost btn-block">Or call us now: +1 (555) 010-0123</a>
          </div>
        </form>
      </div>

    </div>
  </section>

  <!-- 3. RELATED Section -->
  <section class="content-section tight">
    <div class="container text-center">
      <div class="section-head">
        <div class="related-pill" data-animate="fade-up">RELATED</div>
        <h2 class="reveal-heading" data-animate="fade-up">${related_heading}</h2>
      </div>

      <div class="related-grid">
        ${related.map(r => `<a href="${r.url}" class="related-card" data-animate="fade-up">${r.title}</a>`).join('')}
      </div>
    </div>
  </section>

${sharedFooterHTML}

  <script src="script.js"></script>
</body>
</html>`;
}

// Generate Home Services Overview Page
function generateHomeServicesOverviewHTML() {
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home Services Referral Network | CallAxis</title>
  <meta name="description" content="Find trusted local contractors for any home improvement or repair project — verified, licensed, and free to connect with.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
    <!-- Apply saved theme before first paint to prevent flash -->
  <script>
    (function() {
      try {
        var savedTheme = localStorage.getItem('callaxis_theme');
        if (savedTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else if (savedTheme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      } catch (e) {}
    })();
  </script>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Top Announcement Bar -->
  <div class="top-ticker-bar" role="region" aria-label="Announcement ticker">
    <div class="ticker-track">
      <div class="ticker-group">
        <span class="ticker-item">📞 Call Us Direct: <strong>+1 (555) 010-0123</strong></span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">✉️ Email: <strong>arsalanmanunited@gmail.com</strong></span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">⚡ 100% Free, No-Obligation Quotes</span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">🇺🇸 Serving All 50 U.S. States</span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">🛡️ Licensed & Verified Providers Only</span>
        <span class="ticker-sep">•</span>
      </div>
    </div>
  </div>

  <!-- Sticky Navbar -->
  <header class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-logo" aria-label="CallAxis Homepage">
        <img src="logo.jpg" alt="CallAxis Logo" class="brand-logo-img">
        <span class="logo-text">Call<span class="logo-accent">Axis</span></span>
      </a>

      <div class="nav-links-wrap">
        <div class="nav-indicator" id="nav-indicator"></div>
        <nav class="nav-links" id="nav-menu" aria-label="Main Navigation">
          <!-- Insurance Dropdown -->
          <div class="nav-dropdown">
            <a href="insurance.html" class="dropdown-trigger">
              Insurance
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="dropdown-menu insurance-menu" role="menu">
              <div class="menu-grid single-col-grid">
                <a href="insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">All Insurance</span></a>
                <a href="auto-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Auto Insurance</span></a>
                <a href="health-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Health Insurance</span></a>
                <a href="home-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Home Insurance</span></a>
                <a href="life-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Life Insurance</span></a>
                <a href="medicare-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Medicare</span></a>
              </div>
            </div>
          </div>

          <!-- Home Services Dropdown -->
          <div class="nav-dropdown">
            <a href="home-services.html" class="dropdown-trigger">
              Home Services
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="dropdown-menu mega-menu" role="menu">
              <div class="menu-grid">
                <a href="roofing.html" class="dropdown-item" role="menuitem"><span class="item-title">Roofing</span></a>
                <a href="bathroom-remodel.html" class="dropdown-item" role="menuitem"><span class="item-title">Bathroom Remodel</span></a>
                <a href="flooring.html" class="dropdown-item" role="menuitem"><span class="item-title">Flooring</span></a>
                <a href="hvac.html" class="dropdown-item" role="menuitem"><span class="item-title">HVAC</span></a>
                <a href="windows.html" class="dropdown-item" role="menuitem"><span class="item-title">Windows</span></a>
                <a href="gutters.html" class="dropdown-item" role="menuitem"><span class="item-title">Gutters</span></a>
                <a href="siding.html" class="dropdown-item" role="menuitem"><span class="item-title">Siding</span></a>
                <a href="kitchen-remodel.html" class="dropdown-item" role="menuitem"><span class="item-title">Kitchen Remodel</span></a>
                <a href="plumbing.html" class="dropdown-item" role="menuitem"><span class="item-title">Plumbing</span></a>
                <a href="electrical.html" class="dropdown-item" role="menuitem"><span class="item-title">Electrical</span></a>
                <a href="solar.html" class="dropdown-item" role="menuitem"><span class="item-title">Solar</span></a>
                <a href="garage-doors.html" class="dropdown-item" role="menuitem"><span class="item-title">Garage Doors</span></a>
                <a href="foundations.html" class="dropdown-item" role="menuitem"><span class="item-title">Foundations &amp; Waterproofing</span></a>
                <a href="home-services.html" class="dropdown-item view-all-item" role="menuitem"><span class="item-title">View All &rarr;</span></a>
              </div>
            </div>
          </div>

          <a href="about.html" class="nav-link">About</a>
          <a href="contact.html" class="nav-link">Contact</a>
        </nav>
      </div>

      <div class="nav-actions">
        <button type="button" class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Toggle dark/light theme">
          <svg class="theme-icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="theme-icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>

        <a href="tel:+15550100123" class="phone-link" aria-label="Call CallAxis Directly">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span class="phone-number">+1 (555) 010-0123</span>
        </a>

        <a href="#quoteForm" class="btn btn-teal nav-quote-btn">Get a Free Quote</a>

        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </header>

  ${generateHeroHTML({
    category: "Home Services",
    cat_slug: "home-services",
    service: "Home Services",
    tagline: "Find trusted local contractors for any home improvement or repair project — verified, licensed, and free to connect with.",
    isOverview: true
  })}

  <!-- Quote Form Section -->
  <section class="content-section tight" id="quoteFormSec">
    <div class="container">
      <div class="section-head text-center" style="max-width:560px;margin:0 auto 24px;">
        <div class="eyebrow">FREE QUOTE</div>
        <h2>Get connected with a provider</h2>
        <p>Select your service and enter your zip code to match with verified local contractors.</p>
      </div>

      <form class="quote-form" id="quoteForm" novalidate style="max-width:560px;margin:0 auto;">
        <div class="form-progress">
          <span class="step-label" id="stepLabel">Step 1 of 3</span>
          <div class="progress-track"><div class="progress-fill" id="progressFill" style="width:33.3%;"></div></div>
        </div>

        <div class="form-step active" data-step="1">
          <h3>What do you need?</h3>
          <input type="hidden" name="category" value="Home Services">
          <label class="field">
            <span>Specific service *</span>
            <select name="service" id="serviceSelect" required>
              <option value="">Select a service</option>
              <option value="Roofing">Roofing</option>
              <option value="Bathroom Remodel">Bathroom Remodel</option>
              <option value="Flooring">Flooring</option>
              <option value="HVAC">HVAC</option>
              <option value="Windows">Windows</option>
              <option value="Gutters">Gutters</option>
              <option value="Siding">Siding</option>
              <option value="Kitchen Remodel">Kitchen Remodel</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Solar">Solar</option>
              <option value="Garage Doors">Garage Doors</option>
              <option value="Foundations & Waterproofing">Foundations & Waterproofing</option>
              <option value="Medicare">Medicare</option>
            </select>
          </label>
          <label class="field">
            <span>Your zip code *</span>
            <input type="text" name="zip" id="zipInput" placeholder="Enter 5-digit zip code" maxlength="5" pattern="[0-9]{5}" required />
          </label>
          <button type="button" class="btn btn-accent btn-block next-step">Continue &rarr;</button>
        </div>

        <div class="form-step" data-step="2">
          <h3>How soon do you need this?</h3>
          <label class="field">
            <span>Timeline *</span>
            <select name="timeline" required>
              <option value="">Select timeline</option>
              <option value="As soon as possible">As soon as possible</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1-3 months">1–3 months</option>
              <option value="Just researching">Just researching</option>
            </select>
          </label>
          <div class="form-nav">
            <button type="button" class="btn btn-ghost prev-step">&larr; Back</button>
            <button type="button" class="btn btn-accent next-step">Continue &rarr;</button>
          </div>
        </div>

        <div class="form-step" data-step="3">
          <h3>How should we reach you?</h3>
          <label class="field"><span>Full name *</span><input type="text" name="name" placeholder="Jane Doe" required /></label>
          <label class="field"><span>Phone number *</span><input type="tel" name="phone" placeholder="(555) 123-4567" required /></label>
          <label class="field"><span>Email address *</span><input type="email" name="email" placeholder="you@example.com" required /></label>
          <p class="fine-print">By submitting, you agree to our <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms.html">Terms of Service</a>.</p>
          <div class="form-nav">
            <button type="button" class="btn btn-ghost prev-step">&larr; Back</button>
            <button type="submit" class="btn btn-accent">Get My Free Quote &rarr;</button>
          </div>
        </div>

        <div class="form-step success-step" data-step="success" style="display:none;">
          <div class="success-icon"><svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h3>You're all set!</h3>
          <p>A verified local contractor will call you shortly.</p>
          <a href="tel:+15550100123" class="btn btn-ghost btn-block">Or call us now: +1 (555) 010-0123</a>
        </div>
      </form>
    </div>
  </section>

  <!-- Hub Grid Section -->
  <section class="content-section">
    <div class="container">
      <div class="section-head text-center" style="margin-bottom:36px;">
        <div class="eyebrow">EXPLORE SERVICES</div>
        <h2>All Home Improvement Services</h2>
        <p style="color:var(--text-muted); font-size:15px; margin-top:8px;">Compare verified local contractors for any home repair or renovation project.</p>
      </div>

      <div class="hub-grid">
        <a href="roofing.html" class="hub-card card-hover hue-teal" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11l9-7 9 7"/><path d="M5 10.5V19a1 1 0 001 1h12a1 1 0 001-1v-8.5"/></svg></div>
          <h3>Roofing</h3>
          <p>Repairs, replacements & storm damage — handled by pros.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="bathroom-remodel.html" class="hub-card card-hover hue-blue" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3z"/></svg></div>
          <h3>Bathroom Remodel</h3>
          <p>From quick refreshes to full gut renovations.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="flooring.html" class="hub-card card-hover hue-amber" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg></div>
          <h3>Flooring</h3>
          <p>Hardwood, tile, laminate & LVP, installed right.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="hvac.html" class="hub-card card-hover hue-rose" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c1 3-2 4-2 7a4 4 0 008 0"/></svg></div>
          <h3>HVAC</h3>
          <p>Heating & cooling repairs, tune-ups and replacements.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="windows.html" class="hub-card card-hover hue-violet" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 4v16M4 12h16"/></svg></div>
          <h3>Windows</h3>
          <p>Energy-efficient replacement windows, professionally installed.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="gutters.html" class="hub-card card-hover hue-cyan" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3c3 4 6 7.5 6 11a6 6 0 01-12 0c0-3.5 3-7 6-11z"/></svg></div>
          <h3>Gutters</h3>
          <p>Seamless gutter installation, leaf guards & downspouts.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="siding.html" class="hub-card card-hover hue-teal" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg></div>
          <h3>Siding</h3>
          <p>Vinyl, fiber cement & engineered wood siding.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="kitchen-remodel.html" class="hub-card card-hover hue-blue" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v6H4z"/><path d="M4 14h16v6H4z"/></svg></div>
          <h3>Kitchen Remodel</h3>
          <p>Custom cabinets, quartz countertops & full renovations.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="plumbing.html" class="hub-card card-hover hue-amber" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M5 12h14"/></svg></div>
          <h3>Plumbing</h3>
          <p>Drain cleaning, tankless water heaters & leak repairs.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="electrical.html" class="hub-card card-hover hue-rose" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <h3>Electrical</h3>
          <p>200-Amp panel upgrades, EV chargers & rewiring.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="solar.html" class="hub-card card-hover hue-violet" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2"/></svg></div>
          <h3>Solar</h3>
          <p>Harness solar energy & lower electric bills.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="garage-doors.html" class="hub-card card-hover hue-cyan" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 14h18"/></svg></div>
          <h3>Garage Doors</h3>
          <p>Spring repair, Wi-Fi openers & insulated doors.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="foundations.html" class="hub-card card-hover hue-teal" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V7l7-4 7 4v14"/></svg></div>
          <h3>Foundations & Waterproofing</h3>
          <p>Crack repair, piers, sump pumps & encapsulation.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="medicare-insurance.html" class="hub-card card-hover hue-cyan" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <h3>Medicare</h3>
          <p>Get help comparing Medicare Advantage, Supplement &amp; Part D options.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>
      </div>
    </div>
  </section>

${sharedFooterHTML}

  <script src="script.js"></script>
</body>
</html>`;
}

// Generate Insurance Overview Page
function generateInsuranceOverviewHTML() {
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Insurance Referral Network | CallAxis</title>
  <meta name="description" content="Compare quotes for Auto, Health, Home, and Life insurance from top-rated licensed carriers nationwide.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
    <!-- Apply saved theme before first paint to prevent flash -->
  <script>
    (function() {
      try {
        var savedTheme = localStorage.getItem('callaxis_theme');
        if (savedTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else if (savedTheme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      } catch (e) {}
    })();
  </script>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Top Announcement Bar -->
  <div class="top-ticker-bar" role="region" aria-label="Announcement ticker">
    <div class="ticker-track">
      <div class="ticker-group">
        <span class="ticker-item">📞 Call Us Direct: <strong>+1 (555) 010-0123</strong></span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">✉️ Email: <strong>arsalanmanunited@gmail.com</strong></span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">⚡ 100% Free, No-Obligation Quotes</span>
        <span class="ticker-sep">•</span>
        <span class="ticker-item">🇺🇸 Serving All 50 U.S. States</span>
        <span class="ticker-sep">•</span>
      </div>
    </div>
  </div>

  <!-- Sticky Navbar -->
  <header class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-logo" aria-label="CallAxis Homepage">
        <img src="logo.jpg" alt="CallAxis Logo" class="brand-logo-img">
        <span class="logo-text">Call<span class="logo-accent">Axis</span></span>
      </a>

      <div class="nav-links-wrap">
        <div class="nav-indicator" id="nav-indicator"></div>
        <nav class="nav-links" id="nav-menu" aria-label="Main Navigation">
          <!-- Insurance Dropdown -->
          <div class="nav-dropdown">
            <a href="insurance.html" class="dropdown-trigger">
              Insurance
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="dropdown-menu insurance-menu" role="menu">
              <div class="menu-grid single-col-grid">
                <a href="insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">All Insurance</span></a>
                <a href="auto-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Auto Insurance</span></a>
                <a href="health-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Health Insurance</span></a>
                <a href="home-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Home Insurance</span></a>
                <a href="life-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Life Insurance</span></a>
              </div>
            </div>
          </div>

          <!-- Home Services Dropdown -->
          <div class="nav-dropdown">
            <a href="home-services.html" class="dropdown-trigger">
              Home Services
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="dropdown-menu mega-menu" role="menu">
              <div class="menu-grid">
                <a href="roofing.html" class="dropdown-item" role="menuitem"><span class="item-title">Roofing</span></a>
                <a href="bathroom-remodel.html" class="dropdown-item" role="menuitem"><span class="item-title">Bathroom Remodel</span></a>
                <a href="flooring.html" class="dropdown-item" role="menuitem"><span class="item-title">Flooring</span></a>
                <a href="hvac.html" class="dropdown-item" role="menuitem"><span class="item-title">HVAC</span></a>
                <a href="windows.html" class="dropdown-item" role="menuitem"><span class="item-title">Windows</span></a>
                <a href="gutters.html" class="dropdown-item" role="menuitem"><span class="item-title">Gutters</span></a>
                <a href="siding.html" class="dropdown-item" role="menuitem"><span class="item-title">Siding</span></a>
                <a href="kitchen-remodel.html" class="dropdown-item" role="menuitem"><span class="item-title">Kitchen Remodel</span></a>
                <a href="plumbing.html" class="dropdown-item" role="menuitem"><span class="item-title">Plumbing</span></a>
                <a href="electrical.html" class="dropdown-item" role="menuitem"><span class="item-title">Electrical</span></a>
                <a href="solar.html" class="dropdown-item" role="menuitem"><span class="item-title">Solar</span></a>
                <a href="garage-doors.html" class="dropdown-item" role="menuitem"><span class="item-title">Garage Doors</span></a>
                <a href="foundations.html" class="dropdown-item" role="menuitem"><span class="item-title">Foundations &amp; Waterproofing</span></a>
                <a href="medicare-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Medicare</span></a>
                <a href="home-services.html" class="dropdown-item view-all-item" role="menuitem"><span class="item-title">View All &rarr;</span></a>
              </div>
            </div>
          </div>

          <a href="about.html" class="nav-link">About</a>
          <a href="contact.html" class="nav-link">Contact</a>
        </nav>
      </div>

      <div class="nav-actions">
        <button type="button" class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Toggle dark/light theme">
          <svg class="theme-icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="theme-icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>

        <a href="tel:+15550100123" class="phone-link" aria-label="Call CallAxis Directly">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span class="phone-number">+1 (555) 010-0123</span>
        </a>

        <a href="#quoteForm" class="btn btn-teal nav-quote-btn">Get a Free Quote</a>

        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </header>

  ${generateHeroHTML({
    category: "Insurance",
    cat_slug: "insurance",
    service: "Insurance Plans",
    tagline: "Compare policies from top-rated carriers for auto, health, home, and life coverage — fast and hassle-free.",
    isOverview: true
  })}

  <!-- Quote Form Section -->
  <section class="content-section tight" id="quoteFormSec">
    <div class="container">
      <div class="section-head text-center" style="max-width:560px;margin:0 auto 24px;">
        <div class="eyebrow">FREE QUOTE</div>
        <h2>Get connected with a provider</h2>
        <p>Select your insurance type and enter your zip code to get matched with licensed local agents.</p>
      </div>

      <form class="quote-form" id="quoteForm" novalidate style="max-width:560px;margin:0 auto;">
        <div class="form-progress">
          <span class="step-label" id="stepLabel">Step 1 of 3</span>
          <div class="progress-track"><div class="progress-fill" id="progressFill" style="width:33.3%;"></div></div>
        </div>

        <div class="form-step active" data-step="1">
          <h3>What coverage do you need?</h3>
          <input type="hidden" name="category" value="Insurance">
          <label class="field">
            <span>Insurance type *</span>
            <select name="service" id="serviceSelect" required>
              <option value="">Select insurance type</option>
              <option value="Auto Insurance">Auto Insurance</option>
              <option value="Health Insurance">Health Insurance</option>
              <option value="Home Insurance">Home Insurance</option>
              <option value="Life Insurance">Life Insurance</option>
            </select>
          </label>
          <label class="field">
            <span>Your zip code *</span>
            <input type="text" name="zip" id="zipInput" placeholder="Enter 5-digit zip code" maxlength="5" pattern="[0-9]{5}" required />
          </label>
          <button type="button" class="btn btn-accent btn-block next-step">Continue &rarr;</button>
        </div>

        <div class="form-step" data-step="2">
          <h3>How soon do you need coverage?</h3>
          <label class="field">
            <span>Timeline *</span>
            <select name="timeline" required>
              <option value="">Select timeline</option>
              <option value="As soon as possible">As soon as possible</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1-3 months">1–3 months</option>
              <option value="Just researching">Just researching</option>
            </select>
          </label>
          <div class="form-nav">
            <button type="button" class="btn btn-ghost prev-step">&larr; Back</button>
            <button type="button" class="btn btn-accent next-step">Continue &rarr;</button>
          </div>
        </div>

        <div class="form-step" data-step="3">
          <h3>How should we reach you?</h3>
          <label class="field"><span>Full name *</span><input type="text" name="name" placeholder="Jane Doe" required /></label>
          <label class="field"><span>Phone number *</span><input type="tel" name="phone" placeholder="(555) 123-4567" required /></label>
          <label class="field"><span>Email address *</span><input type="email" name="email" placeholder="you@example.com" required /></label>
          <p class="fine-print">By submitting, you agree to our <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms.html">Terms of Service</a>.</p>
          <div class="form-nav">
            <button type="button" class="btn btn-ghost prev-step">&larr; Back</button>
            <button type="submit" class="btn btn-accent">Get My Free Quote &rarr;</button>
          </div>
        </div>

        <div class="form-step success-step" data-step="success" style="display:none;">
          <div class="success-icon"><svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h3>You're all set!</h3>
          <p>A licensed insurance agent will contact you shortly.</p>
          <a href="tel:+15550100123" class="btn btn-ghost btn-block">Or call us now: +1 (555) 010-0123</a>
        </div>
      </form>
    </div>
  </section>

  <!-- Hub Grid Section -->
  <section class="content-section">
    <div class="container">
      <div class="section-head text-center" style="margin-bottom:36px;">
        <div class="eyebrow">EXPLORE POLICIES</div>
        <h2>All Insurance Coverage Options</h2>
        <p style="color:var(--text-muted); font-size:15px; margin-top:8px;">Compare rates and policy terms from licensed top-rated insurance carriers.</p>
      </div>

      <div class="hub-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
        <a href="auto-insurance.html" class="hub-card card-hover hue-teal" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 17h14M5 12h14M7 8l2-4h6l2 4"/></svg></div>
          <h3>Auto Insurance</h3>
          <p>Comprehensive, collision & liability coverage tailored for your vehicle.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="health-insurance.html" class="hub-card card-hover hue-blue" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h3>Health Insurance</h3>
          <p>Individual, family & small business health plans with comprehensive care.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="home-insurance.html" class="hub-card card-hover hue-amber" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></div>
          <h3>Home Insurance</h3>
          <p>Protect your home, roof & personal property from storm, fire & liability.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>

        <a href="life-insurance.html" class="hub-card card-hover hue-rose" tabindex="0">
          <div class="service-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
          <h3>Life Insurance</h3>
          <p>Term & whole life insurance policies to protect your family's future.</p>
          <span class="go-link">Get a quote &rarr;</span>
        </a>
      </div>
    </div>
  </section>

${sharedFooterHTML}

  <script src="script.js"></script>
</body>
</html>`;
}

// Command-line flag parsing
const args = process.argv.slice(2);
const onlyRoofing = args.includes('--roofing-only');

if (onlyRoofing) {
  const roofingData = subpagesData.find(s => s.filename === 'roofing.html');
  fs.writeFileSync('roofing.html', generateSubpageHTML(roofingData));
  console.log("Successfully generated roofing.html ONLY (Step 2 Mode)");
} else {
  // Generate all 17 subpages
  subpagesData.forEach(sub => {
    fs.writeFileSync(sub.filename, generateSubpageHTML(sub));
    console.log(`Generated subpage: ${sub.filename}`);
  });

  // Generate 2 overview pages
  fs.writeFileSync('home-services.html', generateHomeServicesOverviewHTML());
  console.log("Generated overview: home-services.html");

  fs.writeFileSync('insurance.html', generateInsuranceOverviewHTML());
  console.log("Generated overview: insurance.html");

  console.log("ALL 19 PAGES GENERATED SUCCESSFULLY!");
}
