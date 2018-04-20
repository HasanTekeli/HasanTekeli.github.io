// DOM Selectors
// getElementsByTagName
// getElementsByClassName
// getElementById

// Bunlardan daha kolay ve daha yeni olanlar

// querySelector ilkini seçiyor
// querySelectorAll hepsini seçiyor

var button = document.getElementById("enter"); //butonu cacheliyor
var input = document.getElementById("userinput"); //veri girişi yapılan yeri cacheliyor
var ul = document.querySelector("ul"); //listenin parent elementi olan ul'u cacheliyor

function inputLength() { //input.value.length fonksiyonunu cacheliyor
	return input.value.length;
}

function createListElement() { // yeni bir element oluşturuyor
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		li.appendChild(createButton()); //yanına buton koyuyor
		ul.appendChild(li);
		input.value = ""; //veri giriş yerinin girdiden sonra boş kalmasını sağlıyor.
		li.addEventListener("click", toggleDoneClass); //list item'ın üstüne tıklayınca üzerini çiziyor.
}

function toggleDoneClass() {
	this.classList.toggle("done");
}

function createButton() {
	var btn = document.createElement("button");
	var btnText = document.createTextNode("Delete");
	btn.appendChild(btnText);
	btn.addEventListener("click", btnDelete);
	return btn;
}

function btnDelete() {
	ul.removeChild(this.parentNode);
}

function addListAfterClick() { //click butonuna bastıktan sonra önce boş mu değil mi kontrol ediyor. Sonra girişi sağlıyor
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) { //enter tuşuna bastıktan sonra önce boş mu değil mi kontrol ediyor. Sonra girişi sağlıyor
	if (inputLength() > 0 && event.keyCode === 13) { //13 enter tuşunun bilgisayar dilindeki karşılığı
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick); //addEventListener 2 girdi kabul eder
//birincisi dinlediğimiz şey, ikincisi dinlediğimiz şey olduğunda yapılacak iş

input.addEventListener("keypress", addListAfterKeypress);

//ödev (bu kısım var olan maddelere gerekli butonu ve toggle'ı eklemeye yarıyor)
// var liArray = document.querySelectorAll("li");
// for(i=0; i < liArray.length; i++) {
// 	liArray[i].addEventListener("click", toggleDoneClass);
// 	liArray[i].appendChild(createButton());
// }