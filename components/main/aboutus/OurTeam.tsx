'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Title from '../../common/Title';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Sumayya', role: 'Functional Analyst', image: '/sumayya.png' },
  { name: 'Anas', role: 'Developer', image: '/anas.png' },
  { name: 'Vivek Madhavan', role: 'Director', image: '/vivek-madhavan.png' },
  { name: 'Abdul Basith', role: 'Director', image: '/abdul-basith.png' },
  { name: 'Sumayya', role: 'Functional Analyst', image: '/sumayya.png' },
  { name: 'Sumayya', role: 'Functional Analyst', image: '/sumayya.png' },
  { name: 'Sumayya', role: 'Functional Analyst', image: '/sumayya.png' },
  { name: 'Sumayya', role: 'Functional Analyst', image: '/sumayya.png' },
];

const ClientSwiper: React.FC = () => {
  const headerItems = ['our team'];
  return (
    <>
      <section className="bg-[#565654] text-white">
        <div className="main-padding">
          {/* Section Title */}
          <div className="text-center mb-5">
            <Title items={headerItems} />
          </div>
          <hr className="border border-gray-300 mb-5 lg:mb-10" />

          <div className="md:flex max-w-4xl py-5 lg:py-10 xl:pb-20 gap-10">
            <h1 className="text-2xl md:text-4xl font-semibold md:w-1/2 leading-snug">
              It’s all about the people
            </h1>
            <p className="text-lg font-extralight md:w-1/2 leading-relaxed">
              We are good ones. And so are your clients. We wouldn’t have it any other way. Meet the team.
            </p>
          </div>

          <div className="pb-10 lg:pb-20 xl:pb-30">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              modules={[Autoplay]}
              className="py-10"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-600/50 text-white flex flex-col justify-center items-center px-4 py-3 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSwiper;
