"use client";

import { skillSet } from "@/constants";
import { motion as m, useMotionValue } from "framer-motion";
import SkillIcon from "@/components/shared/SkillIcon";

export default function Skills() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="relative h-fit w-full md:w-fit z-1">
      <m.ul
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-center justify-start flex-nowrap gap-3 h-fit lg:h-20"
      >
        {skillSet.map((skill) => (
          <SkillIcon skill={skill} mouseX={mouseX} key={skill.name} />
        ))}
      </m.ul>
    </div>
  );
}
