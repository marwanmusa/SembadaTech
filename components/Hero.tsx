import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Workflow } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "AISC-Aligned Standards",
  },
  {
    icon: Workflow,
    label: "Tekla-Driven Coordination",
  },
  {
    icon: Building2,
    label: "Fabricator-Ready Deliverables",
  },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-800"
      aria-label="Sembada landing hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.12),transparent_40%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="inline-flex w-fit items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
          Indonesia Team • US Market Focus
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Structural Steel Detailing Built for American Fabrication Workflows
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Sembada helps US contractors and fabricators accelerate production with
          accurate structural steel detailing, constructible Tekla 3D models, and
          AISC-compliant shop drawings.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Request a steel detailing consultation"
          >
            Request Consultation
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="View recent detailing project samples"
          >
            View Sample Projects
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Key differentiators">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="rounded-lg border border-slate-800 bg-slate-800/60 p-4"
              >
                <Icon className="h-5 w-5 text-amber-500" aria-hidden="true" />
                <p className="mt-3 text-sm font-medium text-slate-200">{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
