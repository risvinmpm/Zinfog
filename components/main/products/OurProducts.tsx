"use client"
import React from 'react'
import { motion } from 'framer-motion';

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


const OurProducts = () => {
    return (
        <div className='main-padding py-10 lg:py-20 xl:py-30 bg-[rgb(27, 29, 50)] relative'>
            <div
                className="absolute inset-0 z-0 bg-center bg-no-repeat bg-fill"
                style={{ backgroundImage: 'url("/banner-bg.png")' }}
            />
            <motion.div
                variants={bounceInLeft}
                initial="hidden"
                animate="visible"
                className='max-w-xl mx-auto text-center'>
                <h1 className='text-2xl lg:text-4xl xl:text-6xl font-bold mb-5 lg:mb-10'>Our Products</h1>
                <p className='text-lg font-extralight'>At Zinfog, the work culture creates an environment of belongingness and compassion among the employees. Creating an importance for the work-life balance, the place serves utmost integrity and quality in the work.</p>
            </motion.div>
        </div>
    )
}

export default OurProducts
