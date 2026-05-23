import Link from 'next/link';

interface NavbarProps {
  active?: string; // e.g., 'home', 'services', 'blog', 'about', 'contact'
}

export default function Navbar({ active = '' }: NavbarProps) {
  const isActive = (page: string) => active === page ? 'active' : '';

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <Link href="/" className="logo" aria-label="Olmeda Pet Studio home">
          <img
            className="logo-mark"
            src="/logo-mark.png"
            alt=""
            width={32}
            height={32}
          />
          <span className="logo-text">
            <span className="logo-word">OLMEDA</span>
            <span className="logo-sub">PET STUDIO</span>
          </span>
        </Link>

        {/* Main Navigation */}
        <nav className="nav-links">
          {/* Services Dropdown */}
          <div className="nav-drop">
            <Link
              href="/services"
              className={`has-caret ${isActive('services')}`}
            >
              Services
            </Link>
            <div className="nav-drop-menu">
              <Link href="/services">
                All services
                <div className="nd-sub">The 3-pillar growth system</div>
              </Link>
              <Link href="/services/google-positioning">
                Google Positioning
                <div className="nd-sub">Be found first</div>
              </Link>
              <Link href="/services/review-generation">
                Review Generation
                <div className="nd-sub">Build visible trust</div>
              </Link>
              <Link href="/services/paid-advertising">
                Paid Advertising
                <div className="nd-sub">Google + Meta Ads</div>
              </Link>
              <Link href="/services/web-design-seo">
                Web Design &amp; SEO
                <div className="nd-sub">Convert your traffic</div>
              </Link>
              <Link href="/services/veterinary-clinics">
                For Veterinary Clinics
                <div className="nd-sub">Independent practices</div>
              </Link>
              <Link href="/services/dog-daycares">
                For Dog Daycares
                <div className="nd-sub">Boarding &amp; daycare</div>
              </Link>
            </div>
          </div>

          <Link href="/work" className={isActive('work')}>
            Work
          </Link>
          <Link href="/about" className={isActive('about')}>
            About
          </Link>
          <Link href="/blog" className={isActive('blog')}>
            Blog
          </Link>
          <Link href="/contact" className={isActive('contact')}>
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="nav-cta">
          <Link href="/work" className="btn secondary">
            <span>See Results</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </Link>
          <Link href="/resources/free-audit" className="btn primary">
            <span>Book Free Audit</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
