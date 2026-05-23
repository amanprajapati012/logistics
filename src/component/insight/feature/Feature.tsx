"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  PackageCheck,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

/* ---------------- TOP FEATURE IMAGES ---------------- */
const featureImages = [
  "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80",
];

/* ---------------- STATS ---------------- */
const stats = [
  {
    id: 1,
    number: "4+",
    title: "Happy Clients",
    icon: Users,
  },
  {
    id: 2,
    number: "34+",
    title: "Complete Shipments",
    icon: PackageCheck,
  },
  {
    id: 3,
    number: "33+",
    title: "Customer Reviews",
    icon: Star,
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#F4F7FB]">

      {/* ================= TOP IMAGE SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-[55vh]">
        {featureImages.map((img, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={img}
              alt={`logistics-${i}`}
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* ================= FACTS SECTION ================= */}
      <div className="relative overflow-hidden py-24 lg:py-28">

        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-red-500/10 blur-3xl" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* TAG */}
              <div className="inline-flex items-center rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
                Some Facts
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-[1.12] tracking-[-2px] text-[#081120]">
                Place To Manage All Of Your Shipments
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-600">
                We have been dedicated to providing top-notch logistics solutions.
                With a focus on efficiency and reliability, we handle all types
                of shipments with care and precision, ensuring customer satisfaction.
              </p>

              {/* CALL CARD */}
              <div className="mt-10 rounded-[30px] border border-white bg-white/80 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl">

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                  {/* ICON */}
                  <div className="flex h-18 w-18 items-center justify-center rounded-[22px] bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                    <PhoneCall size={30} className="text-white" />
                  </div>

                  {/* TEXT */}
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-[2px] text-slate-500">
                      Call for any query!
                    </p>

                    <a
                      href="tel:+18172104500"
                      className="mt-2 block text-3xl font-semibold text-[#081120] hover:text-cyan-600 transition-colors"
                    >
                      817-210-4500
                    </a>
                  </div>

                  {/* BUTTON (NOT BLUE) */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#081120] px-6 py-3 text-sm font-medium text-white hover:bg-black transition-all"
                  >
                    Contact Us
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>

                </div>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid gap-6 sm:grid-cols-2">

              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className={`group rounded-[30px] border border-white bg-white/80 p-8 shadow-md hover:shadow-xl transition-all ${
                      index === 2 ? "sm:col-span-2" : ""
                    }`}
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-cyan-50 group-hover:bg-cyan-500 transition">
                      <Icon size={28} className="text-cyan-700 group-hover:text-white" />
                    </div>

                    <h3 className="mt-7 text-5xl font-semibold text-[#081120]">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {item.title}
                    </p>

                    <div className="mt-5 h-[3px] w-14 bg-gradient-to-r from-cyan-500 to-red-500 rounded-full" />

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}