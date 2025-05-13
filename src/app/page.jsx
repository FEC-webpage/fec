"use client";

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
import GallerySection from './components/GallerySection';
import RecruitmentSection from './components/RecruitmentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './styles/globals.css';
import ChartSection from './components/ChartSection';


export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#08a6c2] to-[#0a1020] opacity-90"></div>
      {/* <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))] opacity-90"></div> */}
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <section id="home" className="py-12">
            <div className="glass card">
              <HeroSection />
            </div>
          </section>
          <section id="about" className="py-12">
            <div className="glass card">
              <h2 className="text-3xl neon-text mb-6">About Us</h2>
              <AboutSection />
            </div>
          </section>
                          <section id="team" className="py-12">
                    <div className="glass card">
                        <h2 className="text-4xl neon-text mb-6">Our Team</h2>
                        <TeamSection />
                    </div>
                </section>
          <section id="events" className="py-12">
            <div className="glass card">
              <h2 className="text-3xl neon-text mb-6">Events</h2>
              <EventsSection />
            </div>
          </section>
          <section id="events" className="py-12">
            <div className="glass card">
              <h2 className="text-3xl neon-text mb-6">Charts</h2>
              <ChartSection />
            </div>
          </section>
          <section id="blog" className="py-12">
            <div className="glass card">
              <h2 className="text-3xl neon-text mb-6">Blog</h2>
              <BlogSection />
            </div>
          </section>
          <section id="gallery" className="py-12">
            <div className="glass card">
              <h2 className="text-3xl neon-text mb-6">Gallery</h2>
              <GallerySection />
            </div>
          </section>
          <section id="join" className="py-12">
            <div className="glass card">
              <h2 className="text-3xl neon-text mb-6">Join Us</h2>
              <RecruitmentSection />
            </div>
          </section>
          <section id="contact" className="py-12">
            <div className="glass card">
              <h2 className="text-3xl neon-text mb-6">Contact</h2>
              <ContactSection />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
} 