const projects = [
  {
    name: "Midwest Logistics Expansion",
    type: "Distribution Facility",
    scope: "480 tons of structural steel, stairs, and platforms",
  },
  {
    name: "Houston Process Plant Addition",
    type: "Industrial Retrofit",
    scope: "Tie-in detailing with phased fabrication and erection planning",
  },
  {
    name: "Phoenix Data Infrastructure Build",
    type: "Mission-Critical Facility",
    scope: "Fast-turn drawing packages for coordinated steel framing zones",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="section-shell">
        <p className="section-kicker">Portfolio</p>
        <h2 className="section-heading mt-3">Representative work for demanding project teams.</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="panel overflow-hidden">
              <div className="h-48 bg-[linear-gradient(135deg,rgba(26,54,93,0.95),rgba(36,52,71,0.8)),radial-gradient(circle_at_top_left,rgba(237,137,54,0.45),transparent_36%)]" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.type}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-base leading-7 text-slate-200">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
