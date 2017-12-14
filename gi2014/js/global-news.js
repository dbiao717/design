//gi 公共js文件
//gototop
function gototop(){
	$('#backtotop').bind('click',function(){
		$("html, body").animate({ scrollTop: 0 }, "1000");
	});
}
//鼠标移动上图片播放视频
function playtv_onimg(){
	$('#video').detach();
	$('.list_item').unbind().bind('click',function(e){
		var url = 'news-list.html?id=' + $(this).find('.Showreels').attr('data');
		window.open(url);
	});
}
//给item加颜色
function addColor(){
	//$('#video').detach();
	var tmp_value = 1;//用来防止重复加载jwp
	var setTimer;
	var player;
	//鼠标移动区块变色
	$('.list_item').each(function(i){
		$(this).bind('mouseenter',function(e){
			var that = $(this);
			if(that.find('.tv').length != 0 ){
				clearTimeout(setTimer);
				player=null;
				$('.video_marsk,#video').detach();
				var that_obj = that.find('.imgarea');
				if(that_obj.find('#video').length == 0){
					var v_html = '<div id="video"></div>';
					var video_marsk = '<div class="video_marsk"></div>';
					that_obj.append(v_html).append(video_marsk);
				}
				var tv_w = that.find('.tv').width();
				var tv_h = that.find('.tv').height();
				var tv_url = that.find('.tv').attr('data');
				var pic_url = that.find('.tv').attr('src');
				try{
					setTimer = setTimeout(function(){
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
					},1000);
				}catch(e){}
			}
			that.css({zIndex:101});
			var current_w = that.width() + 10;
			var current_h = that.height() + 10;
			//取类型
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
			TweenMax.to($(this).find('.color_area'),0.3,{css:{opacity:0,top:'0',zIndex:10} ,onComplete:function(){}});
			$(this).find('.desc').removeClass('current_desc');
			$(this).css({zIndex:100});
			clearTimeout(setTimer);
			//如果这个没有
			if(!player){
				//alert(0);
			}else{
				player=null;
				$('.video_marsk,#video').detach();
			}
		});
	});
}
//自适应宽度
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
		listContainer.css({paddingLeft:330,paddingRight:330});
	}
	if(_width < 1900 && _width >1700){
		listContainer.css({paddingLeft:330,paddingRight:200});
		$('#nav_area').css({width:_width-100});
	}
	if(_width < 1700 && _width >1500){
		listContainer.css({paddingLeft:(_width-550)/4,paddingRight:0});
		$('#nav_area').css({width:_width-250});
	}
	if(_width < 1500 && _width >720){
		listContainer.css({paddingLeft:(_width-750)/4,paddingRight:(_width-750)/4});
		$('#nav_area').css({width:_width-100});
	}
	if(_width <= 720){
		$('.nav_bottom .right').hide();
		$('#footer,.morelinks').css({width:_width-220});
		if(_width > 474 ){
			$('.list_item .imgarea img').css({width:474,height:258});
			$('.list_container').css({paddingLeft:parseInt((_width-474)/2),paddingRight:0});
		}else{
			$('.list_item .imgarea img').css({width:_width-10,height: "auto"});
			$('.list_container').css({paddingLeft: 0,paddingRight:0});
		}
	}else{
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
/*	if(checkMobile() && _width <= 400){
		$('.nav_areabg').css({width:_width+240});
		$('.list_item .imgarea img').css({width:474,height:258});
		$('.nav_bottom .right').hide();
		$('#footer,.morelinks,.footer_bg').css({width:_width+240});
		// $('.list_container').css({paddingLeft:(Math.abs(_width-474)/2),paddingRight:0});
	}*/
	$("#canvas-bg").hide();
	setTimeout(function(){
		$("#canvas-bg").attr("width" , parseInt($("body").width()));
		$("#canvas-bg").attr("height" , parseInt($("body").height()) - 480 );
		$("#canvas-bg").show();
	} , 1000);
}
	// function autosize(){
		
		
		
		
	// 	//alert($(window).width());
	// 	//给nav_areabg赋值
	// 	$('.nav_areabg').css({width:$(window).width()});

	// 	if($(window).width() < 2000 && $(window).width() > 1200){
	// 		$('#footer,.morelinks').css({width:1200});
	// 	}else{
	// 		$('#footer,.morelinks').css({width:$(window).width()});

	// 	}
	// 	//alert($(window).width());
		
		
		
	// 	if($(window).width() >= 1900){
	// 		$('.list_container').css({paddingLeft:350,paddingRight:240});
	// 		$('#container').masonry({
	// 		  itemSelector: '.list_item',
	// 		  columnWidth: 1,
	// 		  isAnimated:true,

	// 		});
             
 //             /*var $container = $('#container');
    
	// 	      $container.isotope({
	// 	        masonry: {
	// 	          columnWidth: 120
	// 	        },
	// 	        sortBy: 'number',
	// 	        getSortData: {
	// 	          title: function( $elem ) {
	// 	            var number = $elem.hasClass('list_item') ? 
	// 	              $elem.find('.desc p').text() :
	// 	              $elem.attr('data-number');
	// 	            return parseInt( number, 10 );
	// 	          },
	// 	          alphabetical: function( $elem ) {
	// 	            var reels = $elem.find('.Showreels'),
	// 	                itemText = reels.length ? reels : $elem;
	// 	            return itemText.text();
	// 	          }
	// 	        }
	// 	      });*/

	// 		$('#nav_area').css({width:$('.list_container').width()+$('.list_container').css('paddingLeft').substr(0,-1)});
			
	// 	}
		
	// 	if($(window).width() < 1900 && $(window).width() >1700){
	// 		$('.list_container').css({paddingLeft:330,paddingRight:200});
	// 		$('#nav_area').css({width:$('.list_container').width()+$('.list_container').css('paddingLeft').substr(0,-1)-145});
			
	// 	}

	// 	if($(window).width() < 1700 && $(window).width() >1500){
	// 		$('.list_container').css({paddingLeft:($(window).width()-550)/4,paddingRight:0});
	// 		$('#nav_area').css({width:$('.list_container').width()+$('.list_container').css('paddingLeft').substr(0,-1)-250});
			
	// 	}

	// 	if($(window).width() < 1500 && $(window).width() >720){
	// 		$('.list_container').css({paddingLeft:($(window).width()-750)/4,paddingRight:($(window).width()-750)/4});
	// 		$('#nav_area').css({width:$('.list_container').width()+$('.list_container').css('paddingLeft').substr(0,-1)});

	// 	}
		



	// 	if($(window).width() <= 720){
	// 		$('.list_item .imgarea img').css({width:474,height:258});
	// 		$('.nav_bottom .right').hide();
	// 		$('#footer,.morelinks').css({width:$(window).width()-220});
	// 		$('.list_container').css({paddingLeft:($(window).width()-474)/2,paddingRight:($(window).width()-750)/4});
	// 	}else{
	// 		$('.list_item .imgarea img').each(function(i){
	// 			var parent_obj = $(this).parent();
	// 			if($(this).parent().attr('data')){

	// 				var str_wh = $(this).parent().attr('data').split('&');

	// 				var pic_w = str_wh[0];
	// 				var pic_h = str_wh[1];
	// 				$(this).css({width:pic_w,height:pic_h});
				
	// 			}
				
	// 			$('.nav_bottom .right').show();
			
				
	// 		});
	// 	}

	// 	if(checkMobile() && $(window).width() <= 400){
	// 		$('.nav_areabg').css({width:$(window).width()+240});
	// 		$('.list_item .imgarea img').css({width:474,height:258});
	// 		$('.nav_bottom .right').hide();
	// 		$('#footer,.morelinks,.footer_bg').css({width:$(window).width()+240});
	// 		$('.list_container').css({paddingLeft:(Math.abs($(window).width()-474)/2),paddingRight:0});
	// 		//alert(($(window).width()-474)/2);
	// 	}
		
	// 	$("#canvas-bg").hide();
	// 	setTimeout(function(){
	// 		$("#canvas-bg").attr("width" , parseInt($("body").width()));
	// 		$("#canvas-bg").attr("height" , parseInt($("body").height()) - 480 );
	// 		$("#canvas-bg").show();
	// 	} , 1000);
		
	
	// }

