"use client";
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../theme/ThemeProvider';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'News', href: '/news' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Courses', href: '/' },
  { name: 'Resources', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Subscribe', href: '/' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0f172a] via-[#17203a] to-[#0a1020] shadow-xl border-b border-blue-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-3">
        <div className="flex items-center gap-3 animate-fade-in">
          <img
            src="./images/logo.png"
            alt="FEC Logo"
            className="h-12 w-12 rounded-full border-2 border-cyan-400 shadow-lg"
          />
          <span className="text-xl md:text-2xl font-bold text-white tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-300 animate-gradient-x">
            Finance & Economic Club
          </span>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-yellow-300 font-semibold px-3 py-2 transition duration-300 ease-in-out rounded-md hover:bg-blue-900/40"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-cyan-300 bg-transparent hover:bg-blue-900/40 transition flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.126 2.635-7.626 6.348-9.125a.75.75 0 01.908.325.75.75 0 01-.062.976A7.501 7.501 0 0012 19.5a7.48 7.48 0 006.574-3.906.75.75 0 01.976-.062.75.75 0 01.325.908z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 7.5A4.5 4.5 0 1112 16.5a4.5 4.5 0 010-9z" />
              </svg>
            )}
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-md border border-cyan-300 hover:bg-blue-900/40 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XMarkIcon className="h-7 w-7 text-cyan-300" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-cyan-300" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a1020] border-t border-blue-800 shadow-lg animate-slide-down px-4 py-3">
          <div className="flex flex-col gap-3">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-cyan-200 hover:text-yellow-300 font-medium px-2 py-2 transition duration-300 ease-in-out rounded hover:bg-blue-900/40"
              >
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
