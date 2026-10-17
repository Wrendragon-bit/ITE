---
name: The 6 Crusaders
description: Group portfolio for six ITE students at RUPP, a cinematic warm-black frame in crest red that puts the six people first.
colors:
  night: "#0b0609"
  ink: "#1d0b10"
  muted: "#6f5a61"
  mist: "#c9b3b9"
  red: "#e11d32"
  crimson: "#b3122c"
  coral: "#ff5c6c"
  ember: "#ff6a2b"
  amber: "#ffb547"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Kantumruy Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Kantumruy Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Kantumruy Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.7vw, 1.5rem)"
    fontWeight: 500
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Kantumruy Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Kantumruy Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  item:
    fontFamily: "Kantumruy Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
  label:
    fontFamily: "Kantumruy Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  pill: "999px"
  round: "50%"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  head-to-content: "clamp(3rem, 6vw, 5rem)"
  container: "75rem"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.75rem"
  nav-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.375rem 0.375rem 1.25rem"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1rem"
  member-card:
    textColor: "{colors.paper}"
    rounded: "{rounded.xl}"
    padding: "0 1.75rem 1.75rem"
  member-link-chip:
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.875rem"
  member-link-chip-hover:
    backgroundColor: "{colors.red}"
  member-link-chip-pro:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.875rem"
  step-name:
    backgroundColor: "{colors.paper}"
    typography: "{typography.item}"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1.25rem"
  writeup:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.xl}"
    padding: "clamp(1.75rem, 4vw, 3rem)"
  person-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.25rem"
---

# Design System: The 6 Crusaders

## Overview

**Creative North Star: "The Crest in Neon"**

The crew's first crest was a red neon ring on black, and the site is that sign switched on. Warm black sections carry light: a pleated fan of crimson-to-ember rays rising from a horizon in the hero, a column of glow over the crew heading, a red pool under the cards. White sections are the daylight read: soft-shadowed white rows and cards on plain white, quiet and legible. The layout is a user-pinned recreation of the NexaCore landing template (hirael, MIT), recolored from its original palette to the crest's reds.

The six members are the content. Everything else is a frame: one family (Kantumruy Pro) at medium weight, solid-color headings whose second line takes the accent, generous rounded containers, and light that answers the pointer without asking for attention. Density is low and calm; the page scrolls as a quick read, and depth lives below the fold in in-page write-ups rather than behind overlays.

Rejected by the build: gradient text, label lines stacked above headings, modal dialogs for project detail, and the particle-net, glass-card student template.

**Key Characteristics:**
- Alternating warm-black (light-filled) and white (soft-shadowed) bands.
- One typeface, Kantumruy Pro, weights 400 and 500; headings at 500 with negative tracking.
- Two-tone headings: a solid first line, a second line in the section's accent color.
- Red is light in dark bands and ink only for actions and focus.
- Every shareable unit (member card, shipped write-up) has its own address and lights up on `:target`.
- A year with no real milestones yet, or still ahead, reads as a dashed line and quieter text; a lived, filled year is solid.

## Colors

A warm-black and white base lit by one crest family of reds running from amber through ember to crimson.

### Primary
- **Signal Red** (`red`): the action and focus color. Fills the primary button, draws the 2px focus outline, highlights text selection, colors the scrollbar thumb, and is the hover fill of member link chips and the hover ink of contact links.

### Secondary
- **Crest Crimson** (`crimson`): the accent on white. Second line of white-section headings, the journey staircase rails and dot icons, the project links in the climb, the ring on the current year, the `:target` ring on a write-up.
- **Neon Coral** (`coral`): the accent on dark. Second line of the crew heading and the ring bullets on member facts. Crimson and coral are the same role at two lightnesses; pick by background, never mix.

