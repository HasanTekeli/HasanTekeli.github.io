
# JavaScript Notları



## Types (JS'e girebileceğimiz elementler)

1. Number // matematik işlemleri yapabiliriz. Tek değişik olan % bu da bölümden kalan sayıyı verir (12 % 9 = 3). 
	Eğer eşittir işareti yapmak istersek === yapmamız gerekir. Tek = değişken atamaya yarıyor.

	!== Bu eşit değil anlamına geliyor. Ünlem işareti neyin başına gelirse onu olumsuz yapar.

2. String // Metin yazarken kullanılır. "" veya '' kullanılabilir. Metin içinde aynı işaretten varsa o işaretin önüne \ konulur (mesela 'She isn\'t lazy')

	- 10 + "34" = 1034 // Burada JS iki metni birleştirmeye çalıştığımızı düşünüyor. 10 - "3" = 7 burada da JS yanlış yazdığımızı ve ikincinin metin değil sayı olduğunu düşünüyor.

3. Boolean // True / False
	Örnek: 4 < 2 False

4. Undefined 
	- variable herhangi bir şeye atanmadığı zaman undefined olur.
	- Bunu mesela Signup formda e-posta ve şifre alanları için kullanabiliriz. Eğer veri undefined ise girilmesi gerektiğini hatırlatabliriz.

5. Null
	- boş object'lerde kullanılır ve kesinlikle değer atanamaz.
6. Symbol (New in ECMAScript 6) //
	- Bu tür tamamen unique elementler oluşturmak için kullanılır. Mesela;

		let sym1 = Symbol('foo');
		let sym2 = Symbol('foo');

	- Bu ikisi aynı görünse de (değer olarak), aynı değildir. Bunu aynı değerleri kullanan birçok farklı değişken yapacağımızda kullanmalıyız.

7. Object


## JS Comparisons

!== Eşit Değildir
=== Eşittir
>= Büyük / Eşit
<= Küçük / Eşit
> Büyük
< Küçük


## JS Variables

var // 
	
	- var george = "These pretzels are making me thirsty" + "!" 

- Burada george kelimesine "" içindeki metni ve ünlem işaretini atadık, bu sayede tüm metni tekrar yazmadan george yazdığımızda metin gelecektir. 
- Değişkenler sayı ile başlayamaz, bir harf ve sayı olabilir.
- Değişkenler simge olarak sadece $ veya _ ile başlayabilir.
- Variable olarak herhangi bir Type'ı kullanabiliriz (Numbers, Booleans etc..)

### Var Kullanarak Girdilerle Toplama Yapımı

prompt() sayfanın üstünde metin girebileceğimiz bir kutu çıkartır.
alert() ise bir uyarı kutusu çıkartır. Bu ikisini kullanarak toplama yapabiliriz.
	
	var first = prompt("enter first number");
	var second = prompt("enter second number"); 
	var sum = Number(first) + Number(second); 
	alert("The sum is: " + sum);

prompt() ile girilen değerler metin olarak görünür. Bunların sayı olduğunu JS'e söylemek için Number() kullanılabilir.


### let ve const

	const player = 'bobby';
	let experience = 100;
	let wizardLevel = false;

	if (experience = 90) {
		let wizardLevel = true;
		console.log('inside', wizardLevel);
	}

	console.log('outside', wizardLevel);

Yazdığımızda "inside true, outside false" çıktısını verir. let ile var arasındaki fark(let wizardLevel'lar yerine var wizardLevel yazsaydık), ikinci wizardLevel bir function'ın içinde olmadığı için önceki var'ı sıfırlayıp yeni değeri (true) atardı ve konsol çıktısı "inside true, outside true" olurdu.

const sabit bir değişkendir. Yeni bir değişken atanamaz. Bundan sonra var kullanmıyoruz, değişmeyen bir değişken(?) :) yapacaksak const, değişebilen bir değişken yazacaksak let kullanacağız. const içine object koyabiliriz ve bu object'lerin değerini değiştirebiliriz ancak değişkene başka bir değer atayamayız (mesela tekrar const a = "John" yazarsak hata verir).

	const a = "Simon";
	const b = true;
	const c = {};

	const obj = { a, b, c, }

#### Template Strings

	const greeting = "Hello " + name + " you seem to be doing " + greeting + "!";

Bunu yapmak yerine 
	
	const name = "Sally";
	const age = 34;
	const pet = "horse";
	const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

Şeklinde yapabiliriz. Bunun çıktısı "Hello Sally you seem to be 24. What a lovely horse you have."

#### Default Arguments

Üsttekini function içine ekleyebiliriz

	function greet(name='', age=30, pet='cat') {
		return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;
	}

Bu function'ı çalıştırdığımızda konsola çıkan sonuç:
Hello  you seem to be 20. What a lovely cat you have. 

Bu function'ın değerlerini değiştirebiliriz.

	greet("john", 50, "monkey");

Değerleri değiştirirken tekrar (değişken isimlerini girerek) atama yapmamıza gerek yok, sıralamayı tutturduğumuz sürece otomatik olarak kendisi atama yapar.


## Control Flow - JS Conditionals


### IF
	
	var name = "Billy";
	if (name === "Billy") {
		alert("hi Billy!");
	};

### ELSE (iki seçenek)

	if (name === "Billy") {
		alert("hi Billy");
	} else {
		alert("hmm I don't know you");
	}

### ELSE IF (ikiden fazla seçenek)

	if (name === "Billy") {
		alert("hi Billy!");
	} else if (name === "Suzy") {
		alert("Hi Suzy");
	} else {
		alert("I don't know you");
	}


