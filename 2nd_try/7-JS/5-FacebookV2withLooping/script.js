var database = [
	{
		username: "josh",
		password: "123344",
	},
	{
		username: "sally",
		password: "1234",
	},
	{
		username: "ingrid",
		password: "1222",
	},
	{
		username: "sad",
		password: "777",
	},
];

var newsfeed = [
	{
		username: "Qas",
		timeline: "Hello world",
	},
	{
		username: "var",
		timeline: "heeyyy there",
	},
	{
		username: "qwetrt",
		timeline: "How is it going",
	},
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(username, password) {
	if(isUserValid(username, password)) {
			console.log(newsfeed);
		} else {
			alert("Sorry wrong username");
		}
	}

	// if (username === database[0].username && 
	// 	password === database[0].password) {
	// 	console.log(newsfeed);
	// } else {
	// 	alert("Sorry wrong username");
	// }


signIn(userNamePrompt, passwordPrompt);