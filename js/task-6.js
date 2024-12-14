// Отримуємо елементи керування
const inputElement = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для створення коробок
function createBoxes(amount) {
  const boxes = [];

  // Створюємо коробки за вказану кількість
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    // Розміри коробок
    const size = 30 + i * 10; // Початковий розмір 30px, кожен наступний на 10px більше
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    // Випадковий колір
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = '10px'; // Відступи між коробками

    // Додаємо коробку в масив
    boxes.push(box);
  }

  // Додаємо всі коробки в контейнер за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення всіх коробок
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаємо весь вміст контейнера
}

// Обробка події Create
createButton.addEventListener('click', () => {
  const amount = parseInt(inputElement.value);

  // Перевірка, чи введене число в межах від 1 до 100
  if (amount >= 1 && amount <= 100) {
    // Створюємо коробки
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100');
  }

  // Очищаємо поле вводу
  inputElement.value = '';
});

// Обробка події Destroy
destroyButton.addEventListener('click', destroyBoxes);
// Функція getRandomHexColor(): Генерує випадковий колір у форматі #RRGGBB за допомогою математичних операцій для отримання випадкового числа у шістнадцятковому форматі.

// Функція createBoxes(amount): Створює задану кількість div елементів:

// Кожен квадрат має розміри, які збільшуються на 10px для кожного наступного елемента.
// Кожен елемент отримує випадковий колір фону.
// Всі елементи додаються в контейнер #boxes за одну операцію через метод append(), щоб покращити продуктивність при великій кількості елементів.
// Функція destroyBoxes(): Очищає контейнер #boxes, видаляючи всі створені елементи за допомогою innerHTML = ''.

// Обробка події для кнопки Create:

// Встановлюється значення кількості елементів із інпуту.
// Перевіряється, чи значення в межах від 1 до 100. Якщо ні, виводиться попередження.
// Після створення нових елементів значення інпуту очищується.
// Обробка події для кнопки Destroy:

// Коли натискається кнопка Destroy, викликається функція для очищення контейнера #boxes.
// Тестування:
// Якщо користувач вводить значення поза діапазоном (менше 1 або більше 100), з'являється попередження.
// Кожен раз після натискання кнопки Create виводяться нові квадрати з випадковими кольорами та правильними розмірами.
// Після натискання кнопки Destroy всі квадрати видаляються з екрану.