### Ternary Operator


	condition ? expr1 : expr2

Bunun anlamı condition doğruysa expr1'i çalıştır, yanlışsa expr2'yi çalıştır. Örnek olarak

	function isUserValid(bool) {
		return bool;
	}
	var answer = isUserValid(true) ? "You may enter" : "Access Denied";

Burada değeri true yaparsak "You may enter" bilgisini veriyor. False yaparsak "Access Denied" bilgisini veriyor.

	var automatedAnswer = 
		"Your account # is " + ( isUserValid(false) ? "1234" : "not available");

Üstteki değişken olan answer'ı biraz geliştirdik. Eğer değer doğru ise "Your account # is 1234", yanlış ise "Your account # is not available" yazısını veriyor.

Bunu yapmanın bir diğer yolu function oluşturmaktır. 

	function condition() {
		if (isUserValid(true)) {
			return "You may enter";
		} else {
			return "Access denied";
		}
	}

	var answer2 = condition();

Bu şekilde uzun uzun yazmaktansa üstteki gibi kısa ve öz yazmak daha etkilidir. 


### Switch Statement


	function moveCommand(direction) {
		var whatHappens;
		switch(direction) {
			case "forward":
				whatHappens = "you encounter a monster";
				break;
			case "back":
				whatHappens = "you arrived home";
				break;
			case "right":
				whatHappens = "you found a river";
				break;
			case "left":
				whatHappens = "you run into a troll";
				break;
			default:
				whatHappens = "please enter a valid direction";
		}
		return whatHappens;
	}

Bir sürü if else statement kullanmaktansa switch statement çok daha kolay bir şekilde yazılabilir. Aralardaki break'lerin anlamı eğer condition tuttuysa (yani mesela forward yazıldıysa) diğer case'lere bakmadan function'dan çıkar ve sonrasında ne yapacağına bakar (üstteki örnekte "return whatHappens;").



## Logical Operators

&& and, iki seçenek de doğru olmak zorunda

	if (firstName === "Bob" && lastName === "Smith") {
		alert("Hi Bob Smith");
	}

|| or, iki seçenekten biri doğru olmak zorunda

	if (name === "Billy" || name === "Suzy") {
		alert("Hi Billy or Suzy");
	}

! not, verilen seçenek olmamalı
	
	if (!(name === "Bob")) {
		alert("Hi Bob");
	}



## JS Functions

arguments, function'larda parantez içine yazılan şeyler (console.log(helloo)). Bazı functionlarda birden fazla argument yazılabilir.

İki farklı function oluşturma yöntemi var
- Function Declaration

	function sayHello() {
		console.log("Hello");
	}
	sayhello();

Function'ın ismi belli


- Function Expression

	var sayBye = function() {
		console.log("Bye");
	}
	sayBye();

Function'ın ismi belli değil, bu yüzden anonymous function deniyor.



	function sing() {
		console.log("AHHHHHHHHHH");
		console.log("TEEEEEEEEEE");
	}
	sing();

Bunu kullandığımızda değiştirmek zor olur.

	function sing(song){
		console.log(song);
	}
	sing("Laaaa deeee ddaaaaa");
	sing("helllooooo");
	sing("daaaa daaaaa");

Bunu kullandığımızda daha extensible, daha kolay olabilir.

Başka bir örnek

	function multiply(a, b) {
		return a * b
	}
	multiply(5, 10);

Eğer function bir sonuç verecekse (mesela matematik işlemleri) return (veya aşağıdaki Arrow Function) ile yapmamız lazım. Bir function'ın içinde birden fazla return yazarsak, ilk return'den sonrasını okumaz ve function'ı sonlandırır. Bu örneğe IF statement eklersek bu durum geçersiz kalır, mesela:

	function multiply(a, b) {
		if (a > 10 || b > 10) {
			return "that's too hard"
		} else {
			return a*b;
		}
	}


### Arrow Function
--------------

	function add(a, b) {
		return a + b;
	}

Yazmak yerine arrow function kullanılabilir.

	const add = (a, b) => a + b;

Eğer üstteki gibi function'ın içinde sadece bir return bulunuyorsa bunu arrow function'la tek satırda (return kullanmadan) yapabiliriz. 


## Data Structures - Arrays


Array'lerde köşeli parantez kullanılır.

	var list = ["tiger", "cat", "bear", "bird"];

Array içindeki itemlara ulaşmak için:
	
	list[1];

Itemlara ulaşırken saymaya sıfırdan başlamalıyız. Tiger'a ulaşmak için list[0] yazmalıyız.

Array içine her türden type koyabiliriz (numbers, booleans, functions etc...). Tüm türleri aynı array içinde de kullanabiliriz (mix of types), ancak performans açısından bu pek önerilmiyor. 

Array içinde array yapılabilir. Eğer array içinde array'in içindeki bir item'a ulaşacaksak;
	
	var list = [
		["tiger", "cat", "bear", "bird"]
	];

	console.log(list[0][2]);

bize ilk array'in içindeki (zaten bir tane var) üçüncü item olan bear'i verir.

### Array Methods

	list.shift(); // ilk item'ı atar
	list.pop(); // son item'ı atar
	list.push("elephant"); // listeye bir item ekler
	list.concat(["bee", "deer"]) // listeye birden fazla item ekler 
									(array olarak) ancak concat ile eklenenler yeni bir liste olarak eklenir ve orijinal listede görünmezler, birden fazla array'i birleştirmede kullanılır.
	list.sort(); // listeyi (alfabetik, numerik) sıralar.
	list.reverse(); // listeyi tersten sıralar.
	list.splice(0, 1); // belirtilen item'ı listeden çıkartır (ilk
							array'in ikinci item'ı)



