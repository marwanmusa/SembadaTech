import { LoaderCircle, ScanSearch } from "lucide-react";
import type { ProcessingStep } from "./types";

interface ProcessingPanelProps {
  currentStep: ProcessingStep;
}

export default function ProcessingPanel({ currentStep }: ProcessingPanelProps) {
  return (
    <section className="panel overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-kicker">Comparison In Progress</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Simulating the CDR backend workflow
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            The actual comparison service takes roughly 60 seconds. This admin UI
            currently runs a frontend simulation to validate the upload, loading, and
            result-review flow before backend integration.
          </p>
        </div>

        <div className="panel flex items-center gap-3 px-5 py-4">
          <LoaderCircle className="h-5 w-5 animate-spin text-accent" />
          <span className="text-sm font-semibold text-slate-200">
            Processing page geometry and diff candidates
          </span>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-accent/15 p-3 text-accent">
              <ScanSearch className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-semibold text-white">{currentStep.label}</p>
              <p className="text-sm text-slate-400">{currentStep.description}</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-slate-300">
            {currentStep.progress}%
          </span>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-900">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,#ed8936_0%,#f6ad55_100%)] transition-all duration-700"
            style={{ width: `${currentStep.progress}%` }}
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="h-3 w-24 rounded-full bg-white/10" />
              <div className="mt-4 space-y-3">
                <div className="h-24 rounded-2xl bg-white/5" />
                <div className="h-3 w-3/4 rounded-full bg-white/10" />
                <div className="h-3 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
