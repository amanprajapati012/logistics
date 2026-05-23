"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  PackageCheck,
  Clock3,
  ChevronRight,
} from "lucide-react";

const services = [
  "Hydraulic Liftgate Freight Support",
  "Commercial Dock-Free Deliveries",
  "Retail & Warehouse Distribution",
  "Secure Heavy Cargo Handling",
];

export default function LiftgateHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      
      {/* BACKGROUND BLURS (LIKE YOUR 2nd SECTION STYLE) */}
      <div className="absolute top-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-100 blur-3xl opacity-40" />
      <div className="absolute bottom-[-140px] left-[-140px] h-[380px] w-[380px] rounded-full bg-blue-100 blur-3xl opacity-40" />

      {/* GRID TEXTURE (LIGHT) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
              <Truck size={16} />
              Professional Liftgate Transportation
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-[-3px] text-[#081120] sm:text-6xl">
              Liftgate Freight
              <span className="block text-cyan-600">
                Solutions Built
              </span>
              For Modern Logistics
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
              Our liftgate delivery division handles commercial freight,
              palletized shipments, and heavy cargo transfers for businesses
              requiring reliable dock-free transportation services across
              regional and urban delivery networks.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500">
                Request Delivery
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50">
                Explore Services
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <ChevronRight size={18} />
                  </div>

                  <p className="text-sm font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-slate-100 bg-white p-3 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
              
              <div className="relative h-[620px] overflow-hidden rounded-[32px]">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop"
                  alt="Liftgate Services"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute left-6 top-6 rounded-3xl bg-white/90 p-5 backdrop-blur-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-600 text-white">
                    <PackageCheck size={26} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#081120]">
                      Freight Protection
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Secure cargo handling operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MINI STATS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, title: "Safe Handling" },
                { icon: Clock3, title: "Fast Dispatch" },
                { icon: Truck, title: "Regional Coverage" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-slate-800">
                      {item.title}
                    </h3>
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