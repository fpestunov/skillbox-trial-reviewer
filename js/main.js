function generateNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}

function play(thinkNumber) {
  while (true) {
    var answer = prompt("Введите число от 1 до 1000");
    if (answer === null) {
      return;
    }
    console.log("Ответ ", answer);
    if (thinkNumber === +answer) {
      alert("Правильно! Загаданное число " + thinkNumber);
      return;
    } else if (thinkNumber > answer) {
      alert("Это число больше " + answer);
    } else if (thinkNumber < answer) {
      alert("Это число меньше " + answer);
    }
  }
}

do {
  play(generateNumber());
} while (confirm("Играем еще раз?"));
