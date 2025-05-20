"use client";
import React, { useRef, ReactNode } from "react";
import { motion, useInView, Variants, Transition } from "framer-motion";

interface AnimatedOnScrollProps {
  children: ReactNode;
  variants: Variants;
  transition?: Transition;
  className?: string;
  once?: boolean;
}

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  variants,
  transition = { duration: 0.6, ease: "easeOut" },
  className = "",
  once = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
