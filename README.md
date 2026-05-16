# 🎯 Universal Screen Defect & Crack Mapper

[English](#english) | [Русский](#русский)

---

## English

A premium, highly interactive, and responsive web application designed for mapping screen defects, dead pixel clusters, and physical display cracks across any device—from mobile phones to massive ultrawide desktop monitors. 

Built using pure, high-performance vanilla JavaScript and standard HTML5 Canvas with a futuristic, cyber-inspired dark glassmorphic UI.

### 💎 Key Features
- **🌐 Device Agnostic:** Built-in resolution presets for any screens:
  - **Monitors:** 16:9 Standard, 21:9 UltraWide, 32:9 Super UltraWide.
  - **Smartphones & Tablets:** 19.5:9 (bezel-less phones), 20:9 (modern androids), 16:9 Classic, 4:3 Tablets.
  - **Custom Dimensions:** Input any custom resolution (width × height in pixels) manually to scale the virtual canvas dynamically.
- **🪢 Smart Vector Paths with Auto-Closing Loop:**
  - Standard polygon drawing mode.
  - **Auto-Closing:** Automatically snaps and closes the path when clicking near the starting point (within 16 physical pixels), or by clicking the "Close Loop" button.
  - **Neon Zone Highlighting:** Automatically fills completed defects with a semi-translucent neon-pink warning overlay (`rgba(255, 0, 127, 0.15)`) and a glowing red outline to visualize the exact screen damage area.
  - Supports drawing multiple independent damage zones on a single screen layout.
- **📱 True Fullscreen 1:1 Calibration Mode:**
  - Launch immersive desktop/mobile fullscreen to perform pixel-perfect mapping directly on your hardware display.
- **📥 Live Coordinate Logs & Export:**
  - An interactive live logs table tracking points, coordinates, and shape indexes.
  - One-click copy of standard JSON structure for AI or processing integrations.
  - Quick export to CSV for tabular data storage.
- **🚀 Ultra Lightweight:** Offline-first architecture, no heavy external JS libraries or styles, loads instantly.

---

## Русский

Премиальное высокотехнологичное веб-приложение для точного картирования повреждений дисплея, битых пикселей, слепых зон тачскрина и трещин матрицы на любых устройствах — от мобильных телефонов до сверхшироких мониторов.

Реализовано на чистом высокопроизводительном ванильном JavaScript и HTML5 Canvas в стиле упорядоченного киберпанк-неонового стекла (glassmorphism).

### 💎 Ключевые возможности
- **🌐 Универсальность пресетов:**
  - **Мониторы:** 16:9 (FullHD, 2K, 4K), 21:9 UltraWide (3440x1440), 32:9 Super UltraWide (5120x1440).
  - **Смартфоны:** 19.5:9 (безрамочные iPhone/Honor), 20:9 (современные Android), 16:9 Classic.
  - **Кастомные размеры:** Ручной ввод любого разрешения по ширине и высоте с мгновенным перерасчетом пропорций виртуального монитора.
- **🪢 Умные векторные контуры и автозамыкание:**
  - Стандартное пошаговое нанесение опорных точек.
  - **Автозамыкание:** Контур замыкается автоматически при клике вблизи стартовой точки (радиус 16 физических пикселей) или по кнопке «Замкнуть контур».
  - **Неоновая заливка зон повреждения:** Замкнутая область заполняется полупрозрачным неоново-коралловым цветом с пульсирующей обводкой, наглядно визуализируя границы поврежденного участка.
  - Поддержка создания неограниченного числа независимых контуров на одном экране.
- **📱 Режим 1:1 «На весь экран»:**
  - Запуск полноэкранного режима браузера для проведения пиксель-в-пиксель калибровки на физическом мониторе.
- **📥 Логирование и экспорт данных:**
  - Живая интерактивная таблица точек с номерами контуров.
  - Быстрый экспорт полной структуры разметки в формате JSON в один клик.
  - Экспорт таблицы координат в CSV-файл.

---

## 🛠️ Installation & Usage / Установка и запуск

### Local Run / Локальный запуск
1. Clone this repository or download the files.
2. Simply open `index.html` in any web browser.
---
1. Склонируйте репозиторий или скачайте файлы проекта.
2. Запустите файл `index.html` в любом браузере.

### Deploy to GitHub Pages / Деплой на GitHub Pages
1. Go to your repository settings on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Select `main` (or `master`) branch and `/root` folder, then click **Save**.
5. Your application will be live at `https://<your-username>.github.io/universal-screen-mapper/` in less than a minute!
