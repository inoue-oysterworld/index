$(function() {
  $(".top-wrapper").click(function(){
	  $(this).animate({"marginTop": "30%"},10000);
  });

  $(".container").click(function(){
	    $(this).fadeOut(20000);
	    $(this).slideUp(20000);
	  });



});