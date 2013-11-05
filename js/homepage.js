// JavaScript Document

$(function(){

	//randomly assign home page backgrounds
	var range = Math.floor((Math.random()*7)+1); 
	var imagePath = '"images/homepage_bkg_';
	function randomBackground(){
		$('.home-parallax').css('background-image', 'url(' + imagePath + range + '.png")');
	}
	randomBackground();
	

	
	//cookie values to control home nav animation
	
	/*function getCookie(c_name) {
		var c_value = document.cookie;
		var c_start = c_value.indexOf(" " + c_name + "=");
		if (c_start == -1) { c_start = c_value.indexOf(c_name + "="); }
		if (c_start == -1) { c_value = null; }
		else { c_start = c_value.indexOf("=", c_start) + 1;
			var c_end = c_value.indexOf(";", c_start);
			if (c_end == -1) {	c_end = c_value.length; }
			c_value = unescape(c_value.substring(c_start,c_end));
		}
		return c_value;
	}

	
	function setCookie(c_name,value,exdays) {
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=c_name + "=" + c_value;
	}
	
	function checkCookie(cookieName){
		var visited=getCookie("visited");
		if (visited!=null && visited!="") { return true; }
		else { return false; }
	}
	
	
	if ( checkCookie(visited) == false ) {
		setCookie(visited, 1, 10);

	}*/
	
	setTimeout( function(){
		var timing = 250;
		$('#foldNav').slideDown(timing);
		$('.flex-control-nav').fadeIn(timing); 
	}, 2500 );

});
