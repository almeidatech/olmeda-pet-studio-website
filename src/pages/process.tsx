import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function Process() {
  return (
    <>
      <Head>
        <title>Our Process — Olmeda Pet Studio</title>
        <meta name="description" content="How we work with pet businesses, from audit to scale. A predictable, transparent process." />
        <meta property="og:title" content="Our Process — Olmeda Pet Studio" />
        <meta property="og:description" content="How we work with pet businesses, from audit to scale. A predictable, transparent process." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span className="current">Our Process</span>
            </div>
            <div style={{ maxWidth: '780px' }}>
              <div className="eyebrow">HOW WE WORK</div>
              <h1 className="t-display mt-16">
                From audit to scale, <span className="accent">no surprises.</span>
              </h1>
              <p className="t-lead mt-24">
                Predictable timelines. Transparent reporting. The same four phases every time — refined across 100+ pet care businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="col" style={{ gap: '32px' }}>
              <Card style={{ padding: '48px', display: 'grid', gridTemplateColumns: '80px 1fr 320px', gap: '32px', alignItems: 'flex-start' }}>
                <div className="step" style={{ width: '64px', height: '64px', fontSize: '18px' }}>01</div>
                <div>
                  <div className="eyebrow blue">WEEKS 1–3</div>
                  <h2 className="t-h1 mt-12" style={{ fontSize: '30px' }}>Audit &amp; Strategy</h2>
                  <p className="t-body mt-16">We pull your real data: Google Business Profile, local rankings, review history, website analytics, and competitor positioning. By week 3, you have a one-page growth roadmap with the top 5 opportunities ranked by ROI, the realistic 6-month outcome range, and the specific work it'll take to get there.</p>
                </div>
                <ul className="checklist">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Full presence audit
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    3 competitor breakdowns
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    90-day roadmap
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Tracking installed
                  </li>
                </ul>
              </Card>

              <Card style={{ padding: '48px', display: 'grid', gridTemplateColumns: '80px 1fr 320px', gap: '32px', alignItems: 'flex-start', borderLeft: '3px solid var(--orange)' }}>
                <div className="step" style={{ width: '64px', height: '64px', fontSize: '18px', background: 'var(--orange)' }}>02</div>
                <div>
                  <div className="eyebrow">WEEKS 4–12</div>
                  <h2 className="t-h1 mt-12" style={{ fontSize: '30px' }}>Implement &amp; Optimize</h2>
                  <p className="t-body mt-16">We ship. Google Business Profile rebuild, citation cleanup, review automation, ad campaigns in market, website conversion fixes. Every Friday you get a one-page progress note: what shipped, what we learned, what's next. No mystery meetings.</p>
                </div>
                <ul className="checklist">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Weekly Friday digest
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Dedicated Slack channel
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Monthly strategy call
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Asset library you own
                  </li>
                </ul>
              </Card>

              <Card style={{ padding: '48px', display: 'grid', gridTemplateColumns: '80px 1fr 320px', gap: '32px', alignItems: 'flex-start' }}>
                <div className="step" style={{ width: '64px', height: '64px', fontSize: '18px' }}>03</div>
                <div>
                  <div className="eyebrow blue">MONTHS 4–6</div>
                  <h2 className="t-h1 mt-12" style={{ fontSize: '30px' }}>Measure &amp; Improve</h2>
                  <p className="t-body mt-16">By month four, you should be in the map pack and bookings should be lifting. We double down on what's working and quietly retire what's not. No one-channel obsession — we move budget toward whichever pillar is paying back fastest.</p>
                </div>
                <ul className="checklist">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Live ROI dashboard
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Quarterly business review
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    4-month guarantee checkpoint
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Roadmap refresh
                  </li>
                </ul>
              </Card>

              <Card style={{ padding: '48px', display: 'grid', gridTemplateColumns: '80px 1fr 320px', gap: '32px', alignItems: 'flex-start' }}>
                <div className="step" style={{ width: '64px', height: '64px', fontSize: '18px' }}>04</div>
                <div>
                  <div className="eyebrow blue">MONTHS 6+</div>
                  <h2 className="t-h1 mt-12" style={{ fontSize: '30px' }}>Grow &amp; Scale</h2>
                  <p className="t-body mt-16">This is where the system compounds. New location launch? Premium service line? Multi-clinic strategy? We're already set up to scale you — same playbook, same team, same Friday digest, broader scope.</p>
                </div>
                <ul className="checklist">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Multi-location SEO
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Brand systems
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Premium service launches
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Exec advisory
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--navy)', textAlign: 'center', position: 'relative' }}>
          <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
            <div className="eyebrow" style={{ color: 'var(--orange)' }}>THE GUARANTEE</div>
            <h2 className="t-h1 mt-16" style={{ color: 'var(--white)', maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto' }}>
              If we don't deliver a measurable lift in calls, direction requests, and bookings by month four — we keep working <span className="accent" style={{ color: 'var(--orange)' }}>free</span> until we do.
            </h2>
            <p className="t-lead mt-24" style={{ color: 'rgba(255,255,255,.65)', maxWidth: '580px', margin: '24px auto 0' }}>
              It's the same model we'd want as a client. We win when you win.
            </p>
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
