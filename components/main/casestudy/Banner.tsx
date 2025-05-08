"use client";

import Image from "next/image";
import React from "react";

const bannerItems = [
  {
    title: "Avon Client Management Application",
    description:
      "We successfully implemented Avon’s ERP system. Our creative and skilled team contributed to improving their digital operations, making business functions more efficient and effective.",
    image: "/scroll.png"
  }
  // Add more items if needed
];

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
            <div className="md:col-span-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold max-w-xl leading-tight pb-5 lg:pb-0">
                {item.title}
              </h1>
            </div>

            {/* Right: Description + Image */}
            <div className="md:col-span-6 lg:flex items-center lg:justify-between gap-6">
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
            </div>
          </div>
        ))}
      </div>
      <div>
        <Image src="/case-banner.png" width={700} height={500} alt="" className="w-full pt-7 lg:pt-10" />
      </div>
    </section>
  );
};

export default Banner;
