
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  



	$(".new").click(function() {
		// create random number
	var theNumber = Math.floor(Math.random() * 100) + 1;
		//set guesses to zero
	$("#count").html(0)
	});		


	$("#userGuess").submit(function(x) {
		 if ( x >= theNumber - 10 && x <= theNumber + 10 ) {
				$("h2 #feedback").html("<h2> Very hot </h2>");
			} else if (x >= theNumber - 20 && x <= theNumber + 20 ) {
				$("h2 #feedback").html("<h2> Hot </h2>");
			} else if (x >= theNumber - 40 && x <= theNumber + 40) {
				$("h2 #feedback").html("<h2> Cold </h2>");
			} else if (x >= theNumber - 60 && x <= theNumber + 60) {
				$("h2 #feedback").html("<h2> Very cold </h2>");
			}
	}

});
