"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  ShieldCheck,
  Truck,
  Clock3,
  PackageCheck,
  Route,
  Warehouse,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Protected Freight Movement",
    description:
      "Our dry van trailers provide enclosed transportation to protect cargo from weather, dust, and external damage throughout transit.",
  },

  {
    id: 2,
    icon: Clock3,
    title: "Reliable Transit Scheduling",
    description:
      "Efficient dispatch coordination and route planning help maintain dependable delivery timelines across regional and national freight lanes.",
  },

  {
    id: 3,
    icon: Truck,
    title: "Scalable Transportation",
    description:
      "Flexible dry van capacity solutions designed for retail, wholesale, manufacturing, and commercial distribution operations.",
  },

  {
    id: 4,
    icon: PackageCheck,
    title: "Commercial Cargo Support",
    description:
      "Safe transportation solutions for palletized freight, boxed inventory, electronics, furniture, and packaged consumer goods.",
  },
];

const stats = [
  {
    id: 1,
    icon: Route,
    value: "50+",
    label: "Major Freight Routes",
  },

  {
    id: 2,
    icon: Warehouse,
    value: "24/7",
    label: "Dispatch Operations",
  },

  {
    id: 3,
    icon: BarChart3,
    value: "98%",
    label: "Delivery Accuracy",
  },
];

export default function DryVanOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute top-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
            Dry Van Transportation Solutions
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-2px] leading-[1.1] text-[#081120] md:text-5xl lg:text-6xl">
            Freight Solutions Designed For
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Modern Supply Chains
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We provide dependable dry van transportation services
            built to support commercial freight movement with
            advanced logistics coordination, cargo protection,
            and reliable delivery performance.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[36px] bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[620px]">
                <Image
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
                  alt="Dry Van Freight"
                  fill
                  className="object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute bottom-6 left-6 rounded-3xl bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <Truck size={28} />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#081120]">
                      Professional Logistics
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Advanced freight coordination systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* FEATURE CARDS */}
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="group rounded-[30px] bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 text-cyan-600">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-[#081120]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* STATS */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="rounded-[28px] bg-white p-6 text-center shadow-[0_15px_40px_rgba(15,23,42,0.05)]"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-5 text-3xl font-semibold text-[#081120]">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {item.label}
                    </p>
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