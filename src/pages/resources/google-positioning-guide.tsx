import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function GooglePositioningGuide() {
  return (
    <>
      <Head>
        <title>Google Positioning Guide — Olmeda Pet Studio</title>
        <meta name="description" content="Free guide: every signal Google uses to rank pet businesses in the map pack — and how to win each one." />
        <meta property="og:title" content="Google Positioning Guide — Olmeda Pet Studio" />
        <meta property="og:description" content="Free guide: every signal Google uses to rank pet businesses in the map pack — and how to win each one." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Resources</span>
              <span className="sep">›</span>
              <span className="current">Google Positioning Guide</span>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">FREE GUIDE · 32 PAGES</div>
                <h1 className="t-display mt-16">
                  The pet business owner's guide to <span className="accent">winning Google.</span>
                </h1>
                <p className="t-lead mt-24">
                  Every signal Google uses to rank veterinary clinics and dog daycares in the local map pack — explained in plain English, with the exact actions to take.
                </p>

                <form className="row mt-32" style={{ maxWidth: '480px' }} onSubmit={(e) => { e.preventDefault(); alert('Demo only'); }}>
                  <input className="input" type="email" placeholder="Your work email" style={{ flex: 1 }} required />
                  <button className="btn primary" type="submit">
                    <span>Send me the guide</span>
                    <span className="arrow">→</span>
                  </button>
                </form>
                <div className="t-tiny mt-12 muted">PDF delivered instantly. No paywall. No follow-up sequence.</div>
              </div>

              <Card style={{ padding: '32px', background: 'linear-gradient(135deg,#0B1F3A,#14294a)', color: 'var(--white)', border: 'none' }}>
                <div className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>INSIDE THE GUIDE</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--orange)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '12px', flex: 'none' }}>1</span>
                    <span>The 200+ signals Google uses (only 14 matter)</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--orange)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '12px', flex: 'none' }}>2</span>
                    <span>How to write a Google Business Profile that ranks</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--orange)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '12px', flex: 'none' }}>3</span>
                    <span>The category &amp; service trick most clinics miss</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--orange)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '12px', flex: 'none' }}>4</span>
                    <span>Reviews: how many, how fast, how to ask</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--orange)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '12px', flex: 'none' }}>5</span>
                    <span>Photos, posts, and Q&amp;A that actually move rankings</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--orange)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '12px', flex: 'none' }}>6</span>
                    <span>The 6 free tools we use every week</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">SAMPLE</div>
              <h2 className="t-h1 mt-16">A taste of what's inside</h2>
            </div>
            <div className="grid-3 mt-48">
              <Card>
                <h3>Chapter 2 — The Map Pack</h3>
                <p className="t-small mt-12">
                  "Proximity is roughly 30% of the algorithm. Relevance is 30%. Prominence (reviews, citations, links) is the rest. You can't fake proximity — but the other 70% is yours to win."
                </p>
              </Card>

              <Card>
                <h3>Chapter 5 — Reviews</h3>
                <p className="t-small mt-12">
                  "Velocity matters more than total count. A clinic with 80 reviews getting 4 new ones per week will outrank a clinic with 400 reviews getting one per month. Recency is a signal."
                </p>
              </Card>

              <Card>
                <h3>Chapter 7 — Citations</h3>
                <p className="t-small mt-12">
                  "NAP consistency across 50+ directories. We list the 12 that move the needle for pet care — and the 30+ that are a waste of your time."
                </p>
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
