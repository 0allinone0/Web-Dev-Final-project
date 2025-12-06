## Repository Overview

- This is a small static website (Campus Life Super App) built with plain HTML, CSS and JavaScript. Pages at the repo root include `index.html`, `dinning.html`, `events.html`, and `map.html`.
- Assets live under `images/`, `css/style.css`, and `js/script.js`. Bootstrap is loaded from a CDN in `index.html`.

## Big Picture / Architecture

- No backend or build system: the site is served as static files. There are no Node, Python, or other server-side frameworks configured in the repo.
- Data flow is file-to-browser: content is authored in the HTML pages, styles in `css/style.css`, and client logic in `js/script.js` (currently empty). Images are referenced from `images/`.

## Developer Workflows

- Run locally: use a simple static server from the repo root. Example (PowerShell):

```
python -m http.server 8000
```

- Open `http://localhost:8000/` in a browser to view the site. This is the recommended way to validate relative paths and assets (favicon path in `index.html` is root-absolute: `/images/School Logo.png`).
- There are no tests, build scripts, or packaging steps. Changes are validated by reloading the browser.

## Project-Conventions and Patterns

- File layout: top-level HTML files serve pages directly. Keep new pages at repository root to match existing structure.
- Assets: put CSS in `css/`, JS in `js/`, and images in `images/`. Use relative paths from HTML files (e.g., `css/style.css`, `js/script.js`).
- External libs: use CDN-hosted Bootstrap (already present). Do not convert to local vendor files unless explicitly requested.
- Favicon: `index.html` references `/images/School Logo.png`. Preserve the filename and casing when editing or replacing.

## Safe Editing Rules for AI Agents

- Do not rename or move top-level HTML files without confirming — page routes are implied by filenames (e.g., `map.html`).
- When updating `index.html`, preserve the Bootstrap CDN link and the viewport meta tag unless the change is deliberate for a specific reason.
- If you add JavaScript behavior, prefer editing `js/script.js` and reference it from existing HTML rather than embedding large scripts inline.
- Keep CSS changes scoped to `css/style.css`. Avoid adding new global CSS files unless necessary.

## Integration Points & External Dependencies

- Bootstrap CDN is the only external dependency. There is no package manager configuration (`package.json` absent).
- No APIs or third-party services are configured. If adding integrations, document required keys and where to store them (the repo currently has no secret management patterns).

## Examples (Concrete Guidance)

- To add a new interactive map feature: add UI to `map.html`, place script logic in `js/script.js` and styles in `css/style.css`. Serve locally with `python -m http.server 8000` to verify.
- To replace the favicon: add the new image file to `images/` and keep the path `/images/School Logo.png` (update file contents, keep filename to avoid breaking existing references).

## When to Ask The User

- If a change requires adding a build step or package manager (npm, pip), ask first — this repo intentionally contains no build tooling.
- If a proposed refactor moves files or renames pages, confirm since those are routing/URL-visible changes.

## What NOT to do

- Don't scaffold a Node/React/Vite project here without explicit instruction.
- Don't delete images or rename them without updating all references and asking the user.

If anything seems missing or you want the instructions to include additional workflow commands (e.g., preferred local server, linting, or CI), tell me what you'd like added and I will iterate.
