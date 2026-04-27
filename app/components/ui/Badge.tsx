"use client";

import * as React from "react";
import { cn } from "@/app/lib/cn";

type Variant = "info" | "success" | "danger" | "warning" | "brand";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

export function Badge({ className, variant = "info", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        {
          "bg-slate-100 text-slate-700": variant === "info",
          "bg-emerald-100 text-emerald-700": variant === "success",
          "bg-red-100 text-red-700": variant === "danger",
          "bg-amber-100 text-amber-700": variant === "warning",
          "bg-indigo-100 text-indigo-700": variant === "brand",
        },
        className
      )}
      {...props}
    />
  );
}

