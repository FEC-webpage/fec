"use client";
import React, { useState, useEffect } from "react";


const ContactSection = () => {
  // Animation states
  const [animate, setAnimate] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <section className="w-full px-4 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
      <div className="max-w-6xl w-full mx-auto bg-[var(--glass-bg)] rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center">Contact Us</h2>

        {/* Top row with contact info cards - single row on all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-1">Address</h3>
          <p className="text-gray-300">IIT Kharagpur</p>
          <p className="text-gray-400">West Bengal, 721302</p>
        </div>
          </div>
          <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-1">Phone</h3>
          <p className="text-gray-300">+91 8302963154</p>
        </div>
          </div>
          <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-1">Email</h3>
          <p className="text-gray-300">fec.iitkgp@gmail.com</p>
            </div>
        </div>
      </div>

        {/* Two column layout for form and events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Contact Form + Social Media Links */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">
            <div className="bg-gradient-to-br from-[#081824] to-[#0a1f2f] p-6 rounded-xl border border-[#135561]/30 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-300 mb-6">Send us a message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full bg-[#081824]/70 border border-[#135561]/30 rounded-lg px-4 py-2.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#135561]/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="w-full bg-[#081824]/70 border border-[#135561]/30 rounded-lg px-4 py-2.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#135561]/50 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-1 text-sm">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Message subject"
                    className="w-full bg-[#081824]/70 border border-[#135561]/30 rounded-lg px-4 py-2.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#135561]/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1 text-sm">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message"
                    className="w-full bg-[#081824]/70 border border-[#135561]/30 rounded-lg px-4 py-2.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#135561]/50 transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#135561] to-[#0a4d5a] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#135561]/20 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Social Media Links below form */}
            <div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <a href="https://www.instagram.com/fec_iitkgp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
                  <div className="bg-gradient-to-br from-[#081824] to-[#0a1f2f] p-3 rounded-lg border border-[#135561]/20 hover:shadow-[0_0_15px_rgba(19,85,97,0.3)] transition-all duration-300 group-hover:translate-y-[-5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-pink-500 mx-auto">
                      <path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059c-.976.045-1.505.207-1.858.344c-.466.182-.8.398-1.15.748c-.35.35-.566.683-.748 1.15c-.137.353-.3.882-.344 1.857c-.048 1.055-.058 1.37-.058 4.04c0 2.67.01 2.986.058 4.04c.045.977.207 1.505.344 1.858c.182.466.399.8.748 1.15c.35.35.683.566 1.15.748c.353.137.882.3 1.857.344c1.054.048 1.37.058 4.04.058c2.67 0 2.987-.01 4.04-.058c.976-.045 1.505-.207 1.858-.344c.466-.182.8-.398 1.15-.748c.35-.35.566-.683.748-1.15c.137-.353.3-.882.344-1.857c.048-1.055.058-1.37.058-4.04c0-2.67-.01-2.986-.058-4.04c-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15c-.35-.35-.683-.566-1.15-.748c-.353-.137-.882-.3-1.857-.344c-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27a5.135 5.135 0 0 1 0-10.27zm0 8.467a3.333 3.333 0 1 0 0-6.666a3.333 3.333 0 0 0 0 6.666zm6.538-8.672a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0z" />
                    </svg>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/fec-iit-kharagpur-67585b27a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
                  <div className="bg-gradient-to-br from-[#081824] to-[#0a1f2f] p-3 rounded-lg border border-[#135561]/20 hover:shadow-[0_0_15px_rgba(19,85,97,0.3)] transition-all duration-300 group-hover:translate-y-[-5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-blue-600 mx-auto">
                      <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </div>
                </a>
                <a href="https://www.facebook.com/fec.iitkgp" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
                  <div className="bg-gradient-to-br from-[#081824] to-[#0a1f2f] p-3 rounded-lg border border-[#135561]/20 hover:shadow-[0_0_15px_rgba(19,85,97,0.3)] transition-all duration-300 group-hover:translate-y-[-5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-blue-700 mx-auto">
                      <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </div>
                </a>
                <a href="https://twitter.com/fec_iitkgp" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="group">
                  <div className="bg-gradient-to-br from-[#081824] to-[#0a1f2f] p-3 rounded-lg border border-[#135561]/20 hover:shadow-[0_0_15px_rgba(19,85,97,0.3)] transition-all duration-300 group-hover:translate-y-[-5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-white mx-auto">
                      <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z" />
                    </svg>
                  </div>
                </a>
                <a href="https://www.youtube.com/channel/UCfec_iitkgp" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="group">
                  <div className="bg-gradient-to-br from-[#081824] to-[#0a1f2f] p-3 rounded-lg border border-[#135561]/20 hover:shadow-[0_0_15px_rgba(19,85,97,0.3)] transition-all duration-300 group-hover:translate-y-[-5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-red-600 mx-auto">
                      <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816c3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Right: Upcoming Events */}
          <div className="order-1 lg:order-2">
            <div className="mt-0 bg-gradient-to-br from-[#081824] to-[#0a1f2f] p-6 rounded-xl border border-[#135561]/30 shadow-lg h-full flex flex-col">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">Upcoming Events</h3>
              <p className="text-gray-300 mb-4">
                Register for our upcoming events and join us for exciting opportunities:
              </p>
              <ul className="text-gray-400 space-y-4">
                <li className="bg-[#081824]/50 p-3 rounded-lg border border-[#135561]/10 hover:border-[#135561]/30 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0">
                      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>
                    <div className="flex-1">
                      <h4 className="text-cyan-200 font-semibold">StockSurge Competition 2023</h4>
                      <p className="text-gray-400 text-sm mb-2">December 15, 2023</p>
                      <p className="text-gray-300 text-sm mb-3">Our flagship stock market simulation with prizes worth ₹50,000 for winners.</p>
                      <a
                        href="/register/stocksurge"
                        className="inline-block px-4 py-1.5 text-sm bg-gradient-to-r from-[#135561]/90 to-[#0a4d5a]/90 text-white font-medium rounded-md hover:from-[#135561] hover:to-[#0a4d5a] transition-all duration-300"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </li>

                <li className="bg-[#081824]/50 p-3 rounded-lg border border-[#135561]/10 hover:border-[#135561]/30 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0">
                      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
            </svg>
                    <div className="flex-1">
                      <h4 className="text-cyan-200 font-semibold">Finance Industry Panel Discussion</h4>
                      <p className="text-gray-400 text-sm mb-2">January 10, 2024</p>
                      <p className="text-gray-300 text-sm mb-3">Join industry experts as they discuss career opportunities in finance.</p>
                      <a
                        href="/register/panel-discussion"
                        className="inline-block px-4 py-1.5 text-sm bg-gradient-to-r from-[#135561]/90 to-[#0a4d5a]/90 text-white font-medium rounded-md hover:from-[#135561] hover:to-[#0a4d5a] transition-all duration-300"
                      >
                        Register Now
          </a>
        </div>
                  </div>
                </li>

                <li className="bg-[#081824]/50 p-3 rounded-lg border border-[#135561]/10 hover:border-[#135561]/30 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0">
                      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>
                    <div className="flex-1">
                      <h4 className="text-cyan-200 font-semibold">Blockchain & Crypto Workshop</h4>
                      <p className="text-gray-400 text-sm mb-2">January 25, 2024</p>
                      <p className="text-gray-300 text-sm mb-3">Learn blockchain technology and cryptocurrency trading fundamentals.</p>
          <a
                        href="/register/blockchain-workshop"
                        className="inline-block px-4 py-1.5 text-sm bg-gradient-to-r from-[#135561]/90 to-[#0a4d5a]/90 text-white font-medium rounded-md hover:from-[#135561] hover:to-[#0a4d5a] transition-all duration-300"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </li>
              </ul>

              <div className={`mt-12 text-center transform transition-all duration-1000 ease-out delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a
                  href="/events"
                  className="inline-block mt-3 px-5 py-2 rounded-full bg-gradient-to-r from-[#081824] via-[#135561]/30 to-[#081824] border border-[#135561]/40 text-white hover:shadow-lg hover:shadow-[#135561]/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden text-sm"
                ><span className="relative z-10 flex items-center font-medium tracking-wide">
                    View All Events
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#135561]/0 via-[#135561]/30 to-[#135561]/0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-xl overflow-hidden border border-[#135561]/30 shadow-lg">
          <div className="relative w-full h-[300px] bg-[#081824]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6583850988!2d87.3073888!3d22.3200234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440255555547%3A0x6f2f20dd0c0d6793!2sIndian%20Institute%20of%20Technology%20Kharagpur!5e0!3m2!1sen!2sin!4v1687439918952!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IIT Kharagpur Map"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 max-w-full w-full h-64"
            ></iframe>
        </div>
      </div>
    </div>
  </section>
  )
};

export default ContactSection;
