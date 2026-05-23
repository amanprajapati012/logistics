"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Truck,
  Snowflake,
  Package,
  Boxes,
  ShieldCheck,
  Globe2,
} from "lucide-react";

const services = [
  {
    id: 1,
    slug: "dry-van",
    image:
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Dry Van Service",
    title: "Dry Van",
    icon: Truck,
    description:
      "Our dry van services provide secure and reliable transportation for your goods, ensuring timely delivery across all destinations.",
    iconBg: "from-red-500 to-red-600",
  },

  {
    id: 2,
    slug: "reefer",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Reefer",
    title: "Reefer",
    icon: Snowflake,
    description:
      "With our reefer transportation services, we ensure that temperature-sensitive goods reach their destinations in perfect condition.",
    iconBg: "from-cyan-500 to-cyan-600",
  },

  {
    id: 3,
    slug: "box-truck",
    image:
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Box Truck Service",
    title: "Box Truck",
    icon: Package,
    description:
      "Our box truck services offer efficient and secure transportation solutions for smaller loads or local deliveries, ensuring prompt service.",
    iconBg: "from-yellow-500 to-orange-500",
  },

  {
    id: 4,
    slug: "liftgate",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Liftgate Service",
    title: "Liftgate Services",
    icon: Boxes,
    description:
      "Our liftgate services offer safe loading and unloading of goods, ensuring convenience and security during logistics operations.",
    iconBg: "from-violet-500 to-fuchsia-600",
  },

  {
    id: 5,
    slug: "safe-freight",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Secure Logistics",
    title: "Safe Freight",
    icon: ShieldCheck,
    description:
      "We provide highly secure freight management solutions to ensure your shipments remain protected throughout the delivery process.",
    iconBg: "from-emerald-500 to-green-600",
  },

  {
    id: 6,
    slug: "global-freight",
    image:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Worldwide Coverage",
    title: "Global Freight",
    icon: Globe2,
    description:
      "Our worldwide logistics network helps businesses move cargo smoothly across international destinations with reliable support.",
    iconBg: "from-sky-500 to-blue-600",
  },
];
export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] pb-20 md:pb-24 lg:pb-32">
      {/* HERO SECTION */}
      <div className="relative min-h-[780px] sm:min-h-[820px] lg:min-h-[760px] overflow-hidden">
        {/* IMAGE */}
        <Image
          src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=2200&auto=format&fit=crop"
          alt="Moonstone Freight Services"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081120]/95 via-[#081120]/75 to-[#081120]/40" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[780px] sm:min-h-[820px] lg:min-h-[760px] items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl pt-32 sm:pt-36 lg:pt-24">
              {/* TAG */}
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
                Our Services
              </div>

              {/* TITLE */}
              <h1 className="mt-7 text-[52px] leading-[0.95] tracking-[-3px] text-white sm:text-6xl md:text-7xl lg:text-8xl font-semibold">
                Explore Our
                <br />
                Logistics
                <br />
                Solutions
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-2xl text-[19px] leading-relaxed text-slate-200 sm:text-xl">
                Reliable freight and transportation
                services designed to move your business
                forward with speed, safety, and
                efficiency.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-[58px] items-center justify-center rounded-full bg-cyan-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:bg-white"
                >
                  Get A Quote
                </Link>

                <Link
                  href="/aboutus"
                  className="inline-flex h-[58px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-[#081120]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING CARD */}
        <div className="absolute bottom-6 left-5 right-5 z-20 sm:left-auto sm:right-8 sm:w-fit">
          <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 sm:p-7 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-cyan-500 to-cyan-400">
                <Truck
                  size={30}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-3xl font-semibold tracking-[-2px] text-white sm:text-4xl">
                  24/7
                </h3>

                <p className="mt-1 text-sm text-slate-300 sm:text-base">
                  Logistics Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[45%] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-red-500/10 blur-3xl" />

      {/* SECTION GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto mt-20 max-w-3xl text-center md:mt-24">
          <div className="inline-flex items-center rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
            What We Offer
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-2px] text-[#081120] md:text-5xl lg:text-6xl">
            Freight Services Built For Modern Businesses
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Reliable freight and logistics solutions
            designed to deliver your shipments safely,
            efficiently, and on time.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-[34px] border border-white/80 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={500}
                    unoptimized
                    className="h-[240px] w-full object-cover transition-all duration-700 group-hover:scale-110 sm:h-[270px]"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/70 via-transparent to-transparent" />

                  {/* ICON */}
                  <div
                    className={`absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ${service.iconBg} shadow-[0_15px_35px_rgba(15,23,42,0.18)] sm:h-18 sm:w-18`}
                  >
                    <Icon
                      size={30}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-[2px] text-slate-500 sm:text-sm">
                    {service.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-1px] text-[#081120] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                    {service.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-500 to-red-500 transition-all duration-500 group-hover:w-28" />

                    <Link
                   href={`/services/${service.slug}`}
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-[#081120] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-500 hover:text-black sm:px-6"
                    >
                      Read More

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}