"use client";

import "./globals.css";
import { Providers } from "./providers";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import Aura from "@/components/background/Aura";
import Navbar from "@/components/navigation/Navbar";

const bodyFont = DM_Sans({
  variable: "--font-body",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui"],
});

const displayFont = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../public/fonts/PolySans Median.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PolySans Bulky.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Dynamic page title
  const pathName = usePathname();
  const pathSplit = pathName.split("/");
  let title = "";
  if (pathSplit.length > 2) {
    const formattedTitle = pathSplit[2]
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    title = `${formattedTitle}`;
  } else {
    title =
      pathName === "/"
        ? "Web Developer"
        : pathName === "/about"
        ? "About"
        : pathName === "/works"
        ? "Works"
        : pathName === "/contact"
        ? "Contact"
        : "Web Developer";
  }

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>{`Blaire Mendoza • ` + title}</title>
        <meta
          name="keywords"
          content="Portfolio, Web Development, React, Next.js, TypeScript, UI/UX Design, Frontend Development"
        />
      </head>
      <body
        className={`font-body bg-surface-low-light dark:bg-surface-low-dark text-primary-light dark:text-primary-dark transition duration-400`}
      >
        <Providers>
          <Aura />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
