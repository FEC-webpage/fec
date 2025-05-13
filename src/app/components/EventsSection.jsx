"use client";

import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

const events = [
  {
    title: "StockSurge 2023",
    date: "March 2023",
    desc: "Flagship stock market simulation competition.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Finance 101",
    date: "July 2023",
    desc: "Introductory workshop for finance enthusiasts.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "EcoQuiz",
    date: "September 2023",
    desc: "Quiz competition on economics and finance.",
    img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80",
  },
];

const EventsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % events.length);
  const prev = () => setCurrent((prev) => (prev - 1 + events.length) % events.length);

  // Animation states
  const [animate, setAnimate] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle image loading
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="w-full px-4 py-16 flex flex-col items-center justify-center bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
      <div className="max-w-4xl w-full mx-auto bg-[var(--glass-bg)] rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center">
          Events & Competitions
        </h2>

        <div 
          ref={carouselRef}
          className="relative flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={prev}
            className="absolute left-0 p-2 bg-cyan-900 text-cyan-200 rounded-full hover:bg-yellow-300 hover:text-[#101624] shadow-md transition z-10"
            aria-label="Previous Event"
          >
            &#8592;
          </button>

          <div className="mx-8 w-full sm:w-96 bg-[#101624] rounded-xl shadow-lg p-6 border border-cyan-900 transition-all duration-500 ease-in-out">
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 bg-[#101624] animate-pulse"></div>
              )}
              <img
                src={events[current].img}
                alt={events[current].title}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={handleImageLoad}
                loading="lazy"
              />
            </div>
            <div className="text-xl font-semibold mb-1 text-cyan-200 truncate">{events[current].title}</div>
            <div className="text-yellow-300 mb-2">{events[current].date}</div>
            <div className="text-gray-400 line-clamp-2">{events[current].desc}</div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 p-2 bg-cyan-900 text-cyan-200 rounded-full hover:bg-yellow-300 hover:text-[#101624] shadow-md transition z-10"
            aria-label="Next Event"
          >
            &#8594;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {events.map((_, index) => (
            <button
              key={index}
              className={clsx(
                "w-3 h-3 rounded-full transition-all",
                index === current
                  ? "bg-yellow-300 scale-125"
                  : "bg-gray-500 opacity-50 hover:opacity-80"
              )}
              onClick={() => setCurrent(index)}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Collaborations Section */}
      <div className="w-full mt-16">
        <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">Our Collaborators</h3>
        <div className="bg-[var(--glass-bg)] rounded-xl p-6 shadow-lg border border-[#135561]/30">
          <p className="text-center text-gray-300 mb-6">Proud to partner with leading organizations to bring you world-class events</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Collaboration 1 */}
            <div className="bg-[#101624]/70 rounded-lg p-4 shadow-inner hover:shadow-[#135561]/20 hover:shadow-md transition-all duration-300 flex flex-col items-center border border-cyan-900/40">
              <div className="relative w-16 h-16 mb-3">
                <img
                  src="https://via.placeholder.com/150?text=Partner"
                  alt="Partner Organization"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-yellow-300 font-semibold">Financial Partners</h4>
              <p className="text-gray-400 text-sm text-center mt-2">Providing financial expertise and resources for our events</p>
            </div>

            {/* Collaboration 2 */}
            <div className="bg-[#101624]/70 rounded-lg p-4 shadow-inner hover:shadow-[#135561]/20 hover:shadow-md transition-all duration-300 flex flex-col items-center border border-cyan-900/40">
              <div className="relative w-16 h-16 mb-3">
                <img
                  src="https://via.placeholder.com/150?text=Partner"
                  alt="Partner Organization"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-yellow-300 font-semibold">Tech Sponsors</h4>
              <p className="text-gray-400 text-sm text-center mt-2">Providing technological support and platforms</p>
            </div>

            {/* Collaboration 3 */}
            <div className="bg-[#101624]/70 rounded-lg p-4 shadow-inner hover:shadow-[#135561]/20 hover:shadow-md transition-all duration-300 flex flex-col items-center border border-cyan-900/40">
              <div className="relative w-16 h-16 mb-3">
                <img
                  src="https://via.placeholder.com/150?text=Partner"
                  alt="Partner Organization"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-yellow-300 font-semibold">Academic Institutions</h4>
              <p className="text-gray-400 text-sm text-center mt-2">Supporting educational initiatives and resources</p>
            </div>
          </div>

          <div className={`mt-12 text-center transform transition-all duration-1000 ease-out delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="/contact" className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-[#081824] via-[#135561]/30 to-[#081824] border border-[#135561]/40 text-white hover:shadow-lg hover:shadow-[#135561]/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center font-medium tracking-wide">
                Become a Partner →
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#135561]/0 via-[#135561]/30 to-[#135561]/0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
