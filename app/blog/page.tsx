// app/blog/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { fetchNews } from '../../lib/fetchNews';
import { NewsArticle } from '../../types/NewsArticle';
import Link from 'next/link';

const BlogPage = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch news data using useEffect
  useEffect(() => {
    const loadArticles = async () => {
      const news = await fetchNews('Christianity'); // Keyword for fetching Christian news
      setArticles(news);
      setLoading(false);
    };

    loadArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Blog</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Get inspired, grow your faith, and learn through our latest blog posts.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{article.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{new Date(article.publishedAt).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-6">{article.description}</p>
            <Link href={article.url}>
              <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                Read More
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
