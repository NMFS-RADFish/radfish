---
sidebar_position: 8
title: Theming (Preview)
---

:::note[Preview]
Theme support is currently in preview. The API and directory structure may change in future releases.
:::

This guide explains how to customize the look and feel of your RADFish application using the RADFish theme plugin, USWDS design tokens, and SCSS.

## Quick Start

All theme customization happens in a single file:

```
themes/noaa-theme/styles/theme.scss
```

This file contains three sections:

1. **USWDS Token Variables** -- SCSS `$variables` that configure USWDS design system colors
2. **CSS Custom Properties** -- Additional agency-specific CSS variables (`:root { --noaa-* }`)
3. **Component Overrides** -- Custom styles for USWDS and RADFish components

After editing `theme.scss`, save the file. The dev server detects changes and automatically recompiles.

## How It Works

The RADFish theme plugin (`vite-plugin-radfish-theme`) runs at build time and during development:

1. **Parses `theme.scss`** and extracts SCSS `$variables` for USWDS configuration
2. **Pre-compiles USWDS** with your color tokens into a static CSS file (with MD5-based caching)
3. **Compiles `theme.scss`** to CSS for custom properties and component overrides
4. **Injects CSS** into your app via `<link>` tags in `index.html`
5. **Generates `manifest.json`** with your app name, description, and theme colors
6. **Watches for changes** and auto-recompiles on save during development

### Directory Structure

```
themes/noaa-theme/
├── assets/                    # Icons and logos
│   ├── logo.png              # Header logo
│   ├── favicon.ico           # Browser favicon
│   └── icon-512.png          # PWA icon (any + maskable)
└── styles/
    └── theme.scss            # All theme configuration (edit this)

node_modules/.cache/radfish-theme/noaa-theme/   # Auto-generated (don't edit)
├── _uswds-entry.scss         # Generated USWDS config
├── uswds-precompiled.css     # Compiled USWDS styles
├── theme.css                 # Compiled theme overrides
└── .uswds-cache.json         # Cache manifest
```

### CSS Load Order

Styles are loaded in this order, ensuring correct CSS cascade:

1. **`uswds-precompiled.css`** -- USWDS compiled with your color tokens
2. **`theme.css`** -- Your CSS custom properties and component overrides from `theme.scss`
3. **`src/styles/style.css`** -- Your application-specific page and layout styles

## USWDS Token Variables

At the top of `theme.scss`, define SCSS variables that configure the USWDS design system. These variables are extracted by the plugin and passed to USWDS via `@use "uswds-core"`. They don't produce CSS output directly -- they configure the design system's color palette.

```scss
// themes/noaa-theme/styles/theme.scss

// Primary colors
$primary: #0055a4;
$primary-dark: #00467f;
$primary-light: #59b9e0;

// Secondary colors
$secondary: #007eb5;
$secondary-dark: #006a99;

// State colors
$error: #d02c2f;
$success: #4c9c2e;
$warning: #ff8300;
$info: #1ecad3;

// Base/neutral colors
$base-lightest: #ffffff;
$base-lighter: #e8e8e8;
$base: #71767a;
$base-darkest: #333333;
```

### Available Tokens

| Category | Tokens |
|----------|--------|
| **Base** | `base-lightest`, `base-lighter`, `base-light`, `base`, `base-dark`, `base-darker`, `base-darkest` |
| **Primary** | `primary-lighter`, `primary-light`, `primary`, `primary-vivid`, `primary-dark`, `primary-darker` |
| **Secondary** | `secondary-lighter`, `secondary-light`, `secondary`, `secondary-vivid`, `secondary-dark`, `secondary-darker` |
| **Accent Cool** | `accent-cool-lighter`, `accent-cool-light`, `accent-cool`, `accent-cool-dark`, `accent-cool-darker` |
| **Accent Warm** | `accent-warm-lighter`, `accent-warm-light`, `accent-warm`, `accent-warm-dark`, `accent-warm-darker` |
| **State** | `info`, `error`, `warning`, `success` (each with `-lighter`, `-light`, `-dark`, `-darker` variants) |
| **Disabled** | `disabled-light`, `disabled`, `disabled-dark` |

