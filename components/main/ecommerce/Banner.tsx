'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

    const fadeInRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div
            className="relative bg-cover bg-no-repeat bg-center mt-10 lg:mt-20 py-16"
            style={{ backgroundImage: 'url("/mobileapps.png")' }}
        >
            {/* Gradient and Background Overlays */}
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

            <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto main-padding">
                {/* Left Section */}
                <div className="flex flex-col justify-center space-y-6" >
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
                <div className="bg-[#282A3D] rounded-lg p-6 md:p-10 shadow-lg max-w-md mx-auto" >
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-xl font-bold mb-3 text-center text-white">
                            Get in touch with us for a free demo
                        </h2>
                        <p className="text-sm mb-6 text-center text-white">
                            and know more about what magic we can do to build your firm better.
                        </p>

                        {/* Input Fields */}
                        {[
                            { id: 'name', label: 'Name', type: 'text' },
                            { id: 'email', label: 'Email', type: 'email' },
                            { id: 'company', label: 'Company', type: 'text' },
                            { id: 'requirement', label: 'Requirement (optional)', type: 'text' },
                        ].map(({ id, label, type }) => (
                            <div className="mt-4" key={id}>
                                <label htmlFor={id} className="block text-sm font-medium text-white">
                                    {label}
                                </label>
                                <input
                                    id={id}
                                    type={type}
                                    value={(formData as any)[id]}
                                    onChange={(e) => handleChange(id, e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-[#3B3E54] bg-[#2E3142] px-3 py-2 shadow-sm text-white focus:outline-none"
                                />
                                {errors[id as keyof typeof errors] && (
                                    <p className="text-red-400 text-sm mt-1">{errors[id as keyof typeof errors]}</p>
                                )}
                            </div>
                        ))}

                        {/* Phone Field */}
                        <div className="mt-4">
                            <PhoneNumberField
                                value={formData.phone}
                                onChange={(value) => handleChange('phone', value)}
                            />
                            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
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
            </motion.div>

            {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default Banner;
