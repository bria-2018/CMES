# CMES Inc. case study — redesign

Open `index.html` in a browser. It has no build step and no dependencies apart from Google Fonts.

## Files
- `index.html`: page markup. The header and footer marked `data-standin` are placeholders only.
- `css/cmes-case-study.css`: page styles, scoped under `.cmes`. The tokens are at the top of the file.
- `js/cmes-case-study.js`: accessible tabs for the module and AI assistant explorers.
- `assets/img/`: compressed copies of the authentic CMES device mockups.

## WordPress integration (still to do)
1. Put the contents of `<main class="cmes">` into the `pf` single template, or into a page-specific template.
2. Leave out the stand-in `<header>` and `<footer>`. The theme already provides them.
3. Enqueue the CSS and JS for this page only. Remove the `:root`, `body`, `.btn` and `.site-*` rules if the theme already defines them.
4. Upload the images to the media library and update their paths.

## Content provenance
- Website results (+45% traffic, +60% impressions, +35% engagement) come from the live page at https://www.commercepundit.com/pf/cmes-inc/.
- The operations portal, AI assistants, 3,000+ hours, 70% faster reporting, the 9-month delivery and the integrations all come from the staging draft at /pf/cmes-ai-operations/. That draft labels them as reported by CMES. **Confirm these with the client before publishing.**
- The portal and chat visuals are conceptual and are labelled on the page. The bracketed prompts are illustrative.
