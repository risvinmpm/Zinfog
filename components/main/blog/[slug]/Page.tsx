"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { notFound } from "next/navigation";
import FallbackImage from "../../../common/FallbackImage";

interface Blog {
  id: number;
  title: string;
  body: string;
  userId: number;
  image: string;
  authorImage: string;
  authorName: string;
  date: string;
}

const BlogDetail: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;

    async function fetchBlog() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug?.toString().split("-")[1]}`);
        const data: Blog = await response.json();

        const blogWithDetails = {
          ...data,
          image: `/blog${data.id}.png`,
          authorImage: "/career.png",
          authorName: `User ${data.userId}`,
          date: "July 10, 2023",
        };

        setBlog(blogWithDetails);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p className="text-white text-center py-10">Loading blog details...</p>;
  }

  if (!blog) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 text-white">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.date} — {blog.authorName}</p>

      <div className="h-[300px] w-full mx-auto overflow-hidden rounded mb-6">
        <FallbackImage
          src={blog.image}
          alt={blog.title}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-lg leading-relaxed">{blog.body}</p>
    </div>
  );
};

export default BlogDetail;
