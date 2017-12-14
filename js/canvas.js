function gototop(){
	$('#backtotop').bind('click',function(){
		$("html, body").animate({ scrollTop: 0 }, "1000");
	});
}
function playtv_onimg(){
	$('#video').detach();
	// $('.list_item').unbind().bind('click',function(e){
	// 	var url = 'product.html?id=' + $(this).find('.Showreels').attr('data');
	// 	window.open(url);
	// });
	$("#first_item").unbind();
}
function addColor(){
	var tmp_value = 1;
	var setTimer;
	var player;
	
	$('.list_item').each(function(i){
		$(this).bind('mouseenter',function(e){
			
			var that = $(this);
//			if(that.find('.tv').length != 0 ){
//				clearTimeout(setTimer);
//				player=null;
//				$('.video_marsk,#video').detach();
//				var that_obj = that.find('.imgarea');
//				if(that_obj.find('#video').length == 0){
//					var v_html = '<div id="video"></div>';
//					var video_marsk = '<div class="video_marsk"></div>';
//					that_obj.append(v_html).append(video_marsk);
//				}
//				var tv_w = that.find('.tv').width();
//				var tv_h = that.find('.tv').height();
//				var tv_url = that.find('.tv').attr('data');
//				var pic_url = that.find('.tv').attr('src');
//				try{
//					setTimer = setTimeout(function(){
//						player = jwplayer("video").setup({
//							file: tv_url,
//							height: tv_h,
//							image: pic_url,
//							width: tv_w,
//							volume: '100',
//							controls: false,
//							autostart: true,
//							repeat: true
//						});
//					},1000);
//				}catch(e){}
//			}
			if(that.attr('id') != 'first_item'){
				TweenMax.to(that.find('img'),0.5,{scaleX:1.2,scaleY:1.2,onComplete:function(){}});
			}
			
			that.css({zIndex:101});
			var current_w = that.width() + 10;
			var current_h = that.height() + 10;
			var type = that.find('.type').attr('data');
			var color = '';
			if(type == 'work'){
				color = '#0099CB';
			}else if(type == 'techinical'){
				color = '#55BB4B';
			}else if(type == '3D'){
				color = '#FC2367';
			}
			if(type == 'work' || type == 'techinical' || type == '3D' ){
				that.find('.color_area').css({width:current_w,height:current_h,backgroundColor:color});
				TweenMax.to(that.find('.color_area'),0.3,{css:{opacity:1,top:'-10px',zIndex:10} ,onComplete:function(){}});
				that.find('.desc').addClass('current_desc');
			}
		});
		$(this).bind('mouseleave',function(){
			if($(this).attr('id') != 'first_item'){
				TweenMax.to($(this).find('img'),0.5,{scaleX:1,scaleY:1,onComplete:function(){}});
			}
			
			TweenMax.to($(this).find('.color_area'),0.3,{css:{opacity:0,top:'0',zIndex:10} ,onComplete:function(){}});
			$(this).find('.desc').removeClass('current_desc');
			$(this).css({zIndex:100});
			clearTimeout(setTimer);
			if(!player){
			}else{
				player=null;
				$('.video_marsk,#video').detach();
			}
		});
	});
}
function autosize(){
	var _width,listContainer = $('.list_container');
	if (window.innerWidth){
		_width = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		_width = document.body.clientWidth;
	}
	if(!checkMobile()){
		_width = $(window).width();
	}
	$('.nav_areabg').css({width:_width});
	$('#nav_area').css({width:_width});
	if(_width < 2000 && _width > 1200){
		$('#footer,.morelinks').css({width:1200});
	}else{
		$('#footer,.morelinks').css({width:_width});
	}
	if(_width >= 1900){
		// listContainer.css({paddingLeft:330,paddingRight:330});
	}
	if(_width < 1900 && _width >1680){
		// listContainer.css({paddingLeft:230,paddingRight:200});
		$('#nav_area').css({width:_width-100});
	}
	if(_width <= 1680 && _width >1440){
		// listContainer.css({paddingLeft:(_width-550)/6,paddingRight:0});
		$('#nav_area').css({width:_width-250});
	}
	if(_width < 1440 && _width >=1280){
		// listContainer.css({paddingLeft:(_width-750)/22,paddingRight:(_width-750)/22});
		$('#nav_area').css({width:_width-100});
	}
	if(_width < 1280 && _width >784){
		if(_width<=1233 && _width >784 ){
			// listContainer.css({paddingLeft:0,paddingRight:0});
		}else{
			// listContainer.css({paddingLeft:(_width-750)/24,paddingRight:(_width-750)/24});
		}
		$('#nav_area').css({width:_width-100});
	}
	if(_width <= 784){
		$('.nav_bottom .right').hide();
		$('#footer,.morelinks').css({width:_width-220});
		$('.list_container').width(474);
		if(_width > 474 ){
			$('.list_item .imgarea img').css({width:474,height:258});
			// $('.list_container').css({paddingLeft:parseInt((_width-474)/8),paddingRight:0});
		}else{
			$('.list_item .imgarea img').css({width:_width-10,height: "auto"});
			// $('.list_container').css({paddingLeft: 0,paddingRight:0});
		}
	}else{
		$('.list_container').width('auto');
		$('.list_item .imgarea img').each(function(i){
			var parent_obj = $(this).parent();
			if($(this).parent().attr('data')){
				var str_wh = $(this).parent().attr('data').split('&');
				var pic_w = str_wh[0];
				var pic_h = str_wh[1];
				if(i==0){
					pic_w = 714;
					pic_h = 388;
				}
				$(this).css({width:pic_w,height:pic_h});
			}
			$('.nav_bottom .right').show();
		});
	}
	if(checkMobile() && _width <= 400){
		$('.nav_areabg').css({width:_width+240});
		$('.list_item .imgarea img').css({width:474,height:258});
		$('.nav_bottom .right').hide();
		$('#footer,.morelinks,.footer_bg').css({width:_width+240});
		$('.list_container').css({paddingLeft:(Math.abs(_width-474)/2),paddingRight:0});
	}
	$("#canvas-bg").hide();
	setTimeout(function(){
		$("#canvas-bg").attr("width" , parseInt($("body").width()));
		$("#canvas-bg").attr("height" , parseInt($("body").height()) - 480 );
		$("#canvas-bg").show();
	} , 1000);
}

