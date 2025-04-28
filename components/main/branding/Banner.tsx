import React from "react";
import Button from "../../common/Button";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className="relative bg-[url('/banner_bg.png')] bg-cover bg-center">
            {/* Background Overlay */}
            <div className="w-full h-full">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center main-padding w-full pt-20 lg:pt-30 xl:pt-46">
                    {/* Left Content */}
                    <div className="md:col-span-3 space-y-6 text-white">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight max-w-lg">
                            Building your digital success with our web development expertise.
                        </h1>
                        <p className="text-lg">
                        Being a Web development company, We have a pack of enthusiasts who can filter the needs of the client and design a website tailored enough to meet the requirements.
                        </p>
                        <Button type="button" variant="btn_blue" title="Request a Quote" />
                    </div>

                    {/* Right Image */}
                    <div className="md:col-span-2 flex justify-center">
                        <Image
                            src="/branding-banner.png"
                            width={600}
                            height={600}
                            alt="ERP Banner"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
            <Marquee>
                {/* <h1 className="text-8xl py-10 font-bold"> I can be a React component, multiple React components, or just sometext.</h1> */}
                <Image
                    src="/branding_carousel.png"
                    width={1400}
                    height={100}
                    alt="idea"
                    className="py-14 bg-no-repeat pb-10 md:pb-20 lg:pb-40"
                />
            </Marquee>
        </div>
    );
};

export default Banner;
