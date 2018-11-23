var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ali = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createDelButton() {
	var i; for (i = 0; i < ali.length; i++) {
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	ali[i].appendChild(delButton);
}};

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// if (li.includes("delButton") {
	// 	console.log("delButton Exists");
	// } else {
	// 	createDelButton();
	// });
	//Del Button bu alt taraftaki kodda çalışıyor. Şimdi iş bunu ayrı bir function haline getirmek.
	// var delButton = document.createElement("button");
	// delButton.appendChild(document.createTextNode("Delete"));
	// li.appendChild(delButton);
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
