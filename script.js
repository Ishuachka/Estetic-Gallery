const CLIENT_ID = "dr4DyyjNhudDCHxRhieBKk5Hw0PpO86baeE4i--PVFQ"; // API ключ для доступа к UnsplashAPI
const slider = document.getElementById("slider"); // Из документа получаем элемент
const searchInput = document.getElementById("search"); // Из документа получаем поле ввода для поиска
const searchButton = document.getElementById("searchButton"); // Из документа получаем кнопку для поиска

let state = []; // Храним полученные фотографии в массиве
let currentSlide; // Храним в переменной идентификатор текущего активного слайда

const fetchPhotos = async (query = "") => {
  try {
    // Обращаемся к API для получения фотографий (случайных или по ключевому слову) и преобразуем ответ в Json
    const url = query 
      ? `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${query}&per_page=4`
      : `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4`;
    const response = await fetch(url);
    const data = await response.json();

    /* Проверяем успешность запроса, если все ок, сохраняем в переменную state и устанавливаем текущий активный слайд, 
       как первый элемент, после вызываем функцию для отображения фотографий */
    if (response.ok && (data.results || data).length) {
      state = query ? data.results : data;
      currentSlide = state[0].id;
      setPhotos();
    }
  } catch (err) {
    console.log(err);
  }
};

const renderItem = () => {
  // Создаем HTML для каждого элемента в массиве state
  return state
    .map(({ urls: { regular }, user: { name }, id }) => {
      const isActive = currentSlide === id ? "active" : ""; // Определяем, является ли текущий слайд активным
      return `<div class="slide ${isActive}" data-id="${id}" style="background-image: url(${regular})">
        <div class="slide-text">
          <span>photo by</span>
          ${name}
        </div>
      </div>`;
    })
    .join(""); // Объединяем все элементы в одну строку
};

const handleClick = (event) => {
  const clickedSlide = event.currentTarget; // Получаем элемент, по которому был выполнен клик
  const id = clickedSlide.getAttribute("data-id"); // Получаем значение атрибута data-id

  // Проверка, чтобы избежать лишних действий, если кликнут текущий активный слайд
  if (id === currentSlide) return;

  // Обновляем текущий слайд и перерисовываем слайды
  currentSlide = id;
  setPhotos();
};

const setPhotos = () => {
  slider.innerHTML = renderItem(); // Устанавливаем HTML внутри элемента slider
  const slides = document.querySelectorAll(".slide"); // Получаем все элементы с классом "slide"

  // Назначаем обработчик клика для каждого слайда
  slides.forEach((slide) => {
    slide.addEventListener("click", handleClick);
  });
};

// Добавляем обработчик события для кнопки поиска
searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchPhotos(query); // Выполняем поиск фотографий по ключевому слову
  }
});

fetchPhotos(); // Вызываем функцию для получения фотографий при загрузке страницы