## Data Structures - Objects

Bir değişken içinde farklı özellikleri toplamak için kullanılır. İki nokta ve değerlerden sonra virgül kullanımına dikkat etmeliyiz.

	var user = {
		name: "John",
		age: 34,
		hobby: "Soccer",
		isMarried: false,
		spells: ["abrakadabra", "shazam", "boo"]
		shout: function() {
			console.log("AHHHH");
		}
	};

Object içinde array (spells) ve function (shout) kullanılabilir. Bir object'in içindeki function'a (object'ten sonra nokta ile yazılan şeyler - list.pop) "Method" denir.
Object içinden bir item'ı seçmek için
	
	user.name;
	user.age;

Object içine bir item eklemek için
	
	user.favoriteFood = "spinach";

Burada eşittir kullanıldı.

Bir item'ın değerini değiştirmek için:

	user.isMarried = true;

Array'ler liste yapmak için, object'ler bir şey hakkındaki farklı değerleri depolamak için daha uygun.

Array içinde object kullanılabilir:

	var list = [
		{
			username: "andy",
			password: "secret"
		}
		{
			username: "jess",
			password: "123"
		}
	]



## Build Facebook

// Burada basit bir Facebook yapılacak. İlk olarak database isimli bir değişken oluşturulacak ve içerisine kayıtlı bir kullanıcı eklenecek.

	var database = [
	{
		username: "John",
		password: "3456"
	}
	];

// İkinci olarak kullanıcı üstteki bilgilerle giriş yaptığında görebileceği bir timeline yapıldı.

	var newsFeed = [
		{
			username: "Jack",
			timeline: "Helloo everybody!!"
		},	
		{
			username: "Jones",
			timeline: "Byeeeee!!"
		},
		{
			username: "Whiskey",
			timeline: "Going to sleep!!"
		}
	];

// Üçüncü olarak kişinin sign in yapabilmesi için prompt ile kullanıcı adı ve şifre soruldu.

	var userNamePrompt = prompt("What's your username?");
	var passwordPrompt = prompt("Your password?");

// Kullanıcının adı ve şifresini kontrol edecek bir signIn function'ı oluşturuldu.

	function signIn(username, password) {
		if (username === database[0].username && password === database[0].password) {
			console.log(newsFeed);
		} else {
			alert("Sorry wrong username");
		}
	}

// Son olarak oluşturulan function'ın sayfa yüklenince başlaması için signIn komutu çalıştırıldı.

	signIn(userNamePrompt, passwordPrompt);



## Terminology

1. function declaration
	function newFunction() {

	}

2. Function expression (noktalı virgül ile biter!)
	var newFunction = function() {

	};

3. expression (expression'lar noktalı virgül ile biter)
	1+3;
	var a = 2;
	return true;

4. calling or invoking a function
	alert()
	newFunction(param1, param2);

5. Assign a variable
	var a = true;

6. function vs method (bir objenin içindeki function)
	
	function thisIsAFunction() {
	}

	var obj = {
		thisIsAMethod: function() {

		}
	}

Function ve method'a ulaşma yöntemi de farklıdır.
thisIsAFunction() //function
obj.thisIsAMethod() //method



## Loops

Loop işleri otomatikleştirmek için kullanılır. Mesela uzun bir todo listemiz var, ve bu listedeki her item'ın sonuna ünlem işareti koymak istiyoruz. Bunu tek tek yapmak oldukça zaman alabilir.


### FOR Loop
	
	var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study js",
	"eat healthy"
	]

	for (var i=0; i < todos.length; i++) {

	}

Üstte görülen for loop'ların genel ifadesi(ilk değer başlangıç noktasını verir, ikinci değer durulacak noktayı, üçüncü değer yapılacak işi verir), neredeyse her for loop'ta görülebilir. Açıklaması ise şöyle:
Burada kullanılan "i" loop'larda genel olarak kullanılan bir ifade, index'e karşılık geliyor. i=0'nun anlamı index'i 0'dan al, yani ilk item'dan başla. i < todos.length 'in anlamı "ilk olarak liste uzunluğunu al ve daha fazla uygulama", yani infinite loop'u durdurmak için kullanılır. i++ ise "ilk item'ı yaptıktan sonra diğer item'lara geç" demek (diğer bir deyişle i+1). 

	for (var i=0; i < todos.length; i++) {
		console.log(i);
	}

Yazdığımızda 0'dan başlayarak 4'e kadar sayıları basar. Çünkü 5. itemda bırakmasını söyledik.

	for (var i=0; i < todos.length; i++) {
		console.log(todos[i]);
	}

Yazdığımızda listedeki item'ları sıralar(clean room, brush teeth, etc..) Tüm itemların sonuna ! işareti koymak için (sadece console log çıktısına bir defalığına ekler):

	for (var i=0; i < todos.length; i++) {
		console.log(todos[i] + "!");
	}

Tüm console log çıktılarında göstermek için:

	for (var i=0; i < todos.length; i++) {
		todos[i] = todos[i] + "!";
	}

Önemli not: Bu tür bir loop'un içinde bir method kullanırsak (mesela todos.pop) "i < todos.length" işleminden dolayı sadece iki item kalana kadar işleme devam eder. Sorunlu olan (yani son iki item hariç hepsini çıkartan)

	for (var i=0; i < todos.length; i++) {
		todos.pop();
	}


Bunu düzeltmek için loop devreye girmeden todos.length'i bir değişkene atarız ve "i < todos.length" kısmını yeni değişken olan todosLength ile güncelleriz:

	var todosLength = todos.length;
	for (var i=0; i < todosLength; i++) {
		todos.pop();
	}

Bu şekilde yaptığımızda, item sayısını baştan belleğe alır ve listedeki tüm itemları çıkartmış oluruz.



### WHILE Loop

	var counterOne = 0;
	while (counterOne < 10) {
		console.log(counterOne);
		counterOne++
	}

Bu loop'ta counterOne değişkenini 0 yaptık ve işlemin 10'dan küçük olmasını istedik. counterOne++ kısmında, konsol saymaya 0'dan başlar ve 10'dan küçük olacak şekilde en yüksek rakamda işlemi durdurur.

Bunun tersi, yani 10'dan geriye şu şekilde yapabiliriz. CounterOne'daki -- işaretine dikkat. Eğer bunu ++ yapsaydık tarayıcı 10'dan yukarı doğru saymaya başlar, bitirecek bir ifade olmadığı için infinite loop'a girer ve çökerdi.

	var counterOne = 10;
	while (counterOne > 0) {
		console.log(counterOne);
		counterOne--
	}



### DO Loop (aka "do while loop")

	var counterTwo = 10
	do {
		console.log(counterTwo);
		counterTwo--
	} while (counterTwo > 0)

while loop ile do-while loop arasındaki fark; while loop'ta ilk olarak condition'ı kontrol ediyor. (counterOne=0) yani CounterOne 0'dan büyükse o zaman console logu yap.

do while loop ise ilk olarak işi yapıyor sonra kontrol ediyor. Eğer her ikisinde de > 10 yaparsak ilki hiçbir çıktı vermez, çünkü ilk condition 10'dan küçük olması gerekir diyor. Ancak ikincisinde sadece konsola 10 yazar, sonrası gelmez. CounterTwo 10 olduğu için onu basar konsola sonrasında conditiona takılır.



### FOREACH Loop (for ile farkı)

for ve foreach aşağıdaki işlemde aynı işi yapıyor. Ancak forEach ile çok daha az kod yazarak aynı işlemi gereçekleştirebiliyoruz.

	var todos = [
		"clean room",
		"brush teeth",
		"exercise",
		"study js",
		"eat healthy"
		]

	//FOR
	var todosLength = todos.length;
	for (var i=0; i < todosLength; i++) {
		console.log(todos[i], i);
	}

	//FOREACH
	todos.forEach(function(todo, i) {
		console.log(todo, i);
	})

forEach bir array'in peşine yazılır ve devamında ne yapacağını sorar. todos ile yapacağımız iş function ile belirtilir.

Yukarıdaki forEach Loop'ta function'ı asıl işlemden ayırabiliriz.

	function logTodos(todo, i) {
		console.log(todo, i);
	}

	todos.forEach(logTodos);

Bu şekilde ayırdığımızda logTodos function'ını başka yerlerde de kullanabiliriz. Mesela başka bir listemiz daha varsa (mesela todosImportant) üstteki kodun altına şunu eklememiz yeterli:

	todosImportant.forEach(logTodos);



## Facebook App 2


İlk facebook app'te sadece bir kullanıcı vardı, o yüzden sadece database[0] yazıp ilk kullanıcıyı kontrol ediyorduk. Ancak normalde böyle bir sitenin birden çok üyesi vardır. Bu yüzden tüm kullanıcıları tarayıp eşleşme var mı diye bakmamız gerek. Bunun içinde bir for loop yazmalıyız.

	function signIn(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			console.log(newsFeed);
		} else {
			alert("Sorry, wrong username")
		}
	}

