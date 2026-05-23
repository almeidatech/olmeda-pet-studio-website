import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import { PageLayout } from './PageLayout';

interface BlogLayoutProps {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  children: ReactNode;
}

export function BlogLayout({
  title,
  description,
  date,
  category,
  tags,
  image,
  readTime,
  children,
}: BlogLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} — Olmeda Pet Studio</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} — Olmeda Pet Studio`} />
        <meta property="og:description" content={description} />
      </Head>

      <PageLayout>
        <section className="page-hero" style={{ paddingBottom: '24px' }}>
          <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">›</span>
                <Link href="/blog">Blog</Link>
                <span className="sep">›</span>
                <span style={{ color: 'var(--orange)' }}>{category}</span>
                <span className="sep">›</span>
                <span className="current">{title}</span>
              </div>

              <span className="tag orange">{category.toUpperCase()}</span>
              <h1 className="t-display mt-16" style={{ fontSize: 'clamp(34px,4vw,52px)' }}>
                {title}
              </h1>
              <p className="t-lead mt-24">{description}</p>

              <div className="photo" style={{ aspectRatio: '16/9', borderRadius: 'var(--r-lg)', marginTop: '32px', backgroundImage: `var(--photo-${image})` }}></div>

              <div style={{ maxWidth: '680px', marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {children}
              </div>
            </div>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '90px' }}>
              <div className="card" style={{ padding: '24px', background: '#F7F8FA', border: 'none' }}>
                <h3 style={{ fontSize: '17px' }}>About This Article</h3>
                <p className="t-small mt-12">{description}</p>
                <div className="mt-16">
                  <div className="kv">
                    <span className="k">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Published
                    </span>
                    <span className="v">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="kv">
                    <span className="k">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      Read Time
                    </span>
                    <span className="v">{readTime}</span>
                  </div>
                  <div className="kv">
                    <span className="k">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                      Category
                    </span>
                    <span className="v">{category}</span>
                  </div>
                </div>

                <div className="mt-16" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div className="t-tiny" style={{ fontWeight: 700 }}>
                    Tags
                  </div>
                  <div className="row gap-8">
                    {tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-24">
                  <div className="t-tiny" style={{ fontWeight: 700, marginBottom: '8px' }}>
                    Share This Article
                  </div>
                  <div className="row gap-8">
                    <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--white)', display: 'grid', placeItems: 'center', color: 'var(--fg-1)', border: '1px solid var(--gray-100)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3H13.5v6.9A10 10 0 0 0 22 12z" />
                      </svg>
                    </a>
                    <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--white)', display: 'grid', placeItems: 'center', color: 'var(--fg-1)', border: '1px solid var(--gray-100)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4 4 0 0 0 1.8-2.3 8 8 0 0 1-2.6 1 4.2 4.2 0 0 0-7.1 3.7A12 12 0 0 1 3 4.8a4.2 4.2 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5 4.2 4.2 0 0 0 3.4 4.1 4 4 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.5 12 12 0 0 0 8.3 20c7.7 0 12-6.5 12-12v-.6A8.4 8.4 0 0 0 22 5.8z" />
                      </svg>
                    </a>
                    <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--white)', display: 'grid', placeItems: 'center', color: 'var(--fg-1)', border: '1px solid var(--gray-100)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h.04c.35-.66 1.2-1.36 2.5-1.36 2.66 0 3.16 1.74 3.16 4v4.76z" />
                      </svg>
                    </a>
                    <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--white)', display: 'grid', placeItems: 'center', color: 'var(--fg-1)', border: '1px solid var(--gray-100)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
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
