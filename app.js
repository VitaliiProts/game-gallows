var words = ["зошит", "ручка", "голуб", "пляцок"]; //Створили масив
var	word = words[Math.floor(Math.random() * words.length)]; // Вибрали випадкове слово
var answerArray = [];

for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_"
}

var remainingLetters = word.length;

// Цикл
while (remainingLetters > 0) {
	// Показуєм стан гри
	alert(answerArray.join(" "));
	// Запитуєм варіант відповіді
	var guess = prompt("Відгадайте букву, або натисніть \'Отмена\', для виходу з гри.");
	if (guess === null) {
		// Виходим з ігрового циклу
		break;
	} else {
		// Обновлюєм стан гри
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	}
	// Кінець циклу
}

// Відображаєм відповідь  і вітаємо гравця
alert(answerArray.join(" "));
alert("Відмінно! Було загадано слово " + word);
