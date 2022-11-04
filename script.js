function initialize() {
    dice1 = document.getElementById("dice1");
    dice2 = document.getElementById("dice2");
    sum = document.getElementById("sum");
}
function rollDice() {
    dice1Value = Math.floor((Math.random() * 6) + 1);
    dice2Value = Math.floor((Math.random() * 6) + 1);
    display();
}
function display() {
    dice1.innerHTML = "Dice 1: " + dice1Value;
    dice2.innerHTML = "Dice 2: " + dice2Value;
    sum.innerHTML = "Sum: " + (dice1Value + dice2Value);
}

/*
    Ryan Lei
    Period 7/8 Odd
    This program rolls of 2 dice when you press the button.
    The 2 random numbers generated are between 1 and 6.
    Their values and the sum will then be displayed.
*/
