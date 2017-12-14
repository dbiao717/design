/*

global.js


*/

$(function(){
	
	resizeCenter();
	$(window).resize(function(){
		resizeCenter();
				
	});
	

});




function resizeCenter(){
	var windowHeight = $(window).height();
	$("#center").css({
		height : windowHeight - 140	
	});

	if( windowHeight >= 750 ){
		$(".content").addClass("moreSize");
	}
	else{
		$(".content").removeClass("moreSize");	
	}
}




