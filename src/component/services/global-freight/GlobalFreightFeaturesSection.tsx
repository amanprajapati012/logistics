"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Clock3,
  FileCheck,
  Layers,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Worldwide Coverage",
    desc: "Freight operations across 120+ countries with unified logistics coordination.",
  },
  {
    icon: ShieldCheck,
    title: "Cargo Security Layer",
    desc: "Multi-level protection system ensuring safe international transportation.",
  },
  {
    icon: Clock3,
    title: "Optimized Transit Time",
    desc: "AI-based route planning for faster cross-border delivery.",
  },
  {
    icon: FileCheck,
    title: "Custom Clearance Support",
    desc: "End-to-end documentation handling for international shipments.",
  },
  {
    icon: Layers,
    title: "Unified Tracking System",
    desc: "Single dashboard visibility for air, sea, and land freight.",
  },
  {
    icon: MapPin,
    title: "Smart Routing Network",
    desc: "Dynamic freight routing based on global logistics demand.",
  },
];

export default function GlobalFreightFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">

      <div className="absolute top-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-140px] left-[-140px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* TITLE */}
        <motion.div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#081120]">
            Built For
            <span className="block text-cyan-600">Global Scale Logistics</span>
          </h2>
          <p className="mt-5 text-slate-600">
            Enterprise-grade freight infrastructure for international supply chain operations.
          </p>
        </motion.div>

        {/* GRID CARDS */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-[30px] shadow-sm hover:shadow-xl transition"
              >
                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#081120]">
                  {f.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}