import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Olmeda Pet Studio</title>
        <meta name="description" content="The 3-pillar growth system: Google Positioning, Visible Trust, and the Conversion Engine. Built for pet care businesses." />
        <meta property="og:title" content="Services — Olmeda Pet Studio" />
        <meta property="og:description" content="The 3-pillar growth system: Google Positioning, Visible Trust, and the Conversion Engine. Built for pet care businesses." />
      </Head>

      <PageLayout navActive="services">
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">›</span>
            <span className="current">Services</span>
          </div>
          <div className="grid-2" style={{ gridTemplateColumns: '1.05fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h1 className="t-display mt-16">
                One <span className="accent">growth system.</span>
                <br />
                Built for pet care.
              </h1>
              <p className="t-lead mt-24">
                We don't sell channels. We build a complete system that puts you in front of pet parents, earns their trust, and converts them into booked appointments — month after month.
              </p>
              <div className="row mt-32">
                <Link className="btn primary large" href="/resources/free-audit">
                  <span>Book Your Free Growth Audit</span>
                  <span className="arrow">→</span>
                </Link>
                <Link className="btn secondary" href="/process">
                  <span>See How It Works</span>
                </Link>
              </div>
            </div>
            <div className="photo dog-portrait" style={{ aspectRatio: '5/4', minHeight: '380px' }}></div>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="eyebrow blue">THE 3-PILLAR GROWTH SYSTEM</div>
            <h2 className="t-h1 mt-16">Visibility. Trust. Conversion.</h2>
            <p className="t-lead mt-16">Each pillar works on its own. Together, they compound.</p>
          </div>

          <div className="grid-3 mt-48">
            <Link
              href="/services/google-positioning"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <Card style={{ padding: '32px' }}>
              <div className="step-row" style={{ marginBottom: '18px' }}>
                <div className="step">01</div>
                <div className="step-divider"></div>
              </div>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
              </div>
              <h3>Google Positioning</h3>
              <span className="card-tag">Visibility</span>
              <p className="t-body" style={{ fontSize: '14px', marginTop: '8px' }}>
                Get found by pet parents searching right now. Local SEO, Google Business Profile, and Maps ranking that actually works.
              </p>
              <ul className="mt-16">
                <li>Top 3 Google Maps placement</li>
                <li>Google Business Profile optimization</li>
                <li>Local SEO &amp; content strategy</li>
                <li>Citation building &amp; cleanup</li>
              </ul>
              <div className="mt-24" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '14px' }}>
                Explore service <span style={{ display: 'inline-block', transform: 'translateX(2px)' }}>→</span>
              </div>
              </Card>
            </Link>

            <Link
              href="/services/review-generation"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <Card style={{ padding: '32px', borderTop: '3px solid var(--orange)' }}>
              <div className="step-row" style={{ marginBottom: '18px' }}>
                <div className="step" style={{ background: 'var(--orange)' }}>
                  02
                </div>
                <div className="step-divider" style={{ borderColor: 'var(--orange)' }}></div>
              </div>
              <div className="card-icon orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Review Generation</h3>
              <span className="card-tag">Trust</span>
              <p className="t-body" style={{ fontSize: '14px', marginTop: '8px' }}>
                Turn happy clients into 5-star reviews on autopilot. The strongest signal of trust before someone ever calls.
              </p>
              <ul className="orange mt-16">
                <li>Automated review request flow</li>
                <li>Multi-channel: SMS, email, kiosk</li>
                <li>Negative-feedback intercept</li>
                <li>Response templates &amp; coaching</li>
              </ul>
              <div className="mt-24" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '14px' }}>
                Explore service <span style={{ display: 'inline-block', transform: 'translateX(2px)' }}>→</span>
              </div>
              </Card>
            </Link>

            <Link
              href="/services/web-design-seo"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <Card style={{ padding: '32px' }}>
              <div className="step-row" style={{ marginBottom: '18px' }}>
                <div className="step">03</div>
                <div className="step-divider"></div>
              </div>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 17 9 11 13 15 21 7"></polyline>
                  <polyline points="14 7 21 7 21 14"></polyline>
                </svg>
              </div>
              <h3>Conversion Engine</h3>
              <span className="card-tag">Conversion</span>
              <p className="t-body" style={{ fontSize: '14px', marginTop: '8px' }}>
                High-converting websites, paid ads, booking systems, and follow-up. Turn traffic into booked appointments.
              </p>
              <ul className="mt-16">
                <li>Conversion-focused website</li>
                <li>Online booking integration</li>
                <li>Lead-nurture sequences</li>
                <li>Call tracking &amp; attribution</li>
              </ul>
              <div className="mt-24" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '14px' }}>
                Explore service <span style={{ display: 'inline-block', transform: 'translateX(2px)' }}>→</span>
              </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="eyebrow blue">DIVE DEEPER</div>
            <h2 className="t-h1 mt-16">Every channel, integrated</h2>
          </div>
          <div className="grid-2 mt-48" style={{ gap: '24px' }}>
            <Link
              href="/services/google-positioning"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <Card style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', width: '100%' }}>
              <div className="card-icon" style={{ margin: 0, flex: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '18px' }}>Google Positioning</h3>
                <p className="t-small mt-8">Maps, Business Profile, local SEO. Be the first vet or daycare pet parents see.</p>
              </div>
              </Card>
            </Link>

            <Link
              href="/services/review-generation"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <Card style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', width: '100%' }}>
              <div className="card-icon orange" style={{ margin: 0, flex: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '18px' }}>Review Generation</h3>
                <p className="t-small mt-8">Automated systems that turn happy pet parents into 5-star reviews — without feeling pushy.</p>
              </div>
              </Card>
            </Link>

            <Link
              href="/services/paid-advertising"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <Card style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', width: '100%' }}>
              <div className="card-icon purple" style={{ margin: 0, flex: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polygon points="12 2 22 7 12 12 2 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '18px' }}>Paid Advertising</h3>
                <p className="t-small mt-8">Google Ads &amp; Meta campaigns built around real ROI, not vanity clicks.</p>
              </div>
              </Card>
            </Link>

            <Link
              href="/services/web-design-seo"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <Card style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', width: '100%' }}>
              <div className="card-icon green" style={{ margin: 0, flex: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '18px' }}>Web Design &amp; SEO</h3>
                <p className="t-small mt-8">Conversion-focused websites with booking baked in. Built to rank, built to convert.</p>
              </div>
              </Card>
            </Link>

            <Link
              href="/services/veterinary-clinics"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <Card style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', width: '100%' }}>
              <div className="card-icon" style={{ margin: 0, flex: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 22h20"></path>
                  <path d="M5 22V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17"></path>
                  <path d="M12 8v6"></path>
                  <path d="M9 11h6"></path>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '18px' }}>For Veterinary Clinics</h3>
                <p className="t-small mt-8">Independent vet practices fighting corporate chains on visibility and trust.</p>
              </div>
              </Card>
            </Link>

            <Link
              href="/services/dog-daycares"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <Card style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', width: '100%' }}>
              <div className="card-icon orange" style={{ margin: 0, flex: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="11" cy="4" r="2"></circle>
                  <circle cx="17" cy="8" r="2"></circle>
                  <circle cx="5" cy="8" r="2"></circle>
                  <circle cx="19" cy="14" r="2"></circle>
                  <circle cx="3" cy="14" r="2"></circle>
                  <path d="M11 11c-3 0-5 2-5 5 0 3 2 4 5 4s5-1 5-4-2-5-5-5z"></path>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '18px' }}>For Dog Daycares</h3>
                <p className="t-small mt-8">Daycares and boarding facilities targeting premium clients and 85%+ occupancy.</p>
              </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow blue">WHAT'S INCLUDED</div>
              <h2 className="t-h1 mt-16">Every engagement, end to end</h2>
              <span className="h-rule"></span>
              <p className="t-body mt-24">
                You don't pay for one tactic. You get a complete growth system — designed, built, run, and reported on by the same team.
              </p>
            </div>
            <ul className="checklist">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                Dedicated growth strategist, on call
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                Quarterly strategy review and roadmap
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                Monthly performance reporting (real numbers)
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                Photography, copy, and creative production
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                Booking + CRM integration
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                Honest, no-pressure communication — always
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div data-cta-banner></div>
        </div>
      </section>

      </PageLayout>
    </>
  );
}