function get_ajaxdata(){
	var showMore = $('#showmore');
	var lanVal = $("#nav_area").attr("lan");
	showMore.unbind();
	showMore.bind('click',function(){
		var p_num = parseInt($('#setpagenum').attr('data'))+1;
		var url= 'index-result.html?';
		if($('#f_click').attr('data') != 1 ){
			url +='type='+$('.sx_link .current').attr('data');
		}
		$.ajax({
		   type: "GET",
		   url: url+"&p="+p_num+"&language="+lanVal,
		   success: function(data){
				if(data != 1){
					var adItems = [],
					_height = $(document.body).height();
					// pFragment = document.createDocumentFragment("div");
					// console.log("pFragment",pFragment);
					$('.loading_marsk').css({height:_height});
					$('.loading_marsk,.loading_img').show();
					var ary = jQuery.parseJSON(data);
					$(ary).each(function(i,d){
						$(d).each(function(i2,d2){
							//var addtv = "class='tv' data='"+d2.tvurl+"'";
							var item ='<div class="list_item clist_item'+ i2 +'"><a href="product.html?id='+d2.id+'" class="list_item_holder">' +
								'<div class="type" data="'+d2.type+'"></div>' +
								'<div class="color_area"></div>' +
								'<div class="imgarea" data="'+d2.w+'&'+d2.h+'">' +
									'<img calss="img_o" ';
//							if(d2.istv == 1){
//								item += addtv;
//							}
							item +=' src="'+d2.picurl+'" width="'+d2.w+'" height="'+d2.h+'">'+
								'</div>'+
								'<div class="desc">'+
									'<P>'+d2.name+'</P>'+
									'<span class="Showreels" data="'+d2.id+'">'+d2.ftype+'</span>'+
								'</div>'+
							'</a></div>';
							// pFragment.appendChild(item);
							//alert(item);
							adItems.push(item);
						});
					});
					var addContainer = $('#container'),
						_aHtml = adItems.join("");
						//console.log(_aHtml);
					addContainer.append(_aHtml);
					// $addContainer.masonry( 'appended', adItems );

					var setMas = function(){
						addContainer.masonry({
						  itemSelector: '.list_item',
						  isAnimated: false,
						  transformsEnabled: true,
						  // animationOptions:{ duration: 800,easing: 'linear',queue: true },
						  transitionDuration: 0.5
						});
					}
					addContainer.find("img").load(function(){
						setTimeout(function(){
							playtv_onimg();
							setMas();
							autosize();
							addColor();
							$('.loading_marsk,.loading_img').hide();
							$('#setpagenum').attr('data',p_num);
						},200);
						addContainer.masonry('reloadItems');
					});
				}
			}
		});
	});
}
function sx_link_ux(){
	var cPositonT,$conTainer,_listItem;
	var lanVal = $("#nav_area").attr("lan");
	$conTainer = $('#container');
	_listItem = $conTainer.find(".list_item");
	cPositonT= $('.sx_link .current').position().top+12;
	$('#tjq').css({'top':cPositonT});
	var links_obj = $('.sx_link a');
	links_obj.each(function(i){
		$(this).bind('click',function(){
			$('#f_click').attr('data','2');
			$('.list_item').css({'overflow':'hidden'});
			$('.sx_link a').removeClass('current');
			$(this).addClass('current');
			TweenMax.to($('#tjq'), 0.5, {css:{top:$(this).position().top+12}});
			$('#setpagenum').attr('data',1);
			$('.loading_marsk,.loading_img').show();
			$.ajax({
				   type: "GET",
				   url: "index-result.html?type="+$('.sx_link .current').attr('data'),
				   success: function(data){
							TweenMax.to(
								_listItem,
								2,
								{css:{opacity:0},
								onComplete:function(){
									$conTainer.empty();
									$conTainer.css({'display':'none'});
									var ary = jQuery.parseJSON(data);
									$(ary).each(function(i,d){
										$(d).each(function(i2,d2){
											//var addtv = "class='tv' data='"+d2.tvurl+"'";
											var item ='<div class="list_item"><a href="product.html?id='+d2.id+'" class="list_item_holder">' +
												'<div class="type" data="'+d2.type+'"></div>' +
											'<div class="color_area"></div>' +
													'<div class="imgarea" data="'+d2.w+'&'+d2.h+'">' +
													'<img calss="img_o" ';
//											if(d2.istv == 1){
//												item += addtv;
//											}
											item +=' src="'+d2.picurl+'" width="'+d2.w+'" height="'+d2.h+'">'+
												'</div>'+
												'<div class="desc">'+
													'<P>'+d2.name+'</P>'+
													'<span class="Showreels"   data="'+d2.id+'">'+d2.ftype+'</span>'+
												'</div>'+
											'</a></div>';
											$conTainer.append(item);
										});
									});
									var firstItem;
									if(lanVal=="en"){
										firstItem = '<div id="first_item" class="list_item" style="background:#EDEDED;"><img src="'+picLink.replace(/^\"|\"$/g,'')+'/images/fontdesc_03.png"><div class="fontdesc_div"><a class="fontdesc" target="_blank" href="/aboutus.html">Read More &gt</a></div></div>'
									}else{
										firstItem = '<div id="first_item" class="list_item" style="background:#EDEDED;"><img src="'+picLink.replace(/^\"|\"$/g,'')+'/images/fontdesc_04.png"><div class="fontdesc_div"><a class="fontdesc" target="_blank" href="/aboutus.html">更多阅读 &gt</a></div></div>'
									}
									$conTainer.prepend(firstItem);
									var setMas = function(){
										$conTainer.masonry({
										  itemSelector: '.list_item',
										  columnWidth: 1,
										  isAnimated: true,
										  animationOptions:{ duration: 800,property:"height",easing: 'linear',queue: false },
										  transitionDuration: 1
										});
									}
									setTimeout(function(){
										$conTainer.masonry('reloadItems');
										setsize_pic();
										autosize();
										setMas();
									},100);
									$conTainer.fadeIn(1000);
									playtv_onimg();
									addColor();
								 	$('#f_click').attr('data','2');
									$conTainer.find("img").load(function(){
										$('.loading_marsk,.loading_img').hide();
										$('.list_item').css({'overflow':'inherit'});
									});
								}
							});
					   }
				});
		});
	});
}
function setsize_pic(){
	$('.list_item .imgarea img').each(function(i){
		var pic_w = $(this).width();
		var pic_h = $(this).height();
		var parent_obj = $(this).parent();
		parent_obj.attr('data',pic_w+'&'+pic_h);
	});
}
$(document).ready(function(){
	var _gfheight = $('#first_item').find("img").height() + 30;
	$('#first_item').css({height:383});
	if($('#video_wrapper')){
		setInterval(function(){
			$('#video_wrapper').css({'position':'absolute'});
		},10);
	}
	setsize_pic();
	autosize();
	addColor();
	playtv_onimg();
	$(window).bind('resize',function(){
		autosize();
	});
	$("#canvas-bg").attr("width" , parseInt($("body").width()));
	$("#canvas-bg").attr("height" , parseInt($("body").height()) - 480 );
	// var preLoadFun = function(){
	// 	var isPreloaderVisible = true,
	// 	$preloader = $("#preLoad");
	// 	var showSitePreloader = function (_inLink){
	// 		$preloader.fadeIn(400,function()	{
	// 			isPreloaderVisible = true;
	// 			if ( _inLink ) window.location = _inLink;
	// 		});
	// 	}
	// 	var hideSitePreloader =  function (){
	// 		if( !isPreloaderVisible )
	// 			return;
	// 		$preloader.fadeOut(400,function(){
	// 			isPreloaderVisible = false;
	// 			clearInterval( preloaderInterval );
	// 		});
	// 	}
	// 	var goToContent  = function ( _inLink ){
	// 		showSitePreloader( _inLink );
	// 	}
	// 	var preloaderInterval = setInterval( hideSitePreloader, 800 );
	// 	$('a:not([href*="#"],[href*="javascript:;"],[target="_blank"],[target="_top"],[target="_self"],[href^="mailto:"])').click(function(e){
	// 		e.preventDefault();
	// 		if( $(this).attr('href').indexOf('#') == -1 ){
	// 			if( !$(this).hasClass('active') ){
	// 				goToContent( $(this).attr('href'));
	// 			}
	// 		}
	// 	});
	// }
	// preLoadFun();
});
function checkMobile(){
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i) ? true : false;
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i) ? true : false;
		},
		iOS: function() {
			return navigator.userAgent.match(/iPad|iPod|iPhone/i) ? true : false;
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i) ? true : false;
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry()  || isMobile.Windows() || isMobile.iOS());
		}
	};
	return isMobile.any();
}