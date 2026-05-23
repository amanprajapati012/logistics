"use client";

import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Globe,
  Truck,
} from "lucide-react";

import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="bg-[#F4F7FB] min-h-screen">

      {/* ================= HERO ================= */}
      <div className="relative h-[55vh] w-full overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1920&auto=format&fit=crop"
          alt="Contact Logistics"
          fill
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">

            <p className="text-cyan-300 uppercase tracking-[4px] text-sm font-semibold">
              Get In Touch
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold">
              Contact Our Logistics Team
            </h1>

            <p className="mt-5 max-w-xl text-white/80 text-lg">
              Fast response, reliable support, and 24/7 assistance for your freight needs.
            </p>

          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">

        {/* ================= LEFT INFO ================= */}
        <div>

          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm text-cyan-700 font-semibold">
            <Truck size={18} />
            Logistics Support
          </div>

          <h2 className="mt-6 text-4xl font-bold text-[#081120]">
            We’re Always Ready To Help You
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Whether you need freight quotes, tracking, or support — our team is available 24/7 to assist your logistics needs.
          </p>

          {/* CONTACT CARDS */}
          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <Phone className="text-cyan-600" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-[#081120]">+1 817-210-4500</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <Mail className="text-cyan-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-[#081120]">info@logistics.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <MapPin className="text-cyan-600" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold text-[#081120]">
                  USA Freight Hub, New York
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <Clock className="text-cyan-600" />
              <div>
                <p className="text-sm text-gray-500">Working Hours</p>
                <p className="font-semibold text-[#081120]">
                  24/7 Support Available
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h3 className="text-3xl font-bold text-[#081120]">
                Send Message
              </h3>
              <p className="text-gray-500 mt-2">
                Fill form and we will contact you soon
              </p>
            </div>

            <Globe className="text-cyan-600" size={30} />

          </div>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#081120] text-white py-4 rounded-xl font-semibold hover:bg-cyan-500 hover:text-black transition"
            >
              Send Message <Send size={18} />
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}