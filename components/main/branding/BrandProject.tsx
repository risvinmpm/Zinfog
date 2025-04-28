import React from 'react'
import Title from '../../common/Title';
import Image from 'next/image';
import Button from '../../common/Button';

const BrandProject = () => {
    const headerItems = ["Projects", "05"];

    const projects = [
        {
            icon: "/odoo_icon.png",
            title: "Odoo ERP Development",
            headline: "Avon client management application",
            description:
                "Zinfog was able to knock off an End-to-End service for Avon. Provided a complete ERP solution customized to their needs with utmost quality. We also worked on their ERP Dashboard for client management, and set up e-commerce and payment gateways for AVON.",
            button: {
                title: "SEE CASE STUDY",
                icon: "/arrow.png",
                variant: "",
            },
        },
    ];
    return (
        <div className="brand-bg w-full h-full py-4 lg:py-8 xl:py-16">
            <div className="main-padding">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <Title items={headerItems} />
                </div>

                <hr className="border border-gray-300" />

                <div className="bg-[#832d6cdd] w-full h-full rounded-xl grid md:grid-cols-5 mt-10 md:my-20 p-7 md:p-14">
                    {/* Left side - project details from array */}
                    <div className="col-span-3">
                        {projects.map((project, index) => (
                            <div key={index} className="relative">
                                <Image
                                    src={project.icon}
                                    width={60}
                                    height={60}
                                    alt={project.title}
                                    className="absolute"
                                />
                                <h3 className="ms-20 text-2xl">{project.title}</h3>
                                <h1 className="mt-10 text-3xl font-bold lg:pe-20 xl:pe-48">
                                    {project.headline}
                                </h1>
                                <p className="py-7 lg:pe-20">{project.description}</p>
                                <Button
                                    type="button"
                                    variant={project.button.variant}
                                    title={project.button.title}
                                    icon={project.button.icon}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right side - static image (shown once) */}
                    <div className="col-span-2 flex justify-center items-start">
                        <Image
                            src="/project.png"
                            width={400}
                            height={400}
                            alt="Project Visual"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandProject
