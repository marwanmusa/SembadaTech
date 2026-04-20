import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    name: "Midwest Distribution Center",
    scope: "420+ tons | Structural framing, mezzanine, stairs",
    result: "Issued for fabrication in 18 business days",
  },
  {
    name: "Texas Manufacturing Expansion",
    scope: "Complex bracing + retrofit package",
    result: "Reduced RFIs through model-first coordination",
  },
  {
    name: "West Coast Data Hall",
    scope: "High-density steel platform detailing",
    result: "Sequenced drawing packages for phased erection",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-b border-slate-800 bg-slate-950/40 px-6 py-16 sm:px-8 lg:px-12"
      aria-label="Project portfolio highlights"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
          Portfolio Highlights
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Representative Detailing Outcomes
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.scope}</p>
              <p className="mt-4 inline-flex items-center text-sm font-medium text-blue-300">
                <CheckCircle2 className="mr-2 h-4 w-4 text-amber-500" aria-hidden="true" />
                {project.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
