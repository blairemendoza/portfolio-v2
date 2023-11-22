import { useState, useRef, useEffect } from "react";

type MutableRefObject<T> = {
  current: T;
};

export const useEffectInEvent = <K extends keyof WindowEventMap>(
  event: K,
  set: () => void,
  useCapture?: boolean
) => {
  useEffect(() => {
    if (set) {
      set();
      window.addEventListener(event, set, useCapture);

      return () => window.removeEventListener(event, set, useCapture);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useRect = <T extends HTMLElement | null>(): [
  DOMRect | undefined,
  MutableRefObject<T | null>
] => {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState<DOMRect>();

  const set = (): void => {
    setRect(ref.current?.getBoundingClientRect());
  };

  useEffectInEvent("resize", set);
  useEffectInEvent("scroll", set, true);

  return [rect, ref];
};
