/**
 * GetCallAxis Interactive Engine & Particle Physics
 * Vanilla JS - Zero External Dependencies
 */

// MASTER BRAND CONSTANTS
const BRAND_NAME = "GetCallAxis";
const EMAIL = "contact@getcallaxis.com";

// DUMMY NUMBER, REPLACE WITH CLIENT'S REAL NUMBER
const PHONE_DISPLAY = "+1 (215) 472-1722";
const PHONE_TEL = "+12154721722";

// DUMMY ADDRESS, REPLACE WITH CLIENT'S REAL ADDRESS
const ADDRESS_DISPLAY = "487 Maple Ridge Avenue, Westfield, NJ 07000, United States";

const SITE_CONFIG = {
  brandName: BRAND_NAME,
  email: EMAIL,
  address: ADDRESS_DISPLAY,
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  phone: PHONE_DISPLAY
};
window.BRAND_NAME = BRAND_NAME;
window.EMAIL = EMAIL;
window.SITE_CONFIG = SITE_CONFIG;
window.PHONE_DISPLAY = PHONE_DISPLAY;
window.PHONE_TEL = PHONE_TEL;
window.ADDRESS_DISPLAY = ADDRESS_DISPLAY;

document.addEventListener('DOMContentLoaded', () => {



  // ================= 2. Interactive 3D Node/Particle Network Engine =================
  class NodeNetwork {
    constructor(canvasId, sectionId, isAlwaysDark = false) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.section = sectionId ? document.getElementById(sectionId) : this.canvas.parentElement;
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.mouse = { x: -1000, y: -1000, active: false };
      this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.isAlwaysDark = isAlwaysDark;
      this.width = 0;
      this.height = 0;
      this.dpr = 1;
      this.animFrameId = null;
      this.isDestroyed = false;

      this.init();
    }

    init() {
      this.resize();
      this.createParticles();
      this.bindEvents();

      if (this.isReducedMotion) {
        this.drawFrame();
      } else {
        this.animate();
      }
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      this.width = rect.width || window.innerWidth;
      this.height = rect.height || (this.canvas.id === 'site-loader-canvas' ? window.innerHeight : 650);
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      this.canvas.width = Math.floor(this.width * this.dpr);
      this.canvas.height = Math.floor(this.height * this.dpr);
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;

      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(this.dpr, this.dpr);
    }

    createParticles() {
      if (this.width === 0 || this.height === 0) return;
      this.particles = [];
      const isMobile = this.width < 768;
      // 60 to 90 nodes on desktop, fewer on mobile (30-45)
      const count = isMobile ? Math.min(Math.max(Math.floor(this.width / 18), 30), 45) : Math.min(Math.max(Math.floor((this.width * this.height) / 13000), 65), 90);

      for (let i = 0; i < count; i++) {
        const speedMultiplier = (Math.random() * 0.4 + 0.25);
        const angle = Math.random() * Math.PI * 2;
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          vx: Math.cos(angle) * speedMultiplier,
          vy: Math.sin(angle) * speedMultiplier,
          radius: Math.random() * 1.6 + 1.2,
          baseAlpha: Math.random() * 0.25 + 0.25
        });
      }
    }

    bindEvents() {
      let resizeTimer;
      this.resizeHandler = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (!this.canvas || this.isDestroyed) return;
          this.resize();
          this.createParticles();
          if (this.isReducedMotion) this.drawFrame();
        }, 150);
      };
      window.addEventListener('resize', this.resizeHandler);

      // Listen for mouse position from the section, not on the canvas
      if (this.section) {
        this.mouseMoveHandler = (e) => {
          const rect = this.canvas.getBoundingClientRect();
          this.mouse.x = e.clientX - rect.left;
          this.mouse.y = e.clientY - rect.top;
          this.mouse.active = true;
        };
        this.mouseLeaveHandler = () => {
          this.mouse.active = false;
        };

        this.section.addEventListener('mousemove', this.mouseMoveHandler);
        this.section.addEventListener('mouseleave', this.mouseLeaveHandler);
      }

      // Pause when tab is hidden
      this.visibilityHandler = () => {
        if (document.hidden) {
          if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
          this.animFrameId = null;
        } else if (!this.isReducedMotion && !this.isDestroyed) {
          this.animate();
        }
      };
      document.addEventListener('visibilitychange', this.visibilityHandler);
    }

    drawFrame() {
      if (!this.canvas || !this.ctx || this.isDestroyed) return;
      this.ctx.clearRect(0, 0, this.width, this.height);

      const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
      const isDark = this.isAlwaysDark || isDarkTheme;

      // Colors: teal nodes/lines at low opacity in light mode (so text stays readable), brighter teal & cyan in dark mode
      const nodeRgb = isDark ? '45, 212, 191' : '13, 148, 136';
      const maxConnectDist = 140;
      const mouseRadius = 160;

      // Update and draw particles
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        if (!this.isReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = this.width;
          else if (p.x > this.width) p.x = 0;
          if (p.y < 0) p.y = this.height;
          else if (p.y > this.height) p.y = 0;

          // Mouse interaction: nodes within 160px move slightly toward cursor
          if (this.mouse.active) {
            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const distToMouse = Math.hypot(dx, dy);

            if (distToMouse < mouseRadius && distToMouse > 0.1) {
              const force = (1 - distToMouse / mouseRadius) * 0.035;
              p.x += dx * force;
              p.y += dy * force;
            }
          }
        }

        // Draw node
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const nodeAlpha = isDark ? Math.min(p.baseAlpha * 1.5, 0.75) : Math.min(p.baseAlpha * 0.8, 0.4);
        this.ctx.fillStyle = `rgba(${nodeRgb}, ${nodeAlpha})`;
        this.ctx.fill();

        // Connect nodes closer than ~140px with fading opacity
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < maxConnectDist) {
            const lineOpacity = (1 - dist / maxConnectDist) * (isDark ? 0.22 : 0.12);
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `rgba(${nodeRgb}, ${lineOpacity})`;
            this.ctx.lineWidth = 0.85;
            this.ctx.stroke();
          }
        }

        // Cursor acts as extra node connecting to nearby nodes within 160px with brighter lines
        if (this.mouse.active && !this.isReducedMotion) {
          const mouseDist = Math.hypot(this.mouse.x - p.x, this.mouse.y - p.y);
          if (mouseDist < mouseRadius) {
            const cursorLineAlpha = (1 - mouseDist / mouseRadius) * (isDark ? 0.65 : 0.45);
            this.ctx.beginPath();
            this.ctx.moveTo(this.mouse.x, this.mouse.y);
            this.ctx.lineTo(p.x, p.y);
            this.ctx.strokeStyle = `rgba(${nodeRgb}, ${cursorLineAlpha})`;
            this.ctx.lineWidth = 1.15;
            this.ctx.stroke();
          }
        }
      }
    }

    animate() {
      if (this.isDestroyed || this.isReducedMotion) return;
      if (!this.canvas || !this.canvas.isConnected) {
        this.destroy();
        return;
      }
      this.drawFrame();
      this.animFrameId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
      this.isDestroyed = true;
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
      if (this.resizeHandler) {
        window.removeEventListener('resize', this.resizeHandler);
      }
      if (this.visibilityHandler) {
        document.removeEventListener('visibilitychange', this.visibilityHandler);
      }
      if (this.section && this.mouseMoveHandler) {
        this.section.removeEventListener('mousemove', this.mouseMoveHandler);
        this.section.removeEventListener('mouseleave', this.mouseLeaveHandler);
      }
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
    }
  }

  // Initialize node networks (strictly ONE active hero canvas instance)
  if (document.getElementById('hero-node-canvas')) {
    if (window.__heroCanvasInstance) {
      window.__heroCanvasInstance.destroy();
    }
    window.__heroCanvasInstance = new NodeNetwork('hero-node-canvas', 'hero', false);
  }
  window.addEventListener('beforeunload', () => {
    if (window.__heroCanvasInstance) {
      window.__heroCanvasInstance.destroy();
      window.__heroCanvasInstance = null;
    }
  });

  // ================= 2b. Quote Form Card (Straight - No Tilt) =================
  function initQuoteCardTilt() {
    // Form card kept straight with zero tilt/transform
  }
  initQuoteCardTilt();

  // ================= 3. Splash Screen & Hero Heading Animation =================
  const heroHeadline = document.getElementById('hero-headline');
  const triggerHeroAnimation = () => {
    if (heroHeadline) {
      heroHeadline.classList.add('js-hero-animate');
    }
  };

  const activeLoader = document.getElementById('site-loader') || document.getElementById('splash-screen');
  if (activeLoader && !(sessionStorage.getItem('getcallaxis_session_seen'))) {
    setTimeout(() => {
      triggerHeroAnimation();
    }, 2000);
  } else {
    triggerHeroAnimation();
  }

  // ================= 4. Light / Dark Mode Toggle =================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('getcallaxis_theme') || 'light';

  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('getcallaxis_theme', newTheme);
      
    });
  }

  // ================= 5. Sliding Connected Line Nav Indicator =================
  const navContainer = document.querySelector('.nav-links-wrap');
  const navItems = document.querySelectorAll('.nav-link, .dropdown-trigger');
  const navIndicator = document.getElementById('nav-indicator');

  if (navContainer && navIndicator && navItems.length > 0) {
    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const itemRect = item.getBoundingClientRect();
        const containerRect = navContainer.getBoundingClientRect();
        
        const left = itemRect.left - containerRect.left;
        const width = itemRect.width;

        navIndicator.style.transform = `translateX(${left}px)`;
        navIndicator.style.width = `${width}px`;
        navIndicator.classList.add('active');
      });
    });

    navContainer.addEventListener('mouseleave', () => {
      navIndicator.classList.remove('active');
    });
  }

  // ================= 5b. Dropdown Single-Open, Close Delay (150ms) & Mobile Menu Engine =================
  const dropdownEls = document.querySelectorAll('.nav-dropdown');
  dropdownEls.forEach(dropdown => {
    let timer = null;

    const openDropdown = () => {
      clearTimeout(timer);
      dropdownEls.forEach(other => {
        if (other !== dropdown) other.classList.remove('is-open');
      });
      dropdown.classList.add('is-open');
    };

    const closeDropdown = () => {
      timer = setTimeout(() => {
        dropdown.classList.remove('is-open');
      }, 150);
    };

    dropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth > 991) openDropdown();
    });

    dropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth > 991) closeDropdown();
    });

    const triggerBtn = dropdown.querySelector('.dropdown-trigger');
    if (triggerBtn) {
      triggerBtn.addEventListener('focus', () => {
        if (window.innerWidth > 991) openDropdown();
      });
    }

    // Mobile / Tablet: tapping chevron toggles list expansion
    const triggerChevron = dropdown.querySelector('.dropdown-chevron');
    if (triggerChevron) {
      triggerChevron.addEventListener('click', (e) => {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          e.stopPropagation();
          dropdown.classList.toggle('is-expanded');
        }
      });
    }
  });

  // Mobile Drawer Toggle Button (#mobile-toggle)
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navLinksWrap = document.querySelector('.nav-links-wrap');

  if (mobileToggleBtn && navLinksWrap) {
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navLinksWrap.classList.toggle('is-active');
      mobileToggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!navLinksWrap.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
        navLinksWrap.classList.remove('is-active');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ================= 6. Universal Scroll & Route-Change Animation Engine =================
  let globalRevealObserver = null;

  function initUniversalAnimations() {
    if (globalRevealObserver) {
      globalRevealObserver.disconnect();
    }

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Apply data-animate to every heading, paragraph, card, badge, stat and button
    const animElements = document.querySelectorAll(
      'h1, h2, h3, h4, p, .why-card, .service-card, .step-card, .timeline-item, .benefit-card, .stat, .contact-card, .hub-card, .service-overview-card, .cta-banner-card, .sub-title-badge, .eyebrow, .pill, .hero-pill, .eyebrow-pill, .btn, .btn-teal, .btn-outline-white, .btn-accent, .btn-ghost'
    );

    animElements.forEach(el => {
      if (el.closest('.top-ticker-bar') || el.closest('.site-header') || el.closest('.navbar')) return;
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', 'fade-up');
      }
    });

    // Stagger containers by 80ms between consecutive items
    const staggerContainers = document.querySelectorAll(
      '.hero-block, .hero-inner, .hero-copy, .why-grid, .timeline, .services-grid, .hub-grid, .stats-bar, .benefit-grid, .content-left, .content-right, .cta-content, .hero-cta-row, .cta-btn-group, .hero-buttons'
    );

    staggerContainers.forEach(container => {
      const children = container.querySelectorAll(':scope > [data-animate], :scope > * > [data-animate]');
      children.forEach((child, i) => {
        if (!child.style.getPropertyValue('--delay')) {
          child.style.setProperty('--delay', `${i * 80}ms`);
        }
      });
    });

    // Hero specific stagger on load - consecutive elements animate one after another
    const heroElements = document.querySelectorAll('.inner-hero [data-animate], .hero [data-animate], .hero-block [data-animate]');
    heroElements.forEach((el, i) => {
      el.style.setProperty('--delay', `${i * 80}ms`);
    });

    const targets = document.querySelectorAll('[data-animate]');

    if (isReduced) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    if ('IntersectionObserver' in window) {
      globalRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            globalRevealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      targets.forEach(el => globalRevealObserver.observe(el));
    } else {
      targets.forEach(el => el.classList.add('is-visible'));
    }

    // Safety fallback: any element in viewport still hidden after 1.5 seconds becomes visible
    setTimeout(() => {
      document.querySelectorAll('[data-animate]:not(.is-visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
      });
    }, 1500);

    // Global safety fallback at 3s so content never stays at opacity 0
    setTimeout(() => {
      document.querySelectorAll('[data-animate]:not(.is-visible)').forEach(el => {
        el.classList.add('is-visible');
      });
    }, 3000);
  }

  window.initUniversalAnimations = initUniversalAnimations;
  initUniversalAnimations();

  // ================= 7. Real-Time 3D Card Tilt Physics =================
  const tiltCards = document.querySelectorAll('[data-tilt]:not(.form-card), .step-card, .why-card, .service-card, .detail-card');
  
  tiltCards.forEach(card => {
    card.setAttribute('data-tilt', '');
    let rafId = null;
    let lastEvt = null;

    const updateTilt = () => {
      rafId = null;
      if (!lastEvt) return;
      const rect = card.getBoundingClientRect();
      const x = lastEvt.clientX - rect.left;
      const y = lastEvt.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    card.addEventListener('mousemove', (e) => {
      lastEvt = e;
      if (!rafId) {
        rafId = requestAnimationFrame(updateTilt);
      }
    });

    card.addEventListener('mouseleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      lastEvt = null;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // ================= 8. Multi-Step Quote Engine (Grouped Service Options) =================
  const SERVICE_OPTIONS = {
    insurance: [
      { id: 'auto', label: 'Auto Insurance' },
      { id: 'health', label: 'Health Insurance' },
      { id: 'home', label: 'Home Insurance' },
      { id: 'life', label: 'Life Insurance' },
      { id: 'medicare', label: 'Medicare Insurance' }
    ],
    home_services: [
      { id: 'roofing', label: 'Roofing' },
      { id: 'bathroom', label: 'Bathroom Remodel' },
      { id: 'flooring', label: 'Flooring' },
      { id: 'hvac', label: 'HVAC' },
      { id: 'windows', label: 'Windows' },
      { id: 'gutters', label: 'Gutters' },
      { id: 'siding', label: 'Siding' },
      { id: 'kitchen', label: 'Kitchen Remodel' },
      { id: 'plumbing', label: 'Plumbing' },
      { id: 'electrical', label: 'Electrical' },
      { id: 'solar', label: 'Solar' },
      { id: 'garage', label: 'Garage Doors' },
      { id: 'foundation', label: 'Foundations & Waterproofing' }
    ]
  };

  const quoteForm = document.getElementById('quote-form');
  const catCardInsurance = document.getElementById('cat-card-insurance');
  const catCardHome = document.getElementById('cat-card-homeservices');
  const specificServiceSelect = document.getElementById('specific_service');
  
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');
  const stepConf = document.getElementById('step-confirmation');

  const btnToStep2 = document.getElementById('btn-to-step2');
  const btnBackToStep1 = document.getElementById('btn-back-to-step1');
  const btnToStep3 = document.getElementById('btn-to-step3');
  const btnBackToStep2 = document.getElementById('btn-back-to-step2');
  const btnResetForm = document.getElementById('btn-reset-form');

  const progressFill = document.getElementById('progress-fill');
  const dot1 = document.getElementById('dot-1');
  const dot2 = document.getElementById('dot-2');
  const dot3 = document.getElementById('dot-3');

  function setCategory(category) {
    if (!catCardInsurance || !catCardHome) return;
    if (category === 'insurance') {
      catCardInsurance.classList.add('active');
      const insRadio = catCardInsurance.querySelector('input');
      if (insRadio) insRadio.checked = true;
      catCardHome.classList.remove('active');
      const homeRadio = catCardHome.querySelector('input');
      if (homeRadio) homeRadio.checked = false;
      if (specificServiceSelect) {
        const curVal = specificServiceSelect.value;
        const isInsurance = SERVICE_OPTIONS.insurance.some(o => o.id === curVal);
        if (!isInsurance) specificServiceSelect.value = 'auto';
      }
    } else {
      catCardHome.classList.add('active');
      const homeRadio = catCardHome.querySelector('input');
      if (homeRadio) homeRadio.checked = true;
      catCardInsurance.classList.remove('active');
      const insRadio = catCardInsurance.querySelector('input');
      if (insRadio) insRadio.checked = false;
      if (specificServiceSelect) {
        const curVal = specificServiceSelect.value;
        const isHome = SERVICE_OPTIONS.home_services.some(o => o.id === curVal);
        if (!isHome) specificServiceSelect.value = 'roofing';
      }
    }
  }

  if (catCardInsurance) catCardInsurance.addEventListener('click', () => setCategory('insurance'));
  if (catCardHome) catCardHome.addEventListener('click', () => setCategory('home_services'));

  if (specificServiceSelect) {
    specificServiceSelect.addEventListener('change', () => {
      const curVal = specificServiceSelect.value;
      const isInsurance = SERVICE_OPTIONS.insurance.some(o => o.id === curVal);
      if (isInsurance) {
        setCategory('insurance');
      } else {
        const isHome = SERVICE_OPTIONS.home_services.some(o => o.id === curVal);
        if (isHome) setCategory('home_services');
      }
    });
  }

  if (btnToStep2) {
    btnToStep2.addEventListener('click', () => {
      const zipInput = document.getElementById('zip_code');
      const zipError = document.getElementById('zip-error');
      const zipValue = zipInput ? zipInput.value.trim() : '';
      if (!/^\d{5}$/.test(zipValue)) {
        if (zipError) zipError.style.display = 'block';
        if (zipInput) zipInput.focus();
        return;
      }
      if (zipError) zipError.style.display = 'none';
      showStep(2);
    });
  }

  if (btnBackToStep1) btnBackToStep1.addEventListener('click', () => showStep(1));
  if (btnToStep3) btnToStep3.addEventListener('click', () => showStep(3));
  if (btnBackToStep2) btnBackToStep2.addEventListener('click', () => showStep(2));

  function showStep(stepNum) {
    if (!step1 || !step2 || !step3) return;
    step1.classList.remove('step-active');
    step2.classList.remove('step-active');
    step3.classList.remove('step-active');
    if (stepConf) stepConf.classList.remove('step-active');

    if (dot1 && dot2 && dot3) {
      dot1.className = 'step-dot';
      dot2.className = 'step-dot';
      dot3.className = 'step-dot';
    }

    if (stepNum === 1) {
      step1.classList.add('step-active');
      if (dot1) dot1.classList.add('active');
      if (progressFill) progressFill.style.width = '33%';
    } else if (stepNum === 2) {
      step2.classList.add('step-active');
      if (dot1) dot1.classList.add('completed');
      if (dot2) dot2.classList.add('active');
      if (progressFill) progressFill.style.width = '66%';
    } else if (stepNum === 3) {
      step3.classList.add('step-active');
      if (dot1) dot1.classList.add('completed');
      if (dot2) dot2.classList.add('completed');
      if (dot3) dot3.classList.add('active');
      if (progressFill) progressFill.style.width = '100%';
    } else if (stepNum === 'conf' && stepConf) {
      stepConf.classList.add('step-active');
      if (dot1) dot1.classList.add('completed');
      if (dot2) dot2.classList.add('completed');
      if (dot3) dot3.classList.add('completed');
      if (progressFill) progressFill.style.width = '100%';
    }
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('full_name');
      const phoneInput = document.getElementById('phone_number');
      const emailInput = document.getElementById('email_address');
      const tcpaCheckbox = document.getElementById('tcpa_consent');

      const nameError = document.getElementById('name-error');
      const phoneError = document.getElementById('phone-error');
      const emailError = document.getElementById('email-error');

      let isValid = true;

      if (!nameInput || !nameInput.value.trim()) {
        if (nameError) nameError.style.display = 'block';
        isValid = false;
      } else if (nameError) nameError.style.display = 'none';

      const cleanPhone = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
      if (cleanPhone.length < 10) {
        if (phoneError) phoneError.style.display = 'block';
        isValid = false;
      } else if (phoneError) phoneError.style.display = 'none';

      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
        if (emailError) emailError.style.display = 'block';
        isValid = false;
      } else if (emailError) emailError.style.display = 'none';

      if (tcpaCheckbox && !tcpaCheckbox.checked) {
        alert('Please consent to the authorization statement to proceed.');
        isValid = false;
      }

      if (isValid) {
        const refId = 'AXIS-' + Math.floor(10000 + Math.random() * 90000);
        const selectedServiceText = specificServiceSelect ? specificServiceSelect.options[specificServiceSelect.selectedIndex].text : 'Requested Service';
        
        if (document.getElementById('conf-name-display')) document.getElementById('conf-name-display').textContent = nameInput.value.trim();
        if (document.getElementById('conf-zip-display')) document.getElementById('conf-zip-display').textContent = document.getElementById('zip_code').value.trim();
        if (document.getElementById('conf-ref-id')) document.getElementById('conf-ref-id').textContent = refId;
        if (document.getElementById('conf-service-display')) document.getElementById('conf-service-display').textContent = selectedServiceText;
        if (document.getElementById('conf-phone-display')) document.getElementById('conf-phone-display').textContent = phoneInput.value.trim();

        const confDesc = document.querySelector('.conf-desc');
        if (confDesc) {
          const zipVal = document.getElementById('zip_code') ? document.getElementById('zip_code').value.trim() : '';
          confDesc.innerHTML = `Thank you, <strong id="conf-name-display">${nameInput.value.trim()}</strong>. We are matching your request for <strong>${selectedServiceText}</strong> with pre-screened professionals in zip code <strong id="conf-zip-display">${zipVal}</strong>.`;
        }

        if (document.getElementById('form-header-title')) document.getElementById('form-header-title').textContent = 'Quote Request Submitted!';
        if (document.getElementById('form-header-subtitle')) document.getElementById('form-header-subtitle').textContent = 'Your local matching request is now active';

        showStep('conf');
      }
    });
  }

  if (btnResetForm) {
    btnResetForm.addEventListener('click', () => {
      quoteForm.reset();
      if (document.getElementById('form-header-title')) document.getElementById('form-header-title').textContent = 'Request Your Free Quote';
      if (document.getElementById('form-header-subtitle')) document.getElementById('form-header-subtitle').textContent = 'Select your category & zip code to find local pros';
      setCategory('insurance');
      showStep(1);
    });
  }

  const phoneInput = document.getElementById('phone_number');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }

  const timelinePills = document.querySelectorAll('.timeline-pill');
  timelinePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timelinePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const radio = pill.querySelector('input');
      if (radio) radio.checked = true;
    });
  });

  // ================= 9. Mobile Drawer & Legal Modals =================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');

  const openPrivacyBtns = [
    document.getElementById('open-privacy-modal'),
    ...document.querySelectorAll('.modal-trigger-privacy')
  ];
  const openTermsBtns = [
    document.getElementById('open-terms-modal'),
    ...document.querySelectorAll('.modal-trigger-terms')
  ];

  openPrivacyBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => privacyModal.classList.add('open'));
  });

  openTermsBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => termsModal.classList.add('open'));
  });

  document.querySelectorAll('.modal-close, .modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (privacyModal) privacyModal.classList.remove('open');
      if (termsModal) termsModal.classList.remove('open');
    });
  });

  [privacyModal, termsModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }
  });

  // ================= 10. Contact Page Form Engine =================
  const contactForm = document.getElementById('contact-form');
  const contactSuccessState = document.getElementById('contact-success-state');
  const btnResetContact = document.getElementById('btn-reset-contact');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact_name');
      const emailInput = document.getElementById('contact_email');
      const msgInput = document.getElementById('contact_message');

      if (!nameInput || !nameInput.value.trim()) {
        alert('Please enter your full name.');
        return;
      }
      if (!emailInput || !/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        return;
      }
      if (!msgInput || !msgInput.value.trim()) {
        alert('Please enter your message.');
        return;
      }

      if (document.getElementById('contact-confirm-name')) {
        document.getElementById('contact-confirm-name').textContent = nameInput.value.trim();
      }
      if (document.getElementById('contact-confirm-email')) {
        document.getElementById('contact-confirm-email').textContent = emailInput.value.trim();
      }

      contactForm.style.display = 'none';
      if (contactSuccessState) contactSuccessState.classList.remove('display-none');
    });
  }

  if (btnResetContact) {
    btnResetContact.addEventListener('click', () => {
      if (contactForm) {
        contactForm.reset();
        contactForm.style.display = 'block';
      }
      if (contactSuccessState) contactSuccessState.classList.add('display-none');
    });
  }

  const yearElem = document.getElementById('current-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // ================= 11. Standardized 3-Step Subpage Quote Form Component Engine =================
  const serviceQuoteCards = document.querySelectorAll('.service-quote-card');

  serviceQuoteCards.forEach(card => {
    const stepForm = card.querySelector('.subpage-step-form') || card.querySelector('form');
    if (!stepForm) return;

    const stepPill = card.querySelector('.step-badge-pill');
    const progressFill = card.querySelector('.progress-bar-fill');

    const step1 = card.querySelector('#subpage-step-1');
    const step2 = card.querySelector('#subpage-step-2');
    const step3 = card.querySelector('#subpage-step-3');
    const stepConf = card.querySelector('#subpage-step-confirmation');

    const zipInput = card.querySelector('#sub_zip');
    const timelineSelect = card.querySelector('#sub_timeline');
    const nameInput = card.querySelector('#sub_name');
    const phoneInput = card.querySelector('#sub_phone');
    const emailInput = card.querySelector('#sub_email');

    const btnStep1Next = card.querySelector('#btn-sub-step1-next');
    const btnStep2Back = card.querySelector('#btn-sub-step2-back');
    const btnStep2Next = card.querySelector('#btn-sub-step2-next');
    const btnStep3Back = card.querySelector('#btn-sub-step3-back');

    // Auto pre-fill zip code from URL parameter e.g. ?zip=90210
    const urlParams = new URLSearchParams(window.location.search);
    const urlZip = urlParams.get('zip');
    if (urlZip && zipInput) {
      zipInput.value = urlZip;
    }

    const setStep = (stepNumber) => {
      [step1, step2, step3, stepConf].forEach(s => {
        if (s) {
          s.classList.remove('step-active');
        }
      });

      if (stepNumber === 1 && step1) {
        step1.classList.add('step-active');
        if (stepPill) stepPill.textContent = 'STEP 1 OF 3';
        if (progressFill) progressFill.style.width = '33.33%';
      } else if (stepNumber === 2 && step2) {
        step2.classList.add('step-active');
        if (stepPill) stepPill.textContent = 'STEP 2 OF 3';
        if (progressFill) progressFill.style.width = '66.66%';
      } else if (stepNumber === 3 && step3) {
        step3.classList.add('step-active');
        if (stepPill) stepPill.textContent = 'STEP 3 OF 3';
        if (progressFill) progressFill.style.width = '100%';
      } else if (stepNumber === 4 && stepConf) {
        stepConf.classList.add('step-active');
        if (stepPill) stepPill.textContent = 'COMPLETE';
        if (progressFill) progressFill.style.width = '100%';
      }
    };

    // Helper for error state
    const setError = (inputElem, isError) => {
      if (!inputElem) return;
      const group = inputElem.closest('.input-group');
      if (group) {
        if (isError) group.classList.add('has-error');
        else group.classList.remove('has-error');
      }
    };

    // Step 1 -> Step 2
    if (btnStep1Next) {
      btnStep1Next.addEventListener('click', (e) => {
        e.preventDefault();
        const zipVal = zipInput ? zipInput.value.trim() : '';
        const isValidZip = /^[0-9]{5}$/.test(zipVal);

        if (!isValidZip) {
          setError(zipInput, true);
          return;
        }
        setError(zipInput, false);
        setStep(2);
      });
    }

    // Step 2 -> Step 1 (Back)
    if (btnStep2Back) {
      btnStep2Back.addEventListener('click', (e) => {
        e.preventDefault();
        setStep(1);
      });
    }

    // Step 2 -> Step 3
    if (btnStep2Next) {
      btnStep2Next.addEventListener('click', (e) => {
        e.preventDefault();
        const timelineVal = timelineSelect ? timelineSelect.value : '';

        if (!timelineVal) {
          setError(timelineSelect, true);
          return;
        }
        setError(timelineSelect, false);
        setStep(3);
      });
    }

    // Step 3 -> Step 2 (Back)
    if (btnStep3Back) {
      btnStep3Back.addEventListener('click', (e) => {
        e.preventDefault();
        setStep(2);
      });
    }

    // Submit -> Thank You
    stepForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const phoneVal = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';

      let hasErr = false;

      if (!nameVal) {
        setError(nameInput, true);
        hasErr = true;
      } else {
        setError(nameInput, false);
      }

      if (phoneVal.length < 10) {
        setError(phoneInput, true);
        hasErr = true;
      } else {
        setError(phoneInput, false);
      }

      if (!/^\S+@\S+\.\S+$/.test(emailVal)) {
        setError(emailInput, true);
        hasErr = true;
      } else {
        setError(emailInput, false);
      }

      if (hasErr) return;

      // Update Confirmation Card Placeholders
      const confServiceName = card.querySelector('.conf-service-name');
      const confZipVal = card.querySelector('.conf-zip-val');
      const serviceAttr = card.getAttribute('data-service') || 'Service';

      if (confServiceName) confServiceName.textContent = serviceAttr;
      if (confZipVal && zipInput) confZipVal.textContent = zipInput.value.trim();

      // Client-Side Data Hook for backend/CRM integration
      const submissionData = {
        service: serviceAttr,
        category: card.getAttribute('data-category') || '',
        zip: zipInput ? zipInput.value.trim() : '',
        timeline: timelineSelect ? timelineSelect.value : '',
        name: nameVal,
        phone: phoneVal,
        email: emailVal,
        submittedAt: new Date().toISOString()
      };
      console.log('GetCallAxis Subpage Quote Submission:', submissionData);

      setStep(4);
    });
  });

  // Hero "Get my free quote →" smooth scroll & zip focus helper
  document.querySelectorAll('a[href="#quote-form-section"], a[href="#service-quote-card"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSec = document.getElementById('quote-form-section') || document.getElementById('service-quote-card');
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
        const zipField = targetSec.querySelector('#sub_zip') || targetSec.querySelector('input[name="zip"]');
        if (zipField) {
          setTimeout(() => zipField.focus(), 500);
        }
      }
    });
  });

  // ================= 12. Stats Bar Count-Up Animation =================
  const statsSections = document.querySelectorAll('.stats-bar-sec');
  const statValElems = document.querySelectorAll('.stat-val');

  if (statsSections.length > 0 && statValElems.length > 0) {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateStatsForSection = (sec) => {
      const vals = sec.querySelectorAll('.stat-val');
      vals.forEach(elem => {
        if (elem.classList.contains('has-animated')) return;
        elem.classList.add('has-animated');

        const targetValStr = elem.getAttribute('data-count');
        const suffix = elem.getAttribute('data-suffix') || '';
        const prefix = elem.getAttribute('data-prefix') || '';

        if (!targetValStr) return;

        const targetNum = parseInt(targetValStr, 10);
        if (isNaN(targetNum) || isReducedMotion) {
          elem.textContent = prefix + Number(targetNum).toLocaleString() + suffix;
          return;
        }

        const duration = 1800; // 1.8 seconds count up
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentNum = Math.floor(easeOut * targetNum);

          elem.textContent = prefix + currentNum.toLocaleString() + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            elem.textContent = prefix + targetNum.toLocaleString() + suffix;
          }
        };

        requestAnimationFrame(updateCount);
      });
    };

    if ('IntersectionObserver' in window) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStatsForSection(entry.target);
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      statsSections.forEach(sec => statsObserver.observe(sec));
    } else {
      statsSections.forEach(sec => animateStatsForSection(sec));
    }
  }

  // ================= 13. Reference Template Quote Form Engine (#quoteForm) =================
  const refQuoteForms = document.querySelectorAll('#quoteForm, .quote-form');
  
  refQuoteForms.forEach(form => {
    if (form.dataset.initialized) return;
    form.dataset.initialized = 'true';

    const steps = Array.from(form.querySelectorAll('.form-step'));
    const stepLabel = form.querySelector('#stepLabel');
    const progressFill = form.querySelector('#progressFill');

    let currentStep = 1;
    const totalSteps = 3;

    const showStep = (stepNumber) => {
      steps.forEach(step => {
        if (step.dataset.step === 'success') {
          step.style.display = (stepNumber === 'success') ? 'block' : 'none';
          step.classList.toggle('active', stepNumber === 'success');
        } else {
          step.classList.toggle('active', step.dataset.step == stepNumber);
        }
      });

      if (stepNumber !== 'success') {
        if (stepLabel) stepLabel.textContent = `Step ${stepNumber} of ${totalSteps}`;
        if (progressFill) progressFill.style.width = `${(stepNumber / totalSteps) * 100}%`;
      } else {
        if (stepLabel) stepLabel.textContent = `Complete`;
        if (progressFill) progressFill.style.width = `100%`;
      }
    };

    // Next step button listener
    form.querySelectorAll('.next-step').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const activeStep = form.querySelector('.form-step.active');
        if (!activeStep) return;

        let isValid = true;
        const requiredInputs = activeStep.querySelectorAll('[required]');

        requiredInputs.forEach(input => {
          if (input.name === 'zip') {
            const val = input.value.trim();
            if (!/^[0-9]{5}$/.test(val)) {
              isValid = false;
              input.style.borderColor = '#EF4444';
              const errSpan = activeStep.querySelector('#zipError');
              if (errSpan) errSpan.style.display = 'block';
            } else {
              input.style.borderColor = '';
              const errSpan = activeStep.querySelector('#zipError');
              if (errSpan) errSpan.style.display = 'none';
            }
          } else if (input.name === 'timeline') {
            if (!input.value) {
              isValid = false;
              input.style.borderColor = '#EF4444';
              const errSpan = activeStep.querySelector('#timelineError');
              if (errSpan) errSpan.style.display = 'block';
            } else {
              input.style.borderColor = '';
              const errSpan = activeStep.querySelector('#timelineError');
              if (errSpan) errSpan.style.display = 'none';
            }
          } else if (input.name === 'service') {
            if (!input.value) {
              isValid = false;
              input.style.borderColor = '#EF4444';
            } else {
              input.style.borderColor = '';
            }
          } else {
            if (!input.value.trim()) {
              isValid = false;
              input.style.borderColor = '#EF4444';
            } else {
              input.style.borderColor = '';
            }
          }
        });

        if (!isValid) return;

        if (currentStep < totalSteps) {
          currentStep++;
          showStep(currentStep);
        }
      });
    });

    // Prev step button listener
    form.querySelectorAll('.prev-step').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep > 1) {
          currentStep--;
          showStep(currentStep);
        }
      });
    });

    // Form submit listener
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const activeStep = form.querySelector('.form-step.active');
      const requiredInputs = activeStep ? activeStep.querySelectorAll('[required]') : [];

      let isValid = true;
      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#EF4444';
        } else {
          input.style.borderColor = '';
        }
      });

      if (!isValid) return;

      const nameVal = form.querySelector('input[name="name"]')?.value || 'there';
      const phoneVal = form.querySelector('input[name="phone"]')?.value || '';

      const successName = form.querySelector('#successName');
      const successPhone = form.querySelector('#successPhone');

      if (successName) successName.textContent = nameVal;
      if (successPhone) successPhone.textContent = phoneVal || 'you';

      showStep('success');
    });
  });

  // Hero "Get my free quote →" link scroll & focus
  document.querySelectorAll('a[href="#quoteForm"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const formElem = document.getElementById('quoteForm');
      if (formElem) {
        formElem.scrollIntoView({ behavior: 'smooth' });
        const firstInput = formElem.querySelector('input[name="zip"]') || formElem.querySelector('select[name="service"]');
        if (firstInput) {
          setTimeout(() => firstInput.focus(), 500);
        }
      }
    });
  });

  // ================= 14. "Why GetCallAxis" Cards Interactive Click Engine =================
  const whyCards = document.querySelectorAll('.why-card');
  whyCards.forEach(card => {
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
    if (!card.hasAttribute('role')) card.setAttribute('role', 'button');

    const toggleActiveCard = (e) => {
      const isActive = card.classList.contains('active');

      // Deactivate all cards first
      whyCards.forEach(c => c.classList.remove('active'));

      // If clicked card was not active, activate it
      if (!isActive) {
        card.classList.add('active');

        // Create ripple element at click coordinates
        if (e && typeof e.clientX === 'number' && e.clientX > 0) {
          const rect = card.getBoundingClientRect();
          const ripple = document.createElement('span');
          ripple.className = 'card-ripple';
          const diameter = Math.max(rect.width, rect.height);
          ripple.style.width = ripple.style.height = `${diameter}px`;
          ripple.style.left = `${e.clientX - rect.left - diameter / 2}px`;
          ripple.style.top = `${e.clientY - rect.top - diameter / 2}px`;
          card.appendChild(ripple);

          setTimeout(() => {
            if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
          }, 550);
        }
      }
    };

    card.addEventListener('click', toggleActiveCard);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleActiveCard(e);
      }
    });
  });

});

