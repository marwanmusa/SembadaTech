import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeftRight,
  Binary,
  CheckCircle2,
  Menu,
  X,
  FileCog,
  FileDiff,
  HardHat,
  History,
  Sparkles,
} from "lucide-react";
import ChangeList from "./ChangeList";
import DrawingPreview from "./DrawingPreview";
import FileUploader from "./FileUploader";
import HistorySidebar from "./HistorySidebar";
import ProcessingPanel from "./ProcessingPanel";
import mockChangesData from "./mockChanges.json";
import type {
  ComparisonSnapshot,
  DrawingChange,
  ProcessingStep,
} from "./types";

const processingSteps: ProcessingStep[] = [
  {
    label: "Normalizing source PDFs",
    description: "Extracting sheet metadata, page indices, and embedded vector layers.",
    progress: 15,
  },
  {
    label: "Aligning drawings",
    description: "Registering old and revised sheets to a common coordinate system.",
    progress: 42,
  },
  {
    label: "Detecting differences",
    description: "Comparing annotations, callouts, and linework for candidate changes.",
    progress: 73,
  },
  {
    label: "Scoring and packaging results",
    description: "Assigning confidence levels and preparing review-ready diff payloads.",
    progress: 100,
  },
];

const mockChanges = mockChangesData as DrawingChange[];

const initialHistory: ComparisonSnapshot[] = [
  {
    id: "history-001",
    label: "Atrium framing revision",
    originalFileName: "atrium-plan-r2.pdf",
    revisedFileName: "atrium-plan-r3.pdf",
    createdAt: "2026-04-20T09:30:00-04:00",
    changes: mockChanges,
  },
  {
    id: "history-002",
    label: "Stair tower update",
    originalFileName: "stair-tower-issue-a.pdf",
    revisedFileName: "stair-tower-issue-b.pdf",
    createdAt: "2026-04-19T15:10:00-04:00",
    changes: mockChanges.slice(0, 3),
  },
];

