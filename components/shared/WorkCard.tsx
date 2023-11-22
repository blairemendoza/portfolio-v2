import { AnchorHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import cn from "@/utils/cn";

interface Props
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof cardVariant> {
  children: ReactNode;
}

const cardVariant = cva("relative max-h-[400px] lg:max-h-[550px] col-span-10", {
  variants: {
    size: {
      wide: "col-span-10",
      large: "lg:col-span-6",
      small: "lg:col-span-4",
    },
  },
  defaultVariants: {
    size: "wide",
  },
});

export default function WorkCard({
  children,
  size,
  className,
  ...props
}: Props) {
  return (
    <a className={cn(cardVariant({ size }))} {...props}>
      <div
        className={twMerge(
          "group lg:hover:-translate-y-2 hover:saturate-[1.2] lg:hover:drop-shadow-xl w-full h-full flex flex-col p-7 lg:px-16 lg:py-10 bg-surface-high-light dark:bg-surface-high-dark text-primary-light dark:text-primary-dark rounded-10xl lg:rounded-16xl overflow-clip transition-all ease-back-out duration-200",
          className
        )}
      >
        <div className="flex flex-col h-full">{children}</div>
      </div>
    </a>
  );
}
