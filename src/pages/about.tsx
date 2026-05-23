import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function About() {
  return (
    <>
      <Head>
        <title>About — Olmeda Pet Studio</title>
        <meta name="description" content="We're a team of marketers and pet parents who build growth systems for veterinary clinics and dog daycares." />
        <meta property="og:title" content="About — Olmeda Pet Studio" />
        <meta property="og:description" content="We're a team of marketers and pet parents who build growth systems for veterinary clinics and dog daycares." />
      </Head>

      <PageLayout navActive="about">
      <section className="page-hero" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
        <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.05fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow blue">ABOUT OLMEDA PET STUDIO</div>
              <h1 className="t-display mt-16">
                We build growth systems that <span className="accent accent--underline">fill your schedule</span>
              </h1>
              <p className="t-lead mt-24" style={{ maxWidth: '560px' }}>
                We're not a typical marketing agency. We're a growth partner for veterinary clinics and dog daycares that want more than likes and followers — they want more patients, more bookings, and predictable revenue.
              </p>

              <div className="grid-3 mt-32" style={{ gap: '14px' }}>
                <div className="metric-card">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-num">100%</div>
                    <div className="metric-cap">Focused<br />on pet businesses</div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-num">Systems</div>
                    <div className="metric-cap">that scale,<br />not one-off tactics</div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-num">We care</div>
                    <div className="metric-cap">like<br />pet parents</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="photo dog-portrait" style={{ aspectRatio: '4/5', minHeight: '480px' }}></div>
              <div className="quote" style={{ position: 'absolute', right: '-24px', bottom: '32px', maxWidth: '300px', background: 'var(--white)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--blue)', marginBottom: '8px' }}>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .75-1 2v1c0 .75.25 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .75-1 2v1c0 .75.25 1 1 1z"></path>
                </svg>
                <p style={{ fontSize: '14px', lineHeight: 1.55, fontStyle: 'normal' }}>
                  They treated our business like it was their own. The results speak for themselves.
                </p>
                <footer style={{ marginTop: '12px' }}>
                  <div>
                    <div className="nm" style={{ color: 'var(--blue)' }}>Dr. Jessica Martinez</div>
                    <div className="tt">Pawsitive Care Animal Hospital</div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div className="eyebrow blue">OUR MISSION</div>
            <h2 className="t-h1 mt-16">Help exceptional pet care businesses get found, chosen, and trusted by more pet parents.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 30px 1fr 30px 1fr 30px 1fr 30px 1fr', gap: '8px', alignItems: 'center', marginTop: '48px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--blue-ice)', display: 'grid', placeItems: 'center', margin: '0 auto', color: 'var(--blue)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
              </div>
              <div className="t-h4 mt-16" style={{ fontSize: '16px' }}>Be Found</div>
              <div className="t-small mt-8">Show up where pet<br />parents are searching</div>
            </div>
            <div style={{ borderTop: '1.5px dashed var(--blue)', opacity: 0.4, marginTop: '30px' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FFF1E8', display: 'grid', placeItems: 'center', margin: '0 auto', color: 'var(--orange)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="t-h4 mt-16" style={{ fontSize: '16px' }}>Build Trust</div>
              <div className="t-small mt-8">Prove you're the right<br />choice before they call</div>
            </div>
            <div style={{ borderTop: '1.5px dashed var(--blue)', opacity: 0.4, marginTop: '30px' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--blue-ice)', display: 'grid', placeItems: 'center', margin: '0 auto', color: 'var(--blue)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="t-h4 mt-16" style={{ fontSize: '16px' }}>Get Booked</div>
              <div className="t-small mt-8">Turn interest into<br />appointments</div>
            </div>
            <div style={{ borderTop: '1.5px dashed var(--blue)', opacity: 0.4, marginTop: '30px' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FFF1E8', display: 'grid', placeItems: 'center', margin: '0 auto', color: 'var(--orange)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="t-h4 mt-16" style={{ fontSize: '16px' }}>Deliver Great Care</div>
              <div className="t-small mt-8">Create experiences<br />worth talking about</div>
            </div>
            <div style={{ borderTop: '1.5px dashed var(--blue)', opacity: 0.4, marginTop: '30px' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--blue-ice)', display: 'grid', placeItems: 'center', margin: '0 auto', color: 'var(--blue)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 17 9 11 13 15 21 7"></polyline>
                  <polyline points="14 7 21 7 21 14"></polyline>
                </svg>
              </div>
              <div className="t-h4 mt-16" style={{ fontSize: '16px' }}>Grow &amp; Scale</div>
              <div className="t-small mt-8">Sustainable growth,<br />month after month</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="wrap">
          <div className="grid-2" style={{ gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div className="photo team-meeting" style={{ aspectRatio: '5/4', borderRadius: 'var(--r-lg)', minHeight: '380px' }}></div>
              <div style={{ position: 'absolute', left: '-20px', bottom: '32px', background: 'var(--blue)', color: 'var(--white)', padding: '18px 22px', borderRadius: 'var(--r-lg)', boxShadow: 'var(--sh-md)', maxWidth: '220px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="11" r="4"></circle>
                    <circle cx="6" cy="8" r="2.5"></circle>
                    <circle cx="18" cy="8" r="2.5"></circle>
                    <ellipse cx="12" cy="19" rx="6" ry="3"></ellipse>
                  </svg>
                  <div style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.25 }}>Pet Business<br />Specialists</div>
                </div>
                <div style={{ fontSize: '12px', opacity: 0.85, lineHeight: 1.5 }}>Not generalists.<br />Not hobbyists.<br />Specialists.</div>
              </div>
            </div>

            <div>
              <div className="eyebrow blue">WHO WE ARE</div>
              <h2 className="t-h1 mt-16">A team of pet parents who love marketing</h2>
              <span className="h-rule"></span>
              <p className="t-body mt-24">We're a team of marketers, designers, and strategists who specialize exclusively in the pet care industry.</p>
              <p className="t-body mt-16">We've worked inside veterinary clinics. We understand the challenges, the seasonality, the competition, and most importantly — the connection between pets and people.</p>
              <p className="t-body mt-16">That's why we do this.</p>

              <div className="grid-3 mt-32" style={{ gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--blue)', letterSpacing: '-0.02em', lineHeight: 1 }}>100+</div>
                  <div className="t-small mt-8">Pet Businesses<br />Helped</div>
                </div>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--blue)', letterSpacing: '-0.02em', lineHeight: 1 }}>4+</div>
                  <div className="t-small mt-8">Years Focused<br />on Pet Care</div>
                </div>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--blue)', letterSpacing: '-0.02em', lineHeight: 1 }}>12+M</div>
                  <div className="t-small mt-8">Revenue Generated<br />for Our Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div className="eyebrow">OUR VALUES</div>
            <h2 className="t-h1 mt-16">Three words we run on</h2>
            <p className="t-lead mt-16 muted">Trust. Clarity. System. Everything we build starts here.</p>
          </div>

          <div className="grid-3 mt-48" style={{ gap: '24px' }}>
            <Card style={{ padding: '32px' }}>
              <div className="card-icon orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Trust</h3>
              <p className="t-body mt-12" style={{ fontSize: '14px' }}>Authority without arrogance. We earn confidence with real data, honest timelines, and zero pressure tactics.</p>
            </Card>
            <Card style={{ padding: '32px' }}>
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>Clarity</h3>
              <p className="t-body mt-12" style={{ fontSize: '14px' }}>No false promises. We tell you what works, what doesn't, and what the realistic range of outcomes looks like.</p>
            </Card>
            <Card style={{ padding: '32px' }}>
              <div className="card-icon purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                </svg>
              </div>
              <h3>System</h3>
              <p className="t-body mt-12" style={{ fontSize: '14px' }}>Integration, not tactics. Visibility, trust, and conversion working together — that's how growth becomes predictable.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="wrap">
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <div className="eyebrow blue">THE TEAM</div>
              <h2 className="t-h1 mt-16">Small team. Big focus.</h2>
              <span className="h-rule"></span>
            </div>
            <Link className="btn text-link" href="/careers">
              We're hiring — see open roles <span className="arrow">→</span>
            </Link>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            <Card style={{ padding: 0, overflow: 'hidden' }}>
              <div className="photo" style={{ aspectRatio: '1', backgroundImage: 'url("https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80")', borderRadius: 0 }}></div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>Amanda Almeida</div>
                <div className="t-small">Founder &amp; Growth Strategist</div>
                <p className="t-small mt-12">Built and sold a vet-tech SaaS. Now obsessed with making local pet businesses unbeatable on Google.</p>
              </div>
            </Card>
            <Card style={{ padding: 0, overflow: 'hidden' }}>
              <div className="photo" style={{ aspectRatio: '1', backgroundImage: 'url("https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=400&q=80")', borderRadius: 0 }}></div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>Marcus Patel</div>
                <div className="t-small">Head of Paid &amp; Local SEO</div>
                <p className="t-small mt-12">12 years running Google Ads. Has spent more time in Google Business Profile than is healthy.</p>
              </div>
            </Card>
            <Card style={{ padding: 0, overflow: 'hidden' }}>
              <div className="photo" style={{ aspectRatio: '1', backgroundImage: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80")', borderRadius: 0 }}></div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>Sofia Reyes</div>
                <div className="t-small">Design &amp; Web Conversion</div>
                <p className="t-small mt-12">Designs websites that actually book appointments — not just look pretty in a portfolio.</p>
              </div>
            </Card>
            <Card style={{ padding: 0, overflow: 'hidden' }}>
              <div className="photo" style={{ aspectRatio: '1', backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80")', borderRadius: 0 }}></div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>Tom Whitfield</div>
                <div className="t-small">Content &amp; Reviews</div>
                <p className="t-small mt-12">Former clinic ops manager. Writes the content that turns one-time visitors into loyal clients.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="trusted-strip">
            <div className="label">TRUSTED BY TOP PET BUSINESSES</div>
            <div className="trusted-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="11" r="3"></circle>
                <circle cx="6.5" cy="8.5" r="1.6"></circle>
                <circle cx="17.5" cy="8.5" r="1.6"></circle>
                <ellipse cx="12" cy="18" rx="4" ry="2"></ellipse>
              </svg>
              <span>HAPPY TAILS</span>
              <span className="sub">VETERINARY CLINIC</span>
            </div>
            <div className="trusted-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 18V8l4-4h4l4 4h4v10"></path>
                <path d="M9 18v-6h6v6"></path>
                <circle cx="14" cy="9" r="1.5"></circle>
              </svg>
              <span>BARK &amp; STAY</span>
              <span className="sub">DOG DAYCARE</span>
            </div>
            <div className="trusted-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9"></circle>
                <line x1="12" y1="6" x2="12" y2="18"></line>
                <line x1="6" y1="12" x2="18" y2="12"></line>
              </svg>
              <span>PAWSITIVE CARE</span>
              <span className="sub">ANIMAL HOSPITAL</span>
            </div>
            <div className="trusted-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5l3 12 5-8 5 8 3-12"></path>
              </svg>
              <span>WAGGINGTON</span>
              <span className="sub">PET RESORT</span>
            </div>
            <div className="trusted-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
              </svg>
              <span>THE PET SALON</span>
              <span className="sub">&amp; SPA</span>
            </div>
            <div className="muted t-small">And many<br />more...</div>
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
