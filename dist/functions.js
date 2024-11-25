"use strict";
//regular functions
function adds(a, b) {
    return a + b;
}
console.log(adds(16, 6));
//function expersion
const mult = function (a, b) {
    return a * b;
};
console.log(mult(16, 6));
//Arrow function
const divide = (a, b) => a / b;
console.log(divide(16, 8));
const squre = (x) => x * x;
console.log(squre(5));
//deafult parametr
function greet1(username, greeting = 'Hi') {
    // return greeting + ' ' + username;
    return `${greeting ? greeting : ''} ${username}`; // ternary operator
}
console.log(greet1('kumar', 'hey'));
//optional parametres
function greet(name, age) {
    return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}
console.log(greet('kumar', 28));
//rest parameter
function sum(...numbers) {
    return numbers.reduce((total, acm) => total + acm, 0);
}
console.log(sum(1, 2, 3, 4, 5));
function calculate(x, y) {
    return x + y;
}
console.log(calculate(5, 10));
console.log(calculate('Hello', 'world'));
//void
function logMessage(message) {
    console.log(message);
}
logMessage('kumar Ramya');
function throwError(message) {
    throw new Error(message);
}
function formauser(use) {
    return `User ${use.name} (${use.age} yrs) can be contacted via ${use.email}`;
}
const use = {
    name: 'kumar',
    email: 'kumar@gmail.com',
    age: 28
};
console.log(formauser(use));
function calculater(products) {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
const cart = [
    { price: 200, quantity: 1 },
    { price: 600, quantity: 2 }
];
console.log(calculater(cart));
function getvehicledatailes(vechile) {
    if (vechile.type == 'car') {
        console.log(`Car ${vechile.make} ${vechile.model} ${vechile.year}year`);
    }
    else {
        console.log(`BIke: ${vechile.brand}, CC: ${vechile.cc}`);
    }
}
let myCarDetails = {
    type: 'car',
    make: 'Tesla',
    model: 'Model 10',
    year: 2024
};
let myBike = {
    type: 'bike',
    brand: 'BMW',
    cc: 400,
};
console.log(myCarDetails);
console.log(myBike);
//# sourceMappingURL=functions.js.map