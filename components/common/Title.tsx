import React from 'react';

type TitleProps = {
  items: string[];
  className?: string;
};

const Title: React.FC<TitleProps> = ({ items, className }) => {
  return (
    <div className={`flex justify-between text-xl font-medium pb-1 pt-10 ${className || ''}`}>
      {items.map((item, index) => (
        <h4 key={index}>
          {index === 0 ? <li>{item}</li> : item}
        </h4>
      ))}
    </div>
  );
};

export default Title;
