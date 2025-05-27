"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const events = [
  {
    date: "06/09/2022",
    title: "Onam Celebration",
    description: `On September 6th, There was a huge Onam celebration at Cyberpark called Aaravam 2.0 and Zinfog held hands to celebrate the fabulous event. The program was a mix of Games, Fun, Dance, events, and much more. The event was full of prosperity and love.`,
    bgColor: "#1B1D32",
    images: ["/onam1.png", "/onam2.png", "/onam4.png", "/onam5.png"]
  },
  {
    date: "2nd May 2022",
    title: "Team Dine-out",
    description: `The Zinfog team decided to dine out together at a restaurant on a noon to celebrate the success party of Avon project. The main purpose of such dine outs are to embrace the team chemistry and build the bond stronger between the employees and the management.`,
    bgColor: "#131321",
    images: ["/dining1.png", "/dining2.png", "/dining3.png", "/dining4.png"]
  },
  {
    date: "1 January 2022",
    title: "New Year Celebration",
    description: `There was a huge celebration of welcoming the new year of 2022 which was full of happiness and vibes. The whole cyber park was chanting for the new year that filled with positive energy. The work culture is always appreciated by the employees at Zinfog.`,
    bgColor: "#1B1D32",
    images: ["/onam.png", "/onam.png", "/onam.png", "/onam.png"]
  }
];

const OurLife = () => {
  return (
    <section>
      {events.map((event, index) => (
        <div
          key={index}
          style={{ backgroundColor: event.bgColor }}
          className="py-10 lg:py-20 xl:py-30"
        >
          <div className="main-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="max-w-md">
                <p className="text-[#32E0F8] font-semibold">{event.date}</p>
                <h1 className="py-7 text-2xl lg:text-4xl font-bold">
                  {event.title}
                </h1>
                <p>{event.description}</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <Swiper
                spaceBetween={20}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={1}
                breakpoints={{ 1024: { slidesPerView: 2 } }}
                modules={[Autoplay]}
                className="py-6"
              >
                {event.images.map((imgSrc, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <div className="rounded-lg overflow-hidden shadow-md group">
                      <Image
                        src={imgSrc}
                        alt={`Event image ${imgIndex + 1}`}
                        width={300}
                        height={300}
                        className="object-fill transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurLife;
