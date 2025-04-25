import React from "react";

type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Planning",
    description: "Client meeting, Analysis, Collection of data & requirements",
  },
  {
    id: 2,
    title: "Analysis",
    description: "Wireframe and user journey maping",
  },
  {
    id: 3,
    title: "Design",
    description: "Layout design, UI Design, UX Design",
  },
  {
    id: 4,
    title: "Development",
    description: "ios Development, android development, set milestone, Client review and feedback,",
  },
  {
    id: 5,
    title: "Launching",
    description: "Approval of the clients to publish on ios store and google play store",
  },
];

const Process = () => {
  return (
    <div className="main-padding py-10 lg:py-16 xl:py-20 text-[#D5D5D5] ">
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 md:text-left">
          The process
        </h1>
        <hr className="border border-gray-400 mb-14" />

        {steps.map((step) => (
          <div key={step.id} className="mb-12">
            <div className="flex flex-col md:grid md:grid-cols-5 gap-6">
              {/* Step Number & Title */}
              <div className="md:col-span-2 relative flex items-center h-full">
                <h1 className="absolute text-7xl md:text-8xl font-bold opacity-[0.05] left-0 top-1/2 -translate-y-1/2">
                  {String(step.id).padStart(2, "0")}
                </h1>
                <p className="relative text-2xl font-semibold z-10">
                  {step.title}
                </p>
              </div>

              {/* Step Description */}
              <div className="md:col-span-3 flex items-center h-full">
                <p className="text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Divider (including after last row) */}
            <hr className="border border-gray-400 mt-14" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
