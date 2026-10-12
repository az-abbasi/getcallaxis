const fs = require('fs');
const path = require('path');

const subpagesData = [
  // Home Services (14)
  {
    filename: "roofing.html",
    service: "Roofing",
    service_full: "Roofing Repair & Replacement",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Repairs, replacements & storm damage — handled by pros.",
    meta_desc: "Connect with top-rated, licensed roofing contractors in your area. Free quotes for shingle, metal, and flat roof repair and replacement.",
    main_title: "How it works for roofing",
    para1: "Connect with licensed local roofers for repairs, full replacements, or storm damage claims, and get quotes without the cold calls.",
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
    service_full: "Bathroom Remodeling",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Custom shower conversions, vanity upgrades & full master bath remodels.",
    meta_desc: "Transform your bathroom with verified local remodeling contractors. Free quotes for tub-to-shower conversions, tiling, and full renovations.",
    main_title: "How it works for bathroom remodeling",
    para1: "Connect with screened remodeling contractors for custom showers, vanity updates, and master bath overhauls with zero hassle.",
    para2: "Every contractor in our network is state-licensed and background-checked. Compare transparent design proposals with no commitment.",
    benefits: [
      "Custom tub-to-shower conversions",
      "Modern vanity, tile & fixture upgrades",
      "Full master bath design & renovation",
      "Licensed, background-checked contractors"
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
    service_full: "Flooring Installation",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Hardwood, luxury vinyl plank, laminate & ceramic tile installed right.",
    meta_desc: "High-quality hardwood, laminate, vinyl, and tile flooring specialists. Get free local flooring quotes from licensed installers.",
    main_title: "How it works for flooring installation",
    para1: "Connect with experienced local flooring specialists skilled in hardwood, luxury vinyl plank (LVP), laminate, and custom tile.",
    para2: "Get itemized quotes covering surface prep, materials, and professional installation with no hidden fees or upcharges.",
    benefits: [
      "Hardwood, LVP, laminate & tile options",
      "Professional subfloor prep & leveling",
      "Free in-home measurement & estimate",
      "Durable residential & commercial installs"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Bathroom Remodel", url: "bathroom-remodel.html" },
      { title: "Kitchen Remodel", url: "kitchen-remodel.html" },
      { title: "Painting & Exterior", url: "painting.html" },
      { title: "Roofing", url: "roofing.html" }
    ]
  },
  {
    filename: "hvac.html",
    service: "HVAC",
    service_full: "HVAC Heating & Cooling",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "AC repair, furnace replacements & heat pumps by certified HVAC technicians.",
    meta_desc: "Keep your home comfortable year-round with certified HVAC technicians. Get free quotes for AC repair, furnace installation, and heat pumps.",
    main_title: "How it works for HVAC heating & cooling",
    para1: "Connect with EPA-certified HVAC contractors for fast air conditioning repairs, furnace replacements, or heat pump upgrades.",
    para2: "Enjoy year-round climate control and energy savings with certified local technicians available 24/7 for emergency service.",
    benefits: [
      "AC & furnace repair or replacement",
      "Energy-efficient heat pump systems",
      "Duct cleaning & air quality solutions",
      "24/7 emergency heating & cooling response"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Electrical", url: "electrical.html" },
      { title: "Plumbing", url: "plumbing.html" },
      { title: "Solar", url: "solar.html" },
      { title: "Windows", url: "windows.html" }
    ]
  },
  {
    filename: "windows.html",
    service: "Windows",
    service_full: "Window Replacement",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Energy Star replacement windows to lower energy bills and quiet noise.",
    meta_desc: "Lower energy bills with energy-efficient double-pane replacement windows. Get free quotes from verified local window installers.",
    main_title: "How it works for window replacement",
    para1: "Connect with verified local window installation pros offering double and triple-pane energy-saving glass for your home.",
    para2: "Reduce heating and cooling utility costs while updating exterior aesthetics with licensed, insured installers.",
    benefits: [
      "Energy Star double & triple pane glass",
      "Vinyl, wood & composite frame options",
      "Custom window sizing & installation",
      "Noise reduction & UV protection features"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Siding", url: "siding.html" },
      { title: "Roofing", url: "roofing.html" },
      { title: "Gutters", url: "gutters.html" },
      { title: "HVAC", url: "hvac.html" }
    ]
  },
  {
    filename: "gutters.html",
    service: "Gutters",
    service_full: "Gutter Installation & Guards",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Custom seamless aluminum gutters & leaf guards to protect foundation.",
    meta_desc: "Protect your home's foundation with seamless gutters and leaf guards. Get free quotes from local gutter specialists.",
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
      { title: "Painting & Exterior", url: "painting.html" }
    ]
  },
  {
    filename: "kitchen-remodel.html",
    service: "Kitchen Remodel",
    service_full: "Kitchen Remodeling",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Custom cabinetry, quartz countertops & modern kitchen floor plan redesigns.",
    meta_desc: "Design your dream kitchen with verified local remodeling contractors. Free quotes for custom cabinets, countertops, and full kitchen overhauls.",
    main_title: "How it works for kitchen remodeling",
    para1: "Connect with screened kitchen remodeling general contractors for custom cabinets, stone countertops, and open-concept layouts.",
    para2: "Transform your home's central gathering space with transparent 3D design plans and itemized pricing.",
    benefits: [
      "Custom cabinet design & refacing",
      "Quartz, granite & marble countertops",
      "Kitchen island & open-concept redesigns",
      "Licensed general contractors & electricians"
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
    service_full: "Plumbing Services & Repairs",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Emergency leak repair, drain cleaning, water heaters & repiping by master plumbers.",
    meta_desc: "Fast, reliable plumbing repair, tankless water heater installation, and drain cleaning. Get free quotes from licensed local plumbers.",
    main_title: "How it works for plumbing services",
    para1: "Connect with licensed master plumbers for emergency leak repairs, drain hydro-jetting, or tankless water heater installations.",
    para2: "Get upfront pricing for residential plumbing maintenance, pipe repiping, and sewer line inspections.",
    benefits: [
      "24/7 emergency leak repair & drain clearing",
      "Tank & tankless water heater replacement",
      "Sewer line camera inspection & repair",
      "Licensed master plumbers in your zip code"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Bathroom Remodel", url: "bathroom-remodel.html" },
      { title: "Kitchen Remodel", url: "kitchen-remodel.html" },
      { title: "HVAC", url: "hvac.html" },
      { title: "Foundations", url: "foundations.html" }
    ]
  },
  {
    filename: "electrical.html",
    service: "Electrical",
    service_full: "Electrical Services & Upgrades",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Panel upgrades, EV charger installation, rewiring & lighting by licensed electricians.",
    meta_desc: "Safe residential electrical panel upgrades, EV charger installation, and lighting wiring. Get free quotes from licensed local electricians.",
    main_title: "How it works for electrical services",
    para1: "Connect with licensed electrical contractors for 200-amp panel upgrades, Level 2 EV chargers, and safe home rewiring.",
    para2: "Keep your property safe and modern with transparent estimates from certified master electricians.",
    benefits: [
      "200-amp breaker panel upgrades",
      "Level 2 EV charger home installation",
      "Whole-home surge protection & rewiring",
      "Licensed master electricians on call"
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
    service_full: "Solar Panel Installation",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Clean renewable energy, battery storage & lower monthly power bills.",
    meta_desc: "Reduce monthly power bills with clean, renewable rooftop solar panels. Get free solar quotes, battery storage, and tax incentive guidance.",
    main_title: "How it works for solar panel installation",
    para1: "Connect with Tier-1 solar installers for custom rooftop photovoltaic designs, battery storage, and tax incentive assistance.",
    para2: "Lower monthly utility costs and gain battery backup power with zero upfront hassle.",
    benefits: [
      "High-efficiency Tier 1 solar panels",
      "Battery storage & backup system options",
      "Federal tax credit & local rebate guidance",
      "Turnkey design, permitting & installation"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Electrical", url: "electrical.html" },
      { title: "Roofing", url: "roofing.html" },
      { title: "HVAC", url: "hvac.html" },
      { title: "Windows", url: "windows.html" }
    ]
  },
  {
    filename: "garage-doors.html",
    service: "Garage Doors",
    service_full: "Garage Door Services",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Torsion spring repairs, Wi-Fi opener upgrades & stylish replacement doors.",
    meta_desc: "Professional garage door repair, spring replacement, and new door installs. Get free local estimates from garage door specialists.",
    main_title: "How it works for garage door services",
    para1: "Connect with local garage door technicians for same-day spring repairs, smart opener installs, and new insulated garage doors.",
    para2: "Enhance home security and curb appeal with transparent price quotes from certified specialists.",
    benefits: [
      "Insulated steel, wood & carriage door styles",
      "Torsion spring & cable repair specialists",
      "Smart Wi-Fi garage door opener install",
      "Same-day emergency garage door service"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Siding", url: "siding.html" },
      { title: "Electrical", url: "electrical.html" },
      { title: "Flooring", url: "flooring.html" },
      { title: "Foundations", url: "foundations.html" }
    ]
  },
  {
    filename: "foundations.html",
    service: "Foundations & Waterproofing",
    service_full: "Foundations & Waterproofing",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Piering, crack repairs, crawlspace encapsulation & sump pump systems.",
    meta_desc: "Stabilize foundation cracks and waterproof basements or crawl spaces. Get free inspection quotes from structural specialists.",
    main_title: "How it works for foundations & waterproofing",
    para1: "Connect with foundation repair engineers and waterproofing pros for structural piering, crack seals, and crawlspace encapsulation.",
    para2: "Protect your home's structural integrity with free engineering inspections and custom waterproofing solutions.",
    benefits: [
      "Foundation piering & wall crack repair",
      "Basement interior & exterior waterproofing",
      "Crawlspace encapsulation & sump pumps",
      "Structural engineering inspections"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Roofing", url: "roofing.html" },
      { title: "Gutters", url: "gutters.html" },
      { title: "Plumbing", url: "plumbing.html" },
      { title: "Siding", url: "siding.html" }
    ]
  },
  {
    filename: "painting.html",
    service: "Painting & Exterior",
    service_full: "Interior & Exterior Painting",
    category: "Home Services",
    cat_slug: "home-services",
    tagline: "Professional interior painting, exterior staining & pressure washing.",
    meta_desc: "Refresh your home with professional interior and exterior painting services. Get free quotes from verified local painters.",
    main_title: "How it works for painting & exterior services",
    para1: "Connect with licensed professional painters for whole-house interior walls, exterior siding staining, and deck coating.",
    para2: "Revitalize your home's appearance with premium weather-resistant paints and flawless surface preparation.",
    benefits: [
      "Interior room & trim painting options",
      "Exterior siding, deck & fence staining",
      "Power washing & drywall repair prep",
      "Licensed & insured painting contractors"
    ],
    related_heading: "Other home services you might need",
    related: [
      { title: "Siding", url: "siding.html" },
      { title: "Flooring", url: "flooring.html" },
      { title: "Kitchen Remodel", url: "kitchen-remodel.html" },
      { title: "Bathroom Remodel", url: "bathroom-remodel.html" }
    ]
  },

  // Insurance Pages (4)
  {
    filename: "auto-insurance.html",
    service: "Auto Insurance",
    service_full: "Auto Insurance Quotes",
    category: "Insurance",
    cat_slug: "insurance",
    tagline: "Compare competitive policy rates from top licensed auto carriers.",
    meta_desc: "Compare affordable auto insurance policies from top national carriers. Find collision, comprehensive, and liability coverage at lower monthly rates.",
    main_title: "How it works for auto insurance",
    para1: "Connect with licensed insurance agents to compare auto collision, comprehensive, and liability rates tailored to your vehicle.",
    para2: "Discover safe-driver discounts, multi-policy bundles, and locked-in savings with zero obligation.",
    benefits: [
      "Collision, comprehensive & liability plans",
      "Safe driver & multi-policy discounts",
      "SR-22 filing & high-risk coverage options",
      "Free rate comparison in under 2 minutes"
    ],
    related_heading: "Other insurance options you might need",
    related: [
      { title: "Health Insurance", url: "health-insurance.html" },
      { title: "Home Insurance", url: "home-insurance.html" },
      { title: "Life Insurance", url: "life-insurance.html" },
      { title: "Roofing", url: "roofing.html" }
    ]
  },
  {
    filename: "health-insurance.html",
    service: "Health Insurance",
    service_full: "Health Insurance Plans",
    category: "Insurance",
    cat_slug: "insurance",
    tagline: "Individual, family & self-employed health insurance tailored to your budget.",
    meta_desc: "Find comprehensive individual, family, or small business health coverage. Compare ACA marketplace and private insurance plans.",
    main_title: "How it works for health insurance",
    para1: "Connect with certified health insurance advisors to navigate ACA marketplace plans, private policies, and family coverage options.",
    para2: "Simplify comparing deductibles, doctor networks, and preventative care add-ons with free advisor assistance.",
    benefits: [
      "ACA marketplace & private insurance options",
      "Low deductible & preventative care plans",
      "Dental, vision & prescription add-ons",
      "Licensed state health insurance agents"
    ],
    related_heading: "Other insurance options you might need",
    related: [
      { title: "Auto Insurance", url: "auto-insurance.html" },
      { title: "Home Insurance", url: "home-insurance.html" },
      { title: "Life Insurance", url: "life-insurance.html" },
      { title: "HVAC", url: "hvac.html" }
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
    related_heading: "Other insurance options you might need",
    related: [
      { title: "Auto Insurance", url: "auto-insurance.html" },
      { title: "Health Insurance", url: "health-insurance.html" },
      { title: "Life Insurance", url: "life-insurance.html" },
      { title: "Roofing", url: "roofing.html" }
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
    related_heading: "Other insurance options you might need",
    related: [
      { title: "Auto Insurance", url: "auto-insurance.html" },
      { title: "Health Insurance", url: "health-insurance.html" },
      { title: "Home Insurance", url: "home-insurance.html" },
      { title: "Bathroom Remodel", url: "bathroom-remodel.html" }
    ]
  }
];

function generatePage(data) {
  const {
    filename, service, service_full, category, cat_slug, tagline, meta_desc,
    main_title, para1, para2, benefits, related_heading, related
  } = data;

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${service_full} | CallAxis Referral Network</title>
  <meta name="description" content="${meta_desc}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
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
          <div class="nav-dropdown">
            <a href="insurance.html" class="dropdown-trigger">
              Insurance
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <div class="dropdown-menu" role="menu">
              <a href="insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">All Insurance</span></a>
              <a href="auto-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Auto Insurance</span></a>
              <a href="health-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Health Insurance</span></a>
              <a href="home-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Home Insurance</span></a>
              <a href="life-insurance.html" class="dropdown-item" role="menuitem"><span class="item-title">Life Insurance</span></a>
            </div>
          </div>

          <div class="nav-dropdown">
            <a href="home-services.html" class="dropdown-trigger">
              Home Services
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <div class="dropdown-menu mega-menu" role="menu">
              <div class="menu-grid">
                <div class="menu-col">
                  <a href="roofing.html" class="dropdown-item" role="menuitem"><span class="item-title">Roofing</span></a>
                  <a href="flooring.html" class="dropdown-item" role="menuitem"><span class="item-title">Flooring</span></a>
                  <a href="windows.html" class="dropdown-item" role="menuitem"><span class="item-title">Windows</span></a>
                  <a href="siding.html" class="dropdown-item" role="menuitem"><span class="item-title">Siding</span></a>
                  <a href="plumbing.html" class="dropdown-item" role="menuitem"><span class="item-title">Plumbing</span></a>
                  <a href="solar.html" class="dropdown-item" role="menuitem"><span class="item-title">Solar</span></a>
                  <a href="foundations.html" class="dropdown-item" role="menuitem"><span class="item-title">Foundations & Waterproofing</span></a>
                </div>
                <div class="menu-col">
                  <a href="bathroom-remodel.html" class="dropdown-item" role="menuitem"><span class="item-title">Bathroom Remodel</span></a>
                  <a href="hvac.html" class="dropdown-item" role="menuitem"><span class="item-title">HVAC</span></a>
                  <a href="gutters.html" class="dropdown-item" role="menuitem"><span class="item-title">Gutters</span></a>
                  <a href="kitchen-remodel.html" class="dropdown-item" role="menuitem"><span class="item-title">Kitchen Remodel</span></a>
                  <a href="electrical.html" class="dropdown-item" role="menuitem"><span class="item-title">Electrical</span></a>
                  <a href="garage-doors.html" class="dropdown-item" role="menuitem"><span class="item-title">Garage Doors</span></a>
                  <a href="painting.html" class="dropdown-item" role="menuitem"><span class="item-title">Painting & Exterior</span></a>
                  <a href="home-services.html" class="dropdown-item view-all-item" role="menuitem"><span class="item-title">View All →</span></a>
                </div>
              </div>
            </div>
          </div>

          <a href="index.html#how-it-works" class="nav-link">How It Works</a>
          <a href="index.html#why-us" class="nav-link">Why Choose Us</a>
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

        <a href="#quote-form-section" class="btn btn-teal nav-quote-btn">Get a Free Quote</a>

        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- 2. Dark Navy Hero Band (CENTERED, Breadcrumbs inside, No Trust Badges) -->
  <section class="service-hero-sec">
    <div class="container">
      <div class="service-hero-content">
        <nav class="hero-breadcrumb" aria-label="Breadcrumb" data-animate="fade-up">
          <a href="index.html">Home</a>
          <span class="bc-sep">/</span>
          <a href="${cat_slug}.html">${category}</a>
          <span class="bc-sep">/</span>
          <span class="bc-current">${service}</span>
        </nav>
        
        <div class="hero-cat-pill" data-animate="fade-up">${category.toUpperCase()}</div>
        <h1 class="service-hero-title reveal-heading" data-animate="fade-up">${service}</h1>
        <p class="service-tagline" data-animate="fade-up">${tagline}</p>
        
        <div class="service-hero-actions" data-animate="fade-up">
          <a href="tel:+15550100123" class="btn btn-hero-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now: +1 (555) 010-0123
          </a>
          <a href="#quote-form-section" class="btn btn-hero-secondary">Get my free quote &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. Two-Column Main Section on Off-White Background -->
  <section class="service-main-sec" id="quote-form-section">
    <div class="container service-main-grid">
      
      <!-- Left Column: How It Works & 2x2 Benefits Grid -->
      <div class="service-content-col">
        <h2 class="service-main-title reveal-heading" data-animate="fade-up">${main_title.charAt(0).toUpperCase() + main_title.slice(1)}</h2>
        <p class="service-main-subtitle" data-animate="fade-up">${para1}</p>
        <p class="service-main-subtitle" data-animate="fade-up">${para2}</p>

        <div class="service-benefits-grid">
          <div class="benefit-card" data-animate="fade-up">
            <div class="benefit-check-icon">✓</div>
            <p class="benefit-text">${benefits[0]}</p>
          </div>

          <div class="benefit-card" data-animate="fade-up">
            <div class="benefit-check-icon">✓</div>
            <p class="benefit-text">${benefits[1]}</p>
          </div>

          <div class="benefit-card" data-animate="fade-up">
            <div class="benefit-check-icon">✓</div>
            <p class="benefit-text">${benefits[2]}</p>
          </div>

          <div class="benefit-card" data-animate="fade-up">
            <div class="benefit-check-icon">✓</div>
            <p class="benefit-text">${benefits[3]}</p>
          </div>
        </div>
      </div>

      <!-- Right Column: Single Sticky 3-Step Quote Form Card -->
      <div class="service-form-col">
        <div id="service-quote-card" class="service-quote-card" data-service="${service}" data-category="${category}" data-animate="fade-up">
          
          <div class="card-step-header">
            <span class="step-badge-pill" id="quote-step-pill">STEP 1 OF 3</span>
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill" id="quote-progress-fill" style="width: 33.33%;"></div>
            </div>
          </div>

          <form id="subpage-step-form" class="subpage-step-form" novalidate>
            
            <!-- STEP 1 -->
            <div class="quote-step-pane step-active" id="subpage-step-1">
              <h3 class="card-step-title">Confirm your service</h3>
              
              <div class="selected-service-chip">
                <div class="chip-check-icon">✓</div>
                <div class="chip-text-wrap">
                  <span class="chip-service-name">${service}</span>
                  <span class="chip-cat-name">${category}</span>
                </div>
              </div>

              <div class="input-group">
                <label for="sub_zip" class="form-label">Your zip code *</label>
                <div class="input-with-icon">
                  <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <input type="text" id="sub_zip" name="zip" class="form-input" placeholder="Enter your zip code" maxlength="5" pattern="[0-9]{5}" required>
                </div>
                <span class="error-msg" id="sub-zip-error">Please enter a valid 5-digit US zip code.</span>
              </div>

              <button type="button" class="btn btn-teal btn-full margin-top-lg" id="btn-sub-step1-next">
                Continue &rarr;
              </button>
            </div>

            <!-- STEP 2 -->
            <div class="quote-step-pane" id="subpage-step-2">
              <h3 class="card-step-title">How soon do you need this?</h3>
              <p class="card-step-desc">Select your timeline to match with active local providers.</p>

              <div class="input-group margin-top-md">
                <label for="sub_timeline" class="form-label">Timeline *</label>
                <select id="sub_timeline" name="timeline" class="form-select" required>
                  <option value="" disabled selected>Select timeline</option>
                  <option value="ASAP">As soon as possible</option>
                  <option value="1month">Within 1 month</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="researching">Just researching</option>
                </select>
                <span class="error-msg" id="sub-timeline-error">Please select a project timeline.</span>
              </div>

              <div class="step-nav-buttons margin-top-lg">
                <button type="button" class="btn btn-outline" id="btn-sub-step2-back">&larr; Back</button>
                <button type="button" class="btn btn-teal" id="btn-sub-step2-next">Continue &rarr;</button>
              </div>
            </div>

            <!-- STEP 3 -->
            <div class="quote-step-pane" id="subpage-step-3">
              <h3 class="card-step-title">How should we reach you?</h3>
              <p class="card-step-desc">Receive your free, no-obligation estimate in minutes.</p>

              <div class="input-group margin-top-sm">
                <label for="sub_name" class="form-label">Full Name *</label>
                <input type="text" id="sub_name" name="full_name" class="form-input" placeholder="Jane Smith" required>
                <span class="error-msg" id="sub-name-error">Please enter your full name.</span>
              </div>

              <div class="input-group margin-top-xs">
                <label for="sub_phone" class="form-label">Phone Number *</label>
                <input type="tel" id="sub_phone" name="phone" class="form-input" placeholder="(555) 000-0000" required>
                <span class="error-msg" id="sub-phone-error">Please enter a valid 10-digit phone number.</span>
              </div>

              <div class="input-group margin-top-xs">
                <label for="sub_email" class="form-label">Email Address *</label>
                <input type="email" id="sub_email" name="email" class="form-input" placeholder="jane@example.com" required>
                <span class="error-msg" id="sub-email-error">Please enter a valid email address.</span>
              </div>

              <p class="legal-consent-text margin-top-xs">
                By clicking "Get My Free Quote", I agree to the <button type="button" class="btn-text-link modal-trigger-privacy">Privacy Policy</button> and <button type="button" class="btn-text-link modal-trigger-terms">Terms of Service</button>.
              </p>

              <div class="step-nav-buttons margin-top-md">
                <button type="button" class="btn btn-outline" id="btn-sub-step3-back">&larr; Back</button>
                <button type="submit" class="btn btn-teal" id="btn-sub-submit">
                  Get My Free Quote &rarr;
                </button>
              </div>
            </div>

            <!-- STEP CONFIRMATION / THANK YOU -->
            <div class="quote-step-pane" id="subpage-step-confirmation">
              <div class="confirmation-box text-center">
                <div class="success-icon-wrap margin-bottom-sm">
                  <svg class="success-check" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 class="conf-title">Quote Request Received!</h3>
                <p class="conf-desc margin-bottom-md">
                  A verified <strong class="conf-service-name">${service}</strong> provider in zip code <strong class="conf-zip-val">90210</strong> will contact you shortly.
                </p>
                <a href="tel:+15550100123" class="btn btn-teal btn-full">
                  📞 Call Now: +1 (555) 010-0123
                </a>
              </div>
            </div>

          </form>
        </div>
      </div>

    </div>
  </section>

  <!-- 4. NEW RELATED SECTION (Matching Screenshot Design) -->
  <section class="related-services-sec">
    <div class="container">
      <div class="related-header">
        <span class="related-pill-badge" data-animate="fade-up">RELATED</span>
        <h2 class="related-sec-title reveal-heading" data-animate="fade-up">${related_heading}</h2>
      </div>

      <div class="related-services-grid">
${related.map(item => `        <a href="${item.url}" class="related-service-card" data-animate="fade-up">
          <span class="rs-title">${item.title}</span>
        </a>\n`).join('')}      </div>

      <div class="related-view-all-wrap margin-top-lg text-center" data-animate="fade-up">
        <a href="${cat_slug}.html" class="view-all-link">View all ${category} &rarr;</a>
      </div>
    </div>
  </section>

  <!-- 5. Existing Stats Band -->
  <section class="stats-bar-sec">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">
            <span class="stat-val" data-count="500" data-suffix="K+">500K+</span>
          </div>
          <div class="stat-label">Consumers Connected</div>
        </div>

        <div class="stat-item">
          <div class="stat-number">
            <span class="stat-val" data-count="50" data-suffix="">50</span>
          </div>
          <div class="stat-label">States Covered</div>
        </div>

        <div class="stat-item">
          <div class="stat-number">
            <span class="stat-val" data-count="17" data-suffix="+">17+</span>
          </div>
          <div class="stat-label">Service Categories</div>
        </div>

        <div class="stat-item">
          <div class="stat-number">
            <span class="stat-val" data-count="24" data-suffix="/7">24/7</span>
          </div>
          <div class="stat-label">Support Availability</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Closing CTA Band Section -->
  <section class="final-cta-sec">
    <div class="container">
      <div class="cta-banner-card" data-animate="fade-up">
        <div class="cta-content">
          <h2 class="cta-headline reveal-heading">Ready to get connected?</h2>
          <p class="cta-subtitle">Call us now for an instant connection, or fill out the quick form on our homepage. Free, fast, and no obligation.</p>
          
          <div class="cta-btn-group">
            <a href="tel:+15550100123" class="btn btn-teal btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Now: +1 (555) 010-0123
            </a>
            <a href="#quote-form-section" class="btn btn-outline-white btn-lg">
              Get a Free Quote &uarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Full Footer Section -->
  <footer class="footer-sec">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <a href="index.html" class="brand-logo footer-logo">
            <img src="logo.jpg" alt="CallAxis Logo" class="footer-logo-img">
            <span class="logo-text">Call<span class="logo-accent">Axis</span></span>
          </a>
          <p class="footer-tagline">
            Connecting US consumers with trusted local insurance agents and licensed home contractors across all 50 states.
          </p>
          
          <div class="footer-contact-info">
            <h5 class="contact-subheading">Contact Information:</h5>
            <p>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Phone: 
              <strong>+1 (555) 010-0123</strong>
            </p>
            <p>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Email: 
              <strong>arsalanmanunited@gmail.com</strong>
            </p>
            <p>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Address: 
              <strong>123 Main Street, Suite 400, New York, NY 10001</strong>
            </p>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Insurance Services</h4>
          <ul class="footer-links">
            <li><a href="auto-insurance.html">Auto Insurance</a></li>
            <li><a href="health-insurance.html">Health Insurance</a></li>
            <li><a href="home-insurance.html">Homeowners Insurance</a></li>
            <li><a href="life-insurance.html">Life Insurance</a></li>
            <li><a href="insurance.html">All Insurance Category</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Home Contracting</h4>
          <ul class="footer-links">
            <li><a href="roofing.html">Roofing Repair &amp; Replacement</a></li>
            <li><a href="hvac.html">HVAC Systems</a></li>
            <li><a href="bathroom-remodel.html">Bathroom Remodeling</a></li>
            <li><a href="windows.html">Window Replacement</a></li>
            <li><a href="flooring.html">Flooring Installation</a></li>
            <li><a href="solar.html">Solar Systems</a></li>
            <li><a href="home-services.html">All Home Services</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Company</h4>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><button type="button" class="btn-text-link modal-trigger-privacy">Privacy Policy</button></li>
            <li><button type="button" class="btn-text-link modal-trigger-terms">Terms of Service</button></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="disclaimer-text">
          CallAxis is a free online referral platform connecting consumers with independent third-party insurance agents and home contractors. CallAxis is not an underwriter, insurance agency, or licensed general contractor. Services may vary by state and zip code.
        </p>
        <div class="copyright-bar">
          <span>&copy; <span id="current-year">2026</span> CallAxis Referral Network. All rights reserved.</span>
          <div class="legal-mini-links">
            <button type="button" class="btn-text-link modal-trigger-privacy">Privacy Policy</button> •
            <button type="button" class="btn-text-link modal-trigger-terms">Terms of Service</button>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
`;

  const targetPath = path.join(__dirname, filename);
  fs.writeFileSync(targetPath, html, 'utf8');
  console.log(`Successfully generated: ${filename}`);
}

subpagesData.forEach(generatePage);
console.log('All 18 subpages generated successfully with node.js!');
