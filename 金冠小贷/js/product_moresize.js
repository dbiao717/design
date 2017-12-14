/*

global.js


*/
var resizeTimer = null;
$(function(){
	
	$('#slider').nivoSlider();
	$('#slider-small').nivoSlider();
	

	resizeCenter();
	$(window).resize(function(){
		
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function(){
			resizeCenter();	
		}, 100);
				
	});
	

});




function resizeCenter(){
	
	var windowHeight = $(window).height();
	
	if( windowHeight <= 750 ){
	
		$("#wrapper-small").show();
		$("#wrapper").hide();
	}
	else{	
	
		$("#wrapper-small").hide();
		$("#wrapper").show();
	}
	
	$(".nivo-directionNav").css({
		"width": $(window).width()

	});
			
}





































