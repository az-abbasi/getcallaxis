import os

subpages_data = [
    # Home Services (13)
    {
        "filename": "roofing.html",
        "service": "Roofing",
        "service_full": "Roofing Repair & Replacement",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Repairs, full replacements & storm damage restoration handled by verified local pros.",
        "meta_desc": "Connect with top-rated, licensed roofing contractors in your area. Free quotes for shingle, metal, and flat roof repair and replacement.",
        "main_title": "How it works for roofing",
        "para1": "When your roof suffers storm damage or reaches the end of its lifespan, finding dependable local roofers shouldn't be stressful. GetCallAxis connects you directly with state-certified, insured roofing contractors serving your exact zip code.",
        "para2": "Compare transparent price estimates for asphalt shingles, metal panels, or flat roof systems with zero cost and no obligation to hire.",
        "benefits": [
            "Asphalt, metal & tile roof options",
            "Storm damage & insurance claim pros",
            "Free on-site roof inspections",
            "Licensed & insured local roofing crews"
        ],
        "related": [
            {"title": "Bathroom Remodel", "url": "bathroom-remodel.html"},
            {"title": "HVAC Systems", "url": "hvac.html"},
            {"title": "Window Replacement", "url": "windows.html"},
            {"title": "Gutters", "url": "gutters.html"}
        ]
    },
    {
        "filename": "bathroom-remodel.html",
        "service": "Bathroom Remodel",
        "service_full": "Bathroom Remodeling",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Custom shower conversions, vanity upgrades & full master bath remodels.",
        "meta_desc": "Transform your bathroom with verified local remodeling contractors. Free quotes for tub-to-shower conversions, tiling, and full renovations.",
        "main_title": "How it works for bathroom remodeling",
        "para1": "Upgrading your bathroom increases your home's daily comfort and resale value. Whether you need a quick tub-to-shower conversion or a luxury master suite overhaul, GetCallAxis connects you with screened remodeling contractors near you.",
        "para2": "Review free design proposals and itemized quotes from licensed builders and master plumbers with zero pressure.",
        "benefits": [
            "Custom tub-to-shower conversions",
            "Modern vanity, tile & fixture upgrades",
            "Full master bath design & renovation",
            "Licensed, background-checked contractors"
        ],
        "related": [
            {"title": "Kitchen Remodel", "url": "kitchen-remodel.html"},
            {"title": "Plumbing", "url": "plumbing.html"},
            {"title": "Flooring", "url": "flooring.html"},
            {"title": "Electrical", "url": "electrical.html"}
        ]
    },
    {
        "filename": "flooring.html",
        "service": "Flooring",
        "service_full": "Flooring Installation",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Hardwood, luxury vinyl plank, laminate & ceramic tile installed right.",
        "meta_desc": "High-quality hardwood, laminate, vinyl, and tile flooring specialists. Get free local flooring quotes from licensed installers.",
        "main_title": "How it works for flooring installation",
        "para1": "New floors immediately elevate the look and feel of every room in your home. GetCallAxis matches you with experienced local flooring specialists skilled in hardwood, luxury vinyl plank (LVP), laminate, and custom tile.",
        "para2": "Receive transparent estimates covering materials, subfloor preparation, and professional installation with no hidden fees.",
        "benefits": [
            "Hardwood, LVP, laminate & tile options",
            "Professional subfloor prep & leveling",
            "Free in-home measurement & estimate",
            "Durable residential & commercial installs"
        ],
        "related": [
            {"title": "Bathroom Remodel", "url": "bathroom-remodel.html"},
            {"title": "Kitchen Remodel", "url": "kitchen-remodel.html"},
            {"title": "Roofing", "url": "roofing.html"},
            {"title": "Siding", "url": "siding.html"}
        ]
    },
    {
        "filename": "hvac.html",
        "service": "HVAC",
        "service_full": "HVAC Heating & Cooling",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "AC repair, furnace replacements & heat pumps by certified HVAC technicians.",
        "meta_desc": "Keep your home comfortable year-round with certified HVAC technicians. Get free quotes for AC repair, furnace installation, and heat pumps.",
        "main_title": "How it works for HVAC heating & cooling",
        "para1": "A malfunctioning HVAC system impacts your home comfort and energy bills. GetCallAxis bridges you with EPA-certified HVAC contractors for fast air conditioning repair, furnace replacements, or heat pump upgrades.",
        "para2": "Get matched with top-rated technicians offering energy-efficient systems, seasonal maintenance, and 24/7 emergency service.",
        "benefits": [
            "AC & furnace repair or replacement",
            "Energy-efficient heat pump systems",
            "Duct cleaning & air quality solutions",
            "24/7 emergency heating & cooling response"
        ],
        "related": [
            {"title": "Electrical", "url": "electrical.html"},
            {"title": "Plumbing", "url": "plumbing.html"},
            {"title": "Solar", "url": "solar.html"},
            {"title": "Windows", "url": "windows.html"}
        ]
    },
    {
        "filename": "windows.html",
        "service": "Windows",
        "service_full": "Window Replacement",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Energy Star replacement windows to lower energy bills and quiet noise.",
        "meta_desc": "Lower energy bills with energy-efficient double-pane replacement windows. Get free quotes from verified local window installers.",
        "main_title": "How it works for window replacement",
        "para1": "Drafty, outdated windows waste heating and cooling energy while compromising home security. GetCallAxis matches you with local window installation pros specializing in high-performance vinyl, wood, and composite replacement windows.",
        "para2": "Compare energy-saving double and triple pane glass options designed to reduce utility bills and enhance your home exterior.",
        "benefits": [
            "Energy Star double & triple pane glass",
            "Vinyl, wood & composite frame options",
            "Custom window sizing & installation",
            "Noise reduction & UV protection features"
        ],
        "related": [
            {"title": "Siding", "url": "siding.html"},
            {"title": "Roofing", "url": "roofing.html"},
            {"title": "Gutters", "url": "gutters.html"},
            {"title": "HVAC", "url": "hvac.html"}
        ]
    },
    {
        "filename": "gutters.html",
        "service": "Gutters",
        "service_full": "Gutter Installation & Guards",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Custom seamless aluminum gutters & leaf guards to protect foundation.",
        "meta_desc": "Protect your home's foundation with seamless gutters and leaf guards. Get free quotes from local gutter specialists.",
        "main_title": "How it works for gutter installation",
        "para1": "Clogged or leaking gutters cause water damage to your roofline, siding, and foundation. GetCallAxis connects you with local gutter contractors offering seamless aluminum gutters and micro-mesh gutter guard systems.",
        "para2": "Receive fast quotes for complete gutter replacements, repairs, and downspout extensions with zero obligation.",
        "benefits": [
            "Custom seamless aluminum & copper gutters",
            "Micro-mesh gutter guard protection",
            "Fascia board repair & downspout routing",
            "Free roofline inspection & estimate"
        ],
        "related": [
            {"title": "Roofing", "url": "roofing.html"},
            {"title": "Siding", "url": "siding.html"},
            {"title": "Foundations", "url": "foundations.html"},
            {"title": "Windows", "url": "windows.html"}
        ]
    },
    {
        "filename": "siding.html",
        "service": "Siding",
        "service_full": "Siding Repair & Replacement",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Vinyl, James Hardie fiber cement & wood siding to boost curb appeal.",
        "meta_desc": "Upgrade your curb appeal with durable vinyl, fiber cement, or wood siding. Get free quotes from licensed siding contractors.",
        "main_title": "How it works for siding replacement",
        "para1": "Quality siding protects your home structural shell while providing insulation and weather defense. GetCallAxis matches you with top-rated siding installers experienced in vinyl, fiber cement, engineered wood, and stone veneer.",
        "para2": "Compare itemized project quotes including removal, weather wrap barrier, soffit, trim, and exterior panel installation.",
        "benefits": [
            "Vinyl, James Hardie fiber cement & wood",
            "Weather-resistant house wrap insulation",
            "Full siding replacement & trim work",
            "Increased home energy efficiency & value"
        ],
        "related": [
            {"title": "Windows", "url": "windows.html"},
            {"title": "Roofing", "url": "roofing.html"},
            {"title": "Gutters", "url": "gutters.html"},
            {"title": "Flooring", "url": "flooring.html"}
        ]
    },
    {
        "filename": "kitchen-remodel.html",
        "service": "Kitchen Remodel",
        "service_full": "Kitchen Remodeling",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Custom cabinets, quartz countertops, islands & full kitchen overhauls.",
        "meta_desc": "Design your dream kitchen with experienced local kitchen contractors. Get free quotes for custom cabinets, countertops, and full remodels.",
        "main_title": "How it works for kitchen remodeling",
        "para1": "The kitchen is the heart of your home. Whether planning a full layout overhaul or updating cabinets, quartz countertops, and backsplashes, GetCallAxis connects you with verified kitchen remodeling general contractors.",
        "para2": "Get connected with design-build teams who handle architectural planning, cabinet fabrication, electrical, and plumbing integration.",
        "benefits": [
            "Custom cabinetry & island designs",
            "Quartz, granite & marble countertops",
            "Lighting, backsplash & plumbing updates",
            "End-to-end design & project management"
        ],
        "related": [
            {"title": "Bathroom Remodel", "url": "bathroom-remodel.html"},
            {"title": "Plumbing", "url": "plumbing.html"},
            {"title": "Electrical", "url": "electrical.html"},
            {"title": "Flooring", "url": "flooring.html"}
        ]
    },
    {
        "filename": "plumbing.html",
        "service": "Plumbing",
        "service_full": "Plumbing Services",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Leak detection, water heaters, drain cleaning & re-piping specialists.",
        "meta_desc": "Fast, reliable local plumbers for leak repair, drain cleaning, water heaters, and re-piping. Get free plumbing estimates.",
        "main_title": "How it works for plumbing services",
        "para1": "From unexpected pipe leaks to water heater installations and main sewer line clearouts, plumbing emergencies require certified experts. GetCallAxis bridges homeowners with background-checked master plumbers.",
        "para2": "Review upfront price estimates for tankless water heaters, fixture installs, or whole-house re-piping with zero pressure.",
        "benefits": [
            "Drain cleaning & sewer line inspection",
            "Tankless & traditional water heater install",
            "Pipe leak detection & full house re-piping",
            "Licensed, background-checked master plumbers"
        ],
        "related": [
            {"title": "Bathroom Remodel", "url": "bathroom-remodel.html"},
            {"title": "HVAC", "url": "hvac.html"},
            {"title": "Electrical", "url": "electrical.html"},
            {"title": "Kitchen Remodel", "url": "kitchen-remodel.html"}
        ]
    },
    {
        "filename": "electrical.html",
        "service": "Electrical",
        "service_full": "Electrical Contracting",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "200A panel upgrades, EV chargers, generators & rewiring by master electricians.",
        "meta_desc": "Safe, certified electrical panel upgrades, EV chargers, wiring, and lighting. Get free quotes from licensed electricians.",
        "main_title": "How it works for electrical contracting",
        "para1": "Modern homes demand reliable electrical infrastructure for appliances, EV charging, and smart electronics. GetCallAxis matches you with state-licensed electricians for panel upgrades, generator wiring, and recessed lighting.",
        "para2": "Ensure code compliance and electrical safety with free project consultations from local electrical contractors.",
        "benefits": [
            "200A electrical panel & breaker upgrades",
            "EV charger & generator installation",
            "Whole-home rewiring & surge protection",
            "State-licensed master electricians"
        ],
        "related": [
            {"title": "Solar", "url": "solar.html"},
            {"title": "HVAC", "url": "hvac.html"},
            {"title": "Plumbing", "url": "plumbing.html"},
            {"title": "Garage Doors", "url": "garage-doors.html"}
        ]
    },
    {
        "filename": "solar.html",
        "service": "Solar",
        "service_full": "Solar Panel Systems",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Clean renewable energy, battery storage & lower monthly power bills.",
        "meta_desc": "Reduce monthly power bills with clean, renewable rooftop solar panels. Get free solar quotes, battery storage, and tax incentive guidance.",
        "main_title": "How it works for solar panel installation",
        "para1": "Switching to rooftop solar panels allows you to generate clean electricity, reduce monthly utility bills, and gain battery backup protection. GetCallAxis connects you with top Tier-1 solar panel installers.",
        "para2": "Receive custom solar design quotes including federal tax credit savings, battery options, and net metering estimates.",
        "benefits": [
            "High-efficiency Tier 1 solar panels",
            "Battery storage & backup system options",
            "Federal tax credit & local rebate guidance",
            "Turnkey design, permitting & installation"
        ],
        "related": [
            {"title": "Electrical", "url": "electrical.html"},
            {"title": "Roofing", "url": "roofing.html"},
            {"title": "HVAC", "url": "hvac.html"},
            {"title": "Windows", "url": "windows.html"}
        ]
    },
    {
        "filename": "garage-doors.html",
        "service": "Garage Doors",
        "service_full": "Garage Door Services",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Torsion spring repairs, Wi-Fi opener upgrades & stylish replacement doors.",
        "meta_desc": "Professional garage door repair, spring replacement, and new door installs. Get free local estimates from garage door specialists.",
        "main_title": "How it works for garage door services",
        "para1": "A broken garage door spring or faulty opener traps vehicles and breaches home security. GetCallAxis matches you with local garage door technicians specializing in same-day spring replacement, opener installs, and new insulated doors.",
        "para2": "Explore carriage house, modern steel, or glass door options with fast, hassle-free quotes.",
        "benefits": [
            "Insulated steel, wood & carriage door styles",
            "Torsion spring & cable repair specialists",
            "Smart Wi-Fi garage door opener install",
            "Same-day emergency garage door service"
        ],
        "related": [
            {"title": "Siding", "url": "siding.html"},
            {"title": "Electrical", "url": "electrical.html"},
            {"title": "Flooring", "url": "flooring.html"},
            {"title": "Foundations", "url": "foundations.html"}
        ]
    },
    {
        "filename": "foundations.html",
        "service": "Foundations & Waterproofing",
        "service_full": "Foundations & Waterproofing",
        "category": "Home Services",
        "cat_slug": "home-services",
        "tagline": "Piering, crack repairs, crawlspace encapsulation & sump pump systems.",
        "meta_desc": "Stabilize foundation cracks and waterproof basements or crawl spaces. Get free inspection quotes from structural specialists.",
        "main_title": "How it works for foundations & waterproofing",
        "para1": "Foundation settling, wall cracks, and wet basements risk severe structural damage if unaddressed. GetCallAxis connects homeowners with licensed foundation repair engineers and basement waterproofing specialists.",
        "para2": "Schedule free structural inspections and receive customized solutions for piering, wall anchoring, crawlspace encapsulation, and sump pumps.",
        "benefits": [
            "Foundation piering & wall crack repair",
            "Basement interior & exterior waterproofing",
            "Crawlspace encapsulation & sump pumps",
            "Structural engineering inspections"
        ],
        "related": [
            {"title": "Roofing", "url": "roofing.html"},
            {"title": "Gutters", "url": "gutters.html"},
            {"title": "Plumbing", "url": "plumbing.html"},
            {"title": "Siding", "url": "siding.html"}
        ]
    },

    # Insurance Pages (4)
    {
        "filename": "auto-insurance.html",
        "service": "Auto Insurance",
        "service_full": "Auto Insurance Quotes",
        "category": "Insurance",
        "cat_slug": "insurance",
        "tagline": "Compare competitive policy rates from top licensed auto carriers.",
        "meta_desc": "Compare affordable auto insurance policies from top national carriers. Find collision, comprehensive, and liability coverage at lower monthly rates.",
        "main_title": "How it works for auto insurance",
        "para1": "Finding affordable car insurance with complete collision, comprehensive, and liability protection shouldn't require endless phone calls. GetCallAxis connects drivers directly with licensed state insurance agents.",
        "para2": "Compare rates from top carrier brands, discover safe-driver discounts, and lock in savings with zero obligation.",
        "benefits": [
            "Collision, comprehensive & liability plans",
            "Safe driver & multi-policy discounts",
            "SR-22 filing & high-risk coverage options",
            "Free rate comparison in under 2 minutes"
        ],
        "related": [
            {"title": "Home Insurance", "url": "home-insurance.html"},
            {"title": "Health Insurance", "url": "health-insurance.html"},
            {"title": "Life Insurance", "url": "life-insurance.html"},
            {"title": "All Insurance", "url": "insurance.html"}
        ]
    },
    {
        "filename": "health-insurance.html",
        "service": "Health Insurance",
        "service_full": "Health Insurance Plans",
        "category": "Insurance",
        "cat_slug": "insurance",
        "tagline": "Individual, family & self-employed health insurance tailored to your budget.",
        "meta_desc": "Find comprehensive individual, family, or small business health coverage. Compare ACA marketplace and private insurance plans.",
        "main_title": "How it works for health insurance",
        "para1": "Navigating healthcare plans, deductibles, and doctor networks can be overwhelming. GetCallAxis matches policy seekers with certified health insurance advisors who simplify finding coverage.",
        "para2": "Explore ACA marketplace options, low-deductible private plans, and dental/vision add-ons tailored to your budget.",
        "benefits": [
            "ACA marketplace & private insurance options",
            "Low deductible & preventative care plans",
            "Dental, vision & prescription add-ons",
            "Licensed state health insurance agents"
        ],
        "related": [
            {"title": "Life Insurance", "url": "life-insurance.html"},
            {"title": "Auto Insurance", "url": "auto-insurance.html"},
            {"title": "Home Insurance", "url": "home-insurance.html"},
            {"title": "All Insurance", "url": "insurance.html"}
        ]
    },
    {
        "filename": "home-insurance.html",
        "service": "Home Insurance",
        "service_full": "Homeowners Insurance",
        "category": "Insurance",
        "cat_slug": "insurance",
        "tagline": "Protect your home, roof & personal property from storm, fire & liability.",
        "meta_desc": "Protect your home and personal property against fire, storm, and theft. Get free homeowners insurance quotes from top carriers.",
        "main_title": "How it works for homeowners insurance",
        "para1": "Your home is one of your most significant lifetime investments. GetCallAxis connects homeowners with licensed insurance agents to find comprehensive home, condo, or renters coverage.",
        "para2": "Compare dwelling protection limits, roof endorsements, and auto-home bundling discounts to lower your annual premiums.",
        "benefits": [
            "Dwelling, roof & personal property coverage",
            "Liability protection & medical payments",
            "Bundling discounts with auto insurance",
            "Custom deductible & endorsement options"
        ],
        "related": [
            {"title": "Auto Insurance", "url": "auto-insurance.html"},
            {"title": "Roofing", "url": "roofing.html"},
            {"title": "Health Insurance", "url": "health-insurance.html"},
            {"title": "Life Insurance", "url": "life-insurance.html"}
        ]
    },
    {
        "filename": "life-insurance.html",
        "service": "Life Insurance",
        "service_full": "Life Insurance Coverage",
        "category": "Insurance",
        "cat_slug": "insurance",
        "tagline": "Term & whole life insurance policies to protect your family's future.",
        "meta_desc": "Secure financial peace of mind for your loved ones with term or whole life insurance. Get free quotes starting under $1/day.",
        "main_title": "How it works for life insurance",
        "para1": "Securing your family's financial future provides ultimate peace of mind. GetCallAxis matches you with experienced life insurance specialists offering 10 to 30-year term and permanent whole life policies.",
        "para2": "Review affordable coverage options, including no-medical-exam policies, with free quotes customized to your age and goals.",
        "benefits": [
            "10, 20 & 30 year term life options",
            "Permanent whole & universal life policies",
            "No-medical-exam coverage options available",
            "Rates starting under $1/day"
        ],
        "related": [
            {"title": "Health Insurance", "url": "health-insurance.html"},
            {"title": "Home Insurance", "url": "home-insurance.html"},
            {"title": "Auto Insurance", "url": "auto-insurance.html"},
            {"title": "All Insurance", "url": "insurance.html"}
        ]
    }
]

