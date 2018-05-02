var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var dlt = document.querySelectorAll(".delete");


function inputLength() {
	return input.value.length;
}

//Make Delete button
function delButton (parent) {
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete!"));
	del.className = "delete";
	parent.appendChild(del);
}

//Delete Function
function deleteMe() {
	for (var i = 0; i < dlt.length; i++) {
		dlt[i].addEventListener("click", function() {
			this.parentNode.remove();
		})
	}
}

function addToggle() {
	this.classList.toggle("done");
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//toggle
	li.addEventListener("click", addToggle);
	//delete
	delButton(li);
	dlt = document.querySelectorAll(".delete");
	deleteMe();
	input.value = "";
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

for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", addToggle);
	delButton(listItems[i]);
	dlt = document.querySelectorAll(".delete");
}

deleteMe();



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

