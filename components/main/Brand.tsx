import Image from 'next/image';
import React from 'react';

import partners from '@/public/partners.png';

const Brand = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-xl sm:text-2xl font-semibold mt-15 lg:mt-20">
        Top brands choose us for their work
      </h1>
      <div className="relative w-full max-w-7xl mx-auto aspect-[15/1.5]">
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
