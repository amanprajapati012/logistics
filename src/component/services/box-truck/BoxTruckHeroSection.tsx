"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Navigation,
  Milestone,
  Boxes,
  Map,
} from "lucide-react";

const subCards = [
  {
    id: 1,
    title: "Curbside Liftgate Access",
    icon: Milestone,
    image:
      "https://images.unsplash.com/photo-1553413719-8758712a8f5f?q=80&w=1600&auto=format&fit=crop",
    desc: "Hydraulic loading support for retail stores and business locations without loading docks.",
  },
  {
    id: 2,
    title: "B2B Storefront Supply",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1600&auto=format&fit=crop",
    desc: "Efficient inventory replenishment for commercial outlets and shopping centers.",
  },
  {
    id: 3,
    title: "Metro Route Dispatch",
    icon: Navigation,
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1600&auto=format&fit=crop",
    desc: "Flexible regional delivery operations optimized for busy city environments.",
  },
];

export default function BoxTruckHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32 border-b border-slate-100">
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] bg-slate-100/70 [clip-path:polygon(100%_0,0_0,100%_100%)] opacity-70" />

      <div className="absolute bottom-0 left-10 h-[250px] w-[250px] rounded-3xl bg-cyan-100/40 rotate-12" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
              <Sparkles size={16} className="text-cyan-600" />
              Final-Mile & Medium-Duty Freight
            </div>

            {/* TITLE */}
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-2px] text-[#081120] sm:text-5xl xl:text-6xl">
              Agile Box Truck
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Delivery Solutions
              </span>
              Across Urban Routes
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              Our box truck fleet is designed for fast and efficient
              freight movement across commercial districts, retail
              locations, and regional delivery zones. We provide
              dependable transportation support for palletized cargo,
              business inventory, and time-sensitive shipments.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#081120] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-500 hover:text-black">
                Book Local Box Truck

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-medium text-[#081120] shadow-sm transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50">
                Check Service Areas
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Heavy-Duty Interior E-Track Systems",
                "Liftgate Capacity Up To 3,000 lbs",
                "Secure Commercial Freight Handling",
                "Efficient Regional Delivery Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-cyan-500" />

                  <p className="text-sm font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[36px] bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="relative h-[320px] overflow-hidden rounded-[30px] sm:h-[620px]">
                <Image
                  src="https://images.unsplash.com/photo-1652595057288-d280aa149dec?q=80&w=2000&auto=format&fit=crop"
                  alt="Box Truck Logistics"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute right-6 bottom-6 rounded-3xl bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <Map size={26} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#081120]">
                      Intra-City Delivery
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Optimized for urban freight transportation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SMALL CARDS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {subCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.id}
                    className="group overflow-hidden rounded-[28px] bg-white shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* IMAGE */}
                    <div className="relative h-[180px] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#081120] shadow-lg">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-[#081120]">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}