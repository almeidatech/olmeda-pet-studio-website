import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function AylasAcresCaseStudy() {
  return (
    <>
      <Head>
        <title>Aylas Acres Dog Sanctuary — Case Study — Olmeda Pet Studio</title>
        <meta name="description" content="How Aylas Acres Dog Sanctuary went from invisible to a +1,290% traffic increase in four months." />
        <meta property="og:title" content="Aylas Acres Dog Sanctuary — Case Study — Olmeda Pet Studio" />
        <meta property="og:description" content="How Aylas Acres Dog Sanctuary went from invisible to a +1,290% traffic increase in four months." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <Link href="/work">Case Studies</Link>
              <span className="sep">›</span>
              <span className="current">Aylas Acres</span>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
              <div>
                <div className="row gap-8" style={{ marginBottom: '16px' }}>
                  <span className="tag">DOG SANCTUARY</span>
                  <span className="tag gray">4 months</span>
                  <span className="tag orange">FEATURED</span>
                </div>
                <h1 className="t-display">
                  From invisible to <span className="accent">irresistible.</span>
                </h1>
                <p className="t-lead mt-24">
                  Aylas Acres Dog Sanctuary rescues, rehabilitates, and rehomes dogs across Central Texas. Despite a great mission and dedicated team, their online presence was holding them back: low Google visibility, inconsistent paid ads, and a website that wasn't capturing the donations they needed.
                </p>
                <div className="row mt-32 gap-24">
                  <div>
                    <div className="t-tiny" style={{ color: 'var(--fg-3)', letterSpacing: '.08em' }}>CLIENT</div>
                    <div style={{ fontWeight: 700, marginTop: '4px' }}>Aylas Acres Dog Sanctuary</div>
                  </div>
                  <div>
                    <div className="t-tiny" style={{ color: 'var(--fg-3)', letterSpacing: '.08em' }}>LOCATION</div>
                    <div style={{ fontWeight: 700, marginTop: '4px' }}>Austin, TX</div>
                  </div>
                  <div>
                    <div className="t-tiny" style={{ color: 'var(--fg-3)', letterSpacing: '.08em' }}>SERVICES</div>
                    <div style={{ fontWeight: 700, marginTop: '4px' }}>All three pillars</div>
                  </div>
                </div>
              </div>

              <div className="photo dog-portrait" style={{ aspectRatio: '1', minHeight: '380px' }}></div>
            </div>
          </div>
        </section>

        <section className="section-sm">
          <div className="wrap">
            <div className="grid-4" style={{ gap: '16px' }}>
              <Card style={{ padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: 800, color: 'var(--blue)', lineHeight: 1, letterSpacing: '-.02em' }}>+1,290%</div>
                <div className="t-small mt-8">website traffic</div>
              </Card>
              <Card style={{ padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: 800, color: 'var(--blue)', lineHeight: 1, letterSpacing: '-.02em' }}>+5,733%</div>
                <div className="t-small mt-8">organic traffic</div>
              </Card>
              <Card style={{ padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: 800, color: 'var(--orange)', lineHeight: 1, letterSpacing: '-.02em' }}>−178%</div>
                <div className="t-small mt-8">cost per result</div>
              </Card>
              <Card style={{ padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: 800, color: 'var(--green)', lineHeight: 1, letterSpacing: '-.02em' }}>+289%</div>
                <div className="t-small mt-8">donations</div>
              </Card>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: '48px', alignItems: 'flex-start' }}>
              <div>
                <div className="eyebrow">01 — THE CHALLENGE</div>
                <h2 className="t-h1 mt-16" style={{ fontSize: '32px' }}>Mission &gt; visibility</h2>
              </div>
              <div>
                <p className="t-body" style={{ fontSize: '18px' }}>
                  When Aylas Acres first reached out, they were doing real work — pulling dogs from kill shelters, rehabilitating them, and matching them with families. But the internet didn't know about it.
                </p>
                <ul className="checklist mt-24">
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                    </svg>
                    Page 4–5 on Google for "dog rescue Austin" — a search with 22,000 monthly volume
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                    </svg>
                    $2,800/month ad spend with no tracking — couldn't tell which dollars worked
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                    </svg>
                    Website donation page converting at 0.4% — well below sector average
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                    </svg>
                    22 Google reviews total — most rescue orgs in Austin had 200+
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: '48px', alignItems: 'flex-start' }}>
              <div>
                <div className="eyebrow blue">02 — THE STRATEGY</div>
                <h2 className="t-h1 mt-16" style={{ fontSize: '32px' }}>All three pillars, sequenced</h2>
              </div>
              <div>
                <p className="t-body" style={{ fontSize: '18px' }}>
                  We mapped a 90-day plan that hit visibility first, trust second, and conversion third. Each pillar funded the next.
                </p>
                <div className="grid-3 mt-32" style={{ gap: '16px' }}>
                  <Card>
                    <div className="step-row" style={{ marginBottom: '14px' }}>
                      <div className="step">01</div>
                    </div>
                    <h3 style={{ fontSize: '16px' }}>Visibility</h3>
                    <p className="t-small mt-8">Google Business Profile rebuild, 80+ citations cleaned, content engine launched.</p>
                  </Card>

                  <Card style={{ borderTop: '3px solid var(--orange)' }}>
                    <div className="step-row" style={{ marginBottom: '14px' }}>
                      <div className="step" style={{ background: 'var(--orange)' }}>02</div>
                    </div>
                    <h3 style={{ fontSize: '16px' }}>Trust</h3>
                    <p className="t-small mt-8">Review automation. 22 reviews → 167 in 90 days. Average rating 4.9.</p>
                  </Card>

                  <Card>
                    <div className="step-row" style={{ marginBottom: '14px' }}>
                      <div className="step">03</div>
                    </div>
                    <h3 style={{ fontSize: '16px' }}>Conversion</h3>
                    <p className="t-small mt-8">New donation page, story-led copywriting, simplified giving flow.</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: '48px', alignItems: 'flex-start' }}>
              <div>
                <div className="eyebrow">03 — THE NUMBERS</div>
                <h2 className="t-h1 mt-16" style={{ fontSize: '32px' }}>Four months. Real growth.</h2>
                <p className="t-body mt-24">Tracked daily. Reviewed weekly. Reported monthly. Every line below is from Google Analytics 4 and Google Search Console.</p>
              </div>

              <Card style={{ padding: '32px' }}>
                <div className="row" style={{ justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div style={{ fontWeight: 700 }}>Performance — Oct 2025 to Jan 2026</div>
                  <div className="t-small">Last 4 months</div>
                </div>
                <div className="grid-4" style={{ gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
                  <div style={{ background: 'var(--blue-ice)', borderRadius: '10px', padding: '14px' }}>
                    <div className="t-tiny" style={{ color: 'var(--blue)', fontWeight: 600 }}>Total clicks</div>
                    <div style={{ fontWeight: 800, fontSize: '20px', marginTop: '4px' }}>12.4K</div>
                    <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>▲ 1,280%</div>
                  </div>
                  <div style={{ background: '#F3F0FB', borderRadius: '10px', padding: '14px' }}>
                    <div className="t-tiny" style={{ color: '#7C5BE8', fontWeight: 600 }}>Impressions</div>
                    <div style={{ fontWeight: 800, fontSize: '20px', marginTop: '4px' }}>248K</div>
                    <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>▲ 1,400%</div>
                  </div>
                  <div style={{ background: '#FFF1E8', borderRadius: '10px', padding: '14px' }}>
                    <div className="t-tiny" style={{ color: 'var(--orange)', fontWeight: 600 }}>Avg. CTR</div>
                    <div style={{ fontWeight: 800, fontSize: '20px', marginTop: '4px' }}>5.0%</div>
                    <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>▲ 26.1%</div>
                  </div>
                  <div style={{ background: '#E7F8EE', borderRadius: '10px', padding: '14px' }}>
                    <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>Avg. position</div>
                    <div style={{ fontWeight: 800, fontSize: '20px', marginTop: '4px' }}>7.8</div>
                    <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>▲ 17.4</div>
                  </div>
                </div>
                <svg viewBox="0 0 600 240" width="100%" height="240" style={{ display: 'block', marginTop: '24px' }}>
                  <defs>
                    <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#3B82F6" stopOpacity=".25" />
                      <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g fontSize="10" fill="#9CA3AF" fontFamily="Inter">
                    <text x="0" y="60">3K</text>
                    <text x="0" y="120">2K</text>
                    <text x="0" y="180">1K</text>
                    <text x="0" y="234">0</text>
                    <text x="572" y="60">60K</text>
                    <text x="572" y="120">40K</text>
                    <text x="572" y="180">20K</text>
                    <text x="120" y="234">Oct 2025</text>
                    <text x="260" y="234">Nov 2025</text>
                    <text x="400" y="234">Dec 2025</text>
                    <text x="510" y="234">Jan 2026</text>
                  </g>
                  <g stroke="#E5E7EB" strokeDasharray="4 4">
                    <line x1="30" x2="565" y1="55" y2="55" />
                    <line x1="30" x2="565" y1="115" y2="115" />
                    <line x1="30" x2="565" y1="175" y2="175" />
                  </g>
                  <path d="M50 200 L150 195 L270 170 L390 130 L520 90 L520 215 L50 215 Z" fill="url(#ga)" />
                  <path d="M50 200 L150 195 L270 170 L390 130 L520 90" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M50 210 L150 200 L270 180 L390 140 L520 95" stroke="#7C5BE8" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="2 4" opacity=".7" />
                  <g fill="#3B82F6">
                    <circle cx="50" cy="200" r="3" />
                    <circle cx="150" cy="195" r="3" />
                    <circle cx="270" cy="170" r="3" />
                    <circle cx="390" cy="130" r="3" />
                    <circle cx="520" cy="90" r="3" />
                  </g>
                </svg>
              </Card>
            </div>
          </div>
        </section>

        <section className="section navy" style={{ background: 'var(--navy)' }}>
          <div className="wrap">
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--orange)', marginBottom: '24px' }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .75-1 2v1c0 .75.25 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .75-1 2v1c0 .75.25 1 1 1z" />
              </svg>
              <p style={{ color: 'var(--white)', fontSize: '28px', lineHeight: 1.4, fontWeight: 500, letterSpacing: '-.01em' }}>
                The team at Olmeda treated our rescue like it was their own. Four months in, we're funding 3× more rescues a month because the donations are finally matching the work.{' '}
                <span className="accent">They built the engine — and gave us the keys.</span>
              </p>
              <footer style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '32px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80')", backgroundSize: 'cover' }}></div>
                <div>
                  <div style={{ color: 'var(--white)', fontWeight: 700 }}>Layla Bennett</div>
                  <div style={{ color: 'rgba(255,255,255,.6)', fontSize: '13px' }}>Founder, Aylas Acres Dog Sanctuary</div>
                </div>
              </footer>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h2 className="t-h2">More case studies</h2>
              <Link className="btn text-link" href="/work">
                View all <span className="arrow">→</span>
              </Link>
            </div>
            <div className="grid-3" style={{ gap: '24px' }}>
              <Link href="/work" legacyBehavior>
                <Card style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  <div className="photo dog-running" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                  <div style={{ padding: '24px' }}>
                    <span className="tag">DAYCARE</span>
                    <h3 className="mt-8">Happy Tails — 58% → 91% occupancy</h3>
                  </div>
                </Card>
              </Link>

              <Link href="/work" legacyBehavior>
                <Card style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  <div className="photo vet-team" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                  <div style={{ padding: '24px' }}>
                    <span className="tag">VETERINARY</span>
                    <h3 className="mt-8">Anderson Pet Clinic — first growth in a decade</h3>
                  </div>
                </Card>
              </Link>

              <Link href="/work" legacyBehavior>
                <Card style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  <div className="photo clinic-exterior" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                  <div style={{ padding: '24px' }}>
                    <span className="tag">VETERINARY</span>
                    <h3 className="mt-8">Pawsitive Care — 3.2 to 4.9 stars</h3>
                  </div>
                </Card>
              </Link>
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
