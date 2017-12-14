//gototop
function gototop(){
	$('#backtotop').bind('click',function(){
		$("html, body").animate({ scrollTop: 0 }, "1000");
	});
}
function playtv_onimg(t_url){
	$('#video').detach();
	$('.list_item').delegate('.video_marsk','click',function(e){
		var url = 'product.html?id=' + $(this).parent().parent().find('.Showreels').attr('data');
		window.open(url);
	});
	$('.list_item').delegate('img','click',function(e){
		var url = 'product.html?id=' + $(this).parent().parent().find('.Showreels').attr('data');
		window.open(url);
	});
}
function addColor(){
	var tmp_value = 1;
	var setTime;
	var player;
	$('.list_item').each(function(i){
		$(this).bind('mouseenter',function(e){
			if($(this).find('.tv').length != 0 ){
				clearTimeout(setTime);
				player=null;
				$('.video_marsk,#video').detach();
				var that_obj = $(this).find('.imgarea');
				if(that_obj.find('#video').length == 0){
					var v_html = '<div id="video"></div>';
					var video_marsk = '<div class="video_marsk"></div>';
					that_obj.append(v_html).append(video_marsk);
				}
				var tv_w = $(this).find('.tv').width();
				var tv_h = $(this).find('.tv').height();
				var tv_url = $(this).find('.tv').attr('data');
				var pic_url = $(this).find('.tv').attr('src');
				try{
					setTime = setTimeout(function(){
						player = jwplayer("video").setup({
							file: tv_url,
							height: tv_h,
							image: pic_url,
							width: tv_w,
							volume: '100',
							controls: false,
							autostart: true,
							repeat: true
						});
					},300);
				}catch(e){}
			}
			$(this).css({zIndex:101});
			var current_w = $(this).width() + 10;
			var current_h = $(this).height() + 10;
			var type = $(this).find('.type').attr('data');
			var color = '';
			if(type == 'work'){
				color = '#0099CB';
			}else if(type == 'techinical'){
				color = '#55BB4B';
			}else if(type == '3D'){
				color = '#FC2367';
			}
			if(type == 'work' || type == 'techinical' || type == '3D' ){
				$(this).find('.color_area').css({width:current_w,height:current_h,backgroundColor:color});
				TweenMax.to($(this).find('.color_area'),0.3,{css:{opacity:1,top:'-10px',zIndex:10} ,onComplete:function(){}});
				$(this).find('.desc').addClass('current_desc');
			}
		});

		$(this).bind('mouseleave',function(){
			TweenMax.to($(this).find('.color_area'),0.3,{css:{opacity:0,top:'0',zIndex:10} ,onComplete:function(){}});
			$(this).find('.desc').removeClass('current_desc');
			$(this).css({zIndex:100});
			clearTimeout(setTime);
			if(!player){
				//alert(0);
			}else{
				player=null;
				$('.video_marsk,#video').detach();
			}
		});
	});
}
function autosize(){
	var _rwidth;
	if (window.innerWidth){
		_rwidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		_rwidth = document.body.clientWidth;
	}
	_rwidth = $(window).width();
	var loadImgFun = function(){
		$('.list_item .imgarea img').each(function(i){
			var parent_obj = $(this).parent();
			if($(this).parent().attr('data')){
				var str_wh = $(this).parent().attr('data').split('&');
				var pic_w = str_wh[0];
				var pic_h = str_wh[1];
				$(this).css({width:pic_w,height:pic_h});
			}
			$('.nav_bottom .right').show();
		});
	}
	$('.nav_areabg').css({width:_rwidth});
	if(_rwidth < 1920 && _rwidth >=1400){
		$('#footer,.morelinks').css({width:1200});
		loadImgFun();
	}else if(_rwidth < 1400 && _rwidth >=1200){
		$('#footer,.morelinks').css({width:1200});
		loadImgFun();
	}else if(_rwidth < 1200 && _rwidth < 640){
		$('#footer,.morelinks').css({width:_rwidth});
		loadImgFun();
	}else if(_rwidth <= 640){
		$('.nav_bottom .right').hide();
		if(_rwidth>=474){
			$("#center").find(".tabs").css({marginTop: 32});
			$('.list_item .imgarea img').css({width:474,height:258});
		}else{
			$("#center").find(".tabs").css({marginTop: 82});
			$('.list_item .imgarea img').css({width:_rwidth,height:"auto"});
			if(_rwidth <= 320){
				$('.nav_areabg').css({width:380});
			}
		}
		$('#footer,.morelinks').css({width:_rwidth});
	}else{
	}
}
function get_ajaxdata(){
	var showMore = $('#showmore');
	showMore.unbind();
	showMore.bind('click',function(){
		var p_num = parseInt($('#setpagenum').attr('data'))+1;
		var url= 'index-result.html?';
		if($('#f_click').attr('data') != 1 ){
			url +='type='+$('.sx_link .current').attr('data');
		}
		$.ajax({
		   type: "GET",
		   url: url+"&p="+p_num,
		   success: function(data){
				if(data != 1){
					var adItems = [];
					var _height = $(document.body).height();
					$('.loading_marsk').css({height:_height});
					$('.loading_marsk,.loading_img').show();
					var ary = jQuery.parseJSON(data);
					$(ary).each(function(i,d){
						$(d).each(function(i2,d2){
							var addtv = "class='tv' data='"+d2.tvurl+"'";
							var item ='<div class="list_item clist_item'+ i2 +'">' +
								'<div class="type" data="'+d2.type+'"></div>' +
								'<div class="color_area"></div>' +
								'<div class="imgarea" data="'+d2.w+'&'+d2.h+'">' +
									'<img ';
							if(d2.istv == 1){
								item += addtv;
							}
							item +=' src="'+d2.picurl+'" width="'+d2.w+'" height="'+d2.h+'">'+
								'</div>'+
								'<div class="desc">'+
									'<P>'+d2.name+'</P>'+
									'<a class="Showreels" target="_blank" data="'+d2.id+'" href="product.html?id='+d2.id+'">'+d2.type+'</a>'+
								'</div>'+
							'</div>';
							adItems.push(item);
						});
					});
					var addContainer = $('#container');
					addContainer.append(adItems.join(""));
					var setMas = function(){
						addContainer.masonry({
						  itemSelector: '.list_item',
						  columnWidth: 1,
						  isAnimated: true,
						  animationOptions:{ duration: 800,property:"height",easing: 'linear',queue: false },
						  transitionDuration: 1
						});
					}
					addContainer.find("img").load(function(){
						setTimeout(function(){
							playtv_onimg();
							setMas();
							autosize();
							addColor();
							addContainer.masonry('reloadItems');
							$('.loading_marsk,.loading_img').hide();
							$('#setpagenum').attr('data',p_num);
						},200);
					});
				}
			}
		});
	});
}
function sx_link_ux(){
	var cPositonT;
	console.log(cPositonT= $('.sx_link').find(".current").length);
	cPositonT= $('.sx_link .current').position().top+12;
	$('#tjq').css({'top':cPositonT});
	var links_obj = $('.sx_link a');
	links_obj.each(function(i){
		$(this).bind('click',function(){
			console.log("123");
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
						$('#center .list_item'),
						2,
						{css:{opacity:0},
						onComplete:function(){
							$('#center').empty();
							$('#center').css({'display':'none'});
							var ary = jQuery.parseJSON(data);
							$(ary).each(function(i,d){
								$(d).each(function(i2,d2){
									var addtv = "class='tv' data='"+d2.tvurl+"'";
									var item ='<div class="list_item">' +
										'<div class="type" data="'+d2.type+'"></div>' +
									'<div class="color_area"></div>' +
											'<div class="imgarea" data="'+d2.w+'&'+d2.h+'">' +
											'<img ';
									if(d2.istv == 1){
										item += addtv;
									}
									item +=' src="'+d2.picurl+'" width="'+d2.w+'" height="'+d2.h+'">'+
										'</div>'+
										'<div class="desc">'+
											'<P>'+d2.name+'</P>'+
											'<a class="Showreels" target="_blank" data="'+d2.id+'" href="product.html?id='+d2.id+'">'+d2.type+'</a>'+
										'</div>'+
									'</div>';
									$('#center').append(item);
								});
							});
							var setMas = function(){
								$('#center').masonry({
								  itemSelector: '.list_item',
								  columnWidth: 1,
								  isAnimated: true,
								  animationOptions:{ duration: 800,property:"height",easing: 'linear',queue: false },
								  transitionDuration: 1
								});
							}
							setTimeout(function(){
								// $('#center').masonry('reloadItems');
								setsize_pic();
								autosize();
							},100);
							$('#center').fadeIn(1000);
							playtv_onimg();
							addColor();
						 	$('#f_click').attr('data','2');
							$('#container img').load(function(){
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
function loadWork(){//在首页外的其他页面点击切换菜单，默认跳到首页
	var _cLinkm,_cTarget;
	_cLink = $(".sx_link").find("a");
	_cLink.on('click',function(){
		_ctarNum = parseInt($(this).attr('data'));
		_cTarget = "/index.html";
		window.location.href=_cTarget;
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
	loadWork();
	setsize_pic();
	addColor();
	autosize();
	$(window).bind('resize',function(){
		autosize();
	});
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