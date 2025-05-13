"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <footer className="py-10 px-4 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),rgba(255,224,130,0.3))] text-[var(--foreground)]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-3">Contact Info</h3>
          <p className="leading-relaxed">
            <span className="font-semibold">Address:</span> Finance and Economics Club, IIT Kharagpur<br />
            Kharagpur, West Bengal, India
          </p>
          <p className="mt-3">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:fec.iitkgp@gmail.com" className="text-cyan-300 hover:underline">
              fec.iitkgp@gmail.com
            </a>
          </p>
          <p className="mt-2">
            <span className="font-semibold">Phone:</span> +91 12345 67890
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-300 transition-colors">FINANCE</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition-colors">Stock Market</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition-colors">Financial Modeling</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition-colors">Crypto</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-cyan-300 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-cyan-300 transition-colors">Contact Us</a></li>
            <li><a href="/team" className="hover:text-cyan-300 transition-colors">Team</a></li>
            <li><a href="/privacy-policy/" className="hover:text-cyan-300 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-cyan-800 my-6" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} All Rights Reserved by
          <a href="#" className="text-cyan-300 font-semibold ml-1 hover:underline">FEC</a>
        </p>
        <div className="flex gap-4 justify-center">
          <SocialIcon url="https://www.facebook.com/people/Finance-and-Economics-Club-IIT-Kharagpur/100093523843643/?_rdr" target="_blank" style={{ height: 32, width: 32 }} />
          <SocialIcon url="mailto:fec.iitkgp@gmail.com" target="_blank" style={{ height: 32, width: 32 }} />
          <SocialIcon url="https://www.instagram.com/fec_iitkgp" target="_blank" style={{ height: 32, width: 32 }} />
          <SocialIcon url="https://www.linkedin.com/company/fec-iit-kharagpur" target="_blank" style={{ height: 32, width: 32 }} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
