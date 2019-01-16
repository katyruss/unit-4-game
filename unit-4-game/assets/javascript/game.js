$(document).ready(function() {

    var computerNumber = Math.floor(Math.random() * 102) + 19;
        console.log("computerNumber: " + computerNumber);
        $(".computerNumber").html(computerNumber);

    var randomArray = [];
        console.log("randomArray: " + randomArray);

    for (i = 0 ; i < 4 ; i++) {
        var crystals = Math.floor(Math.random() * 12) + 1;
        console.log("crystalNumber: " + crystalNumber);
        randomArray.push(crystalNumber);
    }
    var blueCrystal = Math.floor(Math.random() * 12) + 1; 
		console.log("Blue Crystal: " + blueCrystal); 
		$("#blueCrystal").html("<img src=" + "assets/images/bluecrystal.png" + "value=" + blueCrystal + ">"); 

	var greenCrystal = Math.floor(Math.random() * 12) + 1; 
		console.log("Green Crystal: " + greenCrystal); 
		$("#greenCrystal").html("<img src=" + "assets/images/greencrystal.png" + "value=" + greenCrystal + ">"); 

	var redCrystal = Math.floor(Math.random() * 12) + 1; 
		console.log("Red Crystal: " + redCrystal); 
		$("#redCrystal").html("<img src=" + "assets/images/redcrystal.png" + "value=" + redCrystal + ">");
	
	var yellowCrystal = Math.floor(Math.random() * 12) + 1; 
		console.log("Yellow Crystal: " + yellowCrystal); 
		$("#yellowCrystal").html("<img src=" + "assets/images/yellowcrystal.png" + "value=" + yellowCrystal + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var playerTotalScore = 0; 
        console.log("playerTotalScore: " + score); 
        
    function reset () {
        computerNumber = Math.floor(Math.random() * 102) + 19; 
        console.log("compPick: " + computerNumber); 
        $(".randomNumber").html(computerNumber); 
    
        playerTotalScore = 0; 
        $(".scoreDisplay").html(playerTotalScore); 

    var blueCrystal = Math.floor(Math.random() * 12) + 1; 
		console.log("Blue Crystal: " + blueCrystal); 
		$("#blueCrystal").html("<img src=" + "assets/images/bluecrystal.png" + "value=" + blueCrystal + ">"); 

	var greenCrystal = Math.floor(Math.random() * 12) + 1; 
		console.log("Green Crystal: " + greenCrystal); 
		$("#greenCrystal").html("<img src=" + "assets/images/greencrystal.png" + "value=" + greenCrystal + ">"); 

	var redCrystal = Math.floor(Math.random() * 12) + 1; 
		console.log("Red Crystal: " + redCrystal); 
		$("#redCrystal").html("<img src=" + "assets/images/redcrystal.png" + "value=" + redCrystal + ">");
	
	var yellowCrystal = Math.floor(Math.random() * 12) + 1; 
		console.log("Yellow Crystal: " + yellowCrystal); 
		$("#yellowCrystal").html("<img src=" + "assets/images/yellowcrystal.png" + "value=" + yellowCrystal + ">");

    $("#crystals").click(function(){
        var newTotalScore = playerTotalScore += parseInt($(this)).toLocaleString("value"));
        console.log("New Total Score: " + playerTotalScore);
        $(".playerTotalScore").html(newTotalScore);

        if (newTotalScore===computerNumber) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            reset();
        }

        else if(newTotalScore > computerNumber) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            reset();
        }
    }
});