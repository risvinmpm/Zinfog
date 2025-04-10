"use client";
import React from "react";
import Button from "../common/Button";
import Image from "next/image";

import banner from '@/public/banner.png'
import scroll from '@/public/scroll.png'

const Hero = () => {

  const hero = [
    {
      id: 1,
      title: "Web Development Company right at the touch!",
      desc: "Zinfog Codelabs, A hub mastered in the development of Odoo ERP system, Websites, Mobile and web application to meet your requirements.",
    },
  ];

  return (
    <div className="mt-[100px] grid lg:grid-cols-2 main-padding relative">
      {hero.map((item) => (
        <div key={item.id} className="lg:flex lg:flex-col justify-center">
          <h1 className="lg:text-5xl lg:leading-14 font-bold">
            {item.title}
          </h1>
          <p className="lg:pt-10 text-lg">{item.desc}</p>
          <div className="mt-7">
            <Button type="button" variant="btn_blue" title="Book a demo!" />
          </div>
        </div>
      ))}

      <div className="relative">
        <Image
          src={banner}
          alt="banner"
          width={600}
          height={500}
          className="flex justify-center items-center"
        />
        <Image
          src={scroll}
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
