"use client";
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Courses', href: '/' },
  { name: 'Resources', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Contact us', href: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('nav')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-gradient-to-r from-[#0a1020] via-[#042f40] to-[#082a4a] shadow-xl"
        : "bg-gradient-to-r from-[#0a1020]/95 via-[#042f40]/95 to-[#082a4a]/95 backdrop-blur-md"
      } border-b border-[#135561]/30`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-3">
        <a href="/" className="flex items-center gap-1 animate-fade-in">
          <img
            src="./images/logo.png"
            alt="FEC Logo"
            className="h-12 w-12 rounded-full border-2 border-cyan-400 shadow-lg"
          />
          <span className="text-xl md:text-2xl font-bold text-white tracking-wide 
            bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-300 
            animate-gradient-x hover:from-cyan-300 hover:to-yellow-400 transition-all duration-500">
            Finance & Economics Club
          </span>
        </a>

        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-200 hover:text-white font-medium mx-1 px-3 py-2 rounded-md overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#135561]/20 to-[#135561]/10 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center">
                <span className="mr-1 text-[#135561] opacity-0 transform translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">•</span>
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden relative p-2 rounded-md border border-[#135561] hover:border-yellow-300 transition-colors duration-300 overflow-hidden group"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="absolute inset-0 w-full bg-gradient-to-tr from-[#135561]/20 via-transparent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          {open ? (
            <XMarkIcon className="h-7 w-7 text-[#135561] group-hover:text-yellow-300 transition-colors duration-300 relative z-10" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-[#135561] group-hover:text-yellow-300 transition-colors duration-300 relative z-10" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-[#0a1020] to-[#042f40] backdrop-blur-lg shadow-2xl border-t border-[#135561]/20 px-4 py-6 animate-slide-down max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-200 hover:text-white font-medium py-3 px-4 transition-all duration-300 rounded-md hover:bg-gradient-to-r hover:from-[#135561]/20 hover:to-transparent flex items-center group"
              >
                <span className="w-0 h-px bg-[#135561] mr-0 group-hover:w-5 group-hover:mr-3 transition-all duration-300"></span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
