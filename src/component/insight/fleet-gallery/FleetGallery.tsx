import Image from "next/image";
import {
  Truck,
  Snowflake,
  Package,
  Boxes,
  ShieldCheck,
  Droplets,
  HardHat,
  Container,
  ArrowRight,
} from "lucide-react";

const fleet = [
  {
    title: "Dry Van Truck",
    desc: "Secure transport for general cargo with full protection from weather conditions.",
    icon: Truck,
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Refrigerated Truck",
    desc: "Temperature-controlled transport for food, medicine and perishable goods.",
    icon: Snowflake,
    img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Flatbed Truck",
    desc: "Ideal for oversized machinery and construction material transport.",
    icon: Package,
    img: "https://picsum.photos/seed/flatbed-truck/1600/900",
  },
  {
    title: "Heavy Haul Truck",
    desc: "Designed for extremely heavy industrial and oversized cargo loads.",
    icon: HardHat,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Tanker Truck",
    desc: "Safe transportation of liquids, oil, fuel and chemical materials.",
    icon: Droplets,
    img: "https://picsum.photos/seed/tanker-truck/1600/900",
  },
  {
    title: "Heavy-Duty Truck",
    desc: "Strong industrial transport for machinery and bulk cargo.",
    icon: Boxes,
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Oversize Load Truck",
    desc: "Expert handling of oversized and special cargo transportation.",
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Container Truck",
    desc: "Efficient container transport for long-distance logistics.",
    icon: Container,
    img: "https://picsum.photos/seed/container-truck/1600/900",
  },
  {
    title: "Liftgate Truck",
    desc: "Easy loading and unloading for heavy pallet shipments.",
    icon: Truck,
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function FleetGallery() {
  return (
    <div className="bg-[#F4F7FB] min-h-screen">

      {/* HERO */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
          alt="Fleet Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Our Logistics Fleet
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/80">
              Modern transport solutions for safe, fast and reliable cargo delivery.
            </p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {fleet.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.06)] hover:-translate-y-2 transition-all duration-500"
              >

                {/* IMAGE TOP (NO CROPPING ISSUE) */}
                <div className="relative h-[240px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-black/5">
                      <Icon size={18} className="text-gray-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* BUTTON (NOT BLUE) */}
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </button>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}