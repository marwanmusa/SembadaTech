import { Expand, FileText, Layers3 } from "lucide-react";
import type { DrawingChange } from "./types";

interface DrawingPreviewProps {
  title: string;
  file: File | null;
  selectedPage: number;
  changes: DrawingChange[];
  selectedChangeId: string | null;
  onSelectChange: (changeId: string) => void;
  variant: "original" | "revised";
}

export default function DrawingPreview({
  title,
  file,
  selectedPage,
  changes,
  selectedChangeId,
  onSelectChange,
  variant,
}: DrawingPreviewProps) {
  const pageChanges = changes.filter((change) => change.page_number === selectedPage);
  const overlayColor =
    variant === "original"
      ? "border-sky-300/90 bg-sky-300/10"
      : "border-amber-300/90 bg-amber-300/10";

  return (
    <section className="panel overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            {title}
          </p>
          <p className="mt-1 text-sm text-slate-400">
            {file ? file.name : "Waiting for PDF upload"}
          </p>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <button
            type="button"
            className="rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
            aria-label={`Open expanded ${title.toLowerCase()} preview`}
          >
            <Expand className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <FileText className="h-4 w-4 text-accent" />
            <span>Page {selectedPage}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Layers3 className="h-4 w-4" />
            <span>{pageChanges.length} mapped changes</span>
          </div>
        </div>

        <div className="relative aspect-[0.78] overflow-hidden rounded-[28px] border border-white/10 bg-[#edf2f7] shadow-[0_30px_60px_rgba(15,23,32,0.24)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(148,163,184,0.18),rgba(255,255,255,0)_28%)]" />
          <div className="absolute inset-[6%] rounded-[22px] border border-slate-300/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
          <div className="absolute inset-[11%] opacity-80">
            <div className="grid h-full grid-cols-6 grid-rows-6 gap-3">
              {Array.from({ length: 18 }).map((_, index) => (
                <div
                  key={index}
                  className={`rounded-lg border ${
                    index % 3 === 0
                      ? "border-slate-300/80 bg-slate-200/70"
                      : "border-slate-200 bg-slate-100/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {pageChanges.map((change) => {
            const isSelected = change.id === selectedChangeId;

            return (
              <button
                key={change.id}
                type="button"
                className={`absolute rounded-md border-2 transition ${
                  isSelected
                    ? `${overlayColor} shadow-[0_0_0_4px_rgba(237,137,54,0.2)]`
                    : "border-rose-500/70 bg-rose-500/10"
                }`}
                style={{
                  left: `${change.bbox.x}%`,
                  top: `${change.bbox.y}%`,
                  width: `${change.bbox.width}%`,
                  height: `${change.bbox.height}%`,
                }}
                onClick={() => onSelectChange(change.id)}
                aria-label={`Highlight ${change.title}`}
              >
                <span className="sr-only">{change.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
