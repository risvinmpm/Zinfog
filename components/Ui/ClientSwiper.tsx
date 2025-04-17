"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

export default function ClientSwiper({
  testimonials
}: {
  testimonials: Testimonial[];
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={false}
      //   pagination={{ clickable: true }}
      className="w-full"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 rounded-2xl shadow-md h-full flex flex-col justify-between text-center max-w-xl mx-auto">
            <p className="text-gray-50 mb-4">"{item.message}"</p>
            <div>
              <h4 className="font-bold text-lg">{item.name}</h4>
              <p className="text-sm text-gray-50">{item.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
