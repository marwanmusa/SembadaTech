import { DraftingCompass, Layers3, Ruler, Shield } from "lucide-react";

const services = [
  {
    title: "Structural Steel Detailing",
    description:
      "Member detailing, connection intent coordination, and fabrication-ready drawing sets for complex steel packages.",
    icon: DraftingCompass,
  },
  {
    title: "Tekla 3D Modeling",
    description:
      "High-fidelity Tekla models for clash-aware coordination, sequencing insights, and smooth production handoff.",
    icon: Layers3,
  },
  {
    title: "AISC-Compliant Shop Drawings",
    description:
      "Clear, standards-aligned shop tickets and erection plans built for review speed and shop floor confidence.",
    icon: Shield,
  },
  {
    title: "Material & Bolt Takeoffs",
    description:
      "Reliable quantity outputs to support procurement planning, bid accuracy, and downstream cost control.",
    icon: Ruler,
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-slate-800 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Core Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Detail Accuracy That Supports Shop Productivity
          </h2>
          <p className="mt-4 text-slate-300">
            Our production process is tuned for US fabrication timelines, combining
            practical constructability with strict quality gates.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-xl border border-slate-800 bg-slate-800/70 p-6"
                aria-label={service.title}
              >
                <Icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
