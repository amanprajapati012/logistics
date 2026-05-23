"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  CheckCircle2,
  Route,
  ShieldCheck,
  Truck,
  Clock3,
  Boxes,
  BarChart3,
} from "lucide-react";

const points = [
  "Dedicated dry van transportation for commercial freight operations",
  "Flexible shipping support for regional and nationwide deliveries",
  "Professional dispatch coordination and route optimization",
  "Advanced freight visibility and shipment monitoring systems",
  "Secure enclosed trailers for cargo protection during transit",
  "Reliable logistics support tailored for supply chain efficiency",
];

const cards = [
  {
    id: 1,
    title: "Nationwide Freight Coverage",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Modern Logistics Operations",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function DryVanFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
              Why Businesses Choose Our Dry Van Services
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-2px] leading-[1.1] text-[#081120] md:text-5xl lg:text-6xl">
              Advanced Freight
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Transportation Network
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Our logistics infrastructure combines experienced freight
              coordination, reliable transportation systems, and
              modern shipment visibility tools to support efficient
              commercial freight movement across the United States.
            </p>

            {/* POINTS */}
            <div className="mt-10 grid gap-5">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-[24px] border border-slate-100 bg-[#F8FAFC] p-5 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50/50"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                    <CheckCircle2 size={20} />
                  </div>

                  <p className="leading-7 text-slate-700">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[36px] bg-[#F8FAFC] p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <div className="relative h-[320px] overflow-hidden rounded-[30px] sm:h-[620px]">
                <Image
                  src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2000&auto=format&fit=crop"
                  alt="Dry Van Logistics"
                  fill
                  className="object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute right-6 top-6 rounded-3xl bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <BarChart3 size={28} />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#081120]">
                      Freight Visibility
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Real-time logistics tracking systems
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SMALL CARDS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="group overflow-hidden rounded-[28px] bg-white shadow-[0_15px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <h3 className="absolute bottom-5 left-5 text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}