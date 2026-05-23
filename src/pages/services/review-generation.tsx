import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';
import { ProcessStepCard } from '@/components/ProcessStepCard';

export default function ReviewGeneration() {
  return (
    <>
      <Head>
        <title>Review Generation — Olmeda Pet Studio</title>
        <meta name="description" content="Automated systems that turn happy pet parents into 5-star reviews — without feeling pushy." />
        <meta property="og:title" content="Review Generation — Olmeda Pet Studio" />
        <meta property="og:description" content="Automated systems that turn happy pet parents into 5-star reviews — without feeling pushy." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <Link href="/services">Services</Link>
              <span className="sep">›</span>
              <span className="current">Review Generation</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.05fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">PILLAR 02 · TRUST</div>
                <h1 className="t-display mt-16">
                  Turn happy pet parents into <span className="accent">five-star proof.</span>
                </h1>
                <p className="t-lead mt-24">
                  Reviews are the deciding factor before a single call is made. We build the system that turns your everyday delighted clients into a steady stream of fresh, authentic 5-star reviews.
                </p>
                <div className="row mt-32">
                  <Link className="btn primary large" href="/resources/free-audit">
                    <span>Audit my reviews</span>
                    <span className="arrow">→</span>
                  </Link>
                  <Link className="btn ghost" href="/resources/review-strategy">
                    <span>Get the strategy guide</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>

              <Card style={{ padding: '32px' }}>
                <div className="row" style={{ justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div>
                    <div className="t-tiny" style={{ color: 'var(--orange)', fontWeight: 700, letterSpacing: '.08em' }}>
                      LAST 30 DAYS
                    </div>
                    <div style={{ fontWeight: 700, marginTop: '4px' }}>New 5-star reviews</div>
                  </div>
                  <span className="tag green">+24 this month</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '140px', padding: '12px 0', borderBottom: '1px solid var(--gray-100)' }}>
                  <div style={{ flex: 1, height: '25%', background: 'var(--blue-ice)', borderRadius: '6px 6px 0 0' }}></div>
                  <div style={{ flex: 1, height: '40%', background: 'var(--blue-ice)', borderRadius: '6px 6px 0 0' }}></div>
                  <div style={{ flex: 1, height: '35%', background: 'var(--blue-ice)', borderRadius: '6px 6px 0 0' }}></div>
                  <div style={{ flex: 1, height: '60%', background: 'var(--blue-ice)', borderRadius: '6px 6px 0 0' }}></div>
                  <div style={{ flex: 1, height: '55%', background: 'var(--blue-ice)', borderRadius: '6px 6px 0 0' }}></div>
                  <div style={{ flex: 1, height: '75%', background: '#FFE6D2', borderRadius: '6px 6px 0 0' }}></div>
                  <div style={{ flex: 1, height: '85%', background: '#FFD0B0', borderRadius: '6px 6px 0 0' }}></div>
                  <div style={{ flex: 1, height: '95%', background: 'var(--orange)', borderRadius: '6px 6px 0 0' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px' }} className="t-tiny">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--gray-100)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--fg-1)', lineHeight: 1 }}>4.9</div>
                    <div className="t-tiny" style={{ color: 'var(--orange)' }}>★★★★★</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '14px' }}>From 3.4 → 4.9</div>
                    <div className="t-tiny" style={{ color: 'var(--fg-3)' }}>In 6 months · 327 total reviews</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">THE SYSTEM</div>
              <h2 className="t-h1 mt-16">Reviews on autopilot. No begging.</h2>
              <p className="t-lead mt-16 muted">
                Every happy pet parent gets the right ask at the right moment — automatically.
              </p>
            </div>

            <div className="grid-4 mt-48" style={{ gap: '20px' }}>
              <ProcessStepCard step={1} title="Appointment" description="Patient gets care. You're already great at this." />
              <ProcessStepCard step={2} title="Auto-Ask" description="SMS or email goes out 4 hours later asking how it went — feels like a thank-you, not a chore." />
              <ProcessStepCard step={3} title="Filter" description="5-star path goes straight to Google. Lower ratings stay private so you can fix issues quietly." />
              <ProcessStepCard step={4} title="Respond & Track" description="We respond to every review on your behalf. You see the numbers climb." highlightColor="var(--orange)" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow blue">WHAT'S INCLUDED</div>
                <h2 className="t-h1 mt-16">More than a tool. A system.</h2>
                <span className="h-rule"></span>
                <p className="t-body mt-24">
                  Software alone doesn't build a 5-star reputation. We bring the playbook, the templates, the response strategy, and the human follow-through.
                </p>
              </div>
              <ul className="checklist">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  SMS + email review requests integrated with your booking software
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  In-clinic QR code kiosks for the right moment
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Negative-feedback intercept (resolve privately before it goes public)
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Custom response templates — every review answered in 24 hours
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Photo &amp; testimonial requests woven into the same flow
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Monthly sentiment + theme reporting (what clients actually love)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section navy" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
          <div className="wrap center" style={{ position: 'relative', zIndex: 2 }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>WHY IT MATTERS</div>
            <h2 className="t-display mt-16" style={{ color: 'var(--white)', fontSize: 'clamp(36px,4vw,56px)' }}>
              93% of pet parents read reviews <br />
              before choosing a vet or daycare.
            </h2>
            <p className="t-lead mt-24" style={{ color: 'rgba(255,255,255,.7)', maxWidth: '620px', margin: '24px auto 0' }}>
              A 1-star difference (4.0 → 5.0) is worth roughly <strong style={{ color: 'var(--orange)' }}>42% more clicks</strong> on Google. That's not vanity — that's revenue.
            </p>
          </div>
        </section>

        <section className="section-sm" style={{ marginTop: '48px' }}>
          <div className="wrap">
            <div data-cta-banner></div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