Ancak böyle yaptığımızda girdiğimiz bilgileri her bir kullanıcıyla karşılaştırır ve eşleşme bulamadığı her seferinde wrong username uyarısı verir, taki eşleşmeyi bulana kadar. Bunu engellemek için yeni bir function yaratıp eşleşme olup olmadığını arka planda kontrol etmeliyiz.

	function isUserValid(username, password) {
		for (var i=0; i < database.length; i++) {
			if(database[i].username === username && database[i].password === password) {
				return true;
			} 
		}
		return false;
	}

Bu function'da database'deki bilgilerle girilen bilgileri tek tek kontrol ediyor, eğer bir eşleşme yakalarsa return true değerini veriyor. Eşleşme yoksa sonraki return olan false'a geçiyor. Buradan sonra asıl kod olan sign in function'a geçiş yapıyoruz.

	function signIn(username, password) {
		if (isUserValid(username, password)) {
			console.log(newsfeed);
		} else {
			alert("Sorry wrong username");
		}
	}

Kullanıcı adı ve şifresini isUserValid function'ı ile arka planda kontrol ettikten sonra eğer bilgiler doğruysa konsola newsfeed'i log'luyoruz. Eğer false dönüş olmuşsa "Sorry wrong username" uyarısı geliyor.




## ES6 and JS


ECMAScript (ES), standartlaştırılmış JavaScript'tir. ES6'in anlamı ECMAScript version 6'dır.



## Advanced Functions


İlk olarak eski JS'lerde yazılan bir kodla başlayıp sonrasında onu en yeni versiyona göre güncelleyeceğiz.

	function first() {
		var greet = 'Hi';
		function second() {
			alert(greet);
		}
		return second;
	}
	var newFunc = first();
	newFunc();


	const first = () => {
		const greet = 'Hi';
		const second() {
			alert(greet);
		}
		return second;
	}
	const newFunc = first();
	newFunc();

