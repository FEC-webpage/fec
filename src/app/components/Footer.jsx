"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <footer className="py-8 px-2 sm:px-4 bg-gradient-to-br from-[#0a1020] via-[#042f40] to-[#082a4a] text-[var(--foreground)] shadow-xl border-t border-cyan-900/40">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
        {/* Contact Info */}
        <div className=" p-4 sm:p-5 rounded-lg shadow-inner">
          <h3 className="text-lg sm:text-xl font-bold neon-text mb-3 sm:mb-4 tracking-wide">Contact Info</h3>
          <p className="leading-relaxed text-gray-200 text-sm sm:text-base">
            <span className="font-semibold text-white">Address:</span> Finance and Economics Club, IIT Kharagpur<br />
            Kharagpur, West Bengal, India
          </p>
          <p className="mt-2 sm:mt-3 text-gray-200 text-sm sm:text-base">
            <span className="font-semibold text-white">Email:</span>{" "}
            <a href="mailto:fec.iitkgp@gmail.com" className="text-cyan-300 hover:text-yellow-300 transition-all duration-300 hover:underline">
              fec.iitkgp@gmail.com
            </a>
          </p>
          <p className="mt-2 text-gray-200 text-sm sm:text-base">
            <span className="font-semibold text-white">Phone:</span> +91 12345 67890
          </p>
        </div>

        {/* Categories */}
        <div className=" p-4 sm:p-5 rounded-lg shadow-inner">
          <h3 className="text-lg sm:text-xl font-bold neon-text mb-3 sm:mb-4 tracking-wide">Categories</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li><a href="#" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center text-sm sm:text-base">Finance</a></li>
            <li><a href="#" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center text-sm sm:text-base">Stock Market</a></li>
            <li><a href="#" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center text-sm sm:text-base">Financial Modeling</a></li>
            <li><a href="#" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center text-sm sm:text-base">Crypto</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className=" p-4 sm:p-5 rounded-lg shadow-inner">
          <h3 className="text-lg sm:text-xl font-bold neon-text mb-3 sm:mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li><a href="/about" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center text-sm sm:text-base">About Us</a></li>
            <li><a href="/contact" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center text-sm sm:text-base">Contact Us</a></li>
            <li><a href="/team" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center text-sm sm:text-base">Team</a></li>
            <li><a href="/privacy-policy/" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center text-sm sm:text-base">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-cyan-900/50 my-6 sm:my-8" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <p className="text-xs sm:text-sm text-center text-gray-300">
          &copy; {new Date().getFullYear()} All Rights Reserved by
          <a href="#" className="text-[#08a6c2] font-semibold ml-1 hover:text-yellow-300 transition-all duration-300 hover:underline">FEC</a>
        </p>
        <div className="flex gap-3 sm:gap-5 justify-center">
          <SocialIcon url="https://www.facebook.com/people/Finance-and-Economics-Club-IIT-Kharagpur/100093523843643/?_rdr" target="_blank" style={{ height: 32, width: 32 }} bgColor="#08a6c2" fgColor="#ffffff" className="hover:scale-110 transition-transform duration-300" />
          <SocialIcon url="mailto:fec.iitkgp@gmail.com" target="_blank" style={{ height: 32, width: 32 }} bgColor="#08a6c2" fgColor="#ffffff" className="hover:scale-110 transition-transform duration-300" />
          <SocialIcon url="https://www.instagram.com/fec_iitkgp" target="_blank" style={{ height: 32, width: 32 }} bgColor="#08a6c2" fgColor="#ffffff" className="hover:scale-110 transition-transform duration-300" />
          <SocialIcon url="https://www.linkedin.com/company/fec-iit-kharagpur" target="_blank" style={{ height: 32, width: 32 }} bgColor="#08a6c2" fgColor="#ffffff" className="hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
