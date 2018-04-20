/*Object in an array*/
var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "super"
	},{
		username: "ingrid",
		password: "123"
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "\"So tired of learning\""
	},
	{
		username: "Sally",
		timeline: "\"Javascript is cooolll!\""
	}
];



/*Check if the user's name and password are in the database, if they are, show the timeline messages on console log*/
function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		 
		}
	}
	return false;
}

function signIn(username, password) {
	console.log(isUserValid(username, password));

	if (isUserValid(username, password)) {
		console.log(newsFeed[0].username + " said " + newsFeed[0].timeline,"\n" + newsFeed[1].username + " said " + newsFeed[1].timeline);
	} else {
		alert("Sorry, wrong username and password");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);