Üstteki function'ı ne zaman çalıştırsak scope nedeniyle "const greet, const first" tekrar tekrar oluşturulur. Ancak const sadece bir kere oluşturulabildiği için program hata verir. Bu yüzden scope'lar önemli. Şu şekilde düşünülebilir. Mesela programın ilerleyen aşamalarında greet değişkenini tekrar kullanmamız gerekiyorsa bu şekilde olduğunda tekrar değer atayamayız. Ama her function'a kendine ait bir scope oluşturursak, sanki hepsi kendi evreninde yaşıyormuş gibi olur ve birbiri ile bağlantısı olmaz.

### Closures

Child scope her zaman parent scope'taki değişkeni görebilir. A function ran, the function executed. It's never going to execute again but it's going to remember there are references to those variables so the child scope always has access to the parent scope. Parent scope don't havve access to the child.


### Currying

	const multiply = (a, b) => a * b;
	const curriedMultiply = (a) => (b) => a * b;
	curriedMultiply(3);

yazdığımızda sadece (a) değerini alır ve b değerinin eksik olduğunu bildirmek için function'ın devamını konsola yazar. Multiply yapabilmek için şu şekilde iki değer vermemiz gerekiyor. 

	curriedMultiply(3)(4);

Currying bir function'ı başka bir function'ı da dahil ederek birden çok değer alacak şekilde dönüştürmektir. Bunu yapmanın sebebi yine extensible olmasıdır. Örnek olarak şöyle birşey verilebilir. Mesela biz gelen her sayıyı 5 ile çarpmak istiyoruz. Bunu yapmak için a değerini sabitleyebiliriz.

	const multiplyBy5 = curriedMultiply(5);

Bu değişkeni eklediğimizde artık tek yapmamız gereken:

	multiplyBy5(7);

Bu function değer olarak 35 verir. Çünkü üstteki multiplyBy5 function'ında her verilen değeri 5 ile çarpması gerektiğini söyledik.


### Compose

Üçüncü bir function'ı oluşturmak için iki function'ı birleştirme işine Compose deniyor. Bu türde bir function'ın çıktısı diğer function'ın girdisi olarak kullanılır. 

	const compose = (f, g) => (a) => f(g(a));

Üstteki kodda olan şey, her bir girdi bir function'dır. Bunu şu şekilde kullanabiliriz.

	const sum = (num) => num + 1;
	compose(sum, sum)(5);

Üstteki kodda çıktı 7'dir. Compose içerisindeki son function olan f(g(a)) kısmına son yazdığımız satırda dedik ki a = 5, ikinci function olarak g'yi alıyoruz o da sum olması lazım, yani 5+1 = 6 eder. Son kısma geldiğimizde f function'ı da aynı şeyi yapar, değer olarak 6'yı alır ve yine sum yapar. Bu da +1 ile 7 eder.


### Avoiding Side Effects, Functional Purity

Side effects dediğimiz function'ın kendi dünyasında yaptığı işlerdir. Bir girdi geldiğinde function konsola loglayabilir, başka bir değişkene bu girdiyi atayabilir. Bunlar side effects olarak geçiyor.

	var a = 1;
	function b() {
		a = 2;
	}

Yazdığımızda b function'ı a değerini değiştiriyor ve bu kendi dünyasının dışındaki bir yere etki ediyor. a değeri normalde function'ın kendi evreni içerisinde değil, ancak parent scope'a ulaşabildiği için değişiklik yapabiliyor. Bu yüzden side effect deniyor. Bu tür side effect'lerden kaçınmamız lazım ve bunun için de functional purity olması lazım.

Bunun anlamı da bir function her zaman bir değer vermelidir(it must "return" a value). Girdi olarak ne girersek girelim bir function'ın aynı şekilde tepki vermesi gerekir. Başka bir deyişle bir function'a farklı zamanlarda aynı değeri girersek hep aynı sonucu vermelidir. Buna da determinism deniyor. Functional purity olması için, program çalıştırıldığında değişen durumların (veya verinin) bir function'ın çalışma şeklini değiştirmemesi gerekir.


## Advanced Arrays

Sade bir array şu şekildeydi:

	var array = [1, 2, 10, 16];

Biraz daha gelişmiş array ise şöyle

	const array = [1, 2, 10, 16];
	const double = []
	const newArray = array.forEach((num) => {
		double.push(num * 2);
		})
	console.log(double);

Yazdığımızda array içindeki sayıları alıp 2 ile çarpar ve çıkan sonucu double değişkeninin içerisine yazar (double.push).


### Map, Filter, Reduce

Bunlar JS'te en çok işimize yarayacak kodlardır.

Map ile yapabileceklerimiz:

