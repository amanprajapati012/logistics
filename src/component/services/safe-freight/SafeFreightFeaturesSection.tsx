"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Eye,
  MapPin,
  AlertTriangle,
  Lock,
  FileCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "High Security Transport",
    desc: "Dedicated secure freight lanes with monitored transportation systems.",
  },
  {
    icon: Eye,
    title: "Live Shipment Tracking",
    desc: "Real-time visibility of cargo movement with smart tracking updates.",
  },
  {
    icon: Lock,
    title: "Restricted Access Handling",
    desc: "Only verified personnel can access freight during loading/unloading.",
  },
  {
    icon: FileCheck,
    title: "Verified Documentation",
    desc: "Every shipment is processed with compliance and verification checks.",
  },
];

export default function SafeFreightFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">

      <div className="absolute top-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#081120]">
            Why Safe Freight
            <span className="block text-cyan-600">Matters Most</span>
          </h2>
          <p className="mt-5 text-slate-600">
            Security-focused logistics designed to protect high-value and sensitive cargo.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop"
              alt="Security Freight"
              width={700}
              height={600}
              className="rounded-[36px]"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-5 bg-white p-6 rounded-3xl shadow-sm"
                >
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#081120]">
                      {f.title}
                    </h3>
                    <p className="text-slate-600 mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}