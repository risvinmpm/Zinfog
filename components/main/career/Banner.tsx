import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";
import Brand from '../Brand';
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

    return (
        <section className='py-10 lg:py-20 xl:py-30 mt-20 bg-[#131321] relative'>
            <div
                className="absolute inset-0 z-0 bg-center bg-no-repeat bg-fill"
                style={{ backgroundImage: 'url("/banner-bg.png")' }}
            />
            <div className='main-padding'>
                <motion.div
                    variants={bounceInLeft}
                    initial="hidden"
                    animate="visible"
                    className='mx-auto max-w-lg text-center'>
                    <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold pb-5 lg:pb-10'>Careers</h1>
                    <p>We’re always expanding our lively, hard-working group of creators, believers, and achievers.</p>
                </motion.div>
                <div className="px-5 sm:px-20 lg:px-20 pt-10 lg:pt-20">
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.2 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="overflow-hidden rounded-lg"
                    >
                        <Image
                            src="/career.png"
                            alt="career"
                            width={1000}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </div>
            <Marquee>
                <Image
                    src="/work.png"
                    width={1000}
                    height={100}
                    alt="idea"
                    className="bg-no-repeat pt-24"
                />
            </Marquee>
            <div className='mb-0'><Brand /></div>
        </section>
    )
}

export default Banner
