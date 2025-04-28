import React from 'react'
import Title from '../../common/Title';
import Image from 'next/image';

const BrandOverview = () => {
    const headerItems = ["services overview", "01"];

    const sections = [
        {
            title: "Customer centric brand development",
            description: `In the 21st century, Marketing alone will never take you places without executed branding. That's where you need Zinfog. We focus on branding the client’s business where they stand out in the field, initially gaining more sales`,
        },
    ];
    return (
        <section className="bg-[#131321]">
            <div className="main-padding py-10">
                {/* Header */}
                <div className="text-center mb-6">
                    <Title items={headerItems} />
                </div>
                <hr className="border border-gray-300 mb-7" />

                {/* Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left Column - Multiple Sections */}
                    <div className="space-y-10">
                        {sections.map((section, index) => (
                            <div key={index} className="space-y-5">
                                <h1 className="text-3xl font-bold text-[#D5D5D5]">
                                    {section.title}
                                </h1>
                                <p className="text-[#CFCFCF] leading-relaxed">
                                    {section.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Single Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/brand.png"
                            width={300}
                            height={300}
                            alt="Odoo ERP"
                            className="max-w-sm object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandOverview
