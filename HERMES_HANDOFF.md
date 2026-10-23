# Hermes Handoff — Placencia Greenscapes

## Mission

Continue the website work for Placencia Greenscapes and Stone. The current branch contains an accessibility polish pass plus a guarded WebGPU shader enhancement. Cloudflare production is already deployed. GitHub push is the only unresolved external step.

## Repository state

- Local project: `/Users/darren_dean/projects/greenscapes`
- Remote: `https://github.com/placenciagreenscapes/placencia-greenscapes.git`
- Current branch: `codex/impeccable-shaders`
- Implementation commit: `cc3af29 Add accessible polish and shader-enhanced hero`
- Base commit: `9ac023c Double hero logo size`
- Working tree was clean after the commit.
- Impeccable runtime files are installed locally under `.agents/` and `.codex/`; both are intentionally gitignored. Do not add their downloaded runtime/binary files to the website repository.

## What was implemented

### Accessibility and UX polish

- Replaced the generic bounce animation with a restrained scroll indicator and an accessible `#services` link.
- Added reduced-motion handling in `src/index.css`.
- Made before/after cards keyboard- and tap-accessible with `aria-pressed` state.
- Updated the before/after hint to say “Hover or tap to reveal”.
- Made mobile service descriptions visible without relying on hover.
- Added `aria-expanded` and `aria-controls` to the mobile navigation button.
- Changed the lint script to lint only `src`, avoiding third-party Impeccable runtime files.

### Shaders integration

- Added `shaders@4.0.5`.
- Added `src/components/HeroShader.tsx`.
- `HeroShader` is lazy-loaded from `Hero.tsx`.
- The shader is enabled only when:
  - WebGPU support is confirmed with `getWebGPUSupport()`;
  - the viewport is at least 768px wide; and
  - reduced motion is not requested.
- The shader uses `ImageTexture`, `LightLeak`, `FilmGrain`, and `Vignette`.
- The original `/images/hero-bg.jpg` remains underneath as the static fallback.
- Shader failure or unavailable WebGPU returns to the normal hero without blocking the page.

### Dependency maintenance

- Updated `react-router-dom` to `^7.18.4`.
- Updated Vite to `^8.3.5`.
- Production dependency audit currently reports zero vulnerabilities.

## Verification completed

Run from the project root:

```bash
npm run lint
npm run build
npm audit --omit=dev --json
.agents/skills/impeccable/scripts/impeccable detect src --json
```

Expected results:

- lint passes;
- TypeScript/Vite build passes;
- production npm audit reports zero vulnerabilities;
- Impeccable detector returns `[]`.

Build note: the main app bundle is about 263 KB; the lazy `HeroShader` chunk is about 2.58 MB minified / 715 KB gzip. This is intentional for the prototype, but should be evaluated on real desktop hardware before expanding shader usage.

## Deployments

### Production

- URL: https://placencia-greenscapes.pages.dev/
- Cloudflare account: DTree Industries
- Project: `placencia-greenscapes`
- Latest production deployment ID: `a3ffa120`
- Homepage and SPA fallback route were verified with HTTP 200.

### Preview

- URL: https://impeccable-shaders.placencia-greenscapes.pages.dev/
- Immutable deployment URL: https://ceaa16f1.placencia-greenscapes.pages.dev

Production was promoted from the same verified build. Do not redeploy production unless explicitly requested.

## GitHub blocker

The commit is local but was not pushed. The Vaultwarden item `GitHub — API token` currently authenticates as `ddean6232` and GitHub reports:

```text
push: false
pull: true
```

Do not use local CLI auth, browser credentials, environment files, or any other credential source. The only approved source is Vaultwarden.

After the user grants `ddean6232` write access to the repository or replaces the Vaultwarden item with a token that has repository contents write permission, verify permissions serially:

```bash
vaultwarden-secret exec "GitHub — API token" GH_TOKEN -- sh -c 'gh api user --jq "{login,name}"; gh api repos/placenciagreenscapes/placencia-greenscapes --jq "{full_name,permissions}"'
```

Then push the existing commit without exposing the token:

```bash
vaultwarden-secret exec "GitHub — API token" GH_TOKEN -- sh -c 'git -c credential.helper="!f() { echo username=x-access-token; echo password=$GH_TOKEN; }; f" push -u origin codex/impeccable-shaders'
```

The user may update the canonical item privately with:

```bash
vaultwarden-secret put "GitHub — API token" --uri https://github.com
```

Never ask the user to paste the token into chat.

## Suggested Hermes next steps

1. Read this handoff and inspect `git status`, `git log`, `package.json`, `src/components/HeroShader.tsx`, and `src/components/Hero.tsx`.
2. Run the verification commands above.
3. Review the production and preview URLs visually at desktop and mobile sizes.
4. Keep the existing static hero fallback and reduced-motion behavior intact.
5. Resolve GitHub write permission through Vaultwarden, then push `codex/impeccable-shaders`.
6. Only merge to `main` or redeploy production after the user explicitly approves the preview.

## Important constraints

- Do not expose or print credentials.
- Serialize Vaultwarden calls; concurrent broker calls previously caused misleading lock/parsing failures.
- Keep Cloudflare production stable while reviewing the feature branch.
- The current shader is a restrained prototype, not a reason to add GPU effects throughout the page.
