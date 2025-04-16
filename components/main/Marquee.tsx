import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeWrapper = () => {
  return (
    <div className="main-padding">
      <Marquee>
       {/* <h1 className="text-8xl py-10 font-bold"> I can be a React component, multiple React components, or just sometext.</h1> */}
       <Image src='/idea.png' width={1000} height={100} alt="idea" className="py-14 bg-contain bg-no-repeat" />
      </Marquee>
    </div>
  );
};

export default MarqueeWrapper;
