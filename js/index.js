// JavaScript Document
$(function(){
		
	/*-----------------------背景音乐-----------------------*/
	var btnMusic=$('#btn_music')[0];
	
	btnMusic.volume = 0.20;//音量
	
	btnMusic.pause();
	
	$(".music").toggle(function(){
		$(".music").addClass("music-ico");
		//$('.music img').remove();
		//$('.music').append('<img src="images/music.png">');
/*		$('.music img').attr({
			"src" : ""
		}).attr({
			"src" : "images/music.png"
		});*/
		btnMusic.play();
	},function(){
		$(".music").removeClass("music-ico");
		//$('.music img').remove();
		//$('.music').append('<img src="images/music.gif">');
/*		$('.music img').attr({
			"src" : ""
		}).attr({
			"src" : "images/music.gif"
		});*/
		btnMusic.pause();
	});
	
	
	$(".ico02,.headerbody ul li,.logo,.iphneMenu a,citem a,.bg,.Previous,.list,.next").click(function(){ 
		//$('body,html').animate({ scrollTop: 200 }, 2000);
		$('#canvas-bg').remove();
		
	});
	
	/*-----------------------当前页点击面-----------------------*/
	
	$('.logo a,.IMenu a').click(function(){
		var url = window.location.href;
    	var loc = url.substring(url.lastIndexOf('/')+1, url.length);
		if(loc=='index.html'){
			return false;
		}
	});
	
	$('.PMenu a').click(function(){
		var url = window.location.href;
    	var loc = url.substring(url.lastIndexOf('/')+1, url.length);
		if(loc=='Photography.html'){
			return false;
		}
	});
	
	$('.AMenu a').click(function(){
		var url = window.location.href;
    	var loc = url.substring(url.lastIndexOf('/')+1, url.length);
		if(loc=='about.html'){
			return false;
		}
	});
	
	/*-----------------------index-----------------------*/
	
	arr=[
	'javascript:;',
	'http://www.jjjvac.com',
	'gibbs_index/index.html',
	'http://www.ml-sh.com/',
	'http://www.jqr365.cn/',
	'webpage/index.html',
	'gi2014/index.html',
	'http://www.shsoong-chingling.com/',
	'javascript:;',
	'javascript:;',
	'gwantsi_2015/index.html',
	'金冠小贷/index.html',
	];
	
	
	var rn='<div class="content js-isotope">';
	function addImage(){

		for(var i=1;i<13;i++){
			rn+='<div class="citem">'+
					'<div class="bg"></div>'+
					'<span><a href="'+arr[i-1]+'" target="_blank" class="ico01"></a><a href="works.html?code='+i+'" class="ico02"></a></span>'+
					'<img src="images/ui/img'+i+'.jpg">'+
			   '</div>';
			}
			rn+='</div>';
			$(".main").append(rn);
		}
	addImage();
	
	$('.Previous').click(function(){
		var str=getQueryString('code');	
		str=parseInt(str);
		str-=1;
		
		if(str == 0){
			return false;
		}
		window.location.href="works.html?code="+str;
		
	});
	
	$('.next').click(function(){
		var str=getQueryString('code');	
		str=parseInt(str);
		str+=1;		
		if(str == 9){
			return false;
		}
		window.location.href="works.html?code="+str;
		
	});
	

	var str=getQueryString('code');	
	var url='images/ui/img'+str+'/works'+str+'.jpg';
	$('.works img').attr('src',url);
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	} 			
	
	/*-----------------------photography-----------------------*/
	
	p1=[
	'AnnaMelina1',
	'AnnaMelina2',
	'AnnaMelina3',
	'AnnaMelina4',
	];
	
	p2=[
	'May 2011',
	'May 2012',
	'May 2013',
	'May 2014',
	];
	num=[
		13,7,8,9
	];
	var str=getQueryString('code');	
	var url='images/Photography/photo'+str+'/photo'+str+'.jpg';
	
	var img_str='';
	for(var i=1;i<=num[str-1];i++){
		img_str += '<img src="images/Photography/photo' + str+'/photo' + i + '.jpg" />';
	}
		img_str+='<p style="margin-top:30px;">'+p1[str-1]+'</p><br>'+
        		'<p>'+p2[str-1]+'</p>';
	$('.photo').append(img_str);
	//$('.photo img').attr('src',url);
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	};
	
	/*----------------------------------------------*/
	
	var iphneMenu = $('.iphneMenu');
	
	var time;
	
	$(".heid_menu").on('click',function(){
		
		clearTimeout(time);
			
		time=setTimeout(function () {
			if(iphneMenu.css('display') == 'none')
			{
				iphneMenu.slideToggle(200);
			}
			else
			{
				iphneMenu.slideToggle(200);
			};
		}, 200);
			
	});
	
	
	
	$(window).resize(function () {
		$('.iphneMenu').css({
			"display":"none"
		});
	});
	
	
	
	$('.citem,.weixin,.weibo,.BackPot,.entry .a_entry a,.headerbody .logo:hover').on('mouseover',function(){
		
		$('.citem .bg').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.citem span').css({
			"transition":"all 0.5s ease-in-out"
		});
		
		$('.weixin').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.weibo').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.BackPot').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.entry .a_entry a').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.headerbody .logo:hover').css({
			"transition":"all 0.5s ease-in-out"
		});
		
	});
	
	$('.citem,.weixin,.weibo,.BackPot,.entry .a_entry a,.headerbody .logo:hover,.headerbody ul li a').on('mouseout',function(){

		$('.citem .bg').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.citem span').css({
			"transition":"all 0.5s ease-in-out"
		});
		
		$('.weixin').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.weibo').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.BackPot').css({
			"transition":"all 0.5s ease-in-out"
		});
		
		$('.entry .a_entry a').css({
			"transition":"all 0.5s ease-in-out"
		});
		$('.headerbody .logo a').css({
			"transition":"all 0.5s ease-in-out"
		});
		
		$('.headerbody ul li a').css({
			"transition":"all 0.5s ease-in-out"
		});
	});
	
