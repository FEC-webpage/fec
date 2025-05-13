"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <footer className="py-10 px-4 bg-gradient-to-br from-[#0a1020] via-[#042f40] to-[#082a4a] text-[var(--foreground)] shadow-xl border-t border-cyan-900/40">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Contact Info */}
        <div className="backdrop-blur-sm bg-[#08a6c2]/5 p-5 rounded-lg shadow-inner">
          <h3 className="text-xl font-bold text-[#08a6c2] mb-4 tracking-wide">Contact Info</h3>
          <p className="leading-relaxed text-gray-200">
            <span className="font-semibold text-white">Address:</span> Finance and Economics Club, IIT Kharagpur<br />
            Kharagpur, West Bengal, India
          </p>
          <p className="mt-3 text-gray-200">
            <span className="font-semibold text-white">Email:</span>{" "}
            <a href="mailto:fec.iitkgp@gmail.com" className="text-cyan-300 hover:text-yellow-300 transition-all duration-300 hover:underline">
              fec.iitkgp@gmail.com
            </a>
          </p>
          <p className="mt-2 text-gray-200">
            <span className="font-semibold text-white">Phone:</span> +91 12345 67890
          </p>
        </div>

        {/* Categories */}
        <div className="backdrop-blur-sm bg-[#08a6c2]/5 p-5 rounded-lg shadow-inner">
          <h3 className="text-xl font-bold text-[#08a6c2] mb-4 tracking-wide">Categories</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center"><span className="mr-2 text-xs">▶</span>FINANCE</a></li>
            <li><a href="#" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center"><span className="mr-2 text-xs">▶</span>Stock Market</a></li>
            <li><a href="#" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center"><span className="mr-2 text-xs">▶</span>Financial Modeling</a></li>
            <li><a href="#" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center"><span className="mr-2 text-xs">▶</span>Crypto</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="backdrop-blur-sm bg-[#08a6c2]/5 p-5 rounded-lg shadow-inner">
          <h3 className="text-xl font-bold text-[#08a6c2] mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/about" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center"><span className="mr-2 text-xs">▶</span>About Us</a></li>
            <li><a href="/contact" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center"><span className="mr-2 text-xs">▶</span>Contact Us</a></li>
            <li><a href="/team" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center"><span className="mr-2 text-xs">▶</span>Team</a></li>
            <li><a href="/privacy-policy/" className="text-gray-200 hover:text-yellow-300 transition-all duration-300 flex items-center"><span className="mr-2 text-xs">▶</span>Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-cyan-900/50 my-8" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-center text-gray-300">
          &copy; {new Date().getFullYear()} All Rights Reserved by
          <a href="#" className="text-[#08a6c2] font-semibold ml-1 hover:text-yellow-300 transition-all duration-300 hover:underline">FEC</a>
        </p>
        <div className="flex gap-5 justify-center">
          <SocialIcon url="https://www.facebook.com/people/Finance-and-Economics-Club-IIT-Kharagpur/100093523843643/?_rdr" target="_blank" style={{ height: 36, width: 36 }} bgColor="#08a6c2" fgColor="#ffffff" className="hover:scale-110 transition-transform duration-300" />
          <SocialIcon url="mailto:fec.iitkgp@gmail.com" target="_blank" style={{ height: 36, width: 36 }} bgColor="#08a6c2" fgColor="#ffffff" className="hover:scale-110 transition-transform duration-300" />
          <SocialIcon url="https://www.instagram.com/fec_iitkgp" target="_blank" style={{ height: 36, width: 36 }} bgColor="#08a6c2" fgColor="#ffffff" className="hover:scale-110 transition-transform duration-300" />
          <SocialIcon url="https://www.linkedin.com/company/fec-iit-kharagpur" target="_blank" style={{ height: 36, width: 36 }} bgColor="#08a6c2" fgColor="#ffffff" className="hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
