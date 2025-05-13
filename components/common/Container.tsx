// components/Container.tsx
import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl max-w-8xl', className)}>
      {children}
    </div>
  );
};

export default Container;
