# universal-screen-mapper

an offline web tool designed to map out physical screen cracks, dead pixels, and matrix defects. trace damage paths on an html5 canvas, scale those coordinates to match any real screen resolution, and export the resulting vector outline as json or csv.

live tool: https://waydef.github.io/universal-screen-mapper/

## features

- resolution options: presets for 16:9 monitors, ultrawides (21:9, 32:9), and common phone screens, plus custom aspect inputs.
- 1:1 coordinate mapping: translates canvas clicks to actual screen pixels, keeping coordinates accurate regardless of browser window size.
- snap to close: closes the drawing path automatically when clicking within 16 pixels of the start point.
- export formats: copy coordinates to clipboard as a json array or download as csv.
- client side only: built with plain css and vanilla javascript. no external libraries, works offline.

## how to run

open index.html in any modern web browser. no setup or local server needed.

## кратко на русском

офлайн-инструмент на чистом canvas и ванильном js для оцифровки трещин экрана, битых пикселей и дефектов матриц. позволяет размечать повреждения, масштабировать координаты под реальное разрешение экрана и экспортировать контур в json или csv. страница доступна по адресу https://waydef.github.io/universal-screen-mapper/
