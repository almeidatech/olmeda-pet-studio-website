import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Olmeda Pet Studio</title>
        <meta name="description" content="How Olmeda Pet Studio collects, uses, and protects your data." />
        <meta property="og:title" content="Privacy Policy — Olmeda Pet Studio" />
        <meta property="og:description" content="How Olmeda Pet Studio collects, uses, and protects your data." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Legal</span>
              <span className="sep">›</span>
              <span className="current">Privacy Policy</span>
            </div>
            <div style={{ maxWidth: '680px' }}>
              <div className="eyebrow">LEGAL</div>
              <h1 className="t-display mt-16">
                Privacy <span className="accent">Policy.</span>
              </h1>
              <p className="t-lead mt-24">Plain English. No dark patterns. Updated May 1, 2026.</p>
            </div>
          </div>
        </section>

        <section className="section-sm">
          <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '48px', alignItems: 'flex-start' }}>
            <aside style={{ position: 'sticky', top: '90px' }}>
              <div className="t-tiny" style={{ fontWeight: 700, letterSpacing: '.08em', color: 'var(--fg-3)', marginBottom: '12px' }}>
                ON THIS PAGE
              </div>
              <nav className="col" style={{ gap: '8px' }}>
                <a href="#what" style={{ color: 'var(--fg-2)', fontSize: '14px' }}>
                  What we collect
                </a>
                <a href="#why" style={{ color: 'var(--fg-2)', fontSize: '14px' }}>
                  Why we collect it
                </a>
                <a href="#share" style={{ color: 'var(--fg-2)', fontSize: '14px' }}>
                  Who we share with
                </a>
                <a href="#cookies" style={{ color: 'var(--fg-2)', fontSize: '14px' }}>
                  Cookies &amp; analytics
                </a>
                <a href="#rights" style={{ color: 'var(--fg-2)', fontSize: '14px' }}>
                  Your rights
                </a>
                <a href="#contact" style={{ color: 'var(--fg-2)', fontSize: '14px' }}>
                  Contact us
                </a>
              </nav>
            </aside>
            <article style={{ maxWidth: '720px' }}>
              <section id="what">
                <h2 className="t-h2">What we collect</h2>
                <p className="t-body mt-16">
                  When you book an audit, subscribe to our newsletter, or use our website, we collect: your name, business name, work email, phone number (if you provide it), and information about your business that you choose to share. We also collect standard server logs (IP, user agent, referrer) for security and analytics.
                </p>
              </section>
              <section id="why" className="mt-48">
                <h2 className="t-h2">Why we collect it</h2>
                <p className="t-body mt-16">
                  To respond to your inquiry, deliver the services or content you requested, send the newsletter you signed up for, and improve our site. That's it. We never sell, rent, or trade your personal information.
                </p>
              </section>
              <section id="share" className="mt-48">
                <h2 className="t-h2">Who we share with</h2>
                <p className="t-body mt-16">
                  We use trusted third-party services to run our business: HubSpot (CRM), Google Workspace (email), Stripe (payments), Vercel (hosting), Plausible (privacy-friendly analytics). Each of them has its own privacy policy and processes your data on our behalf under signed agreements. We don't share with anyone else without your explicit consent — period.
                </p>
              </section>
              <section id="cookies" className="mt-48">
                <h2 className="t-h2">Cookies &amp; analytics</h2>
                <p className="t-body mt-16">
                  We use Plausible Analytics, which is cookie-free and doesn't collect personal data. We don't use Facebook Pixel, Google Analytics, or third-party advertising cookies on this site. The only cookies we set are functional (your form state, dark-mode preference). You can block them — nothing important will break.
                </p>
              </section>
              <section id="rights" className="mt-48">
                <h2 className="t-h2">Your rights</h2>
                <p className="t-body mt-16">
                  You can request a copy of all data we hold about you, ask us to delete it, or correct anything that's wrong. Email{' '}
                  <a href="mailto:privacy@olmedapetstudio.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>
                    privacy@olmedapetstudio.com
                  </a>{' '}
                  and we'll respond within 7 business days.
                </p>
              </section>
              <section id="contact" className="mt-48">
                <h2 className="t-h2">Contact us</h2>
                <p className="t-body mt-16">
                  Questions, concerns, or just want to know more? Email{' '}
                  <a href="mailto:privacy@olmedapetstudio.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>
                    privacy@olmedapetstudio.com
                  </a>{' '}
                  or mail us at 100 Biscayne Blvd, Miami, FL 33132.
                </p>
              </section>
            </article>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
