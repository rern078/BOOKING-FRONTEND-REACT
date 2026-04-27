"use client";

import * as React from "react";
import { cn } from "@/app/lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

