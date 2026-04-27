"use client";

import * as React from "react";
import { cn } from "@/app/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-indigo-600 text-white hover:bg-indigo-500": variant === "primary",
          "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50":
            variant === "secondary",
          "text-slate-900 hover:bg-slate-100": variant === "ghost",
          "px-3 py-2 text-sm": size === "sm",
          "px-4 py-3 text-sm": size === "md",
        },
        className
      )}
      {...props}
    />
  );
}

