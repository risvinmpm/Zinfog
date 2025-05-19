"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

import Button from "../common/Button";
import { TypewriterEffect } from "../Ui/typewriter-effect";

import banner from "../../public/banner.png";
import scroll from "../../public/scroll.png";

const Hero = () => {
  const words = [
    { text: "WE CREATE ODOO ERP" },
    { text: "BRIDING YOUR VISION" },
    { text: "YOUR DIGITAL BUSINESS PARTNER" },
    { text: "CONNECT US AND GROW" },
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

  return (
    <section className="mt-[100px] grid md:grid-cols-2 gap-10 items-center main-padding relative">
      {/* Left Section (Text Content) */}
      <motion.div
        variants={bounceInLeft}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Web Development Company right at the touch!
        </h1>
        <p className="mt-6 text-lg text-gray-200">
          Zinfog Codelabs, A hub mastered in the development of Odoo ERP system,
          Websites, Mobile and web application to meet your requirements.
        </p>
        <div className="mt-7">
          <Button type="button" variant="btn_blue" title="Book a demo!" />
        </div>
      </motion.div>

      {/* Right Section (Image Content) */}
      <motion.div
        variants={bounceInRight}
        initial="hidden"
        animate="visible"
        className="relative flex justify-center items-center"
      >
        <Image src={banner} alt="banner" width={600} height={500} />

        {/* Decorative Line */}
        <div className="absolute top-5 left-1/3 transform -translate-x-1/3 bg-[#32C8F8] w-[1px] h-[35px]" />

        {/* Scroll Icon */}
        <Image
          src={scroll}
          alt="scroll"
          width={120}
          height={120}
          className="absolute -bottom-16 left-1/3 transform -translate-x-1/3"
        />

        {/* Typewriter Effect */}
        <div className="absolute top-10 left-33 md:left-44 transform -translate-y-1/2 rotate-90 origin-left">
          <TypewriterEffect words={words} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
