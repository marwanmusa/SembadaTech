const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur">
      <div className="section-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Sembada home">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/50 bg-accent/10 text-sm font-bold tracking-[0.3em] text-accent">
              SB
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[0.18em] text-slate-100">SEMBADA</p>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-300">
                Steel Detailing
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="button-primary min-h-11 px-5"
          >
            Request Quote
          </a>
        </div>

        <nav className="-mb-1 mt-4 flex gap-3 overflow-x-auto pb-1 text-sm font-medium text-slate-300 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
