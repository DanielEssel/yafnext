// pages/blog/[slug].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchChristianBlogs } from '@/services/fetchChristianBlogs';

type BlogPost = {
  title: string;
  content: string;
  slug: string;
  date: string;
};

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const blogs = await fetchChristianBlogs();
        const foundPost = blogs.find((p) => p.slug === slug);
        setPost(foundPost || null);
      }
    };

    loadPost();
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      <div className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
