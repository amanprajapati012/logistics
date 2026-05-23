"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Warehouse,
  Truck,
} from "lucide-react";

export default function LiftgateOverviewSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP */}
        <div className="max-w-3xl">
          <span className="rounded-full bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
            Liftgate Logistics Operations
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-2px] text-[#081120] md:text-5xl">
            Reliable Dock-Free Freight Transportation
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We specialize in commercial liftgate transportation for
            businesses requiring secure cargo transfers without loading
            dock infrastructure. Our fleet supports efficient freight
            movement across warehouses, storefronts, and regional
            delivery hubs.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="overflow-hidden rounded-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                alt="Liftgate Truck"
                width={500}
                height={700}
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div className="mt-12 overflow-hidden rounded-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                alt="Warehouse Freight"
                width={500}
                height={700}
                className="h-[520px] w-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: Warehouse,
                  title: "Commercial Delivery Support",
                  desc: "Efficient liftgate transportation for business freight, palletized cargo, and commercial supply distribution.",
                },
                {
                  icon: ShieldCheck,
                  title: "Protected Cargo Handling",
                  desc: "Secure loading and unloading operations designed to minimize freight damage during transportation.",
                },
                {
                  icon: Truck,
                  title: "Regional Fleet Availability",
                  desc: "Flexible liftgate fleet support for urban logistics operations and regional transportation demands.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-[30px] border border-slate-100 bg-[#F8FAFC] p-8"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                        <Icon size={30} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[#081120]">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
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