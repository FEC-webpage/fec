"use client";
import React from "react";
import Animatedletters from "./Animetedlatter";
import Typewriter from "./typewriter";

const FArray = ['F', 'i', 'n', 'a', 'n', 'c', 'e', ' '];
const AArray = ['a', 'n', 'd', ' '];
const EArray = ['E', 'c', 'o', 'n', 'o', 'm', 'i', 'c', 's', ' ', 'C', 'l', 'u', 'b'];
const placeArray = ['I', 'I', 'T', ' ', 'K', 'H', 'A', 'R', 'A', 'G', 'P', 'U', 'R'];

const HeroSection = () => (
  <section className="w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))] text-[var(--foreground)]">
    
    {/* Text Content */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-300 animate-gradient-x">
        <span className="block">Finance &</span>
        <span className="block">Economics Club</span>
      </h1>
      <p className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed">
        The Finance and Economics Club (FEC) serves as a dynamic platform for students to explore the world of finance, participate in thought-provoking events, and expand their understanding of the economy.
      </p>
      <a
        href="/register"
        className="inline-block px-6 py-3 rounded-md border-2 border-yellow-400 text-yellow-300 font-semibold hover:bg-yellow-300 hover:text-[#101624] transition-all duration-300 shadow-lg"
      >
        Register for Future Events
      </a>
    </div>

    {/* Logo Section */}
    <div className="flex-1 flex justify-center items-center relative">
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl animate-fade-in">
        <img
          src="./images/logo.png"
          alt="FEC Logo"
          className="w-full h-full object-contain animate-pulse"
        />
        {/* Optional spinning ring or text */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin-slow opacity-30"></div>
      </div>
    </div>
  </section>
);

export default HeroSection;
