import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function FreeAudit() {
  return (
    <>
      <Head>
        <title>Free Growth Audit — Olmeda Pet Studio</title>
        <meta name="description" content="A free, no-obligation audit of your Google visibility, reviews, and conversion. 30 minutes. Clear opportunities. ROI estimate." />
        <meta property="og:title" content="Free Growth Audit — Olmeda Pet Studio" />
        <meta property="og:description" content="A free, no-obligation audit of your Google visibility, reviews, and conversion. 30 minutes. Clear opportunities. ROI estimate." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Resources</span>
              <span className="sep">›</span>
              <span className="current">Free Growth Audit</span>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
              <div>
                <div className="eyebrow">FREE GROWTH AUDIT · NO OBLIGATION</div>
                <h1 className="t-display mt-16">
                  Find the <span className="accent">$10–50k</span> a year hiding in your Google presence.
                </h1>
                <p className="t-lead mt-24">
                  30 minutes. We pull your real data — Google ranking, review velocity, website conversion, and competitor positioning — and hand you a one-page roadmap of the biggest fixable opportunities. Then you decide what to do with it.
                </p>

                <div className="grid-2 mt-32" style={{ gap: '14px' }}>
                  <div className="metric-card">
                    <div className="metric-icon" style={{ background: '#FFF1E8', color: 'var(--orange)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <div className="metric-num">30 min</div>
                      <div className="metric-cap">no rambling</div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="metric-num">No obligation</div>
                      <div className="metric-cap">no follow-up nags</div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="20" x2="12" y2="10" />
                        <line x1="18" y1="20" x2="18" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="16" />
                      </svg>
                    </div>
                    <div>
                      <div className="metric-num">Real data</div>
                      <div className="metric-cap">your numbers, not guesses</div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon" style={{ background: '#E7F8EE', color: 'var(--green)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <div className="metric-num">ROI estimate</div>
                      <div className="metric-cap">on the call</div>
                    </div>
                  </div>
                </div>

                <div className="mt-48">
                  <div className="eyebrow blue">WHAT YOU GET</div>
                  <h2 className="t-h2 mt-16">A one-page roadmap, yours to keep</h2>
                  <ul className="checklist mt-24">
                    <li>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      Your current Google Maps ranking for 5 core "near me" searches
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      Top 3 competitors and exactly what they're doing better
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      Review velocity vs. industry benchmark + the gap in stars
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      Website conversion rate estimate (vs. pet-care benchmark of 4.2%)
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      3 biggest opportunities ranked by ROI and effort
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      A realistic 6-month revenue projection range
                    </li>
                  </ul>
                </div>
              </div>

              <Card style={{ padding: '36px', position: 'sticky', top: '90px' }}>
                <div className="eyebrow">START HERE</div>
                <h2 className="t-h2 mt-12" style={{ fontSize: '24px' }}>
                  Book your free growth audit
                </h2>
                <p className="t-small mt-8">We'll reach out within one business day to schedule.</p>

                <form className="mt-24" onSubmit={(e) => { e.preventDefault(); alert('Thanks for the interest! We\'ll be in touch soon.'); }}>
                  <div className="grid-2" style={{ gap: '12px' }}>
                    <div className="field">
                      <label className="label">First name</label>
                      <input className="input" type="text" placeholder="Jess" required />
                    </div>
                    <div className="field">
                      <label className="label">Last name</label>
                      <input className="input" type="text" placeholder="Martinez" required />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Work email</label>
                    <input className="input" type="email" placeholder="jess@pawsitive.com" required />
                  </div>
                  <div className="field">
                    <label className="label">Business name</label>
                    <input className="input" type="text" placeholder="Pawsitive Care Animal Hospital" required />
                  </div>
                  <div className="field">
                    <label className="label">Website</label>
                    <input className="input" type="url" placeholder="https://pawsitive.com" />
                  </div>
                  <div className="grid-2" style={{ gap: '12px' }}>
                    <div className="field">
                      <label className="label">Business type</label>
                      <select className="input" required>
                        <option>Veterinary clinic</option>
                        <option>Dog daycare</option>
                        <option>Boarding facility</option>
                        <option>Grooming</option>
                        <option>Hybrid (multi-service)</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="label">Monthly revenue</label>
                      <select className="input" required>
                        <option>&lt; $20k</option>
                        <option>$20–50k</option>
                        <option>$50–100k</option>
                        <option>$100–250k</option>
                        <option>$250k+</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">What's your #1 growth goal?</label>
                    <textarea className="textarea" placeholder="e.g. Get to top 3 in the map pack, fill our boarding kennels, launch a new clinic..."></textarea>
                  </div>
                  <button type="submit" className="btn primary large" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Book My Audit</span>
                    <span className="arrow">→</span>
                  </button>
                  <p className="t-tiny mt-16 center muted">No pitch deck. No "discovery call" gauntlet. Just diagnostics. We respect your time.</p>
                </form>
              </Card>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">WHAT TO EXPECT</div>
              <h2 className="t-h1 mt-16">The 30 minutes, broken down</h2>
            </div>
            <div className="grid-4 mt-48" style={{ gap: '20px' }}>
              <Card>
                <div className="step-row" style={{ marginBottom: '18px' }}>
                  <div className="step">01</div>
                  <div className="step-divider"></div>
                </div>
                <h3 style={{ fontSize: '17px' }}>Minutes 0–5</h3>
                <p className="t-small mt-8">Quick intro. Your goals, your real obstacles. We listen first.</p>
              </Card>

              <Card>
                <div className="step-row" style={{ marginBottom: '18px' }}>
                  <div className="step">02</div>
                  <div className="step-divider"></div>
                </div>
                <h3 style={{ fontSize: '17px' }}>Minutes 5–20</h3>
                <p className="t-small mt-8">Live screen-share through your Google Business Profile, reviews, and website data.</p>
              </Card>

              <Card>
                <div className="step-row" style={{ marginBottom: '18px' }}>
                  <div className="step">03</div>
                  <div className="step-divider"></div>
                </div>
                <h3 style={{ fontSize: '17px' }}>Minutes 20–28</h3>
                <p className="t-small mt-8">Top 3 opportunities ranked. Realistic timeline. ROI math, both ways.</p>
              </Card>

              <Card style={{ borderTop: '3px solid var(--orange)' }}>
                <div className="step-row" style={{ marginBottom: '18px' }}>
                  <div className="step" style={{ background: 'var(--orange)' }}>
                    04
                  </div>
                  <div className="step-divider" style={{ borderColor: 'var(--orange)' }}></div>
                </div>
                <h3 style={{ fontSize: '17px' }}>Minutes 28–30</h3>
                <p className="t-small mt-8">"Want to work with us?" If yes, we send a proposal. If no, you keep the roadmap. No follow-ups.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap-sm">
            <div className="center">
              <div className="eyebrow blue">QUESTIONS</div>
              <h2 className="t-h1 mt-16">A few quick honesties</h2>
            </div>
            <div className="mt-48">
              <div className="faq-item open">
                <button className="faq-q">
                  Is this really free? What's the catch? <span className="pm">+</span>
                </button>
                <div className="faq-a">
                  No catch. We do these audits because they're our best sales tool — if the roadmap is genuinely useful, some businesses hire us. If it's not, you keep it and move on. Either way, you walk away with real intel about your growth opportunities.
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q">
                  Will you try to sell me? <span className="pm">+</span>
                </button>
                <div className="faq-a">
                  We'll ask if you want to work with us — once, at the end. If you say no, we say "thanks for the time" and never email again. Zero "circling back" sequences.
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q">
                  Do I need to prepare anything? <span className="pm">+</span>
                </button>
                <div className="faq-a">
                  Nothing. We pull the Google Business Profile and site data ourselves before the call. Bring questions and goals — that's it.
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q">
                  What if I'm not ready to work with anyone yet? <span className="pm">+</span>
                </button>
                <div className="faq-a">
                  That's fine. Most of the businesses we end up working with audited with us 4–8 months before signing. The roadmap is yours whether you ever hire us or not.
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
