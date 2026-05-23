import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';
import { MetricCard } from '@/components/MetricCard';

export default function DogDaycares() {
  return (
    <>
      <Head>
        <title>For Dog Daycares — Olmeda Pet Studio</title>
        <meta name="description" content="Daycares and boarding facilities targeting premium clients and 85%+ year-round occupancy." />
        <meta property="og:title" content="For Dog Daycares — Olmeda Pet Studio" />
        <meta property="og:description" content="Daycares and boarding facilities targeting premium clients and 85%+ year-round occupancy." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">›</span>
            <Link href="/services">Services</Link>
            <span className="sep">›</span>
            <span className="current">For Dog Daycares</span>
          </div>
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.05fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">FOR DAYCARE &amp; BOARDING</div>
              <h1 className="t-display mt-16">
                85% occupancy. <span className="accent">All year round.</span>
              </h1>
              <p className="t-lead mt-24">
                Stop discounting. Stop dreading January. Build a daycare brand that fills its calendar at full price — through Google rankings, premium positioning, and a booking experience pet parents trust.
              </p>
              <div className="row mt-32">
                <Link className="btn primary large" href="/resources/free-audit">
                  <span>Free occupancy audit</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="photo daycare" style={{ aspectRatio: '5/4', minHeight: '380px' }}></div>
          </div>
        </div>
        </section>

        <section className="section gray">
          <div className="wrap">
          <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="eyebrow blue">DAYCARE-SPECIFIC PROBLEMS</div>
            <h2 className="t-h1 mt-16">We've fixed all of these</h2>
          </div>
          <div className="grid-3 mt-48">
            <Card>
              <div className="card-icon orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Seasonal dips</h3>
              <p className="t-small mt-12">
                January and September empty rooms. We pre-book holiday season in October and run trial-day campaigns in slow months.
              </p>
            </Card>
            <Card>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Price competition</h3>
              <p className="t-small mt-12">
                When you're a Google search result, you compete on price. When you're the trusted brand, you charge what you're worth.
              </p>
            </Card>
            <Card>
              <div className="card-icon purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <h3>Wrong clientele</h3>
              <p className="t-small mt-12">
                Cheap-deal hunters cost more to serve than they pay. We attract pet parents who treat their dog like family — and budget like it.
              </p>
            </Card>
          </div>
        </div>
        </section>

        <section className="section">
          <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow blue">THE PREMIUM PLAYBOOK</div>
              <h2 className="t-h1 mt-16">Five moves we make in 90 days</h2>
              <span className="h-rule"></span>
            </div>
            <ul className="checklist">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <div>
                  <strong>Rebrand the listing:</strong> photos of real play groups, premium amenities, and your team — the things pet parents actually evaluate.
                </div>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <div>
                  <strong>Map-pack push:</strong> top-3 for "dog daycare," "dog boarding," and "[neighborhood] daycare" in your area.
                </div>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <div>
                  <strong>Trial-day funnel:</strong> low-friction first booking that converts to a multi-month package on day one.
                </div>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <div>
                  <strong>Holiday pre-book:</strong> October campaigns that fill Thanksgiving and Christmas at full rate.
                </div>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <div>
                  <strong>Reviews on autopilot:</strong> 5-star momentum that lets you charge premium rates without justification.
                </div>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section className="section gray">
          <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div className="photo dog-running" style={{ aspectRatio: '5/4', minHeight: '380px' }}></div>
            <div>
              <div className="eyebrow blue">REAL CASE</div>
              <h2 className="t-h1 mt-16">Happy Tails went from 58% to 91%</h2>
              <span className="h-rule"></span>
              <p className="t-body mt-24">
                Suburban Dallas daycare with 32 kennels. Stuck at ~58% occupancy with seasonal dips into the 40s. Six months in: 91% average occupancy, full waitlist for boarding, and a 22% price increase that didn't lose a single client.
              </p>
              <div className="grid-3 mt-32" style={{ gap: '16px' }}>
                <MetricCard number="91%" color="var(--blue)" label={<>occupancy<br />(was 58%)</>} />
                <MetricCard number="+$24k" color="var(--orange)" label={<>monthly<br />revenue</>} />
                <MetricCard number="+22%" color="var(--green)" label={<>price increase<br />0% churn</>} />
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
