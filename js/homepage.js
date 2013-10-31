// JavaScript Document

$(function(){
	
	var height_video = $(window).width();
	var height_responsive = (height_video / 1.78011) + 1;
	var window_height = $(window).height();
	
	
	function fullscreenImgHeight(){ 
		$('#home').css({height:window_height}); 
		//$('body').css({height:window_height});
	}
	
	fullscreenImgHeight();
	
	$(window).bind('resize',function() {
		fullscreenImgHeight();
	});	
	
	$(window).resize(function() {
		var height_video = $(window).width();
		var height_responsive = (height_video / 1.78011) + 1;
	});
	
	
	//randomly assign home page backgrounds
	var range = Math.floor((Math.random()*4)+1);
	var imagePath = '"images/homepage_bkg_';
	function randomBackground(){
		$('#home').css('background-image', 'url(' + imagePath + range + '.png")');
	}
	randomBackground();
	
	//home page background fade out on load
	
	//message displays. black background with clear message. 
	//background absolutely positioned with black color
	//the background fades out.
	
});
