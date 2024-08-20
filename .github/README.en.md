# Comments Component

lang [RU][home_ru] | [EN][home_en]

## 🚀 Technologies

- HTML x [SCSS][link0]
- [Yandex BEM][link1]
- JavaScript & [DOM API][link2]

## 📋 Description

This repository contains a comment block implemented via the Document Object Model API. [Online preview][preview]

![asset0]

### 📌 Features

- Adding / deleting comments
- Reactions to comments

## 🏁 Entry Point

The main file to launch the application is `index.html`, located in the project's root directory.

## 📂 Project Structure

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

- [x] Use BEM methodology in conjunction with SCSS
- [x] Add comment form
  - [x] name
  - [x] text
  - [x] option to specify date (if not specified, then current date)
  - [x] works on Enter too
  - [x] validation (when we start typing the error disappears)
- [x] Send button
- [x] list of comments, in comments:
  - [x] name
  - [x] text
  - [x] date, time added
  - [x] today\yesterday 
  - [x] Delete comment button
  - [x] Comment like

> [!TIP]
> [Markdown UI kit][md_ui_kit] for README.md

## 📜 License

This project is licensed under the MIT License. See [LICENSE](/LICENSE) for details.

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
