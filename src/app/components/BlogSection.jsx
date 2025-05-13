"use client";
import React from "react";

const blogs = [
  {
    title: "Roadmap on Finance",
    content:
      "Whether you are a newbie or a seasoned explorer, the blog is your treasure map to navigate the world of finance. Remember you are never alone on this quest! A Comprehensive Roadmap Presented by the Finance and Economics Club of IIT Kharagpur.",
    link: "https://medium.com/@fec.iitkgp/exploring-career-paths-in-finance-acaf3f438ca1",
  },
  {
    title: "Summer of Finance",
    content:
      "It's time to embark on a thrilling journey into Finance. As we delve into Finance, let's make the most of our vacations by immersing ourselves in its wonders. While your preferred learning style may vary, we recommend some resources that have proven to be useful:",
    link: "https://boatneck-cougar-e3c.notion.site/SUMMER-OF-FINANCE-79cc8e8d272b479e9a8fcf1e916314ad",
  },
];

const instagramPosts = [
  {
    imgSrc: "/post/recessionpost.jpeg",
    topic: "2025 Recession: Imminent Reality or Speculative Fear?",
    content:
      "The Finance and Economics Club at IIT Kharagpur invites you to explore the potential 2025 recession. Is it an imminent reality or just speculative fear? Stay informed with our detailed analysis and join the discussion to share your insights. Swipe through to learn more about the economic outlook for 2025.",
    link: "https://www.instagram.com/p/C9E6ruixvwx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    imgSrc: "/post/meta&eco.jpeg",
    topic: "Metaverse & Economics",
    content:
      "The metaverse is here, and it's bringing a whole new dimension to economics! Finance and Economics Club, IIT Kharagpur invites you to explore the intersection of these two exciting fields. Swipe through the post where we discuss the potential impact of the metaverse on traditional economic concepts.",
    link: "https://www.instagram.com/p/C8EExgVR9uF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    imgSrc: "/post/impactofelection.jpeg",
    topic: "IMPACT OF ELECTION on STOCK MARKET",
    content:
      "Elections can significantly influence the stock market, creating waves of volatility and opportunity. This in-depth analysis by FEC IIT Kharagpur explores how political shifts affect market trends, investor behavior, and asset prices.",
    link: "https://www.instagram.com/p/C7w818_SbkN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    imgSrc: "/post/kotakmahindra.jpeg",
    topic: "Kotak Mahindra Bank crisis",
    content:
      "The Kotak Mahindra Bank crisis has sent shockwaves through the financial sector. Discover the causes and far-reaching consequences of this critical event with us.",
    link: "https://www.instagram.com/p/C7PJSoiPHGd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const BlogSection = () => (
  <section className="w-full flex flex-col items-center justify-center px-4 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
    <div className="max-w-7xl w-full mx-auto rounded-2xl shadow-2xl p-6 md:p-12 bg-[var(--glass-bg)]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-300 mb-10 border-b pb-4 border-cyan-700">Our Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--glass-bg)] hover:bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-md transition-transform transform hover:scale-105 duration-300 p-6 border border-cyan-800"
          >
            <h3 className="text-xl font-bold text-yellow-300 mb-2 line-clamp-2">{blog.title}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{blog.content}</p>
            <span className="text-cyan-300 font-semibold">Read More →</span>
          </a>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-center text-yellow-300 mb-8 border-b pb-2 border-cyan-700">Instagram Highlights</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {instagramPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0f172a] hover:bg-[#14213d] text-white rounded-xl shadow-md transition-transform transform hover:scale-105 duration-300 p-5 border border-cyan-800 flex flex-col"
          >
            <img
              src={post.imgSrc}
              alt={post.topic}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-semibold text-cyan-200 mb-1 line-clamp-2">{post.topic}</h4>
            <p className="text-gray-300 text-sm flex-grow line-clamp-3">{post.content}</p>
            <span className="mt-3 text-yellow-300 font-semibold">Read More →</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
