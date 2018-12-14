var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study js",
	"eat healthy",
];

//hepsinin sonuna ! eklemek için aşağıdaki for loop'u kullanacağız.

for (var i=0; i < todos.length; i++) {
	console.log(todos[i] + "!");
}

//Üstteki sadece console.log'a ekler. Tekrar todos'a baktığımızda ! göremeyiz. Listeye eklemek için aşağıdaki:

for (var i=0; i < todos.length; i++) {
	todos[i] = todos[i] + "!";
}

// while loop

var counterOne = 0;
while (counterOne < 10) {
	console.log(counterOne);
	counterOne++;
}

//üstteki 0'dan başlar 9'a kadar rakamları konsola yazdırır.

var counterTwo = 10;
while (counterTwo > 0) {
	console.log(counterTwo);
	counterTwo--;
}

//üstteki ise tersini yani 10dan 0'a doğru sayar.

// do while loop

var counterThree = 10;
do {
	console.log(counterThree)
	counterThree--;
} while (counterThree > 0);

//forEach Loop
//içiçe geçmiş örnek

todos.forEach(function(todo, i) {
	console.log(todo, i);
})

//ayrılmış örnek, bu şekilde ayırdığımızda function'ı bir kere oluşturduktan sonra farklı listeler üzerinde kullanabiliriz. Burada aynı function'ı hem todos, hem de todosImportant üzerinde kullanırız.

function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos)