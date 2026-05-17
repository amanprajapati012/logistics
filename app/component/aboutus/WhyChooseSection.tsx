"use client";

import Link from "next/link";

import {
  ShieldCheck,
  Users,
  BadgeDollarSign,
  MoveRight,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Decades of Experience",
    description:
      "With decades of experience and a proven track record, Moonstone Freight INC. has redefined logistics excellence without compromising quality.",
    icon: ShieldCheck,
    color: "from-cyan-500 to-cyan-400",
    bg: "bg-cyan-100",
    text: "text-cyan-700",
  },

  {
    id: 2,
    title: "Dedicated Experts",
    description:
      "Our team of dedicated experts can craft tailored logistics solutions to fit your business needs and maintain your bottom line.",
    icon: Users,
    color: "from-red-500 to-red-400",
    bg: "bg-red-100",
    text: "text-red-600",
  },

  {
    id: 3,
    title: "Get Quote",
    description:
      "Whether you’re looking to cut costs, optimize your supply chain, or streamline your transportation strategy, we’ll help get you there.",
    icon: BadgeDollarSign,
    color: "from-emerald-500 to-emerald-400",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
  },

  {
    id: 4,
    title: "Move Forward",
    description:
      "Improve visibility and integrate your supply chain from end to end with active load monitoring through our innovative software.",
    icon: MoveRight,
    color: "from-orange-500 to-orange-400",
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-red-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP CONTENT */}
        <div className="mx-auto max-w-3xl text-center">
          {/* TAG */}
          <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
            Why Choose Us
          </div>

          {/* TITLE */}
          <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-2px] text-[#081120]">
            Why Moonstone Freight INC.?
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-7 text-lg leading-relaxed text-slate-600">
            We provide dependable logistics and freight
            solutions with modern technology, experienced
            professionals, and a commitment to delivering
            excellence in every shipment.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-7 md:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
              >
                {/* GLOW */}
                <div className="absolute top-0 right-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* ICON */}
                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br ${item.color} shadow-[0_18px_40px_rgba(15,23,42,0.12)]`}
                >
                  <Icon
                    size={36}
                    className="text-white"
                  />
                </div>

                {/* TITLE */}
                <h3 className="relative mt-8 text-3xl font-semibold tracking-[-1px] text-[#081120]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative mt-5 text-lg leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {/* BOTTOM */}
                <div className="relative mt-8 flex items-center justify-between">
                  <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-500 to-red-500 transition-all duration-500 group-hover:w-28" />

                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#081120] transition-all duration-300 hover:text-cyan-600"
                  >
                    Learn More

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 rounded-[40px] border border-white/70 bg-white/80 p-10 md:p-14 text-center backdrop-blur-xl shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-[-1px] text-[#081120]">
            Trusted Freight & Logistics Partner
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Moonstone Freight INC. delivers reliable,
            secure, and efficient transportation services
            designed to help your business move forward
            with confidence and long-term success.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#081120] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:text-black shadow-[0_12px_30px_rgba(8,17,32,0.15)]"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-[#081120] transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}