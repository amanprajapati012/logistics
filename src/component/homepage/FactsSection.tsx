"use client";

import Link from "next/link";

import {
  PhoneCall,
  PackageCheck,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

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

export default function FactsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-28">
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
              We have been dedicated to providing top-notch
              logistics solutions. With a focus on
              efficiency and reliability, we handle all
              types of shipments with care and precision,
              ensuring customer satisfaction at every
              step.
            </p>

            {/* CALL CARD */}
            <div className="mt-10 rounded-[30px] border border-white bg-white/80 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                {/* ICON */}
                <div className="flex h-18 w-18 items-center justify-center rounded-[22px] bg-gradient-to-br from-red-500 to-red-600 shadow-[0_12px_30px_rgba(239,68,68,0.22)]">
                  <PhoneCall
                    size={30}
                    className="text-white"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-[2px] text-slate-500">
                    Call for any query!
                  </p>

                  <a
                    href="tel:+18172104500"
                    className="mt-2 block text-3xl font-semibold tracking-[-1px] text-[#081120] hover:text-cyan-600 transition-colors duration-300"
                  >
                    817-210-4500
                  </a>
                </div>

                {/* BUTTON */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#081120] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-500 hover:text-black"
                >
                  Contact Us

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
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
                  className={`group relative overflow-hidden rounded-[30px] border border-white bg-white/80 p-8 shadow-[0_15px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] ${
                    index === 2
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-cyan-50 transition-all duration-300 group-hover:bg-cyan-500">
                    <Icon
                      size={28}
                      className="text-cyan-700 group-hover:text-white"
                    />
                  </div>

                  {/* NUMBER */}
                  <h3 className="mt-7 text-5xl font-semibold tracking-[-2px] text-[#081120]">
                    {item.number}
                  </h3>

                  {/* TITLE */}
                  <p className="mt-2 text-base text-slate-600">
                    {item.title}
                  </p>

                  {/* LINE */}
                  <div className="mt-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan-500 to-red-500" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}