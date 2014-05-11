// Character related variables.
var gold = 0;
var HP = 10;
var lvl = 1;
var XP = 0;
var HP = 10;
var currentHP = 10;
var charname;

// Weapon and hit related variables.
var weapon;
var hit = ["Critical Miss", "Miss", "Glancing Hit", "Hit", "Critical Hit"];

// This function sets the variables charname and weapon with user input from the form on the index page, then starts the game.
function charFill(form) {
	window.charname = form.charname.value;
	window.weapon = form.weapon.value;
	/* These next commands find the divs of the same id and modify their style (CSS) from visible to hidden, or vice versa.
	In effect, it controls what the user sees on the page. */
	document.getElementById("charForm").style.visibility="hidden";
	document.getElementById("charInfo").style.visibility="visible";
	document.getElementById("monsterInfo").style.visibility="visible";
	document.getElementById("encounter").style.visibility="visible";
	document.getElementById("charActions").style.visibility="visible";
	// The next two lines call the charLoad and encounter functions. encounter() is in the encounter.js file.
	charLoad();
	encounter();
}

//This function outputs the starting character info to to the charInfo div.
function charLoad() {
	document.getElementById("charInfo").innerHTML = "<p>Name: " + window.charname + "<br />" + "Weapon: " + window.weapon + "<br />" + "Hitpoints: " + currentHP + "/" + HP + "<br />" + "Level: " + lvl + "<br />" + "XP: " + XP + "<br />" + "Gold: " + gold + "</p>";
}