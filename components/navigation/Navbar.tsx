"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion as m, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "@/constants";
import ThemeToggle from "@/components/navigation/ThemeToggle";

const navbarAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.25, ease: "backOut" },
  },
};

export default function Navbar() {
  // Current path and hovered link handlers
  const currentPath = usePathname();
  const [hoveredLink, setHoveredLink] = useState("");
  const activeLink = navLinks.find((link) => link.title === hoveredLink);
  // Scroll-based state
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // If page is scrolled at breakpoint, change scroll state
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    latestValue >= 60 ? setIsScrolled(true) : setIsScrolled(false);
  });

  return (
    <m.header
      variants={navbarAnimation}
      initial={"initial"}
      animate={"animate"}
      className="fixed top-0 right-0 left-0 w-full z-[100]"
    >
      <nav className="relative flex justify-center items-center h-14 md:h-16 mt-4 md:mt-7 mx-auto font-display text-link text-primary-light dark:text-primary-dark">
        <ul
          className={`flex flex-row gap:0 md:gap-3 h-full list-none p-1.5 md:p-2 rounded-full transition-all ${
            isScrolled
              ? "bg-surface-high-light/80 dark:bg-surface-high-dark/80 backdrop-blur-xl"
              : ""
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.title} className="relative flex">
              <Link
                href={`/${link.path}`}
                onMouseEnter={() => setHoveredLink(link.title)}
                onMouseLeave={() => setHoveredLink("")}
                className={`${
                  hoveredLink !== ""
                    ? (
                        currentPath !== "/"
                          ? link.path !== "" && currentPath.includes(link.path)
                          : currentPath === "/" && link.path === ""
                      )
                      ? "text-surface-high-light dark:text-surface-high-dark"
                      : activeLink?.path === link.path
                      ? "text-primary-light dark:text-primary-dark"
                      : "opacity-70"
                    : (
                        currentPath !== "/"
                          ? link.path !== "" && currentPath.includes(link.path)
                          : currentPath === "/" && link.path === ""
                      )
                    ? "text-surface-high-light dark:text-surface-high-dark"
                    : "text-secondary-light dark:text-secondary-dark"
                } relative flex items-center px-4 md:px-6 py-1.5 rounded-full transition-all duration-400`}
              >
                <span className="relative z-10">{link.title}</span>
                {(currentPath !== "/"
                  ? link.path !== "" && currentPath.includes(link.path)
                  : currentPath === "/" && link.path === "") && (
                  <m.span
                    layoutId="bubble"
                    style={{ originY: "0px", borderRadius: 9999 }}
                    transition={{
                      type: "spring",

                      bounce: 0.15,
                      duration: 0.4,
                    }}
                    className={`absolute inset-0 w-full h-full bg-primary-light dark:bg-primary-dark z-0 transition-colors`}
                  ></m.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`md:absolute md:top-0 md:right-8 flex items-center justify-center h-full w-14 md:w-16 p-1.5 md:p-2 ml-3 rounded-full transition-all duration-200 ${
            isScrolled ? "bg-surface-high-light dark:bg-surface-high-dark" : ""
          }`}
        >
          <ThemeToggle />
        </div>
      </nav>
    </m.header>
  );
}
