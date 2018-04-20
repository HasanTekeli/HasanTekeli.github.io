/***4 + 3;

if (4+3 === 7) {
	alert("You are smart");
	console.log("Hellooo");
}

function sayHello() {
	console.log("Helloooo");
}

sayHello();

var sayBye = function() {
	console.log("Bye");
}

sayBye();

function sing(song) {
	console.log(song);
}
sing("la deeee daaa");
sing("hellloooooeee");
sing("asdadadasda");

function multiply(a, b) {
	if (a > 10 || b > 10) {
		return "thats too hard";
	} else {
	return a * b;
	}
}

multiply(5, 10);*/


/*Function Declaration*/
function checkDriverAge() {
	var age = prompt("How old are you?");
		if (Number(age) < 18) {
			alert("Sorry, you are too young to drive this car. Powering off");
		} else if (Number(age) > 18) {
			alert("Powering On. Enjoy the ride!");
		} else if (Number(age) === 18) {
			alert("Congratulations on your first year of driving. Enjoy the ride!");
		}
console.log(age);}


/*Function Expression*/
checkDriverAge();

var checkDriverAge2 = function() {
	var age = prompt("How old are you?");
		if (Number(age) < 18) {
			alert("Sorry, you are too young");
		} else if (Number(age) > 18) {
			alert("You are good to go");
		} else if (Number(age) === 18) {
			alert("Congrats")
		}
}




