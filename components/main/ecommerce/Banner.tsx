import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-no-repeat bg-center mt-10 lg:mt-20 py-10 main-padding"
            style={{ backgroundImage: 'url("/mobileapps.png")' }}
        >
            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-90"
                style={{
                    background:
                        'linear-gradient(285.94deg, #fb0d6ae3 -4.32%, #f28400bd 104.73%)',
                }}
            />

            {/* Pattern Overlay */}
            <div
                className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: 'url("/count-bg.png")',
                }}
            />

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
                {/* Text & Image */}
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                        E-Commerce App Development Services for Your Store
                    </h1>
                    <p className="text-base md:text-lg max-w-md">
                        Looking for an e-commerce app to enhance sales? You&apos;re in the right spot.
                    </p>
                    <div>
                        <Image
                            src="/awards.png"
                            width={300}
                            height={300}
                            alt="Awards"
                            className="w-64 md:w-80"
                        />
                    </div>
                </div>

                {/* Form */}
                <div className="bg-[#282A3D] rounded-lg p-6 md:p-10 shadow-lg">
                    <form>
                        <h2 className="text-lg font-semibold mb-1">
                            Get in touch with us for a free demo
                        </h2>
                        <p className="text-sm mb-6">
                            and know more about what magic we can do to build your firm better.
                        </p>

                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Street Address
                            </label>
                            <input
                                id="street-address"
                                name="street-address"
                                type="text"
                                autoComplete="street-address"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                autoComplete="address-level2"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-indigo-600"
                            />
                        </div>

                        <div className="mt-6 flex justify-end gap-4">
                            <button type="button" className="text-sm font-semibold text-gray-700">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-indigo-500 focus:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;
