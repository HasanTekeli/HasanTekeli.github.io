var database = [
	{
		username: "josh",
		password: "123344",
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

function signIn(username, password) {
	if (username === database[0].username && 
		password === database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Sorry wrong username");
	}
}

signIn(userNamePrompt, passwordPrompt);