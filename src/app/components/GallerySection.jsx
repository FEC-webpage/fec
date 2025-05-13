"use client";
import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    alt: "StockSurge 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Finance 101",
  },
  {
    src: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80",
    alt: "EcoQuiz",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    alt: "Team Discussion",
  },
];

const GallerySection = () => (
  <section className="w-full flex flex-col items-center justify-center px-4 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
    <div className="max-w-6xl w-full mx-auto bg-[#17203a] rounded-2xl shadow-xl p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group overflow-hidden rounded-xl shadow-lg border border-cyan-900 transition-transform duration-300 hover:scale-105 cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-40 justify-center items-center text-white font-semibold">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
