"use client";

import WorkCard from "../../shared/WorkCard";
import { motion as m } from "framer-motion";
import Image from "next/image";

const cardsContainer = {
  initial: { opacity: 0, y: -70 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.5, ease: "backOut" },
  },
};

export default function Featured() {
  return (
    <m.div
      variants={cardsContainer}
      initial={"initial"}
      animate={"animate"}
      className="relative px-4 md:px-8 pb-20 md:pb-28 "
    >
      <div className="grid grid-cols-10 gap-x-8 gap-y-8 lg:gap-y-24 h-fit mx-auto max-w-[1600px]">
        <WorkCard size="large" className="bg-slate-50 dark:bg-slate-50" href="">
          <div className="relative mb-16 z-50">
            <span className="text-label uppercase text-secondary-light">
              Concept
            </span>
            <h2 className="font-display text-display-sm text-primary-light">
              Straightforward
            </h2>
          </div>
          <div className="relative flex flex-1 w-full group-hover:-translate-y-4 transition-transform ease-out duration-700">
            <figure className="relative w-full h-full m-0">
              <Image
                src="/images/sample-1.png"
                alt="sample1"
                className="block relative rounded-lg max-w-full lg:max-w-screen-lg w-full lg:w-[55vw]"
                width={2000}
                height={2000}
              />
            </figure>
          </div>
        </WorkCard>
        <WorkCard
          size="small"
          className="bg-slate-900 dark:bg-slate-900"
          href=""
        >
          <div className="relative mb-16 z-50">
            <span className="text-label uppercase text-secondary-dark">
              Concept
            </span>
            <h2 className="font-display text-display-sm text-primary-dark">
              GOMO
            </h2>
          </div>
          <div className="relative flex flex-1 my-0 mx-auto w-full group-hover:-translate-y-4 transition-transform ease-out duration-700">
            <figure className="relative w-full h-full m-0">
              <Image
                src="/images/sample-2.png"
                alt="sample1"
                className="block relative rounded-lg max-w-full lg:max-w-screen-md w-full lg:w-[35vw]"
                width={1500}
                height={1500}
              />
            </figure>
          </div>
        </WorkCard>
      </div>
    </m.div>
  );
}
