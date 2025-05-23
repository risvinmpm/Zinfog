"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Enquiry = () => {
  return (
    <>
      <section className="main-padding text-white xl:mb-26">
        {/* Call to Action Block */}
        <div className="bg-[#2C3D95] rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-6 w-full h-full items-center">
            {/* Left Side: Text Content */}
            <div className="md:col-span-4 flex justify-center">
              <div className="flex flex-col justify-center gap-4 max-w-2xl py-10 px-4">
                <h1 className="text-3xl md:text-4xl font-bold lg:pe-26 xl:pe-34">
                  Do you have any project? Let’s do some business
                </h1>
                <p className="text-base">
                  You are at the right place to take your business to a
                  different level, digitally. If you&apos;re looking for a
                  perfect ERP solution or web development, connect with us right
                  away!
                </p>
                <Link href="/contact" passHref>
                  <button
                    type="button"
                    className="bg-[#061839] py-2 px-6 rounded-md w-fit"
                  >
                    Let’s talk business
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="md:col-span-2 flex justify-center">
              <Image
                src="/cheerful-man.png"
                width={200}
                height={100}
                alt="Cheerful man"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-10">
          <h4 className="mb-5 text-lg font-semibold">
            SIGN TO OUR NEWSLETTER:
          </h4>
          <div className="relative w-fit">
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="placeholder:text-gray-400 placeholder:text-3xl text-base border-b-2 border-gray-400 bg-transparent outline-none w-[280px] text-white py-3 pr-12 ps-1"
            />
            <Image
              src="/arrow.png"
              width={30}
              height={30}
              alt="Arrow"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>

          {/* Terms & Privacy Checkbox */}
          <div className="flex items-start mt-3">
            <input type="checkbox" id="checkbox" className="mt-1" />
            <label htmlFor="checkbox" className="ps-3 text-gray-500 text-sm">
              I have read & accept the:{" "}
              <span className="font-bold text-white">terms & privacy</span>
            </label>
          </div>
        </div>
      </section>
      <hr className="border border-gray-300" />
    </>
  );
};

export default Enquiry;
