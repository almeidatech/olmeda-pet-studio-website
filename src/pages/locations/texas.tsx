import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function Texas() {
  return (
    <>
      <Head>
        <title>Pet Care Marketing in Texas — Olmeda Pet Studio</title>
        <meta name="description" content="Growth systems for veterinary clinics and dog daycares across Texas. Multi-city expertise, local-first execution." />
        <meta property="og:title" content="Pet Care Marketing in Texas — Olmeda Pet Studio" />
        <meta property="og:description" content="Growth systems for veterinary clinics and dog daycares across Texas. Multi-city expertise, local-first execution." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Locations</span>
              <span className="sep">›</span>
              <span className="current">Texas</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">TEXAS · PET CARE MARKETING</div>
                <h1 className="t-display mt-16">
                  From Austin to Dallas: <span className="accent">grow on Google.</span>
                </h1>
                <p className="t-lead mt-24">
                  Texas is the fastest-growing pet care market in the country. We help independent vets and daycares across the state turn that growth into booked appointments — not just impressions.
                </p>
                <div className="row mt-32">
                  <Link className="btn primary large" href="/resources/free-audit">
                    <span>Free Texas growth audit</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
                <div className="row mt-32 gap-24">
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--blue)', lineHeight: 1 }}>42+</div>
                    <div className="t-small mt-4">Texas clients</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--orange)', lineHeight: 1 }}>5 metros</div>
                    <div className="t-small mt-4">
                      Austin · DFW · Houston
                      <br />
                      San Antonio · El Paso
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>3.6×</div>
                    <div className="t-small mt-4">
                      avg. ROAS
                      <br />
                      across the state
                    </div>
                  </div>
                </div>
              </div>
              <div className="photo texas" style={{ aspectRatio: '5/4', minHeight: '380px' }}></div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="eyebrow blue">CITIES WE SERVE</div>
              <h2 className="t-h1 mt-16">Local everywhere</h2>
            </div>
            <div className="grid-3 mt-48" style={{ gap: '20px' }}>
              <Card style={{ textDecoration: 'none', color: 'inherit', padding: '28px' }}>
                <Link href="/locations/austin" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <h3>Austin</h3>
                    <span className="tag">22 clients</span>
                  </div>
                  <p className="t-small mt-12">Mueller, South Congress, Round Rock, Cedar Park.</p>
                  <div className="mt-16" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '14px' }}>
                    Explore Austin →
                  </div>
                </Link>
              </Card>

              <Card style={{ textDecoration: 'none', color: 'inherit', padding: '28px' }}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <h3>Dallas-Fort Worth</h3>
                  <span className="tag">12 clients</span>
                </div>
                <p className="t-small mt-12">Plano, Frisco, Arlington, Uptown Dallas, Southlake.</p>
                <div className="mt-16" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '14px' }}>
                  Explore DFW →
                </div>
              </Card>

              <Card style={{ textDecoration: 'none', color: 'inherit', padding: '28px' }}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <h3>Houston</h3>
                  <span className="tag">5 clients</span>
                </div>
                <p className="t-small mt-12">Heights, Memorial, Sugar Land, The Woodlands.</p>
                <div className="mt-16" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '14px' }}>
                  Explore Houston →
                </div>
              </Card>

              <Card style={{ textDecoration: 'none', color: 'inherit', padding: '28px' }}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <h3>San Antonio</h3>
                  <span className="tag">2 clients</span>
                </div>
                <p className="t-small mt-12">Stone Oak, Alamo Heights, downtown.</p>
                <div className="mt-16" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '14px' }}>
                  Explore San Antonio →
                </div>
              </Card>

              <Card style={{ textDecoration: 'none', color: 'inherit', padding: '28px' }}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <h3>El Paso</h3>
                  <span className="tag">1 client</span>
                </div>
                <p className="t-small mt-12">Bilingual-ready growth strategy.</p>
                <div className="mt-16" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '14px' }}>
                  Get in touch →
                </div>
              </Card>

              <Card style={{ textDecoration: 'none', color: 'inherit', padding: '28px', background: 'linear-gradient(135deg,#FFF1E8,#FFE6D2)', borderColor: '#FFD0B0' }}>
                <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <h3>Your city</h3>
                    <span className="tag orange">NEW</span>
                  </div>
                  <p className="t-small mt-12">Not on the list? We serve all Texas markets.</p>
                  <div className="mt-16" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '14px' }}>
                    Talk to us →
                  </div>
                </Link>
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
