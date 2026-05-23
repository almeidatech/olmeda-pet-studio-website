import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';
import { TestCard } from '@/components/TestCard';
import { ProcessStepCard } from '@/components/ProcessStepCard';
import CtaBanner from '@/components/CtaBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Olmeda Pet Studio — Growth Systems for Veterinary Clinics &amp; Dog Daycares</title>
        <meta name="description" content="We help veterinary clinics and dog daycares show up higher on Google, build trust, and turn searches into more bookings, higher revenue, and loyal clients." />
        <meta property="og:title" content="Olmeda Pet Studio — Growth Systems for Veterinary Clinics &amp; Dog Daycares" />
        <meta property="og:description" content="We help veterinary clinics and dog daycares show up higher on Google, build trust, and turn searches into more bookings, higher revenue, and loyal clients." />
      </Head>

      <PageLayout>
        {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">

            <div className="hero-copy">
              <div className="eyebrow">
                <span>PET CARE MARKETING AGENCY</span>
                <span style={{ opacity: 0.3 }}>|</span>
                <span className="gray" style={{ color: 'var(--gray-400)' }}>VETERINARY CLINICS &amp; DOG DAYCARES</span>
              </div>
              <h1 className="hero-head">
                Your pet business is better than what Google shows.
                <br /><span className="accent accent--underline">Let's fix that.</span>
              </h1>
              <p className="hero-sub">We make sure the right pet parents find you first, trust you instantly, and book with confidence.</p>

              <div className="hero-bullets">
                <div className="hero-bullet">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div><div className="b-top">More visibility</div><div className="b-bot">on Google</div></div>
                </div>
                <div className="hero-bullet">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <div><div className="b-top">More trust</div><div className="b-bot">with reviews</div></div>
                </div>
                <div className="hero-bullet">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <div><div className="b-top">More bookings</div><div className="b-bot">every month</div></div>
                </div>
                <div className="hero-bullet">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
                  <div><div className="b-top">More revenue</div><div className="b-bot">predictably</div></div>
                </div>
              </div>

              <div className="row">
                <Link href="/resources/free-audit" className="btn primary large">
                  <span>Book Your Free Growth Audit</span>
                  <span className="arrow">→</span>
                </Link>
                <Link href="/process" className="play-btn">
                  <span className="play-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6 4 20 12 6 20 6 4"/></svg>
                  </span>
                  <span>
                    <span className="play-label">See How It Works</span><br/>
                    <span className="play-sub">2-min overview</span>
                  </span>
                </Link>
              </div>

              <div className="hero-trust mt-24">
                <div className="avatars">
                  <span style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80\')' }}></span>
                  <span style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80\')' }}></span>
                  <span style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80\')' }}></span>
                  <span style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=80&q=80\')' }}></span>
                </div>
                <div className="trust-text">Trusted by 100+ pet businesses across the U.S.</div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-compare">
                <video className="compare-video" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80">
                  <source src="assets/video/hero-dog.mp4" type="video/mp4" />
                </video>
                <div className="compare-overlay" aria-hidden="true"></div>
                <div className="compare-labels">
                  <span>WHAT GOOGLE SHOWS NOW</span>
                  <span className="right">WHAT WE MAKE POSSIBLE</span>
                </div>
                <div className="compare-line"></div>
                <div className="compare-handle"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/><polyline points="9 6 15 12 9 18"/></svg></div>

                <div className="listing-card bad">
                  <div className="lc-photo"></div>
                  <h4>Pawsitive Care<br/>Animal Hospital</h4>
                  <div className="lc-rating"><span className="stars">★★★☆☆</span><span>2.8</span><span style={{ color: 'var(--fg-3)' }}>(27)</span></div>
                  <div className="lc-meta">Veterinarian · <span className="closed">Closed</span></div>
                  <div className="lc-actions">
                    <div className="act">📞<span>CALL</span></div>
                    <div className="act">◆<span>DIRECTIONS</span></div>
                    <div className="act">🌐<span>WEBSITE</span></div>
                  </div>
                  <div className="lc-map"></div>
                  <div className="lc-bullets">
                    <div><span className="x">✕</span>Not enough reviews</div>
                    <div><span className="x">✕</span>Hard to find</div>
                    <div><span className="x">✕</span>Outdated info</div>
                  </div>
                </div>

                <div className="listing-card good">
                  <div className="lc-photo"></div>
                  <h4>Pawsitive Care<br/>Animal Hospital</h4>
                  <div className="lc-rating"><span className="stars">★★★★★</span><span style={{ color: 'var(--fg-1)', fontWeight: 600 }}>4.9</span><span style={{ color: 'var(--fg-3)' }}>(327)</span></div>
                  <div className="lc-meta">Veterinarian · <span className="open">Open</span></div>
                  <div className="lc-actions">
                    <div className="act" style={{ background: '#FFF1E8', color: 'var(--orange)' }}>📞<span>CALL</span></div>
                    <div className="act" style={{ background: '#FFF1E8', color: 'var(--orange)' }}>◆<span>DIRECTIONS</span></div>
                    <div className="act" style={{ background: '#FFF1E8', color: 'var(--orange)' }}>🌐<span>WEBSITE</span></div>
                    <div className="act" style={{ background: '#FFF1E8', color: 'var(--orange)' }}>📋<span>BOOK</span></div>
                  </div>
                  <div className="lc-photos"><div></div><div></div><div></div></div>
                  <div className="lc-bullets">
                    <div><span className="c">✓</span>Top 3 on Google Maps</div>
                    <div><span className="c">✓</span>320+ 5-star reviews</div>
                    <div><span className="c">✓</span>Open &amp; up to date</div>
                    <div><span className="c">✓</span>Trusted by pet parents</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* metric strip */}
          <div className="metric-strip mt-48">
            <div>
              <div className="metric-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg></div>
              <div><div className="v">2–3<span style={{ fontWeight: 500 }}>×</span></div><div className="l">more visibility<br/>on Google</div></div>
            </div>
            <div>
              <div className="metric-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <div><div className="v">85<span style={{ fontWeight: 500 }}>%</span></div><div className="l">more reviews<br/>in 6 months</div></div>
            </div>
            <div>
              <div className="metric-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
              <div><div className="v">2–3<span style={{ fontWeight: 500 }}>×</span></div><div className="l">more bookings<br/>every month</div></div>
            </div>
            <div>
              <div className="metric-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <div><div className="v">+$20<span style={{ fontWeight: 500 }}>k</span></div><div className="l">avg. increase<br/>in monthly revenue</div></div>
            </div>
          </div>
          <div className="guarantee-strip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: '-2px', marginRight: '6px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            4-MONTH GUARANTEE: IF WE DON'T DELIVER RESULTS, YOU DON'T PAY.
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section">
        <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'flex-start' }}>
            <div>
              <div className="eyebrow blue">WHO WE WORK WITH</div>
              <h2 className="t-h1" style={{ marginTop: '14px' }}>We work with pet businesses that deliver excellence</h2>
              <span className="h-rule"></span>
            </div>
            <p className="t-body" style={{ fontSize: '17px', lineHeight: '1.65', paddingTop: '8px' }}>If you're a veterinary clinic owner, daycare operator, or hybrid pet business that already delivers exceptional care but struggles with visibility and booking conversion — you're in the right place.</p>
          </div>

          <div className="grid-3 mt-48">
            <Card>
              <div className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M5 22V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17"/><path d="M9 9h2"/><path d="M9 13h2"/><path d="M9 17h2"/><path d="M13 9h2"/><path d="M13 13h2"/><path d="M13 17h2"/></svg></div>
              <h3>Veterinary Clinics</h3>
              <span className="card-tag">Independent</span>
              <ul>
                <li>More new patients per month</li>
                <li>Top 3 Google Maps position</li>
                <li>2–3× new patients in 4 months</li>
                <li>Higher patient lifetime value</li>
              </ul>
            </Card>
            <Card>
              <div className="card-icon orange"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><circle cx="11" cy="4" r="2"/><circle cx="17" cy="8" r="2"/><circle cx="5" cy="8" r="2"/><circle cx="19" cy="14" r="2"/><circle cx="3" cy="14" r="2"/><path d="M11 11c-3 0-5 2-5 5 0 3 2 4 5 4s5-1 5-4-2-5-5-5z"/></svg></div>
              <h3>Dog Daycares &amp; Boarding</h3>
              <span className="card-tag">Premium</span>
              <ul className="orange">
                <li>85%+ occupancy year-round</li>
                <li>$20–25k monthly revenue increase</li>
                <li>Eliminate seasonal dips</li>
                <li>Premium pricing, no discounting</li>
              </ul>
            </Card>
            <Card>
              <div className="card-icon purple"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
              <h3>Hybrid Pet Businesses</h3>
              <span className="card-tag">Vet + Daycare + Grooming</span>
              <ul>
                <li>Clear positioning per service</li>
                <li>Integrated growth strategy</li>
                <li>Market clarity</li>
                <li>Stronger brand, more revenue</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 3-PILLAR SYSTEM */}
      <section className="section gray">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="eyebrow blue">OUR 3-PILLAR GROWTH SYSTEM</div>
            <h2 className="t-h1 mt-16">A proven system. Sustainable growth.</h2>
            <p className="t-lead mt-16">We don't rely on one channel. We build a growth engine that attracts, builds trust, and converts — consistently.</p>
          </div>

          <div className="grid-3 mt-48" style={{ gap: '32px' }}>
            <Card style={{ padding: '32px' }}>
              <div className="step-row" style={{ marginBottom: '18px' }}>
                <div className="step">01</div>
                <div className="step-divider"></div>
              </div>
              <div className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
              <h3>Google Positioning</h3>
              <p className="t-body" style={{ marginTop: '8px', fontSize: '14px' }}>Show up when pet parents are searching. Local SEO, Google Business Profile, and Maps ranking that drive real visibility.</p>
              <Link className="btn text-link mt-16" href="/services/google-positioning">Learn more <span className="arrow">→</span></Link>
            </Card>
            <Card style={{ padding: '32px', borderTop: '3px solid var(--orange)' }}>
              <div className="step-row" style={{ marginBottom: '18px' }}>
                <div className="step" style={{ background: 'var(--orange)' }}>02</div>
                <div className="step-divider" style={{ borderColor: 'var(--orange)' }}></div>
              </div>
              <div className="card-icon orange"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <h3><span style={{ color: 'var(--orange)' }}>Visible</span> Trust &amp; Proof</h3>
              <p className="t-body" style={{ marginTop: '8px', fontSize: '14px' }}><span style={{ color: 'var(--orange)', fontWeight: 600 }}>Reviews, photos, and content that build confidence before the first call.</span> We turn happy clients into your best sales team.</p>
              <Link className="btn text-link mt-16" href="/services/review-generation">Learn more <span className="arrow">→</span></Link>
            </Card>
            <Card style={{ padding: '32px' }}>
              <div className="step-row" style={{ marginBottom: '18px' }}>
                <div className="step">03</div>
                <div className="step-divider"></div>
              </div>
              <div className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg></div>
              <h3>Conversion Engine</h3>
              <p className="t-body" style={{ marginTop: '8px', fontSize: '14px' }}>High-converting websites, Google Ads, booking systems, and follow-up that turn traffic into booked appointments.</p>
              <Link className="btn text-link mt-16" href="/services/web-design-seo">Learn more <span className="arrow">→</span></Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CASE STUDY — Aylas Acres */}
      <section className="section">
        <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '.9fr 1.4fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">REAL RESULTS. REAL PET BUSINESSES.</div>
              <h2 className="t-h1 mt-16">From invisible to irresistible</h2>
              <span className="h-rule"></span>
              <p className="t-body mt-24">Aylas Acres Dog Sanctuary came to us with low visibility and inconsistent ad results. In 4 months, we turned it around.</p>
              <ul className="checklist blue mt-24">
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>+1,290% increase in website traffic</li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>+5,733% increase in organic traffic</li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>Cost per result reduced by 178%</li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>Donations increased by 289%</li>
              </ul>
              <Link className="btn secondary mt-32" href="/work/aylas-acres"><span>View Full Case Study</span><span className="arrow">→</span></Link>
            </div>

            {/* chart card */}
            <Card style={{ padding: '28px' }}>
              <div className="row" style={{ justifyContent: 'space-between', marginBottom: '18px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>Aylas Acres Dog Sanctuary</div>
                <div className="t-small">Last 4 months</div>
              </div>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
                <div style={{ background: 'var(--blue-ice)', borderRadius: '10px', padding: '14px' }}>
                  <div className="t-tiny" style={{ color: 'var(--blue)', fontWeight: 600, letterSpacing: '.04em' }}>Total clicks</div>
                  <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--fg-1)', marginTop: '4px' }}>12.4K</div>
                  <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>▲ 1,280%</div>
                </div>
                <div style={{ background: '#F3F0FB', borderRadius: '10px', padding: '14px' }}>
                  <div className="t-tiny" style={{ color: '#7C5BE8', fontWeight: 600, letterSpacing: '.04em' }}>Total impressions</div>
                  <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--fg-1)', marginTop: '4px' }}>248K</div>
                  <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>▲ 1,400%</div>
                </div>
                <div style={{ background: '#FFF1E8', borderRadius: '10px', padding: '14px' }}>
                  <div className="t-tiny" style={{ color: 'var(--orange)', fontWeight: 600, letterSpacing: '.04em' }}>Average CTR</div>
                  <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--fg-1)', marginTop: '4px' }}>5.0%</div>
                  <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>▲ 26.1%</div>
                </div>
                <div style={{ background: '#E7F8EE', borderRadius: '10px', padding: '14px' }}>
                  <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600, letterSpacing: '.04em' }}>Average position</div>
                  <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--fg-1)', marginTop: '4px' }}>7.8</div>
                  <div className="t-tiny" style={{ color: 'var(--green)', fontWeight: 600 }}>▲ 17.4</div>
                </div>
              </div>

              {/* inline svg chart */}
              <div style={{ marginTop: '24px', position: 'relative' }}>
                <svg viewBox="0 0 600 240" width="100%" height="240" style={{ display: 'block' }}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#3B82F6" stopOpacity=".25"/>
                      <stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {/* y-axis labels left */}
                  <g fontSize="10" fill="#9CA3AF" fontFamily="Inter">
                    <text x="0" y="60">3K</text>
                    <text x="0" y="120">2K</text>
                    <text x="0" y="180">1K</text>
                    <text x="0" y="234">0</text>
                    {/* right y-axis */}
                    <text x="572" y="60">60K</text>
                    <text x="572" y="120">40K</text>
                    <text x="572" y="180">20K</text>
                    <text x="572" y="234">0</text>
                    <text x="120" y="234">Oct 2025</text>
                    <text x="260" y="234">Nov 2025</text>
                    <text x="400" y="234">Dec 2025</text>
                    <text x="510" y="234">Jan 2026</text>
                  </g>
                  {/* gridlines */}
                  <g stroke="#E5E7EB" strokeDasharray="4 4">
                    <line x1="30" x2="565" y1="55" y2="55"/>
                    <line x1="30" x2="565" y1="115" y2="115"/>
                    <line x1="30" x2="565" y1="175" y2="175"/>
                    <line x1="30" x2="565" y1="215" y2="215"/>
                  </g>
                  {/* area fill - clicks line */}
                  <path d="M50 200 L150 195 L270 170 L390 130 L520 90 L520 215 L50 215 Z" fill="url(#g1)"/>
                  {/* clicks line (blue) */}
                  <path d="M50 200 L150 195 L270 170 L390 130 L520 90" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* impressions line (purple) */}
                  <path d="M50 210 L150 200 L270 180 L390 140 L520 95" stroke="#7C5BE8" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 4" opacity=".7"/>
                  {/* impressions label */}
                  <text x="240" y="175" fill="#7C5BE8" fontSize="11" fontStyle="italic" fontFamily="Playfair Display">Impressions</text>
                  {/* data points */}
                  <g fill="#3B82F6">
                    <circle cx="50" cy="200" r="3"/>
                    <circle cx="150" cy="195" r="3"/>
                    <circle cx="270" cy="170" r="3"/>
                    <circle cx="390" cy="130" r="3"/>
                    <circle cx="520" cy="90" r="3"/>
                  </g>
                </svg>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* OUR PROCESS — 4 STEPS */}
      <section className="section gray">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="eyebrow blue">OUR PROCESS</div>
            <h2 className="t-h1 mt-16">Simple process. Powerful results.</h2>
          </div>

          <div className="grid-4 mt-48" style={{ gap: '24px' }}>
            <ProcessStepCard step={1} title="Audit &amp; Strategy" description="We audit your presence, competition, and growth opportunities." />
            <ProcessStepCard step={2} title="Implement &amp; Optimize" description="We implement the plan across Google, reviews, website, content, and ads." />
            <ProcessStepCard step={3} title="Measure &amp; Improve" description="We track everything that matters and optimize for maximum ROI." />
            <ProcessStepCard step={4} title="Grow &amp; Scale" description="Predictable growth: more patients, higher revenue, stronger brand." highlightColor="var(--orange)" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="eyebrow blue">TRUSTED BY PET CARE LEADERS</div>
            <h2 className="t-h1 mt-16">Loved by pet businesses. Proven by results.</h2>
          </div>

          <div className="grid-4 mt-48" style={{ gap: '24px' }}>
            <TestCard quote="Olmeda completely transformed our online presence. We went from invisible to the #1 vet clinic in our area. New patients are up 2.5×." name="Dr. Jessica Martinez" title="Pawsitive Care Animal Hospital" imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80" />
            <TestCard quote="Our daycare was stuck at 60% occupancy. Now we're at 90% year-round and have a waitlist. Best investment we've ever made." name="Sarah Thompson" title="Happy Tails Daycare" imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80" />
            <TestCard quote="The system they built for reviews and Google ranking works. We finally get consistent leads every single week." name="Michael Anderson" title="Anderson Pet Clinic" imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" />
            <TestCard quote="Professional, data-driven, and truly care about results. They treat our business like it's their own." name="Emily Rodriguez" title="Bark &amp; Stay Resort" imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80" />
          </div>
        </div>
      </section>

      {/* CTA BANNER + FOOTER */}
      <section className="section-sm">
        <div className="wrap">
          <CtaBanner />
        </div>
      </section>

      </PageLayout>
    </>
  );
}
