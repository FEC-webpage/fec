"use client";
import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import Tickertap from '../Newspage/tickertap';
import News from '../Component/News/News';
import "./news.css"

const NEWS_API =
  "https://finnhub.io/api/v1/news?category=general&token=cpib18hr01qpf0qhd26gcpib18hr01qpf0qhd270";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API);
        const data = await response.json();
        if (Array.isArray(data)) {
          setNews(data.slice(0, 5));
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-16 bg-gradient-to-br from-[#101624] via-[#17203a] to-[#0a1020]">
        <div className="text-cyan-300 text-xl font-bold animate-pulse">Loading...</div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-16 bg-gradient-to-br from-[#101624] via-[#17203a] to-[#0a1020]">
        <div className="text-yellow-300 text-xl font-bold">No news available</div>
      </div>
    );
  }

  const bigHeadlines = news.slice(0, 2);
  const latestHeadlines = news.slice(2);

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
      <div className="max-w-5xl w-full mx-auto bg-[var(--glass-bg)] rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center">Big Headlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bigHeadlines.map((article, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(135deg,var(--background),var(--glass-bg),var(--background))] rounded-xl shadow-lg p-6 flex flex-col items-center border border-cyan-900"
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-2 text-center">{article.headline}</h3>
              <img
                src={article.image}
                alt={article.headline}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-400 text-sm mb-2">
                {new Date(article.datetime * 1000).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-6 text-center">Latest Headlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestHeadlines.map((article, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(135deg,var(--background),var(--glass-bg),var(--background))] rounded-xl shadow-lg p-6 border border-cyan-900"
            >
              <h4 className="text-lg font-semibold text-cyan-200 mb-2">{article.headline}</h4>
              <p className="text-gray-400 text-sm mb-2">
                {new Date(article.datetime * 1000).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
