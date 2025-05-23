'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="relative bg-[url('/zinfog-life.jpg')] bg-cover bg-center h-screen">
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated content */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white main-padding"
      >
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          More Than A Workplace
        </h1>
        <p className="max-w-2xl text-base lg:text-lg leading-relaxed">
          At Zinfog, the work culture creates an environment of belongingness and compassion among the employees.
          Creating an importance for the work-life balance, the place serves utmost integrity and quality in the work.
          The platform helps individuals in shaping their skills and attributes at a higher level.
        </p>
      </motion.div>
    </section>
  );
};

export default Banner;
