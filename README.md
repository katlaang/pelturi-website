# Pestscan Website — React Native / Expo

A cross-platform marketing website for Pestscan built with React Native + Expo Router.
Runs on iOS, Android, and Web from a single codebase.

---

## Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI  (`npm install -g expo-cli`)  — optional but useful

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2a. Run on web (easiest to preview the website)
npm run web

# 2b. Run on iOS simulator (requires Xcode on macOS)
npm run ios

# 2c. Run on Android emulator
npm run android

# 2d. Scan QR code with Expo Go on your physical device
npm start
```

---

## Project structure

```
pestscan-website/
├── app/
│   ├── _layout.tsx          ← Expo Router root layout (required)
│   └── index.tsx            ← Main page — composes all sections
├── components/
│   ├── Nav.tsx              ← Sticky nav with mobile hamburger
│   ├── Hero.tsx             ← Crossfade hero carousel
│   ├── Strip.tsx            ← Green stats strip
│   ├── Features.tsx         ← 6-cell feature grid
│   ├── SplitSection.tsx     ← Alternating image + text rows
│   ├── Platform.tsx         ← EOAF™ four-pillar section
│   ├── Pricing.tsx          ← Three-plan pricing cards
│   ├── Contact.tsx          ← Contact form with custom dropdown
│   └── Footer.tsx           ← Footer links
├── constants/
│   └── theme.ts             ← Colours, copy data, all arrays
├── assets/
│   └── README.md            ← Instructions for icon/splash images
├── app.json
├── babel.config.js
├── tsconfig.json
├── expo-env.d.ts
└── package.json
```

---

## Swapping in your own images

The hero carousel and split sections currently use Unsplash URLs.
To use your local farm photos:

1. Copy your images to `assets/images/`
2. Replace the `uri` strings in `constants/theme.ts`:

```ts
// Before
uri: 'https://images.unsplash.com/...'

// After
image: require('../assets/images/field-rows.jpg')
```

3. Change `source={{ uri: slide.uri }}` to `source={slide.image}` in `Hero.tsx`
   and likewise in `SplitSection.tsx`.

---

## Deploying the web version

```bash
# Build a static web export
npx expo export --platform web

# Output lands in dist/
# Deploy dist/ to Vercel, Netlify, S3, etc.
```

For Vercel:
```bash
npm install -g vercel
vercel --prod
```

---

## Tech stack

| Layer       | Library                    |
|-------------|----------------------------|
| Framework   | React Native 0.76          |
| Routing     | Expo Router 4              |
| Animations  | React Native Animated API  |
| Navigation  | ScrollView + layout offsets|
| Types       | TypeScript 5               |
| Build       | Expo SDK 52                |

---

## Notes

- Nav is `position: sticky` on web via `Platform.select`.
- Scroll-to-section works by capturing `onLayout` y-offsets on each section wrapper.
- Hero crossfade uses one `Animated.Value` per slide — no libraries needed.
- All data (copy, colours, plans, features) lives in `constants/theme.ts` — easy to edit.
