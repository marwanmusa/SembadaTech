import { FileStack, UploadCloud } from "lucide-react";
import type { ChangeEvent, DragEvent } from "react";

interface FileUploaderProps {
  label: string;
  helperText: string;
  file: File | null;
  onFileSelect: (file: File | null) => void;
}

export default function FileUploader({
  label,
  helperText,
  file,
  onFileSelect,
}: FileUploaderProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.[0] ?? null;
    onFileSelect(nextFile);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const nextFile = event.dataTransfer.files?.[0] ?? null;

    if (nextFile?.type === "application/pdf") {
      onFileSelect(nextFile);
    }
  };

  return (
    <label
      className="group panel relative flex min-h-[220px] cursor-pointer flex-col justify-between overflow-hidden p-6 transition hover:border-accent/60 hover:bg-white/[0.07]"
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,137,54,0.14),transparent_32%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              {label}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
              {helperText}
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-3 text-accent">
            <UploadCloud className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-dashed border-white/15 bg-slate-950/70 px-5 py-8 text-center">
          {file ? (
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-accent/15 p-3 text-accent">
                <FileStack className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{file.name}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB PDF uploaded
                </p>
              </div>
              <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Ready
              </span>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-base font-semibold text-white">Drop PDF here</p>
              <p className="text-sm text-slate-400">or click to browse local files</p>
            </div>
          )}
        </div>
      </div>

      <input
        type="file"
        accept="application/pdf"
        className="sr-only"
        onChange={handleInputChange}
      />
    </label>
  );
}
