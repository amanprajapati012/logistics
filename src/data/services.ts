import {
  Truck,
  Snowflake,
  Package,
  Boxes,
  ShieldCheck,
  Globe2,
  LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  id: number;
  slug: string;
  image: string;
  subtitle: string;
  title: string;
  icon: LucideIcon;
  description: string;
  iconBg: string;
};

export const services: ServiceItem[] = [
  {
    id: 1,
    slug: "dry-van",
    image:
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Dry Van Service",
    title: "Dry Van",
    icon: Truck,
    description:
      "Secure enclosed transportation for general freight across nationwide routes.",
    iconBg: "from-red-500 to-red-600",
  },
  {
    id: 2,
    slug: "reefer",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Reefer Service",
    title: "Reefer",
    icon: Snowflake,
    description:
      "Temperature-controlled logistics for perishable goods.",
    iconBg: "from-cyan-500 to-cyan-600",
  },
  {
    id: 3,
    slug: "box-truck",
    image:
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Box Truck Service",
    title: "Box Truck",
    icon: Package,
    description:
      "Local delivery and small freight transportation solutions.",
    iconBg: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    slug: "liftgate",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Liftgate Service",
    title: "Liftgate Services",
    icon: Boxes,
    description:
      "Safe loading/unloading for heavy cargo shipments.",
    iconBg: "from-violet-500 to-fuchsia-600",
  },
  {
    id: 5,
    slug: "safe-freight",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Secure Freight",
    title: "Safe Freight",
    icon: ShieldCheck,
    description:
      "High-security freight handling with monitoring systems.",
    iconBg: "from-emerald-500 to-green-600",
  },
  {
    id: 6,
    slug: "global-freight",
    image:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Global Logistics",
    title: "Global Freight",
    icon: Globe2,
    description:
      "Worldwide cargo movement with cross-border logistics.",
    iconBg: "from-sky-500 to-blue-600",
  },
];