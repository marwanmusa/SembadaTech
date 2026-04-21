import { ArrowRight, BadgeCheck, Building2, ScanSearch } from "lucide-react";

const highlights = [
  "Fabricator-ready deliverables",
  "Tablet-friendly coordination flow",
  "Fast review cycles for US teams",
];

export default function HeroSection() {
  const textHeroKicker = "US Steel Detailing Delivery";
  const textHeroHeading = "Precision Steel Detailing. AISC Compliant. US Standards.";
  const textHeroBody = `Sembada supports fabricators, detailers, and general contractors with coordinated models, clear shop packages, and field-aware deliverables that reduce downstream rework.`;
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-hero-grid bg-[size:44px_44px] opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,32,0.92)_20%,rgba(26,54,93,0.72)_52%,rgba(15,23,32,0.82)_100%)]" />

      <div className="section-shell relative grid gap-10 py-14 md:py-20 xl:grid-cols-[1.1fr_0.9fr] xl:items-center xl:py-24">
        <div>
          <p className="section-kicker">{textHeroKicker}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-6xl">
            {textHeroHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {textHeroBody}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="button-primary"
            >
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="button-secondary"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="panel px-4 py-4">
                <BadgeCheck className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel relative overflow-hidden">
          <div
            className="min-h-[420px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(12, 20, 31, 0.3), rgba(12, 20, 31, 0.8)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80')",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="rounded-[24px] border border-white/10 bg-slate-950/85 p-5 backdrop-blur">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                <ScanSearch className="h-4 w-4 text-accent" />
                3D Structural Model Review
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Building2 className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-base leading-7 text-slate-200">Sequenced steel packages for fabrication and field erection.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-semibold text-white">24-hr</p>
                  <p className="mt-2 text-base leading-7 text-slate-200">
                    Typical response window for RFIs and revision alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
