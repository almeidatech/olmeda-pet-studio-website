import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Olmeda Pet Studio</title>
        <meta name="description" content="Get in touch with the Olmeda Pet Studio team. Real responses, no chatbots, no pressure." />
        <meta property="og:title" content="Contact — Olmeda Pet Studio" />
        <meta property="og:description" content="Get in touch with the Olmeda Pet Studio team. Real responses, no chatbots, no pressure." />
      </Head>

      <PageLayout>
        <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">›</span>
            <span className="current">Contact</span>
          </div>
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow">GET IN TOUCH</div>
            <h1 className="t-display mt-16">
              Let's <span className="accent">talk.</span>
            </h1>
            <p className="t-lead mt-24">
              Real humans, real responses. Whether you're ready for a free audit, have a quick question, or just want to chat about pet care marketing — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
            {/* FORM */}
            <Card style={{ padding: '40px' }}>
              <h2 className="t-h2">Send us a message</h2>
              <p className="t-small mt-8 muted">We reply within one business day. Usually faster.</p>
              <form className="mt-32" onSubmit={(e) => { e.preventDefault(); alert('Thanks for reaching out! We\'ll be in touch soon.'); }}>
                <div className="grid-2" style={{ gap: '12px' }}>
                  <div className="field">
                    <label className="label">Your name</label>
                    <input className="input" type="text" placeholder="Sarah Thompson" required />
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <input className="input" type="email" placeholder="sarah@happytails.com" required />
                  </div>
                </div>
                <div className="grid-2" style={{ gap: '12px' }}>
                  <div className="field">
                    <label className="label">Business name</label>
                    <input className="input" type="text" placeholder="Happy Tails Daycare" />
                  </div>
                  <div className="field">
                    <label className="label">Phone (optional)</label>
                    <input className="input" type="tel" placeholder="(786) 555-0134" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">What's on your mind?</label>
                  <select className="input">
                    <option>I'd like a free growth audit</option>
                    <option>I have a question about your services</option>
                    <option>I want to discuss pricing</option>
                    <option>I'm interested in partnership</option>
                    <option>Media or press inquiry</option>
                    <option>Just saying hi</option>
                  </select>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <textarea className="textarea" placeholder="Tell us a bit about your business and what you're trying to solve..."></textarea>
                </div>
                <button type="submit" className="btn primary large" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Send message</span>
                  <span className="arrow">→</span>
                </button>
              </form>
            </Card>

            {/* CONTACT INFO */}
            <div>
              <Card style={{ padding: '28px' }}>
                <div className="row gap-16" style={{ marginBottom: '18px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--blue-ice)', color: 'var(--blue)', display: 'grid', placeItems: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Email</div>
                    <div className="t-small">Replies within 1 business day</div>
                  </div>
                </div>
                <a href="mailto:hello@olmedapetstudio.com" style={{ fontSize: '17px', fontWeight: 600, color: 'var(--orange)' }}>
                  hello@olmedapetstudio.com
                </a>
              </Card>

              <Card style={{ marginTop: '16px', padding: '28px' }}>
                <div className="row gap-16" style={{ marginBottom: '18px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF1E8', color: 'var(--orange)', display: 'grid', placeItems: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Phone</div>
                    <div className="t-small">Mon–Fri, 9 AM–6 PM ET</div>
                  </div>
                </div>
                <a href="tel:7869360134" style={{ fontSize: '17px', fontWeight: 600, color: 'var(--orange)' }}>
                  (786) 936-0134
                </a>
              </Card>

              <Card style={{ marginTop: '16px', padding: '28px' }}>
                <div className="row gap-16" style={{ marginBottom: '18px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F3F0FB', color: '#7C5BE8', display: 'grid', placeItems: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Offices</div>
                    <div className="t-small">Two US locations · serving nationwide</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
                  <div>
                    <div className="t-tiny" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.08em' }}>MIAMI HQ</div>
                    <div className="t-small mt-4">100 Biscayne Blvd<br/>Miami, FL 33132</div>
                  </div>
                  <div>
                    <div className="t-tiny" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.08em' }}>AUSTIN</div>
                    <div className="t-small mt-4">1100 Congress Ave<br/>Austin, TX 78701</div>
                  </div>
                </div>
              </Card>

              <Card style={{ marginTop: '16px', padding: '28px', background: 'linear-gradient(135deg,var(--navy),var(--navy-soft))', color: 'var(--white)', border: 'none' }}>
                <div className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>PREFER TO BOOK STRAIGHT</div>
                <h3 className="mt-12" style={{ color: 'var(--white)' }}>Skip the form. Book a free audit.</h3>
                <p className="t-small mt-12" style={{ color: 'rgba(255,255,255,.7)' }}>30 minutes, no pitch, just a clear picture of where your growth is hiding.</p>
                <Link className="btn primary mt-16" href="/">
                  <span>Book Free Audit</span>
                  <span className="arrow">→</span>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: '24px' }}>
        <div className="wrap">
          <div data-cta-banner></div>
        </div>
      </section>

      </PageLayout>
    </>
  );
}
