"use client";
import React from "react";

const timeline = [
  { year: "2015", event: "Club founded at IIT Kharagpur" },
  { year: "2017", event: "First StockSurge competition held" },
  { year: "2019", event: "Launched annual finance newsletter" },
  { year: "2022", event: "Expanded to 100+ active members" },
];

const AboutSection = () => (
  <section className="w-full flex flex-col items-center justify-center px-4 py-20 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
    <div className="max-w-6xl w-full mx-auto bg-[var(--glass-bg)] rounded-3xl shadow-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10">
      {/* Logo and SVG */}
      <div className="flex flex-col items-center relative">
        <div className="relative animate-pulse">
          <img src="./images/logo.png" alt="FEC Logo" className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-xl" />
          <svg className="absolute top-0 left-0 w-36 h-36 animate-spin-slow" viewBox="0 0 200 200">
            <defs>
              <path id="circle" d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0" />
            </defs>
            <text width="200" className="fill-cyan-300 font-bold text-xs">
              <textPath xlinkHref="#circle">FEC IIT KGP FEC IIT KGP FEC IIT KGP FEC IIT KGP FEC IIT KGP FEC IIT KGPFEC IIT KGP</textPath>
            </text>
          </svg>
        </div>
        <p className="mt-4 text-yellow-300 text-sm font-mono tracking-wider uppercase">Since 2015</p>
      </div>

      {/* About Content */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-6 leading-tight">About Us</h2>
        <p className="text-lg text-gray-300 mb-4">
          Our mission is to provide a platform for the students of IIT Kharagpur to showcase their talents and skills. We aim to help students learn, grow, and connect through finance and economics, empowering them with knowledge and opportunities for the future.
        </p>
        <p className="text-md text-gray-400">
          The Finance and Economics Club (FEC) is dedicated to fostering financial literacy, economic thinking, and leadership among students. We organize events, workshops, and competitions to inspire and educate the next generation of financial leaders.
        </p>

        <div className="mt-6">
          <h3 className="text-xl text-cyan-200 font-semibold mb-2">Milestones</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400">
            {timeline.map((item, idx) => (
              <li key={idx} className="bg-[#1e293b] px-4 py-2 rounded-lg border-l-4 border-cyan-400 shadow-md">
                <span className="text-yellow-300 font-semibold mr-2">{item.year}:</span>
                {item.event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
