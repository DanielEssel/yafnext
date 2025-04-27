"use client";

export default function BlogPreview() {
  const blogPosts = [
    {
      title: "Faith in Action: How to Live a Life of Purpose",
      snippet:
        "Discover practical ways to live out your faith every day and impact others positively.",
      link: "/blog/faith-in-action",
    },
    {
      title: "Overcoming Doubts: A Devotional on Trusting God",
      snippet:
        "Join us as we explore the importance of trust in God during difficult seasons of life.",
      link: "/blog/overcoming-doubts",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Latest Blogs</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{post.snippet}</p>
              </div>

              <a
                href={post.link}
                className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-500 text-sm sm:text-base"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
