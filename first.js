let gameNum = 25;
let num;

do {
    num = Number(prompt("Guess a number between 0 and 100:"));

    if (num < gameNum) {
        alert("Too low! Try again.");
    } else if (num > gameNum) {
        alert("Too high! Try again.");
    }

} while (num !== gameNum);

alert("Correct!");
console.log("Correct!");
