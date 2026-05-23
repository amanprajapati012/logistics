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
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-red-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP */}
        <div className="mx-auto max-w-3xl text-center">
          {/* TAG */}
          <div className="inline-flex items-center rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
            Our Services
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-2px] leading-[1.1] text-[#081120]">
            Explore Our Services
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Reliable freight and logistics solutions designed to deliver your
            shipments safely, efficiently, and on time.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                    className="h-[270px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/70 via-transparent to-transparent" />

                  {/* ICON */}
                  <div
                    className={`absolute bottom-5 left-5 flex h-18 w-18 items-center justify-center rounded-[24px] bg-gradient-to-br ${service.iconBg} shadow-[0_15px_35px_rgba(15,23,42,0.18)]`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  {/* SUBTITLE */}
                  <p className="text-sm font-medium uppercase tracking-[2px] text-slate-500">
                    {service.subtitle}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-1px] text-[#081120]">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-[16px] leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-8 flex items-center justify-between">
                    {/* LINE */}
                    <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-500 to-red-500 transition-all duration-500 group-hover:w-28" />

                    {/* BUTTON */}
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
