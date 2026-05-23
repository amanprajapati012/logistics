"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

export default function BoxTruckOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute top-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <div className="absolute bottom-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-red-100 blur-3xl opacity-40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* METRIC STRIP */}
        <div className="grid grid-cols-2 gap-5 rounded-[34px] border border-white bg-[#F8FAFC] p-7 shadow-[0_10px_40px_rgba(15,23,42,0.05)] md:grid-cols-4">
          {[
            {
              title: "Coverage",
              metric: "48 States",
            },
            {
              title: "Dispatch Time",
              metric: "< 2 Hours",
            },
            {
              title: "Liftgate Fleet",
              metric: "92% Active",
            },
            {
              title: "Safety Standard",
              metric: "DOT Certified",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {item.title}
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#081120]">
                {item.metric}
              </p>
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
              Regional Distribution Operations
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-2px] text-[#081120]">
              Reliable Box Truck Solutions
              <span className="block text-slate-400">
                For Modern Urban Freight
              </span>
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-slate-600">
              Our medium-duty fleet supports businesses with flexible freight
              transportation, local delivery coordination, and streamlined
              last-mile logistics tailored for high-density commercial zones.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Compass,
                  title: "Urban Route Optimization",
                  desc: "Efficient route planning for commercial districts, retail locations, and restricted delivery corridors.",
                },
                {
                  icon: ShieldCheck,
                  title: "Advanced Cargo Protection",
                  desc: "Professional securement systems designed to protect sensitive freight during short and regional transport.",
                },
                {
                  icon: Landmark,
                  title: "Commercial Distribution Support",
                  desc: "Supporting warehouses, retail centers, and cross-dock facilities with agile freight movement.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;

                return (
                  <div
                    key={idx}
                    className="group flex gap-5 rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 transition-all duration-500 group-hover:bg-cyan-500">
                      <Icon
                        size={26}
                        className="text-cyan-700 group-hover:text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#081120]">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* BIG IMAGE */}
            <div className="group relative overflow-hidden rounded-[34px] shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop"
                alt="Box Truck"
                width={800}
                height={900}
                unoptimized
                className="h-[620px] w-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/30 via-transparent to-transparent" />
            </div>

            {/* FLOAT CARD */}
            <div className="absolute -left-6 bottom-10 rounded-[28px] border border-white/70 bg-white/90 backdrop-blur-2xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081120] text-white">
                  <ArrowUpRight size={26} />
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-[#081120]">
                    Fast Dispatch
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Rapid local freight coordination
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL IMAGE */}
            <div className="absolute -right-8 top-10 hidden overflow-hidden rounded-[28px] border-[8px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] md:block">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                alt="Warehouse"
                width={280}
                height={240}
                unoptimized
                className="h-[220px] w-[260px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}