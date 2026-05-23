import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function PaidAdvertising() {
  return (
    <>
      <Head>
        <title>Paid Advertising — Olmeda Pet Studio</title>
        <meta name="description" content="Google Ads and Meta campaigns built around real ROI. Every dollar tracked back to booked appointments." />
        <meta property="og:title" content="Paid Advertising — Olmeda Pet Studio" />
        <meta property="og:description" content="Google Ads and Meta campaigns built around real ROI. Every dollar tracked back to booked appointments." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <Link href="/services">Services</Link>
              <span className="sep">›</span>
              <span className="current">Paid Advertising</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.05fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">CONVERSION CHANNEL</div>
                <h1 className="t-display mt-16">
                  Ads that pay for themselves <span className="accent">— or we tell you.</span>
                </h1>
                <p className="t-lead mt-24">
                  Google Search, Performance Max, Local Service Ads, Meta retargeting. We pick the channels that make sense for your business — and walk away from the ones that don't.
                </p>
                <div className="row mt-32">
                  <Link className="btn primary large" href="/resources/free-audit">
                    <span>Audit my ad spend</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
              <Card style={{ padding: '24px' }}>
                <div style={{ fontWeight: 700, marginBottom: '14px' }}>Live campaign — last 30 days</div>
                <div className="grid-2" style={{ gap: '12px' }}>
                  <div style={{ background: 'var(--blue-ice)', padding: '14px', borderRadius: '10px' }}>
                    <div className="t-tiny" style={{ color: 'var(--blue)', fontWeight: 700 }}>SPEND</div>
                    <div style={{ fontWeight: 800, fontSize: '22px', marginTop: '4px' }}>$2,840</div>
                  </div>
                  <div style={{ background: '#E7F8EE', padding: '14px', borderRadius: '10px' }}>
                    <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 700 }}>REVENUE</div>
                    <div style={{ fontWeight: 800, fontSize: '22px', marginTop: '4px' }}>$18,200</div>
                  </div>
                  <div style={{ background: '#FFF1E8', padding: '14px', borderRadius: '10px' }}>
                    <div className="t-tiny" style={{ color: 'var(--orange)', fontWeight: 700 }}>ROAS</div>
                    <div style={{ fontWeight: 800, fontSize: '22px', marginTop: '4px' }}>6.4×</div>
                  </div>
                  <div style={{ background: '#F3F0FB', padding: '14px', borderRadius: '10px' }}>
                    <div className="t-tiny" style={{ color: '#7C5BE8', fontWeight: 700 }}>BOOKINGS</div>
                    <div style={{ fontWeight: 800, fontSize: '22px', marginTop: '4px' }}>47</div>
                  </div>
                </div>
                <svg viewBox="0 0 400 100" width="100%" height="100" style={{ marginTop: '20px' }}>
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#22C55E" stopOpacity=".3" />
                      <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 80 L60 75 L120 60 L180 65 L240 40 L300 35 L360 20 L400 15 L400 100 L0 100 Z" fill="url(#g2)" />
                  <path d="M0 80 L60 75 L120 60 L180 65 L240 40 L300 35 L360 20 L400 15" stroke="#22C55E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Card>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">CHANNELS WE RUN</div>
              <h2 className="t-h1 mt-16">The right channel, for the right reason</h2>
            </div>
            <div className="grid-4 mt-48">
              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '17px' }}>Google Search</h3>
                <p className="t-small mt-8">"Vet near me" intent. Highest converting traffic on the internet.</p>
              </Card>
              <Card>
                <div className="card-icon orange">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '17px' }}>Local Service Ads</h3>
                <p className="t-small mt-8">The Google "Guaranteed" badge above the map pack. Pay per lead, not click.</p>
              </Card>
              <Card>
                <div className="card-icon purple">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '17px' }}>Meta Retargeting</h3>
                <p className="t-small mt-8">Bring back website visitors and lapsed clients with seasonal offers.</p>
              </Card>
              <Card>
                <div className="card-icon green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '17px' }}>YouTube &amp; Display</h3>
                <p className="t-small mt-8">Brand awareness in your service radius. Cheap impressions that build trust.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow blue">HOW WE'RE DIFFERENT</div>
                <h2 className="t-h1 mt-16">Tracked. Honest. Tied to revenue.</h2>
                <span className="h-rule"></span>
                <p className="t-body mt-24">
                  Every click is tagged. Every call is recorded and matched to a booking. Every booking is tied back to the ad that delivered it. You see the math — not vanity metrics.
                </p>
              </div>
              <ul className="checklist">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Dedicated phone numbers per campaign with call tracking
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Booking-software conversion tracking (Gingr, ezyVet, AVImark…)
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Negative-keyword grooming to cut wasted spend
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Bid management by service type (cost per spay vs. dental cleaning)
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Honest "stop running this" recommendations when ROAS drops
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
