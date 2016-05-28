var starwars = {

	// Keep track of the current state of the game.  These are based on the different
	// states of the display, however, they may not all be needed.
	// 1: New Game, 2: Player Selected, 3: Defender Selected, 4: Attacking
	// 5: Game Lost, 6: Enemy Defeated, 7: Game Won

	newGame: 1, 

	playerSelected: 2, 
	defenderSelected: 3,
	attacking: 4,
	gameLost: 5,
	enemyDefeated: 6,
	gameWon: 7,

	state: this.newGame,
	player: "", 	// set to the first character selected by the user
	defender: "", 	// set to the next character selected by the user

	playersAvailable: {},
	enemiesAvailable: {},

	// Reset the game.
	initGame: function() {
		this.state = this.newGame;
		this.player = {},	// may need to use clear() function here
		this.defender = {},

		this.loadPlayersAvailable();
		this.clearEnemiesAvailable();
	},

	// Build the html to display all the characters available 
	// in the player section.  This will display all the characters
	// in the game regardless of when this method is called.
	loadPlayersAvailable: function() {
		this.playersAvailable = {
			'#darthvader': { name: 'Darth Vader', healthPoints: 120, attackPower: 10 },			
			'#lukeskywalker': { name: 'Luke Skywalker', healthPoints: 100, attackPower: 20},			
			'#stormtrooper': { name: 'Storm Trooper', healthPoints: 150, attackPower: 30},			
			'#yoda': { name: 'Yoda', healthPoints: 100, attackPower: 40}			
		};

		// Push the thumbnail info for each character into the html

	},

	// Build the html to display the enemies available in the 
	// enemiesAvailable section.  This will only display the characters
	// in the game left once a player has been selected.
	loadEnemiesAvailable: function() {

	},

	// Once an enemy has been selected, remove all the html for
	// displaying the enemies available.
	clearEnemiesAvailable: function() {

	},

	setPlayer: function(player) {
		// This method will be called when a player is selected.
		// * Set the player a character object with the attributes set
		//		with values from the player object passed in.
		// * Remove it from the list of available players
		// * Move the from the list of availabel players to the player area
		// * Move the available players to the enemies available section
		// * Set the game state to 1 for Player Selected

		// Needed for jQuery
		var playerId = '#' + player.id;

		this.player = this.playersAvailable[playerId];

		// Move the selected player to the player area
		$(playerId).remove();

		// Get the player div
		var playerDiv = $('#player');

		// Add a div for the name of the player selected
		playerDiv.append('<div>' + this.player.name + '</div>');

		// Add an image for the player selected
		var playerImg = $('<img>');
		playerImg.attr('src', 'assets/images/' + player.id + '.jpg');
		playerImg.attr('alt', this.player.id);
		playerDiv.append(playerImg);

		// Add a div for the health points of the player selected
		playerDiv.append('<div>' + "100");

		this.state = this.playerSelected;
	},

	setDefender: function(defender) {
		// This method will be called when a defender is selected.
		// * Set the game state = Defender Selected
		// * Remove it from the list of available enemies
		// * Move it to the defender area
		if (starwars.defender == "") {
			// Set the defender for the first time
			starwars.defender = defender;
		}		
		else {
			// One defender has already been selected, select a new one
			starwars.defender = defender;		
		}

		this.state = this.defenderSelected;
	},

	setNewDefender: function(newDefender) {
		// This method will be called when a new defender is selected.
		// It may not be necessary.
	},

	attack: function() {
		// this will be called once the player and defender are selected
		// and the attack button is clicked.
		console.log("starwars.play: attack button pressed");

		// For now, use the button for testing other jQuery stuff
	},

} // end of starwars game object

// This function will be call upon a user event
//
$(document).ready(function(){

	starwars.initGame();

	$(".thumbnail").on("click", function(){
		// If any of the characters are clicked on, take appropriate action
		if (starwars.state == starwars.newGame){
			starwars.setPlayer(this);
		}
		else if (starwars.state == starwars.playerSelected) {
			starwars.setDefender(this);
		}
		else if (starwars.state == starwars.enemyDefeated) {
			starwars.setDefender(this);
		}
		else if (starwars.state == starwars.defenderSelected ||
				 starwars.state == starwars.attacking ||
				 starwars.state == starwars.gameLost ||
				 starwars.state == starwars.gameWon) {
			// ignore for now
		}
		else {
			// console.log("Invalid State: " + starwars.state);
		}
    });

    $(".attackButton").on("click", function(){
    	// Make sure the player and defender have been selected
    	if (starwars.player == "" || starwars.defender == "")
    		return;  // ignore attack button for now

    	// player attacks defender here
    });
})