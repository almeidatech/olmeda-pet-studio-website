import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
    image: string;
    readTime: string;
  };
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const slug = file.replace('.mdx', '');

      return {
        slug,
        frontmatter: data as any,
        content,
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as any,
    content,
  };
}
