"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Globe } from "lucide-react";

export default function FeatureBanner() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-sky-400/10 blur-3xl" />

      {/* HERO GRID */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* TAG */}
            <div className="inline-flex items-center rounded-full border border-cyan-100 bg-white px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
              Logistics Features
            </div>

            {/* TITLE */}
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-2px] text-[#081120] leading-[1.1]">
              Smarter Logistics <br />
              For A Faster World
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We deliver secure, fast, and reliable logistics solutions across the USA.
              Our modern fleet ensures your cargo reaches safely and on time.
            </p>

            {/* FEATURE LIST */}
            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Truck className="text-cyan-600" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#081120]">
                    Modern Fleet System
                  </h3>
                  <p className="text-sm text-slate-600">
                    Advanced trucks and tracking system for real-time logistics updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                  <ShieldCheck className="text-sky-600" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#081120]">
                    Safe & Secure Delivery
                  </h3>
                  <p className="text-sm text-slate-600">
                    We ensure maximum safety for all types of cargo during transport.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Globe className="text-cyan-600" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#081120]">
                    Nationwide Coverage
                  </h3>
                  <p className="text-sm text-slate-600">
                    Fast delivery network across all major USA locations.
                  </p>
                </div>
              </div>

            </div>

            {/* BUTTON (NOT BLUE, MATCH HEADER STYLE) */}
            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#081120] px-7 py-3 text-sm font-semibold text-white hover:bg-cyan-500 hover:text-black transition-all"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">

            <div className="relative h-[520px] w-full overflow-hidden rounded-[36px] shadow-2xl">

              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
                alt="Logistics Fleet"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

            {/* FLOAT CARD */}
            <div className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-2xl px-6 py-4 border border-slate-100">
              <p className="text-xs text-slate-500">Trusted Worldwide</p>
              <p className="text-lg font-semibold text-[#081120]">
                Premium Logistics Service
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}