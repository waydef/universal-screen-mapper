# universal-screen-mapper

простой локальный инструмент для оцифровки физических трещин экрана, битых пикселей и дефектов матриц. написан на чистом HTML5 Canvas и ванильном JS. позволяет рисовать свободные контуры повреждений, масштабировать координаты под любое реальное разрешение дисплея и выгружать векторную сетку в JSON или CSV.

## фичи

- пропорции и пресеты: готовые сетки для стандартных мониторов (16:9), ультрашироких (21:9, 32:9) и экранов смартфонов (19.5:9, 20:9) + возможность задать разрешение вручную.
- точное масштабирование: переводит физические координаты кликов на холсте в виртуальные пиксели выбранного разрешения. разметка повреждений получается пиксель-в-пиксель (1:1) вне зависимости от размера окна браузера.
- автозамыкание контуров: автоматически стягивает линию в полигон при клике в радиусе 16 пикселей от начальной точки.
- быстрый экспорт: копирование готового массива координат в JSON в один клик или скачивание таблицы CSV.
- полная автономность: никаких внешних библиотек и фреймворков. работает полностью офлайн.

## запуск и деплой

1. локально: просто открой `index.html` в любом браузере.
2. на github pages: в настройках репозитория (`settings -> pages`) укажи источником ветку `main`, корневую папку и нажми `save`.

---

# universal-screen-mapper (in english)

offline web tool for mapping physical screen cracks, dead pixels, and matrix defects. built on HTML5 Canvas and vanilla JS. lets you draw custom vector paths, scale coordinates to match any display's aspect ratio/resolution, and export vector coordinates as JSON or CSV.

## features

- aspect ratios: presets for standard monitors (16:9), ultrawides (21:9, 32:9), and phones (19.5:9, 20:9), plus manual resolution input.
- pixel-perfect scaling: translates physical canvas coordinates to exact virtual pixels, keeping the damage mapping 1:1 regardless of browser window size.
- auto-closing paths: automatically snaps and closes polygon path when clicking close to the starting point (within 16px).
- exports: one-click copy of coordinates as JSON or download as CSV.
- no dependencies: pure css/js, offline-first.

## running and deployment

1. locally: open `index.html` in any browser.
2. github pages: in repository settings -> pages, set source to `deploy from a branch`, select `main` branch, root folder, and save.
