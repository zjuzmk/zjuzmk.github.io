# How I Built This Website with Claude Code

*May 29, 2026 · Tags: `ClaudeCode` `PersonalWebsite` `AcademicPortfolio`*

---

> The Chinese original of this post is available [here](/zh/blog/building-with-claude-code/).

---

I've been meaning to set up a personal academic homepage for a while. Like many researchers, I wanted something clean, bilingual, and easy to maintain—but I kept putting it off. The options all felt like compromises: WordPress required too much upkeep, Notion locked you into its ecosystem, and hand-coding from scratch felt like a weekend I didn't have.

Then I tried [Claude Code](https://claude.ai/code)—the tool you're interacting with right now.

## The Setup

I dropped my CV (a Markdown file) into an empty project folder and asked: *What kind of project should we build?*

It read my CV, understood my background in urban studies, and suggested four ideas. I picked **building a personal academic website**—practical, visible, and a good test of the collaborative workflow.

## The Tech Stack

We settled on **Material for MkDocs**:

- **Content in Markdown**—I already write everything in `.md`, so no new skills needed
- **Bilingual from day one**—English and Chinese, with a one-click language switcher
- **Zero lock-in**—plain `.md` files, no database, no proprietary format. If I want to switch to another tool later, my content moves with me
- **Free hosting**—via GitHub Pages, no domain costs required

## The Workflow

We worked in tight feedback loops:

1. I described what I wanted (in Chinese—my native language for thinking)
2. Claude proposed a plan with trade-offs
3. I approved or redirected
4. Claude wrote the code while I watched
5. A live preview at `localhost:8000` let me see results instantly
6. I gave feedback, and we iterated

## What's Live Now

As of today, the site includes:

- **Homepage**—bilingual, with a clean researcher profile and research interests
- **Publications**—6 journal articles + 2 book chapters + manuscripts in preparation, all with clickable DOIs
- **Research Projects**—5 dedicated project pages covering my PhD (Chongli's extended urbanization), Beijing 2022 cultural heritage, platform-mediated live music, danwei spatial transformation, and Grand Canal heritage conservation
- **Blog**—this very page. We ditched Material's built-in blog plugin (it doesn't play well with the i18n plugin—took a while to debug that one) and went with hand-written markdown pages instead. Simpler, more controllable
- **Interactive Map**—Leaflet.js + OpenStreetMap, with pins on my four fieldwork sites (Chongli, Beijing, Hangzhou, Shenzhen), each with a popup description
- **Dark mode**—one-click toggle for late-night reading

## What Surprised Me

- **The AI read my context.** I didn't have to repeat my background or goals. Claude read my CV and understood my field well enough to suggest relevant project ideas.
- **I could stay in flow.** No context-switching to Google for "how to configure mkdocs i18n." Claude either knew it or read the source code of the plugins on the fly.
- **Everything is in Git.** All content, all config, all design decisions documented in `SITE-PLAN.md`. The project is fully portable.
- **It remembers across sessions.** My preferences, project setup, and design choices were stored so future sessions pick up where we left off.
- **It reads academic papers.** I dropped my published PDFs into the project folder, and Claude extracted the research questions, methods, and key findings from each one to draft project pages. I reviewed and refined—but the heavy lifting was done.

## Bugs Are Part of the Learning

We hit a few bumps along the way:

- **Blog plugin vs. i18n incompatibility**—the listing page rendered completely blank. Took several `mkdocs serve` restarts to pinpoint the issue. Eventually ditched the plugin and went with hand-written markdown. Cleaner solution anyway.
- **404 on language switch**—the English alternate link was set to `/en/`, but since English is the default language it builds to `/`. A one-line fix.
- **Translation inconsistencies**—pages initially translated from Chinese had terminology errors (e.g., "Laboratory" instead of "Research Group," "Architecture and Urban Sciences" instead of "Architecture and Sciences of the City"). Once I added my English CV to the project folder, Claude cross-checked everything and fixed it systematically.

## What's Next

- Deploy the site live
- Keep blogging here
- Maybe add a custom domain down the line

## Verdict

Was it perfect? No—there were moments of misalignment, a 404 bug, CSS that needed tuning, and an hour lost to a plugin compatibility issue. But the pace and quality were surprising for a first encounter with this kind of tool.

For researchers who want a web presence without becoming a web developer: **this workflow is worth trying.**

---

*Originally written in Chinese. Translated by the author with AI assistance.*
