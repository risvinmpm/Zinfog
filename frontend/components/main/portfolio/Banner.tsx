"use client";
import React from "react";
import Button from '../../common/Button'
import Image from 'next/image'
import { motion } from "framer-motion";

const Banner = () => {
    const bounceInLeft = {
        hidden: { opacity: 0, x: -100 },
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

    return (
        <div className="w-full h-full py-10 lg:py-20 xl:py-30 bg-[rgb(27, 29, 50)] relative main-padding">
            <div
                className="absolute inset-0 z-0 bg-center bg-no-repeat bg-fill"
                style={{ backgroundImage: 'url("/banner-bg.png")' }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-5 items-center gap-10">
                <motion.div
                    variants={bounceInLeft}
                    initial="hidden"
                    animate="visible"
                    className="sm:col-span-3 flex flex-col justify-center h-full">
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold max-w-xl">
                        Creating world class digital solutions
                    </h1>
                    <p className="py-5 md:pt-10 pb-5 max-w-lg text-lg font-extralight">
                        Keeping up with the pace digitally, Zinfog has developed World class digital solutions for your business.
                    </p>
                    <div><Button variant="btn_blue" title="Request a quote" type="button" /></div>
                </motion.div>
                <motion.div
                    variants={bounceInRight}
                    initial="hidden"
                    animate="visible"
                    className="sm:col-span-2 flex flex-col items-center justify-center">
                    <Image
                        src="/portfolio_banner.png"
                        width={400}
                        height={400}
                        alt="Portfolio Banner"
                        className="w-full"
                    />
                    <Image
                        src="/scroll.png"
                        width={120}
                        height={120}
                        alt="Scroll Icon"
                        className="mx-auto mt-4"
                    />
                </motion.div>
            </div>
        </div >
    )
}

export default Banner
