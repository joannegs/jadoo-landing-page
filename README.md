# Jadoo Viagens — Travel Agency Landing Page

A landing page for a fictitious travel agency (**Jadoo**).

## 🛠️ Tech stack

| Category            | Technology |
| -------------------- | ---------- |
| Framework            | [React 19](https://react.dev/) |
| Build tool            | [Vite 8](https://vite.dev/) |
| Language              | [TypeScript](https://www.typescriptlang.org/) |
| Styling               | [Sass](https://sass-lang.com/) (CSS Modules per component) |
| Internationalization  | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) + [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) |
| Typography            | Self-hosted variable fonts via [Fontsource](https://fontsource.org/) (`Fraunces` for headings, `Inter` for body text) |
| Animations             | [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) (scroll detection, via a custom `useInView` hook) + native CSS `@keyframes`/`animation` (no animation library) |
| Lint                  | [oxlint](https://oxc.rs/) |

No CSS framework (Tailwind, Bootstrap, etc.) is used — the whole design
system is implemented by hand with Sass tokens.

## 📁 Project structure

```
src/
├── assets/images/         # Optimized (.webp) images used across sections
├── components/
│   ├── ui/                # Generic, reusable components
│   │   (Button, Container, IconBadge, IconButton,
│   │    LanguageSwitcher, SectionHeading)
│   ├── layout/             # Header and Footer
│   ├── sections/           # One folder per landing page section
│   │   (Hero, Services, Destinations, BookTrip,
│   │    Testimonials, PartnerLogos, Newsletter)
│   └── icons/              # SVG icons as React components
├── data/                   # Typed content arrays/objects
│                            # (destinations, services, testimonials, nav...)
├── hooks/
│   └── useInView.ts        # IntersectionObserver hook powering scroll reveals
├── i18n/
│   ├── config.ts           # i18next configuration
│   └── locales/            # Translation files (pt.json, en.json, es.json)
├── styles/
│   ├── _tokens.scss        # Design tokens (colors, spacing, breakpoints)
│   ├── _mixins.scss        # Sass mixins (respond, container, focus-ring...)
│   ├── _reset.scss         # CSS reset
│   └── global.scss         # Global styles
├── App.tsx                 # Composes the page sections
├── main.tsx                # Entry point (mounts React, imports fonts/i18n)
└── types.ts                 # Shared types
```

Each component ships with its own `Component.module.scss` file — CSS
Modules, no styling framework.

## 🌍 Internationalization (i18n)

The project supports **3 languages**: **Portuguese (pt)**, **English (en)**
and **Spanish (es)**, with **Portuguese as the default/fallback language**
(the primary target audience is Brazilian).

### How it works

1. **Library**: internationalization is handled with `i18next` +
   `react-i18next`. All configuration lives in
   [`src/i18n/config.ts`](src/i18n/config.ts), which is imported once in
   [`src/main.tsx`](src/main.tsx), before `<App />` is rendered.

2. **Translation files**: each language has its own JSON file in
   `src/i18n/locales/` (`pt.json`, `en.json`, `es.json`), sharing the same
   keys nested by section (`hero.title`, `services.eyebrow`,
   `footer.rights`, etc.). All three are loaded as i18next resources at
   startup — there's no async/lazy language loading.

3. **Usage in components**: every component that renders text uses the
   `useTranslation()` hook from `react-i18next` and looks up strings by
   key, e.g.:

   ```tsx
   const { t } = useTranslation()
   <h1>{t('hero.title')}</h1>
   ```

   There's no hardcoded Portuguese text in components — every user-facing
   string comes from the translation dictionaries (code identifiers,
   comments, and commit messages stay in English, per usual convention).

4. **Automatic language detection**: the
   `i18next-browser-languagedetector` plugin detects the user's preferred
   language on first visit, in this priority order:
   - a language previously saved in `localStorage` (key `jadoo-language`);
   - the browser's language (`navigator.language`);
   - `pt` as the final fallback, if nothing else matches a supported
     language.

5. **Manual language switching**: the
   [`LanguageSwitcher`](src/components/ui/LanguageSwitcher/LanguageSwitcher.tsx)
   component, in the Header, shows a menu with the PT/EN/ES options
   (defined in [`src/data/languages.ts`](src/data/languages.ts)). Selecting
   a language calls `i18n.changeLanguage(...)`, which:
   - automatically re-renders every component using `useTranslation()`
     with the new language;
   - persists the choice to `localStorage`, so the selected language is
     remembered on future visits.

6. **Document sync**: a listener on i18next's `languageChanged` event (in
   `src/i18n/config.ts`) keeps `<html lang="...">` and the page
   `<title>`/`<meta name="description">` in sync with the active
   language — important for both SEO and assistive technology (screen
   readers).

7. **Interpolation**: the `escapeValue: false` option is used because React
   already escapes values by default, avoiding double-sanitization when
   interpolating variables into translation strings.

### Adding a new translatable string

1. Add the key and the Portuguese text to `src/i18n/locales/pt.json`.
2. Mirror the same key (translated) in `en.json` and `es.json`.
3. Use `t('your.key')` in the component.

### Adding a new language

1. Create `src/i18n/locales/<code>.json` with all existing keys translated.
2. Register the new language in `resources` and `supportedLanguages` in
   [`src/i18n/config.ts`](src/i18n/config.ts).
3. Add the matching entry to
   [`src/data/languages.ts`](src/data/languages.ts) so it shows up in the
   `LanguageSwitcher`.

## 🖼️ Images

Destination photos, testimonial avatars, and the hero image were downloaded
locally (not hotlinked) and optimized as `.webp` where possible, living in
`src/assets/images/`.

## 🎬 Animations

No animation library (Framer Motion, GSAP, AOS, etc.) is used — scroll
reveals and ambient motion are built with the Intersection Observer API and
plain CSS.

1. **Scroll detection**: [`src/hooks/useInView.ts`](src/hooks/useInView.ts)
   wraps `IntersectionObserver` in a hook that returns a `ref` and an
   `isInView` boolean, toggling both ways as an element enters/leaves the
   viewport (not just once), so section animations replay every time you
   scroll back to them.

2. **Reveal-on-scroll**: each section attaches `useInView` to its root and
   toggles an `.inView` modifier class. `src/styles/_mixins.scss` provides
   `reveal-hidden($direction, $distance)` (the resting/hidden state) and
   `reveal-visible($delay)` (the `@keyframes` entrance, triggered under
   `.inView`), with `up`, `down`, `left`, `right` and `pop` (scale-in)
   variants driven by a shared `--reveal-from` CSS custom property.

3. **Staggering**: the `stagger($count, $selector, $step)` mixin assigns
   incremental `animation-delay`s via `:nth-child`, so grids/lists (service
   cards, destination cards, trip steps, partner logos) cascade in item by
   item instead of appearing all at once.

4. **Ambient motion**: a few elements animate continuously regardless of
   scroll state — the hero illustration and its background blob gently
   float (`float($distance, $duration)` mixin), the newsletter's send icon
   drifts and tilts like a paper plane, and the partner logos scroll in an
   infinite marquee (duplicated list translated via `@keyframes`, paused on
   hover).

5. **CSS Modules caveat**: `@keyframes` names are scoped per file by CSS
   Modules, so a shared keyframe declared once in a global stylesheet gets
   hashed differently in every component that references it and never
   matches. `reveal-keyframes` / `float-keyframes` mixins are `@include`d
   once per `.module.scss` file that needs them, keeping the definition and
   its usage in the same file.

6. **Reduced motion**: `_reset.scss` shortens `animation-duration` globally
   for `prefers-reduced-motion: reduce`, which is enough for one-shot
   reveals but would turn an `infinite` loop into a rapid flicker instead of
   stopping it — the `reduce-motion()` mixin explicitly sets
   `animation: none` on ambient/infinite animations for those users.

## 🚀 Running locally

Prerequisite: [Node.js](https://nodejs.org/) installed.

```bash
# install dependencies
npm install

# start the dev server (with HMR)
npm run dev

# production build (type-check + build)
npm run build

# preview the production build
npm run preview

# run the linter (oxlint)
npm run lint
```

By default, `npm run dev` serves the app at `http://localhost:5173`.

## ♿ Accessibility and responsiveness

- **Mobile-first** layout, with breakpoints defined in
  `src/styles/_tokens.scss` and applied via the `respond()` mixin.
- Skip link to the main content, `aria-label`s on buttons/icons, focus
  management in the mobile menu and the language switcher.
- Respects `prefers-reduced-motion` for motion-sensitive users — one-shot
  reveal animations snap to their end state and ambient/infinite loops (see
  [Animations](#-animations)) are turned off outright.
- The partner logos marquee duplicates its list to loop seamlessly; the
  duplicate is `aria-hidden` so screen readers don't announce it twice.

## 📄 License

Personal portfolio project, non-commercial. Partner brand names (Skyloom,
Voyx, Aurora Air, Trippo, Meridian) are fictitious.
