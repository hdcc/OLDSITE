// JavaScript Document

$(function(){
	//alert("working");

	// VARIABLE DEFS
	var isworking = false;
	var projectClicked = false;



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
	


	$('.tilt')
	.mouseenter(function(){ $(this).stop().animate({"margin-left": "+=5px"}, 200); })  
	.mouseleave(function(){ $(this).stop().animate({"margin-left": "-=5px"}, 200); })
	.click(function(e){
		$(this).children('.reveal').slideUp('fast');
		$(this).stop()
		.animate({"margin-left": "-=5px"}, 200)
		.unbind().css('cursor', 'auto')
		.children('.hide')
		.slideDown(500);
	});

	$('a.reveal').click(function(e){
		e.preventDefault();
		$(this).slideUp('fast').parent('.tilt').click();
	});


	$('.loadbtn').click(function(e){
		e.preventDefault();
		$(this).parent('.loadmore').find('> .hide').slideDown(500);
		$(this).slideUp('fast');
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
