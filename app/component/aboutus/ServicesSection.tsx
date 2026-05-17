"use client";

import {
  Truck,
  Wallet,
  Route,
  BarChart3,
  PackageCheck,
  Warehouse,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Manage Transportation",
    description:
      "Our in-house TMS allows customers to take advantage of reliable capacity, efficiency, and connectivity that Moonstone Freight INC. has been nationally recognized for.",
    icon: Truck,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    glow: "bg-cyan-400/20",
    border: "border-cyan-100",
  },

  {
    id: "02",
    title: "Reduce Costs",
    description:
      "Take control of your budget and save with access to competitive rates, advanced cost analysis, and transparent processes. Get a free freight analysis to see how much you can save.",
    icon: Wallet,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    glow: "bg-red-400/20",
    border: "border-red-100",
  },

  {
    id: "03",
    title: "Route Optimization",
    description:
      "Our advanced route optimization tools ensure that your shipments are delivered in the most efficient way, reducing transit time and fuel consumption.",
    icon: Route,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    glow: "bg-emerald-400/20",
    border: "border-emerald-100",
  },

  {
    id: "04",
    title: "Freight Analysis",
    description:
      "Receive a complete analysis of your freight to understand the most cost-effective shipping methods, with access to competitive rates and performance metrics.",
    icon: BarChart3,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    glow: "bg-orange-400/20",
    border: "border-orange-100",
  },

  {
    id: "05",
    title: "Full Truckload",
    description:
      "Whether it’s a short-haul or long-haul, our full truckload services ensure your goods are delivered on time and in full across the country.",
    icon: PackageCheck,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    glow: "bg-violet-400/20",
    border: "border-violet-100",
  },

  {
    id: "06",
    title: "Warehousing Solutions",
    description:
      "We offer state-of-the-art warehousing facilities with complete inventory management services to ensure that your goods are safely stored and efficiently distributed.",
    icon: Warehouse,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
    glow: "bg-sky-400/20",
    border: "border-sky-100",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-red-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
            Our Services
          </div>

          <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-[-2px] text-[#081120]">
            What We Offer
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-slate-600">
            We deliver reliable freight and logistics
            solutions designed to improve operational
            efficiency, reduce transportation costs, and
            streamline your entire supply chain.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-[38px] border ${service.border} bg-white/85 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]`}
              >
                {/* GLOW */}
                <div
                  className={`absolute -top-10 -right-10 h-40 w-40 rounded-full ${service.glow} blur-3xl opacity-70`}
                />

                {/* NUMBER */}
                <div className="absolute right-7 top-7 text-7xl font-semibold tracking-[-5px] text-slate-100">
                  {service.id}
                </div>

                {/* ICON */}
                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-[26px] ${service.iconBg} transition-all duration-500 group-hover:scale-110`}
                >
                  <Icon
                    size={38}
                    className={service.iconColor}
                  />
                </div>

                {/* CONTENT */}
                <div className="relative mt-10">
                  <h3 className="text-3xl font-medium leading-tight tracking-[-1px] text-[#081120]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="relative mt-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan-500 to-red-500 transition-all duration-500 group-hover:w-24" />

                    <span className="text-sm font-medium text-slate-500">
                      Logistics Service
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
                <div className="absolute inset-0 rounded-[38px] border border-transparent transition-all duration-500 group-hover:border-cyan-200" />
              </div>
            );
          })}
        </div>

        {/* BOTTOM HIGHLIGHT */}
       {/* BOTTOM HIGHLIGHT */}
<div className="relative mt-24 overflow-hidden rounded-[42px] bg-gradient-to-br from-[#081120] via-[#10233f] to-[#081120] p-10 md:p-14 shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
  {/* GLOW */}
  <div className="absolute left-[-80px] top-[-80px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

  <div className="absolute bottom-[-80px] right-[-80px] h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />

  {/* GRID */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

  <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
    {/* LEFT */}
    <div>
      <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
        Smart Freight Solutions
      </div>

      <h3 className="mt-7 text-4xl md:text-5xl font-medium leading-[1.08] tracking-[-2px] text-white">
        Reliable Logistics Services For Modern
        Businesses
      </h3>

      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
        Our transportation and freight solutions
        are designed to simplify operations,
        improve delivery performance, and provide
        businesses with complete visibility across
        the supply chain.
      </p>
    </div>

    {/* RIGHT STATS */}
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-1">
      {/* CARD */}
      <div className="rounded-[28px] border border-white/10 bg-white/10 px-8 py-7 text-center backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15">
          <Truck
            size={30}
            className="text-cyan-300"
          />
        </div>

        <h4 className="mt-5 text-4xl font-medium tracking-[-2px] text-white">
          24/7
        </h4>

        <p className="mt-2 text-sm text-slate-300">
          Support
        </p>
      </div>

      {/* CARD */}
      <div className="rounded-[28px] border border-white/10 bg-white/10 px-8 py-7 text-center backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15">
          <Route
            size={30}
            className="text-red-300"
          />
        </div>

        <h4 className="mt-5 text-4xl font-medium tracking-[-2px] text-white">
          Fast
        </h4>

        <p className="mt-2 text-sm text-slate-300">
          Delivery
        </p>
      </div>

      {/* CARD */}
      <div className="rounded-[28px] border border-white/10 bg-white/10 px-8 py-7 text-center backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15">
          <PackageCheck
            size={30}
            className="text-emerald-300"
          />
        </div>

        <h4 className="mt-5 text-4xl font-medium tracking-[-2px] text-white">
          Secure
        </h4>

        <p className="mt-2 text-sm text-slate-300">
          Handling
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}