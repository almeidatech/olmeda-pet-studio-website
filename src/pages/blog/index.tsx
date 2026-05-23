import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { PageLayout } from '@/layouts/PageLayout';
import { getAllBlogPosts, BlogPost } from '@/lib/mdx';

interface BlogIndexProps {
  posts: BlogPost[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>Blog — Olmeda Pet Studio</title>
        <meta name="description" content="Insights to grow your pet business — marketing, operations, client experience, and growth stories." />
        <meta property="og:title" content="Blog — Olmeda Pet Studio" />
        <meta property="og:description" content="Insights to grow your pet business — marketing, operations, client experience, and growth stories." />
      </Head>

      <PageLayout>
        <section className="page-hero" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">BLOG</div>
                <h1 className="t-display mt-16">
                  Insights to grow your <span className="accent">pet business.</span>
                </h1>
                <p className="t-lead mt-24">
                  Practical tips, strategies, and ideas to help you attract more clients, build a stronger brand, and grow a business you love.
                </p>
                <button className="btn dark mt-32" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>Subscribe for Updates</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <div className="photo dog-and-cat" style={{ aspectRatio: '5/4', minHeight: '360px' }}></div>
                <div style={{ position: 'absolute', top: '24px', right: '24px', width: '48px', height: '48px', borderRadius: '50%', background: 'var(--white)', display: 'grid', placeItems: 'center', boxShadow: 'var(--sh-sm)' }} className="float">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--orange)' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="section-sm" style={{ paddingTop: '40px', paddingBottom: '24px' }}>
          <div className="wrap">
            <div className="card" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div className="row" style={{ gap: '4px' }}>
                <button className="pill" style={{ background: 'transparent', borderColor: 'transparent', color: 'var(--orange)', fontWeight: 700 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </svg>
                  All Articles
                </button>
                <button className="pill" style={{ background: 'transparent', borderColor: 'transparent', color: 'var(--fg-2)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  Marketing
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', borderRadius: '8px', padding: '6px 12px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--fg-3)' }}>
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input type="search" placeholder="Search articles..." style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', width: '140px', color: 'var(--fg-1)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="section-sm">
          <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
            <div className="col" style={{ gap: 0 }}>
              {posts.map((post, index) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`} legacyBehavior>
                    <a style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '24px', padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} className="card">
                      <div className="photo dog-yorkie" style={{ aspectRatio: '1', borderRadius: 0 }}></div>
                      <div style={{ padding: '24px 28px 24px 0' }}>
                        <div className="row" style={{ justifyContent: 'space-between' }}>
                          <span className="tag orange">{post.frontmatter.category.toUpperCase()}</span>
                          <span className="t-tiny">{new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <h3 className="mt-12" style={{ fontSize: '21px' }}>
                          {post.frontmatter.title}
                        </h3>
                        <p className="t-small mt-12">{post.frontmatter.description}</p>
                        <div className="mt-16" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '14px' }}>
                          Read more <span style={{ display: 'inline-block' }}>→</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                  {index < posts.length - 1 && <div style={{ height: '1px', background: 'var(--gray-100)', margin: '8px 0' }}></div>}
                </div>
              ))}

              <div className="center" style={{ padding: '24px 0' }}>
                <button className="btn secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>Load More Articles</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '90px' }}>
              <div className="card" style={{ padding: '28px', background: '#FFF8F2', borderColor: '#FFE6CC' }}>
                <div className="row" style={{ justifyContent: 'space-between', marginBottom: '14px' }}>
                  <h3>Stay in the Loop</h3>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--orange)' }}>
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <p className="t-small">Get practical strategies and fresh ideas to help your pet business grow.</p>
                <div className="field mt-16">
                  <input type="email" className="input" placeholder="Your email address" />
                </div>
                <button className="btn dark" style={{ width: '100%', justifyContent: 'center' }}>
                  Subscribe
                </button>
                <div className="row mt-12 gap-8" style={{ fontSize: '12px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--orange)' }}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  No spam, just value. Unsubscribe anytime.
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

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllBlogPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
