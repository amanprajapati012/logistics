import DryVanHeroSection from "@/src/component/services/dry-van/DryVanHeroSection";
import DryVanFeatureSection from "@/src/component/services/dry-van/DryVanFeaturesSection";
import DryVanOverviewSection from "@/src/component/services/dry-van/DryVanOverviewSection";

import ReeferHeroSection from "@/src/component/services/reefer/ReeferHeroSection";
import ReeferFeatureSection from "@/src/component/services/reefer/ReeferFeatureSection";
import ReeferOverviewSection from "@/src/component/services/reefer/ReeferOverviewSection";

import BoxTruckHeroSection from "@/src/component/services/box-truck/BoxTruckHeroSection";
import BoxTruckFeatureSection from "@/src/component/services/box-truck/BoxTruckFeaturesSection";
import BoxTruckOverviewSection from "@/src/component/services/box-truck/BoxTruckOverviewSection";

import LiftgateHeroSection from "@/src/component/services/liftageservices/LiftgateHeroSection";
import LiftgateFeatureSection from "@/src/component/services/liftageservices/LiftgateFeaturesSection";
import LiftgateOverviewSection from "@/src/component/services/liftageservices/LiftgateOverviewSection";

import SafeFreightHeroSection from "@/src/component/services/safe-freight/SafeFreightHeroSection";
import SafeFreightFeatureSection from "@/src/component/services/safe-freight/SafeFreightFeaturesSection";
import SafeFreightOverviewSection from "@/src/component/services/safe-freight/SafeFreightOverviewSection";

import GlobalFreightHeroSection from "@/src/component/services/global-freight/GlobalFreightHeroSection";
import GlobalFreightFeatureSection from "@/src/component/services/global-freight/GlobalFreightFeaturesSection";
import GlobalFreightOverviewSection from "@/src/component/services/global-freight/GlobalFreightOverviewSection";

// Better type (optional but recommended)
type ServicePageSections = {
  Hero: React.ComponentType;
  Feature: React.ComponentType;
  Overview: React.ComponentType;
};

export const servicePageMap: Record<string, ServicePageSections> = {
  "dry-van": {
    Hero: DryVanHeroSection,
    Feature: DryVanFeatureSection,
    Overview: DryVanOverviewSection,
  },

  reefer: {
    Hero: ReeferHeroSection,
    Feature: ReeferFeatureSection,
    Overview: ReeferOverviewSection,
  },

  "box-truck": {
    Hero: BoxTruckHeroSection,
    Feature: BoxTruckFeatureSection,
    Overview: BoxTruckOverviewSection,
  },

  liftgate: {
    Hero: LiftgateHeroSection,
    Feature: LiftgateFeatureSection,
    Overview: LiftgateOverviewSection,
  },

  "safe-freight": {
    Hero: SafeFreightHeroSection,
    Feature: SafeFreightFeatureSection,
    Overview: SafeFreightOverviewSection,
  },

  "global-freight": {
    Hero: GlobalFreightHeroSection,
    Feature: GlobalFreightFeatureSection,
    Overview: GlobalFreightOverviewSection,
  },
};