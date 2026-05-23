import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/src/component/layout/Header";
import Footer from "@/src/component/layout/Footer";
// import TruckLoader from "@/app/component/layout/TruckLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moonstone Freight",
  description: "Modern Logistics & Freight Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-black">

        {/* 🔥 GLOBAL LOADER (ALL PAGES) */}
        {/* <TruckLoader /> */}

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-1 pt-[88px] lg:pt-[124px]">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}