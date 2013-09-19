// JavaScript Document

$(function(){
	//alert("working");

	// VARIABLE DEFS
	var isworking = false;
	var projectClicked = false;



	//missing way to determine if mouse has left one elem and entered another before triggering the mouseover event 


	// FUNCTION DEFS
	// function hovEffect(elem, status){
	// 	if (status == false && elem.hasClass("clicked") == false ) { 
	// 		elem.filter(':not(:animated)').animate({ height: "+=35px"}, 200);
	// 	}
	// 	else if (status == true && elem.hasClass("clicked") == false){ 
	// 		elem.filter(':not(:animated)').animate({ height: "-=35px"}, 200); 
	// 	} 
	// 	return 0;
	// }




	// PROJECT ELEM FUNCTIONALITY
	// $('div.project:not(.loadmore)')
	// .mouseenter(function(){ hovEffect($(this), false); })
	// .mouseleave(function(){ hovEffect($(this), true); })
	// .click(function(){ 
	// 	//toggle open
	// 	if (projectClicked == false) { //use class names to check for err
	// 		  //use class names to check for err
	// 		// $(this).slideDown({ height: "+=300px" }, 200, function(){ 
	// 			// $(this).addClass("clicked").children(".hidden").fadeIn('fast');
	// 		// });
	// 	}
	// });






	// DIVISION ELEM FUNCTIONALITY
	// $('div.division:not(.loadmore)')
	// .mouseenter(function(){ hovEffect($(this), false); })
	// .mouseleave(function() { hovEffect($(this), true); })
	// .click(function() {
	// 	if (projectClicked == false) { //use class names to handle this error check
	// 		//use class names to check for error
	// 		// $(this).slideDown('slow', function(){ 
	// 			// $(this).addClass("clicked");
	// 		// });
	// 		//animate the box down to show the content underneath
	// 	}
	// })

	// fire off a click event on the elements btn element to drop down and reveal extra content
	

	//the see more button, or any element of the division div is clicked
	$('.divisionbtn').click(function(e){
		e.preventDefault();
		$(this).fadeOut(500).parent().siblings('.hide').slideDown(500);			
	});


	//carousel slider on home page
	$('#preview').carousel({
		interval: 6000,
		pause: "hover"
	});
	
	//set clicks on carousel a navigators
	$('.carousel-control.left').click(function() { $('#preview').carousel('prev'); });
	$('.carousel-control.right').click(function() { $('#preview').carousel('next'); });
	

	//instead of hover states with subtle dropdown, do a hover effect with an outer radial gradient glow on both sides of div 


	$('.tilt')
	.mouseenter(function(){ $(this).stop().animate({"margin-left": "+=5px"}, 200); })  
	.mouseleave(function(){ $(this).stop().animate({"margin-left": "-=5px"}, 200); })
	.click(function(e){
		$(this).removeClass('tilt').css('cursor', 'auto').children('.hide').slideDown(500);
	});

	// $('.project').hover(function(){
	// 	if($(this).hasClass('tilt') == true) {
	// 		$(this).css('cursor', 'pointer');
	// 	}
	// });

	$('.loadmore').click(function(e){
		e.preventDefault();
		$(this).find('> .hide').slideDown(500);
		$(this).children('a').eq(0).slideUp('fast');
	});

	$('.fancybox').fancybox();
	
	$('.img-can a')
	.mouseenter(function(e){ 
		e.preventDefault();
		$(this).stop().fadeTo('fast', 1);
	}).mouseleave(function(e){
		e.preventDefault();
		$(this).stop().fadeTo('fast', .6);
	});

});