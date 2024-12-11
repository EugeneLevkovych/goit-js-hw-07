const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function () {
  // Очищаємо значення інпуту від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Якщо значення інпуту порожнє, підставляємо "Anonymous", інакше - введене ім’я
  nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
// Очищення пробілів: За допомогою методу trim() видаляються всі пробіли з обох кінців рядка.
// Обробка події input: Кожного разу, коли користувач вводить текст в інпут, ця подія спрацьовує, і виконується перевірка:
// Якщо після обрізання пробілів в рядку залишиться текст, то він відображається в елементі #name-output.
// Якщо після обрізання пробілів рядок порожній, то виводиться "Anonymous".
// Тепер при введенні будь-якого тексту в інпут значення буде динамічно оновлюватися в елементі span#name-output, а якщо інпут буде порожнім або містити лише пробіли, у привітанні буде показуватись "Anonymous".
