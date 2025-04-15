import Image from "next/image";
import React from "react";

import icon_1 from "@/public/icon_1.png";
import icon_2 from "@/public/icon_2.png";
import icon_3 from "@/public/icon_3.png";
import icon_4 from "@/public/icon_4.png";


const serviceItems = [
  {
    icon: icon_1,
    title: "Strategy",
    description:
      "Zinfog focuses on a strong strategy that helps clients exceed their expectations with complete solutions.",
  },
  {
    icon: icon_2,
    title: "Innovation",
    description:
      "We bring innovative ideas to life that push the boundaries of web design and development.",
  },
  {
    icon: icon_3,
    title: "Execution",
    description:
      "Our team ensures flawless execution and timely delivery of projects using modern tools and frameworks.",
  },
  {
    icon: icon_4,
    title: "Support",
    description:
      "We offer reliable support and maintenance for your website post-launch to ensure continued success.",
  },
];

const firstRowItems = serviceItems.slice(0, 2);
const secondRowItems = serviceItems.slice(2, 4);

const Services = () => {
  return (
    <div
      className="w-full h-auto bg-center bg-cover mt-10 lg:mt-16 xl:mt-26 py-5 lg:py-26"
      style={{ backgroundImage: "url('/bg_zinfogs.png')" }}
    >
      <div className="grid lg:grid-cols-5 main-padding relative">
        <div className="lg:col-span-2">
          <div className="h-full flex items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-xl lg:text-[35px] lg:leading-10 font-bold lg:text-left">
                How does Zinfog Codelabs distinct from the rest of the pack?
              </h1>
              <p className="mt-4 lg:text-left">
                As a Web Development company, our impeccable and advanced
                technological solutions give you the finest web design approach.
                We focus on providing the most powerful web development plans
                for your brand.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 md:ps-10 lg:flex lg:flex-col lg:gap-10">
          {[firstRowItems, secondRowItems].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="sm:flex md:flex lg:flex gap-5 md:gap-10"
            >
              {row.map((item, index) => (
                <div key={index} className="md:w-1/2 mt-10 lg:mt-0">
                  <Image src={item.icon} width={40} height={40} alt="icon" />
                  <h1 className="font-bold text-xl mt-2">{item.title}</h1>
                  <p className="mt-3 md:mt-5">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
