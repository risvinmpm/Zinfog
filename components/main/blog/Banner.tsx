"use client";
import React, { useState } from "react";

const Banner = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className="py-10 lg:py-20 xl:py-30 mt-20 relative text-center main-padding">
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/banner-bg.png")' }}
      />
      <div className="relative z-10 max-w-xl mx-auto">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold pb-7 lg:pb-14">
          Always hungry for new knowledge
        </h1>
        <p className="mb-10">
          Are you hungry for knowledge? Subscribe to our newsletter for the
          latest updates.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3 mx-auto relative z-10 max-w-3xl"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-auto sm:w-7xl px-4 py-3 border border-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="w-auto sm:w-sm px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Banner;
