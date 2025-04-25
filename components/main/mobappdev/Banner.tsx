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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:max-w-xs">
              Mobile App Development Agency
            </h1>
            <p className="text-lg">
              From ideation to execution, our expert developers at Zinfog
              codelabs work tirelessly to bring your mobile app development to
              reality
            </p>
            <Button type="button" variant="btn_blue" title="Request a Quote" />
          </div>

          {/* Right Image */}
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/mobile-app.png"
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
          src="/mob_app_carousel.png"
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
