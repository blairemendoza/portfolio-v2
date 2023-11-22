"use client";

import { motion as m } from "framer-motion";

const heroContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.3, duration: 0.4, staggerChildren: 0.15 },
  },
};

const heroItems = {
  initial: { y: -40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "backOut" },
  },
};

export default function Hero() {
  return (
    <m.section
      variants={heroContainer}
      initial={"initial"}
      animate={"animate"}
      className="px-8 pb-16 md:pb-32 text-center"
    >
      <m.h1
        variants={heroItems}
        className="pt-32 md:pt-40 pb-8 md:pb-14 font-display text-display-lg text-primary-light dark:text-primary-dark"
      >
        <span className="block">Blaire Mendoza:</span>
        <span className="block">web developer.</span>
      </m.h1>
      <m.div variants={heroItems} className="grid grid-cols-hero-subtitle">
        <p className="col-start-2 text-base text-secondary-light dark:text-secondary-dark antialiased">
          Dedicated in creating web experiences with creativity, accessibility,
          and user-centricity in mind.
        </p>
      </m.div>
    </m.section>
  );
}
