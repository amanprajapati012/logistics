"use client";

import { motion } from "framer-motion";
import { 
  Snowflake, 
  ShieldCheck, 
  Layers, 
  FileText, 
  AlertTriangle,
  FlameKindling
} from "lucide-react";

const reeferFeatures = [
  {
    title: "Frozen & Deep Chill Capacity",
    description: "Deep freezing mechanisms optimized down to -20°F. Perfect for seafood, ice creams, and highly sensitive industrial components.",
    icon: Snowflake,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Heated Trailer Modes",
    description: "Equipped with dual-action climate systems to provide warmth up to 80°F, preventing liquids and chemicals from freezing during northern US winters.",
    icon: FlameKindling,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Divided Multi-Temp Bulks",
    description: "Configurable bulkheads allow us to carry frozen goods, chilled products, and dry items simultaneously in a single haul.",
    icon: Layers,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Instant FSMA Audit Reports",
    description: "Get comprehensive, time-stamped temperature logs mapping out the journey, ensuring worry-free regulatory audits at receiving docks.",
    icon: FileText,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Proactive Outage Alerts",
    description: "Smart sensors notify our 24/7 dispatcher desk instantly if variance is detected, solving mechanical issues before the cargo is affected.",
    icon: AlertTriangle,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Certified Pharma Transport",
    description: "Strict GDP protocol fulfillment with advanced sanitation processes to fulfill high-value pharmaceutical supply chain demands safely.",
    icon: ShieldCheck,
    color: "from-cyan-500 to-blue-600",
  },
];

export default function ReeferFeatureSection() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Technical Capabilities
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#081120] sm:text-5xl">
            Engineered To Preserve Every Degree
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We offer more than just cold spaces. Our refrigerated logistics frameworks integrate technology, specialized trailers, and trained drivers to safeguard sensitive assets.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2">
            {reeferFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* ICON BANNER ACCENT */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-sm`}>
                    <Icon size={22} />
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-6 text-xl font-semibold leading-7 text-[#081120]">
                    {feature.title}
                  </h3>
                  
                  <p className="mt-3 flex-auto text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}