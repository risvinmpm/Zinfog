'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneNumberField from '../../Ui/PhoneNumberField';
import SuccessPopup from '../../Ui/SuccessPopup';

const Banner = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        requirement: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
        if (!formData.company.trim()) newErrors.company = 'Company is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setShowPopup(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                requirement: '',
            });
        }
    };

    const handleRequestDemoClick = () => {
        if (!validateForm()) return;
        setShowPopup(true);
    };

    return (
        <div
            className="relative bg-cover bg-no-repeat bg-center mt-10 lg:mt-20 py-16 main-padding"
            style={{ backgroundImage: 'url("/mobileapps.png")' }}
        >
            {/* Overlays */}
            <div
                className="absolute inset-0 z-0 opacity-90"
                style={{
                    background: 'linear-gradient(285.94deg, #fb0d6ae3 -4.32%, #f28400bd 104.73%)',
                }}
            />
            <div
                className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("/count-bg.png")' }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
                {/* Left Section */}
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                        E-Commerce App Development Services for Your Store
                    </h1>
                    <p className="text-base md:text-lg max-w-md">
                        Looking for an e-commerce app to enhance sales? You&apos;re in the right spot.
                    </p>
                    <Image
                        src="/awards.png"
                        width={300}
                        height={300}
                        alt="Awards"
                        className="w-64 md:w-80"
                    />
                </div>

                {/* Right Form Section */}
                <div className="bg-[#282A3D] rounded-lg p-6 md:p-10 shadow-lg max-w-md mx-auto">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-xl font-bold mb-3 text-center text-white">
                            Get in touch with us for a free demo
                        </h2>
                        <p className="text-sm mb-6 text-center text-white">
                            and know more about what magic we can do to build your firm better.
                        </p>

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                className="mt-1 block w-full rounded-md px-3 py-2 border border-[#3B3E54] shadow-sm bg-[#2E3142] text-white focus:outline-none"
                            />
                            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className="mt-1 block w-full rounded-md border border-[#3B3E54] bg-[#2E3142] px-3 py-2 shadow-sm text-white focus:outline-none"
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div className="mt-4">
                            <PhoneNumberField
                                value={formData.phone}
                                onChange={(value) => handleChange('phone', value)}
                            />
                            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        {/* Company */}
                        <div className="mt-4">
                            <label htmlFor="company" className="block text-sm font-medium text-white">
                                Company
                            </label>
                            <input
                                id="company"
                                type="text"
                                value={formData.company}
                                onChange={(e) => handleChange('company', e.target.value)}
                                className="mt-1 block w-full rounded-md border border-[#3B3E54] bg-[#2E3142] px-3 py-2 shadow-sm text-white focus:outline-none"
                            />
                            {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                        </div>

                        {/* Requirement (Optional) */}
                        <div className="mt-4">
                            <label htmlFor="requirement" className="block text-sm font-medium text-white">
                                Requirement (optional)
                            </label>
                            <input
                                id="requirement"
                                type="text"
                                value={formData.requirement}
                                onChange={(e) => handleChange('requirement', e.target.value)}
                                className="mt-1 block w-full rounded-md border border-[#3B3E54] bg-[#2E3142] px-3 py-2 shadow-sm text-white focus:outline-none"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={handleRequestDemoClick}
                                className="w-full text-sm border-2 border-[#00A19D] text-[#00A19D] font-semibold"
                            >
                                Request a demo
                            </button>
                            <button
                                type="submit"
                                className="w-full bg-[#00A19D] text-white text-sm font-semibold px-4 py-3 focus:outline-none hover:bg-gray-700 transition-all duration-300 ease-in-out"
                            >
                                Schedule a call
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default Banner;
