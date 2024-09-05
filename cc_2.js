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
console.log(`Tip for $100: $${calculateTip(100)}`);



// Task 4: Utilize Arrays

//Data Set 1
const bills = [275, 40, 430];
const tips = bills.map(bill => calculateTip(bill));
const totals = bills.map((bill, index) => bill + tips[index]);

console.log("Bills Set 1: ", bills);
console.log("Tips Set 1: ", tips);
console.log("Totals Set 1: ", totals);



// Task 5: Test Data

//Data Set 2
const bills2 = [125, 555, 44];
const tips2 = bills2.map(bill => calculateTip(bill));
const totals2 = bills2.map((bill, index) => bill + tips2[index]);

console.log("Bills Set 2: ", bills2);
console.log("Tips Set 2: ", tips2);
console.log("Totals Set 2: ", totals2);
