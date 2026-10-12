const fs = require('fs');
const subpagesData = require('./subpages_data.js');

const sharedFooterHTML = `
<!-- ================= FOOTER ================= -->
<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-grid">
      <!-- Left Branding Column -->
      <div class="footer-col brand-col">
        <a href="index.html" class="footer-logo">
          <img src="logo.png" alt="GetCallAxis Logo" class="footer-logo-img">
          <span class="logo-text">Call<em>Axis</em></span>
        </a>
        <p class="footer-tagline">Connecting homeowners with top insurance and service pros.</p>
        <div class="footer-contact-lines">
          <div class="contact-line">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:+15550100123">+1 (555) 010-0123</a>
          </div>
          <div class="contact-line">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:contact@getcallaxis.com">contact@getcallaxis.com</a>
          </div>
        </div>
      </div>

      <!-- Links Column 1: Insurance -->
      <div class="footer-col">
        <h4 class="footer-heading">Insurance</h4>
        <ul class="footer-links">
          <li><a href="auto-insurance.html">Auto Insurance</a></li>
          <li><a href="health-insurance.html">Health Insurance</a></li>
          <li><a href="home-insurance.html">Home Insurance</a></li>
          <li><a href="life-insurance.html">Life Insurance</a></li>
          <li><a href="insurance.html" class="highlight-link">View all insurance &rarr;</a></li>
        </ul>
      </div>

      <!-- Links Column 2: Home Services -->
      <div class="footer-col">
        <h4 class="footer-heading">Home Services</h4>
        <ul class="footer-links">
          <li><a href="roofing.html">Roofing</a></li>
          <li><a href="bathroom-remodel.html">Bathroom Remodel</a></li>
          <li><a href="hvac.html">HVAC</a></li>
          <li><a href="solar.html">Solar</a></li>
          <li><a href="home-services.html" class="highlight-link">View all home services &rarr;</a></li>
        </ul>
      </div>

      <!-- Links Column 3: Company -->
      <div class="footer-col">
        <h4 class="footer-heading">Company</h4>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="about.html#privacy">Privacy Policy</a></li>
          <li><a href="about.html#terms">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="disclaimer-text">
        <p>GetCallAxis is a free referral service that helps users connect with independent local service providers and insurance agents. GetCallAxis is not an insurance company or a licensed contractor and does not perform services directly. All quotes and work are provided independently by third-party professionals.</p>
      </div>
      <div class="footer-bottom-row">
        <div class="copyright">&copy; 2026 GetCallAxis. All rights reserved.</div>
        <div class="legal-links">
          <a href="about.html#privacy">Privacy Policy</a>
          <span class="sep">&bull;</span>
          <a href="about.html#terms">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

function renderPage(filename, data) {
  const isInsurance = data.type === 'insurance' || filename === 'insurance.html';
  const categoryName = isInsurance ? 'Insurance' : 'Home Services';
  const categoryLink = isInsurance ? 'insurance.html' : 'home-services.html';

  const formOptionsHTML = data.formOptions.map((opt, i) => `
    <label class="form-option-chip ${i === 0 ? 'selected' : ''}">
      <input type="radio" name="serviceOption" value="${opt}" ${i === 0 ? 'checked' : ''}>
      <span class="chip-text">${opt}</span>
    </label>
  `).join('');

  const benefitsHTML = data.benefits.map(b => `
    <div class="benefit-card reveal-card">
      <div class="benefit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="benefit-content">
        <h4>${b.title}</h4>
        <p>${b.desc}</p>
      </div>
    </div>
  `).join('');

  const relatedHTML = data.related.map(r => `
    <a href="${r.url}" class="related-card reveal-card">
      <div class="related-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <div class="related-body">
        <h4>${r.name || r.title}</h4>
        <p>${r.desc}</p>
      </div>
      <div class="related-arrow">&rarr;</div>
    </a>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title}</title>
  <meta name="description" content="${data.heroSub}">
  <link rel="icon" type="image/png" href="logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Loading Screen -->
  <div id="loading-screen" class="loading-screen" aria-hidden="true">
    <div class="spinner"></div>
  </div>

  <!-- Ticker Bar -->
  <div class="ticker-bar">
    <div class="ticker-content">
      <span>⚡ CONNECT WITH TOP LOCAL PROVIDERS FAST</span>
      <span>•</span>
      <span>📞 CALL NOW FOR INSTANT QUOTES: <a href="tel:+15550100123" class="ticker-phone">+1 (555) 010-0123</a></span>
      <span>•</span>
      <span>✉️ EMAIL: <a href="mailto:contact@getcallaxis.com" class="ticker-email">contact@getcallaxis.com</a></span>
      <span>•</span>
      <span>FREE SERVICE — NO OBLIGATION</span>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="header-container">
      <a href="index.html" class="logo">
        <img src="logo.png" alt="GetCallAxis Logo" class="logo-img">
        <span class="logo-text">Call<em>Axis</em></span>
      </a>

      <nav class="main-nav">
        <div class="nav-item has-dropdown">
          <a href="insurance.html" class="nav-link ${isInsurance ? 'active' : ''}">Insurance <span class="caret">▾</span></a>
          <div class="dropdown">
            <a href="auto-insurance.html">Auto Insurance</a>
            <a href="health-insurance.html">Health Insurance</a>
            <a href="home-insurance.html">Home Insurance</a>
            <a href="life-insurance.html">Life Insurance</a>
            <a href="insurance.html" class="dropdown-view-all">View All Insurance &rarr;</a>
          </div>
        </div>

        <div class="nav-item has-dropdown">
          <a href="home-services.html" class="nav-link ${!isInsurance ? 'active' : ''}">Home Services <span class="caret">▾</span></a>
          <div class="dropdown mega-dropdown">
            <div class="dropdown-col">
              <a href="roofing.html">Roofing</a>
              <a href="bathroom-remodel.html">Bathroom Remodel</a>
              <a href="flooring.html">Flooring</a>
              <a href="hvac.html">HVAC</a>
              <a href="windows.html">Windows</a>
              <a href="gutters.html">Gutters</a>
              <a href="siding.html">Siding</a>
            </div>
            <div class="dropdown-col">
              <a href="kitchen-remodel.html">Kitchen Remodel</a>
              <a href="plumbing.html">Plumbing</a>
              <a href="electrical.html">Electrical</a>
              <a href="solar.html">Solar</a>
              <a href="garage-doors.html">Garage Doors</a>
              <a href="foundations.html">Foundations & Waterproofing</a>
              <a href="home-services.html" class="dropdown-view-all">View All Services &rarr;</a>
            </div>
          </div>
        </div>

        <a href="about.html" class="nav-link">About Us</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+15550100123" class="phone-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +1 (555) 010-0123
        </a>
        <button id="theme-toggle" class="theme-btn" aria-label="Toggle theme">
          <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- Dark Hero Banner -->
    <section class="inner-hero dark-surface text-center">
      <div class="section-container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="sep">/</span>
          <a href="${categoryLink}">${categoryName}</a>
          <span class="sep">/</span>
          <span class="current">${data.heroTitle}</span>
        </nav>

        <div class="hero-badge-row">
          <span class="category-pill">${data.categoryPill}</span>
        </div>

        <h1 class="service-hero-title animate-words">${data.heroTitle}</h1>
        <p class="service-hero-sub">${data.heroSub}</p>

        <div class="service-hero-actions">
          <a href="tel:+15550100123" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now: +1 (555) 010-0123
          </a>
          <a href="#quote-section" class="btn btn-outline">Get my free quote &rarr;</a>
        </div>

        <div class="trust-badges-row">
          <div class="trust-badge-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div class="badge-text">
              <span class="badge-title">Licensed & Insured</span>
              <span class="badge-sub">Verified network</span>
            </div>
          </div>
          <div class="trust-badge-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div class="badge-text">
              <span class="badge-title">Fast Response</span>
              <span class="badge-sub">Connect in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Two-Column Section -->
    <section id="quote-section" class="service-details-section">
      <div class="section-container">
        <div class="service-grid">
          
          <!-- Left Column: Details & Benefits -->
          <div class="service-info-col">
            <h2 class="section-title reveal-heading">${data.howItWorksTitle}</h2>
            <p class="intro-p">${data.introP1}</p>
            <p class="intro-p">${data.introP2}</p>

            <div class="benefits-grid">
              ${benefitsHTML}
            </div>
          </div>

          <!-- Right Column: Interactive 3-Step Quote Form -->
          <div class="service-form-col">
            <div class="quote-card-box">
              <div class="form-header-bar">
                <span class="step-pill" id="step-pill">STEP 1 OF 3</span>
                <span class="form-tagline">100% Free • No Obligation</span>
              </div>

              <!-- Progress Bar -->
              <div class="progress-bar-track">
                <div class="progress-bar-fill" id="form-progress-fill" style="width: 33%;"></div>
              </div>

              <form id="quoteForm" class="interactive-form" onsubmit="return false;">
                
                <!-- STEP 1: Service Option -->
                <div class="form-step active" id="form-step-1">
                  <h3 class="step-heading">Select your specific need</h3>
                  <p class="step-sub">Choose the option that best describes your project:</p>

                  <div class="options-chip-grid">
                    ${formOptionsHTML}
                  </div>

                  <button type="button" class="btn btn-primary btn-block btn-next-step" onclick="goToStep(2)">
                    Continue to Zip Code &rarr;
                  </button>
                </div>

                <!-- STEP 2: Zip Code -->
                <div class="form-step" id="form-step-2" style="display:none;">
                  <h3 class="step-heading">Enter your Zip Code</h3>
                  <p class="step-sub">Find verified providers near your location:</p>

                  <div class="form-group">
                    <label for="form-zip" class="form-label">Zip Code</label>
                    <input type="text" id="form-zip" class="form-input" placeholder="e.g. 90210" maxlength="5" pattern="[0-9]*">
                  </div>

                  <div class="form-btn-row">
                    <button type="button" class="btn btn-ghost" onclick="goToStep(1)">&larr; Back</button>
                    <button type="button" class="btn btn-primary" onclick="goToStep(3)">Continue &rarr;</button>
                  </div>
                </div>

                <!-- STEP 3: Contact Details -->
                <div class="form-step" id="form-step-3" style="display:none;">
                  <h3 class="step-heading">Get your free quotes</h3>
                  <p class="step-sub">Where should local providers send your estimates?</p>

                  <div class="form-group">
                    <label for="form-name" class="form-label">Full Name</label>
                    <input type="text" id="form-name" class="form-input" placeholder="John Smith">
                  </div>

                  <div class="form-group">
                    <label for="form-phone" class="form-label">Phone Number</label>
                    <input type="tel" id="form-phone" class="form-input" placeholder="(555) 000-0000">
                  </div>

                  <div class="form-group">
                    <label for="form-email" class="form-label">Email Address</label>
                    <input type="email" id="form-email" class="form-input" placeholder="john@example.com">
                  </div>

                  <div class="form-btn-row">
                    <button type="button" class="btn btn-ghost" onclick="goToStep(2)">&larr; Back</button>
                    <button type="button" class="btn btn-primary" onclick="submitQuoteForm()">Get Free Quotes Now</button>
                  </div>
                </div>

                <!-- SUCCESS STATE -->
                <div class="form-step" id="form-step-success" style="display:none;">
                  <div class="success-box-content">
                    <div class="success-icon-circle">✓</div>
                    <h3>Match Confirmed!</h3>
                    <p>Thank you! Your request has been routed to top verified providers in your local area. A local representative will reach out shortly with your custom quote.</p>
                    <div class="direct-call-prompt">
                      <p>Need urgent service? Call us directly now:</p>
                      <a href="tel:+15550100123" class="btn btn-primary">+1 (555) 010-0123</a>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Related Services Section -->
    <section class="related-section">
      <div class="section-container">
        <h2 class="section-title reveal-heading">${data.relatedTitle}</h2>
        <div class="related-grid">
          ${relatedHTML}
        </div>
      </div>
    </section>

    <!-- Stats Band -->
    <section class="stats-band">
      <div class="section-container">
        <div class="stats-grid">
          <div class="stat-card reveal-card">
            <span class="stat-number">100%</span>
            <span class="stat-label">Free Service</span>
          </div>
          <div class="stat-card reveal-card">
            <span class="stat-number">5,000+</span>
            <span class="stat-label">Verified Providers</span>
          </div>
          <div class="stat-card reveal-card">
            <span class="stat-number">&lt; 2 Min</span>
            <span class="stat-label">Fast Response</span>
          </div>
          <div class="stat-card reveal-card">
            <span class="stat-number">4.9 ★</span>
            <span class="stat-label">User Rating</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing CTA Banner -->
    <section class="closing-cta">
      <div class="section-container">
        <div class="cta-box">
          <h2 class="cta-title reveal-heading">Ready to get connected?</h2>
          <p class="cta-sub">Call our hotline or submit your quote request to get matched with top local pros immediately.</p>
          <div class="cta-actions">
            <a href="tel:+15550100123" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Now: +1 (555) 010-0123
            </a>
            <a href="#quote-section" class="btn btn-outline">Get Free Quote &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${sharedFooterHTML}

  <script src="script.js"></script>
  <script>
    function goToStep(step) {
      document.getElementById('form-step-1').style.display = 'none';
      document.getElementById('form-step-2').style.display = 'none';
      document.getElementById('form-step-3').style.display = 'none';
      document.getElementById('form-step-success').style.display = 'none';

      document.getElementById('form-step-' + step).style.display = 'block';
      document.getElementById('step-pill').innerText = 'STEP ' + step + ' OF 3';

      var progress = step === 1 ? '33%' : (step === 2 ? '66%' : '100%');
      document.getElementById('form-progress-fill').style.width = progress;
    }

    function submitQuoteForm() {
      document.getElementById('form-step-1').style.display = 'none';
      document.getElementById('form-step-2').style.display = 'none';
      document.getElementById('form-step-3').style.display = 'none';
      document.getElementById('form-step-success').style.display = 'block';
      document.getElementById('step-pill').innerText = 'COMPLETE';
      document.getElementById('form-progress-fill').style.width = '100%';
    }

    // Interactive Chip Select
    document.querySelectorAll('.form-option-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        document.querySelectorAll('.form-option-chip').forEach(function(c) { c.classList.remove('selected'); });
        this.classList.add('selected');
        var input = this.querySelector('input');
        if (input) input.checked = true;
      });
    });
  </script>
</body>
</html>`;
}

console.log('Generating all 19 subpages...');
for (const filename in subpagesData) {
  const html = renderPage(filename, subpagesData[filename]);
  fs.writeFileSync(filename, html, 'utf8');
  console.log(`Generated: ${filename}`);
}

console.log('ALL 19 SUBPAGES SUCCESSFULLY GENERATED!');
