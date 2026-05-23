"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ThermometerSnowflake,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  MapPinned,
  Gauge,
} from "lucide-react";

// Unique Premium Unsplash Images tailored for Cold Chain Logistics
const cards = [
  {
    id: 1,
    title: "Multi-Zone Cooling",
    icon: ThermometerSnowflake,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    desc: "Advanced multi-temperature setups tailored for mixed cold-chain inventory.",
  },
  {
    id: 2,
    title: "FSMA & FDA Compliant",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
    desc: "Strict adherence to US sanitary transport regulations for food and pharma.",
  },
  {
    id: 3,
    title: "Continuous Monitoring",
    icon: Gauge,
    image:
      "https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1600&auto=format&fit=crop",
    desc: "Real-time telematics providing end-to-end temperature logs during transit.",
  },
];

export default function ReeferHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <ThermometerSnowflake size={16} className="animate-pulse" />
              Advanced Reefer & Cold Chain Logistics
            </div>

            {/* TITLE */}
            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-[-3px] text-[#081120] sm:text-6xl xl:text-7xl">
              Precision Cold Chain
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Temperature Controlled
              </span>
              Freight Across USA
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
              Protect your climate-sensitive cargo with our state-of-the-art 
              refrigerated transport fleet. From fresh produce and dairy to highly 
              sensitive pharmaceuticals, we deliver cross-country with uncompromised thermal consistency.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#081120] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Book Reefer Capacity
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-medium text-[#081120] shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50">
                View Temp Specs
              </button>
            </div>

            {/* QUICK FEATURES */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Strict Temp Range (-20°F to 80°F)",
                "Real-Time Smart-Lock Telematics",
                "FDA & FSMA Sanitary Standards",
                "24/7 Dedicated Cold-Chain Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* MAIN IMAGE - REEFER TRUCK IN USA */}
            <div className="relative overflow-hidden rounded-[36px] bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="relative h-[320px] overflow-hidden rounded-[30px] sm:h-[620px]">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop"
                  alt="Modern Refrigerated Semi-Truck on US Highway"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute left-6 top-6 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <MapPinned size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#081120]">
                      Smart Cold Corridors
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Seamless temperature logistics coast-to-coast
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* THREE BOTTOM CARDS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className="group overflow-hidden rounded-[28px] bg-white shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* CARD IMAGE */}
                    <div className="relative h-[140px] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#081120] shadow-lg">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-[#081120]">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {card.desc}
                      </p>
                    </div>
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