let sam = document.getElementById('sam');
let joe = document.getElementsByClassName('joe')[0];
let debby = document.getElementById('debby');
let damian = document.querySelector('#damian');
let button = document.querySelector('#btn');

button.addEventListener('mouseenter', myMouseEnter);
button.addEventListener('mouseleave', myMouseLeave);

function myMouseLeave() {
	sam.style.display = 'none';
	sam.textContent = 'hello samuel';
	joe.textContent = 'hello joseph';
	damian.innerText = 'hello deborah';
	debby.textContent = 'hello dammy';
}
function myMouseEnter() {
	sam.style.color = 'red';
	sam.textContent = 'hello sam';
	joe.textContent = 'hello joe';
	damian.innerText = 'hello debby';
	debby.textContent = 'hello damian';
}

// let movieDB = [
// 	{
// 		name: 'Bahubali',
// 		year: 2015,
// 		rating: 5,
// 		hasWatch: true,
// 	},
// 	{
// 		name: 'Acrimony',
// 		year: 2019,
// 		rating: 4,
// 		hasWatch: false,
// 	},
// 	{
// 		name: 'jagu Jagun',
// 		year: 2023,
// 		rating: 2.5,
// 		hasWatch: true,
// 	},
// 	{
// 		name: 'Naruto',
// 		year: 2005,
// 		rating: 5,
// 		hasWatch: false,
// 	},
// ];

// for (const movie of movieDB) {
// 	let result;
// 	if (movie.hasWatch) {
// 		result += 'You have watch ' + movie;
// 	} else {
// 		result += 'You have not seen ' + movie;
// 	}
// 	console.log(result);
// }

// let nameOfstudent = ['joe', 'damian', 'ola'];

// nameOfstudent[1];

// // .length
// // pop()
// // push()
// // shift()
// nameOfstudent.shift();
// // unshift()
// // map()
// let numList = [2, 4, 6, 1, 5, 7];

// let mapList = numList.map(function (num) {
// 	let b = num * 2;
// 	console.log(b);
// });
// filter()
// for of loop

// function add2(a, b) {
// 	let c = a + b;
// 	return c;
// 	let d = c * 2;
// }

// let realNumber = 5;
// let guess = Number(prompt('Enter your guess number'));

// while (guess !== realNumber) {
// 	guess = Number(prompt('not correct try again'));
// }

// alert(`You get it right, the number is ${guess}`);

// let a = 1;
// while (a < 10) {
// 	console.log(`this is a while loop ${a}`);
// 	a++;
// }

// let counter = 1;
// do {
// 	console.log(`This is a do while loop ${counter}`);
// 	counter++;
// } while (counter < 10);

// let list = ['eli', 'ola', 'joe', 'damian', 'james'];

// let num = 0;

// while (num <= list.length) {
// 	console.log(list[num]);
// 	num++;
// }

// let age = 16;

// switch (true) {
// 	case age > 17 && age < 91:
// 		alert('you can drive');
// 		break;
// 	case age > 90:
// 		alert('you are too old to drive');
// 		break;
// 	case age <= 17:
// 		alert('you cannot drive');
// 		break;
// 	default:
// 		alert('not a valid day');
// 		break;
// }

// let math101 = Number(prompt("Enter score for math"));
// let eng111 = Number(prompt("Enter score for English"));
// let com111 = Number(prompt("Enter score for Computer Science"));
// let bus111 = Number(prompt("Enter score for Business Administration"));

// let mathUnit = 3;
// let engUnit = 2;
// let comUnit = 3;
// let busUnit = 2;

// if (math101 >= 70 && math101 <= 100) {
// 	math101 = 5;
// 	math101 *= mathUnit;
// } else if (math101 >= 60 && math101 < 70) {
// 	math101 = 4;
// 	math101 *= mathUnit;
// } else if (math101 >= 50 && math101 < 60) {
// 	math101 = 3;
// 	math101 *= mathUnit;
// } else if (math101 >= 45 && math101 < 50) {
// 	math101 = 2;
// 	math101 *= mathUnit;
// } else if (math101 >= 40 && math101 < 45) {
// 	math101 = 1;
// 	math101 *= mathUnit;
// } else if (math101 < 40) {
// 	math101 = 0;
// 	math101 *= mathUnit;
// } else {
// 	console.log("mark is out of range");
// }

// if (eng111 >= 70 && eng111 <= 100) {
// 	eng111 = 5;
// 	eng111 *= engUnit;
// } else if (eng111 >= 60 && eng111 < 70) {
// 	eng111 = 4;
// 	eng111 *= engUnit;
// } else if (eng111 >= 50 && eng111 < 60) {
// 	eng111 = 3;
// 	eng111 *= engUnit;
// } else if (eng111 >= 45 && eng111 < 50) {
// 	eng111 = 2;
// 	eng111 *= engUnit;
// } else if (eng111 >= 40 && eng111 < 45) {
// 	eng111 = 1;
// 	eng111 *= engUnit;
// } else if (eng111 < 40) {
// 	eng111 = 0;
// 	eng111 *= engUnit;
// } else {
// 	console.log("mark is out of range");
// }

