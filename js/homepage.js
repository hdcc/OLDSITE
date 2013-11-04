// JavaScript Document

$(function(){

	//randomly assign home page backgrounds
	var range = Math.floor((Math.random()*6)+1); 
	var imagePath = '"images/homepage_bkg_';
	function randomBackground(){
		$('.home-parallax').css('background-image', 'url(' + imagePath + range + '.png")');
	}
	randomBackground();
	
	//home page background fade out on load
	
	//message displays. black background with clear message. 
	//background absolutely positioned with black color
	//the background fades out.
	
	setTimeout( function(){
		var timing = 250;
		$('#foldNav').slideDown(timing);
		$('.flex-control-nav').fadeIn(timing);
	}, 2500 );
	
});
