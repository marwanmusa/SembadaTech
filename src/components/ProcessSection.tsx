const steps = [
  {
    index: "01",
    title: "Scope Review",
    description:
      "We review design drawings, architectural references, and schedule constraints before modeling begins.",
  },
  {
    index: "02",
    title: "Model + Coordination",
    description:
      "Members, connections, and interfaces are coordinated in 3D to catch friction before it reaches the field.",
  },
  {
    index: "03",
    title: "Issue for Approval",
    description:
      "Approval packages are structured for fast review by engineers, PMs, and fabricators.",
  },
  {
    index: "04",
    title: "Release to Fabrication",
    description:
      "Final shop and erection documents are delivered in a practical format that crews can act on immediately.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="border-y border-white/10 bg-navy/55 py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Execution Process</p>
            <h2 className="section-heading mt-3">A controlled workflow for reliable field fit.</h2>
          </div>
          <p className="body-copy max-w-2xl">
            The process is built for accountability: clear review gates, quick revision
            loops, and issue packages that work for office teams and on-site stakeholders.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.index} className="panel p-6">
              <p className="text-sm font-semibold tracking-[0.16em] text-accent">{step.index}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-200">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
