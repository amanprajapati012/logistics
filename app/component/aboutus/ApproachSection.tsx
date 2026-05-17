"use client";

import {
  Users,
  Lightbulb,
  Leaf,
  ArrowRight,
} from "lucide-react";

const approaches = [
  {
    id: "01",
    title: "Customer-Centric",
    description:
      "We place our customers at the heart of everything we do, tailoring our services to meet their unique needs and ensuring exceptional service every step of the way.",
    icon: Users,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    glow: "bg-cyan-400/20",
    border: "border-cyan-100",
  },

  {
    id: "02",
    title: "Innovative Solutions",
    description:
      "Our commitment to innovation drives us to continuously improve our processes and adopt the latest technologies, ensuring we provide cutting-edge logistics solutions.",
    icon: Lightbulb,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    glow: "bg-red-400/20",
    border: "border-red-100",
  },

  {
    id: "03",
    title: "Sustainability",
    description:
      "We are committed to sustainability and minimizing our environmental impact, implementing green practices throughout our operations.",
    icon: Leaf,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    glow: "bg-emerald-400/20",
    border: "border-emerald-100",
  },
];

export default function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-red-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP HEADER */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
              Our Approach
            </div>

            <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-[-2px] text-[#081120]">
              How We Operate
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-2xl rounded-[30px] border border-white/70 bg-white/70 p-6 backdrop-blur-xl shadow-[0_15px_50px_rgba(15,23,42,0.05)]">
            <p className="text-lg leading-relaxed text-slate-600">
              We combine innovation, customer-focused
              service, and sustainable logistics practices
              to deliver efficient freight solutions for
              businesses worldwide.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {approaches.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-[40px] border ${item.border} bg-white/80 p-8 backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]`}
              >
                {/* GLOW */}
                <div
                  className={`absolute -top-10 -right-10 h-40 w-40 rounded-full ${item.glow} blur-3xl opacity-70`}
                />

                {/* TOP NUMBER */}
                <div className="absolute right-8 top-8 text-7xl font-semibold tracking-[-5px] text-slate-100">
                  {item.id}
                </div>

                {/* ICON */}
                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-[28px] ${item.iconBg} shadow-sm transition-all duration-500 group-hover:scale-110`}
                >
                  <Icon
                    size={38}
                    className={item.iconColor}
                  />
                </div>

                {/* CONTENT */}
                <div className="relative mt-10">
                  <h3 className="text-3xl font-medium tracking-[-1px] text-[#081120]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="relative mt-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan-500 to-red-500 transition-all duration-500 group-hover:w-24" />

                    <span className="text-sm font-medium text-slate-500">
                      Moonstone Freight
                    </span>
                  </div>

                  <button className="group/btn flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500">
                    <ArrowRight
                      size={18}
                      className="text-[#081120] transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-white"
                    />
                  </button>
                </div>

                {/* HOVER BORDER */}
                <div className="absolute inset-0 rounded-[40px] border border-transparent transition-all duration-500 group-hover:border-cyan-200" />
              </div>
            );
          })}
        </div>

        {/* BOTTOM HIGHLIGHT */}
        <div className="relative mt-24 overflow-hidden rounded-[42px] bg-gradient-to-r from-[#081120] to-[#10233f] p-10 md:p-14 shadow-[0_25px_80px_rgba(15,23,42,0.16)]">
          {/* GLOW */}
          <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-red-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* TEXT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
                Modern Logistics Strategy
              </div>

              <h3 className="mt-7 text-4xl md:text-5xl font-medium leading-[1.08] tracking-[-2px] text-white">
                Smart Operations With Reliable Results
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
                Our operational approach focuses on
                transparency, innovation, and efficiency —
                helping businesses move shipments faster
                while maintaining reliability and customer
                satisfaction.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[28px] border border-white/10 bg-white/10 px-8 py-7 text-center backdrop-blur-xl">
                <h4 className="text-4xl font-medium tracking-[-2px] text-white">
                  24/7
                </h4>

                <p className="mt-2 text-sm text-slate-300">
                  Support
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/10 px-8 py-7 text-center backdrop-blur-xl">
                <h4 className="text-4xl font-medium tracking-[-2px] text-white">
                  100%
                </h4>

                <p className="mt-2 text-sm text-slate-300">
                  Reliable
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/10 px-8 py-7 text-center backdrop-blur-xl">
                <h4 className="text-4xl font-medium tracking-[-2px] text-white">
                  Fast
                </h4>

                <p className="mt-2 text-sm text-slate-300">
                  Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}