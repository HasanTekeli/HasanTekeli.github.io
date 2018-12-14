var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study js",
	"eat healthy"
]

var todosImportant = [
	"clean room!!",
	"brush teeth!!",
	"exercise!!",
	"study js!!",
	"eat healthy!!"
]


//------------------------------------------
//For Loop
//------------------------------------------


	//for (var i=0; i < todos.length; i++) {
	//	todos[i] = todos[i] + "!";

//bu tüm itemlara ! koymaya yarıyor.
//in order to add ! at the end of all of these items
//i for index, common for loops
//i++ means i + 1

	//todos.pop(); 
	//}


//todos.pop() son itemı çıkarmaya yarıyor ancak
//todos.pop sondaki 3ü kaldırıyor çünkü for ile 
//başlayan yerde length gittikçe düştüğü için sayı gittikçe düşüyor
//sadece son itemı çıkarmak için for'un üstüne 
//"var todosLength = todos.length;" değişkenini eklemek 
// ve for'un içindeki todos.length'i üstteki yeni değişken
//olan todosLength ile değiştirmek gerekiyor.


//------------------------------------------
//while loop
//------------------------------------------

	//var counterOne = 10;
	//while (counterOne > 0) {
	//	console.log(counterOne);
	//	counterOne--
	//} 

// bu kısım 10'a kadar saydırmayı veya 10'dan geriye saydırmaya yarıyor
//üstteki 10'dan geriye sayım
//10a kadar saydıracaksak counterOne = 0, counterOne < 10, counterOne++ 
//yapmamız gerek


//------------------------------------------
// Do Loop
//------------------------------------------


	//var counterTwo = 10;
	//do {
		//console.log(counterTwo);
		//counterTwo--;
	//} while (counterTwo > 0);

//üstteki Do Loop, daha üstte bulunan while loop ile aynı şeyi yapıyor.
//aradaki fark while loop'ta ilk olarak condition'ı kontrol ediyor
//(counterOne=0) yani CounterOne 0'dan büyükse o zaman console logu yap.
//do while loop ise ilk olarak işi yapıyor sonra kontrol ediyor.
//Eğer her ikisinde de > 10 yaparsak ilki hiçbir çıktı vermez, çünkü ilk
//condition 10'dan küçük olması gerekir diyor.
//Ancak ikincisinde sadece konsola 10 yazar, sonrası gelmez. CounterTwo
//10 olduğu için onu basar konsola sonrasında conditiona takılır.


//------------------------------------------
//For vs ForEach Loop
//------------------------------------------

//bu ikisi aynı işi yapıyor ancak bu işi forEach ile yapmak daha basit görünüyor.
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
	//console.log(i); //yaparsak index numaralarını basıyor
	console.log(todos[i]); //yaparsak item'ları basıyor
}

//forEach bir array'in peşine yazılır ve devamında ne yapacağını sorar
//todos ile yapacağımız iş function ile belirtilir.

todos.forEach(function(i) { //bu satırda ve alttaki satırda i yerine herhangi birşey yazabiliriz
	console.log("function ve forEach icice", i); //ancak (todo, i) yazarsak index ile birlikte verir
}) //mesela clean room 0 gibi.

//üsttekini forEach ve Function'ı birbirinden ayırarak da yazabiliriz.
//Bu da bize function'ı tekrar kullanma olanağı sağlar. Aşağıda İki
//ayrı liste için aynı function kullanıldı.

function logTodos(todo) {
	console.log("function ayri", todo);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);