def generate_page(data):
    filename = data["filename"]
    service = data["service"]
    service_full = data["service_full"]
    category = data["category"]
    cat_slug = data["cat_slug"]
    tagline = data["tagline"]
    meta_desc = data["meta_desc"]
    main_title = data["main_title"]
    para1 = data["para1"]
    para2 = data["para2"]
    benefits = data["benefits"]
    related = data["related"]

    related_html = "".join([
        f'''        <a href="{item['url']}" class="related-service-card">
          <span class="rs-title">{item['title']}</span>
          <span class="rs-arrow">&rarr;</span>
        </a>\n'''
        for item in related
    ])

    html = f'''<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{service_full} | GetCallAxis Referral Network</title>
  <meta name="description" content="{meta_desc}">
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
        <span class="ticker-item">✉️ Email: <strong>contact@getcallaxis.com</strong></span>
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
        <span class="ticker-item">✉️ Email: <strong>contact@getcallaxis.com</strong></span>
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
      <a href="index.html" class="brand-logo" aria-label="GetCallAxis Homepage">
        <img src="logo.jpg" alt="GetCallAxis Logo" class="brand-logo-img">
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
          <svg class="theme-icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>

        <a href="tel:+15550100123" class="phone-link" aria-label="Call GetCallAxis Directly">
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

  <!-- Breadcrumbs -->
  <div class="breadcrumb-container container">
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <a href="index.html">Home</a>
      <span class="bc-sep">/</span>
      <a href="{cat_slug}.html">{category}</a>
      <span class="bc-sep">/</span>
      <span class="bc-current">{service}</span>
    </nav>
  </div>

  <!-- Service Hero Section (Form is NOT inside hero) -->
  <section class="service-hero-sec">
    <div class="container">
      <div class="service-hero-content">
        <div class="trust-pill"><span class="badge-dot"></span> {category.upper()}</div>
        <h1 class="service-hero-title">{service_full}</h1>
        <p class="service-tagline">{tagline}</p>
        
        <div class="service-hero-actions">
          <a href="tel:+15550100123" class="btn btn-teal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now: +1 (555) 010-0123
          </a>
          <a href="#quote-form-section" class="btn btn-outline-white">Get my free quote &rarr;</a>
        </div>

        <!-- Trust Badges with Separated Title & Subtitle -->
        <div class="trust-badges-grid">
          <div class="trust-badge-item">
            <div class="badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="badge-text">
              <strong>Licensed &amp; Insured</strong>
              <span>State Certified Pros</span>
            </div>
          </div>

          <div class="trust-badge-item">
            <div class="badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div class="badge-text">
              <strong>Fast Response</strong>
              <span>Zero Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Two-Column Section: Left Content + Right Sticky Quote Form Card -->
  <section class="service-main-sec" id="quote-form-section">
    <div class="container service-main-grid">
      
      <!-- Left Column: How It Works & Benefits Grid -->
      <div class="service-content-col">
        <h2 class="service-main-title">{main_title.capitalize()}</h2>
        <p class="service-main-subtitle">{para1}</p>
        <p class="service-main-subtitle">{para2}</p>

        <div class="service-benefits-grid">
          <div class="benefit-card">
            <div class="benefit-check-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p class="benefit-text">{benefits[0]}</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-check-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p class="benefit-text">{benefits[1]}</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-check-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p class="benefit-text">{benefits[2]}</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-check-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p class="benefit-text">{benefits[3]}</p>
          </div>
        </div>
      </div>

      <!-- Right Column: Single Sticky 3-Step Quote Form Card -->
      <div class="service-form-col">
        <div id="service-quote-card" class="service-quote-card" data-service="{service}" data-category="{category}">
          
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
              <div class="selected-service-chip margin-top-xs margin-bottom-md">
                <span>{service}</span>
                <span style="opacity:0.5;">|</span>
                <span>{category}</span>
              </div>

              <div class="input-group margin-top-sm">
                <label for="sub_zip" class="form-label">US Zip Code *</label>
                <div class="input-with-icon">
                  <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <input type="text" id="sub_zip" name="zip" class="form-input" placeholder="e.g. 90210" maxlength="5" pattern="[0-9]{5}" required>
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
                  A verified <strong class="conf-service-name">{service}</strong> provider in zip code <strong class="conf-zip-val">90210</strong> will contact you shortly.
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

  <!-- Related Services Section -->
  <section class="section related-services-sec">
    <div class="container">
      <div class="section-header text-center">
        <span class="sub-title-badge">Related Services</span>
        <h2 class="section-title">Other services you might need</h2>
      </div>

      <div class="related-services-grid">
{related_html}      </div>
    </div>
  </section>

  <!-- Single Closing CTA Banner Section -->
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

  <!-- Footer Section -->
  <footer class="footer-sec">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <a href="index.html" class="brand-logo footer-logo">
            <img src="logo.jpg" alt="GetCallAxis Logo" class="footer-logo-img">
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
              <strong>contact@getcallaxis.com</strong>
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
          GetCallAxis is a free online referral platform connecting consumers with independent third-party insurance agents and home contractors. GetCallAxis is not an underwriter, insurance agency, or licensed general contractor. Services may vary by state and zip code.
        </p>
        <div class="copyright-bar">
          <span>&copy; <span id="current-year">2026</span> GetCallAxis Referral Network. All rights reserved.</span>
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
'''
    base_dir = os.path.dirname(os.path.abspath(__file__))
    target_path = os.path.join(base_dir, filename)
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Successfully generated: {filename}")

if __name__ == '__main__':
    for item in subpages_data:
        generate_page(item)
    print("All 17 sub-service pages generated successfully!")
