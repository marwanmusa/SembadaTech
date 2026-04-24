export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type ChangeType = "text" | "graphics";

export interface DrawingChange {
  id: string;
  title: string;
  description: string;
  page_number: number;
  bbox: BoundingBox;
  change_type: ChangeType;
  confidence: number;
}

export interface ProcessingStep {
  label: string;
  description: string;
  progress: number;
}

export interface ComparisonSnapshot {
  id: string;
  label: string;
  originalFileName: string;
  revisedFileName: string;
  createdAt: string;
  changes: DrawingChange[];
}
