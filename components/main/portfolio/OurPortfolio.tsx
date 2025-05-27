import React, { useRef } from "react";
import Title from '../../common/Title';
import FilterTabs from '../../Ui/FilterTabs';
import { motion, useInView } from "framer-motion";

const OurPortfolio = () => {
    const headerItems = ['Portfolio'];

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

    // Scroll animation ref and hook
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <section className="pb-10 lg:pb-20 xl:pb-30 main-padding">
            <div className="lg:pb-10">
                {/* Header */}
                <div className="text-center mb-2">
                    <Title items={headerItems} />
                </div>

                <hr className="border border-gray-700 mb-7" />

                <div className="grid sm:grid-cols-6 gap-6">
                    <div className="sm:col-span-3">
                        <h1 className="text-3xl font-semibold sm:max-w-[270px]">
                            We are proud to display our work
                        </h1>
                    </div>

                    <motion.div
                        ref={contentRef}
                        variants={bounceInRight}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="sm:col-span-3">
                        <p className="text-lg font-extralight">
                            We ensure the highest quality of work for each client, meeting their unique needs.
                            Our skilled team is dedicated to achieving every objective and goal businesses set
                            in the digital space.
                        </p>
                    </motion.div>
                </div>
            </div>

            <hr className="border border-gray-700 mt-7" />
            <main className="h-full">
                <FilterTabs />
            </main>
        </section>
    );
};

export default OurPortfolio;
