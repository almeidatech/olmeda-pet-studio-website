import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-floating">
          <span className="footer-italic">Free, no obligation</span>
          <Link href="/resources/free-audit" className="footer-cta-pill">
            <span>Book Free Audit</span>
            <span className="arrow">→</span>
          </Link>
        </div>

        <div className="footer-card">
          {/* Left navy panel */}
          <div className="footer-left">
            <Link href="/" className="logo" aria-label="Olmeda Pet Studio home">
              <img className="logo-mark" src="/assets/logo-mark-on-dark.png" alt="" />
              <span className="logo-text">
                <span className="logo-word">OLMEDA</span>
                <span className="logo-sub">PET STUDIO</span>
              </span>
            </Link>
            <p className="footer-tag-line">Growth systems that <em>fill your schedule.</em> More visibility. More trust. More bookings.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3H13.5v6.9A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h.04c.35-.66 1.2-1.36 2.5-1.36 2.66 0 3.16 1.74 3.16 4v4.76z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right white panel */}
          <div className="footer-right">
            <div className="footer-links-grid">
              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  <li><Link href="/services/google-positioning">Google Positioning</Link></li>
                  <li><Link href="/services/review-generation">Review Generation</Link></li>
                  <li><Link href="/services/paid-advertising">Paid Advertising</Link></li>
                  <li><Link href="/services/web-design-seo">Web Design &amp; SEO</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/work">Case Studies</Link></li>
                  <li><Link href="/process">Our Process</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <ul>
                  <li><Link href="/resources/free-audit">Free Audit</Link></li>
                  <li><Link href="/resources/google-positioning-guide">Google Ranking Guide</Link></li>
                  <li><Link href="/resources/growth-guide">Growth Guide</Link></li>
                  <li><Link href="/resources/review-strategy">Review Strategy</Link></li>
                </ul>
              </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-newsletter">
              <h3>Google moves fast. Stay ahead with <em>Olmeda</em>.</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                const button = e.currentTarget.querySelector('button') as HTMLButtonElement;
                input.value = '';
                button.textContent = 'Subscribed ✓';
                setTimeout(() => {
                  button.innerHTML = 'Subscribe <span class="arrow">→</span>';
                }, 2000);
              }}>
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe <span className="arrow">→</span></button>
              </form>
            </div>

            <div className="footer-copyright">© 2026 Olmeda Pet Studio. All rights reserved.</div>
          </div>
        </div>

        <div className="footer-guarantee">
          <span className="dot">·</span>4-month guarantee<span className="dot">·</span>If we don&apos;t deliver results, you don&apos;t pay.<span className="dot">·</span>
        </div>
        <div className="footer-bottom-legal">
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
