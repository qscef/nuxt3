# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Проверка кодовой базы с помощью linter

```bash
npm run lint
```

Запуск правок кодовой базы с помощью linter

```bash
npm run lint-fix
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


## CheckList 

```bash
* SSR (пример получения данных с бэка без запроса с фронта(приходит сразу с html) на странице posts/index)

* обычный запрос useFetch (пример получения данных с бэка с помощью запроса с фронта(отобразится в network т.к. обычный запрос) на странице posts/[id])

* настроенный линтер и претиер - запускается проверка npm run lint, если надо автоматом исправить - npm run lint-fix

* env-файл - пока там только ссылка на api, чтобы было удобно менять на стендах, можно так же поместить еще что-то

* настроенный pinia - аналог vuex - хранилище переменных доступных с любой страницы приложения

* настроенный ts - по умолчанию встроен в <script setup lang="ts">
однако чтобы видить все это стоит установить плагин Volar - он подсказывает что и как называется и какие имеет свойства
(так же на страницах использовал его - posts/index, posts/[id])

* попытка использовать editConfig - однако он не применяется(используется для автоустановки размера отступов в IDE)
```