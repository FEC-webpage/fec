"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      type: 'spring',
      stiffness: 60,
    },
  }),
};

const floatAnim = {
  animate: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const RecruitmentSection = () => (
  <section className="w-full flex flex-col items-center justify-center px-4 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
    <div className="max-w-2xl w-full mx-auto bg-[#17203a] rounded-2xl shadow-xl p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">Join Us</h2>
      <p className="mb-8 text-lg text-gray-300">
        Become a part of the Finance and Economics Club! Fill out the form below to express your interest.
      </p>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg border-2 border-cyan-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all bg-[var(--glass-bg)] text-[var(--foreground)] placeholder:text-cyan-400"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg border-2 border-cyan-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all bg-[var(--glass-bg)] text-[var(--foreground)] placeholder:text-cyan-400"
          required
        />
        <textarea
          placeholder="Why do you want to join?"
          className="p-3 rounded-lg border-2 border-cyan-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all bg-[var(--glass-bg)] text-[var(--foreground)] placeholder:text-cyan-400"
          rows={3}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-[linear-gradient(90deg,var(--accent-yellow),var(--primary-blue),var(--accent-yellow))] hover:bg-[linear-gradient(90deg,var(--primary-blue),var(--accent-yellow),var(--primary-blue))] text-[var(--background)] font-bold px-8 py-3 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default RecruitmentSection; 