See [USWDS Color Theme Tokens](https://designsystem.digital.gov/design-tokens/color/theme-tokens/) for the complete list.

## CSS Custom Properties

Below the USWDS tokens in `theme.scss`, add a `:root` block with CSS custom properties for agency-specific colors that go beyond what USWDS provides:

```scss
// themes/noaa-theme/styles/theme.scss

:root {
  // Brand colors
  --noaa-process-blue: #0093D0;
  --noaa-reflex-blue: #0055A4;

  // Regional colors
  --noaa-region-alaska: #FF8300;
  --noaa-region-west-coast: #4C9C2E;
  --noaa-region-southeast: #B2292E;
}
```

Use these anywhere in your application CSS:

```css
.region-badge--alaska {
  background-color: var(--noaa-region-alaska);
}
```

### Auto-Generated Variables

The plugin also auto-generates `--radfish-color-*` CSS variables from your USWDS token values. These are injected into `:root` via `index.html` and available throughout your app:

- `--radfish-color-primary`
- `--radfish-color-primary-dark`
- `--radfish-color-secondary`
- `--radfish-color-error`
- `--radfish-color-success`
- `--radfish-color-warning`
- `--radfish-color-info`
- `--radfish-color-base-lightest`
- etc.

Every USWDS token you define in Section 1 gets a corresponding `--radfish-color-*` variable. Use these in component overrides and application styles for consistency:

```css
.my-component {
  border-left: 4px solid var(--radfish-color-primary);
  background: var(--radfish-color-base-lightest);
}
```

## Component Overrides

At the bottom of `theme.scss`, add custom CSS to override USWDS and RADFish component styles. You can reference both your custom properties and the auto-generated `--radfish-color-*` variables:

```scss
// themes/noaa-theme/styles/theme.scss

/* Header background */
header.usa-header {
  background-color: var(--radfish-color-primary);
}

/* Custom button styles */
.usa-button {
  border-radius: 8px;
  font-weight: 600;
}

/* Custom card styles */
.usa-card {
  border-color: #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Available USWDS Components

| Category | Classes |
|----------|---------|
| **Layout & Navigation** | `usa-header`, `usa-footer`, `usa-sidenav`, `usa-breadcrumb`, `usa-banner` |
| **Forms & Inputs** | `usa-button`, `usa-input`, `usa-checkbox`, `usa-radio`, `usa-select`, `usa-form` |
| **Content & Display** | `usa-card`, `usa-alert`, `usa-table`, `usa-list`, `usa-accordion`, `usa-tag` |
| **Interactive** | `usa-modal`, `usa-tooltip`, `usa-pagination` |

See the full list at [USWDS Components](https://designsystem.digital.gov/components/).

## Application Styles

For page-level and layout styles that are specific to your application (not theme configuration), use:

```
src/styles/style.css
```

This file is loaded after theme styles, so you can override anything:

```css
/* src/styles/style.css */

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.fish-data-card {
  background: var(--radfish-color-base-lightest);
  border: 1px solid #ddd;
  padding: 1.5rem;
}
```

:::tip
Keep theme colors and component overrides in `theme.scss`. Use `src/styles/style.css` only for page layouts and app-specific components.
:::

## Configuration

### App Metadata

In `vite.config.js`, configure the app name and description via the plugin's second argument:

```javascript
import { radFishThemePlugin } from "./plugins/vite-plugin-radfish-theme.js";

const configOverrides = {
  app: {
    name: "My App Name",
    shortName: "MyApp",
    description: "App description for PWA",
  },
};

radFishThemePlugin("noaa-theme", configOverrides)
```

The first argument is the theme folder name under `themes/`.

### Environment Variables

The plugin exposes values as `import.meta.env.RADFISH_*` constants, available in your React components:

| Variable | Description |
|----------|-------------|
| `import.meta.env.RADFISH_APP_NAME` | Full app name |
| `import.meta.env.RADFISH_SHORT_NAME` | Short name (used in PWA) |
| `import.meta.env.RADFISH_DESCRIPTION` | App description |
| `import.meta.env.RADFISH_LOGO` | Path to header logo |
| `import.meta.env.RADFISH_FAVICON` | Path to favicon |
| `import.meta.env.RADFISH_PRIMARY_COLOR` | Primary theme color |
| `import.meta.env.RADFISH_SECONDARY_COLOR` | Secondary theme color |
| `import.meta.env.RADFISH_THEME_COLOR` | PWA manifest theme color |
| `import.meta.env.RADFISH_BG_COLOR` | PWA manifest background color |

Example usage in a component:

```jsx
<img
  src={import.meta.env.RADFISH_LOGO}
  alt={import.meta.env.RADFISH_APP_NAME}
/>
```

## Changing Assets

Replace files in `themes/noaa-theme/assets/` to customize branding. Keep the same filenames:

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `logo.png` | Header logo | Height ~48-72px |
| `favicon.ico` | Browser tab icon | 64x64, 32x32, 16x16 |
| `icon-512.png` | PWA icon/splash | 512x512 |

In development, assets are served from the theme directory. On build, they are copied to `dist/icons/`.

## Creating a New Theme

1. Create the theme folder structure:

   ```bash
   mkdir -p themes/my-agency/assets themes/my-agency/styles
   ```

2. Add your brand assets to `themes/my-agency/assets/`:
   - `logo.png`, `favicon.ico`, `icon-512.png`

3. Copy and customize the theme file:

   ```bash
   cp themes/noaa-theme/styles/theme.scss themes/my-agency/styles/
   ```

4. Edit `themes/my-agency/styles/theme.scss` with your agency's colors and overrides.

5. Update `vite.config.js` to use the new theme:

   ```javascript
   radFishThemePlugin("my-agency", {
     app: { name: "My Agency App" }
   })
   ```

6. Restart the dev server.

## Troubleshooting

### Changes not appearing?

- Save `theme.scss` -- the dev server auto-restarts on changes
- Clear browser cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Restart dev server: `npm start`

### Styles not applying?

- Check CSS specificity -- you may need more specific selectors
- Inspect element in DevTools to see which styles are being applied
- Ensure your selectors match USWDS class names exactly

### Cache issues?

Delete the cache folder and restart:

```bash
rm -rf node_modules/.cache/radfish-theme
npm start
```

## Resources

- [USWDS Design System](https://designsystem.digital.gov/)
- [USWDS Design Tokens](https://designsystem.digital.gov/design-tokens/)
- [USWDS Components](https://designsystem.digital.gov/components/)
- [React USWDS (Trussworks)](https://trussworks.github.io/react-uswds/)
