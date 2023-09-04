// let greetings = "hi there!";

// function greet() {
// 	greetings;
// 	let greeting = "hi, am diff!";
// 	console.log(greetings);
// 	console.log("inside function " + greeting);
// }

// function secondGreet() {
// 	console.log(greeting);
// }

// secondGreet();

// console.log("our main greet " + greetings);
// greet();

// function typeFood() {
// 	return "i love rice so much";
// }

// typeFood();

// function addTwoNums() {
// 	let a = 5 * 5;
// 	return a;
// }

// function test() {
// 	let a = addTwoNums();
// 	let b = 6;
// 	let c = a + b;
// 	return c;
// }

// test();

// arrow functions

// let greet2 = num => num * 5;

// let manDown = (a = 3, b = 6) => {
// 	return a + b;
// };

// let multiplyByTwo = (numberOne) => numberTwo * 2;

// let game = function () {
// 	console.log("am a function");
// };

// game();

// let a = parseInt(prompt('Enter value for a'));
// let b = parseInt(prompt('Enter value for b'));
// let c = parseInt(prompt('Enter value for c'));

// function sqrRoot(a, b, c) {
// 	let bxb = b ** 2 - 4 * a * c;
// 	return Math.sqrt(bxb);
// }

// function outCome1() {
// 	let bxRoot = (-b + sqrRoot(a, b, c)) / (2 * a);
// 	return bxRoot;
// }

// function outCome2() {
// 	let bxRoot = (-b - sqrRoot(a, b, c)) / (2 * a);
// 	return bxRoot;
// }

// console.log(outCome1().toFixed(2));
// console.log(outCome2().toFixed(2));

// function quadEquation(a = 1, b = 2, c = 3) {
// 	let optionA = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
// 	let optionB = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
// 	return `x = ${optionA} or x = ${optionB.toFixed(2)}`;
// }

// console.log(quadEquation());

let answer = Math.floor(Math.random() * 10) + 1;

let guess = Number(prompt('Guess the number'));
while (guess !== answer) {
	guess = Number(prompt(`Try again later`));
}
alert(`Congratulations!!! You get it right the answer is ${answer}`);
