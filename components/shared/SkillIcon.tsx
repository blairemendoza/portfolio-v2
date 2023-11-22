"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion as m,
  MotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface Props {
  skill: { name: string; url: string; icon: string };
  mouseX: MotionValue;
}

export default function SkillIcon({ skill, mouseX }: Props) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  let ref = useRef<HTMLLIElement>(null);

  function getCurrentDimension() {
    return typeof window !== "undefined"
      ? {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      : null;
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-90, 0, 90], [60, 110, 60]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 110, damping: 10 });

  return (
    <m.li
      ref={ref}
      style={
        screenSize
          ? screenSize.width > 1024
            ? { width }
            : { width: "60px" }
          : { width: "60px" }
      }
      className="group relative"
    >
      <a
        href={skill.url}
        target="_blank"
        className="inline relative z-1 md:saturate-[0.8] md:group-hover:saturate-[1.2] md:group-focus-within:saturate-[1.2] group-hover:drop-shadow-md group-focus-within:drop-shadow-md transition-all duration-300"
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </a>
      <div className="absolute inset-x-0 -bottom-12 hidden lg:flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:drop-shadow-md group-focus-within:drop-shadow-md scale-0 group-hover:scale-100 group-focus-within:scale-100 transition-all duration-300 z-50">
        <span className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-sm font-bold text-surface-high-light dark:text-surface-high-dark antialiased rounded-full whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    </m.li>
  );
}
