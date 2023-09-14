import inquirer from 'inquirer';
let amountConvert = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0034,
        "WON": 4.45
    },
    "USD": {
        "USD": 1,
        "PKR": 298.38,
        "WON": 1328.84
    },
    "WON": {
        "WON": 1,
        "PKR": 0.22,
        "USD": 0.00075
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "WON"],
        message: "Select Your Currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "WON"],
        message: "Select Your Convertion Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Math.floor(amountConvert[from][to] * amount);
    console.log(`Your Convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Inputs!");
}
