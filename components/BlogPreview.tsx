export default function BlogPreview() {
    const blogPosts = [
      {
        title: 'Faith in Action: How to Live a Life of Purpose',
        snippet: 'Discover practical ways to live out your faith every day and impact others positively.',
        link: '/blog/faith-in-action',
      },
      {
        title: 'Overcoming Doubts: A Devotional on Trusting God',
        snippet: 'Join us as we explore the importance of trust in God during difficult seasons of life.',
        link: '/blog/overcoming-doubts',
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-4 text-gray-700">{post.snippet}</p>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-500"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  