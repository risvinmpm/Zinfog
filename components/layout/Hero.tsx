"use client";
import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-[100px] grid lg:grid-cols-2 main-padding relative">
      <div className="lg:flex lg:flex-col justify-center">
        <h1 className="lg:text-5xl lg:leading-14 font-bold">
          Web Development Company right at the touch!
        </h1>
        <p className="lg:pt-10">
          Zinfog Codelabs, A hub mastered in the development of Odoo ERP system,
          Websites, Mobile and web application to meet your requirements.
        </p>
        <div className="mt-7">
          <Button type="button" variant="btn_blue" title="Book a demo!" />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/banner.png"
          alt="banner"
          width={600}
          height={500}
          className="flex justify-center items-center"
        />
        <Image
          src="/scroll.png"
          alt="scroll"
          width={120}
          height={120}
          className="lg:absolute lg:-bottom-16 lg:left-38"
        />
      </div>
    </div>
  );
};

export default Hero;
