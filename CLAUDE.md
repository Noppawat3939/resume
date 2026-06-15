# Resume Project — Claude Instructions

## Project Overview

Personal resume/CV web app built with Next.js + Tailwind CSS.

- **Content source:** `src/data/index.ts` — all CV data (works, education, skills, header)
- **Draft content:** `src/draft/readme.md` — human-readable draft of work experience details
- **Components:** `src/components/` — UI components that consume data from `src/data/index.ts`

## Work Experience Structure

Each entry in `works` has:
- `startDate` / `endDate` (null = "Present") — separate fields, not a single string
- `location` — city, country
- `description` — optional company overview (1–2 sentences)
- `sections[]` — array of `{ title?: string, tasks: string[] }` (title is optional for flat bullet lists)

## Content Update Workflow

**Always follow this order when updating work experience tasks:**

1. **Update `src/draft/readme.md` first** — write the content in markdown format as the source of truth
2. **Then update `src/data/index.ts`** — copy the finalized content into the data structure

Never update `src/data/index.ts` before `src/draft/readme.md` is confirmed.

## Styling Rules

- No animation or transitions unless explicitly asked
- Keep UI consistent with existing Tailwind class patterns in `src/components/`
- Section titles in work experience use `font-semibold text-[13px] text-gray-700`
