"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { SidebarContent } from "./Sidebar";
import { cn } from "@/app/lib/cn";

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M5 8h14M5 16h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isAuthLayout = pathname === "/signin";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* desktop sidebar */}
      {!isAuthLayout ? (
        <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white md:block">
          <SidebarContent />
        </aside>
      ) : null}

      {/* mobile top bar */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white md:hidden">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900",
              "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            )}
            aria-label="Open menu"
            disabled={isAuthLayout}
          >
            <MenuIcon className="text-slate-700" />
          </button>
          <div className="text-sm font-extrabold tracking-[0.35em]">BookNest</div>
          <div className="h-10 w-10" />
        </div>
      </div>

      {/* mobile drawer */}
      {open && !isAuthLayout ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="text-sm font-extrabold tracking-[0.35em] text-slate-900">
                BookNest
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900",
                  "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                )}
                aria-label="Close menu"
              >
                <CloseIcon className="text-slate-700" />
              </button>
            </div>
            <div className="h-[calc(100%-56px)]">
              <SidebarContent />
            </div>
          </div>
        </div>
      ) : null}

      {/* content */}
      <div className={cn(!isAuthLayout && "md:pl-72")}>
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
}

