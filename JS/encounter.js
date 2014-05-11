// Monster related variables.
var monsters = ["rat", "goblin", "zombie", "werewolf", "vampire", "lich"];
var monster;
var monsterHP;
var monsterDamage;

// Hit related variables.
var hit = ["Critical Miss", "Miss", "Glancing Hit", "Hit", "Critical Hit"];

// This function determines what monster the player will be fighting when an encounter begins.
function encounter() {
	// This assigns a value from the monsters array by generating a random number between 0 and 5.
	window.monster = monsters[Math.floor(Math.random() * 5)];

	if (monster == "rat") {
		window.monsterHP = 10;
		window.monsterDamage = 0;
		document.getElementById("encounter").innerHTML = "<p>You have encountered a " + monster + "!</p>";
	}
	else if (monster == "goblin") {
		window.monsterHP = 20;
		window.monsterDamage = 1;
		document.getElementById("encounter").innerHTML = "<p>You have encountered a " + monster + "!</p>";
	}
	else if (monster == "werewolf") {
		window.monsterHP = 40;
		window.monsterDamage = 2;
		document.getElementById("encounter").innerHTML = "<p>You have encountered a " + monster + "!</p>";
	}
	else if (monster == "vampire") {
		window.monsterHP = 30;
		window.monsterDamage = 3;
		document.getElementById("encounter").innerHTML = "<p>You have encountered a " + monster + "!</p>";
	}
	else {
		window.monsterHP = 20;
		window.monsterDamage = 4;
		document.getElementById("encounter").innerHTML = "<p>You have encountered a " + monster + "!</p>";
	}
}

//This function handles the mechanics of battling monsters. It is far from finished.
function attack() {
	//This variable is assigned one of the values from the hit array. This is done by generating a random number between 0 and 5.
	var attackRoll = hit[Math.floor(Math.random() * 5)];
	//This variable is used to work out damage, assigned a random number betwen 1 and 6.
	var damage = Math.floor((Math.random() * 5) + 1);

	/* This if tree works out whether or not the attack was a success.
	Damage is then assigned appropriately. Critical Miss deals half
	damage to the player. Glancing Hit half damage to enemy. Hit is
	normal damage to enemy, and Critical double. */
	
	/* IMPORTANT TO DOS: 
	# Make it so that when the monster gets to 0 HP or below, it dies.
	# Write a function for the monster's attack.
	# Make it so that the player takes damage and can die.
	# Assign XP and gold to the player upon killing a monster.
	*/
	if (attackRoll == "Critical Miss") {
		var damage = damage/2;
		window.currentHP = currentHP - damage;
		document.getElementById("encounter").innerHTML = attackRoll + "! You swing wildly with your " + weapon + " and hit yourself, dealing " + damage + " damage to yourself!"+ "<br />" + window.monsterHP;
	}
	else if (attackRoll == "Miss") {
		document.getElementById("encounter").innerHTML = attackRoll + "! You lunge sloppily, the " + monster + " easily anticipates your attack and dodges out of the way."+ "<br />" + window.monsterHP;
	}
	else if (attackRoll == "Glancing Hit") {
		var damage = damage/2;
		window.monsterHP = monsterHP - damage;
		document.getElementById("encounter").innerHTML = attackRoll + "! Your attack is off balance, and the " + monster + " dodges, but you still nick them, dealing " + damage + " damage." + "<br />" + window.monsterHP;
	}
	else if (attackRoll == "Hit") {
		window.monsterHP = monsterHP - damage;
		document.getElementById("encounter").innerHTML = attackRoll + "! You attack steadily and hit the " + monster + " square on, dealing " + damage + " damage." + "<br />" + window.monsterHP;
	}
	else {
		var damage = damage*2;
		window.monsterHP = monsterHP - damage;
		document.getElementById("encounter").innerHTML = attackRoll + "! You attack with expertise, landing a deadly attack upon the " + monster + ", dealing " + damage + " damage." + "<br />" + window.monsterHP;
	}
}