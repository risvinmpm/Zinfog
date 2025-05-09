import React from "react";
import Title from "../../common/Title";
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    title: "10 Essential Qualities to Look for in a Web Development Company",
    description:
      "Discover the 10 essential qualities to look for in a web development company. From expertise and technical proficiency to customization and affordability, find your perfect partner in web development.",
    image: "/blog1.png",
    authorImage: "/blog2.png",
    authorName: "John Doe",
    date: "July 03, 2023",
    slug: "/blog/essential-qualities",
  },
  {
    id: 2,
    title: "Building Scalable Web Apps with Next.js",
    description:
      "Learn how to build scalable and performant web applications using the latest Next.js features, including App Router and SSR.",
    image: "/blog3.png",
    authorImage: "/blog4.png",
    authorName: "Jane Smith",
    date: "July 10, 2023",
    slug: "/blog/scalable-nextjs-apps",
  },
  {
    id: 1,
    title: "10 Essential Qualities to Look for in a Web Development Company",
    description:
      "Discover the 10 essential qualities to look for in a web development company. From expertise and technical proficiency to customization and affordability, find your perfect partner in web development.",
    image: "/blog1.png",
    authorImage: "/blog2.png",
    authorName: "John Doe",
    date: "July 03, 2023",
    slug: "/blog/essential-qualities",
  },
  {
    id: 2,
    title: "Building Scalable Web Apps with Next.js",
    description:
      "Learn how to build scalable and performant web applications using the latest Next.js features, including App Router and SSR.",
    image: "/blog3.png",
    authorImage: "/blog4.png",
    authorName: "Jane Smith",
    date: "July 10, 2023",
    slug: "/blog/scalable-nextjs-apps",
  },
  {
    id: 1,
    title: "10 Essential Qualities to Look for in a Web Development Company",
    description:
      "Discover the 10 essential qualities to look for in a web development company. From expertise and technical proficiency to customization and affordability, find your perfect partner in web development.",
    image: "/blog1.png",
    authorImage: "/blog2.png",
    authorName: "John Doe",
    date: "July 03, 2023",
    slug: "/blog/essential-qualities",
  },
  {
    id: 2,
    title: "Building Scalable Web Apps with Next.js",
    description:
      "Learn how to build scalable and performant web applications using the latest Next.js features, including App Router and SSR.",
    image: "/blog3.png",
    authorImage: "/blog4.png",
    authorName: "Jane Smith",
    date: "July 10, 2023",
    slug: "/blog/scalable-nextjs-apps",
  },
];

const OurBlogs = () => {
  return (
    <div className="main-padding py-10 bg-[#131321]">
      <div className="text-center mb-2">
        <Title items={["Recommended topics"]} />
      </div>
      <hr className="border border-gray-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {blogData.map((blog) => (
          <div key={blog.id} className="card">
            <Image
              src={blog.image}
              width={300}
              height={300}
              alt={blog.title}
              className="w-full"
            />
            <div className="pt-7">
              <Link href={blog.slug}>
                <h6 className="text-2xl font-medium">{blog.title}</h6>
              </Link>
              <p className="py-5">{blog.description}</p>
              <div className="flex gap-4 items-center">
                <Image
                  src={blog.authorImage}
                  width={50}
                  height={50}
                  alt={blog.authorName}
                  className="rounded-full object-contain"
                />
                <div>
                  <p className="text-[#3B5CFF]">{blog.authorName}</p>
                  <p>{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlogs;
