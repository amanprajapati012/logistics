"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Thermometer, ShieldAlert, Award, Activity } from "lucide-react";

export default function ReeferOverviewSection() {
  const stats = [
    { label: "Temperature Accuracy", value: "99.9%" },
    { label: "FDA Food Grade Fleet", value: "100%" },
    { label: "US Transit Coverage", value: "50 States" },
    { label: "On-Time Cold Delivery", value: "98.7%" },
  ];

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          {/* LEFT SIDE - IMAGES GRAPHICS */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-[32px] overflow-hidden border border-slate-100 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop" 
                alt="Cold Storage Distribution Depot Warehouse"
                width={600}
                height={700}
                className="object-cover h-[500px] w-full"
              />
            </div>
            
            {/* FLOATING OVERLAY INSIGHT */}
            <div className="absolute -bottom-6 -right-6 max-w-xs rounded-2xl bg-[#081120] p-6 text-white shadow-xl hidden md:block">
              <p className="text-sm font-light text-slate-300 leading-relaxed">
                "Our reefers use multi-sensor probes to monitor top, middle, and bottom cargo layer temperatures continuously."
              </p>
              <div className="mt-4 flex items-center gap-2 text-cyan-400 font-medium text-xs tracking-wider uppercase">
                <Activity size={14} /> Zero Thermal Spikes Guaranteed
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT & STATS */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Service Overview
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#081120] sm:text-5xl">
              Securing Quality Through Integrity-Driven Cold Chains
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              When shipping perishables or specialized biochemical products across the US, minor temperature variations can compromise an entire load. Our Reefer services combine cutting-edge trailer insulation with high-output refrigeration units to ensure stability.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We proactively prevent claims by utilizing pre-cooled trailers before loading, checking pulp temperatures at pick-up, and supplying electronic temperature log sheets directly upon delivery.
            </p>

            {/* NUMERICAL STATS GRID */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 border-t border-slate-100 pt-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}