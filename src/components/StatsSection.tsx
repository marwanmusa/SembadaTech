const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "99%", label: "Field Fit Rate" },
  { value: "10+", label: "Years Experience" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-white/5 py-14">
      <div className="section-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="panel p-6 text-center">
              <p className="text-4xl font-semibold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
