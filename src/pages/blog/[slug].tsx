import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogLayout } from '@/layouts/BlogLayout';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx';
import { CSSProperties } from 'react';

const components = {
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="t-h2 mt-48" style={{ marginTop: '48px' }}>
      {children}
    </h2>
  ),
  p: ({ children }: { children: React.ReactNode }) => <p className="t-body mt-12" style={{ marginTop: '12px' }}>{children}</p>,
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="checklist orange mt-16" style={{ marginTop: '16px' }}>
      {children}
    </ul>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
      {children}
    </li>
  ),
};

interface BlogPostPageProps {
  source: MDXRemoteSerializeResult;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
    image: string;
    readTime: string;
  };
}

export default function BlogPostPage({ source, frontmatter }: BlogPostPageProps) {
  return (
    <BlogLayout
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
      category={frontmatter.category}
      tags={frontmatter.tags}
      image={frontmatter.image}
      readTime={frontmatter.readTime}
    >
      <MDXRemote {...source} components={components} />
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllBlogPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content);

  return {
    props: {
      source: mdxSource,
      frontmatter: post.frontmatter,
    },
    revalidate: 60,
  };
};
