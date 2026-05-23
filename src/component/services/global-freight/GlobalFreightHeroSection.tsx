"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, Plane, Ship, Truck, ArrowRight } from "lucide-react";

export default function GlobalFreightHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute top-[-140px] left-[-140px] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
              <Globe2 size={16} />
              Global Freight Network
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-[-3px] text-[#081120]">
              Worldwide
              <span className="block text-cyan-600">
                Logistics Engine
              </span>
              For Modern Trade
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Integrated air, ocean, and land freight solutions designed for global-scale businesses
              requiring fast, secure, and transparent cargo movement across continents.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="group flex items-center gap-2 rounded-2xl bg-cyan-600 px-8 py-4 text-white font-semibold hover:bg-cyan-500">
                Get Quote
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              <button className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-[#081120]">
                Track Shipment
              </button>
            </div>

            {/* QUICK MODES */}
            <div className="mt-12 space-y-4">
              {[
                { icon: Plane, text: "Air Freight - Express Global Delivery" },
                { icon: Ship, text: "Ocean Freight - Bulk Cargo Shipping" },
                { icon: Truck, text: "Land Freight - Cross Border Transport" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <Icon size={18} />
                    </div>
                    <p className="text-slate-700 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLLAGE (NEW UNIQUE STYLE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="grid grid-cols-12 gap-4">

              {/* BIG IMAGE */}
              <div className="col-span-7 row-span-2 relative rounded-[34px] overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2000&auto=format&fit=crop"
                  alt="Ocean Freight"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TOP RIGHT */}
              <div className="col-span-5 relative rounded-[28px] overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop"
                  alt="Air Freight"
                  fill
                  className="object-cover"
                />
              </div>

              {/* BOTTOM RIGHT */}
              <div className="col-span-5 relative rounded-[28px] overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop"
                  alt="Land Freight"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}