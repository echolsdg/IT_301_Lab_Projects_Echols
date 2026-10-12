let promptValue;
let message = "Enter the total bill amount:";

do {
    promptValue = prompt(message);

    if (promptValue === null || promptValue === "" || Number(promptValue) === 0) {
        message = "Please enter a bill amount greater than zero.";
    }
    else if (Number(promptValue) <= 0) {
        message = "Negative amounts are not allowed. Please enter a valid bill amount.";
    }
    else if (isNaN(promptValue)) {
        message = "Invalid input. Please enter a numeric bill amount.";
    }

} while (promptValue === null || promptValue === "" || isNaN(promptValue) || Number(promptValue) <= 0);

let bill = Number(promptValue);
let tip = bill * 0.10;

console.log(`For a bill of $${bill}, the tip should be $${tip.toFixed(2)}`);

document.write(`For a bill of $${bill}, the tip should be $${tip}.`);