"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const bannerItems = [
  {
    title: "Avon Client Management Application",
    description:
      "We successfully implemented Avon’s ERP system. Our creative and skilled team contributed to improving their digital operations, making business functions more efficient and effective.",
    image: "/scroll.png"
  }
];

const bounceInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const bounceInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const Banner = () => {
  return (
    <section className="main-padding py-10 lg:py-20 mt-20 relative">
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-fill"
        style={{ backgroundImage: 'url("/banner-bg.png")' }}
      />
      <div className="space-y-16">
        {bannerItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 md:gap-10 items-center"
          >
            {/* Left: Title */}
            <motion.div
              variants={bounceInLeft}
              initial="hidden"
              animate="visible"
              className="md:col-span-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold max-w-xl leading-tight pb-5 lg:pb-0">
                {item.title}
              </h1>
            </motion.div>

            {/* Right: Description + Image */}
            <motion.div
              variants={bounceInRight}
              initial="hidden"
              animate="visible"
              className="md:col-span-6 lg:flex items-center lg:justify-between gap-6">
              <p className="text-base text-gray-100 max-w-sm pb-5 lg:pb-0">
                {item.description}
              </p>
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="px-5 sm:px-20 lg:px-20 pt-10 lg:pt-20">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="overflow-hidden rounded-lg"
        >
          <Image
            src="/case-banner.png"
            alt="career"
            width={1000}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
