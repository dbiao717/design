// JavaScript Document
$(function(){
	var Span = $(".header_a_ul a span");
	var VideoImg = $(".video_img img");
	var Logo = $(".logo");
	var Btn = $(".line_btn");
	var Mian = $(".mian_detail");
	
	/*menu菜单*/
	$(".header_a_ul a").hover(function(){
		var index = $(this).index();
		Span.eq(index).css('top','-10px');
	},function(){
		var index = $(this).index();
		Span.eq(index).css('top',0);
	});
	
	/*Video图片放大*/
	VideoImg.each(function(i){
		VideoImg.eq(i).hover(function(){
			
			TweenMax.to($(this),0.5,{transform:"scale(1.3)",ease:Strong.easeOut,onComplete:function(){}});
	
		},function(){

			TweenMax.to($(this),0.5,{transform:"scale(1)",ease:Strong.easeOut,onComplete:function(){}});
		});
	});
	
	/*指示箭头*/
	TweenMax.to($('.return img'),1,{y:-5,opacity:0,repeat:-1,yoyo:true,repeatDelay:0,ease:Power4.easeInOut,onComplete:function(){}});
	
	/*回到顶部*/
	$('.return img').click(function(){
		toTop(0);
	})
	
	function toTop(num)
	{
		TweenMax.to($('html,body'),.5,{scrollTop:num});
	}
	
	
	/*LOGO序列帧*/
	Logo.mouseover(function(){  
		
		Logo.addClass("on");
		
	}).mouseout(function(){
		
		Logo.removeClass("on");
		
	}); 
	
	/*详情点击关闭*/
	Btn.click(function(){
		var moveTop = $(".video_area").offset().top;
		var headH = $(".header_center").height();
		//alert(parseInt(moveTop));
		//alert(moveTop);
		toTop(parseInt(moveTop - headH - 20));
		TweenMax.to(Mian,.5,{height:0,onComplete:function(){
			Mian.hide();
		}});	
		
	});
	/*
	var num=0;
	var showLogo=setInterval(function(){
		$('.logo_bg').css("background-position",' 0 '+(-(num * 66))+'px');
		num++;
		if(num>65){
			num=0;
		}
	},60);*/
	
})