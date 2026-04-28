"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Select } from "./components/ui/Select";
import { cn } from "./lib/cn";

export default function Home() {
  const featuredStays = useMemo(
    () => [
      {
        name: "Riverside Loft",
        location: "Phnom Penh, Cambodia",
        pricePerNight: "$128",
        rating: "4.9",
        tag: "Best Seller",
      },
      {
        name: "Beachfront Villa",
        location: "Sihanoukville, Cambodia",
        pricePerNight: "$215",
        rating: "4.8",
        tag: "Family Choice",
      },
      {
        name: "Mountain Retreat",
        location: "Mondulkiri, Cambodia",
        pricePerNight: "$149",
        rating: "4.7",
        tag: "Nature Escape",
      },
    ],
    []
  );

  const steps = useMemo(
    () => [
      {
        title: "Search Destination",
        description:
          "Find stays by city, date, and guest count with real-time availability.",
      },
      {
        title: "Choose Your Room",
        description:
          "Compare photos, amenities, and ratings to pick your best option.",
      },
      {
        title: "Confirm Booking",
        description:
          "Pay securely in minutes and receive instant booking confirmation.",
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Sokha V.",
        message:
          "The booking flow is so smooth. I found a great hotel and checked out in under two minutes.",
      },
      {
        name: "Dara P.",
        message:
          "Clean design, clear pricing, and excellent room recommendations. Exactly what I needed.",
      },
    ],
    []
  );

  const tabs = useMemo(
    () => [
      { id: "flights", label: "Flights" },
      { id: "stays", label: "Stays" },
      { id: "cars", label: "Cars" },
      { id: "packages", label: "Packages" },
      { id: "cruises", label: "Cruises" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>(
    "stays"
  );

  const scrollToFlightsFooter = () => {
    const el = document.getElementById("flights");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const setTab = (tabId: (typeof tabs)[number]["id"]) => {
    if (tabId === "flights") {
      setActiveTab("flights");
      scrollToFlightsFooter();
      return;
    }
    setActiveTab(tabId);
  };

  const heroTitle = useMemo(() => {
    switch (activeTab) {
      case "flights":
        return "Find the right flight from 100s of sites.";
      case "cars":
        return "Find the right car rental from 100s of sites.";
      case "packages":
        return "Find the right package deal from 100s of sites.";
      case "cruises":
        return "Find the right cruise from 100s of sites.";
      case "stays":
      default:
        return "Find the right hotel from 200s of sites.";
    }
  }, [activeTab]);

  const tabIcon = (id: (typeof tabs)[number]["id"]) => {
    const base = "h-4 w-4";
    switch (id) {
      case "flights":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
            <path
              d="M2.5 13.2 21 8.2c.8-.2 1.4.6 1 1.3l-2.7 4.5c-.2.3-.5.5-.8.6l-4.7 1.1-3.1 5c-.4.6-1.4.4-1.5-.3l-.6-4.1-4-1.2c-.7-.2-.8-1.2-.1-1.4Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "stays":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
            <path
              d="M4 11.5h16a2.5 2.5 0 0 1 2.5 2.5V19H20v-2H4v2H1.5v-5A2.5 2.5 0 0 1 4 11.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M6 11.5V9.8A2.8 2.8 0 0 1 8.8 7h2.6A2.6 2.6 0 0 1 14 9.6v1.9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "cars":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
            <path
              d="M5 16h14l-1.2-5a2.3 2.3 0 0 0-2.2-1.8H8.4A2.3 2.3 0 0 0 6.2 11L5 16Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M7 16v3M17 16v3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "packages":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
            <path
              d="M7 10V7.5A2.5 2.5 0 0 1 9.5 5h5A2.5 2.5 0 0 1 17 7.5V10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M6 10h12l-1 10H7L6 10Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "cruises":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
            <path
              d="M5 12h14l-1.5 7H6.5L5 12Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M12 4v8M12 4l5 3M12 4 7 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  const heroImages = useMemo(
    () => [
      "/assets/properties/hero_1.png",
      "/assets/properties/hero_2.png",
      "/assets/properties/hero_3.png",
      "/assets/properties/hero_4.png",
    ],
    []
  );

  const travelProCards = useMemo(
    () => [
      {
        title: "Explore",
        desc: "See destinations on your budget",
        imageSrc: "/assets/explore.svg",
      },
      {
        title: "Trips",
        desc: "Keep all your plans in one place",
        imageSrc: "/assets/trips.svg",
      },
      {
        title: "Price Alerts",
        desc: "Know when prices change",
        imageSrc: "/assets/price_alerts.svg",
      },
      {
        title: "Flight Tracker",
        desc: "See real-time delays",
        imageSrc: "/assets/flight_tracker.svg",
      },
      {
        title: "Plan with AI",
        desc: "Get travel questions answered",
        imageSrc: "/assets/plan_ai.svg",
      },
      {
        title: "Best Time to Travel",
        desc: "Know when to save",
        imageSrc: "/assets/best_travel.svg",
      },
    ],
    []
  );

  const flightDestinations = useMemo(
    () => [
      ["Las Vegas Flights", "New York Flights", "London Flights"],
      ["Los Angeles Flights", "Miami Flights", "Paris Flights"],
      ["Orlando Flights", "Rome Flights", "Manila Flights"],
      ["Cancun Flights", "Seattle Flights", "Denver Flights"],
      ["Tokyo Flights", "Fort Lauderdale Flights", "San Francisco Flights"],
      ["Chicago Flights", "Atlanta Flights", "San Diego Flights"],
      ["Phoenix Flights", "Boston Flights", "Punta Cana Flights"],
      ["India Flights", "United States Flights", "Europe Flights"],
      ["Japan Flights", "Hawaii Flights", "Florida Flights"],
      ["New Delhi Flights", "San Juan Flights", "Dallas Flights"],
      ["Washington, D.C. Flights", "Mumbai Flights", "Tampa Flights"],
    ],
    []
  );

  const faqs = useMemo(
    () => [
      "How can I get cheap flights?",
      "When is the best time to book a flight?",
      "How can I find cheap international flights?",
      "How can I track the price of a flight?",
      "My dates are flexible, how can I find cheap flights?",
      "How can I compare flights from multiple airports?",
      "How can I find cheap flights to anywhere?",
      "How do I know I can trust deals on KAYAK?",
      "What is the cheapest month to fly?",
      "What is the cheapest day of the week to fly?",
    ],
    []
  );

  const travelProTrackRef = useRef<HTMLDivElement | null>(null);
  const [travelProsDragging, setTravelProsDragging] = useState(false);
  const travelProDragRef = useRef<{
    dragging: boolean;
    startX: number;
    startScrollLeft: number;
  }>({ dragging: false, startX: 0, startScrollLeft: 0 });

  const scrollTravelPros = (dir: "prev" | "next") => {
    const el = travelProTrackRef.current;
    if (!el) return;
    const amount = Math.max(280, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl mt-6 px-6 pb-16">
        <section className="rounded-3xl bg-slate-100 px-6 py-10 shadow-sm ring-1 ring-slate-200/60 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                {heroTitle}
              </h1>

              <div className="mt-6 flex flex-wrap gap-2">
                {tabs.map((t) => {
                  const active = t.id === activeTab;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTab(t.id)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold shadow-sm transition",
                        active
                          ? "border-orange-200 bg-orange-50 text-orange-800"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      )}
                      aria-pressed={active}
                    >
                      <span
                        className={cn(
                          "grid h-8 w-8 place-items-center rounded-lg",
                          active
                            ? "bg-orange-500 text-white"
                            : "bg-slate-100 text-slate-700"
                        )}
                        aria-hidden="true"
                      >
                        {tabIcon(t.id)}
                      </span>
                      {t.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6">
                <Card className="rounded-2xl p-3 shadow-md ring-slate-200/60">
                  <div className="flex flex-wrap items-center gap-3 px-1 pb-3 pt-1 text-xs font-semibold text-slate-600">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
                    >
                      Round-trip
                      <span aria-hidden="true">▾</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
                    >
                      0 bags
                      <span aria-hidden="true">▾</span>
                    </button>
                  </div>
                  <div className="grid gap-3 lg:grid-cols-[1.35fr_0.9fr_0.9fr_0.9fr_auto] lg:items-center">
                    <Input
                      placeholder="Los Angeles (LAX)"
                      aria-label="From"
                      className="lg:rounded-xl"
                    />
                    <Input
                      placeholder="To?"
                      aria-label="To"
                    />
                    <Input type="date" aria-label="Departure date" />
                    <Select aria-label="Passengers">
                      <option>1 adult, Economy</option>
                      <option>2 adults, Economy</option>
                      <option>1 adult, Business</option>
                    </Select>
                    <Button
                      className="h-full bg-orange-600 hover:bg-orange-500 focus-visible:ring-orange-300 lg:aspect-square lg:w-12 lg:px-0"
                      aria-label="Search"
                    >
                      <span className="text-base">⌕</span>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="h-28 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60">
                    <img
                      src={heroImages[0]}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable={false}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                        (
                          e.currentTarget.parentElement as HTMLDivElement
                        ).className =
                          "h-28 rounded-2xl bg-gradient-to-br from-emerald-200 to-sky-200 shadow-sm";
                      }}
                    />
                  </div>
                  <div className="h-36 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60">
                    <img
                      src={heroImages[1]}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable={false}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                        (
                          e.currentTarget.parentElement as HTMLDivElement
                        ).className =
                          "h-36 rounded-2xl bg-gradient-to-br from-indigo-200 to-fuchsia-200 shadow-sm";
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-10">
                  <div className="h-36 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60">
                    <img
                      src={heroImages[2]}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable={false}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                        (
                          e.currentTarget.parentElement as HTMLDivElement
                        ).className =
                          "h-36 rounded-2xl bg-gradient-to-br from-amber-200 to-orange-200 shadow-sm";
                      }}
                    />
                  </div>
                  <div className="h-28 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60">
                    <img
                      src={heroImages[3]}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable={false}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                        (
                          e.currentTarget.parentElement as HTMLDivElement
                        ).className =
                          "h-28 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-sm";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="rounded-2xl p-5">
            <div className="text-sm font-semibold">Save when you compare</div>
            <div className="mt-1 text-sm text-slate-600">
              More deals. More sites. One search.
            </div>
          </Card>
          <Card className="rounded-2xl p-5">
            <div className="text-sm font-semibold">41,000,000+</div>
            <div className="mt-1 text-sm text-slate-600">Searches this week</div>
          </Card>
          <Card className="rounded-2xl p-5">
            <div className="text-sm font-semibold">Travelers love us</div>
            <div className="mt-1 text-sm text-slate-600">
              4.9 ★ average rating on our app
            </div>
          </Card>
        </section>

        <section id="stays" className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-bold">Featured Stays</h3>
            <a
              href="#"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              View all
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredStays.map((stay) => (
              <Card
                key={stay.name}
                className="rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Badge variant="brand" className="mb-4">
                  {stay.tag}
                </Badge>
                <h4 className="text-lg font-semibold">{stay.name}</h4>
                <p className="mt-1 text-sm text-slate-500">{stay.location}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    From{" "}
                    <span className="font-bold text-slate-900">
                      {stay.pricePerNight}
                    </span>
                    /night
                  </p>
                  <Badge variant="warning">{stay.rating} ★</Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-bold">For travel pros</h3>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollToFlightsFooter}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                See more
              </button>
              <div className="hidden items-center gap-2 md:flex">
                <button
                  type="button"
                  onClick={() => scrollTravelPros("prev")}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition",
                    "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-50"
                  )}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => scrollTravelPros("next")}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition",
                    "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-50"
                  )}
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              ref={travelProTrackRef}
              className={cn(
                "flex gap-5 overflow-x-auto pb-2",
                "cursor-grab active:cursor-grabbing select-none",
                "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                travelProsDragging ? "snap-none" : "snap-x snap-mandatory"
              )}
              onPointerDown={(e) => {
                const el = travelProTrackRef.current;
                if (!el) return;
                travelProDragRef.current = {
                  dragging: true,
                  startX: e.clientX,
                  startScrollLeft: el.scrollLeft,
                };
                setTravelProsDragging(true);
                el.setPointerCapture(e.pointerId);
              }}
              onPointerMove={(e) => {
                const el = travelProTrackRef.current;
                if (!el) return;
                if (!travelProDragRef.current.dragging) return;
                const dx = e.clientX - travelProDragRef.current.startX;
                el.scrollLeft = travelProDragRef.current.startScrollLeft - dx;
              }}
              onPointerUp={(e) => {
                const el = travelProTrackRef.current;
                travelProDragRef.current.dragging = false;
                setTravelProsDragging(false);
                el?.releasePointerCapture(e.pointerId);
              }}
              onPointerCancel={(e) => {
                const el = travelProTrackRef.current;
                travelProDragRef.current.dragging = false;
                setTravelProsDragging(false);
                el?.releasePointerCapture(e.pointerId);
              }}
            >
              {travelProCards.map((c) => (
                <Card
                  key={c.title}
                  className={cn(
                    "snap-start rounded-2xl p-5 shadow-[0_10px_30px_rgba(2,6,23,0.08)]",
                    "min-w-[260px] w-[260px] sm:min-w-[280px] sm:w-[280px] md:min-w-[calc((100%-60px)/4)] md:w-[calc((100%-60px)/4)]"
                  )}
                >
                  <div className="mb-4 grid h-36 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                    <img
                      src={c.imageSrc}
                      alt=""
                      className="h-28 w-auto"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{c.desc}</div>
                </Card>
              ))}
            </div>

            <div className="mt-4 flex justify-end md:hidden">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollTravelPros("prev")}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition",
                    "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-50"
                  )}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => scrollTravelPros("next")}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition",
                    "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-50"
                  )}
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <h3 className="text-2xl font-bold">How It Works</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-slate-50 p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-indigo-600">
                  Step {index + 1}
                </p>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="mt-14">
          <h3 className="text-2xl font-bold">What Guests Say</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {testimonials.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <p className="text-sm leading-7 text-slate-600">
                  &quot;{review.message}&quot;
                </p>
                <footer className="mt-4 text-sm font-semibold text-slate-900">{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-10">
          <section id="flights" className="mt-2 scroll-mt-24">
            <h3 className="text-2xl font-bold">
              Search cheap flights by destination
            </h3>
            <p className="mt-1 text-sm text-slate-600">Find Cheap Flights</p>
            <p className="mt-6 max-w-4xl text-sm leading-6 text-slate-600">
              Save money on airfare by searching for cheap flight tickets on
              BookNest. BookNest searches for flight deals on hundreds of airline
              tickets sites to help you find the cheapest flights. Whether you
              are looking for a last minute flight or a cheap plane ticket for a
              later date, you can find the best deals faster.
            </p>

            <div className="mt-6 grid gap-x-10 gap-y-2 md:grid-cols-3">
              {flightDestinations.flat().map((label) => (
                <details
                  key={label}
                  className="border-b border-slate-200 py-3 text-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-slate-900">
                    <span>{label}</span>
                    <span className="text-slate-500" aria-hidden="true">
                      ▾
                    </span>
                  </summary>
                  <div className="mt-2 text-sm text-slate-600">
                    Explore deals for {label}.
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold">Frequently asked questions</h3>
            <div className="mt-6 grid gap-x-10 gap-y-2 md:grid-cols-2">
              {faqs.map((q) => (
                <details key={q} className="border-b border-slate-200 py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-900">
                    <span>{q}</span>
                    <span className="text-slate-500" aria-hidden="true">
                      ▾
                    </span>
                  </summary>
                  <div className="mt-2 text-sm leading-6 text-slate-600">
                    We’ll add the full answer content here when your booking
                    data and FAQ copy are ready.
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-12 border-t border-slate-200 pt-10" />

          <div className="text-xs font-semibold text-slate-500">
            <button
              type="button"
              onClick={scrollToFlightsFooter}
              className="underline decoration-slate-300 underline-offset-2 hover:text-slate-700"
            >
              Top International Flight Routes
            </button>
          </div>

          <div className="mt-4 text-xs text-slate-600">
            Not what you&apos;re looking for? Find thousands of other{" "}
            <a href="#" className="underline decoration-slate-300 underline-offset-2 hover:text-slate-800">
              hotels
            </a>
            ,{" "}
            <a href="#" className="underline decoration-slate-300 underline-offset-2 hover:text-slate-800">
              flights
            </a>{" "}
            and{" "}
            <a href="#" className="underline decoration-slate-300 underline-offset-2 hover:text-slate-800">
              car rentals
            </a>{" "}
            with BookNest.
          </div>

          <div className="mt-10 grid gap-10 border-t border-slate-200 pt-10 md:grid-cols-4">
            <div>
              <div className="text-sm font-semibold text-slate-900">Company</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Mobile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    How we work
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Contact</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Help / FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Hotel owners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Advertise with us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">More</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Airline fees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Airlines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Low fare tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Badges &amp; Certificates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                Get the BookNest app
              </div>
              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm hover:bg-slate-50"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-900 text-white">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M9 7h6M10 17h4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold text-slate-500">
                      Download on
                    </span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Google Play
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm hover:bg-slate-50"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-900 text-white">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M16.6 13.3c.1 2.8 2.5 3.7 2.6 3.8-.2.6-1 2.1-2 3.3-.9 1-1.9 2.1-3.4 2.1-1.5 0-2-.8-3.7-.8-1.7 0-2.3.8-3.7.8-1.4 0-2.4-1.2-3.4-2.2-1.9-2.2-3.4-6.2-1.4-9 .9-1.3 2.5-2.2 4.3-2.2 1.4 0 2.7.9 3.6.9.8 0 2.4-1.1 4.1-1 1.4.1 2.8.7 3.7 1.9-3.3 1.8-2.9 5.2-2.7 5.4Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.8 3.4c.7.9 1.1 2.2.9 3.5-1.1.1-2.3-.6-3-1.5-.7-.9-1.2-2.2-1-3.5 1.2-.1 2.4.6 3.1 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold text-slate-500">
                      Download on
                    </span>
                    <span className="block text-sm font-semibold text-slate-900">
                      App Store
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 BookNest. All rights reserved.</p>
            <p>Secure payments • Verified properties • 24/7 support</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
