import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';
import { Card } from '@/components/Card';

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies — Olmeda Pet Studio</title>
        <meta name="description" content="Real growth stories from veterinary clinics and dog daycares we've worked with." />
        <meta property="og:title" content="Case Studies — Olmeda Pet Studio" />
        <meta property="og:description" content="Real growth stories from veterinary clinics and dog daycares we've worked with." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span className="current">Case Studies</span>
            </div>

            <div style={{ maxWidth: '780px' }}>
              <div className="eyebrow">CASE STUDIES</div>
              <h1 className="t-display mt-16">
                Real pet businesses. <span className="accent">Real numbers.</span>
              </h1>
              <p className="t-lead mt-24">
                No vanity metrics. No cherry-picked screenshots. The full story behind every growth system we've built — what worked, what didn't, and the numbers that followed.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Link href="/work/aylas-acres" legacyBehavior>
              <Card style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, padding: 0, textDecoration: 'none', color: 'inherit', overflow: 'hidden', cursor: 'pointer' }}>
                <div className="photo dog-portrait" style={{ borderRadius: 0, minHeight: '480px' }}></div>
                <div style={{ padding: '48px' }}>
                  <div className="row gap-8" style={{ marginBottom: '14px' }}>
                    <span className="tag">DOG SANCTUARY</span>
                    <span className="tag orange">FEATURED</span>
                  </div>
                  <h2 className="t-h1" style={{ fontSize: '34px' }}>From invisible to irresistible</h2>
                  <span className="h-rule"></span>
                  <p className="t-body mt-24">
                    Aylas Acres Dog Sanctuary came to us with low visibility and inconsistent ad results. In 4 months, we turned it around — and the numbers are still climbing.
                  </p>
                  <div className="grid-2 mt-32" style={{ gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--blue)' }}>+1,290%</div>
                      <div className="t-small mt-4">website traffic</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--blue)' }}>+5,733%</div>
                      <div className="t-small mt-4">organic traffic</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--orange)' }}>−178%</div>
                      <div className="t-small mt-4">cost per result</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--green)' }}>+289%</div>
                      <div className="t-small mt-4">donations</div>
                    </div>
                  </div>
                  <div className="mt-32" style={{ color: 'var(--blue)', fontWeight: 600 }}>
                    Read the full story <span className="arrow">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        <section className="section gray">
          <div className="wrap">
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
              <div>
                <div className="eyebrow blue">MORE STORIES</div>
                <h2 className="t-h1 mt-12">Different sizes. Same playbook.</h2>
              </div>
              <div className="row gap-8">
                <button className="pill" style={{ background: 'var(--white)', borderColor: 'var(--orange)', color: 'var(--orange)' }}>All</button>
                <button className="pill">Veterinary</button>
                <button className="pill">Daycare</button>
                <button className="pill">Boarding</button>
                <button className="pill">Hybrid</button>
              </div>
            </div>

            <div className="grid-3" style={{ gap: '24px' }}>
              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo clinic-exterior" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <div className="row gap-8" style={{ marginBottom: '10px' }}>
                    <span className="tag">VETERINARY</span>
                    <span className="tag gray">Austin, TX</span>
                  </div>
                  <h3>Pawsitive Care Animal Hospital</h3>
                  <p className="t-small mt-12">From page-2 to the map pack in 4 months. New patients up 2.4×, Google rating from 3.2 to 4.9.</p>
                  <div className="row mt-16 gap-16">
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '18px' }}>2.4×</div>
                      <div className="t-tiny">new patients</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--orange)', fontSize: '18px' }}>4.9★</div>
                      <div className="t-tiny">Google rating</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo dog-running" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <div className="row gap-8" style={{ marginBottom: '10px' }}>
                    <span className="tag">DAYCARE</span>
                    <span className="tag gray">Dallas, TX</span>
                  </div>
                  <h3>Happy Tails Daycare</h3>
                  <p className="t-small mt-12">From 58% occupancy to 91% in 6 months. Premium pricing held. Holiday season fully pre-booked.</p>
                  <div className="row mt-16 gap-16">
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '18px' }}>91%</div>
                      <div className="t-tiny">occupancy</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--orange)', fontSize: '18px' }}>+$24k</div>
                      <div className="t-tiny">monthly</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo dog-grooming" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <div className="row gap-8" style={{ marginBottom: '10px' }}>
                    <span className="tag">HYBRID</span>
                    <span className="tag gray">Miami, FL</span>
                  </div>
                  <h3>The Pet Salon &amp; Spa</h3>
                  <p className="t-small mt-12">Grooming + daycare hybrid. Service-level positioning fixed. Both lines grew without cannibalizing.</p>
                  <div className="row mt-16 gap-16">
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '18px' }}>3.1×</div>
                      <div className="t-tiny">leads</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--orange)', fontSize: '18px' }}>6.4×</div>
                      <div className="t-tiny">ROAS</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo reception" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <div className="row gap-8" style={{ marginBottom: '10px' }}>
                    <span className="tag">BOARDING</span>
                    <span className="tag gray">Phoenix, AZ</span>
                  </div>
                  <h3>Bark &amp; Stay Resort</h3>
                  <p className="t-small mt-12">Premium boarding facility competing with corporate Camp Bow Wow. Now the top result citywide.</p>
                  <div className="row mt-16 gap-16">
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '18px' }}>Top 1</div>
                      <div className="t-tiny">map pack</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--orange)', fontSize: '18px' }}>88%</div>
                      <div className="t-tiny">occupancy</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo vet-team" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <div className="row gap-8" style={{ marginBottom: '10px' }}>
                    <span className="tag">VETERINARY</span>
                    <span className="tag gray">Denver, CO</span>
                  </div>
                  <h3>Anderson Pet Clinic</h3>
                  <p className="t-small mt-12">22-year independent clinic beating the corporate chain three blocks down. First sustained growth in a decade.</p>
                  <div className="row mt-16 gap-16">
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '18px' }}>+178%</div>
                      <div className="t-tiny">calls</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--orange)', fontSize: '18px' }}>+$40k</div>
                      <div className="t-tiny">monthly</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo lab-puppy" style={{ aspectRatio: '4/3', borderRadius: 0 }}></div>
                <div style={{ padding: '24px' }}>
                  <div className="row gap-8" style={{ marginBottom: '10px' }}>
                    <span className="tag">DAYCARE</span>
                    <span className="tag gray">Seattle, WA</span>
                  </div>
                  <h3>Waggington Pet Resort</h3>
                  <p className="t-small mt-12">Brand new facility opening with zero brand presence. Hit 70% occupancy in month 4 — twice the industry benchmark.</p>
                  <div className="row mt-16 gap-16">
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '18px' }}>M4</div>
                      <div className="t-tiny">break-even</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--orange)', fontSize: '18px' }}>70%</div>
                      <div className="t-tiny">occupancy</div>
                    </div>
                  </div>
                </div>
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
