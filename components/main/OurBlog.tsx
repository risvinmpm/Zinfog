import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import Link from "next/link";

const OurBlog: React.FC = () => {
  const ourblog = [
    {
      icon: "/web_dvlp.png",
      title: "Sameer Roshan",
      subtitle: "july 03,2023",
      link: "",
      description:
        "10 Essential Qualities to Look for in a Web Development Company"
    },
    {
      icon: "/mob.png",
      title: "Sana Farhath",
      subtitle: "july 27,2023",
      link: "",
      description:
        "React native mobile app development: why build apps with it?"
    }
  ];

  return (
    <div className="main-padding py-10 lg:py-20">
      {/* Section Title */}
      <h1 className="text-3xl lg:text-4xl font-bold mb-5">Our Blog</h1>

      {/* ourblog Section */}
      <div className="grid lg:grid-cols-4 gap-10">
        {/* Left Column: All blog content */}
        <div className="col-span-3 flex flex-col">
          {ourblog.map((ourblog, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 border-b border-gray-200 pb-8"
            >
              <div className="flex flex-col lg:flex-row gap-6 py-7 md:py-14">
                {/* Left Column (Icon + Title + Subtitle) */}
                <div className="lg:w-1/2 flex flex-col gap-2 relative">
                  <div className="items-center">
                    <Image
                      src={ourblog.icon}
                      alt={ourblog.title}
                      width={60}
                      height={60}
                      className="absolute"
                    />
                    <h2 className="text-2xl font-semibold ml-20 lg:pe-10">
                      {ourblog.title}
                    </h2>
                  </div>
                  <h3 className="text-sm font-bold ms-20">
                    <Link
                      href={ourblog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ourblog.subtitle}
                    </Link>
                  </h3>
                </div>

                {/* Right Column (Description + Buttons) */}
                <div className="flex flex-col gap-4 text-2xl font-bold lg:w-2/3">
                  <p>{ourblog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 lg:mt-20">
        <Button
          type="button"
          variant=""
          title="VIEW ALL BLOGS"
          icon="/arrow.png"
        />
      </div>
    </div>
  );
};

export default OurBlog;
