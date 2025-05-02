import Image from 'next/image';
import React from 'react';

import partners from '../../public/partners.png';

const Brand = () => {
  return (
    <section className="py-8 main-padding">
      <h1 className="text-xl sm:text-2xl text-[#32E0F8] font-semibold mt-15 lg:mt-20">
        Top brands choose us for their work
      </h1>
      <div className="relative w-full mx-auto aspect-[15/1.5]">
        <Image
          src={partners}
          alt="Our Partners"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </div>
    </section>
  );
};

export default Brand;
