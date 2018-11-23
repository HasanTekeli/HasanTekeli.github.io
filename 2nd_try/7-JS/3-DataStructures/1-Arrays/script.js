var list = ["tiger", "cat", "bear", "bird"];

//to access the array items

console.log(list[1]);

//array içinde üstteki gibi string, sayılar, booleans ve hatta function'lar olabilir. 

var mixedList = ["apples", 3, undefined, true, function apple() {console.log(apple())}];

// array içinde array'de yapabiliriz. Bunun içinden bir elemana ulaşmak için önce kaçıncı array olduğunu sonra o array'in kaçıncı elemanı olduğunu belirtmemiz gerekir. 

var array = [
	["tiger", "cat", "bear", "bird"]
];

console.log(array[0][2]);

//yazdığımızda bear ögesini verir.

list.shift(); //listenin ilk item'ı olan tiger'ı çıkartır.
list.pop(); //listenin son item'ı olan bird'ü çıkartır.
list.push("elephant"); //listenin sonuna elephant'ı ekler.
list.concat(["bee", "deer"]); //iki farklı array'i birleştirmede kullanılır.
list.sort(); //listeyi sıralar.