export default function CDRAdmin() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [revisedFile, setRevisedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [changes, setChanges] = useState<DrawingChange[]>([]);
  const [selectedChangeId, setSelectedChangeId] = useState<string | null>(null);
  const [history, setHistory] = useState<ComparisonSnapshot[]>(initialHistory);
  const [activeHistoryId, setActiveHistoryId] = useState<string | null>(initialHistory[0]?.id ?? null);
  const [isHistoryDrawerOpen, setIsHistoryDrawerOpen] = useState(false);

  useEffect(() => {
    if (!isProcessing) {
      return undefined;
    }

    if (currentStepIndex >= processingSteps.length - 1) {
      const finalTimer = window.setTimeout(() => {
        setChanges(mockChanges);
        setSelectedChangeId(mockChanges[0]?.id ?? null);
        setHistory((previousHistory) => {
          const timestamp = new Date().toISOString();
          const nextSnapshot: ComparisonSnapshot = {
            id: `history-${timestamp}`,
            label: `Comparison ${previousHistory.length + 1}`,
            originalFileName: originalFile?.name ?? "original-drawing.pdf",
            revisedFileName: revisedFile?.name ?? "revised-drawing.pdf",
            createdAt: timestamp,
            changes: mockChanges,
          };

          setActiveHistoryId(nextSnapshot.id);
          return [nextSnapshot, ...previousHistory];
        });
        setIsProcessing(false);
      }, 1000);

      return () => window.clearTimeout(finalTimer);
    }

    const timer = window.setTimeout(() => {
      setCurrentStepIndex((previousIndex) => previousIndex + 1);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [currentStepIndex, isProcessing, originalFile, revisedFile]);

  useEffect(() => {
    if (initialHistory.length === 0 || changes.length > 0) {
      return;
    }

    const firstSnapshot = initialHistory[0];
    setChanges(firstSnapshot.changes);
    setSelectedChangeId(firstSnapshot.changes[0]?.id ?? null);
  }, [changes.length]);

  const selectedChange =
    changes.find((change) => change.id === selectedChangeId) ?? changes[0] ?? null;
  const selectedPage = selectedChange?.page_number ?? 1;

  const pageSummary = useMemo(() => {
    return changes.reduce<Record<number, number>>((summary, change) => {
      summary[change.page_number] = (summary[change.page_number] ?? 0) + 1;
      return summary;
    }, {});
  }, [changes]);

  const handleRunComparison = () => {
    setIsProcessing(true);
    setCurrentStepIndex(0);
    setChanges([]);
    setSelectedChangeId(null);
    setActiveHistoryId(null);
  };

  const handleOpenHistory = (historyId: string) => {
    const snapshot = history.find((item) => item.id === historyId);

    if (!snapshot) {
      return;
    }

    setActiveHistoryId(snapshot.id);
    setIsProcessing(false);
    setChanges(snapshot.changes);
    setSelectedChangeId(snapshot.changes[0]?.id ?? null);
    setIsHistoryDrawerOpen(false);
  };

  const handleDeleteHistory = (historyId: string) => {
    setHistory((previousHistory) => {
      const nextHistory = previousHistory.filter((item) => item.id !== historyId);

      if (activeHistoryId === historyId) {
        const nextActiveSnapshot = nextHistory[0] ?? null;
        setActiveHistoryId(nextActiveSnapshot?.id ?? null);
        setChanges(nextActiveSnapshot?.changes ?? []);
        setSelectedChangeId(nextActiveSnapshot?.changes[0]?.id ?? null);
      }

      return nextHistory;
    });
  };

  const historySidebarContent = (
    <div className="space-y-6">
      <section className="panel p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-accent/15 p-3 text-accent">
            <History className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              History Status
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              {history.length} saved comparisons
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          Use the sidebar to reopen an older comparison snapshot or remove stale runs from
          the admin review list.
        </p>
      </section>

      <HistorySidebar
        history={history}
        activeHistoryId={activeHistoryId}
        onOpenHistory={handleOpenHistory}
        onDeleteHistory={handleDeleteHistory}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,137,54,0.16),transparent_25%),radial-gradient(circle_at_top_right,rgba(26,54,93,0.35),transparent_28%)]" />

      <main className="relative w-full px-4 py-10 sm:px-6 sm:py-14 xl:px-8">
        <div className="mb-6 flex items-center justify-end xl:hidden">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-offset-2 focus:ring-offset-slate-950"
            onClick={() => setIsHistoryDrawerOpen(true)}
            aria-expanded={isHistoryDrawerOpen}
            aria-controls="history-drawer"
          >
            <Menu className="h-4 w-4" />
            History
          </button>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_clamp(280px,22vw,360px)]">
          <div>
            <section className="panel overflow-hidden">
              <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-10">
                <div>
                  <p className="section-kicker">Internal Admin Tool</p>
                  <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Construction Drawing Recognition
                  </h1>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                    Compare original and revised PDF drawings, simulate the backend diff
                    workflow, and inspect structured change output for internal QA,
                    engineering review, and future API integration.
                  </p>

                  {/* <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-4">
                      <HardHat className="h-5 w-5 text-accent" />
                      <p className="mt-4 text-sm font-semibold text-white">Admin-only workflow</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Built for internal reviewers validating drawing revisions.
                      </p>
                    </div>
                    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-4">
                      <Binary className="h-5 w-5 text-accent" />
                      <p className="mt-4 text-sm font-semibold text-white">Structured diff data</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Mock JSON mirrors page number, bbox, type, and confidence fields.
                      </p>
                    </div>
                    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-4">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <p className="mt-4 text-sm font-semibold text-white">Backend-ready UI</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Loading and review states are ready to swap to real service calls.
                      </p>
                    </div>
                  </div> */}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-accent/15 p-3 text-accent">
                        <FileCog className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                          Session Status
                        </p>
                        <p className="mt-1 text-lg font-semibold text-white">
                          {changes.length > 0 ? "Results Ready" : isProcessing ? "Processing" : "Awaiting Inputs"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                        Original: {originalFile ? "Uploaded" : "Missing"}
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                        Revised: {revisedFile ? "Uploaded" : "Missing"}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                      <p className="text-sm font-semibold text-white">Mock review summary</p>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                          Changes
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">{changes.length}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                          Pages Impacted
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">
                          {Object.keys(pageSummary).length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-2">
              <FileUploader
                label="Original Drawing (PDF)"
                helperText="Upload the baseline drawing package that acts as the comparison source."
                file={originalFile}
                onFileSelect={setOriginalFile}
              />
              <FileUploader
                label="Revised Drawing (PDF)"
                helperText="Upload the latest drawing revision that will be compared against the original."
                file={revisedFile}
                onFileSelect={setRevisedFile}
              />
            </section>

            <section className="mt-6 panel p-5 sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Comparison Control
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Run a revision-to-revision comparison
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    The button unlocks once both PDFs are present. Starting a run resets any
                    previous mock results and replays the processing timeline.
                  </p>
                </div>

                <button
                  type="button"
                  className="button-primary disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
                  disabled={!originalFile || !revisedFile || isProcessing}
                  onClick={handleRunComparison}
                >
                  <ArrowLeftRight className="mr-2 h-4 w-4" />
                  Run Comparison
                </button>
              </div>
            </section>

            {isProcessing ? (
              <div className="mt-8">
                <ProcessingPanel currentStep={processingSteps[currentStepIndex]} />
              </div>
            ) : null}

            {changes.length > 0 ? (
              <section className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
                <div className="grid gap-6 lg:grid-cols-2">
                  <DrawingPreview
                    title="Original Drawing"
                    file={originalFile}
                    selectedPage={selectedPage}
                    changes={changes}
                    selectedChangeId={selectedChangeId}
                    onSelectChange={setSelectedChangeId}
                    variant="original"
                  />
                  <DrawingPreview
                    title="Revised Drawing"
                    file={revisedFile}
                    selectedPage={selectedPage}
                    changes={changes}
                    selectedChangeId={selectedChangeId}
                    onSelectChange={setSelectedChangeId}
                    variant="revised"
                  />
                </div>

                <ChangeList
                  changes={changes}
                  selectedChangeId={selectedChangeId}
                  onSelectChange={setSelectedChangeId}
                />
              </section>
            ) : (
              <section className="mt-8 panel border-dashed p-8 text-center">
                <div className="mx-auto max-w-2xl">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <FileDiff className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-white">
                    Diff results will appear here
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    Upload both drawings and run a comparison to populate the side-by-side
                    preview and the structured change list. Current previews are intentionally
                    mocked until PDF rendering and backend diff services are connected.
                  </p>
                </div>
              </section>
            )}
          </div>

          <aside className="hidden xl:block">{historySidebarContent}</aside>
        </div>

        <div
          className={`fixed inset-0 z-40 xl:hidden ${
            isHistoryDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!isHistoryDrawerOpen}
        >
          <button
            type="button"
            className={`absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${
              isHistoryDrawerOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsHistoryDrawerOpen(false)}
            aria-label="Close history drawer"
          />

          <aside
            id="history-drawer"
            className={`absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto border-l border-white/10 bg-slate-950/95 p-5 shadow-2xl transition-transform duration-300 ease-out sm:max-w-md ${
              isHistoryDrawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="history-drawer-title"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-accent/15 p-3 text-accent">
                  <History className="h-5 w-5" />
                </div>
                <div>
                  <p
                    id="history-drawer-title"
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300"
                  >
                    Comparison History
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {history.length} saved comparisons
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-offset-2 focus:ring-offset-slate-950"
                onClick={() => setIsHistoryDrawerOpen(false)}
                aria-label="Close history drawer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {historySidebarContent}
          </aside>
        </div>
      </main>
    </div>
  );
}
