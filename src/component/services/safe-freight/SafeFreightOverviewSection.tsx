"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Truck,
  ShieldCheck,
  BarChart3,
  Route,
} from "lucide-react";

const stats = [
  { icon: ShieldCheck, value: "99.8%", label: "Security Rate" },
  { icon: Truck, value: "500+", label: "Daily Shipments" },
  { icon: Route, value: "120+", label: "Active Routes" },
];

export default function SafeFreightOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">

      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div>
            <Image
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2000&auto=format&fit=crop"
              alt="Safe Freight Truck"
              width={700}
              height={600}
              className="rounded-[36px]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>

            <h2 className="text-4xl font-semibold text-[#081120]">
              Built For
              <span className="block text-cyan-600">Maximum Cargo Safety</span>
            </h2>

            <p className="mt-5 text-slate-600">
              Our safe freight system ensures complete cargo protection with advanced logistics monitoring and controlled handling.
            </p>

            {/* POINTS */}
            <div className="mt-10 space-y-4">
              {[
                "Encrypted shipment tracking system",
                "Verified driver & fleet network",
                "Tamper detection protocols",
              ].map((p, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-cyan-600" />
                  <p className="text-slate-700">{p}</p>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-5">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="bg-white p-5 rounded-2xl text-center shadow-sm">
                    <Icon className="mx-auto text-cyan-600" />
                    <h3 className="mt-3 text-xl font-semibold text-[#081120]">
                      {s.value}
                    </h3>
                    <p className="text-sm text-slate-500">{s.label}</p>
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