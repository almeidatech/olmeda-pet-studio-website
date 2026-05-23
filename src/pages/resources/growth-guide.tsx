import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function GrowthGuide() {
  return (
    <>
      <Head>
        <title>Pet Business Growth Guide — Olmeda Pet Studio</title>
        <meta name="description" content="A practical 90-day growth playbook for veterinary clinics and dog daycares — free." />
        <meta property="og:title" content="Pet Business Growth Guide — Olmeda Pet Studio" />
        <meta property="og:description" content="A practical 90-day growth playbook for veterinary clinics and dog daycares — free." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Resources</span>
              <span className="sep">›</span>
              <span className="current">Pet Business Growth Guide</span>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">FREE 90-DAY PLAYBOOK</div>
                <h1 className="t-display mt-16">
                  A real plan for the next <span className="accent">90 days.</span>
                </h1>
                <p className="t-lead mt-24">
                  Not theory. A week-by-week growth playbook covering visibility, reviews, ads, and conversion — built specifically for veterinary clinics and dog daycares. Steal anything you want.
                </p>

                <form className="row mt-32" style={{ maxWidth: '480px' }} onSubmit={(e) => { e.preventDefault(); alert('Demo only'); }}>
                  <input className="input" type="email" placeholder="Your work email" style={{ flex: 1 }} required />
                  <button className="btn primary" type="submit">
                    <span>Send me the playbook</span>
                    <span className="arrow">→</span>
                  </button>
                </form>
              </div>

              <div className="photo dashboard" style={{ aspectRatio: '5/4', minHeight: '340px' }}></div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center">
              <div className="eyebrow blue">INSIDE</div>
              <h2 className="t-h1 mt-16">90 days, 12 weeks, one plan</h2>
            </div>

            <div className="grid-4 mt-48" style={{ gap: '20px' }}>
              <Card>
                <div className="step-row" style={{ marginBottom: '14px' }}>
                  <div className="step">01</div>
                </div>
                <h3 style={{ fontSize: '17px' }}>Weeks 1–3</h3>
                <p className="t-small mt-8">Audit. Foundation. Tracking installed. Quick wins shipped.</p>
              </Card>

              <Card>
                <div className="step-row" style={{ marginBottom: '14px' }}>
                  <div className="step">02</div>
                </div>
                <h3 style={{ fontSize: '17px' }}>Weeks 4–6</h3>
                <p className="t-small mt-8">Google Business Profile rebuild. Review automation live. First content shipped.</p>
              </Card>

              <Card>
                <div className="step-row" style={{ marginBottom: '14px' }}>
                  <div className="step">03</div>
                </div>
                <h3 style={{ fontSize: '17px' }}>Weeks 7–9</h3>
                <p className="t-small mt-8">Paid ads in market. Website conversion optimization. First map-pack movement.</p>
              </Card>

              <Card style={{ borderTop: '3px solid var(--orange)' }}>
                <div className="step-row" style={{ marginBottom: '14px' }}>
                  <div className="step" style={{ background: 'var(--orange)' }}>04</div>
                </div>
                <h3 style={{ fontSize: '17px' }}>Weeks 10–12</h3>
                <p className="t-small mt-8">Optimize. Double down on what worked. Quarterly plan for the next 90.</p>
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
