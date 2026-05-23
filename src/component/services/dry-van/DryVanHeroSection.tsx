"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  MapPinned,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Nationwide Freight",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Secure Cargo",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Fast Delivery",
    icon: Clock3,
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function DryVanHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* GRID */}
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
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
              <Truck size={16} />
              Premium Dry Van Transportation
            </div>

            {/* TITLE */}
            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-[-3px] text-[#081120] sm:text-6xl xl:text-7xl">
              Modern Freight
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Logistics Solutions
              </span>
              Across The USA
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
              Our dry van transportation solutions are designed to move
              commercial freight safely, efficiently, and on time with
              advanced logistics support, experienced drivers, and
              nationwide delivery coverage.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#081120] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-500 hover:text-black">
                Request Freight Quote

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-medium text-[#081120] shadow-sm transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50">
                Explore Fleet
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Secure Dry Van Cargo Protection",
                "Real-Time Freight Tracking",
                "Flexible Nationwide Shipping",
                "Reliable Delivery Performance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <CheckCircle2 size={20} />
                  </div>

                  <p className="text-sm font-medium text-slate-700">
                    {item}
                  </p>
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
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[36px] bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="relative h-[320px] overflow-hidden rounded-[30px] sm:h-[620px]">
                <Image
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2000&auto=format&fit=crop"
                  alt="Dry Van Truck"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute left-6 top-6 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <MapPinned size={28} />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#081120]">
                      Nationwide Coverage
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Fast freight delivery across all major states
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MULTIPLE SMALL CARDS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {cards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.id}
                    className="group overflow-hidden rounded-[28px] bg-white shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* IMAGE */}
                    <div className="relative h-[180px] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#081120] shadow-lg">
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-[#081120]">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Professional dry van transportation services with
                        secure logistics operations and reliable delivery
                        performance.
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