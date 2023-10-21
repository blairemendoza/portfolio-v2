"use client";

import { motion as m } from "framer-motion";

export default function Hero() {
  return (
    <div className="px-8 text-center">
      <h1 className="pt-24 md:pt-40 pb-14 font-display text-display-lg text-primary-light dark:text-primary-dark">
        <span className="block">Blaire Mendoza:</span>
        <span className="block">web developer.</span>
      </h1>
      <div className="grid grid-cols-hero-subtitle">
        <p className="col-start-2 text-body text-secondary-light dark:text-secondary-dark">
          Dedicated in creating web experiences with creativity, accessibility,
          and user-centric in mind.
        </p>
      </div>
    </div>
  );
}
