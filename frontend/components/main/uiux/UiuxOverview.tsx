import React, { useRef } from "react";
import Title from "../../common/Title";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const bounceInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
        },
    },
};


const UiuxOverview = () => {
    const headerItems = ["services overview", "01"];

    const sections = [
        {
            title: "Customer centric ui/ux designing",
            description: `Zinfog codelabs have a skilled team with creativity who have mastered the skills of UI/UX designing. This helps the client to have creative and eye catchy website layouts according to their customization ideas.`,
        },
    ];
    // Scroll animation ref and hook
    const imageRef = useRef(null);
    const isInView = useInView(imageRef, { once: true, margin: "0px 0px -100px 0px" });
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
                    <motion.div
                        ref={imageRef}
                        variants={bounceInRight}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex justify-center"
                    >
                        <Image
                            src="/uiux.png"
                            width={300}
                            height={300}
                            alt="Odoo ERP"
                            className="max-w-sm object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default UiuxOverview
