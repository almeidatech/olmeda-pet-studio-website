import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers — Olmeda Pet Studio</title>
        <meta name="description" content="Build growth systems for veterinary clinics and dog daycares. Remote, US-based, dog-friendly." />
        <meta property="og:title" content="Careers — Olmeda Pet Studio" />
        <meta property="og:description" content="Build growth systems for veterinary clinics and dog daycares. Remote, US-based, dog-friendly." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span className="current">Careers</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1.05fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">JOIN THE STUDIO</div>
                <h1 className="t-display mt-16">
                  Build the things that <span className="accent">fill schedules.</span>
                </h1>
                <p className="t-lead mt-24">
                  Small team. Big impact. We work with pet care businesses that genuinely deserve to win — and we'd rather hire one great person than three okay ones.
                </p>
                <div className="row mt-32 gap-24">
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--blue)', lineHeight: 1 }}>100% remote</div>
                    <div className="t-small mt-4">US-based</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--orange)', lineHeight: 1 }}>4-day week</div>
                    <div className="t-small mt-4">Fridays optional</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>Dog-friendly</div>
                    <div className="t-small mt-4">obviously</div>
                  </div>
                </div>
              </div>
              <div className="photo team-meeting" style={{ aspectRatio: '5/4', minHeight: '380px' }}></div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">HOW WE WORK</div>
              <h2 className="t-h1 mt-16">No fluff. No hero culture.</h2>
            </div>
            <div className="grid-3 mt-48">
              <Card>
                <div className="card-icon orange">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>Calm pace, real focus</h3>
                <p className="t-small mt-12">35 hours, four days, zero crunch. We do better work rested.</p>
              </Card>

              <Card>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Ownership beats hours</h3>
                <p className="t-small mt-12">Run your clients like you'd run your own business. We don't track hours, we track results.</p>
              </Card>

              <Card>
                <div className="card-icon purple">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Honesty over hierarchy</h3>
                <p className="t-small mt-12">No politics. If a client decision is wrong, say so. If a coworker is right, change your mind.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
              <div>
                <div className="eyebrow blue">OPEN ROLES</div>
                <h2 className="t-h1 mt-12">We're hiring for three positions</h2>
              </div>
            </div>
            <div className="col" style={{ gap: '16px' }}>
              <Card style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', padding: '28px 32px' }}>
                <div>
                  <div className="row gap-8">
                    <span className="tag orange">FULL TIME</span>
                    <span className="tag">REMOTE · US</span>
                  </div>
                  <h3 className="mt-12">Senior Growth Strategist</h3>
                  <p className="t-small mt-8">Own a portfolio of 8–10 pet care clients. Drive their strategy, KPIs, and quarterly roadmaps. 5+ years agency or in-house local marketing.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="t-tiny" style={{ color: 'var(--fg-3)' }}>SALARY</div>
                  <div style={{ fontWeight: 700, color: 'var(--fg-1)' }}>$110–140k + bonus</div>
                  <div className="btn text-link mt-8">
                    Apply <span className="arrow">→</span>
                  </div>
                </div>
              </Card>

              <Card style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', padding: '28px 32px' }}>
                <div>
                  <div className="row gap-8">
                    <span className="tag orange">FULL TIME</span>
                    <span className="tag">REMOTE · US</span>
                  </div>
                  <h3 className="mt-12">Paid Media Specialist (Google &amp; Meta)</h3>
                  <p className="t-small mt-8">Run Google Ads, LSAs, and Meta campaigns. Live in the data. Tell us when to kill a campaign before we ask. 3+ years.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="t-tiny" style={{ color: 'var(--fg-3)' }}>SALARY</div>
                  <div style={{ fontWeight: 700, color: 'var(--fg-1)' }}>$85–105k</div>
                  <div className="btn text-link mt-8">
                    Apply <span className="arrow">→</span>
                  </div>
                </div>
              </Card>

              <Card style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', padding: '28px 32px' }}>
                <div>
                  <div className="row gap-8">
                    <span className="tag orange">FULL TIME</span>
                    <span className="tag">REMOTE · US</span>
                  </div>
                  <h3 className="mt-12">Content &amp; SEO Lead</h3>
                  <p className="t-small mt-8">Write the content that ranks pet businesses on Google. SEO chops, healthcare or local-services background a plus.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="t-tiny" style={{ color: 'var(--fg-3)' }}>SALARY</div>
                  <div style={{ fontWeight: 700, color: 'var(--fg-1)' }}>$80–100k</div>
                  <div className="btn text-link mt-8">
                    Apply <span className="arrow">→</span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="center mt-48">
              <p className="t-body">
                Don't see your role? <a href="mailto:careers@olmedapetstudio.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>Email us anyway.</a>
              </p>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">BENEFITS</div>
              <h2 className="t-h1 mt-16">What you actually get</h2>
            </div>
            <div className="grid-4 mt-48">
              <Card>
                <h3 style={{ fontSize: '16px' }}>Health, dental, vision</h3>
                <p className="t-small mt-8">100% covered for you, 70% for family.</p>
              </Card>
              <Card>
                <h3 style={{ fontSize: '16px' }}>4-day work week</h3>
                <p className="t-small mt-8">Fridays off, 35-hour weeks, no crunch.</p>
              </Card>
              <Card>
                <h3 style={{ fontSize: '16px' }}>Unlimited PTO</h3>
                <p className="t-small mt-8">Minimum 4 weeks taken. We track that.</p>
              </Card>
              <Card>
                <h3 style={{ fontSize: '16px' }}>$2,500 home office</h3>
                <p className="t-small mt-8">Year one stipend, refreshed every 3 years.</p>
              </Card>
              <Card>
                <h3 style={{ fontSize: '16px' }}>Profit share</h3>
                <p className="t-small mt-8">10% of company profit split with the team annually.</p>
              </Card>
              <Card>
                <h3 style={{ fontSize: '16px' }}>Pet care credit</h3>
                <p className="t-small mt-8">$100/month toward your own pet's care.</p>
              </Card>
              <Card>
                <h3 style={{ fontSize: '16px' }}>2 in-person weeks</h3>
                <p className="t-small mt-8">Miami or Austin, all expenses, twice a year.</p>
              </Card>
              <Card>
                <h3 style={{ fontSize: '16px' }}>Learning budget</h3>
                <p className="t-small mt-8">$1,500/year for courses, books, conferences.</p>
              </Card>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
