# universal-screen-mapper

an offline web tool designed to map out physical screen cracks, dead pixels, and matrix defects. it lets you trace damage paths on an html5 canvas, scale those coordinates to match any real screen resolution, and export the resulting vector outline as json or csv.

try the tool here: https://waydef.github.io/universal-screen-mapper/

## features

- resolution options: presets for 16:9 monitors, ultrawides (21:9, 32:9), and common phone screens, with an option to enter custom dimensions.
- 1:1 coordinate mapping: translates canvas clicks to the actual screen pixels, so the coordinates stay accurate no matter your browser window size.
- snap to close: automatically closes the drawing path when you click within 16 pixels of the starting point.
- formats: copy the coordinates to your clipboard as a json array or download the data in csv format.
- client side only: built with plain css and javascript. it requires no external libraries and works completely offline.

## how to run

just open index.html in a web browser. no setup or local server is needed.
