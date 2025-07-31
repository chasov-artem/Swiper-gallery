# Swiper Gallery Theme

Shopify тема з Swiper-галереєю та фільтрацією за кольором для сторінок продуктів.

## Функціональність

### 1. Swiper-галерея з налаштуваннями
- **Кількість слайдів** для різних пристроїв (ПК, планшет, мобільний)
- **Пагінація** - можна увімкнути/вимкнути
- **Навігаційні стрілки** - можна увімкнути/вимкнути
- **Відступ між слайдами** - налаштовується через schema

### 2. Фільтрація за кольором
- Фільтрація фотографій продукту за варіантом кольору
- Робота без перезавантаження сторінки
- Підтримка 3-4 фотографій для кожного кольору

### 3. Динамічний Accordion (бонус)
- Контент з метафілдів продукту
- Налаштування кількості відкритих елементів
- Перевірка наявності контенту

## Встановлення

### 1. Встановлення Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
```

### 2. Клонування теми
```bash
git clone <repository-url>
cd Swiper-gallery
```

### 3. Запуск dev-сервера
```bash
shopify theme dev
```

## Налаштування

### Schema налаштування галереї
В адмін-панелі Shopify можна налаштувати:
- **Slides per view (Desktop)** - 1-4 слайди
- **Slides per view (Tablet)** - 1-3 слайди  
- **Slides per view (Mobile)** - 1-2 слайди
- **Show pagination dots** - увімкнути/вимкнути
- **Show navigation arrows** - увімкнути/вимкнути
- **Gap between slides** - 0-50px

### Метафілди для Accordion
Створіть наступні метафілди для продукту:
- `accordion_title_1` (text) - заголовок першого елемента
- `accordion_content_1` (richtext) - контент першого елемента
- `accordion_title_2` (text) - заголовок другого елемента
- `accordion_content_2` (richtext) - контент другого елемента
- `accordion_title_3` (text) - заголовок третього елемента
- `accordion_content_3` (richtext) - контент третього елемента
- `accordion_multiple` (boolean) - дозволити кілька відкритих елементів

### Налаштування зображень
Для правильної роботи фільтрації за кольором:
1. Завантажте 3-4 фотографії для кожного кольору
2. В alt-тексті зображення вкажіть колір (наприклад: "red product", "blue product")
3. Створіть варіанти продукту з кольорами

## Структура файлів

```
├── layout/
│   └── theme.liquid
├── templates/
│   ├── product.liquid
│   └── product.json
├── sections/
│   └── product-gallery.liquid
├── snippets/
│   ├── product-gallery.liquid
│   └── product-accordion.liquid
├── assets/
│   ├── theme.css
│   └── theme.js
└── config/
    ├── settings_schema.json
    └── settings_data.json
```

## Технології

- **HTML + Liquid** - шаблони
- **CSS** - стилізація
- **JavaScript** - інтерактивність
- **Swiper.js** - галерея
- **Shopify CLI** - розробка

## Ліцензія

MIT License