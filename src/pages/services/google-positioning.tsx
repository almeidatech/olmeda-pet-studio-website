import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function GooglePositioning() {
  return (
    <>
      <Head>
        <title>Google Positioning — Olmeda Pet Studio</title>
        <meta name="description" content="Be the first vet or daycare pet parents see. Local SEO, Google Business Profile, and Maps ranking that drive bookings." />
        <meta property="og:title" content="Google Positioning — Olmeda Pet Studio" />
        <meta property="og:description" content="Be the first vet or daycare pet parents see. Local SEO, Google Business Profile, and Maps ranking that drive bookings." />
      </Head>

      <PageLayout navActive="services">
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">›</span>
            <Link href="/services">Services</Link>
            <span className="sep">›</span>
            <span className="current">Google Positioning</span>
          </div>
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.05fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">PILLAR 01 · VISIBILITY</div>
              <h1 className="t-display mt-16">
                Be the first vet pet parents <span className="accent">find first.</span>
              </h1>
              <p className="t-lead mt-24">
                When someone searches "vet near me" or "dog daycare near me," they don't scroll past the top 3. We get you there — and keep you there.
              </p>
              <div className="row mt-32">
                <Link className="btn primary large" href="/resources/free-audit">
                  <span>Audit my Google ranking</span>
                  <span className="arrow">→</span>
                </Link>
                <Link className="btn ghost" href="/resources/google-positioning-guide">
                  <span>Read the guide</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
            <Card style={{ padding: '24px' }}>
              <div className="row" style={{ justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ fontWeight: 700 }}>Google Maps — "vet near me"</div>
                <span className="tag green">Live</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '12px', padding: '12px', border: '1px solid var(--gray-100)', borderRadius: '10px', background: '#FFF8F2', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--orange)', color: '#fff', fontWeight: 800, display: 'grid', placeItems: 'center' }}>1</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '14px' }}>Pawsitive Care Animal Hospital</div>
                    <div className="t-tiny" style={{ color: 'var(--orange)' }}>★★★★★ 4.9 · Open · 0.4 mi</div>
                  </div>
                  <span className="tag orange">You</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', padding: '12px', border: '1px solid var(--gray-100)', borderRadius: '10px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--gray-100)', color: 'var(--fg-2)', fontWeight: 700, display: 'grid', placeItems: 'center' }}>2</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--fg-2)' }}>Vet Now Clinic</div>
                    <div className="t-tiny">★★★★ 4.1 · 0.8 mi</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', padding: '12px', border: '1px solid var(--gray-100)', borderRadius: '10px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--gray-100)', color: 'var(--fg-2)', fontWeight: 700, display: 'grid', placeItems: 'center' }}>3</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--fg-2)' }}>City Pet Hospital</div>
                    <div className="t-tiny">★★★★ 3.9 · 1.1 mi</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div className="eyebrow blue">WHAT'S INSIDE</div>
            <h2 className="t-h1 mt-16">Six things we fix in the first 60 days</h2>
          </div>
          <div className="grid-3 mt-48">
            <Card style={{ padding: '32px' }}>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Google Business Profile</h3>
              <p className="t-small mt-8">Categories, services, hours, photos, Q&amp;A — every signal Google uses to rank you, optimized.</p>
            </Card>
            <Card style={{ padding: '32px' }}>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
              </div>
              <h3>Local SEO &amp; Content</h3>
              <p className="t-small mt-8">On-page SEO, service pages, blog content that captures every "near me" search in your area.</p>
            </Card>
            <Card style={{ padding: '32px' }}>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3>Citation Cleanup</h3>
              <p className="t-small mt-8">Yelp, Yellow Pages, Apple Maps, Bing — fix inconsistencies that confuse Google's algorithm.</p>
            </Card>
            <Card style={{ padding: '32px' }}>
              <div className="card-icon orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3>Map Pack Ranking</h3>
              <p className="t-small mt-8">Get into the local 3-pack — the only result that matters for "vet near me" searches.</p>
            </Card>
            <Card style={{ padding: '32px' }}>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                </svg>
              </div>
              <h3>Technical SEO</h3>
              <p className="t-small mt-8">Site speed, schema markup, mobile experience — the boring stuff that decides Google rankings.</p>
            </Card>
            <Card style={{ padding: '32px' }}>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              </div>
              <h3>Monthly Reporting</h3>
              <p className="t-small mt-8">Real keyword rankings, call volume, direction requests, and conversions — never guesswork.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="eyebrow blue">REALISTIC TIMELINE</div>
            <h2 className="t-h1 mt-16">What to expect, month by month</h2>
            <p className="t-lead mt-16 muted">Illustrative range based on similar pet businesses. Local competition affects pace.</p>
          </div>
          <div className="grid-4 mt-48" style={{ gap: '24px' }}>
            <Card style={{ padding: '24px' }}>
              <div className="t-tiny orange" style={{ fontWeight: 700, letterSpacing: '.08em' }}>MONTH 1</div>
              <h3 className="mt-8" style={{ fontSize: '17px' }}>Foundation</h3>
              <p className="t-small mt-12">Profile rebuild, citation cleanup, baseline tracking installed.</p>
            </Card>
            <Card style={{ padding: '24px' }}>
              <div className="t-tiny orange" style={{ fontWeight: 700, letterSpacing: '.08em' }}>MONTHS 2–3</div>
              <h3 className="mt-8" style={{ fontSize: '17px' }}>First Lift</h3>
              <p className="t-small mt-12">15–30% more direction requests. Review volume starts climbing.</p>
            </Card>
            <Card style={{ padding: '24px' }}>
              <div className="t-tiny orange" style={{ fontWeight: 700, letterSpacing: '.08em' }}>MONTHS 4–5</div>
              <h3 className="mt-8" style={{ fontSize: '17px' }}>Map Pack</h3>
              <p className="t-small mt-12">Top-3 for core "near me" terms. Calls roughly double.</p>
            </Card>
            <Card style={{ padding: '24px', borderTop: '3px solid var(--orange)' }}>
              <div className="t-tiny orange" style={{ fontWeight: 700, letterSpacing: '.08em' }}>MONTH 6+</div>
              <h3 className="mt-8" style={{ fontSize: '17px' }}>Compounding</h3>
              <p className="t-small mt-12">Sustained top-3 ranking. Bookings grow 2–3× over baseline.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'center' }}>
            <div className="quote" style={{ padding: '32px' }}>
              <p style={{ fontSize: '18px', fontStyle: 'normal' }}>
                "In four months, we went from page two to the top of the map pack for every search that matters. New patients are up 220% — and we haven't spent a dollar on ads."
              </p>
              <footer className="mt-16">
                <div className="av" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80")' }}></div>
                <div>
                  <div className="nm">Dr. Jessica Martinez</div>
                  <div className="tt">Pawsitive Care Animal Hospital</div>
                </div>
              </footer>
            </div>
            <div>
              <div className="eyebrow blue">REAL RESULTS</div>
              <h2 className="t-h1 mt-16">Numbers from a recent client</h2>
              <span className="h-rule"></span>
              <div className="grid-2 mt-32" style={{ gap: '16px' }}>
                <div className="metric-card">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-num">+285%</div>
                    <div className="metric-cap">organic search clicks</div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-num">Top 3</div>
                    <div className="metric-cap">"vet near me" map pack</div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-num">3.4×</div>
                    <div className="metric-cap">phone calls/month</div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-num">4.9</div>
                    <div className="metric-cap">avg. Google rating (from 3.2)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-sm">
          <div className="center">
            <div className="eyebrow blue">QUESTIONS</div>
            <h2 className="t-h1 mt-16">Common questions</h2>
          </div>
          <div className="mt-48">
            <div className="faq-item open">
              <button className="faq-q">
                How long until I show up in the map pack? <span className="pm">+</span>
              </button>
              <div className="faq-a">
                Most pet businesses see meaningful map-pack movement in 60–120 days. Top-3 placement for core "near me" terms is usually a 4–6 month target, depending on competition density in your zip code.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Do you guarantee #1 rankings? <span className="pm">+</span>
              </button>
              <div className="faq-a">
                No — and run from anyone who does. Google doesn't sell rankings. We do guarantee a measurable lift in calls, direction requests, and bookings in 4 months, or we keep working free until you see them.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                What if I'm in a really competitive city? <span className="pm">+</span>
              </button>
              <div className="faq-a">
                We'll tell you up front. Some metros (NYC, LA, Chicago) take 6–9 months for map-pack dominance. We share the realistic range during your audit and never overpromise.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Do I keep my Google Business Profile? <span className="pm">+</span>
              </button>
              <div className="faq-a">
                Yes. You own it forever. We only need manager access to optimize and post. You can revoke at any time.
              </div>
            </div>
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
