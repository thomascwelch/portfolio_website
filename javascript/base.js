// JavaScript Document
var itemOne = [
	"RuPaul's Drag Race",
	"Top Chef",
	"American Ninja Warrior"
];

var itemTwo = [
	"Queer Video Games",
	"Critical Theory",
	"Media Industry Studies"
];

var randomOne = itemOne[Math.floor(Math.random()*itemOne.length)];
var randomTwo = itemTwo[Math.floor(Math.random()*itemTwo.length)];

console.log(randomOne);
console.log(randomTwo);

document.getElementById("insert").innerHTML = randomOne;
document.getElementById("insert2").innerHTML = randomTwo;