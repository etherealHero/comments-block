# Компонент комментариев

lang [RU][home_ru] | [EN][home_en]

## 🚀 Технологии

- HTML x [SCSS][link0]
- [Yandex BEM][link1]
- JavaScript & [DOM API][link2]

## 📋 Описание

Этот репозиторий содержит блок комментариев реализованный через Document Object Model API. [**Онлайн просмотр**][preview]

![asset0]

### 📌 Функционал

- Добавление / удаление комментариев
- Реакция на комментарии

## 🏁 Точка входа

Главный файл для запуска приложения — `index.html`, который находится в корне проекта.

## 📂 Структура проекта

```plaintext
style/
  styles.css
  styles.scss
img/
  logo.png
index.html
script.js
```

## 📝 TODO

- [x] Использовать методологию БЭМ в связке с SCSS
- [x] форма добавления комментария
  - [x] имя
  - [x] текст
  - [x] возможность указать дату (если не задано, то текущая дата)
  - [x] срабатывает на Enter тоже
  - [x] валидация (когда начинаем печатать ошибка исчезает)
- [x] кнопка отправки
- [x] список комментариев, в комментарии:
  - [x] имя
  - [x] текст
  - [x] дата, время добавления
  - [x] сегодня\вчера 
  - [x] кнопка удаления комментария
  - [x] лайк на комментарий

> [!TIP]
> [Markdown UI kit][md_ui_kit] for README.md

## 📜 Лицензия

Этот проект лицензирован на условиях лицензии MIT. Подробности смотрите в [LICENSE][license].

<!-- navigation -->

[home_ru]: README.md
[home_en]: README.en.md
[license]: /LICENSE
[preview]: https://etherealhero.github.io/comments-block/
[md_ui_kit]: https://gist.github.com/etherealHero/ffe9de043f3c2639e864b4fddec8e9e4
[link0]: https://sass-scss.ru/
[link1]: https://ru.bem.info/
[link2]: https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model
[link3]: #
[link4]: #
[link5]: #

<!-- assets -->

[asset0]: assets/preview.jpg "Preview"
[asset1]: /path.png "label on hover"
[asset2]: /path.png "label on hover"
[asset3]: /path.png "label on hover"
[asset4]: /path.png "label on hover"
[asset5]: /path.png "label on hover"
