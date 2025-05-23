import React from "react";
import Title from "../../common/Title";
import Image from "next/image";

const mostReviewedBlog = {
  title: "How to make an ERP system for Small Business",
  description:
    "This blog explains the key things you need to consider before implementing an ERP system for your business.",
  image: "/most.jpeg",
  authorImage: "/blog1.png",
  authorName: "John Doe",
  date: "October 06, 2022"
};

const MostReview = () => {
  const { title, description, image, authorImage, authorName, date } =
    mostReviewedBlog;

  return (
    <div className="pb-10 lg:pb-20 xl:pb-30 bg-[#131321]">
      <div className="main-padding">
        <div className="text-center mb-2">
          <Title items={["Most reviewed blog"]} />
        </div>
        <hr className="border border-gray-700" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-14">
          <Image
            src={image}
            width={500}
            height={350}
            alt={title}
            className="rounded-xl object-cover mx-auto"
          />
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold text-white">
              {title}
            </h1>
            <p className="pt-7 pb-5 max-w-md text-gray-300">{description}</p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src={authorImage}
                width={50}
                height={50}
                alt={authorName}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-[#3B5CFF] text-sm font-medium">
                  {authorName}
                </p>
                <p className="text-gray-400 text-xs">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostReview;
