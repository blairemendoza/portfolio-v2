"use client";

import { useEffect, useRef } from "react";

const Colorize = (
  context: CanvasRenderingContext2D | null,
  [x, y, r, g, b]: Array<number>
) => {
  context!.fillStyle = `rgb(${r}, ${g}, ${b})`;
  context!.fillRect(x, y, 1, 1);
};

const Red = (x: number, y: number, time: number) => {
  return Math.floor(158 + 33 * Math.sin((x * x - y * y) / 300 + time));
};

const Green = (x: number, y: number, time: number) => {
  return Math.floor(
    167 +
      36 *
        Math.cos(
          (x * x * Math.cos(time / 4) + y * y * Math.cos(time / 3)) / 300
        )
  );
};

const Blue = (x: number, y: number, time: number) => {
  return Math.floor(
    201 +
      58 *
        Math.sin(
          5 * Math.sin(time / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
};

export default function Aura() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasSize = 32;
  const updateSpeed = 0.01;
  let time = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const render = () => {
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
        window.requestAnimationFrame(render);
      };
      render();
    }
    return () => cancelAnimationFrame(time);
  }, []);

  return (
    <div className="gradient-mask block absolute t-0 l-0 r-0 w-full h-full min-h-[700px] opacity-0 md:opacity-60 z-0 transition-opacity overflow-hidden">
      <canvas
        ref={canvasRef}
        width={`${canvasSize}px`}
        height={`${canvasSize}px`}
        className="block absolute t-0 l-0 r-0 w-full h-full z-0"
      />
    </div>
  );
}
