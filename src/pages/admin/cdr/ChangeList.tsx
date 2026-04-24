import { BadgeAlert, FileSearch, ScanLine } from "lucide-react";
import type { DrawingChange } from "./types";

interface ChangeListProps {
  changes: DrawingChange[];
  selectedChangeId: string | null;
  onSelectChange: (changeId: string) => void;
}

export default function ChangeList({
  changes,
  selectedChangeId,
  onSelectChange,
}: ChangeListProps) {
  return (
    <aside className="panel h-full overflow-hidden">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Detected Changes
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Review structured diff output
            </h3>
          </div>
          <div className="rounded-2xl bg-accent/15 p-3 text-accent">
            <FileSearch className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4">
        {changes.map((change) => {
          const isActive = change.id === selectedChangeId;

          return (
            <button
              key={change.id}
              type="button"
              className={`w-full rounded-3xl border p-4 text-left transition ${
                isActive
                  ? "border-accent/70 bg-accent/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
              }`}
              onClick={() => onSelectChange(change.id)}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-white">{change.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {change.description}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-2 text-slate-300">
                  {change.change_type === "text" ? (
                    <BadgeAlert className="h-4 w-4" />
                  ) : (
                    <ScanLine className="h-4 w-4" />
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Page
                  </span>
                  <span className="mt-1 block text-slate-300">{change.page_number}</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Confidence
                  </span>
                  <span className="mt-1 block text-slate-300">
                    {(change.confidence * 100).toFixed(0)}%
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-400">
                bbox: [{change.bbox.x}, {change.bbox.y}, {change.bbox.width},{" "}
                {change.bbox.height}] | type: {change.change_type}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
