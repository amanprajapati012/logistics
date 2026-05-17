"use client";

import Image from "next/image";

import {
  Globe2,
  Target,
  Truck,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] pb-24 lg:pb-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-red-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* TOP HERO IMAGE */}
      <div className="relative h-[520px] md:h-[650px] lg:h-[780px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1800&auto=format&fit=crop"
          alt="Moonstone Freight"
          fill
          priority
          unoptimized
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081120]/85 via-[#081120]/50 to-[#081120]/20" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            <div className="max-w-3xl pt-20 lg:pt-28">
              {/* TAG */}
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
                About Us
              </div>

              {/* TITLE */}
              <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-3px] text-white">
                Who We Are
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-200">
                Moonstone Freight INC. is a leading provider
                of logistics and transportation solutions,
                committed to delivering excellence in every
                shipment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* ABOUT CONTENT */}
        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* SECTION TAG */}
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
              About Moonstone Freight
            </div>

            {/* TITLE */}
            <h2 className="mt-7 text-4xl md:text-5xl font-semibold leading-[1.08] tracking-[-2px] text-[#081120]">
              Trusted Logistics Solutions Across The Globe
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 text-lg leading-relaxed text-slate-600">
              Moonstone Freight INC. is a leading provider
              of logistics and transportation solutions,
              committed to delivering excellence in every
              shipment. Our extensive network,
              state-of-the-art technology, and dedicated
              team ensure that your goods are transported
              efficiently, safely, and on time.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {/* FEATURE */}
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
                  <Globe2
                    size={30}
                    className="text-cyan-700"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#081120]">
                  Global Network
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  Reliable transportation services across
                  multiple destinations worldwide.
                </p>
              </div>

              {/* FEATURE */}
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
                  <ShieldCheck
                    size={30}
                    className="text-red-600"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#081120]">
                  Safe Delivery
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  Secure shipment handling with maximum
                  safety and care for your goods.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-[36px] shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1400&auto=format&fit=crop"
                alt="Truck"
                width={700}
                height={850}
                unoptimized
                className="h-[620px] w-full object-cover"
              />
            </div>

            {/* FLOATING IMAGE */}
            <div className="absolute -left-12 bottom-10 hidden overflow-hidden rounded-[30px] border-[8px] border-white shadow-[0_20px_60px_rgba(15,23,42,0.15)] md:block">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                alt="Logistics"
                width={280}
                height={220}
                unoptimized
                className="h-[220px] w-[280px] object-cover"
              />
            </div>

            {/* EXPERIENCE CARD */}
            <div className="absolute top-8 right-8 rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-400">
                  <Truck
                    size={30}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-[#081120]">
                    15+
                  </h3>

                  <p className="text-slate-500">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORY + MISSION */}
        <div className="mt-28 grid gap-8 lg:grid-cols-2">
          {/* STORY */}
          <div className="rounded-[36px] border border-white/70 bg-white/80 p-8 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-cyan-100">
              <Clock3
                size={34}
                className="text-cyan-700"
              />
            </div>

            <h3 className="mt-7 text-3xl font-semibold tracking-[-1px] text-[#081120]">
              Our Story
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Founded with a vision to revolutionize the
              logistics industry, Moonstone Freight INC.
              has grown from a small startup into a trusted
              global logistics partner. Our success is
              built on our unwavering commitment to
              customer satisfaction and our ability to
              adapt to the ever-changing demands of the
              industry.
            </p>
          </div>

          {/* MISSION */}
          <div className="rounded-[36px] border border-white/70 bg-white/80 p-8 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-red-100">
              <Target
                size={34}
                className="text-red-600"
              />
            </div>

            <h3 className="mt-7 text-3xl font-semibold tracking-[-1px] text-[#081120]">
              Our Mission
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Our mission is to provide innovative and
              reliable logistics solutions that exceed our
              customers' expectations. We strive to be a
              trusted partner in their success by offering
              tailored services that deliver value and
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}