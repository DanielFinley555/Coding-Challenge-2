// Task 1: Calculate the Tip

// Initialize "bill"
let bill = 275;

// Calculation using ternary operator
let tip = (50 <= bill <= 300) ? bill * 0.15 : bill * 0.20;



// Task 2: Output Details

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
