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
- **Tech stack:** Hugo static site generator + Hextra theme
- **Purpose:** Academic personal homepage for Mengke Zhang
- **Content source:** Markdown files in `content/` (English as default, Chinese via `.zh.md` suffix)
- **Config file:** `hugo.yaml`
- **Theme:** Hextra (git-cloned into `themes/hextra/`)
- **i18n:** `i18n/en.yaml` and `i18n/zh.yaml`
- **Authoritative English source:** `MyProfile&Publications/CV-English.md` — check terminology against this
- **Build:** `hugo` (outputs to `public/`)
- **Dev server:** `hugo server` (hot-reload at http://localhost:1313)
- **Deploy:** GitHub Pages (`https://zjuzmk.github.io/`) via GitHub Actions (`.github/workflows/pages.yaml`)
- **Hugo binary:** `~/bin/hugo`
- **Bilingual pattern:** Translation by filename — `page.md` (EN) and `page.zh.md` (ZH)
- **Site structure:** Home, About, Publications, Research (section with 5 project pages), Blog (manual markdown)
