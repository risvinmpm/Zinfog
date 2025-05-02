"use client"

import Image from 'next/image'
import React from 'react'
import Title from '../../common/Title';


const missionItems = [
    {
        title: "01",
        description:
            "To constantly train and educate the latest technology and trends to the Zinfog Codelabs Team, eventually produce innovative products and solutions.",
    },
    {
        title: "02",
        description:
            "To shape the team in order to build and maintain ever lasting customer relationship across the globe",
    },
    {
        title: "03",
        description:
            "To provide cost effective solutions with quick turnaround time.",
    },
    {
        title: "04",
        description:
            "To keep consistency in launching creative and innovative products to meet market needs.",
    },
];

const firstRowItems = missionItems.slice(0, 2);
const secondRowItems = missionItems.slice(2, 4);

const Mission = () => {
    const headerItems = ['mission'];
    return (
        <div
            className="w-full h-auto bg-center bg-cover py-10 lg:py-20 xl:py-30 main-padding">
            {/* Section Title */}
            <div className="text-center mb-5">
                <Title items={headerItems} />
            </div>

            <hr className="border border-gray-300 mb-5 lg:mb-10 xl:mb-20" />

            <div className="grid lg:grid-cols-5 relative">
                <div className="lg:col-span-2">
                    <div className="h-full flex items-center mission-note">
                        <div className="flex flex-col justify-center lg:max-w-sm">
                            <Image src="/mission.png" width={400} height={400} alt='' />
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold py-3 md:pt-5'>Mission</h2>
                            <p className='text-lg font-extralight'>Our primary objective consists of meeting the customer’s needs in an effective manner by adopting the policies on time.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 lg:ps-10 lg:flex lg:flex-col lg:gap-5">
                    {[firstRowItems, secondRowItems].map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="sm:flex md:flex lg:flex gap-5"
                        >
                            {row.map((item, index) => (
                                <div key={index} className="md:w-1/2 mt-10 lg:mt-0 flex gap-5 card-bg p-7 rounded-xl">
                                    <h1 className="font-bold text-xl">{item.title}</h1>
                                    <p className="">{item.description}</p>
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
