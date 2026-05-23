"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TruckLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-white via-slate-50 to-white">

      {/* CENTER WRAPPER */}
      <div className="relative flex flex-col items-center justify-center">

        {/* OUTER GLOW */}
        <div className="absolute h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>

        {/* ORBIT RINGS */}
        <div className="absolute h-36 w-36 rounded-full border border-cyan-200"></div>

        <div className="absolute h-36 w-36 rounded-full border-t-2 border-cyan-500 animate-spin"></div>

        {/* SMALL DOT ORBIT */}
        <div className="absolute h-52 w-52 rounded-full border border-slate-200 opacity-40 animate-spin [animation-duration:6s]"></div>

        {/* CENTER LOGO CARD */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden">

          {/* soft shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-50 to-transparent opacity-60 animate-pulse"></div>

          <Image
            src="/logo1.png"
            alt="Moonstone Freight"
            width={90}
            height={90}
            className="object-contain z-10"
            priority
          />
        </div>

        {/* BRAND TEXT */}
        <p className="mt-7 text-sm font-semibold tracking-[2px] text-slate-600 uppercase">
          Moonstone Freight
        </p>

        <p className="mt-2 text-xs text-slate-400">
          Smart Logistics Loading...
        </p>

        {/* DOT ANIMATION */}
        <div className="mt-4 flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-500 [animation-delay:-0.3s]"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-500 [animation-delay:-0.15s]"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-500"></span>
        </div>

      </div>
    </div>
  );
}