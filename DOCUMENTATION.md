# SembadaTech CDR Admin Documentation

## Overview

This repository now includes an internal-only admin UI for **Construction Drawing Recognition (CDR)**. The feature is designed for developers/admins to compare an original PDF drawing package with a revised PDF drawing package and review structured drawing differences.

The current implementation is **frontend-only** and uses mock data plus simulated processing states. It is intended to validate the UX, layout, and component structure before integrating a real PDF diff backend.

## What Has Been Implemented

### 1. Admin route

- `src/App.tsx` now checks the browser path.
- Visiting `/admin/cdr` renders the new CDR admin experience.
- The original public landing page remains unchanged for all other routes.

### 2. Modular CDR feature folder

All CDR-related files live under:

- `src/pages/admin/cdr/`

Files added:

- `CDRAdmin.tsx`
- `FileUploader.tsx`
- `ProcessingPanel.tsx`
- `DrawingPreview.tsx`
- `ChangeList.tsx`
- `HistorySidebar.tsx`
- `types.ts`
- `mockChanges.json`

### 3. File upload workflow

- Two upload zones are available:
  - `Original Drawing (PDF)`
  - `Revised Drawing (PDF)`
- Both accept PDF files through click-to-upload or drag-and-drop.
- The `Run Comparison` button stays disabled until both files are present.

### 4. Simulated processing state

When the comparison starts, the UI simulates a multi-step backend run with progress and status messaging:

- Normalizing source PDFs
- Aligning drawings
- Detecting differences
- Scoring and packaging results

This mimics the expected long-running backend workflow and gives the admin user feedback while processing is underway.

### 5. Mock diff review experience

After processing finishes, the UI shows:

- A side-by-side drawing viewer (`Original` vs `Revised`)
- A structured change review panel
- A comparison history sidebar
- Clickable detected changes
- Visual highlight overlays that map each selected change back onto the drawing preview

The drawing preview currently uses a **mock document canvas**, not real rendered PDF pages.

### 6. Comparison history sidebar

The admin view now includes a comparison history sidebar for previously completed runs.

- Each saved history item stores:
  - a label
  - original and revised file names
  - a timestamp
  - the diff result payload
- Admin users can:
  - open/view a prior comparison snapshot
  - delete a history item from the list

The current implementation is frontend state only and does not persist across reloads.

## Data Model

The mock change data follows the requested schema and is stored in:

- `src/pages/admin/cdr/mockChanges.json`

Each change includes:

- `page_number`
- `bbox`
- `change_type`
- `confidence`

Additional frontend fields were added to support display quality:

- `id`
- `title`
- `description`

Additional snapshot fields were added for history tracking:

- `label`
- `originalFileName`
- `revisedFileName`
- `createdAt`
- `changes`

Type definitions are centralized in:

- `src/pages/admin/cdr/types.ts`

## Current UX Behavior

1. Admin uploads original and revised PDFs.
2. `Run Comparison` becomes enabled.
3. Clicking it resets any previous results and starts the processing simulation.
4. When processing completes, mock changes are loaded into the review UI.
5. Clicking a change in the sidebar highlights the related area in both preview panes.
6. Completed runs are added to the history sidebar.
7. Clicking `View` on a history item reopens that comparison snapshot.
8. Clicking the delete action removes that snapshot from history.

## Design Notes

The UI was built to align with the current SembadaTech visual language:

- Dark slate base
- Accent orange highlights
- Clean glass-panel styling
- Engineering-focused, professional dashboard layout
- Responsive behavior for desktop and smaller screens

## Known Limitations

The following parts are intentionally mocked for now:

- Real PDF rendering
- Real coordinate mapping from backend output onto rendered PDFs
- Real backend job orchestration
- Real polling/websocket updates for long-running comparison jobs
- Persistent result history

## Recommended Next Steps

### Backend integration

- Replace the simulated processing flow with an API call.
- Add a job-based response model:
  - upload PDFs
  - create comparison job
  - poll job status
  - fetch final diff payload

### PDF rendering

- Integrate a PDF rendering layer such as `react-pdf` or `pdf.js`.
- Map backend `bbox` coordinates from document space into viewport space.
- Support per-page navigation for multi-sheet drawing sets.

### Admin capabilities

- Add comparison history
- Add filtering by page or change type
- Add confidence thresholds
- Add export/download for diff reports

## How To Access

Run the app locally and open:

- `/admin/cdr`

Example:

- `http://localhost:5173/admin/cdr`

## Summary

The CDR admin UI foundation is now in place:

- modularized
- typed with TypeScript
- responsive
- visually aligned with the existing app
- ready for backend and PDF-renderer integration
