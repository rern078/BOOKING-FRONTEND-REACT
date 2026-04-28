"use client";

import Link from "next/link";
import { useSessionUser } from "../hooks/useSessionUser";
import { cn } from "../lib/cn";

export function SiteHeader() {
  const { user, ready } = useSessionUser();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          BookNest
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a className="hover:text-indigo-600" href="#stays">
            Stays
          </a>
          <a className="hover:text-indigo-600" href="#how-it-works">
            How It Works
          </a>
          <a className="hover:text-indigo-600" href="#reviews">
            Reviews
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {ready && user ? (
            <>
              <Link
                href="/profile"
                className={cn(
                  "hidden sm:inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition",
                  "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                )}
              >
                Profile
              </Link>
              <Link
                href="/logout"
                className={cn(
                  "inline-flex items-center justify-center rounded-full bg-slate-500 px-4 py-2 text-sm font-semibold text-white transition",
                  "hover:bg-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                )}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              href="/signin"
              className={cn(
                "inline-flex items-center justify-center rounded-full bg-slate-500 px-4 py-2 text-sm font-semibold text-white transition",
                "hover:bg-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              )}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

