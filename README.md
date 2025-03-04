# Estetic Gallery
Estetic Gallery - это веб-приложение для просмотра случайных фотографий с использованием Unsplash API. Пользователь может просматривать галерею фотографий, кликая на слайды для увеличения изображения. Также доступен поиск по фотографиям.

![](/image/image.png)

Проект создан в учебных целях для изучения работы с внешними API, динамической загрузки контента и взаимодействия с пользователем через веб-интерфейс.

## Установка и запуск

Чтобы запустить проект локально, выполните следующие шаги:

### 1. Клонирование репозитория:
```
git clone https://github.com/Ishuachka/Estetic-Gallery.git
```

### 2. Установка зависимостей:
Перейдите в каталог проекта и установите необходимые зависимости:
```
npm install
```

### 3. **Настройка API ключа:**

Замените значение CLIENT_ID в файле script.js на свой API ключ от Unsplash. Вы можете получить ключ, зарегистрировавшись и создав новое приложение на Unsplash Developers.

### 4. **Запуск приложения:**
Откройте файл index.html в современном веб-браузере или запустите локальный сервер:
```
npm start
```

## Функциональность

* Отображение случайных фотографий

При загрузке приложения выводятся 4 случайные фотографии с использованием Unsplash API.

* Навигация по слайдам

Пользователь может кликнуть на любой слайд для увеличения и просмотра фотографии в большом размере.

* Поиск по фотографиям
  
Есть возможность ввода ключевых слов в поле поиска для поиска фотографий по заданным критериям.

## Используемые технологии
`HTML`, `CSS` для структуры и стилей веб-страницы.

`JavaScript (ES6)` для динамической загрузки данных и взаимодействия с API.

`Unsplash API` для получения случайных фотографий.

`npm` для управления зависимостями и локального сервера.
