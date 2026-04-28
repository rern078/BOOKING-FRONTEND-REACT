"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/app/lib/cn";

type NavItem = {
  label: string;
  href: string;
  icon: (props: { className?: string }) => React.ReactNode;
  badge?: string;
};

function IconPlane({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M2.5 13.2 21 8.2c.8-.2 1.4.6 1 1.3l-2.7 4.5c-.2.3-.5.5-.8.6l-4.7 1.1-3.1 5c-.4.6-1.4.4-1.5-.3l-.6-4.1-4-1.2c-.7-.2-.8-1.2-.1-1.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBed({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M4 11.5h16a2.5 2.5 0 0 1 2.5 2.5V19H20v-2H4v2H1.5v-5A2.5 2.5 0 0 1 4 11.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 11.5V9.8A2.8 2.8 0 0 1 8.8 7h2.6A2.6 2.6 0 0 1 14 9.6v1.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M5 16h14l-1.2-5a2.3 2.3 0 0 0-2.2-1.8H8.4A2.3 2.3 0 0 0 6.2 11L5 16Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 16v3M17 16v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 19h2M14.5 19h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUmbrella({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M12 3c5.3 0 9 3.2 9 7H3c0-3.8 3.7-7 9-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 10v7a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShip({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M5 12h14l-1.5 7H6.5L5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 4v8M12 4l5 3M12 4 7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconList({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M7 7h14M7 12h14M7 17h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 7h.01M4 12h.01M4 17h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3.5 12h17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 3c2.6 2.6 2.6 15.4 0 18-2.6-2.6-2.6-15.4 0-18Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCurrency({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M12 3v18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.5 7.5c0-1.4-1.7-2.5-4.5-2.5S7.5 6.1 7.5 7.5 9.2 10 12 10s4.5 1.1 4.5 2.5S14.8 15 12 15s-4.5-1.1-4.5-2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M6 18.2c-1.5-.9-2.5-2.4-2.5-4.2V8.8C3.5 6.1 5.6 4 8.3 4h7.4c2.7 0 4.8 2.1 4.8 4.8V14c0 2.7-2.1 4.8-4.8 4.8H10l-4 3.2V18.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SidebarContent() {
  const pathname = usePathname();
  const router = useRouter();

  const primary: NavItem[] = [
    { label: "Flights", href: "/", icon: IconPlane },
    { label: "Stays", href: "/", icon: IconBed },
    { label: "Cars", href: "/", icon: IconCar },
    { label: "Packages", href: "/", icon: IconUmbrella },
    { label: "Cruises", href: "/", icon: IconShip },
  ];

  const tools: NavItem[] = [
    { label: "Plan with AI", href: "/?tab=ai", icon: IconSparkle },
    { label: "Plan your trip", href: "/?tab=plan", icon: IconList },
    { label: "Explore", href: "/?tab=explore", icon: IconList },
    { label: "Flight Tracker", href: "/?tab=tracker", icon: IconList },
    { label: "Travel tips", href: "/?tab=tips", icon: IconList },
    {
      label: "KAYAK for Business",
      href: "/?tab=business",
      icon: IconList,
      badge: "NEW",
    },
  ];

  const misc: NavItem[] = [
    { label: "Trips", href: "/?tab=trips", icon: IconList },
    { label: "English", href: "/?tab=lang", icon: IconGlobe },
    { label: "United States dollar", href: "/?tab=currency", icon: IconCurrency },
    { label: "Feedback", href: "/?tab=feedback", icon: IconChat },
  ];

  const renderItem = (item: NavItem) => {
    const active =
      item.href === "/"
        ? pathname === "/"
        : pathname === "/" && item.href.startsWith("/?");

    return (
      <Link
        key={item.label}
        href={item.href}
        onClick={(e) => {
          if (item.label !== "Flights") return;
          e.preventDefault();
          router.push("/");
          const tryScroll = (tries: number) => {
            const el = document.getElementById("flights");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              return;
            }
            if (tries > 0) window.setTimeout(() => tryScroll(tries - 1), 80);
          };
          tryScroll(8);
        }}
        className={cn(
          "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition",
          "hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
          active && item.label === "Stays" ? "bg-slate-100 text-slate-900" : ""
        )}
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 group-hover:bg-slate-50">
          {item.icon({})}
        </span>
        <span className="min-w-0 flex-1 truncate">{item.label}</span>
        {item.badge ? (
          <span className="rounded-full bg-slate-500 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
            {item.badge}
          </span>
        ) : null}
      </Link>
    );
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center gap-3 px-4 py-5">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-600 text-sm font-extrabold tracking-[0.25em] text-white">
          BN
        </div>
        <div className="text-sm font-extrabold tracking-[0.35em] text-slate-900">
          BookNest
        </div>
      </div>

      <div className="px-3">
        <div className="space-y-1">{primary.map(renderItem)}</div>
        <div className="my-4 h-px bg-slate-200" />
        <div className="space-y-1">{tools.map(renderItem)}</div>
        <div className="my-4 h-px bg-slate-200" />
        <div className="space-y-1">{misc.map(renderItem)}</div>
      </div>

      <div className="mt-auto px-4 py-4 text-xs text-slate-500">
        © 2026 BookNest
      </div>
    </div>
  );
}

