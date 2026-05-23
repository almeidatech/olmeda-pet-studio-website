import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function Miami() {
  return (
    <>
      <Head>
        <title>Pet Care Marketing in Miami — Olmeda Pet Studio</title>
        <meta name="description" content="Growth systems for veterinary clinics and dog daycares across Miami-Dade. Bilingual-ready local SEO and conversion." />
        <meta property="og:title" content="Pet Care Marketing in Miami — Olmeda Pet Studio" />
        <meta property="og:description" content="Growth systems for veterinary clinics and dog daycares across Miami-Dade. Bilingual-ready local SEO and conversion." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Locations</span>
              <span className="sep">›</span>
              <span className="current">Miami, FL</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">MIAMI, FL · PET CARE MARKETING</div>
                <h1 className="t-display mt-16">
                  Own your Miami corner <span className="accent">of Google.</span>
                </h1>
                <p className="t-lead mt-24">
                  From Coral Gables to Aventura, Miami pet parents move fast and expect bilingual service. We build Google rankings, review systems, and conversion engines that work in both languages — and convert in either.
                </p>
                <div className="row mt-32">
                  <Link className="btn primary large" href="/resources/free-audit">
                    <span>Free Miami growth audit</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
                <div className="row mt-32 gap-24">
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--blue)', lineHeight: 1 }}>18+</div>
                    <div className="t-small mt-4">Miami clients</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--orange)', lineHeight: 1 }}>EN · ES</div>
                    <div className="t-small mt-4">
                      bilingual SEO
                      <br />
                      and content
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>HQ</div>
                    <div className="t-small mt-4">our home base</div>
                  </div>
                </div>
              </div>
              <div className="photo miami" style={{ aspectRatio: '5/4', minHeight: '380px' }}></div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">MIAMI INSIGHTS</div>
              <h2 className="t-h1 mt-16">What works in this market</h2>
            </div>
            <div className="grid-3 mt-48">
              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <h3>Bilingual visibility</h3>
                <p className="t-small mt-12">62% of Miami pet parents search in Spanish at least sometimes. We optimize bilingually — and most agencies don't.</p>
              </Card>

              <Card>
                <div className="card-icon orange">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33" />
                  </svg>
                </div>
                <h3>Seasonal swing</h3>
                <p className="t-small mt-12">Snowbird season (Nov–April) doubles demand. We pre-book it. Hurricane prep (May–Oct) is a real revenue lever.</p>
              </Card>

              <Card>
                <div className="card-icon purple">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-2 14H7L5 6" />
                  </svg>
                </div>
                <h3>Premium boarding</h3>
                <p className="t-small mt-12">Miami's boarding market is dominated by 3 chains. We position independents as the boutique choice — and they win.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
              <div>
                <div className="eyebrow blue">MIAMI CLIENTS</div>
                <h2 className="t-h1 mt-12">Local growth stories</h2>
              </div>
              <Link className="btn text-link" href="/work">
                All case studies <span className="arrow">→</span>
              </Link>
            </div>
            <div className="grid-3" style={{ gap: '24px' }}>
              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo dog-grooming" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <span className="tag">HYBRID</span>
                  <h3 className="mt-8">The Pet Salon &amp; Spa</h3>
                  <p className="t-small mt-8">Grooming + daycare hybrid. 3.1× leads. Coral Gables.</p>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo daycare" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <span className="tag">DAYCARE</span>
                  <h3 className="mt-8">Coconut Grove Pet Resort</h3>
                  <p className="t-small mt-8">88% occupancy on a 2-mile waitlist. Coconut Grove.</p>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo cat-portrait" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <span className="tag">VETERINARY</span>
                  <h3 className="mt-8">Brickell Animal Wellness</h3>
                  <p className="t-small mt-8">From 30 reviews to 280 in 7 months. Brickell.</p>
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
