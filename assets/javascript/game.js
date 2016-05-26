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

	state: newGame;
	player: "", 	// set to the first character selected by the user
	defender: "", 	// set to the next character selected by the user

	characterList: [],
	defenderList: [],

	character: {
		healthPoints: 0,
		attackPower: 0,
		counterAttackPower: 0,

		attack: function() {

		},

		counterAttack: function() {

		}
	},

	// Reset the game.
	newGame: function() {
		state = newGame;
		player = "",	// may need to use clear() function here
		defender = "",

		loadPlayersAvailable();
		clearEnemiesAvailable();
	}

	// Build the html to display all the characters available 
	// in the player section.  This will display all the characters
	// in the game regardless of when this method is called.
	loadPlayersAvailable: function() {

	}

	// Build the html to display the enemies available in the 
	// enemiesAvailable section.  This will only display the characters
	// in the game left once a player has been selected.
	loadEnemiesAvailable: function() {

	}

	// Once an enemy has been selected, remove all the html for
	// displaying the enemies available.
	clearEnemiesAvailable() {

	}

	playerSelected: function() {
		// This method will be called when a player is selected.
		// * Set the game state to 1 for Player Selected
		// * Remove it from the list of available players
		// * Move the available players to the enemies available setion
		this.state = playerSelected;
	},

	defenderSelected: function() {
		// if player is set, return true, otherwise return false
		return (defender != "")
	},

	setPlayer: function() {
		// set the player to the selected
		// move the other characters to the defender list

	},

	setDefender: function(){
		// set the defender to the character selected
		// at this point, the game is ready to be played
	},

	play: function() {
		// this will be called once the player and defender are selected
		// and the attack button is clicked.
		console.log("starwars.play: attack button pressed");
	},

} // end of starwars game object

// This function will be call upon a user event
//
$(document).ready(function(){

	$(".thumbnail").on("click", function(){
		// If any of the characters are clicked on, take appropriate action
		if (starwars.state == newGame){

			starwars.player = this; 
			// move the other characters to the enemy list

			// Test display: none to make a thumbnail disappear
			//$("#3").css({"display:", "none"});
			$("#3").remove();
		}
		else if (starwars.defender == "") {
			// the player has been selected but the defender has not so set
			// the defender, move all the other characters to the defender area
			//  and wait for next event
			starwars.defender = this;
			// move the other characters to the defender area
		}
		else {
			// ignore the click for now
		}
    });

    $(".attackButton").on("click", function(){
    	// Make sure the player and defender have been selected
    	if (starwars.player == "" || starwars.defender == "")
    		return;  // ignore attack button for now

    	starwars.play();
    });
})