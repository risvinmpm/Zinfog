"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Enquiry = () => {
  return (
    <section className="main-padding">
      <div className="bg-[#2C3D95] rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-6 w-full h-full items-center">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="text-white flex flex-col justify-center gap-4 max-w-2xl py-10 lg:py-24 px-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                Do you have any project? Let’s do some business
              </h1>
              <p className="text-base">
                You are at the right place to take your business to the next
                level digitally. Whether it's a perfect ERP solution or modern
                web development, connect with us today!
              </p>
              <Link href="/contact" passHref>
                <button
                  type="button"
                  className="bg-[#061839] text-white py-2 px-6 rounded-md w-fit"
                >
                  Let’s talk business
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:col-span-2 flex justify-center ">
            <Image
              src="/cheerful-man.png"
              width={250}
              height={250}
              alt="cheerful-man"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
