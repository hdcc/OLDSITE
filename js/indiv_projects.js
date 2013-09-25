// JavaScript Document

$(function(){

// ================================================== PROJ IMG CAROUSEL
 	$('.bxslider').bxSlider({
 		mode: 'fade',
  		captions: true
 	});

// ================================================== END PROJ IMG CAROUSEL  

	$('.reveal').click(function(e){
		e.preventDefault();
		$(this).parent('div').find('> .hide').slideDown('500');
		$(this).slideUp('fast');
	});
});
