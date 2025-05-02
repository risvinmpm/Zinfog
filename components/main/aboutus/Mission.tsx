"use client"

import Image from 'next/image'
import React from 'react'
import Title from '../../common/Title';


const missionItems = [
    {
        title: "Strategy",
        description:
            "Zinfog focuses on a strong strategy that helps clients exceed their expectations with complete solutions.",
    },
    {
        title: "Innovation",
        description:
            "We bring innovative ideas to life that push the boundaries of web design and development.",
    },
    {
        title: "Execution",
        description:
            "Our team ensures flawless execution and timely delivery of projects using modern tools and frameworks.",
    },
    {
        title: "Support",
        description:
            "We offer reliable support and maintenance for your website post-launch to ensure continued success.",
    },
];

const firstRowItems = missionItems.slice(0, 2);
const secondRowItems = missionItems.slice(2, 4);

const Mission = () => {
    const headerItems = ['mission'];
    return (
        <div
            className="w-full h-auto bg-center bg-cover mt-10 lg:mt-16 xl:mt-26 py-5 lg:py-26 main-padding">
            {/* Section Title */}
            <div className="text-center mb-10">
                <Title items={headerItems} />
            </div>

            <hr className="border border-gray-300 mb-5 lg:mb-10" />

            <div className="grid lg:grid-cols-5 relative">
                <div className="lg:col-span-2">
                    <div className="h-full flex items-center">
                        <div className="flex flex-col justify-center max-w-sm">
                            <Image src="/mission.png" width={400} height={400} alt='' />
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold py-3 md:pt-5'>Mission</h2>
                            <p>Our primary objective consists of meeting the customer’s needs in an effective manner by adopting the policies on time.</p>
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
                                    <h1 className="font-bold text-xl mt-2">{item.title}</h1>
                                    <p className="mt-3 md:mt-5">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mission
