"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Title from '../../common/Title';
import { motion, useInView } from "framer-motion";

const AboutZinfog = () => {

    const bounceInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    };

    const headerItems = ['about us'];

    const aboutParagraphs = [
        `Zinfog Codelabs are experts in the field of Odoo ERP implementation and solutions. The frequent questions we hear are, ‘Is using Odoo easy?’, ‘How do we use Odoo?’, ‘Should we hire a person to operate Odoo?’. The foremost aim of Zinfog is to provide ERP solutions , effortless enough that an employee with limited technical skills can use them. To achieve this, our R&D team has integrated Artificial Intelligence and IoT technologies into the mix.`,
        `The Zinfog team consists of experienced Python and Django developers. The strategists all together enhance the latest technologies and tools to develop innovative products and solutions. Delivering cost effective solutions efficiently at a period of time is the Icing on the cake of Zinfog. We started Zinfog Codelabs Pvt Ltd in 2017, with an aim to provide simple and efficient ERP solutions to the masses. In the past two years, our association with Appmotions Technologies saw us venture out into the fields of Mobile App development and Website Design and development.`,
    ];

    // Scroll animation ref and hook
    const imageRef = useRef(null);
    const isInView = useInView(imageRef, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <section className="relative main-padding">
            {/* Section Title */}
            <div className="text-center mb-5">
                <Title items={headerItems} />
            </div>

            <hr className="border border-gray-300" />

            <div className="grid md:grid-cols-5 gap-10 items-center relative py-5 md:py-10">
                <div className="md:col-span-3">
                    <h1 className="text-2xl lg:text-4xl font-bold leading-tight text-[#D5D5D5]">
                        About zinfog
                    </h1>
                    <div className="pe-10 lg:pe-20 xl:pe-30">
                        {aboutParagraphs.map((paragraph, index) => (
                            <p key={index} className="mt-6 lg:text-lg font-extralight text-gray-200">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <motion.div
                    ref={imageRef}
                    variants={bounceInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="md:col-span-2 relative flex justify-center items-center">
                    <Image src="/life.png" alt="Zinfog team at work" width={500} height={500} className='w-full' />
                </motion.div>
            </div>
        </section >
    );
};

export default AboutZinfog;
