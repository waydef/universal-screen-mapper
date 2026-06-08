# universal-screen-mapper

Offline web tool for mapping physical screen cracks, dead pixels, and matrix defects. Built on HTML5 Canvas and vanilla JS. Lets you draw custom vector paths, scale coordinates to match any display's aspect ratio/resolution, and export vector coordinates as JSON or CSV.

Check out the live page at https://waydef.github.io/universal-screen-mapper/

## features

- aspect ratios: presets for standard monitors (16:9), ultrawides (21:9, 32:9), and phones (19.5:9, 20:9), plus manual resolution input.
- pixel-perfect scaling: translates physical canvas coordinates to exact virtual pixels, keeping the damage mapping 1:1 regardless of browser window size.
- auto-closing paths: automatically snaps and closes polygon path when clicking close to the starting point (within 16px).
- exports: one-click copy of coordinates as JSON or download as CSV.
- no dependencies: pure CSS/JS, offline-first.

## running and deployment

1. locally: open `index.html` in any browser.
2. github pages: in repository settings -> pages, set source to "deploy from a branch", select "main" branch, root folder, and save.
