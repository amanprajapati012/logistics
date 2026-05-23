import { notFound } from "next/navigation";
import { servicePageMap } from "@/src/lib/servicePages";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = servicePageMap[slug];

  if (!page) return notFound();

  const Hero = page.Hero;
  const Feature = page.Feature;
  const Overview = page.Overview;

  return (
    <main>
      <Hero />
      <Feature />
      <Overview />
    </main>
  );
}