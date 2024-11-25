"use strict";
let a = 123456789;
let b = 123456789n;
console.log(a);
console.log(b);
var isActive = true;
console.log(isActive);
var array = [1, 2, 3, 4,];
console.log(array);
var char = ['a', 'b'];
//char.push('kumar')
console.log(char);
var val = undefined;
var val1 = null;
console.log(val);
console.log(val1);
const car = {
    type: 'Tyota',
    model: 'coroloo',
    year: 1976
};
console.log(car.model);
console.log(car);
let user;
console.log(user);
let numval;
numval = 3;
numval = 'a';
console.log(numval);
let ourTuple;
ourTuple = [616, true, 'rk'];
ourTuple.push('Something new and wrong');
console.log(ourTuple);
const graph = [55.2, 41.3];
const [x, y] = graph;
console.log(x, y);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
console.log(CardinalDirections.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.BadRequest);
let value;
value = 42;
value = "ok";
value = true;
//console.log(value.toUpperCase())
if (typeof value === "string") {
    console.log(value.toUpperCase()); // OK
}
else if (typeof value === "number") {
    console.log(value.toFixed(2)); // OK
}
function infiniteLoop() {
    while (true) {
        console.log("Running forever...");
    }
}
//infiniteLoop()
//type ass
const str = 'hello world';
const srtlength = str.length;
console.log(srtlength);
const us = {
    id: 1,
    name: 'kumar',
};
console.log(us.name);
const coord = [10, 20];
console.log(coord[1]);
const currentStatus = "success";
console.log(currentStatus);
var id;
id = 1;
id = '101';
id = undefined;
//tynarrowing
function printId(id) {
    if (typeof id === 'string') {
        console.log(`id is string:`, id.toLocaleUpperCase());
    }
    else {
        console.log(`id is number:`, id);
    }
}
//printId('kumar')
printId(11);
const person = {
    id: 1,
    name: 'kumar',
    greet() {
        console.log('hi kumar');
    }
};
person.greet();
var add = (x, y) => x + y;
var sub = (x, y) => x - y;
console.log(add(16, 6));
console.log(sub(16, 6));
const userId = 102;
const namef = 'kumar';
console.log(userId);
console.log(namef);
const person1 = {
    id: 1,
    name: 'kumar',
    age: 27
};
console.log(person1.age, person1.name);
let currentstatus = 'succes';
console.log(currentstatus);
const p = {
    name: 'Kumar',
    age: 27,
    city: 'Hyderabad',
    country: 'Indian'
};
console.log(p.city);
//# sourceMappingURL=index.js.map