// JavaScript Document

$(function(){
	//alert("working");

	// VARIABLE DEFS
	var isworking = false;
	var projectClicked = false;



	//missing way to determine if mouse has left one elem and entered another before triggering the mouseover event 


	// FUNCTION DEFS
	function hovEffect(elem, status){
		if (status == false && elem.hasClass("clicked") == false ) { 
			elem.filter(':not(:animated)').animate({ height: "+=55px"}, 200);
		}
		else if (status == true && elem.hasClass("clicked") == false){ 
			elem.filter(':not(:animated)').animate({ height: "-=55px"}, 200); 
		} 
		return 0;
	}




	// PROJECT ELEM FUNCTIONALITY
	$('div.project:not(.loadmore)')
	.mouseenter(function(){ hovEffect($(this), false); })
	.mouseleave(function(){ hovEffect($(this), true); })
	.click(function(){ 
		//toggle open
		if (projectClicked == false) { //use class names to check for err
			  //use class names to check for err
			$(this).animate({ height: "+=300px" }, 200, function(){ 
				$(this).addClass("clicked").children(".hidden").fadeIn('fast');
			});
		}
	});






	// DIVISION ELEM FUNCTIONALITY
	$('div.division:not(.loadmore)')
	.mouseenter(function(){ hovEffect($(this), false); })
	.mouseleave(function() { hovEffect($(this), true); })
	.click(function() {
		if (projectClicked == false) { //use class names to handle this error check
			//use class names to check for error
			$(this).animate({ height: "+=300px" }, 300, function(){ 
				$(this).addClass("clicked");
			});
			//animate the box down to show the content underneath
		}
	})




	//see more clicked
	//hide the see more div
	//fade in hidden content



	//carousel slider on home page
	$('#preview').carousel();
	//set clicks on carousel a navigators


	//instead of hover states with subtle dropdown, do a hover effect with an outer radial gradient glow on both sides of div 



});