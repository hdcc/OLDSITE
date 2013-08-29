// JavaScript Document

$(function(){
	//alert("working");


	var isworking = false;
	var projectClicked = false;
	
	$('div.project')
	.mouseover(function(){ 
		if(isworking == false && projectClicked == false) { 
			//$(this).hasClass('moved') == false        //condition if the element hasn't been hovered over and you hover over from a separate project.
			isworking = true; 
			$(this).animate({ height: "+=25px"}, 150, function(){ isworking=false; }); 
			} 
	})
	.mouseout(function(){ 
		if(isworking == false && projectClicked == false) { 
			isworking = true; 
			$(this).animate({ height: "-=25px"}, 150, function(){ isworking=false;} ); 
		}
	})
	.click(function(){ 
		//toggle open
		if (projectClicked == false) {
			projectClicked = true;
			$(this).children(".hidden").show('fast');
		}
	});
	
});