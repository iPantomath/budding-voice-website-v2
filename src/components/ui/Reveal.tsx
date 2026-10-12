"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — delays entrance by `delay * index` seconds. */
  index?: number;
  delay?: number;
  direction?: "up" | "none";
  as?: "div" | "li";
}

const Reveal = ({
  children,
  className,
  index = 0,
  delay = 0.08,
  direction = "up",
  as = "div",
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion || direction === "none" ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        delay: shouldReduceMotion ? 0 : index * delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

Reveal.displayName = "Reveal";

export { Reveal };