Yukarıda forEach ile yaptığımız şeyi map ile de yapabiliriz (push kısmı hariç, çünkü forEach çıktısını bir yere göndermek ister, ama map'te öyle bir sorun yoktur. Sadece return ile verebiliriz.)

	const mapArray = array.map((num) => {
		return num * 2;
		});

map'in forEach'ten iyi olan tarafı, foreach'te başka bir değişken tanımlayıp çıktıyı ona göndermemiz gerekir. Çünkü forEach function'ın yazıldığı değişken bu değerleri değil sadece function'ı tutabilir. Ancak map (return ile) aynı değişken içine çıktıyı gönderebilir. Ayrıca forEach yukarıda bahsedilen side effect'lere neden olabilir. map, return kullandığı için illaki bir çıktı vermesi gerekir. 

Ayrıca forEach ve map'i daha da kısaltabiliriz. Ancak bu kısaltmayı yaptığımızda map oldukça kısa kaldığı için dosya boyutu daha küçük olur ve daha hızlı çalışır.

	const array = [1, 2, 10, 16];
	const double = []
	const newArray = array.forEach(num => {
		double.push(num * 2);
		})
	console.log(double);

Burada forEach'ten sonra gelen num'un etrafındaki parantezi kaldırdık. Bir de aynı işi map ile yapalım:

	const array = [1, 2, 10, 16];
	const mapArray = array.map(num => num * 2);
	console.log(mapArray);

Görüldüğü üzere forEach'ten oldukça kısa bir hale geldi.

Filter ile yapılabilecekler

	const filterArray = array.filter(num => num > 5);

Filter ile belli bir koşulu karşılayan item'ları seçip yeni değişkene atayabiliriz.

Reduce ile yapılacaklar:

	const reduceArray = array.reduce((accumulator, num) => {
		})

Accumulator, function'ın içinde oluşan bilgiyi saklayabildiğimiz yerdir.

	const reduceArray = array.reduce((accumulator, num) => {
		return accumulator + num;
	}, 0);

Üstte yazılan kodun anlamı reduce ile array içinde bulunan değerleri birleştirerek daha az item oluştur. Örnek üzerinden gidersek, en sonda görülen 0 değeri ile başlıyoruz ve ilk num değeri ile bunu topluyoruz (aradaki + işareti). İlk num değeri 1 olduğu için toplam 1 oluyor ve bu iş array'deki son item'a ulaşana kadar devam ediyor ve sonuç olarak başlangıç değeri olan 0 ve array içindeki dört sayıyı toplayarak sonuç olarak 29 veriyor. Başlangıç değeri olan 0'ı değiştirirsek sonuç da ona göre değişiyor.


## Advanced Objects - 114

###reference type

	var object1 = { value: 10 };
	var object2 = object1;
	var object3 = { value: 10 };

Bunları belirlediğimizde object2, object1'e eşittir. Ancak object3 ile object1 eşit değildir. 

Javascript'te "true, undefined, false, null, 'hello', 1" gibi type'lar primitive type olarak geçer. Ancak bir değişken nonprimitive type'tır. Primitive types programlama dili tarafından belirlenmiştir. Ancak Nonprimitive olanları kullanıcılar belirler. Nonprimitive olanlar sanki ayrı kutularda tutuluyor gibidirler. Dolayısıyla yeni bir değere sahip bir değişken, aynı değere sahip başka bir değişkenle eşit olamaz.


### context

Genellikle scope ile karıştırılır. 
	
	function b() {
		let a = 4;
	}
Bu fonksiyonda a'nın scope'u b'dir. window scope'tan bu a'ya ulaşamayız.

Context ise bize bir object'in içinde nerede olduğumuzu söyler. this parametresi ile uygulanır ve bu this oldukça kafa karıştırıcı olabilir. This'in anlamı içinde olduğumuz object'i seçmektir.

	function a() {
		console.log(this);
	}

Yazdığımızda window'u verir. Çünkü başka bir object'in içine girmedi. Ancak;

	const object4 = {
		a: function() {
			console.log(this)
		}
	}

yazdığımızda bize a: function'ı verir. Burada bir seviye aşağıya indiğimiz için artık window'u vermez. Aşağıdaki instatntiation için bu this kavramı önemlidir. 



### instantiation

Kodun bir kopyasını oluşturup tekrar kullanmak istediğimizde instantiation yaparız. Bir kodun bir sürü kopyasını oluşturma işlemine instantiation deniyor. Mesela multiplayer olan bir oyunda birden çok oyuncu olacağı için her bir oyuncu için baştan aynı kodları yazmak yerine aşağıdakini yapabiliriz. Yeni bir class oluştururken class adının büyük harfle başlaması kolaylık sağlıyor(?). Aşağıda Player isimli bir class oluşturuyoruz ve her yeni bir player oluşturduğumuzda ilk çalışacak olan function construction'dır.

	class Player {
		constructor(name, type) {
			this.name = name;
			this.type = type;
		}
		introduce() {
			console.log(`Hi I am $(this.name), I'm a $(this.type)`);
		}
	}

Bu şekilde ilk olarak constructor bölümünde oyun karakterinin ismi ve türünü belirtiyoruz. this. dediğimiz kısım sayesinde bu kodu her bir oyuncuya ayrı ayrı uygulayabiliriz.

Aşağıda yeni bir oyuncu olan wizard olşuturuyoruz. Bunu yaparken Player'ı genişletiyoruz(extend). super() olan kısım asıl player içindeki constructor'a ulaşmak için kullanılır. 

	class Wizard extends Player {
		constructor(name, type) {
			super(name, type)
		}
		play() {
			console.log(`WEEEEEEE I'm a $(this.type)`);
		}
	}

	const wizard1 = new Wizard('Shelly', 'Healer');
	const wizard2 = new Wizard('Shawn', 'Dark Magic');

Son iki satırda oluşturduğumuz iki yeni wizard'a baktığımızda üstteki kodlar sayesinde yeni bir wizard oluşturmamızın ne kadar kolay olduğunu görebiliriz. Her yeni wizard oluşturma esnasında sadece son satırı çoğaltıp gerekli değişiklikleri yapmamız yeterlidir. 


##ES7

### .includes()

Herhangi bir object'in içeriğinde parantez içerisindeki değer var mı yok mu kontrol eder. Mesela

	hellllooo.includes("o");

yazdığımızda true değerini verir. Çünkü hellloooo kelimesi içinde o harfi bulunmaktadır. Bunu array'ler içinde kullanabiliriz.


### **

Bu iki yıldız karakterinden sonra gelen sayı, değerin üssünü verir. 
	
	const cube = (x) => x**3

yazdığımızda x üzeri 3 hesabını yapar.

	cube(3);

İşleminin sonucu 27'dir. 3 x 3 x 3 = 27


## ES8

.padStart()
.padEnd()

Bu ikisi string'in başına veya sonuna boşluk eklemek için kullanılıyor. Bunu yaptığımızda string(tırnak içinde yazdığımız metin) dahil olmak üzere toplam 10 karakter oluyor. Mesela turtle 6 harfli olduğu için padStart başa 4 karakter(boşluk) ekler, toplamda 10 karakter olur.

	"turtle".padStart(10);

yazdığımızda sonuç "    turtle" olacaktır.


### Object.values / 
### Object.entries / 
### Object.keys (eski)

Bu üçü object'lere sanki bunlar array'miş gibi işlemler yapabilmemizi sağlar(map, filter vb.).

	let obj = {
		username0: 'Santa',
		username1: 'Rudolf',
		username2: 'Mr. Grinch'
	}

Üstteki gibi bir saçma object'imiz olduğunda filter gibi faydalı araçları kullanamayız. Çünkü bu tür araçlar array'lerde kullanılıyor.

	Object.keys(obj).forEach((key, index) => {
		console.log(key, obj[key]);
	})

Yazdığımızda konsol çıktısı hem username yazısı hem de değerleri olur. Object.keys bu object'e bir array gibi davranılmasını sağlar.

	Object.values(obj).forEach(value => {
		console.log(value);
	})

Yazdığımızda konsol çıktısı sadece değerler(Santa, Rudolf, Mr.Grinch) olur.

	Object.entries(obj).forEach(value => {
		console.log(value);
	})

Yazdığımızda hem username yazılarını hem de değerleri aşağıdaki gibi array'ler içinde verir.

	["username0", "Santa"]
	["username1", "Rudolf"]
	["username2", "Mr.Grinch"]

#### Real-life scenario:
Mesela username0, username1 gibi isimlendirmeleri kaldırıp 0,1,2 sayılarını isimlerin devamına (Santa0, Rudolf1, Mr.Grinch3) yazmak istersek:

	Object.entries(obj).map(value => {
		return value[1] + value[0].replace('username', ''); 
	})

return value[1] yazmamızın sebebi, elde etmek istediğimiz değerin array'in ikinci kısımda olması, örnekle açıklamak gerekirse, 958-960. satırlarda yazan kodun sonucu şu şekildedir:

	["username0", "Santa"]
	["username1", "Rudolf"]
	["username2", "Mr.Grinch"]

Burada username yazan kısmı değil, devamındaki isimleri almak istersek return value[] kısmına 1 yazmalıyız. Devamında bu değere ekleyeceğimiz şeyi + ile belirtiyoruz, ilk değer olan 0'dan başlayarak username'i boş bir string ile değiştiriyoruz ve sonuç username'ler siliniyor devamındaki sayılar ise kullanıcı adlarının sonuna ekleniyor.


### Debugging

Kodda bulunan hataları bulmamızı sağlar. console.log veya debugger kullanarak hataları veya kodun ne iş yaptığını görebiliriz. Debugger'ın güzelliği, kod içinde looping olacaksa bunları adım adım gösterir ve kodun ne işe yaradığını veya nerede hata verdiğini görmemizi sağlar. Örnek ile:

	const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
		(a, b) => a.concat(b), []);