/*-------------------------	
	$('.headerbody h1 a').on('mouseover',function(){
		
		clearTimeout(time);
		
		time=setTimeout(function () {
			$('.headerbody h1 a').css({
				"width":"241px"
			})
		}, 300);
		
	});
	
	$('.headerbody h1 a').on('mouseout',function(){

		clearTimeout(time);
		
		time=setTimeout(function () {
			$('.headerbody h1 a').css({
				"width":"97px"
			})
		}, 300);

	});
	------------------------------------*/
	

	$('.BackPot').click(function(){
		toTop(0);
	})
	function toTop(num)
	{
		TweenMax.to($('html,body'),0.5,{scrollTop:num});
	}
	
	/*--------------------*/
	var $win = $(window);
	
	$win.on("scroll",function(){
		
		var st = $win.scrollTop();
		console.log(st);
		if(st>150){

			//$('.entry').fadeIn(300);
			$('.entry').css({
				"top":"0"
			})
			
			
		}
		if(st<200){
			
			//$('.entry').fadeOut(300);
			$('.entry').css({
				"top":"-70px"
			})
		}
	});
	
	/*--------------------*/
	var wh=$win.height();
	
	$win.scroll(function(){
		
		var s=wh-$win.scrollTop();
		
		console.log(s);

		if(s<264){

			$('.BackPot').fadeIn(300);
		}
		if(s>644){

			$('.BackPot').fadeOut(300);
		}
		if(s>327){
			
			$('.BackPot').fadeOut(300);
			
		}
	
	});
	
	/*图片放大*/
	var citemImg = $('.citem img');
	var citemSpan = $('.citem span');
	
	var mainBg = $('.main2 .bg');
	var mainBgImg = $('.main2 .citem img');
	
	citemSpan.each(function(i){
		citemSpan.eq(i).hover(function(){
			
			TweenMax.to(citemImg.eq(i),0.8,{transform:"scale(1.03)",ease:Strong.easeOut,onComplete:function(){}});
	
		},function(){

			TweenMax.to(citemImg.eq(i),0.8,{transform:"scale(1)",ease:Strong.easeOut,onComplete:function(){}});
		});
	});
	/*-----------------------------*/
	mainBg.each(function(i){
		mainBg.eq(i).hover(function(){
			
			TweenMax.to(mainBgImg.eq(i),0.8,{transform:"scale(1.03)",ease:Strong.easeOut,onComplete:function(){}});
	
		},function(){

			TweenMax.to(mainBgImg.eq(i),0.8,{transform:"scale(1)",ease:Strong.easeOut,onComplete:function(){}});
		});
	});
	/*-------------------------*/
	mainBgImg.each(function(i){
		mainBgImg.eq(i).hover(function(){
			
			TweenMax.to(mainBgImg.eq(i),0.8,{transform:"scale(1.03)",ease:Strong.easeOut,onComplete:function(){}});
	
		},function(){

			TweenMax.to(mainBgImg.eq(i),0.8,{transform:"scale(1)",ease:Strong.easeOut,onComplete:function(){}});
		});
	});

	

});
