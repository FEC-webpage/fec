"use client";

import React, { useState, useEffect } from "react";
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

  const next = () => setCurrent((prev) => (prev + 1) % events.length);
  const prev = () => setCurrent((prev) => (prev - 1 + events.length) % events.length);

  return (
    <section className="w-full px-4 py-16 flex flex-col items-center justify-center bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
      <div className="max-w-4xl w-full mx-auto bg-[#17203a] rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center">
          Events & Competitions
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 p-2 bg-cyan-900 text-cyan-200 rounded-full hover:bg-yellow-300 hover:text-[#101624] shadow-md transition z-10"
            aria-label="Previous Event"
          >
            &#8592;
          </button>

          <div className="mx-8 w-full sm:w-96 bg-[#101624] rounded-xl shadow-lg p-6 border border-cyan-900 transition-all duration-500 ease-in-out">
            <img
              src={events[current].img}
              alt={events[current].title}
              className="w-full h-40 object-cover rounded-lg mb-4 transition-opacity duration-500"
            />
            <div className="text-xl font-semibold mb-1 text-cyan-200">{events[current].title}</div>
            <div className="text-yellow-300 mb-2">{events[current].date}</div>
            <div className="text-gray-400">{events[current].desc}</div>
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
    </section>
  );
};

export default EventsSection;