Bu kodun ne iş yaptığını anlamak biraz zor. Ama kodda ufak değişiklikler yaparak daha anlaşılır hale getirebiliriz. reduce işlevi daha önceden anlatılmıştı. Bunu göz önüne alarak a olanların accumulator olduğunu anlarız. b ise array'in içindekilerdir. Bu nedenle b yerine array yazabiliriz.

	const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
		(accumulator, array) => accumulator.concat(array), []);

En sondaki [] işareti nedeniyle accumulator'ın boş bir array ile başlamasını istediğimizi gösteririz. Bu function'ı daha anlaşılır ve console.log yapılabilir hale getirmek için tek satırlık kod halinden çıkartıp uzun haline döndürürüz. Tek satır halinden çıkardığımız için return ifadesini ekleriz.

	const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
		(accumulator, array) => {
			console.log('array', array);
			console.log('accumulator', accumulator);
			return accumulator.concat(array)
	}, []);

Bu kodu çalıştırdığımızda 3 looping yaptığını görürüz. Çünkü array içinde 3 farklı array var. Bu function'ın görevi array içindeki 3 array'i tek bir array haline getirmektir. Konsolda flattened yazdığımızda üç farklı array'in içindeki bilgileri tek bir array içine alır, yani sonuç [0, 1, 2, 3, 4, 5] olacaktır.

console.log'un yanısıra bir de debugger kodunu kullanabiliriz.

	const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
		(accumulator, array) => {
			debugger;
			return accumulator.concat(array)
	}, []);

Bu kodu çalıştırdığımızda konsol, debugger moduna geçer ve kod ne zaman debugger yazısına denk gelirse orada çalışmaya ara verir. Kodun yaptığı bir sonraki işleme geçmek için debugger modunda sağ üstte bulunan step over butonuna tıklamamız gerekir. Bu sayede adım adım kodun ne aşamalardan geçtiğini görebiliriz. Looping aşamalarının hepsi bittikten sonra konsol normal haline döner.

