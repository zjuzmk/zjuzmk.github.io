# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication
- Be concise. No greetings, no summaries, no "great question!" filler.
- Do not list what you "learned" or "noticed" at the end of responses.
- When unsure, ask one short clarifying question — don't guess.

## Coding
- Write simple, readable code. No over-engineering.
- No comments unless the WHY is non-obvious.
- Do not add error handling for scenarios that can't happen.
- Do not introduce new dependencies unless explicitly asked.
- Before editing, read the file first to understand context.
- If a change spans 3+ files, outline the plan before writing code.

## Project
- **Tech stack:** Material for MkDocs (static site generator), Python 3.14
- **Purpose:** Academic personal homepage for Mengke Zhang
- **Content source:** Markdown files in `docs/en/` (English) and `docs/zh/` (Chinese)
- **Config file:** `mkdocs.yml`
- **Custom styles:** `docs/assets/stylesheets/extra.css`
- **Design decisions:** Documented in `SITE-PLAN.md`
- **Authoritative English source:** `MyProfile&Publications/CV-English.md` — check terminology against this
- **Build:** `mkdocs build` (outputs to `site/`)
- **Dev server:** `mkdocs serve` (hot-reload at http://127.0.0.1:8000)
- **Deploy:** GitHub Pages (`https://zjuzmk.github.io/`) via `mkdocs gh-deploy`
- **Site structure:** Home, Publications, Research (5 project pages + index), Blog (manual markdown), Map (Leaflet.js), About
- **Map:** Leaflet.js + OpenStreetMap CDN, loaded via extra_css/extra_javascript in mkdocs.yml
