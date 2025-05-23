'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkWrapperProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export default function LinkWrapper({ to, children, className }: LinkWrapperProps) {
  return (
    <Link href={to} className={className}>
      {children}
    </Link>
  );
}
