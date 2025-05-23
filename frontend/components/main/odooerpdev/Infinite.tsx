import React from "react";

const cardData = [
  {
    title: "Customer Relationship Management",
    description:
      "We are providing advanced Odoo Customer Relationship Management Dashboard to enhance your customer relations."
  },
  {
    title: "Customer Relationship Management",
    description:
      "We are providing advanced Odoo Customer Relationship Management Dashboard to enhance your customer relations."
  },
  {
    title: "Customer Relationship Management",
    description:
      "We are providing advanced Odoo Customer Relationship Management Dashboard to enhance your customer relations."
  }
];

const Infinite = () => {
  return (
    <div className="py-5 lg:py-10 xl:py-20 bg-[#131321]">
      <div className="main-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cardData.map((card, index) => (
            <div key={index} className="w-full">
              <div className="card shadow-lg rounded-lg frosted-glass p-5 h-full flex flex-col justify-between">
                <div>
                  <h5 className="text-white text-lg font-semibold mb-2">
                    {card.title}
                  </h5>
                  <p className="text-gray-300">{card.description}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="mt-4 bg-gradient-image text-white px-3 py-1 rounded transition duration-300"
                  >
                    Know more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infinite;
