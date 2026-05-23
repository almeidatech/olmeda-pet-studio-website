import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';
import { MetricCard } from '@/components/MetricCard';

export default function WebDesignSeo() {
  return (
    <>
      <Head>
        <title>Web Design &amp; SEO — Olmeda Pet Studio</title>
        <meta name="description" content="Websites that rank, convert, and book. Built specifically for veterinary clinics and dog daycares." />
        <meta property="og:title" content="Web Design &amp; SEO — Olmeda Pet Studio" />
        <meta property="og:description" content="Websites that rank, convert, and book. Built specifically for veterinary clinics and dog daycares." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <Link href="/services">Services</Link>
              <span className="sep">›</span>
              <span className="current">Web Design &amp; SEO</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.05fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">PILLAR 03 · CONVERSION</div>
                <h1 className="t-display mt-16">
                  A website that <span className="accent">books appointments.</span>
                </h1>
                <p className="t-lead mt-24">
                  Not a brochure. Not a portfolio piece. A conversion engine — fast, mobile-first, optimized for pet parents, integrated with your booking software, and built to rank.
                </p>
                <div className="row mt-32">
                  <Link className="btn primary large" href="/resources/free-audit">
                    <span>Audit my website</span>
                    <span className="arrow">→</span>
                  </Link>
                  <Link className="btn ghost" href="/work">
                    <span>See sites we've built</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div className="photo dashboard" style={{ aspectRatio: '5/4', borderRadius: 'var(--r-lg)', minHeight: '340px' }}></div>
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'rgba(255,255,255,.96)', backdropFilter: 'blur(10px)', padding: '16px 18px', borderRadius: '12px', boxShadow: 'var(--sh-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 700 }}>PAGESPEED — MOBILE</div>
                    <div style={{ fontWeight: 800, fontSize: '22px', color: 'var(--fg-1)' }}>98 / 100</div>
                  </div>
                  <div>
                    <div className="t-tiny" style={{ color: 'var(--orange)', fontWeight: 700 }}>CONVERSION RATE</div>
                    <div style={{ fontWeight: 800, fontSize: '22px', color: 'var(--fg-1)' }}>8.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">WHAT'S IN THE BUILD</div>
              <h2 className="t-h1 mt-16">Every page earns its place</h2>
            </div>
            <div className="grid-3 mt-48">
              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                  </svg>
                </div>
                <h3>Conversion-first design</h3>
                <p className="t-small mt-8">Hero, trust signals, sticky booking CTA on every page. No dead-ends.</p>
              </Card>
              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>Sub-2-second load</h3>
                <p className="t-small mt-8">Image optimization, edge hosting, lazy load. Google's #1 ranking signal.</p>
              </Card>
              <Card>
                <div className="card-icon orange">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h3>Online booking</h3>
                <p className="t-small mt-8">Direct integration with Gingr, ezyVet, AVImark, PetExec — book in 3 taps.</p>
              </Card>
              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3>Live chat ready</h3>
                <p className="t-small mt-8">Front-desk chat or AI receptionist that captures leads after hours.</p>
              </Card>
              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <h3>Local SEO baked in</h3>
                <p className="t-small mt-8">Schema markup, service pages, location pages, fast indexing.</p>
              </Card>
              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3>You own it</h3>
                <p className="t-small mt-8">No proprietary platform lock-in. Webflow or WordPress, your call.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow blue">REAL RESULT</div>
                <h2 className="t-h1 mt-16">From 1.2% to 8.4% conversion</h2>
                <span className="h-rule"></span>
                <p className="t-body mt-24">
                  Happy Tails Daycare's old site converted 1.2% of visitors into booking inquiries. Six weeks after relaunch, the new site converted 8.4% — a 7× improvement on the same traffic.
                </p>
                <div className="grid-3 mt-32" style={{ gap: '16px' }}>
                  <MetricCard number="7×" color="var(--blue)" label="conversion rate" />
                  <MetricCard number="1.8s" color="var(--orange)" label="page load (was 6.2s)" />
                  <MetricCard number="+$24k" color="var(--green)" label="monthly bookings" />
                </div>
              </div>
              <div className="photo daycare" style={{ aspectRatio: '4/3', minHeight: '340px' }}></div>
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