//点击底部更多按钮(ajax请求数据)
function get_ajaxdata(){
	$('#showmore').bind('click',function(){
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
							$('.loading_marsk').css({height:$(document.body).height()});
							$('.loading_marsk,.loading_img').show();
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
											'<a class="Showreels" target="_blank" data="'+d2.id+'" href="news-list.html?id='+d2.id+'">'+d2.type+'</a>'+
										'</div>'+
									'</div>';
									//items.push( item );
									$('#container').append(item);
								});
							});
                            //var $items = $( items.join('') );
							$('#container img').load(function(){
								setTimeout(function(){
									$('#container').masonry('reloadItems');
									playtv_onimg();
									autosize();	
									addColor();
									$('.loading_marsk,.loading_img').hide();
									$('#setpagenum').attr('data',p_num);
								},100);
								//$container.isotope( 'insert', $items );//重置容器排序
							});
						}
			}
		});
	});
}
//筛选按钮交互js
function sx_link_ux(obj){
	//给当前的赋值
	var cPositonT;
	cPositonT= $('.sx_link .current').position().top+12;
	$('#tjq').css({'top':cPositonT});
	//ajax请求页面数据
	var links_obj = $('.sx_link a');
	links_obj.each(function(i){
		$(this).bind('click',function(){
			 $('#f_click').attr('data','2');
			$('.list_item').css({'overflow':'hidden'});
			$('.sx_link a').removeClass('current');
			$(this).addClass('current');
			TweenMax.to($('#tjq'), 0.5, {css:{top:$(this).position().top+12}});
			//这里开始处理请求数据
			$('#setpagenum').attr('data',1);//重置分页按钮
			$('.loading_marsk,.loading_img').show();
			$.ajax({
			   type: "GET",
			   url: "index-result.html?type="+$('.sx_link .current').attr('data'),
			   success: function(data){
					TweenMax.to($('#container .list_item'),2,{css:{opacity:0},onComplete:function(){
							$('#container').empty();
							$('#container').css({'display':'none'});
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
											'<a class="Showreels" target="_blank" data="'+d2.id+'" href="news-list.html?id='+d2.id+'">'+d2.type+'</a>'+
										'</div>'+
									'</div>';
									$('#container').append(item);
								});
							});
							setTimeout(function(){
								$('#container').masonry('reloadItems');
								setsize_pic();
								autosize();
							},100);
							$('#container').fadeIn(1000);
							playtv_onimg();
							addColor();
							 $('#f_click').attr('data','2');
							$('#container img').load(function(){
								$('.loading_marsk,.loading_img').hide();
								$('.list_item').css({'overflow':'inherit'});
							});
					}});
			   }
			});
		});
	});
}
//给所有图片打标签(宽，高)
function setsize_pic(){
	$('.list_item .imgarea img').each(function(i){
		var pic_w = $(this).width();
		var pic_h = $(this).height();
		var parent_obj = $(this).parent();
		parent_obj.attr('data',pic_w+'&'+pic_h);
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
$(document).ready(function(){
	loadWork();
	$('#first_item').css({height:$('.list_item').eq(1).height()});
	if($('#video_wrapper')){
		setInterval(function(){
			$('#video_wrapper').css({'position':'absolute'});
		},10);
	}
	setsize_pic();
	autosize();
	addColor();
	playtv_onimg();
	//让宽度自适应
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
