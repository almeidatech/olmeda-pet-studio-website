import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function ReviewStrategy() {
  return (
    <>
      <Head>
        <title>Review Strategy Toolkit — Olmeda Pet Studio</title>
        <meta name="description" content="A free toolkit: SMS scripts, email templates, kiosk QR setups, and response frameworks for pet businesses." />
        <meta property="og:title" content="Review Strategy Toolkit — Olmeda Pet Studio" />
        <meta property="og:description" content="A free toolkit: SMS scripts, email templates, kiosk QR setups, and response frameworks for pet businesses." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Resources</span>
              <span className="sep">›</span>
              <span className="current">Review Strategy Toolkit</span>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">FREE TOOLKIT · 14 TEMPLATES</div>
                <h1 className="t-display mt-16">
                  Reviews on autopilot. <span className="accent">Even from the front desk.</span>
                </h1>
                <p className="t-lead mt-24">
                  SMS scripts, email templates, kiosk QR setups, and response frameworks — all the artifacts our clients use, ready to swipe.
                </p>

                <form className="row mt-32" style={{ maxWidth: '480px' }} onSubmit={(e) => { e.preventDefault(); alert('Demo only'); }}>
                  <input className="input" type="email" placeholder="Your work email" style={{ flex: 1 }} required />
                  <button className="btn primary" type="submit">
                    <span>Send me the toolkit</span>
                    <span className="arrow">→</span>
                  </button>
                </form>
              </div>

              <Card style={{ padding: '24px' }}>
                <div className="t-tiny" style={{ color: 'var(--orange)', fontWeight: 700, letterSpacing: '.08em' }}>SAMPLE — POST-VISIT SMS</div>
                <div style={{ marginTop: '16px', background: 'var(--blue-ice)', borderRadius: '14px 14px 14px 4px', padding: '14px', fontSize: '14px', lineHeight: 1.5, color: 'var(--fg-1)' }}>
                  Hi Sarah, hope Bella is doing great after today's visit! If we made things easy for you, would you mind leaving us a quick Google review? It takes 30 seconds and helps other pet parents find us. → bit.ly/pawsitive-review
                </div>
                <div className="t-tiny mt-16 muted">Response rate: 42% (industry avg: 8%). Sent 4 hours after appointment.</div>
              </Card>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center">
              <div className="eyebrow blue">WHAT'S INSIDE</div>
              <h2 className="t-h1 mt-16">14 templates. Zero theory.</h2>
            </div>

            <div className="grid-3 mt-48">
              <Card>
                <h3>6 SMS scripts</h3>
                <p className="t-small mt-8">By moment: post-visit, post-boarding, post-grooming, after a great review, after a 4-star, declined.</p>
              </Card>

              <Card>
                <h3>4 email templates</h3>
                <p className="t-small mt-8">First ask, friendly reminder, lapsed-client win-back, holiday thank-you with soft review nudge.</p>
              </Card>

              <Card>
                <h3>2 kiosk QR designs</h3>
                <p className="t-small mt-8">Print-ready front-desk kiosk cards in your brand colors — drop in your logo and print.</p>
              </Card>

              <Card>
                <h3>Response framework</h3>
                <p className="t-small mt-8">Templates for 5-star, 4-star, and the dreaded 1-star — written to defuse, not defend.</p>
              </Card>

              <Card>
                <h3>Bad-review intercept</h3>
                <p className="t-small mt-8">The pre-review survey that catches negative feedback before it goes public.</p>
              </Card>

              <Card style={{ borderTop: '3px solid var(--orange)' }}>
                <h3>The 90-day plan</h3>
                <p className="t-small mt-8">Realistic targets, weekly tasks, and the dashboard we use to track review velocity.</p>
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
