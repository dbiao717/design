	//全局变量
	var is_mousewheel = true;//控制在滑屏不允许别的操作滑屏

	$(function(){
		//info初始化第一次进入页面
		var body_h =  document.documentElement.clientHeight;
		var body_w =  document.documentElement.clientWidth;
		$('#p1,#p2,#p3,#p4,#p5,#p6,#p7,.p1con').css({'width':body_w,'height':body_h});

		//当window改变时
		$(window).bind('resize',function(){
			$('#p1,#p2,#p3,#p4,#p5,#p6,#p7,.p1con').css({'width':document.documentElement.clientWidth,'height':document.documentElement.clientHeight});
			reset_position($('#main .current_p').attr('id'));
		});
	
		//导航交互
		$('#slide_nav').find('.menubtn').bind('click',function(){
			TweenMax.to($('#slide_nav_list'),0.5,{css:{left:0},ease:Strong.easeInOut,onComplete:function(){}});
			TweenMax.to($('#slide_nav .closenav'),0.5,{css:{left:282},ease:Strong.easeInOut,onComplete:function(){}});
		});

		$('#slide_nav').find('.closenav').bind('click',function(){
			TweenMax.to($('#slide_nav_list'),0.5,{css:{left:-282},ease:Strong.easeInOut,onComplete:function(){}});
			TweenMax.to($('#slide_nav .closenav'),0.5,{css:{left:-60},ease:Strong.easeInOut,onComplete:function(){}});
		});
		
		/*var is_nclose = true;
		//导航做定时收缩处理
		setInterval(function(){
			if($('#slide_nav_list').css('left') != 0 && is_nclose){	
				is_nclose=false;
				setTimeout(function(){
					TweenMax.to($('#slide_nav_list'),0.5,{css:{left:-282},ease:Strong.easeInOut,onComplete:function(){}});
					TweenMax.to($('#slide_nav .closenav'),0.5,{css:{left:-60},ease:Strong.easeInOut,onComplete:function(){is_nclose=true;}});
				},5000);
			
			}
		},1);*/

		//不断重置最外层高度(不让向下键影响)
		setInterval(function(){
			$('#mainwarp').css({'height':document.documentElement.clientHeight});
		},1);

		//首页操作图片过5秒消失
		setTimeout(function(){
			$('.cz_info,.float_div').fadeOut(300);
		},3000);
		
		//点击导航链接
		$('#slide_nav_list a').each(function(i){
			var t_obj = $(this);
			var t_pname = $(this).attr('data');
			if(!t_pname){return false;}

			t_obj.bind('click',function(e){
				var body_h =  document.documentElement.clientHeight;
				
				if(is_mousewheel){
					is_mousewheel=false;
					if(t_pname == 'p1'){
						$('#slide_nav_list .current_nav').removeClass('current_nav');
						t_obj.parent().addClass('current_nav');
						$('#main .globalp').removeClass('current_p');
						$('#p1').addClass('current_p');
						TweenMax.to($('#main'),1,{css:{top:0},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}else if(t_pname == 'p2'){
						$('#slide_nav_list .current_nav').removeClass('current_nav');
						t_obj.parent().addClass('current_nav');
						$('#main .globalp').removeClass('current_p');
						$('#p2').addClass('current_p');
						TweenMax.to($('#main'),1,{css:{top:-body_h},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}else if(t_pname == 'p3'){
						$('#slide_nav_list .current_nav').removeClass('current_nav');
						t_obj.parent().addClass('current_nav');
						$('#main .globalp').removeClass('current_p');
						$('#p3').addClass('current_p');
						TweenMax.to($('#main'),1,{css:{top:-body_h*2},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}else if(t_pname == 'p4'){
						$('#slide_nav_list .current_nav').removeClass('current_nav');
						t_obj.parent().addClass('current_nav');
						$('#main .globalp').removeClass('current_p');
						$('#p4').addClass('current_p');
						TweenMax.to($('#main'),1,{css:{top:-body_h*3},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}else if(t_pname == 'p5'){
						$('#slide_nav_list .current_nav').removeClass('current_nav');
						t_obj.parent().addClass('current_nav');
						$('#main .globalp').removeClass('current_p');
						$('#p5').addClass('current_p');
						TweenMax.to($('#main'),1,{css:{top:-body_h*4},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}else if(t_pname == 'p6'){
						$('#slide_nav_list .current_nav').removeClass('current_nav');
						t_obj.parent().addClass('current_nav');
						$('#main .globalp').removeClass('current_p');
						$('#p6').addClass('current_p');
						TweenMax.to($('#main'),1,{css:{top:-body_h*5},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}else if(t_pname == 'p7'){
						$('#slide_nav_list .current_nav').removeClass('current_nav');
						t_obj.parent().addClass('current_nav');
						$('#main .globalp').removeClass('current_p');
						$('#p7').addClass('current_p');
						TweenMax.to($('#main'),1,{css:{top:-body_h*6},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}

				}
				

			});
		});

		
	
		//鼠标滚轴
		$(document).mousewheel(function(event, delta) {
			//判断deltaY : 正数是滚轴向上 -1负数是滚轴向下
            //console.log(event.deltaX, event.deltaY, event.deltaFactor);
			//console.log(delta);
			if(is_mousewheel){
				is_mousewheel=false;
				var body_h =  document.documentElement.clientHeight;
				$('.cz_info,.float_div').fadeOut(300);
				if(delta <= 0){//向下
					var tmp_o = $('#main').find('.current_p');
					var pos_t = $('#main').position().top;

					if(tmp_o.attr('id')=='p7'){
						is_mousewheel=true;
						return false;
					}else{
						tmp_o.removeClass('current_p').next().addClass('current_p');
						var current_nav = $('#slide_nav_list .current_nav');
						current_nav.next().addClass('current_nav');
						current_nav.removeClass('current_nav');
						TweenMax.to($('#main'),1,{css:{top:pos_t-body_h},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}
				}else{
					var tmp_o = $('#main').find('.current_p');
					var pos_t = $('#main').position().top;

					if(tmp_o.attr('id')=='p1'){
						is_mousewheel=true;
						return false;
					}else{
						tmp_o.removeClass('current_p').prev().addClass('current_p');
						var current_nav = $('#slide_nav_list .current_nav');
						current_nav.prev().addClass('current_nav');
						current_nav.removeClass('current_nav');
						TweenMax.to($('#main'),1,{css:{top:pos_t+body_h},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}
				}
			}

        });

		//键盘上下滑动
		$(document).bind('keydown',function(e){
			//alert(e.keyCode);
			if(is_mousewheel){
				is_mousewheel=false;
				var body_h =  document.documentElement.clientHeight;
				$('.cz_info,.float_div').fadeOut(300);
				//alert(e.keyCode);
				if(e.keyCode == 40){//向下
					var tmp_o = $('#main').find('.current_p');
					var pos_t = $('#main').position().top;

					if(tmp_o.attr('id')=='p7'){
						is_mousewheel=true
						return false;
					}else{
						tmp_o.removeClass('current_p').next().addClass('current_p');
						var current_nav = $('#slide_nav_list .current_nav');
						current_nav.next().addClass('current_nav');
						current_nav.removeClass('current_nav');
						TweenMax.to($('#main'),1,{css:{top:pos_t-body_h},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}
				}else if(e.keyCode == 38){
					var tmp_o = $('#main').find('.current_p');
					var pos_t = $('#main').position().top;

					if(tmp_o.attr('id')=='p1'){
						is_mousewheel=true
						return false;
					}else{
						tmp_o.removeClass('current_p').prev().addClass('current_p');
						var current_nav = $('#slide_nav_list .current_nav');
						current_nav.prev().addClass('current_nav');
						current_nav.removeClass('current_nav');
						TweenMax.to($('#main'),1,{css:{top:pos_t+body_h},ease:Strong.easeInOut,onComplete:function(){
							is_exeanmi($('#main').find('.current_p').attr('id'));
							aotuoclose();
							is_mousewheel=true;
						}});
					}
				}else{
					is_mousewheel=true;
				}
			}
		});


		//倒计时
		$('#d_time').countdown({
			tmpl : '<div class="day"><span class="s1">%{d}</span><span class="s2">DAY</span></div><div class="hrs"><span class="s1">%{h}</span><span class="s2">HRS</span></div><div class="min"><span class="s1">%{m}</span><span class="s2">MIN</span></div><div class="sec" style="background:none"><span class="s1">%{s}</span><span class="s2">SEC</span></div>'
		});
		
		//baidu地图
		var myMap = new BMap.Map("bdmap");   //创建地图
		var Point = new BMap.Point(121.430479,31.218583	);
		myMap.centerAndZoom(Point, 19);  //初始化中心位置
		myMap.enableScrollWheelZoom(false);    //开启鼠标滚轮
		myMap.setMapStyle({style:"dark"});  //设置地图背景
		myMap.setCurrentCity("上海");     //设置地图显示城市
		myMap.addOverlay(new BMap.Marker(Point));
		//myMap.addControl(new BMap.MapTypeControl());   //添加地图类型控件
		//myMap.addControl(new BMap.ScaleControl()); //比例尺
		//myMap.addControl(new BMap.NavigationControl()); //左上角缩放标尺
		//myMap.addControl(new BMap.OverviewMapControl()); 
		//myMap.addControl(new BMap.OverviewMapControl()); //缩放功能

		//footer
		$('.f_link_list a').eq(0).bind('click',function(){
			footerfu(0,'#p1',0);
		});

		$('.f_link_list a').eq(1).bind('click',function(){
			footerfu(1,'#p2',document.documentElement.clientHeight);
		});

		$('.f_link_list a').eq(2).bind('click',function(){
			footerfu(2,'#p3',document.documentElement.clientHeight*2);
		});

		$('.f_link_list a').eq(3).bind('click',function(){
			footerfu(3,'#p4',document.documentElement.clientHeight*3);
		});

		$('.f_link_list a').eq(4).bind('click',function(){
			footerfu(4,'#p5',document.documentElement.clientHeight*4);
		});

		$('.f_link_list a').eq(5).bind('click',function(){
			footerfu(5,'#p6',document.documentElement.clientHeight*5);
		});

		$('.f_link_list a').eq(6).bind('click',function(){
			footerfu(6,'#p7',document.documentElement.clientHeight*6);
		});
			

		
	});

	//aotuclose
	function aotuoclose(){
		setTimeout(function(){
			TweenMax.to($('#slide_nav_list'),0.5,{css:{left:-282},ease:Strong.easeInOut,onComplete:function(){}});
			TweenMax.to($('#slide_nav .closenav'),0.5,{css:{left:-60},ease:Strong.easeInOut,onComplete:function(){}});
		},500);
	}

	//footerfun
	function footerfu(eqi,id,top_v){
		if(is_mousewheel){
			is_mousewheel=false;
			var tmp_o = $('#main').find('.current_p');
			tmp_o.removeClass('current_p');
			$(id).addClass('current_p')
			var current_nav = $('#slide_nav_list .current_nav');
			current_nav.removeClass('current_nav');
			$('#slide_nav_list li').eq(eqi).addClass('current_nav');
			TweenMax.to($('#main'),1,{css:{top:-top_v},ease:Strong.easeInOut,onComplete:function(){
				is_exeanmi($('#main').find('.current_p').attr('id'));
				aotuoclose();
				is_mousewheel=true;
			}});
		}
	}


	//重设每屏幕的位置
	function reset_position(p_num){
		var body_h =  document.documentElement.clientHeight;
		is_mousewheel= false;
		if(p_num == 'p1'){
			TweenMax.to($('#main'),0,{css:{top:0},ease:Strong.easeInOut,onComplete:function(){
				aotuoclose();
				is_mousewheel=true;
			}});
		}else if(p_num == 'p2'){
			TweenMax.to($('#main'),0,{css:{top:-body_h},ease:Strong.easeInOut,onComplete:function(){
				aotuoclose();
				is_mousewheel=true;
			}});
		}else if(p_num == 'p3'){
			TweenMax.to($('#main'),0,{css:{top:-body_h*2},ease:Strong.easeInOut,onComplete:function(){
				aotuoclose();
				is_mousewheel=true;
			}});
		}else if(p_num == 'p4'){
			TweenMax.to($('#main'),0,{css:{top:-body_h*3},ease:Strong.easeInOut,onComplete:function(){
				aotuoclose();
				is_mousewheel=true;
			}});
		}else if(p_num == 'p5'){
			TweenMax.to($('#main'),0,{css:{top:-body_h*4},ease:Strong.easeInOut,onComplete:function(){
				aotuoclose();
				is_mousewheel=true;
			}});
		}else if(p_num == 'p6'){
			TweenMax.to($('#main'),0,{css:{top:-body_h*5},ease:Strong.easeInOut,onComplete:function(){
				aotuoclose();
				is_mousewheel=true;
			}});
		}else if(p_num == 'p7'){
			TweenMax.to($('#main'),0,{css:{top:-body_h*6},ease:Strong.easeInOut,onComplete:function(){
				aotuoclose();
				is_mousewheel=true;
			}});
		}
		
	}

	//list执行抖动动画
	function listto_anmi(dom,mt,fid){
		TweenMax.staggerTo(dom, 0.5, {marginTop:mt,opacity:1}, 0.2);
		TweenMax.to($('#'+fid+" .tit"),0.5,{css:{marginTop:0,opacity:1},onComplete:function(){}});
		TweenMax.to($('#'+fid+" .bottom_btn_area"),0.5,{css:{marginTop:0,opacity:1},onComplete:function(){}});
	}

	function listto_anmi_reset(dom,mt,fid){
		TweenMax.staggerTo(dom, 0.5, {marginTop:mt,opacity:0.5}, 0.2);
		TweenMax.to($('#'+fid+" .tit"),0.5,{css:{marginTop:-60,opacity:0.5},onComplete:function(){}});
		TweenMax.to($('#'+fid+" .bottom_btn_area"),0.5,{css:{marginTop:20,opacity:0.5},onComplete:function(){}});
	}

	function is_exeanmi(id){
		if(id == 'p2'){
			listto_anmi("#h_list li",-20,'p2');
		}else{
			listto_anmi_reset("#h_list li",0,'p2');
		}

		if(id == 'p3'){
			listto_anmi("#piclist1 li",-20,'p3');
		}else{
			listto_anmi_reset("#piclist1 li",0,'p3');
		}

		if(id == 'p5'){
			listto_anmi("#piclist2 li",-20,'p5');
		}else{
			listto_anmi_reset("#piclist2 li",0,'p5');
		}
	}