### Tertiary
- **Ember** (`ember`) and **Amber** (`amber`): crest light only. They appear inside gradients (the button's gradient edge, the hero light fan, the turning crest ring, the brand-mark ring), never as flat fills or text.

### Neutral
- **Warm Night** (`night`): the dark band background (hero, crew, footer) and the page canvas behind everything.
- **Oxblood Ink** (`ink`): primary text on white.
- **Dusk Muted** (`muted`): secondary text on white, section intros, contact numbers, the names under each milestone, and the quieter text of open years.
- **Rose Mist** (`mist`): secondary text on dark: hero line, crew intro, member roles, footer.
- **Paper** (`paper`): white sections, the nav pill, cards and rows on white.

### Named Rules
**The Red Means Act Rule.** Signal Red as a flat fill or text color is reserved for actions, focus and selection. In dark bands red may glow as light (radial pools, the crest ring); that is illumination, not ink, and never sits under text as a fill.

**The Accent By Ground Rule.** On white the accent is Crest Crimson; on night it is Neon Coral. A heading's second line takes the accent for its ground.

## Typography

**Display Font:** Kantumruy Pro (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Kantumruy Pro, same stack

**Character:** A Cambodian-designed family covering Latin and Khmer, set at medium weight with tight negative tracking for headings and open 1.55 leading for reading. One family carries the whole system; hierarchy comes from size and tracking, not from a second face.

### Hierarchy
- **Display** (500, clamp 2.5rem to 6rem, line-height 1, tracking -0.035em): the hero name only.
- **Headline** (500, clamp 2rem to 3.5rem, line-height 1.14, tracking -0.025em, balanced wrap): section headings, two lines, the second in the accent color.
- **Title** (500, clamp 1.25rem to 1.5rem, tracking -0.01em): member names; write-up titles step up to clamp 1.5rem to 2rem at tracking -0.02em.
- **Lead** (400, clamp 1rem to 1.2rem, pretty wrap): the one paragraph under a section heading, in Muted or Mist. Max 40 to 50rem measure.
- **Body** (400, 1rem, line-height 1.55): running text.
- **Item** (500, 1.0625rem): names inside rows and pills (step names, contact names, menu links).
- **Label** (400, 0.9375rem): roles, facts, nav links, contact lines (tabular numerals for phone numbers), footer. Chips drop to 0.875rem.

### Named Rules
**The Solid Heading Rule.** Headings are solid color. No gradient text, ever; color variation inside a heading is a whole-line accent span.

**The Heading Stands Alone Rule.** No eyebrow, kicker or small label above a heading. A section opens with its headline and, at most, one lead paragraph below it.

## Layout

Full-bleed bands, each centering its content in a 75rem container (contact widens to 82rem for its three-column crest layout). Section heads are centered, max 50rem, 1.25rem gap between headline and lead; content follows at `head-to-content`. Band padding is fluid (roughly clamp 4 to 9rem block), with 1rem inline gutters.

- **Hero:** full viewport height (100svh), copy centered and nudged up 4vh; the light fan fills below a horizon at 62%.
- **Crew grid:** 3 columns, 1rem gap. Each card spans two rows of a shared subgrid (photo row, text row) so names align across a row however many links a card carries. 2 columns under 64rem, 1 column under 40rem.
- **Staircase:** 4 columns sharing two rows (name, rail) through subgrid, so every rail is as long as the longest; each step is lifted 3 more units (`--u` = min(1vw, 14px)) than the last with `translate`, over a generated ribbon. 2 columns and no ribbon under 48rem, 1 column under 40rem.
- **Write-up parts:** auto-fit grid, min 16rem columns, 1.5rem by 2rem gaps.
- **Contact:** people, crest, people (1fr, clamp 13 to 21rem, 1fr); the crest moves to the top under 64rem; single column under 40rem.
- **Breakpoints:** 64rem, 48rem (nav collapses to a popover menu), 40rem.
- Anchored scrolling is smooth with a 6rem scroll padding for the fixed nav.

## Elevation & Depth

A hybrid. White sections lift with one soft, warm, two-layer shadow; dark sections have no shadows and get depth from light instead (radial glows, grain, the light fan). Only floating chrome (nav pill, menu) gets a stronger, darker drop shadow.

### Shadow Vocabulary
- **Soft lift** (`--soft-shadow`: `0 3px 9px rgb(90 20 35 / .05), 0 1px 29px rgb(90 20 35 / .1)`): every white-on-white container: step names, contact rows, write-ups.
- **Floating chrome** (`0 12px 32px -12px rgb(20 5 10 / .45), 0 2px 6px rgb(20 5 10 / .08)` on the nav bar; `0 24px 48px -16px rgb(20 5 10 / .5)` on the menu): fixed elements above content.
- **Hairline rim** (`0 0 0 1px rgb(255 255 255 / .07)`): member cards at rest on night.
- **Red rim and glow** (`0 0 0 1px rgb(255 64 83 / .6), 0 24px 60px -18px rgb(225 29 50 / .6)`): member card on hover, focus-within or target.

### Named Rules
**The Light Not Shadow Rule.** On night, depth is light: glows, rims and grain. Drop shadows belong to white sections and floating chrome.

**The Depth In Page Rule.** Detail lives in the page, in an addressable write-up below the summary. No modals or overlays for content; the only popover is the mobile nav menu.

## Shapes

Soft, generous corners that grow with the container: 0.75rem on buttons, nav links and menu items; 1rem on the nav pill and menu; 1.125 to 1.25rem on rows and step pills; 2rem on member cards and write-ups (1.5rem on phones). Fully round for link chips, avatars and the crest. Lines are 1.5px: staircase rails, the current-year ring, the write-up `:target` ring, fact-ring bullets. The site has no square corners and no hard borders on solid containers.

### Named Rules
**The Line Form Rule.** A year with no real milestones yet, or one still ahead, is drawn as a dashed rail with Muted text and no link or call to action. A lived year with real milestones is a solid rail in full ink, and only a real project line links to a write-up. Filling a year means switching it from dashed to solid, nothing else.

## Components

### Buttons
Confident and warm: a red fill over a 1px gradient edge.
- **Shape:** gently rounded (0.75rem).
- **Primary:** Signal Red fill, white 500-weight text, 0.75rem by 1.75rem padding. The fill is an inset layer over an ember-to-red-to-wine gradient, so a 1px gradient edge rims it.
- **Hover / Focus:** the red fill fades out over 0.3s, revealing the full gradient; focus gets the global 2px red outline at 3px offset.
- **Compact (under 48rem, in the nav):** 0.55rem by 1rem, 0.9375rem text.

### Chips
- **Member link chips:** pill-shaped, 12% white on the dark card, white 0.875rem text; hover fills Signal Red.
- **Professional link chip** (`.pro`): the same pill in solid Paper with Ink text, first in a member's links, for LinkedIn, GitHub or a CV; hover fills Signal Red with white text. Only for a link the member supplied.

### Cards / Containers
- **Member card:** 2rem corners, grayscale darkened photo (brightness .72) under a night-to-transparent scrim, text on the lower subgrid row, hairline rim. On hover, focus-within or `:target`, the photo warms to full color and scales 1.04 over 0.9s, the name rises 0.25rem, and the red rim and glow appear. On touch devices photos show in color at rest.
- **Write-up:** white, 2rem corners, soft lift, fluid padding (1.75 to 3rem). Six parts in a grid whose headings follow the project (problem, approach, results for original work; starting point, what we added for coursework built on a course), then stack, team, links. Each carries a descriptive id (`#oceaneye`) and takes a 1.5px crimson ring on `:target`. Write-ups run newest first, 1rem apart. Links inside are underlined and turn red on hover.
- **Person row (contact):** white, 1.125rem corners, soft lift, 2.75rem round avatar cropped to the face via `--fx`, `--fy`, `--zoom`; name in Item, numbers and email in Label Muted with tabular numerals; links underline and turn red on hover.

### Navigation
- **Style:** a floating white pill (1rem corners, floating chrome shadow) fixed 1rem from the top, max 72rem. Brand mark (gradient ring with a 6) and wordmark left, links center, red Contact button right.
- **Scrolled:** past 20px the pill narrows to 48rem and tightens link padding over 0.5s.
- **Links:** 0.9375rem, 0.75rem corners; hover is a 5% ink wash.
- **Mobile (under 48rem):** links hide; a 2.75rem menu toggle opens a native popover menu (white, 1rem corners, 1.0625rem links) that closes when a link is picked.

### Journey Staircase
One step per year of the degree, Year 1 to Year 4, rising left to right over a generated crest-colored ribbon. Each step: a white pill name with a crimson dot icon, then a 1.5px crimson rail of milestones. A milestone is a crimson project link whose arrow nudges 0.25rem right on hover (it points at the project's write-up), a plain line saying what happened, and who did it in Label Muted, each crew name underlined and linking to that member's card. The current year's pill reads "Year 3 · now" and takes a 1.5px crimson ring. Open years use the dashed rail and Muted text.

### Hero Light Fan
A pleated conic fan of uneven luminance bands multiplied by the crest gradient (amber, ember, reds, wine, violet), masked to a half-fan below a horizon at 62%, swaying ±1.5deg over 16s. Side glows drift and the fan rotates up to 3deg with the pointer (fine pointers only), easing over 1.4s on `cubic-bezier(.16, 1, .3, 1)`. Film grain at 8% overlay prevents banding. All motion stops under reduced-motion.

### Crest
The crew's profile mark (`image/crest.png`): a white emblem of six rings and the wordmark "Crusader" on a black disc, cropped round from the members' 500px export. A soft red drop shadow and a 1.5px ring of crest colors turning once every 18s tie it to the reds. It is also the favicon.

## Do's and Don'ts

### Do:
- **Do** keep Signal Red for actions, focus and selection; let reds appear in dark bands only as light.
- **Do** write headings in solid color, with the second line in Crest Crimson on white or Neon Coral on night.
- **Do** give every shareable unit an id and a `:target` state (member cards light up red, write-ups take a crimson ring).
- **Do** draw open years dashed with Muted text, and switch them to solid when real milestones land.
- **Do** put project depth in an in-page write-up linked from its milestone.
- **Do** use the soft lift shadow for white containers and light (glows, rims) for depth on night.
- **Do** keep all motion under `prefers-reduced-motion: reduce` switched off.

### Don't:
- **Don't** use gradient text in headings or anywhere else.
- **Don't** put an eyebrow, kicker or small label above a heading.
- **Don't** use Signal Red as a decorative fill, text color or background behind text outside actions and focus.
- **Don't** use modals or overlay dialogs for content.
- **Don't** add a second typeface or weights above 500 in running UI.
- **Don't** use Ember or Amber as flat fills or text; they live inside gradients.
- **Don't** invent projects, milestones, clients or metrics to fill a year; an open year stays dashed until it is real.
