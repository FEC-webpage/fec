"use client";
import React from "react";

const ContactSection = () => (
  <section className="w-full px-4 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
    <div className="max-w-4xl w-full mx-auto bg-[var(--glass-bg)] rounded-2xl shadow-xl p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
        <div className="hover:scale-105 transition-transform duration-200">
          <h3 className="text-xl font-semibold text-yellow-300 mb-1">Address</h3>
          <p className="text-gray-300">IIT Kharagpur</p>
          <p className="text-gray-400">West Bengal, 721302</p>
        </div>
        <div className="hover:scale-105 transition-transform duration-200">
          <h3 className="text-xl font-semibold text-yellow-300 mb-1">Phone</h3>
          <p className="text-gray-300">+91 8302963154</p>
        </div>
        <div className="hover:scale-105 transition-transform duration-200">
          <h3 className="text-xl font-semibold text-yellow-300 mb-1">Email</h3>
          <p className="text-gray-300">fec.iitkgp@gmail.com</p>
        </div>
      </div>

      <div className="flex justify-center gap-12 mt-6 flex-wrap">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-cyan-200 mb-2">Instagram</h3>
          <a
            href="https://www.instagram.com/fec_iitkgp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform duration-200"
          >
            {/* Instagram SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="60" height="60">
              <linearGradient id="a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#FFC107"></stop>
                <stop offset=".507" stopColor="#F44336"></stop>
                <stop offset=".99" stopColor="#9C27B0"></stop>
              </linearGradient>
              <path fill="url(#a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5z" />
              <circle cx="12.3" cy="3.7" r=".533" fill="#F44336"></circle>
              <path fill="#fff" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-cyan-200 mb-2">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/fec-iit-kharagpur-67585b27a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform duration-200"
          >
            {/* LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60" height="60">
              <path fill="#0A7BBA" d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0z" />
              <path
                fill="#fff"
                d="M160 360h60V200h-60zm30-180c19 0 30-13 30-30s-11-30-30-30-30 13-30 30 11 30 30 30zm210 180h-60v-90c0-24-9-40-30-40s-30 16-30 36v94h-60V200h60v26c8-14 25-28 52-28 39 0 68 26 68 82z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
