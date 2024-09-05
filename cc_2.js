// Task 1: Calculate the Tip

// Initialize "bill"
let bill = 275;

// Calculation using ternary operator
let tip = (50 <= bill <= 300) ? bill * 0.15 : bill * 0.20;



// Task 2: Output Details

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`);



// Task 3: Create a Function (calculateTip)

function calculateTip(bill) {
    return (50 <= bill <= 300) ? bill * 0.15 : bill * 0.20;
}

// Testing the function
console.log("Tip for $100: $",calculateTip(100));



// Task 4: Utilize Arrays

const bills = [275, 40, 430];
const tips = bills.map(bill => calculateTip(bill));
const totals = bills.map((bill, index) => bill + tips[index]);

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Totals: ", totals);