// if (com111 >= 70 && com111 <= 100) {
// 	com111 = 5;
// 	com111 *= comUnit;
// } else if (com111 >= 60 && com111 < 70) {
// 	com111 = 4;
// 	com111 *= comUnit;
// } else if (com111 >= 50 && com111 < 60) {
// 	com111 = 3;
// 	com111 *= comUnit;
// } else if (com111 >= 45 && com111 < 50) {
// 	com = 2;
// 	com111 *= comUnit;
// } else if (com111 >= 40 && com111 < 45) {
// 	com111 = 1;
// 	com111 *= comUnit;
// } else if (com111 < 40) {
// 	com111 = 0;
// 	com111 *= comUnit;
// } else {
// 	console.log("mark is out of range");
// }

// if (bus111 >= 70 && bus111 <= 100) {
// 	bus111 = 5;
// 	bus111 *= busUnit;
// } else if (bus111 >= 60 && bus111 < 70) {
// 	bus111 = 4;
// 	bus111 *= busUnit;
// } else if (bus111 >= 50 && bus111 < 60) {
// 	bus111 = 3;
// 	bus111 *= busUnit;
// } else if (bus111 >= 45 && bus111 < 50) {
// 	bus111 = 2;
// 	bus111 *= busUnit;
// } else if (bus111 >= 40 && bus111 < 45) {
// 	bus111 = 1;
// 	bus111 *= busUnit;
// } else if (bus111 < 40) {
// 	bus111 = 0;
// 	bus111 *= busUnit;
// } else {
// 	console.log("mark is out of range");
// }

// let totalUnit = mathUnit + engUnit + busUnit + comUnit;
// let totalGrade = math101 + eng111 + com111 + bus111;
// let cgpa = totalGrade / totalUnit;

// let gradeCheck = (grade, unit) => {
// 	if (grade >= 70 && grade <= 100) {
// 		grade = 5;
// 		grade = grade * unit;
// 	} else if (grade >= 60 && grade < 70) {
// 		grade = 4;
// 		grade *= unit;
// 	} else if (grade >= 50 && grade < 60) {
// 		grade = 3;
// 		grade *= unit;
// 	} else if (grade >= 45 && grade < 50) {
// 		grade = 2;
// 		grade *= unit;
// 	} else if (grade >= 40 && grade < 45) {
// 		grade = 1;
// 		grade *= unit;
// 	} else if (grade < 40) {
// 		grade = 0;
// 		grade *= unit;
// 	} else {
// 		console.log("mark is out of range");
// 	}
// 	return grade;
// };

// let totalUnit = mathUnit + engUnit + busUnit + comUnit;
// let totalGrad =
// 	gradeCheck(math101, mathUnit) +
// 	gradeCheck(eng111, engUnit) +
// 	gradeCheck(com111, comUnit) +
// 	gradeCheck(bus111, busUnit);
// let cgpa = totalGrad / totalUnit;

// if (cgpa >= 4.5) {
// 	alert(`you CGPA is ${cgpa.toFixed(2)}, you are in First Class!`);
// } else if (cgpa >= 3.5) {
// 	alert(`you CGPA is ${cgpa.toFixed(2)}, you are in Second Class!`);
// } else if (cgpa >= 2.5) {
// 	alert(`you CGPA is ${cgpa.toFixed(2)}, you are in Second Class Lower!`);
// } else if (cgpa >= 2.0) {
// 	alert(`you CGPA is ${cgpa.toFixed(2)}, you are in Third Class!`);
// } else {
// 	alert(`you failed !!!`);
// }

// // Adding Numbers and Strings
// let x = 10;
// let y = 20;
// let sum = "this is the sum of x and y " + x + y;

// console.log(sum);

// let num1 = 10;
// let num2 = 20;
// let num3 = "man";

// let output = "this is output " + num2 + num1;

// console.log(output);

// if
// if...else
// if...else...if
// let age = ;

// if (age >= 18) {
// 	console.log("yes! you can drive");
// } else {
// 	console.log("no! you can't drive");
// }

// 4.0 A
// 3.50 AB
// 3.0 B
// 2.50 C
// 2.00 D
// 1.50 failed

// let cgpa = "";

// if (cgpa > 2.49) {
// 	console.log("you have lower");
// } else if (cgpa <= 1.49 && cgpa >= 1) {
// 	console.log("you failed");
// }

//program to check for driving age

// let name = "Samuel";

// let dataBaseName = "Samuel";
// let password = "123456";

// if (name === dataBaseName && password === 123456) {
// 	console.log("welcome, sam");
// } else {
// 	console.log("you are not samuel");
// }

//LOGIN CHECKER

// let matt = prompt("Enter score for math");
// let password = prompt("Enter your password");
// let mainPassword = Number(password);

// let math = 56;
// let eng = 30;

// let overAll = 100;

// if (userName === "damian" && mainPassword === 123456) {
// 	console.log("you are welcome to coding class");
// } else {
// 	console.log("you are not a student");
// }
