'use client';

import React from 'react';
import Image from 'next/image';
import Title from '../../common/Title';

const sectionData = [
  {
    id: '01',
    header: ['The project', '01'],
    title: 'The project',
    bgColor: '#1B1D32',
    description: [
      'Botmock builds conversation design tools that have been revolutionizing the industry since 2017. They have helped over 4000 teams from over 30 countries. They had the same website since 2017, and in 2021, they decided it was time for a revamp.',
      "For this project, we worked with Botmock's cofounder and head of product, Brielle Nickoloff. Brielle tasked us with rebranding, redesigning, and redeveloping their business website.",
    ],
    images: ['/case1.png'],
  },
  {
    title: 'The challenge',
    bgColor: '#17182B',
    description: [
      'Botmock builds conversation design tools that have been revolutionizing the industry since 2017. They have helped over 4000 teams from over 30 countries. They had the same website since 2017, and in 2021, they decided it was time for a revamp.',
      "For this project, we worked with Botmock's cofounder and head of product, Brielle Nickoloff. Brielle tasked us with rebranding, redesigning, and redeveloping their business website.",
    ],
    images: ['/case1.png'],
  },
  {
    title: 'The solution',
    bgColor: '#1B1D32',
    description: [
      'Botmock builds conversation design tools that have been revolutionizing the industry since 2017. They have helped over 4000 teams from over 30 countries. They had the same website since 2017, and in 2021, they decided it was time for a revamp.',
      "The solution Botmock builds conversation design tools that have been revolutionizing the industry since 2017. They have helped over 4000 teams from over 30 countries. For this project, we worked with Botmock's cofounder and head of product, Brielle Nickoloff. Brielle tasked us with rebranding, redesigning, and redeveloping their business website.",
    ],
    images: ['/case1.png'],
  },
  {
    title: 'The outcome',
    bgColor: '#17182B',
    description: [
      'Botmock builds conversation design tools that have been revolutionizing the industry since 2017. They have helped over 4000 teams from over 30 countries. They had the same website since 2017, and in 2021, they decided it was time for a revamp.',
      "For this project, we worked with Botmock's cofounder and head of product, Brielle Nickoloff. Brielle tasked us with rebranding, redesigning, and redeveloping their business website.",
    ],
    images: ['/case1.png', '/case1.png'],
  },
];

const ProjectCase = () => {
  return (
    <section>
      {/* Section Title */}
      {sectionData[0].header && (
        <div className="main-padding text-center mb-3">
          <Title items={sectionData[0].header} />
          <hr className="border border-gray-700 mt-3" />
        </div>
      )}

      {/* Content Sections */}
      {sectionData.map((section, index) => (
        <div
          key={index}
          className="py-10"
          style={{ backgroundColor: section.bgColor }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start main-padding">
            {/* Left: Text */}
            <div className="lg:col-span-6">
              <div className="max-w-xl">
                <h2 className="text-2xl lg:text-4xl font-semibold pb-5 lg:pb-8 text-white">
                  {section.title}
                </h2>
                {section.description.map((para, i) => (
                  <p key={i} className="pb-4 text-gray-200 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Images */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {section.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${section.title} image ${i + 1}`}
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectCase;
