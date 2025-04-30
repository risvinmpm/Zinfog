import React from 'react';
import Accordion from '../../Ui/Accordion';

const Faqs: React.FC = () => {
  const faqData = [
    {
      title: 'What kind of ecommerce apps can your company develop?',
      content: 'Our company can develop various ecommerce apps, such as online marketplace apps, mobile commerce apps, social media commerce apps, and shopping cart apps.',
    },
    {
      title: 'What platforms can your ecommerce apps be developed for?',
      content: 'Our ecommerce apps can be developed for various platforms, including iOS, Android, and web-based applications.',
    },
    {
      title: 'What features can your ecommerce apps include?',
      content: 'Our ecommerce apps can include a variety of features, such as product catalogs, shopping carts, secure payment gateways, order tracking, push notifications, social media integration, and customer feedback options.',
    },
    {
      title: 'How long does it take to develop an ecommerce app?',
      content: 'The time it takes to develop an ecommerce app varies depending on the complexity of the app, but we typically work within a timeline of 3 to 6 months.',
    },
    {
      title: 'What is the cost of developing an ecommerce app?',
      content: `The cost of developing an ecommerce app depends on various factors, such as the complexity of the app, the number of features included, and the platform it will be developed for. We provide customized quotes based on each project's unique requirements.`,
    },
    {
      title: `Can you provide ongoing maintenance and support for the ecommerce app after it's launched?`,
      content: 'Yes, we provide ongoing maintenance and support for our ecommerce apps to ensure they are up-to-date and functioning properly, including fixing any bugs or issues that may arise.',
    },
  ];

  return (
    <div className="main-padding bg-[rgb(23,24,43)] py-10 lg:py-20 xl:py-30">
      <h1 className="text-2xl font-bold mb-8">FAQs</h1>
      <Accordion items={faqData} />
    </div>
  );
};

export default Faqs;
