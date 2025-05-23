"use client"
import Image from 'next/image'
import React from 'react'
import Button from '../../common/Button'
import Brand from '../Brand'
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
        <section className='relative'>
            <div
                className="absolute inset-0 z-0 bg-center bg-no-repeat bg-fill"
                style={{ backgroundImage: 'url("/banner-bg.png")' }}
            />
            <div className="mt-[100px] grid md:grid-cols-2 gap-10 items-center main-padding relative">
                <motion.div
                    variants={bounceInLeft}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Want to know more about zinfog
                    </h1>
                    <p className="mt-6 text-lg text-gray-200">
                        Zinfog codelabs is a firm that provides customized Odoo erp solutions according to the client’s needs. We also develop customized mobile applications.
                    </p>
                    <div className="mt-7">
                        <Button type="button" variant="btn_blue" title="Enquire now" />
                    </div>
                </motion.div>

                <motion.div
                    variants={bounceInRight}
                    initial="hidden"
                    animate="visible"
                    className="relative flex justify-center items-center">
                    <Image src="/teamz.png" alt="banner" width={500} height={500} />

                    {/* Scroll Icon */}
                    <Image
                        src="/scroll.png"
                        alt="scroll"
                        width={120}
                        height={120}
                        className="absolute -bottom-16 left-2"
                    />
                </motion.div>
            </div>
            <Brand />
        </section>
    )
}

export default Banner
