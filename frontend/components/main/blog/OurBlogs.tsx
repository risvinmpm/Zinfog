"use client";

import React, { useEffect, useState } from "react";
import Title from "../../common/Title";
import Link from "next/link";
import FallbackImage from "../../common/FallbackImage";

interface Blog {
  id: number;
  title: string;
  body: string;
  userId: number;
  image: string;
  authorImage: string;
  authorName: string;
  date: string;
  slug: string;
}

const OurBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: Blog[] = await response.json();

        const blogsWithDetails = data.map((blog, index) => ({
          ...blog,
          image: `/blog${index + 1}.png`,
          authorImage: "/career.png",
          authorName: `User ${blog.userId}`,
          date: "July 10, 2023",
          slug: `blog-${blog.id}`
        }));

        setBlogs(blogsWithDetails);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-white text-center py-10">Loading blogs...</p>;
  }

  return (
    <div className="py-10 bg-[#131321] text-white">
      <div className="main-padding">
        <div className="text-center mb-2">
          <Title items={["Recommended topics"]} />
        </div>
        <hr className="border border-gray-700" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="card">
              <div className="h-[300px] w-full overflow-hidden rounded-lg">
                <FallbackImage
                  src={blog.image}
                  alt={blog.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-7">
                <Link href={`/blog/${blog.slug}`}>
                  <h6 className="text-2xl font-medium hover:text-blue-400 transition">
                    {blog.title}
                  </h6>
                </Link>
                <p className="py-5 text-gray-300">
                  {blog.body.substring(0, 150)}...
                </p>
                <div className="flex gap-4 items-center">
                  <FallbackImage
                    src={blog.authorImage}
                    width={50}
                    height={50}
                    alt={blog.authorName}
                    className="rounded-full w-14 h-14"
                  />
                  <div>
                    <p className="text-[#3B5CFF] font-semibold">
                      {blog.authorName}
                    </p>
                    <p className="text-sm text-gray-400">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
