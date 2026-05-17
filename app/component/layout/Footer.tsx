"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#F4F7FB] text-[#081120] overflow-hidden border-t border-slate-200">

      {/* SOFT BACKGROUND BLUR */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-300/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COMPANY */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Moonstone <span className="text-cyan-600">Freight</span>
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed text-[15px]">
              Reliable logistics and freight solutions across the USA.
              Safe, fast and modern transportation services for your business.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-7">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-cyan-500 hover:text-white transition"
                >
                  <Icon size={17} />
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                  <MapPin className="text-cyan-600" size={18} />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  2555 114TH Street<br />
                  Grand Prairie, TX 75050
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                  <Phone className="text-cyan-600" size={18} />
                </div>
                <a href="tel:8172104500" className="text-slate-600 hover:text-cyan-600 transition">
                  817-210-4500
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                  <Mail className="text-cyan-600" size={18} />
                </div>
                <a href="mailto:info@moonstone-freight.com" className="text-slate-600 hover:text-cyan-600 transition break-all">
                  info@moonstone-freight.com
                </a>
              </div>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Services
            </h3>

            <div className="space-y-3">
              {["Dry Van", "Reefer", "Box Truck", "Liftgate Service"].map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="group flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition"
                >
                  <ArrowRight
                    size={15}
                    className="text-cyan-500 group-hover:translate-x-1 transition"
                  />
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">
              {["About Us", "Contact Us", "Our Services", "Terms", "Support"].map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="group flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition"
                >
                  <ArrowRight
                    size={15}
                    className="text-cyan-500 group-hover:translate-x-1 transition"
                  />
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-200 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Moonstone Freight. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm text-center md:text-right">
            Built with modern logistics UI design
          </p>

        </div>

      </div>
    </footer>
  );
}