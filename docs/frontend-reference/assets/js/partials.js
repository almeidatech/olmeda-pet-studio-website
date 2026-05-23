/* Olmeda Pet Studio — shared partials
   Injects header, footer, and CTA banner into <header id="site-header"></header>,
   <footer id="site-footer"></footer>, and any <div data-cta-banner></div>.
   Each page sets <body data-active="services"> etc. to highlight nav.
*/

(function () {
  const root = window.SITE_ROOT || ''; // relative path back to root (e.g. '../' or '../../')

  // ---------- HEADER ----------
  function renderHeader() {
    const active = document.body.dataset.active || '';
    const a = (k) => active === k ? 'active' : '';
    return `
<div class="nav-inner">
  <a class="logo" href="${root}index.html" aria-label="Olmeda Pet Studio home">
    <img class="logo-mark" src="${root}assets/logo-mark.png" alt="" />
    <span class="logo-text">
      <span class="logo-word">OLMEDA</span>
      <span class="logo-sub">PET STUDIO</span>
    </span>
  </a>
  <nav class="nav-links">
    <div class="nav-drop">
      <a href="${root}services/index.html" class="has-caret ${a('services')}">Services</a>
      <div class="nav-drop-menu">
        <a href="${root}services/index.html">All services<div class="nd-sub">The 3-pillar growth system</div></a>
        <a href="${root}services/google-positioning.html">Google Positioning<div class="nd-sub">Be found first</div></a>
        <a href="${root}services/review-generation.html">Review Generation<div class="nd-sub">Build visible trust</div></a>
        <a href="${root}services/paid-advertising.html">Paid Advertising<div class="nd-sub">Google + Meta Ads</div></a>
        <a href="${root}services/web-design-seo.html">Web Design &amp; SEO<div class="nd-sub">Convert your traffic</div></a>
        <a href="${root}services/veterinary-clinics.html">For Veterinary Clinics<div class="nd-sub">Independent practices</div></a>
        <a href="${root}services/dog-daycares.html">For Dog Daycares<div class="nd-sub">Boarding &amp; daycare</div></a>
      </div>
    </div>
    <a href="${root}work/index.html" class="${a('work')}">Work</a>
    <a href="${root}about.html" class="${a('about')}">About</a>
    <a href="${root}blog/index.html" class="${a('blog')}">Blog</a>
    <a href="${root}contact.html" class="${a('contact')}">Contact</a>
  </nav>
  <div class="nav-cta">
    <a class="btn secondary" href="${root}work/index.html">
      <span>See Results</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
    </a>
    <a class="btn primary" href="${root}resources/free-audit.html">
      <span>Book Free Audit</span>
      <span class="arrow">→</span>
    </a>
  </div>
</div>`;
  }

  // ---------- FOOTER ----------
  function renderFooter() {
    return `
<div class="wrap">
  <div class="footer-floating">
    <span class="footer-italic">Free, no obligation</span>
    <a class="footer-cta-pill" href="${root}resources/free-audit.html">
      <span>Book Free Audit</span>
      <span class="arrow">→</span>
    </a>
  </div>

  <div class="footer-card">
    <!-- Left navy panel -->
    <div class="footer-left">
      <a class="logo" href="${root}index.html" aria-label="Olmeda Pet Studio home">
        <img class="logo-mark" src="${root}assets/logo-mark-on-dark.png" alt="" />
        <span class="logo-text">
          <span class="logo-word">OLMEDA</span>
          <span class="logo-sub">PET STUDIO</span>
        </span>
      </a>
      <p class="footer-tag-line">Growth systems that <em>fill your schedule.</em> More visibility. More trust. More bookings.</p>
      <div class="footer-social">
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3H13.5v6.9A10 10 0 0 0 22 12z"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h.04c.35-.66 1.2-1.36 2.5-1.36 2.66 0 3.16 1.74 3.16 4v4.76z"/></svg></a>
      </div>
    </div>

    <!-- Right white panel -->
    <div class="footer-right">
      <div class="footer-links-grid">
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="${root}services/google-positioning.html">Google Positioning</a></li>
            <li><a href="${root}services/review-generation.html">Review Generation</a></li>
            <li><a href="${root}services/paid-advertising.html">Paid Advertising</a></li>
            <li><a href="${root}services/web-design-seo.html">Web Design &amp; SEO</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="${root}about.html">About Us</a></li>
            <li><a href="${root}work/index.html">Case Studies</a></li>
            <li><a href="${root}process.html">Our Process</a></li>
            <li><a href="${root}blog/index.html">Blog</a></li>
            <li><a href="${root}careers.html">Careers</a></li>
            <li><a href="${root}contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="${root}resources/free-audit.html">Free Audit</a></li>
            <li><a href="${root}resources/google-positioning-guide.html">Google Ranking Guide</a></li>
            <li><a href="${root}resources/growth-guide.html">Growth Guide</a></li>
            <li><a href="${root}resources/review-strategy.html">Review Strategy</a></li>
          </ul>
        </div>
      </div>

      <hr class="footer-divider"/>

      <div class="footer-newsletter">
        <h3>Google moves fast. Stay ahead with <em>Olmeda</em>.</h3>
        <form onsubmit="event.preventDefault(); this.querySelector('input').value=''; this.querySelector('button').textContent='Subscribed ✓'; setTimeout(()=>{this.querySelector('button').innerHTML='Subscribe <span class=\\'arrow\\'>→</span>'},2000);">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe <span class="arrow">→</span></button>
        </form>
      </div>

      <div class="footer-copyright">© 2026 Olmeda Pet Studio. All rights reserved.</div>
    </div>
  </div>

  <div class="footer-guarantee">
    <span class="dot">·</span>4-month guarantee<span class="dot">·</span>If we don't deliver results, you don't pay.<span class="dot">·</span>
  </div>
  <div class="footer-bottom-legal">
    <a href="${root}legal/privacy.html">Privacy Policy</a>
    <a href="${root}legal/terms.html">Terms of Service</a>
  </div>
</div>`;
  }

  // ---------- CTA BANNER ----------
  function renderCTA() {
    return `
<div class="cta-banner">
  <div class="cta-img" aria-hidden="true"></div>
  <div>
    <h2>Ready to Get More Patients &amp; Bookings?</h2>
    <p>Let's build your growth engine. Starting with a free, no-obligation audit.</p>
    <a class="btn primary" href="${root}resources/free-audit.html">
      <span>Book Your Free Growth Audit</span>
      <span class="arrow">→</span>
    </a>
  </div>
  <div class="cta-check">
    <div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>No obligation</div>
    <div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Custom growth plan</div>
    <div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Clear opportunities</div>
    <div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>ROI estimate</div>
  </div>
</div>`;
  }

  // ---------- inject ----------
  document.addEventListener('DOMContentLoaded', function () {
    const h = document.getElementById('site-header');
    if (h) { h.className = 'nav'; h.innerHTML = renderHeader(); }
    const f = document.getElementById('site-footer');
    if (f) { f.className = 'footer'; f.innerHTML = renderFooter(); }
    document.querySelectorAll('[data-cta-banner]').forEach(el => { el.innerHTML = renderCTA(); });

    // FAQ accordion
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        // accordion-style — close siblings
        if (item.parentElement) {
          item.parentElement.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        }
        if (!wasOpen) item.classList.add('open');
      });
    });
  });
})();
