"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion as m } from "framer-motion";

const canvasSize = 30;
const canvasOpacity = 0.8;
const updateSpeed = 0.03;

const auraAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: canvasOpacity,
    transition: { duration: 1.6 },
  },
};

export const Colorize = (
  context: CanvasRenderingContext2D | null,
  [x, y, r, g, b]: Array<number>
) => {
  context!.fillStyle = `rgb(${r}, ${g}, ${b})`;
  context!.fillRect(x, y, 10, 10);
};

export const Red = (x: number, y: number, time: number) => {
  return Math.floor(142 + 15 * Math.sin((x * x - y * y) / 300 + time));
};

export const Green = (x: number, y: number, time: number) => {
  return Math.floor(
    175 +
      20 *
        Math.cos(
          (x * x * Math.cos(time / 4) + y * y * Math.cos(time / 3)) / 300
        )
  );
};

export const Blue = (x: number, y: number, time: number) => {
  return Math.floor(
    204 +
      38 *
        Math.sin(
          5 * Math.sin(time / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
};

export default function Aura() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let time = 0;
      const loop = () => {
        for (let x = 0; x <= canvasSize; x++) {
          for (let y = 0; y <= canvasSize; y++) {
            Colorize(ctx, [
              x,
              y,
              Red(x, y, time),
              Green(x, y, time),
              Blue(x, y, time),
            ]);
          }
        }
        time = time + updateSpeed;
        window.requestAnimationFrame(loop);
      };
      loop();
    }
  }, []);

  return (
    <div className="gradient-mask block absolute t-0 l-0 r-0 w-full h-full z-0 opacity-0 md:opacity-100 md:dark:opacity-50 transition-opacity">
      <m.canvas
        ref={canvasRef}
        width={`${canvasSize}px`}
        height={`${canvasSize}px`}
        variants={auraAnimation}
        initial={"initial"}
        animate={"animate"}
        className="block absolute t-0 l-0 r-0 w-full h-full z-0"
      />
    </div>
  );
}
