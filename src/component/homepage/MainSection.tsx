"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Globe2,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function MainSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-red-500/10 blur-3xl" />

      {/* GRID LINES */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative animate-[fadeLeft_1s_ease]">
            {/* MAIN IMAGE */}
            <div className="group relative overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
                alt="Logistics"
                width={800}
                height={850}
                unoptimized
                className="h-[620px] w-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/50 via-transparent to-transparent" />

              {/* SHINE EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full" />
            </div>

            {/* EXPERIENCE CARD */}
            <div className="absolute bottom-6 left-6 rounded-[28px] border border-white/30 bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-7 py-5 animate-[float_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30">
                  <Truck
                    size={30}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-[#081120]">
                    15+
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Years Of Experience
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL IMAGE */}
            <div className="absolute -right-8 top-10 hidden overflow-hidden rounded-[28px] border-[8px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] md:block animate-[float_5s_ease-in-out_infinite]">
              <Image
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1200&auto=format&fit=crop"
                alt="Truck"
                width={300}
                height={240}
                unoptimized
                className="h-[220px] w-[270px] object-cover transition-all duration-700 hover:scale-110"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative animate-[fadeRight_1s_ease]">
            {/* SUBTITLE */}
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white/80 backdrop-blur-xl px-5 py-2 text-sm font-medium text-cyan-700 shadow-sm">
              About Moonstone
            </div>

            {/* TITLE */}
            <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-2px] text-[#081120]">
              Quick Transport and Logistics Solutions
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
              Moonstone Freight INC. specializes in
              providing rapid and reliable transport and
              logistics solutions globally. We ensure your
              shipments reach their destinations promptly
              and securely, with a commitment to
              excellence in service.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              {/* FEATURE */}
              <div className="group rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
                <div className="flex gap-5">
                  {/* ICON */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 transition-all duration-500 group-hover:bg-cyan-500">
                    <Globe2
                      size={30}
                      className="text-cyan-700 group-hover:text-white"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#081120]">
                      Global Coverage
                    </h3>

                    <p className="mt-2 leading-relaxed text-slate-600">
                      Our extensive network enables us to
                      offer comprehensive coverage across
                      the globe, ensuring your goods reach
                      any destination seamlessly.
                    </p>
                  </div>
                </div>
              </div>

              {/* FEATURE */}
              <div className="group rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
                <div className="flex gap-5">
                  {/* ICON */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-100 transition-all duration-500 group-hover:bg-red-600">
                    <Truck
                      size={30}
                      className="text-red-600 group-hover:text-white"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#081120]">
                      On Time Delivery
                    </h3>

                    <p className="mt-2 leading-relaxed text-slate-600">
                      We prioritize punctuality,
                      delivering your shipments on time to
                      maintain the flow of your business
                      operations efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-10 flex items-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#081120] px-8 py-4 font-medium text-white transition-all duration-500 hover:bg-cyan-500 hover:text-black shadow-[0_12px_35px_rgba(8,17,32,0.18)]"
              >
                Explore More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}