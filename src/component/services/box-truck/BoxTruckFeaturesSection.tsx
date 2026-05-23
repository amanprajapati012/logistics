"use client";

import { motion } from "framer-motion";

import {
  PackageOpen,
  DoorClosed,
  MapPin,
  Wrench,
 Truck,
  ShieldCheck,
} from "lucide-react";

const boxTruckTechnicalFeatures = [
  {
    title: "Hydraulic Liftgate Freight Access",
    description:
      "Advanced liftgate systems designed for smooth pallet unloading in commercial storefronts, retail chains, and urban delivery locations without loading docks.",
    icon: Truck,
  },
  {
    title: "Retail & E-Commerce Distribution",
    description:
      "Purpose-built box truck solutions for regional parcel movements, retail replenishment cycles, and last-mile commercial inventory transportation.",
    icon: PackageOpen,
  },
  {
    title: "Urban Route Flexibility",
    description:
      "Medium-duty truck configurations engineered for narrow city streets, shopping districts, parking structures, and restricted delivery zones.",
    icon: MapPin,
  },
  {
    title: "Roll-Up Cargo Door Systems",
    description:
      "Heavy-duty rear roll-up enclosures maximize loading efficiency and streamline freight operations in compact commercial unloading spaces.",
    icon: DoorClosed,
  },
  {
    title: "Interior Cargo Securement",
    description:
      "Integrated E-track systems and reinforced tie-down points help secure high-value freight and prevent cargo movement during transit.",
    icon: Wrench,
  },
  {
    title: "DOT-Compliant Safety Standards",
    description:
      "Professional drivers, cargo protection protocols, and safety-focused operations ensure reliable transportation performance across every route.",
    icon: ShieldCheck,
  },
];

export default function BoxTruckFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
            Technical Fleet Capabilities
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-[-2px] leading-[1.1] text-[#081120]">
            Box Truck Infrastructure Built For Urban Logistics
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our box truck fleet is engineered to handle complex commercial
            deliveries, regional freight movement, and efficient last-mile
            logistics across busy metropolitan areas.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {boxTruckTechnicalFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-[30px] border border-white/70 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.1)]"
              >
                <div className="flex gap-5">
                  {/* ICON */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 transition-all duration-500 group-hover:bg-cyan-500">
                    <Icon
                      size={30}
                      className="text-cyan-700 group-hover:text-white"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#081120]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}