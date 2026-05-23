"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Truck, ArrowRight } from "lucide-react";

export default function SafeFreightHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
              <ShieldCheck size={16} />
              Secure Freight Transportation
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-[-3px] text-[#081120] sm:text-6xl">
              Safe Freight
              <span className="block text-cyan-600">
                Logistics Network
              </span>
              Built For Protection
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
              We provide high-security freight transportation with enhanced cargo monitoring,
              controlled handling systems, and verified logistics processes to ensure every shipment
              reaches safely and on time.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-8 py-4 text-sm font-semibold text-white hover:bg-cyan-500">
                Request Secure Shipment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>

              <button className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-medium text-[#081120]">
                Learn More
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Tamper-Proof Cargo Handling",
                "GPS Enabled Monitoring",
                "Insurance Protected Delivery",
                "24/7 Security Oversight",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <Lock className="text-cyan-600" size={18} />
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[36px] bg-white p-3 shadow-xl">

              <div className="relative h-[620px] overflow-hidden rounded-[30px]">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop"
                  alt="Safe Freight"
                  fill
                  className="object-cover"
                />
              </div>

              {/* FLOAT CARD */}
              <div className="absolute right-6 top-6 rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <Truck size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#081120]">
                      Secure Transit
                    </h4>
                    <p className="text-sm text-slate-500">
                      Controlled freight movement system
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}