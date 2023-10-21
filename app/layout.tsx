"use client";

import "./globals.css";
import { Providers } from "./providers";
import { Gabarito } from "next/font/google";
import localFont from "next/font/local";
import ThemeToggle from "@/components/navigation/ThemeToggle";
import Aura from "@/components/background/Aura";

const bodyFont = Gabarito({
  variable: "--font-body",
  weight: ["400", "700"],
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
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <head></head>
      <body
        className={`font-body bg-surface-low-light dark:bg-surface-low-dark text-primary-light dark:text-primary-dark transition`}
      >
        <Providers>
          <Aura />
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
