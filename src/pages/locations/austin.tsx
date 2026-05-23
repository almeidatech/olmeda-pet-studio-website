import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function Austin() {
  return (
    <>
      <Head>
        <title>Pet Care Marketing in Austin — Olmeda Pet Studio</title>
        <meta name="description" content="Growth systems for veterinary clinics and dog daycares in Austin, TX. Local SEO, reviews, and conversion built for your market." />
        <meta property="og:title" content="Pet Care Marketing in Austin — Olmeda Pet Studio" />
        <meta property="og:description" content="Growth systems for veterinary clinics and dog daycares in Austin, TX. Local SEO, reviews, and conversion built for your market." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Locations</span>
              <span className="sep">›</span>
              <span className="current">Austin, TX</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">AUSTIN, TX · PET CARE MARKETING</div>
                <h1 className="t-display mt-16">
                  Win Austin pet parents <span className="accent">on Google.</span>
                </h1>
                <p className="t-lead mt-24">
                  From 78704 to Round Rock, Austin pet parents search "vet near me" 1,400+ times a day. We help independent clinics, daycares, and boarding facilities show up first — and convert that traffic into booked appointments.
                </p>
                <div className="row mt-32">
                  <Link className="btn primary large" href="/resources/free-audit">
                    <span>Free Austin growth audit</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
                <div className="row mt-32 gap-24">
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--blue)', lineHeight: 1 }}>22+</div>
                    <div className="t-small mt-4">Austin clients</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--orange)', lineHeight: 1 }}>1,400</div>
                    <div className="t-small mt-4">
                      daily "vet near me"
                      <br />
                      searches in metro
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>100%</div>
                    <div className="t-small mt-4">remote, locally focused</div>
                  </div>
                </div>
              </div>
              <div className="photo austin" style={{ aspectRatio: '5/4', minHeight: '380px' }}></div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">AUSTIN INSIGHTS</div>
              <h2 className="t-h1 mt-16">What works in this market</h2>
            </div>
            <div className="grid-3 mt-48">
              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Neighborhood targeting</h3>
                <p className="t-small mt-12">South Congress, Mueller, East Austin, and Round Rock all behave like distinct markets. We build per-neighborhood SEO.</p>
              </Card>

              <Card>
                <div className="card-icon orange">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3>Premium pet parents</h3>
                <p className="t-small mt-12">Austin's average pet care spend is 38% above the national mean. Position above price-competing chains.</p>
              </Card>

              <Card>
                <div className="card-icon purple">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <h3>Tech-savvy bookings</h3>
                <p className="t-small mt-12">Austin pet parents expect online booking. A clinic still using phone-only loses 31% of after-hours leads.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
              <div>
                <div className="eyebrow blue">AUSTIN CLIENTS</div>
                <h2 className="t-h1 mt-12">Local growth stories</h2>
              </div>
              <Link className="btn text-link" href="/work">
                All case studies <span className="arrow">→</span>
              </Link>
            </div>
            <div className="grid-3" style={{ gap: '24px' }}>
              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo dog-portrait" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <span className="tag">DOG SANCTUARY</span>
                  <h3 className="mt-8">Aylas Acres</h3>
                  <p className="t-small mt-8">+1,290% website traffic in 4 months. South Austin.</p>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo clinic-exterior" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <span className="tag">VETERINARY</span>
                  <h3 className="mt-8">Pawsitive Care Animal Hospital</h3>
                  <p className="t-small mt-8">3.2 → 4.9 stars, 2.4× new patients. Mueller.</p>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo vet-team" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <span className="tag">VETERINARY</span>
                  <h3 className="mt-8">Anderson Pet Clinic</h3>
                  <p className="t-small mt-8">First sustained growth in a decade. Round Rock.</p>
                </div>
              </Card>
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
