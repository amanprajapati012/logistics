"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  Truck,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export default function GlobalFreightOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">

      <div className="absolute top-[-140px] left-[-140px] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div>
            <Image
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2000&auto=format&fit=crop"
              alt="Global Freight Operations"
              width={700}
              height={600}
              className="rounded-[36px]"
            />
          </motion.div>

          {/* CONTENT */}
          <div>

            <h2 className="text-4xl font-semibold text-[#081120]">
              One Network.
              <span className="block text-cyan-600">
                Three Freight Systems
              </span>
            </h2>

            <p className="mt-5 text-slate-600">
              Integrated global logistics system combining air, ocean, and land freight into a single intelligent supply chain network.
            </p>

            {/* POINTS */}
            <div className="mt-10 space-y-4">
              {[
                "Unified international logistics platform",
                "Cross-border compliance management",
                "Real-time shipment intelligence",
              ].map((t, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-cyan-600" />
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>

            {/* MODES */}
            <div className="mt-10 grid grid-cols-3 gap-5">

              {[
                { icon: Plane, label: "Air" },
                { icon: Ship, label: "Ocean" },
                { icon: Truck, label: "Land" },
              ].map((m, i) => {
                const Icon = m.icon;

                return (
                  <div key={i} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                    <Icon className="mx-auto text-cyan-600" />
                    <p className="mt-3 font-medium text-[#081120]">{m.label}</p>
                  </div>
                );
              })}

            </div>

            {/* STATS */}
            <div className="mt-10 flex gap-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-3">
                <BarChart3 className="text-cyan-600" />
                <div>
                  <p className="font-semibold text-[#081120]">99.5%</p>
                  <p className="text-xs text-slate-500">On-Time Rate</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}