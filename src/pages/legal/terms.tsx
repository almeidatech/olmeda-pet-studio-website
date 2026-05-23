import Head from 'next/head';
import Link from 'next/link';
import { PageLayout } from '@/layouts/PageLayout';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service — Olmeda Pet Studio</title>
        <meta name="description" content="The terms that govern your use of olmedapetstudio.com." />
        <meta property="og:title" content="Terms of Service — Olmeda Pet Studio" />
        <meta property="og:description" content="The terms that govern your use of olmedapetstudio.com." />
      </Head>

      <PageLayout>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">›</span>
              <span>Legal</span>
              <span className="sep">›</span>
              <span className="current">Terms of Service</span>
            </div>
            <div style={{ maxWidth: '680px' }}>
              <div className="eyebrow">LEGAL</div>
              <h1 className="t-display mt-16">
                Terms of <span className="accent">Service.</span>
              </h1>
              <p className="t-lead mt-24">Effective May 1, 2026. Short, fair, and human-readable.</p>
            </div>
          </div>
        </section>

        <section className="section-sm">
          <div className="wrap-sm">
            <section>
              <h2 className="t-h2">Using this site</h2>
              <p className="t-body mt-16">
                You can use olmedapetstudio.com to learn about our services, read our blog, download free resources, and book a free growth audit. We ask that you don't try to break it, scrape it for AI training without permission, or use it to impersonate someone else. Otherwise — go nuts.
              </p>
            </section>
            <section className="mt-48">
              <h2 className="t-h2">Service engagements</h2>
              <p className="t-body mt-16">
                If you hire us, the specifics of the engagement (scope, deliverables, fees, term, guarantee) are governed by a separate signed Master Services Agreement. This page does not constitute that agreement and nothing here overrides what's in your signed MSA.
              </p>
            </section>
            <section className="mt-48">
              <h2 className="t-h2">The 4-month guarantee</h2>
              <p className="t-body mt-16">
                Our public-facing 4-month guarantee is a real, contractual commitment in every standard MSA we sign. Specifics — exactly what "results" means, how it's measured, and what happens if we miss — are spelled out in your engagement contract before you sign. If you have questions, ask before signing.
              </p>
            </section>
            <section className="mt-48">
              <h2 className="t-h2">Content &amp; intellectual property</h2>
              <p className="t-body mt-16">
                Everything on this site (copy, design, code, logos, photography) is © 2026 Olmeda Pet Studio LLC unless explicitly noted. Free resources we publish (guides, toolkits) are yours to use in your own business, but please don't repost them publicly as if they were yours.
              </p>
            </section>
            <section className="mt-48">
              <h2 className="t-h2">Disclaimers</h2>
              <p className="t-body mt-16">
                Statistics and case studies on this site reflect real client results. They are illustrative — your specific outcomes depend on your market, competition, and execution. We never guarantee specific rankings, revenue numbers, or timelines outside of a signed engagement.
              </p>
            </section>
            <section className="mt-48">
              <h2 className="t-h2">Changes to these terms</h2>
              <p className="t-body mt-16">
                We may update these terms occasionally. Material changes will be flagged on this page. Continued use of the site means you accept the current version.
              </p>
            </section>
            <section className="mt-48">
              <h2 className="t-h2">Questions</h2>
              <p className="t-body mt-16">
                Email{' '}
                <a href="mailto:legal@olmedapetstudio.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>
                  legal@olmedapetstudio.com
                </a>{' '}
                with anything we left unclear. Real human will reply.
              </p>
            </section>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
