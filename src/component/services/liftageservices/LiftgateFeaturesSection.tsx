"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Boxes,
  PackageCheck,
  Clock3,
  Building2,
} from "lucide-react";

const features = [
  {
    title: "Heavy Freight Handling",
    description:
      "Professional liftgate equipment designed for palletized freight and heavy commercial shipments.",
    icon: Boxes,
  },
  {
    title: "Fast Regional Dispatch",
    description:
      "Rapid freight coordination and route planning for efficient regional transportation.",
    icon: Clock3,
  },
  {
    title: "Commercial Delivery Access",
    description:
      "Reliable dock-free delivery support for storefronts, offices, and distribution centers.",
    icon: Building2,
  },
  {
    title: "Cargo Protection Systems",
    description:
      "Advanced cargo securement solutions help maintain shipment safety during transit.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Fleet Operations",
    description:
      "Well-maintained liftgate fleet equipped for flexible logistics and transportation operations.",
    icon: Truck,
  },
  {
    title: "Professional Freight Support",
    description:
      "Dedicated logistics coordination tailored for commercial freight transportation requirements.",
    icon: PackageCheck,
  },
];

export default function LiftgateFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
            Logistics Infrastructure
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-2px] text-[#081120] md:text-5xl">
            Advanced Liftgate Freight Capabilities
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our liftgate transportation systems are designed to support
            efficient commercial freight movement with secure cargo
            handling and reliable regional logistics performance.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-[32px] bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition-all duration-500 group-hover:bg-cyan-500 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#081120]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}