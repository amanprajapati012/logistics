"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { heroSlides } from "@/app/data/heroData";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  // NEXT
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  // PREV
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-screen min-h-[780px] w-full overflow-hidden bg-white">
      {/* SLIDES */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
            current === index
              ? "opacity-100 scale-100 z-20"
              : "opacity-0 scale-105 z-10"
          }`}
        >
          {/* IMAGE */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            unoptimized
            className="object-cover brightness-[0.78]"
          />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />

          {/* SOFT GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-30 flex items-center h-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                {/* BADGE */}
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-sm font-medium tracking-wide text-white shadow-lg">
                  {slide.badge}
                </div>

                {/* TITLE */}
                <h1 className="mt-7 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-[-2px] text-white">
                  {slide.title}
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-6 text-base md:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
                  {slide.description}
                </p>

                {/* BUTTONS - Stacked on Mobile, Row on Desktop */}
                <div className="mt-10 flex flex-col sm:flex-row gap-5">
                  {/* REQUEST A QUOTE (Always Top on Mobile) */}
                  <Link
                    href="/quote"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 text-white font-medium hover:bg-red-700 transition-all duration-300 shadow-2xl shadow-red-500/30 order-1"
                  >
                    Request a Quote

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </Link>

                  {/* CONTACT US (Always Bottom on Mobile) */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-xl px-8 py-4 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 order-2"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* STATS */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-3xl font-semibold text-white">
                      10K+
                    </h3>

                    <p className="text-slate-200 mt-2 text-sm">
                      Successful Deliveries
                    </p>
                  </div>

                  <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-3xl font-semibold text-white">
                      48 States
                    </h3>

                    <p className="text-slate-200 mt-2 text-sm">
                      Nationwide Coverage
                    </p>
                  </div>

                  <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-3xl font-semibold text-white">
                      24/7
                    </h3>

                    <p className="text-slate-200 mt-2 text-sm">
                      Customer Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* LEFT BUTTON - Hidden on Mobile to prevent cropping/overlap layout issues */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 hidden md:flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300"
      >
        <ChevronLeft size={28} />
      </button>

      {/* RIGHT BUTTON - Hidden on Mobile to prevent cropping/overlap layout issues */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 hidden md:flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300"
      >
        <ChevronRight size={28} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-red-600"
                : "w-3 h-3 bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-30" />
    </section>
  );
}