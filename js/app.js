$(document).ready(function(){
   
var newGame = function(){
	return Math.floor(Math.random() * 100) + 1;
}

var randomNumber = newGame();

var guessCount = 0;


$(".new").click(function() {
	guessCount = 0
	$("#count").html(guessCount)
	//$("#guessList li").remove();
});



var checkNumber = function(randomNumber, userNumber){
	var difference = Math.abs(randomNumber - userNumber)
	if (difference <= 10) {
		return "Very hot";
	} else if (difference <= 20) {
		return "Hot";
	} else if (difference <= 40) {
		return "Cold";
	} else if (difference <= 60) {
		return "Very cold";
	} else return "Super cold";
}

$("#guessButton").click(function() {
	
	var userNumber = $("#userGuess").val();
	var result = checkNumber(randomNumber, userNumber);
	$("#feedback").text(result);
	


	guessCount = guessCount + 1;
	$("#count").html(guessCount);
	
	$("ul#guessList").append("<li>" + userNumber + "</li>");
});



/*--- Display information modal box ---*/
$(".what").click(function(){
	$(".overlay").fadeIn(1000);

});

/*--- Hide information modal box ---*/
$("a.close").click(function(){
	$(".overlay").fadeOut(1000);
});
  
});
