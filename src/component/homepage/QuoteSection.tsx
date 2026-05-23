"use client";

import {
  PhoneCall,
  Mail,
  User,
  Truck,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-24 lg:py-32">
      {/* SOFT BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-red-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* TAG */}
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
              Get A Quote
            </div>

            {/* TITLE */}
            <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-2px] text-[#081120]">
              Request A Free Quote!
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
              Get a free quote today! Our team is ready to
              assist you with all your needs. We offer
              reliable and efficient services to ensure
              your satisfaction. Contact us now and
              experience our top-notch services.
            </p>

            {/* CALL BOX */}
            <div className="mt-10 flex items-center gap-5 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              {/* ICON */}
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-red-500 to-red-600 shadow-[0_15px_35px_rgba(239,68,68,0.28)]">
                <PhoneCall
                  size={34}
                  className="text-white"
                />
              </div>

              {/* TEXT */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-500">
                  Call for any query!
                </p>

                <a
                  href="tel:+18172104500"
                  className="mt-2 block text-3xl font-semibold tracking-[-1px] text-[#081120] transition hover:text-red-500"
                >
                  817-210-4500
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            {/* GLOW */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[38px] border border-white/70 bg-white/80 p-8 md:p-10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              {/* TOP BAR */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-1px] text-[#081120]">
                    Quick Quote
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Fill the form and our team will contact
                    you shortly.
                  </p>
                </div>

                <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-lg lg:flex">
                  <Truck
                    size={30}
                    className="text-white"
                  />
                </div>
              </div>

              {/* FORM */}
              <form className="space-y-6">
                {/* ROW */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* NAME */}
                  <div className="group relative">
                    <User
                      size={18}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-600"
                    />

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="h-16 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 text-[15px] text-[#081120] outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="group relative">
                    <Mail
                      size={18}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-600"
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="h-16 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 text-[15px] text-[#081120] outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                    />
                  </div>
                </div>

                {/* ROW */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* MOBILE */}
                  <div className="group relative">
                    <PhoneCall
                      size={18}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-600"
                    />

                    <input
                      type="text"
                      placeholder="Your Mobile"
                      className="h-16 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 text-[15px] text-[#081120] outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                    />
                  </div>

                  {/* SELECT */}
                  <div className="group relative">
                    <Truck
                      size={18}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select className="h-16 w-full appearance-none rounded-2xl border border-slate-200 bg-white pl-14 pr-5 text-[15px] text-[#081120] outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]">
                      <option>Select A Freight</option>

                      <option>Dry Van</option>

                      <option>Reefer</option>

                      <option>Box Truck</option>

                      <option>Liftgate Service</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="group relative">
                  <FileText
                    size={18}
                    className="absolute left-5 top-6 text-slate-400 transition group-focus-within:text-cyan-600"
                  />

                  <textarea
                    rows={5}
                    placeholder="Special Note"
                    className="w-full rounded-3xl border border-slate-200 bg-white pl-14 pr-5 pt-5 text-[15px] text-[#081120] outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-8 py-5 text-base font-semibold text-white shadow-[0_18px_35px_rgba(239,68,68,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(239,68,68,0.35)]"
                >
                  Submit Request

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}