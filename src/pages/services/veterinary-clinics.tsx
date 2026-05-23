import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';
import { MetricCard } from '@/components/MetricCard';

export default function VeterinaryClinics() {
  return (
    <>
      <Head>
        <title>For Veterinary Clinics — Olmeda Pet Studio</title>
        <meta name="description" content="Growth systems built for independent veterinary clinics fighting corporate chains for visibility and trust." />
        <meta property="og:title" content="For Veterinary Clinics — Olmeda Pet Studio" />
        <meta property="og:description" content="Growth systems built for independent veterinary clinics fighting corporate chains for visibility and trust." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <Link href="/services">Services</Link>
              <span className="sep">›</span>
              <span className="current">For Veterinary Clinics</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.05fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">FOR INDEPENDENT VETS</div>
                <h1 className="t-display mt-16">
                  Beat the chains <span className="accent">without the chain budget.</span>
                </h1>
                <p className="t-lead mt-24">
                  Independent veterinary clinics deliver the care pet parents actually want. We make sure Google shows it. More new patients, higher lifetime value, real-time tracking — built for practices that put medicine first.
                </p>
                <div className="row mt-32">
                  <Link className="btn primary large" href="/resources/free-audit">
                    <span>Free clinic growth audit</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="photo vet-team" style={{ aspectRatio: '5/4', minHeight: '380px' }}></div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">WHAT WE FIX</div>
              <h2 className="t-h1 mt-16">The four problems we hear every week</h2>
            </div>
            <div className="grid-2 mt-48" style={{ gap: '24px' }}>
              <Card>
                <div className="tag orange">PROBLEM 01</div>
                <h3 className="mt-12">"Most of our patients come from referrals — we have no growth lever."</h3>
                <p className="t-small mt-12">
                  Referrals are great but unpredictable. We build a Google ranking that drives 15–25 new patients/month without leaning on word-of-mouth alone.
                </p>
              </Card>
              <Card>
                <div className="tag orange">PROBLEM 02</div>
                <h3 className="mt-12">"VCA and Banfield outrank us even though we're better."</h3>
                <p className="t-small mt-12">
                  Corporate chains spend big on SEO. We use the local signals they can't fake — real reviews, real photos, real Google Business Profile depth — to outrank them on "near me" searches.
                </p>
              </Card>
              <Card>
                <div className="tag orange">PROBLEM 03</div>
                <h3 className="mt-12">"We've spent $30k on marketing and have no idea what worked."</h3>
                <p className="t-small mt-12">
                  Call tracking on every campaign, booking-software conversion tags, one weekly dashboard. Every dollar tied to a booking — or not.
                </p>
              </Card>
              <Card>
                <div className="tag orange">PROBLEM 04</div>
                <h3 className="mt-12">"My front desk is too busy to chase reviews."</h3>
                <p className="t-small mt-12">
                  Automated SMS review flow runs in the background. The team does what they do best. The system asks for the review.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.05fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow blue">TYPICAL OUTCOME</div>
                <h2 className="t-h1 mt-16">What 6 months looks like for an independent vet</h2>
                <span className="h-rule"></span>
                <p className="t-body mt-24 muted">
                  Illustrative range based on similar clinics. Actual results depend on local competition.
                </p>
                <div className="grid-2 mt-32" style={{ gap: '16px' }}>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="20" x2="12" y2="10" />
                        <line x1="18" y1="20" x2="18" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="16" />
                      </svg>
                    </div>
                    <MetricCard number="+15–25" label={<>new patients<br />per month</>} />
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <MetricCard number="$40–60k" label={<>additional<br />annual revenue</>} />
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <MetricCard number="Top 3" label={<>vet near me<br />Google Maps</>} />
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <MetricCard number="4.8+" label={<>average<br />Google rating</>} />
                  </div>
                </div>
              </div>
              <div className="quote" style={{ padding: '32px' }}>
                <p style={{ fontSize: '18px', fontStyle: 'normal' }}>
                  "We've been independent for 22 years. For the first time, we're actually growing faster than the corporate clinic three blocks down. Olmeda gave us a lever we didn't know existed."
                </p>
                <footer className="mt-16">
                  <div className="av" style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80\')' }}></div>
                  <div>
                    <div className="nm">Dr. Michael Anderson</div>
                    <div className="tt">Anderson Pet Clinic · Austin, TX</div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center">
              <div className="eyebrow blue">SOFTWARE WE INTEGRATE</div>
              <h2 className="t-h1 mt-16">Plays nice with your stack</h2>
            </div>
            <div className="row mt-48" style={{ justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <span className="pill">ezyVet</span>
              <span className="pill">AVImark</span>
              <span className="pill">Cornerstone</span>
              <span className="pill">eVetPractice</span>
              <span className="pill">DaySmart Vet</span>
              <span className="pill">Pulse</span>
              <span className="pill">Vetspire</span>
              <span className="pill">Provet Cloud</span>
              <span className="pill">Shepherd</span>
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
