"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  Sparkles,
  ImageIcon,
  FileText,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },

  { name: "About Us", href: "/aboutus" },

  { name: "Services", href: "/services" },

  {
    name: "Insights",
    href: "/insights",
    dropdown: [
      {
        name: "Fleet Gallery",
        href: "/fleet-gallery",
        icon: ImageIcon,
      },

      {
        name: "Features",
        href: "/features",
        icon: Sparkles,
      },

      {
        name: "Free Quote",
        href: "/quote",
        icon: FileText,
      },
    ],
  },

  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [insightOpen, setInsightOpen] =
    useState(false);

  // Helper function to close menu and dropdown on link click
  const handleMobileClick = () => {
    setMobileMenu(false);
    setInsightOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* TOP STRIP */}
      <div className="hidden border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl lg:block">
        <div className="mx-auto flex h-[46px] max-w-7xl items-center justify-between px-6">
          {/* LEFT */}
          <div className="flex items-center gap-7 text-sm text-slate-600">
            <a
              href="mailto:info@moonstone-freight.com"
              className="flex items-center gap-2 transition hover:text-cyan-600"
            >
              <Mail size={15} />

              info@moonstone-freight.com
            </a>

            <a
              href="tel:+18172104500"
              className="flex items-center gap-2 transition hover:text-cyan-600"
            >
              <Phone size={15} />

              +1 (817) 210-4500
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />

            Smart Freight & Logistics Solutions
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="border-b border-white/40 bg-[#F4F7FB]/85 backdrop-blur-2xl shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex h-[88px] items-center justify-between">
            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center"
            >
              <div className="relative h-[58px] w-[190px] transition duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/logo1.png"
                  alt="Moonstone Freight"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link, index) => {
                if (link.dropdown) {
                  return (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <button className="flex items-center gap-1 text-[15px] font-medium text-[#081120] transition hover:text-cyan-600">
                        {link.name}

                        <ChevronDown
                          size={16}
                          className="transition duration-300 group-hover:rotate-180"
                        />
                      </button>

                      {/* DROPDOWN */}
                      <div className="invisible absolute left-0 top-[48px] translate-y-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="min-w-[280px] overflow-hidden rounded-[28px] border border-slate-200 bg-white/95 p-3 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
                          {link.dropdown.map(
                            (item, idx) => {
                              const Icon =
                                item.icon;

                              return (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 hover:bg-cyan-50"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 transition-all duration-300 group-hover/item:bg-cyan-500">
                                      <Icon
                                        size={20}
                                        className="text-cyan-700 group-hover/item:text-white"
                                      />
                                    </div>

                                    <div>
                                      <h4 className="text-sm font-semibold text-[#081120]">
                                        {
                                          item.name
                                        }
                                      </h4>

                                      <p className="mt-1 text-xs text-slate-500">
                                        Explore
                                        details
                                      </p>
                                    </div>
                                  </div>

                                  <ArrowRight
                                    size={17}
                                    className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                                  />
                                </Link>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="group relative text-[15px] font-medium text-[#081120] transition hover:text-cyan-600"
                  >
                    {link.name}

                    <span className="absolute -bottom-[8px] left-0 h-[2px] w-0 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              {/* PHONE */}
              <a
                href="tel:+18172104500"
                className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                  <Phone
                    size={18}
                    className="text-cyan-700"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Call Anytime
                  </p>

                  <h4 className="text-sm font-semibold text-[#081120]">
                    817-210-4500
                  </h4>
                </div>
              </a>

              {/* BUTTON */}
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2 rounded-full bg-[#081120] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:text-black shadow-[0_12px_30px_rgba(8,17,32,0.12)]"
              >
                Request Quote

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#081120] shadow-sm lg:hidden"
            >
              {mobileMenu ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileMenu
              ? "max-h-[900px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-200 bg-[#F4F7FB] px-6 py-6">
            <div className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={handleMobileClick}
                className="text-[16px] font-medium text-[#081120]"
              >
                Home
              </Link>

              <Link
                href="/aboutus"
                onClick={handleMobileClick}
                className="text-[16px] font-medium text-[#081120]"
              >
                About Us
              </Link>

              <Link
                href="/services"
                onClick={handleMobileClick}
                className="text-[16px] font-medium text-[#081120]"
              >
                Services
              </Link>

              {/* INSIGHTS */}
              <div>
                <button
                  onClick={() =>
                    setInsightOpen(!insightOpen)
                  }
                  className="flex w-full items-center justify-between text-[16px] font-medium text-[#081120]"
                >
                  Insights

                  <ChevronDown
                    size={18}
                    className={`transition duration-300 ${
                      insightOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    insightOpen
                      ? "mt-4 max-h-[300px]"
                      : "max-h-0"
                  }`}
                >
                  <div className="ml-3 flex flex-col gap-4 border-l border-cyan-200 pl-5">
                    <Link
                      href="/fleet-gallery"
                      onClick={handleMobileClick}
                      className="text-slate-600 transition hover:text-cyan-600"
                    >
                      Fleet Gallery
                    </Link>

                    <Link
                      href="/features"
                      onClick={handleMobileClick}
                      className="text-slate-600 transition hover:text-cyan-600"
                    >
                      Features
                    </Link>

                    <Link
                      href="/quote"
                      onClick={handleMobileClick}
                      className="text-slate-600 transition hover:text-cyan-600"
                    >
                      Free Quote
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={handleMobileClick}
                className="text-[16px] font-medium text-[#081120]"
              >
                Contact
              </Link>

              {/* CONTACT BOX */}
              <div className="mt-4 rounded-[28px] border border-white bg-white p-5 shadow-[0_15px_40px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:info@moonstone-freight.com"
                    onClick={handleMobileClick}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <Mail size={17} />

                    info@moonstone-freight.com
                  </a>

                  <a
                    href="tel:+18172104500"
                    onClick={handleMobileClick}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <Phone size={17} />

                    +1 (817) 210-4500
                  </a>

                  <Link
                    href="/quote"
                    onClick={handleMobileClick}
                    className="mt-2 rounded-full bg-[#081120] py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:text-black"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}