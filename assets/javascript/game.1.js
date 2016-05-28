var starwars = {

	player: "", // set to a character once chosen by the user

	character = {
		name: "",  // May not be needed for anything more than debugging
		healthPoints: 0,
		attackPower: 0,
		counterAttack Power: 0,

	testfunc: funtion() {

	}
	
	attack: function() {

	},

	counterAttack: function {

	}
}

/*
	Player chooses character

    Every character that was not picked becomes an enemy on a new line

    The player chooses which enemy they will attack by clicking on that enemy's 
    picture and the enemy moves to "defender area"

	CREATE LOOP TO DO THIS:

		[SAC - NOTE]: I think this is the event loop that is part of
					the DOM(? the ready() method of the DOM is essentially a
					loop waiting for user input.  

					We will write methods to invoke when an event is 
					received.  For example, there will be an "attack method" that
					will be attached to the "attack button" being clicked.

					The Healh Points etc. will be updated by the object appropriately,
					we will update the screen and return to the event loop to wait.

					I think this part is just an IF statement:
					|||
					vvv
	When attack button is clicked... 
        While Player Character Health Points > 0 && Defender Health Points > 0:
        
                        Player Character Health Points stay constant AND
                        Defender LOSES Health Points
                            
                        Defender Counter Attacks AND
                        Player Character LOSES Health Points
        
        WHEN
                        health points of Defender <= 0 
                            move Defender out of "Defender Area"
                            Player can now choose another enemy to attack

                        Player character health points <= 0
                            Game over, show reset button. 



CREATE RESET BUTTON TO:
        move all characters back to original spot.  start game again.

*/

    $(document).ready(function(){

        $(".thumbnail1").on("click", function(){
                    $("#1").animate({opacity: '.5'});
                });
        $(".thumbnail2").on("click", function(){
                    $("#2").animate({width: '500px'});
                });
        $(".thumbnail3").on("click", function(){
                    $("#three").animate({right: '500px'});
                });
        $(".thumbnail4").on("click", function(){
                    $("#4").animate({height: '500px'});
                });
     })

     