## How Javascript Works(Ders:123) (Notlar eklenecek)

Sonunda güzel bilgiler var.

## Modules (Ders:124) (Notlar eklenecek)

ES Modülleri ile ilgili güzel bir makale var onun linkini eklemeliyim.

## Sublime Text 3 (Ders: 128)

Önerilen paketler
Babel
SidebarEnhancements
A File Icon
GitGutter
BracketHighlighter

## Git + Github 

Bir github reposunu bilgisayara ilk defa indirmek için:
	
	git clone //URL_of_the_repo 

Sadece yapılan değişiklikleri indirmek için 

	git pull

Yeni oluşturduğumuz / düzenlediğimiz dosyaları repoya yüklemek için ilk olarak onları izlenme listesine eklememiz gerekir. 

	git add index.html

Yazdığımızda index.html dosyasını izlenenlere ekledik. Değişiklik yaptığımız tüm dosyaları tek seferde eklemek için

	git add .

kullanmamız gerekir (dosya adı yerine . kullandık).

	git commit -m "mesajınız"

Bu komutla yaptığımız değişikliklerle ilgili bilgiyi "" içerisine mesaj olarak ekliyoruz. Değişiklikleri Github'a göndermek için 

	git push

komutunu kullanıyoruz.

Github ve lokal repo arasındaki farkları görmek için 

	git status

komutu verilir.


## Git + Github Advanced

Branching
Github'ta bir proje üzerinde çalışırken eğer aynı proje üzerinde çalışan farklı insanlar varsa hepsinin yaptığı katkılar (commit), master branch'e yüklenirse birbiriyle olan çakışmalar projede sorunlara neden olabilir. Bu yüzden bu tür durumlar için branch'ler kullanılır. Bir commit branch'e yüklendikten sonra çakışma olup olmadığı kontrol edilir ve sorun olmadığı anlaşılırsa master branch ile merge edilir (birleştirilir). 

	git branch 

yazdığımızda repoda bulunan tüm branchleri listeler. 

	git branch miniozellik

yazdığımızda miniozellik adında yeni bir branch oluşturur.

miniozellik branch'ini varsayılan yapmak için

	git checkout miniozellik

komutu verilir. Bu komuttan sonra yapılan git push komutu değişiklikleri miniozellik branch'ine gönderir.

Merge komutunu terminal veya github sitesinde yapabiliriz. Terminalden yapmak için vermemiz gereken komut birleştirmek istediğimiz branch'e checkout ile geçeriz ve şu komutu veririz.

	git merge master

Bu komutla şu an olduğumuz branch'i master ile birleştirir.

## Fork'u Güncel Tutma

Hali hazırda var olan bir projeyi fork ettiğimizde elimize projenin o anki hali bulunur. Ancak bu projeler birçok kişi tarafından düznlendiği için sürekli fork'u güncellememiz gerekir. Zero-to-Mastery reposunda bulunan getting started klasörü örnek olarak kullanılacaktır. Bunu şu şekilde yapabiliriz. 

	git remote add upstream https://github.com/zero-to-mastery/start-here-guidelines.git

Bu komutu verdiğimizde fork yapılan asıl repo, bizim repomuzun origin'i olarak eklenir. Bizim repomuz ise upstream olarak görünür. Bunu görmek için vereceğimiz komut:

	git remote -v

Forklanan repoyu güncellemek için tek vermemiz gereken komut:

	git pull upstream master



## NPM Setup and Package.json 

(Çok fazla ayrıntı var, daha sonra tekrar dönüp notları güncelleyeceğim)

İlk olarak nodejs paketini platforma özgü kurulum dosyasını indirerek kuruyoruz. npm ile inşa edeceğimiz sitenin dizinine girdikten sonra site ile ilgili package.json'ı oluşturmak için şu komutu veririz:

	npm init

Bu komut ile program bize birçok soru sorar, çoğunluğu varsayılan değerde bırakılabilir. Sadece author, webpage gibi bilgileri girmemiz yeterlidir. 

NPM kurduktan sonra npm ile react'i kurmamız gerekir. Bunun haricinde önerilen diğer paketler live-server ve lodash. live-server'ı kurmak için vermemiz gereken komut:

	npm install -g live-server

Kodu açıklamak gerekirse "npm install" kısmı npm kullanarak söylediğim paketi kur, ve -g kurulan paketi global, yani her yerden eriilebilir şekilde kur demektir. npm ile birşeyler kurarken ya bu şekilde global olarak kurarız, ya da projeye özgü bir program kuracaksak locally, yani yerel olarak sadece proje dizininin içine kurarız. live-server tüm projelerimizde kullanabileceğimiz bir program olduğu için globally kurduk. live-server'ın güzelliği bilgisayarı geçici bir server'a çevirmesidir. Kurulduktan sonra tarayıcıda görüntülemek istediğimiz dizine girip live-server komutunu verirsek üzerinde çalıştığımız site tarayıcıda açılır ve kodlarda yaptığımız her türlü değişikliği algılayarak tarayıcıdaki web sayfasını otomatik günceller. 

Bir sonraki program, lodash ise sanki bir javascript eklentisidir. JavaScript'te yazdığımız bir çok koda (getElementById, etc) yenilerini eklemeye yarar. Bunu sadece projeye özgü yani yerel olarak kuracağız.

	npm install lodash

lodash ile eklenen özellikler her tarayıcıda çalışmadığı için ya browserify ya da webpack kullanarak tüm tarayıcılara uyumlu hale getirmeliyiz. (Ayrıntılar daha sonra)


## React.js

