# universal-screen-mapper

simple web tool to map physical screen cracks, dead pixels and matrix defects. built on plain HTML5 Canvas and vanilla JS. allows drawing custom vector paths, scaling coordinates to match any monitor/device aspect ratio and resolution, and exporting vector coordinates as JSON or CSV.

## features

- aspect ratio support: presets for standard monitors (16:9), ultrawide (21:9, 32:9) and phones (19.5:9, 20:9), plus manual resolution input.
- scaling logic: translates physical canvas coordinates to exact virtual pixels so damage mapping is pixel-perfect (1:1).
- auto-closing paths: automatically snaps and closes polygon path when clicking close to the starting point (within 16px).
- exports: one-click copy of coordinates as JSON or download as CSV.
- no dependencies: pure css/js, offline-first.

## deployment

to deploy on github pages:
1. go to settings -> pages in your repository.
2. set source to `deploy from a branch`.
3. select `main` branch, root folder, and save.
4. page will be live at `https://<user>.github.io/universal-screen-mapper/`.

---

# universal-screen-mapper (на русском)

простой инструмент для оцифровки трещин экрана, битых пикселей и дефектов матриц. работает на чистом HTML5 Canvas и ванильном JS. позволяет рисовать контуры, масштабировать координаты под любое физическое разрешение экрана и выгружать данные в JSON или CSV.

## фичи

- поддержка пропорций: пресеты под мониторы (16:9, 21:9, 32:9) и смартфоны (19.5:9, 20:9) + ручной ввод разрешения.
- точный масштаб 1:1: переводит координаты клика в реальные пиксели выбранного разрешения для точной калибровки.
- автозамыкание: автоматически стягивает линию в полигон при клике ближе 16 пикселей от начала.
- экспорт: копирование структуры в JSON или скачивание CSV-файла.
- без зависимостей: чистый код, загружается мгновенно, работает офлайн.

## запуск и деплой

1. локально: просто открой `index.html` (в репозитории) в любом браузере.
2. на github pages: зайди в settings -> pages репозитория, выбери ветку `main` и нажми save.
