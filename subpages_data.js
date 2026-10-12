const BRAND_NAME = "GetCallAxis";
const EMAIL = "contact@getcallaxis.com";
// DUMMY ADDRESS, REPLACE WITH CLIENT'S REAL ADDRESS
const SITE_ADDRESS = "487 Maple Ridge Avenue, Westfield, NJ 07000, United States";

const subpagesData = {
  "roofing.html": {
    type: "home-services",
    title: "Roofing Repair & Replacement | GetCallAxis",
    heroTitle: "Roofing Repair & Replacement",
    categoryPill: "HOME SERVICES",
    heroSub: "Connect with licensed local roofers for repairs, full replacements, or storm damage claims, and get quotes without the cold calls.",
    howItWorksTitle: "How it works for roofing",
    introP1: "When your home needs roof repairs or a complete replacement, finding a dependable contractor shouldn't feel like a full-time job. GetCallAxis connects you directly with top-rated, licensed, and insured roofing specialists in your local area.",
    introP2: "Our simple referral system allows you to request free, no-obligation quotes for asphalt shingles, metal roofing, tile, or storm damage restoration — giving you transparent pricing and quick response times.",
    benefits: [
      { title: "Asphalt, metal & tile roofing options", desc: "Repairs, complete replacements, and material guidance tailored to your local climate and home architecture." },
      { title: "Storm & insurance-claim specialists", desc: "Local roofers experienced in hail, wind, and storm damage claim processing and adjuster negotiations." },
      { title: "Free on-site inspections", desc: "Get a thorough roof inspection and clear written estimate before starting any work." },
      { title: "Licensed & insured local crews", desc: "All roofers in our network are fully background-checked, licensed, and insured for your peace of mind." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Gutters", url: "gutters.html", desc: "Seamless gutter installation, leaf guards & downspout repairs." },
      { name: "Siding", url: "siding.html", desc: "Vinyl, fiber cement & insulated siding replacement." },
      { name: "Windows", url: "windows.html", desc: "Double-pane replacement windows & energy-efficient installs." },
      { name: "Foundations", url: "foundations.html", desc: "Foundation crack repair, waterproofing & sump pump install." }
    ],
    formOptions: ["Roof Repair", "Complete Roof Replacement", "Storm / Hail Damage", "Roof Inspection / Leak Search"]
  },
  "bathroom-remodel.html": {
    type: "home-services",
    title: "Bathroom Remodeling Services | GetCallAxis",
    heroTitle: "Bathroom Remodel & Renovations",
    categoryPill: "HOME SERVICES",
    heroSub: "Transform your bathroom with local remodeling contractors specializing in walk-in showers, tub replacements, and full layout redesigns.",
    howItWorksTitle: "How it works for bathroom remodel",
    introP1: "Upgrading your bathroom increases home value and improves everyday comfort. GetCallAxis links you with experienced bathroom renovation specialists who deliver high-quality craftsmanship on time and within budget.",
    introP2: "Whether you're planning a quick tub-to-shower conversion or a luxury master bath overhaul, compare estimates from verified local remodelers today.",
    benefits: [
      { title: "Tub-to-shower conversions", desc: "Transform outdated bathtubs into sleek, accessible walk-in showers with modern glass enclosures." },
      { title: "Full bathroom rebuilds & layout changes", desc: "Custom vanities, tile flooring, lighting, plumbing rerouting, and fixture installations." },
      { title: "Accessibility & walk-in tub options", desc: "Safety grab bars, low-threshold entryways, built-in seating, and walk-in bath solutions." },
      { title: "Fixed-quote & financing options available", desc: "Clear pricing upfront with flexible payment plans available through participating contractors." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Kitchen Remodel", url: "kitchen-remodel.html", desc: "Cabinet refacing, countertop installation & kitchen redesign." },
      { name: "Plumbing", url: "plumbing.html", desc: "Fixture replacements, drain cleaning & emergency repairs." },
      { name: "Flooring", url: "flooring.html", desc: "Tile, waterproof vinyl & hardwood installation." },
      { name: "Electrical", url: "electrical.html", desc: "Vanity lighting, ventilation fans & GFC outlet wiring." }
    ],
    formOptions: ["Shower Conversion", "Full Bathroom Remodel", "Vanity & Tile Upgrade", "Accessibility / Walk-in Tub"]
  },
  "flooring.html": {
    type: "home-services",
    title: "Flooring Installation & Repair | GetCallAxis",
    heroTitle: "Flooring Installation & Refinishing",
    categoryPill: "HOME SERVICES",
    heroSub: "Upgrade your floors with licensed local installation specialists for hardwood, tile, luxury vinyl plank, and laminate.",
    howItWorksTitle: "How it works for flooring",
    introP1: "New flooring can completely transform the aesthetic and warmth of your home. GetCallAxis simplifies your search by matching you with skilled local flooring installers and refinishers.",
    introP2: "From pet-friendly luxury vinyl plank to timeless solid hardwood and designer ceramic tile, get free estimates from top local crews.",
    benefits: [
      { title: "Hardwood, tile, vinyl & laminate", desc: "High-quality material selection for every room, budget, and interior design aesthetic." },
      { title: "Refinishing & repair services", desc: "Restore worn hardwood surfaces or repair damaged floor tiles with expert local craftspeople." },
      { title: "Room-by-room or whole-home quotes", desc: "Compare pricing for single-room updates or comprehensive total home floor replacement." },
      { title: "Pet- and family-friendly options", desc: "Scratch-resistant and 100% waterproof flooring options built to withstand high foot traffic." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Bathroom Remodel", url: "bathroom-remodel.html", desc: "Custom tile showers & waterproof bathroom flooring." },
      { name: "Kitchen Remodel", url: "kitchen-remodel.html", desc: "Kitchen tile & hardwood flooring upgrades." },
      { name: "Foundations", url: "foundations.html", desc: "Subfloor repair & basement floor waterproofing." },
      { name: "Roofing", url: "roofing.html", desc: "Exterior home protection & roof repair services." }
    ],
    formOptions: ["Hardwood Installation", "Luxury Vinyl Plank (LVP)", "Tile / Natural Stone", "Hardwood Refinishing"]
  },
  "hvac.html": {
    type: "home-services",
    title: "HVAC Repair & Replacement | GetCallAxis",
    heroTitle: "Heating, Ventilation & Air Conditioning (HVAC)",
    categoryPill: "HOME SERVICES",
    heroSub: "Keep your home comfortable year-round with licensed local HVAC technicians for AC repair, furnace replacement, and heat pumps.",
    howItWorksTitle: "How it works for hvac",
    introP1: "HVAC emergencies never happen at a convenient time. GetCallAxis connects you rapidly with certified heating and cooling contractors ready to diagnose, repair, or replace your climate system.",
    introP2: "Compare upfront quotes on high-efficiency AC units, heat pumps, gas furnaces, and ductwork installations to stay cool in summer and warm in winter.",
    benefits: [
      { title: "Furnace, AC & heat pump service", desc: "Complete heating and cooling installation, emergency repair, and seasonal system tune-ups." },
      { title: "Emergency repair availability", desc: "Fast dispatch for unexpected AC failures in summer peak heat or heating outages during winter storms." },
      { title: "Energy-efficient system upgrades", desc: "Save on monthly utility bills with high-SEER2 systems, variable-speed heat pumps & smart thermostats." },
      { title: "Maintenance plans to prevent breakdowns", desc: "Regular checkups to keep system running at peak performance year-round." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Electrical", url: "electrical.html", desc: "HVAC circuit wiring, generator installs & panel upgrades." },
      { name: "Solar", url: "solar.html", desc: "Power your heat pump & AC with clean solar energy." },
      { name: "Windows", url: "windows.html", desc: "Reduce HVAC load with energy-efficient replacement windows." },
      { name: "Plumbing", url: "plumbing.html", desc: "Water heater replacement & heat pump water heaters." }
    ],
    formOptions: ["AC Repair / Maintenance", "AC Replacement", "Heating / Furnace Service", "Heat Pump Upgrade"]
  },
  "windows.html": {
    type: "home-services",
    title: "Window Replacement & Repair | GetCallAxis",
    heroTitle: "Window Replacement & Installation",
    categoryPill: "HOME SERVICES",
    heroSub: "Lower your energy bills and enhance curb appeal with double-pane replacement windows installed by licensed local contractors.",
    howItWorksTitle: "How it works for windows",
    introP1: "Drafty or broken windows drain your home's energy efficiency. GetCallAxis links you with window replacement specialists offering energy-efficient vinyl, wood, and fiberglass options.",
    introP2: "Get free estimates for single window repairs, bay window accents, or full-home energy-efficient window upgrades.",
    benefits: [
      { title: "Double & triple-pane options", desc: "Energy-efficient replacement windows designed to lower heating and cooling costs year-round." },
      { title: "Vinyl, wood & fiberglass frames", desc: "Durable frame materials with customizable colors, finishes, and grid patterns." },
      { title: "Energy-efficiency rebate guidance", desc: "Help finding local utility rebates and federal tax credits for eligible window upgrades." },
      { title: "Full-home or single-room quotes", desc: "Flexible project sizes from single broken pane replacements to whole-home window retrofits." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Siding", url: "siding.html", desc: "Combine siding & window replacement for max efficiency." },
      { name: "Roofing", url: "roofing.html", desc: "Roof repair & skylight replacement contractors." },
      { name: "Gutters", url: "gutters.html", desc: "Prevent water runoff damage near window frames." },
      { name: "Solar", url: "solar.html", desc: "Complete home green energy & window upgrades." }
    ],
    formOptions: ["Whole House Windows (5+)", "Partial Replacement (1-4)", "Window Repair / Glass", "Specialty / Bay Windows"]
  },
  "gutters.html": {
    type: "home-services",
    title: "Gutter Installation & Guards | GetCallAxis",
    heroTitle: "Gutter Installation, Repair & Guards",
    categoryPill: "HOME SERVICES",
    heroSub: "Protect your home's roof and foundation with seamless aluminum gutters, leaf guards, and downspout drainage solutions.",
    howItWorksTitle: "How it works for gutters",
    introP1: "Clogged or damaged gutters cause severe water damage to your roofline, siding, and foundation. GetCallAxis connects you with local gutter pros who install custom seamless gutters and high-flow leaf protection systems.",
    introP2: "Get fast estimates for gutter repairs, guard installations, or complete seamless gutter system replacements.",
    benefits: [
      { title: "Seamless gutter installation", desc: "Custom-fit seamless aluminum and copper gutters extruded on-site to eliminate leak seams." },
      { title: "Gutter guards & leaf protection", desc: "Keep leaves, pine needles, and debris out to prevent clogging and overflow forever." },
      { title: "Repair & re-pitching services", desc: "Fix sagging sections, reseal joints, and restore proper slope for optimal water flow." },
      { title: "Downspout & drainage solutions", desc: "Direct rainwater safely away from your home's foundation to prevent soil erosion." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Roofing", url: "roofing.html", desc: "Roof repair, shingle replacement & fascia board repair." },
      { name: "Foundations", url: "foundations.html", desc: "Waterproofing & foundation protection solutions." },
      { name: "Siding", url: "siding.html", desc: "Exterior siding repair & trim restoration." },
      { name: "Windows", url: "windows.html", desc: "Replacement windows with leak-proof capping." }
    ],
    formOptions: ["New Seamless Gutters", "Gutter Guard Installation", "Gutter Repair / Re-pitching", "Downspout / Drainage Fix"]
  },
  "siding.html": {
    type: "home-services",
    title: "Siding Replacement & Repair | GetCallAxis",
    heroTitle: "Exterior Siding Installation & Repair",
    categoryPill: "HOME SERVICES",
    heroSub: "Boost curb appeal and thermal insulation with top-grade vinyl, fiber cement, and wood siding installed by local pros.",
    howItWorksTitle: "How it works for siding",
    introP1: "Outdated or damaged siding compromises your home's weather protection and visual appeal. GetCallAxis connects you with certified exterior siding contractors offering durable, low-maintenance cladding.",
    introP2: "Compare quotes for James Hardie fiber cement, insulated vinyl siding, or wood lap siding with professional color consultation.",
    benefits: [
      { title: "Vinyl, fiber cement & wood siding", desc: "Durable exterior cladding options from industry-leading manufacturers like James Hardie." },
      { title: "Insulated siding for energy savings", desc: "Add thermal barrier protection to reduce heat loss and lower monthly utility bills." },
      { title: "Storm damage & repair specialists", desc: "Fast repairs for wind-blown, hail-dented, or cracked siding panels." },
      { title: "Color & style consultation included", desc: "Professional guidance on exterior trim, accent colors, and architectural styling." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Roofing", url: "roofing.html", desc: "Complete exterior roofing & soffit replacement." },
      { name: "Windows", url: "windows.html", desc: "Window trim & energy-efficient glass installation." },
      { name: "Gutters", url: "gutters.html", desc: "Seamless gutters matching your new siding color." },
      { name: "Paint / Remodel", url: "kitchen-remodel.html", desc: "Interior & exterior renovation solutions." }
    ],
    formOptions: ["Full Siding Replacement", "Vinyl Siding", "Fiber Cement (James Hardie)", "Siding Repair / Patching"]
  },
  "kitchen-remodel.html": {
    type: "home-services",
    title: "Kitchen Remodeling Services | GetCallAxis",
    heroTitle: "Kitchen Remodeling & Design",
    categoryPill: "HOME SERVICES",
    heroSub: "Build your dream kitchen with verified local remodeling contractors for custom cabinets, countertops, lighting, and layout changes.",
    howItWorksTitle: "How it works for kitchen remodel",
    introP1: "The kitchen is the heart of your home. GetCallAxis matches you with top kitchen designers and licensed remodelers who turn your vision into reality.",
    introP2: "From solid quartz countertops and solid wood cabinets to complete wall removals and island additions, request free quotes today.",
    benefits: [
      { title: "Cabinet refacing & full replacement", desc: "Upgrade kitchen storage with custom cabinets, refacing, or modern soft-close hardware." },
      { title: "Countertop & backsplash upgrades", desc: "Granite, quartz, marble, and butcher block installations with custom tiled backsplashes." },
      { title: "Layout redesign & island integration", desc: "Optimize kitchen workflow, add kitchen islands, and integrate built-in smart appliances." },
      { title: "Financing options for larger projects", desc: "Flexible financing plans to bring your dream kitchen to life within your budget." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Bathroom Remodel", url: "bathroom-remodel.html", desc: "Custom tile, vanities & bathroom rebuilds." },
      { name: "Flooring", url: "flooring.html", desc: "Hardwood, tile & waterproof vinyl flooring." },
      { name: "Electrical", url: "electrical.html", desc: "Under-cabinet lighting, island outlets & panel upgrades." },
      { name: "Plumbing", url: "plumbing.html", desc: "Sink, garbage disposal & gas line installations." }
    ],
    formOptions: ["Full Kitchen Remodel", "Cabinet Upgrade / Refacing", "Countertop Replacement", "Island & Flooring Addition"]
  },
  "plumbing.html": {
    type: "home-services",
    title: "Plumbing Services & Repairs | GetCallAxis",
    heroTitle: "Plumbing Repair, Installation & Drains",
    categoryPill: "HOME SERVICES",
    heroSub: "Get fast help for water heaters, clogged drains, pipe leaks, and fixture replacements from licensed local plumbers.",
    howItWorksTitle: "How it works for plumbing",
    introP1: "Plumbing problems require rapid, professional action before minor leaks cause catastrophic water damage. GetCallAxis connects you immediately with vetted, licensed local plumbers.",
    introP2: "Compare upfront estimates for emergency leak fixes, tankless water heater installations, drain cleaning, or sewer line inspections.",
    benefits: [
      { title: "Emergency & same-day service", desc: "Fast response for burst pipes, major leaks, clogged drains, and sewer backups." },
      { title: "Water heater install & repair", desc: "Tankless and traditional water heater replacements, repairs, and maintenance." },
      { title: "Drain cleaning & leak detection", desc: "Hydro-jetting, camera pipe inspections, and non-destructive leak detection." },
      { title: "Licensed, insured local plumbers", desc: "Background-checked plumbers who guarantee code-compliant, long-lasting work." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Bathroom Remodel", url: "bathroom-remodel.html", desc: "Shower conversions & bathroom plumbing upgrades." },
      { name: "HVAC", url: "hvac.html", desc: "Boiler, heat pump & gas piping specialists." },
      { name: "Foundations", url: "foundations.html", desc: "Sump pump install & basement flood prevention." },
      { name: "Electrical", url: "electrical.html", desc: "Water heater wiring & garbage disposal hookups." }
    ],
    formOptions: ["Water Heater Repair / Replace", "Drain Cleaning / Clog", "Leak Repair / Piping", "Bathroom / Kitchen Plumbing"]
  },
  "electrical.html": {
    type: "home-services",
    title: "Electrical Services & Upgrades | GetCallAxis",
    heroTitle: "Electrical Panel, Wiring & Generator Services",
    categoryPill: "HOME SERVICES",
    heroSub: "Power your home safely with licensed master electricians for panel upgrades, EV chargers, generators, and rewiring.",
    howItWorksTitle: "How it works for electrical",
    introP1: "Electrical work demands certified expertise to ensure safety and compliance with national codes. GetCallAxis connects you with licensed electricians in your area.",
    introP2: "Get free quotes for 200A panel upgrades, Level 2 EV charger installations, home backup generators, or decorative lighting.",
    benefits: [
      { title: "Panel upgrades & rewiring", desc: "Upgrade 100A to 200A/400A panels, replace outdated knob-and-tube, and expand capacity." },
      { title: "EV charger & generator installs", desc: "Home electric vehicle Level 2 chargers and whole-home backup generator hookups." },
      { title: "Lighting & outlet installation", desc: "Recessed LED lighting, smart switches, ceiling fans, and outdoor security lights." },
      { title: "Licensed electricians, code-compliant", desc: "Master and journeyman electricians providing safe, fully permitted service." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Solar", url: "solar.html", desc: "Solar panel installation & battery storage hookups." },
      { name: "HVAC", url: "hvac.html", desc: "AC circuit installation & smart thermostat wiring." },
      { name: "Kitchen Remodel", url: "kitchen-remodel.html", desc: "Under-cabinet lighting & kitchen island power." },
      { name: "Plumbing", url: "plumbing.html", desc: "Electric water heater & sump pump wiring." }
    ],
    formOptions: ["Panel Upgrade (200A+)", "EV Charger Installation", "Generator Hookup", "Lighting / Outlet Rewiring"]
  },
  "solar.html": {
    type: "home-services",
    title: "Solar Panel Installation | GetCallAxis",
    heroTitle: "Solar Panel & Battery Storage Installation",
    categoryPill: "HOME SERVICES",
    heroSub: "Eliminate high electric bills and lock in energy independence with residential solar panel systems and battery backup.",
    howItWorksTitle: "How it works for solar",
    introP1: "Switching to solar power reduces monthly energy bills while increasing your home's resale value. GetCallAxis connects you with top-rated local solar installers.",
    introP2: "Request a free solar roof assessment to learn how federal tax incentives (30% ITC) and net metering can maximize your savings.",
    benefits: [
      { title: "Free solar savings estimate", desc: "Customized roof assessment and solar output projection with zero obligation." },
      { title: "Panel, battery & inverter options", desc: "Tier-1 solar panels, battery storage (Tesla Powerwall, Enphase), and micro-inverters." },
      { title: "Federal & state incentive guidance", desc: "Navigate the 30% federal solar tax credit and local net-metering rebate programs." },
      { title: "Local, licensed installation crews", desc: "Professional installation, municipal permitting, and grid interconnection handling." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Roofing", url: "roofing.html", desc: "Roof inspection & replacement before solar install." },
      { name: "Electrical", url: "electrical.html", desc: "Main panel upgrades & battery storage wiring." },
      { name: "HVAC", url: "hvac.html", desc: "Heat pump upgrades powered by solar energy." },
      { name: "Windows", url: "windows.html", desc: "Energy-efficient replacement windows." }
    ],
    formOptions: ["Solar Panel Installation", "Solar + Battery Storage", "System Addition / Battery Only", "Solar Maintenance / Inspection"]
  },
  "garage-doors.html": {
    type: "home-services",
    title: "Garage Door Repair & Replacement | GetCallAxis",
    heroTitle: "Garage Door Repair & Installation",
    categoryPill: "HOME SERVICES",
    heroSub: "Restore security and convenience with local garage door technicians for spring repair, opener replacement, and new doors.",
    howItWorksTitle: "How it works for garage doors",
    introP1: "A broken garage door spring or failing opener leaves your vehicle trapped and compromises home security. GetCallAxis links you with fast local repair teams.",
    introP2: "Get free estimates for heavy-duty spring replacements, quiet belt-drive openers, or stylish insulated garage doors.",
    benefits: [
      { title: "Same-week repair availability", desc: "Broken spring replacement, cable repairs, off-track fixes, and sensor realignments." },
      { title: "Insulated & smart garage doors", desc: "Modern steel, carriage-house, and glass doors with smartphone smart controls." },
      { title: "Opener installation & repair", desc: "Quiet belt-drive, chain-drive, and wall-mount smart opener installations." },
      { title: "Free measure & quote", desc: "Accurate on-site measurements and custom door design options before ordering." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Siding", url: "siding.html", desc: "Exterior siding matching garage trim." },
      { name: "Electrical", url: "electrical.html", desc: "Dedicated garage outlet & lighting wiring." },
      { name: "Roofing", url: "roofing.html", desc: "Garage roof repair & flashing work." },
      { name: "Foundations", url: "foundations.html", desc: "Garage floor crack repair & leveling." }
    ],
    formOptions: ["Broken Spring Repair", "New Garage Door Install", "Garage Opener Replacement", "Off-Track / Cable Repair"]
  },
  "foundations.html": {
    type: "home-services",
    title: "Foundation Repair & Waterproofing | GetCallAxis",
    heroTitle: "Foundation Repair & Basement Waterproofing",
    categoryPill: "HOME SERVICES",
    heroSub: "Protect your home's structural integrity with foundation repair specialists for crack injection, piering, and sump pumps.",
    howItWorksTitle: "How it works for foundations & waterproofing",
    introP1: "Foundation cracks, bowing basement walls, or water intrusion can cause severe damage if left unaddressed. GetCallAxis connects you with certified foundation repair experts.",
    introP2: "Request a free structural inspection to evaluate soil settlement, water drainage, wall bowing, and basement waterproofing needs.",
    benefits: [
      { title: "Foundation crack & settlement repair", desc: "Helical piers, wall anchors, carbon fiber straps, and polyurethane crack injection." },
      { title: "Basement & crawl space waterproofing", desc: "Interior drainage channels, sump pumps, vapor barriers, and dehumidification systems." },
      { title: "Sump pump installation", desc: "Primary and battery-backup sump pumps to protect lower levels from heavy rainfall flooding." },
      { title: "Free structural inspection", desc: "Certified foundation specialists assess soil pressure, moisture, and wall movement." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Gutters", url: "gutters.html", desc: "Gutter guard & downspout extensions to protect foundation." },
      { name: "Plumbing", url: "plumbing.html", desc: "Sewer line leak repair & main line inspections." },
      { name: "Flooring", url: "flooring.html", desc: "Basement subfloor leveling & waterproof flooring." },
      { name: "Roofing", url: "roofing.html", desc: "Roof drainage & exterior weatherproofing." }
    ],
    formOptions: ["Foundation Crack Repair", "Basement Waterproofing", "Sump Pump Install / Repair", "Bowing Wall Stabilization"]
  },
  "auto-insurance.html": {
    type: "insurance",
    title: "Auto Insurance Quotes | GetCallAxis",
    heroTitle: "Auto Insurance Coverage",
    categoryPill: "INSURANCE",
    heroSub: "Compare competitive auto insurance quotes from top-rated carriers for liability, collision, comprehensive, and multi-car discounts.",
    howItWorksTitle: "How it works for auto insurance",
    introP1: "Car insurance rates fluctuate based on your location, driving record, and coverage limits. GetCallAxis connects you with licensed insurance agents who shop multiple carriers on your behalf.",
    introP2: "Whether you need state-minimum liability, comprehensive protection for a new vehicle, or multi-policy bundle savings, get free quotes in minutes.",
    benefits: [
      { title: "Liability, collision & comprehensive options", desc: "Protect against accidents, theft, weather damage, windshield cracks, and uninsured drivers." },
      { title: "Discounts for safe drivers & bundling", desc: "Save up to 25% by combining auto with home insurance or maintaining a clean driving record." },
      { title: "Coverage for new, used & leased vehicles", desc: "Tailored policies for sports cars, SUVs, trucks, EV/hybrids, and commercial vans." },
      { title: "State-minimum to full-coverage plans", desc: "Custom limit options that meet state legal mandates and lender financing requirements." }
    ],
    relatedTitle: "Related Insurance Coverage",
    related: [
      { name: "Health Insurance", url: "health-insurance.html", desc: "Individual, family & supplemental health coverage." },
      { name: "Home Insurance", url: "home-insurance.html", desc: "Bundle home & auto for maximum multi-policy discounts." },
      { name: "Life Insurance", url: "life-insurance.html", desc: "Term & whole life insurance policy options." }
    ],
    formOptions: ["Full Coverage (Collision + Comprehensive)", "Liability Only (State Minimum)", "Multi-Car Discount", "Bundle Auto + Home"]
  },
  "health-insurance.html": {
    type: "insurance",
    title: "Health Insurance Plans | GetCallAxis",
    heroTitle: "Health Insurance Plans & Subsidies",
    categoryPill: "INSURANCE",
    heroSub: "Find affordable health insurance coverage with licensed agents specializing in ACA marketplace plans, private insurance, and subsidies.",
    howItWorksTitle: "How it works for health insurance",
    introP1: "Navigating health insurance options can feel overwhelming. GetCallAxis simplifies the process by matching you with licensed state agents who help you select the ideal medical plan.",
    introP2: "Explore ACA marketplace coverage, subsidy eligibility, PPO/HMO networks, dental/vision add-ons, and short-term health plans.",
    benefits: [
      { title: "ACA marketplace & private plan options", desc: "On-exchange and off-exchange health insurance plans for individuals, families, and self-employed." },
      { title: "Guidance on subsidies & tax credits", desc: "Find out if you qualify for monthly premium subsidies under federal income guidelines." },
      { title: "Individual, family & short-term plans", desc: "Flexible coverage durations, HSA-eligible plans, and PPO/HMO doctor network choices." },
      { title: "Licensed agents in every state", desc: "Talk to certified advisors who guide you through open enrollment and special enrollment periods." }
    ],
    relatedTitle: "Related Insurance Coverage",
    related: [
      { name: "Auto Insurance", url: "auto-insurance.html", desc: "Liability, collision & multi-car policy options." },
      { name: "Life Insurance", url: "life-insurance.html", desc: "Protect your family's financial future with life coverage." },
      { name: "Home Insurance", url: "home-insurance.html", desc: "Protect your property & personal belongings." }
    ],
    formOptions: ["Individual Plan", "Family Health Coverage", "Self-Employed / Business", "Short-Term / Gap Insurance"]
  },
  "home-insurance.html": {
    type: "insurance",
    title: "Home Insurance Quotes | GetCallAxis",
    heroTitle: "Homeowners & Renters Insurance",
    categoryPill: "INSURANCE",
    heroSub: "Protect your home, roof, and personal property against fire, theft, and natural disasters with top home insurance policies.",
    howItWorksTitle: "How it works for home insurance",
    introP1: "Your home is likely your biggest financial asset. GetCallAxis connects you with licensed insurance brokers who find policies offering robust protection at competitive rates.",
    introP2: "Compare quotes for homeowners insurance (HO-3), condo coverage (HO-6), or renters policies (HO-4) with bundle discounts for auto insurance.",
    benefits: [
      { title: "Dwelling, liability & personal property cover", desc: "Comprehensive protection for your house structure, roof, detached garages, and belongings." },
      { title: "Bundle discounts with auto or umbrella", desc: "Save significantly by grouping home, auto, and personal liability under one top-rated carrier." },
      { title: "Coverage for storms, fire & theft", desc: "Financial safety against natural disasters, pipe bursts, fallen trees, vandalism, and liability." },
      { title: "Renters & condo insurance available", desc: "Targeted coverage for condo owners (HO-6) and apartment renters (HO-4)." }
    ],
    relatedTitle: "Related Insurance Coverage",
    related: [
      { name: "Auto Insurance", url: "auto-insurance.html", desc: "Bundle auto with home for maximum discount." },
      { name: "Life Insurance", url: "life-insurance.html", desc: "Mortgage protection life insurance policies." },
      { name: "Health Insurance", url: "health-insurance.html", desc: "ACA marketplace & private medical insurance." }
    ],
    formOptions: ["Single Family Homeowner", "Condo Owner (HO-6)", "Renters Insurance (HO-4)", "Multi-Policy Home + Auto"]
  },
  "life-insurance.html": {
    type: "insurance",
    title: "Life Insurance Quotes | GetCallAxis",
    heroTitle: "Term & Whole Life Insurance",
    categoryPill: "INSURANCE",
    heroSub: "Secure your family's financial future with affordable term life, whole life, and no-exam policy options from top insurance carriers.",
    howItWorksTitle: "How it works for life insurance",
    introP1: "Life insurance provides essential financial protection for your loved ones, covering mortgages, education costs, and lost income. GetCallAxis connects you with trusted life insurance specialists.",
    introP2: "Get free personalized quotes for 10-to-30 year term policies, permanent whole life insurance, or simplified issue policies without medical exams.",
    benefits: [
      { title: "Term & whole life policy options", desc: "10, 20, 30-year term policies or permanent life insurance with guaranteed cash value growth." },
      { title: "No-medical-exam options available", desc: "Quick simplified issue coverage options without blood draws or physical exams for eligible applicants." },
      { title: "Coverage amounts from $50K to $2M+", desc: "Financial protection tailored to cover mortgages, college tuition, debts, and lost income." },
      { title: "Free needs-based coverage estimate", desc: "Calculate the exact coverage amount required to safeguard your family's financial future." }
    ],
    relatedTitle: "Related Insurance Coverage",
    related: [
      { name: "Auto Insurance", url: "auto-insurance.html", desc: "Collision, liability & multi-vehicle coverage." },
      { name: "Health Insurance", url: "health-insurance.html", desc: "ACA marketplace & private medical insurance." },
      { name: "Home Insurance", url: "home-insurance.html", desc: "Protect your house structure & belongings." }
    ],
    formOptions: ["Term Life (10-30 Years)", "Whole Life / Permanent", "No Medical Exam Life", "Mortgage Protection Life"]
  },
  "medicare-insurance.html": {
    type: "home_services",
    title: "Medicare Coverage Options | GetCallAxis",
    heroTitle: "Medicare",
    categoryPill: "HOME SERVICES",
    heroSub: "Get help comparing Medicare options from licensed agents.",
    howItWorksTitle: "How it works for Medicare",
    introP1: "Navigating Medicare options can feel overwhelming with numerous plans, rules, and enrollment deadlines. GetCallAxis connects you with independent, licensed insurance agents who can help clarify your options and guide you through the process.",
    introP2: "Whether you are approaching age 65 or looking to evaluate your current healthcare coverage during an open enrollment period, compare available options with professional guidance at no cost to you.",
    benefits: [
      { title: "Medicare Advantage plan comparisons", desc: "Explore all-in-one Medicare Advantage (Part C) options that may bundle medical, hospital, and supplemental benefits." },
      { title: "Medicare Supplement (Medigap) options", desc: "Understand supplemental policies designed to help cover out-of-pocket costs like copayments, coinsurance, and deductibles." },
      { title: "Part D prescription drug coverage", desc: "Review stand-alone prescription drug plans to help manage your routine medication costs and pharmacy networks." },
      { title: "Guidance during enrollment periods", desc: "Receive personalized support during Initial Enrollment, the Annual Election Period (AEP), or Special Enrollment Periods." }
    ],
    relatedTitle: "Related Home Services",
    related: [
      { name: "Roofing", url: "roofing.html", desc: "Roof repair, replacement & storm damage restoration." },
      { name: "HVAC", url: "hvac.html", desc: "Heating & air conditioning repair, heat pumps & AC install." },
      { name: "Plumbing", url: "plumbing.html", desc: "Water heater repair, drain cleaning & emergency leaks." },
      { name: "Electrical", url: "electrical.html", desc: "Panel upgrades, EV chargers & generator hookups." }
    ],
    formOptions: ["Medicare Advantage (Part C)", "Medicare Supplement (Medigap)", "Prescription Drug Plan (Part D)", "General Medicare Guidance"]
  },
  "insurance.html": {
    isOverview: true,
    type: "overview",
    title: "Insurance Referral Network | GetCallAxis",
    heroTitle: "Insurance Referral Network",
    categoryPill: "INSURANCE OVERVIEW",
    heroSub: "Connect with licensed insurance agents for Auto, Health, Home, and Life options tailored to your needs.",
    howItWorksTitle: "Comprehensive Insurance Protection",
    introP1: "GetCallAxis connects you with licensed local and national insurance professionals who help you find the right policy for your family, vehicle, and home.",
    introP2: "Explore our insurance coverage categories below or start a quick quote request to compare rates.",
    benefits: [
      { title: "Licensed Independent Agents", desc: "Access top insurance agents who shop multiple carriers for the best rates." },
      { title: "Multi-Policy Bundle Discounts", desc: "Save up to 25% when bundling auto, home, and personal umbrella insurance." },
      { title: "100% Free & No Obligation", desc: "Compare insurance quotes with no upfront fees and zero commitment required." },
      { title: "Fast & Secure Connection", desc: "Get matched with verified insurance providers in your state in seconds." }
    ],
    relatedTitle: "Explore Insurance Categories",
    related: [
      { name: "Auto Insurance", url: "auto-insurance.html", desc: "Liability, collision, comprehensive & safe driver discounts." },
      { name: "Health Insurance", url: "health-insurance.html", desc: "ACA marketplace, private plans & subsidy assistance." },
      { name: "Home Insurance", url: "home-insurance.html", desc: "Homeowners, renters, condo & storm damage coverage." },
      { name: "Life Insurance", url: "life-insurance.html", desc: "Term life, whole life & no-medical-exam policies." }
    ],
    formOptions: ["Auto Insurance", "Health Insurance", "Home Insurance", "Life Insurance"]
  },
  "home-services.html": {
    isOverview: true,
    type: "overview",
    title: "Home Services Referral Network | GetCallAxis",
    heroTitle: "Home Services Referral Network",
    categoryPill: "HOME SERVICES OVERVIEW",
    heroSub: "Connect with background-checked local contractors for roofing, remodeling, HVAC, plumbing, solar, Medicare, and emergency home repairs.",
    howItWorksTitle: "Verified Local Service Professionals",
    introP1: "GetCallAxis makes finding trusted home service contractors fast and stress-free. We connect you with top-rated local specialists across home improvement trades and essential services.",
    introP2: "Select your service below or request a free quote to get matched with verified pros in your zip code.",
    benefits: [
      { title: "Verified Local Contractors", desc: "Licensed, insured, and background-checked home improvement professionals." },
      { title: "Transparent Pricing & Free Quotes", desc: "Receive detailed, upfront written estimates before any work begins." },
      { title: "Fast Emergency Response", desc: "Rapid dispatch for urgent plumbing, HVAC, electrical, and roofing issues." },
      { title: "Wide Trade Coverage", desc: "From minor repairs to full house remodels, find the right pro for every job." }
    ],
    relatedTitle: "Popular Home Services",
    related: [
      { name: "Roofing", url: "roofing.html", desc: "Roof repair, replacement & storm damage restoration." },
      { name: "HVAC", url: "hvac.html", desc: "Heating & air conditioning repair, heat pumps & AC install." },
      { name: "Bathroom Remodel", url: "bathroom-remodel.html", desc: "Tub-to-shower conversions & full bath renovations." },
      { name: "Plumbing", url: "plumbing.html", desc: "Water heater repair, drain cleaning & emergency leaks." },
      { name: "Electrical", url: "electrical.html", desc: "Panel upgrades, EV chargers & generator hookups." },
      { name: "Medicare", url: "medicare-insurance.html", desc: "Compare Medicare Advantage, Supplement & Part D options." }
    ],
    formOptions: ["Roofing", "HVAC / Air Conditioning", "Bathroom Remodel", "Plumbing", "Electrical", "Solar Energy", "Medicare"]
  }
};

if (typeof module !== 'undefined') {
  module.exports = subpagesData;
}
