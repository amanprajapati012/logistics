"use client";

import Image from "next/image";
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
    <section className="bg-[#F4F7FB]">

      {/* ================= TOP IMAGE HERO ================= */}
      <div className="relative h-[55vh] w-full overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1920&auto=format&fit=crop"
          alt="Logistics Quote Banner"
          fill
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-6">

            <h1 className="text-4xl md:text-6xl font-bold">
              Request A Free Quote
            </h1>

            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Fast, secure and reliable logistics solutions tailored for your business needs.
            </p>

          </div>
        </div>

      </div>

      {/* ================= FORM SECTION ================= */}
      <section className="relative overflow-hidden py-24 lg:py-32">

        {/* SOFT BACKGROUND EFFECTS */}
        <div className="absolute top-[-120px] left-[-120px] h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-red-500/10 blur-3xl" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* ================= LEFT CONTENT ================= */}
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
                Get a free quote today! Our team is ready to assist you with all your needs.
                We offer reliable and efficient services to ensure your satisfaction.
              </p>

              {/* CALL BOX */}
              <div className="mt-10 flex items-center gap-5 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">

                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                  <PhoneCall size={34} className="text-white" />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-500">
                    Call for any query!
                  </p>

                  <a
                    href="tel:+18172104500"
                    className="mt-2 block text-3xl font-semibold text-[#081120] hover:text-red-500 transition"
                  >
                    817-210-4500
                  </a>
                </div>

              </div>
            </div>

            {/* ================= RIGHT FORM ================= */}
            <div className="relative">

              {/* GLOW */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[38px] border border-white/70 bg-white/80 p-8 md:p-10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.08)]">

                {/* HEADER */}
                <div className="mb-8 flex items-center justify-between">

                  <div>
                    <h3 className="text-3xl font-semibold text-[#081120]">
                      Quick Quote
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Fill the form and we will contact you shortly.
                    </p>
                  </div>

                  <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 lg:flex">
                    <Truck size={30} className="text-white" />
                  </div>

                </div>

                {/* FORM */}
                <form className="space-y-6">

                  {/* NAME + EMAIL */}
                  <div className="grid gap-6 md:grid-cols-2">

                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-500" size={18} />
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="h-16 w-full rounded-2xl border border-slate-200 pl-14 outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-sky-500" size={18} />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="h-16 w-full rounded-2xl border border-slate-200 pl-14 outline-none focus:border-cyan-400"
                      />
                    </div>

                  </div>

                  {/* PHONE + SERVICE */}
                  <div className="grid gap-6 md:grid-cols-2">

                    <div className="relative">
                      <PhoneCall className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-500" size={18} />
                      <input
                        type="text"
                        placeholder="Your Mobile"
                        className="h-16 w-full rounded-2xl border border-slate-200 pl-14 outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="relative">
                      <Truck className="absolute left-5 top-1/2 -translate-y-1/2 text-sky-500" size={18} />
                      <select className="h-16 w-full rounded-2xl border border-slate-200 pl-14 outline-none focus:border-cyan-400">
                        <option>Select Service</option>
                        <option>Dry Van</option>
                        <option>Reefer</option>
                        <option>Flatbed</option>
                      </select>
                    </div>

                  </div>

                  {/* MESSAGE */}
                  <div className="relative">
                    <FileText className="absolute left-5 top-6 text-cyan-500" size={18} />
                    <textarea
                      rows={5}
                      placeholder="Special Note"
                      className="w-full rounded-3xl border border-slate-200 pl-14 pt-5 outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* BUTTON (MATCH HEADER STYLE) */}
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#081120] py-5 text-white font-semibold hover:bg-cyan-500 hover:text-black transition flex items-center justify-center gap-2"
                  >
                    Submit Request
                    <ArrowRight size={18} />
                  </button>

                </form>
              </div>

            </div>
          </div>

        </div>
      </section>

    </section>
  );
}