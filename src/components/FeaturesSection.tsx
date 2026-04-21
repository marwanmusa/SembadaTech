import { Cuboid, HardHat, ScrollText, Waypoints } from "lucide-react";

const features = [
  {
    title: "Shop Drawings",
    description:
      "Clear member-level detailing packages with dimensions, marks, and fabrication notes aligned to production flow.",
    icon: ScrollText,
  },
  {
    title: "Erection Plans",
    description:
      "Field-oriented sequencing sheets that help installers, supers, and foremen coordinate steel placement with less friction.",
    icon: HardHat,
  },
  {
    title: "BIM Coordination",
    description:
      "Model-based coordination for clash detection, revision tracking, and cleaner collaboration across trades.",
    icon: Waypoints,
  },
  {
    title: "3D Modeling",
    description:
      "Robust 3D structural models built to improve visualization, approval speed, and downstream constructability.",
    icon: Cuboid,
  },
];

export default function FeaturesSection() {
  const textSectionHeading = "Detailing packages built for the shop, the trailer, and the field.";
  const textBody = `Every scope is structured to support practical fabrication workflows and fast field decision-making,
                    especially for teams reviewing documents on tablets or laptops at active job sites.`;
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="section-shell">
        <p className="section-kicker">Core Services</p>
        <h2 className="section-heading mt-3">
          {textSectionHeading}
        </h2>
        <p className="body-copy mt-4 max-w-3xl">
          {textBody}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="panel h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/14 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-200">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
