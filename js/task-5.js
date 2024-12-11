function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Знаходимо необхідні елементи
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const bodyElement = document.body;

// Додаємо обробник події кліку на кнопку
changeColorButton.addEventListener('click', function () {
  // Генеруємо новий випадковий колір
  const randomColor = getRandomHexColor();

  // Встановлюємо колір фону body
  bodyElement.style.backgroundColor = randomColor;

  // Оновлюємо текст кольору у span
  colorSpan.textContent = randomColor;
});
// Розбір скрипту:

// Використовується функція getRandomHexColor() для генерації випадкового кольору
// Знаходимо потрібні елементи DOM:

// Кнопку зміни кольору
// Span для виведення значення кольору
// Елемент <body>

// Додаємо обробник події кліку на кнопку
// При кліку:

// Генеруємо новий випадковий колір
// Встановлюємо його як фон для <body>
// Виводимо значення кольору у <span>

// Скрипт повністю відповідає всім вказаним вимогам:

// Колір фону змінюється тільки по кліку
// Використовується функція getRandomHexColor()
// Значення кольору відображається у <span>
