import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";
import Brand from '../Brand';

const Banner = () => {
    return (
        <section className='py-10 lg:py-20 xl:py-30 mt-20 bg-[#131321] relative'>
            <div
                className="absolute inset-0 z-0 bg-center bg-no-repeat bg-fill"
                style={{ backgroundImage: 'url("/banner-bg.png")' }}
            />
            <div className='main-padding'>
                <div className='mx-auto max-w-lg text-center'>
                    <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold pb-5 lg:pb-10'>Careers</h1>
                    <p>We’re always expanding our lively, hard-working group of creators, believers, and achievers.</p>
                </div>
                <Image src="/career.png" width={1000} height={400} alt='career' className='w-full pt-10 lg:pt-20' />
            </div>
            <Marquee>
                <Image
                    src="/work.png"
                    width={1000}
                    height={100}
                    alt="idea"
                    className="bg-no-repeat pt-10"
                />
            </Marquee>
            <div className='mb-0'><Brand /></div>
        </section>
    )
}

export default Banner
