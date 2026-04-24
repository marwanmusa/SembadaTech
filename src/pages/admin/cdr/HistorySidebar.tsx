import { Eye, History, Trash2 } from "lucide-react";
import type { ComparisonSnapshot } from "./types";

interface HistorySidebarProps {
  history: ComparisonSnapshot[];
  activeHistoryId: string | null;
  onOpenHistory: (historyId: string) => void;
  onDeleteHistory: (historyId: string) => void;
}

function formatTimestamp(createdAt: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(createdAt));
}

export default function HistorySidebar({
  history,
  activeHistoryId,
  onOpenHistory,
  onDeleteHistory,
}: HistorySidebarProps) {
  return (
    <aside className="panel h-full overflow-hidden">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Comparison History
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Open previous review sessions
            </h3>
          </div>
          <div className="rounded-2xl bg-accent/15 p-3 text-accent">
            <History className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4">
        {history.length > 0 ? (
          history.map((item) => {
            const isActive = item.id === activeHistoryId;

            return (
              <div
                key={item.id}
                className={`rounded-3xl border p-4 ${
                  isActive
                    ? "border-accent/70 bg-accent/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-sm text-slate-300">
                      {item.originalFileName} vs {item.revisedFileName}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    {item.changes.length} changes
                  </span>
                </div>

                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                  {formatTimestamp(item.createdAt)}
                </p>

                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.08]"
                    onClick={() => onOpenHistory(item.id)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-2xl border border-rose-400/25 bg-rose-400/10 px-3 py-2 text-sm font-semibold text-rose-200 transition hover:bg-rose-400/20"
                    onClick={() => onDeleteHistory(item.id)}
                    aria-label={`Delete ${item.label}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-5 text-center">
            <p className="text-sm font-semibold text-white">No saved comparisons yet</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Completed comparison runs will appear here so admins can reopen or
              delete them.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
