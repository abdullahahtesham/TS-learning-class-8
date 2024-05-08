var carName = ["Dodge Challenger", "Civic", "G Class"];
console.log(carName[0]);
console.log(carName[1]);
console.log(carName[2]);
var favNumber = [0, 1, 2, 3, 4];
console.log(favNumber[0]);
console.log(favNumber[1]);
console.log(favNumber[2]);
var boolen = [true, false, false, true];
console.log(boolen[0]);
console.log(boolen[1]);
//array methods
//push method
var cars = ["Dodge Challenger", "Civic", "G Class"];
cars.push("Toyota");
console.log(cars);
//pop method
cars.pop();
console.log(cars); //pop will remove the last element of the array
//unshift method
cars.unshift("Toyota");
console.log(cars); //unshift will add in first element of the array
//shift method
cars.shift();
console.log(cars); //shift will remove the first element in the array
