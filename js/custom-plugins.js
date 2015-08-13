// MOBILE DETECT
var mobile=function(){return{detect:function(){var uagent=navigator.userAgent.toLowerCase();var list=this.mobiles;var ismobile=false;for(var d=0;d<list.length;d+=1)if(uagent.indexOf(list[d])!=-1)ismobile=true;return ismobile},mobiles:["midp","240x320","blackberry","netfront","nokia","panasonic","portalmmm","sharp","sie-","sonyericsson","symbian","windows ce","benq","mda","mot-","opera mini","philips","pocket pc","sagem","samsung","sda","sgh-","vodafone","xda","palm","iphone","ipod","android","ipad"]}}();

var isMobile = mobile.detect();

// EASING PLUGIN
jQuery.easing["jswing"]=jQuery.easing["swing"];
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/
2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,
t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return t==0?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},
easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*0.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*
Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*0.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(0.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-0.5*(a*Math.pow(2,
10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b},easeInBounce:function(x,t,
b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<1/2.75)return c*(7.5625*t*t)+b;else if(t<2/2.75)return c*(7.5625*(t-=1.5/2.75)*t+0.75)+b;else if(t<2.5/2.75)return c*(7.5625*(t-=2.25/2.75)*t+0.9375)+b;else return c*(7.5625*(t-=2.625/2.75)*t+0.984375)+b},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*0.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*0.5+c*0.5+b}});

/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 LuÃ­s Almeida
 * https://github.com/luis-almeida
 */

(function($) {
    $.fn.unveil = function(threshold, callback) {
        var $w = $(window),
            th = threshold || 0,
            retina = window.devicePixelRatio > 1,
            attrib = retina ? "data-original-retina" : "data-original",
            images = this,
            loaded;
        this.one("unveil", function() {
            var source = this.getAttribute(attrib);
            source = source || this.getAttribute("data-original");
            if (source) {
                this.setAttribute("src", source);
                if (typeof callback === "function") callback.call(this);
                animate($(this));
            }
        });
		
		function animate(_this) {
            if( !_this.hasClass('loadedImg') ){
				_this.css({'opacity': 0}).load(function() {
						setTimeout(function(){
							_this.addClass('loadedImg').stop().animate({ "opacity": 1	}, 333);
						}, 100);
				})
			}
        }

        function unveil() {
            var inview = images.filter(function() {
                var $e = $(this);
                if ($e.is(":hidden")) return;
                var wt = $w.scrollTop(),
                    wb = wt + $w.height(),
                    et = $e.offset().top,
                    eb = et + $e.height();
                return eb >= wt - th && et <= wb + th;
            });
            loaded = inview.trigger("unveil");
            images = images.not(loaded);
        }
        $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);
        unveil();
        return this
    }
})(window.jQuery || window.Zepto);


//MINUS SIMPLE SLIDER
(function($){
	$.fn.extend({
		
		minusSimpleSlider : function(options, callback){
			
				var defaults = {
					easing: 'easeInOutExpo',
					speed:888,
					duration:5000,
					rotate: false,
					bullet: true,
					bulletPosition: 'bottom', // bottom = append, top = prepend
					nav: true,
					navPosition: true, // true bullet inside append , false navigation inside 
					begin: 0,
					infinite: false,
					fullscreen: false,
					ratio: null,
					iScrollParam:{ children: 0 },
					lazyLoad: null,
					keyboard: false,
					divName: { mask: '.mask', ul: '> ul', li: '> li' },
					bulletClass: { wrapper: 'bulletWrapper', mask: 'bullet' }
				};
				
				var options = $.extend(defaults, options);
				
				return this.each(function(){
			
					var o = options, holder = $( this ), ul, li, le, liW, msk, xMax = 0, current = 0, bullet = o.bullet, nav = o.nav, rotate = o.rotate, infinite = o.infinite, begin = o.begin, stm = null, duration = o.duration, speed = o.speed, easing = o.easing, clicklable = true, prvBtn, nxtBtn, distRate = 1, startX, s = 0, isMobile = mobile.detect(), tm = null, iscroll = null, vidArr = [], temp = -1, pCounter = 0, pTotal = 0, bulletLi;
					
					
					function init(){
						
						msk = $(o.divName['mask'] || '.mask', holder); 	
						ul = $(o.divName['ul'] || '> ul', msk);
						li = $(o.divName['li'] || '> li', ul);
						le = li.length;
						
						if( le == 0 ) return false;
						else if( le == 1 ) infinite = rotate = false;
						
						
						if( infinite && !isMobile )
						{
							$("li:eq("+(le-1)+")", ul).clone().prependTo(ul);
							$("li:eq(1)", ul).clone().appendTo(ul);
							s = 1;
						}
						
						if( o.lazyLoad != null ){
							$('> li:first-child ' + o.lazyLoad, ul).unveil();
							if( infinite && !isMobile ) $('> li:last-child ' + o.lazyLoad, ul).unveil().trigger("unveil");
						}
						
						/* */
						var bc = o.bulletClass, bwrpC = bc['wrapper'] || 'bulletWrapper', bmskC = bc['mask'] || 'bullet';
						if( bullet ){
								
							var bu = '<div class="'+ bwrpC +'"><div class="'+ bmskC +'"><ul>';
								
								for(var i = 0; i < le; ++i){
									
									var d = '<span>'+ ( i + 1 ) +'</span>', dth = li.eq( i ).attr('data-thumb'), dti = li.eq( i ).attr('data-title');
									if( dth != undefined && dth != null && dth != '' ){ d = '<span><img src="'+ dth +'"/></span><i></i>'; }
									else if( dti != undefined && dti != null && dti != '' ) d = '<span>'+ dti +'</span><i></i>';
									bu += '<li><a href="javascript:void(0)">'+ d +'</a></li>';
								}
											
								bu += '</ul></div></div>';	
							
							if( o.bulletPosition == 'bottom' ) holder.append( bu ); 
							else if( o.bulletPosition == 'top' ) holder.prepend( bu ); 
							console.log(bmskC);
							bulletLi = $('.' + bmskC +' ul li', holder);
							
							$('a', bulletLi).click(function(){ 
								if( clicklable ){ 
									if( isMobile ) mfocused( $(this).parent().index() );
									else focused( $(this).parent().index() ); 
								} 
							});
							bulletSelected( begin );
							
							//
							if( le <= 1 ) $('.' + bwrpC, holder).addClass('hidden').hide();
						}
						
						
						if( nav ){
							var p = '<a href="javascript:void(0)" class="prevBtn" rel="prev"><span>prev</span><i></i></a>', 
								n = '<a href="javascript:void(0)" class="nextBtn" rel="next"><span>next</span><i></i></a>';
							
							if( bullet && o.navPosition ) $('.' + bmskC +' ul', holder).before( p ).after( n );
							else holder.append('<div class="navigation">'+ p + n +'</div>');
							
							prvBtn = $('a.prevBtn', holder).bind('click', onPrevBtnClick );
							nxtBtn = $('a.nextBtn', holder).bind('click', onNextBtnClick );
							
							//
							if( le <= 1 ){
								if( $('.navigation', holder).length > 0 ) 
									$('.navigation', holder).addClass('hidden').hide();
								$('a.prevBtn', holder).addClass('hidden').hide();
								$('a.nextBtn', holder).addClass('hidden').hide();
							}
						}
						
						if( o.keyboard ){
							$('body').bind('keydown', function( e ){
								 if(( e.keyCode || e.which ) == 37 ) onPrevBtnClick();
								 else if(( e.keyCode || e.which ) == 39 ) onNextBtnClick();
							});
						}
						
						
						if( rotate ){
							$('.' + bmskC, holder).append('<a href="javascript:void(0);" class="rotate play"><i><i/></a>');
							$('.rotate', holder).bind('click', function(){
								if( $(this).hasClass('play') ){ rotate = false; $(this).removeClass('play'); clearRotate(); }
								else{ rotate = true; $(this).addClass('play'); autoRotate(); }
							});
							autoRotate();
						}
						
						resizeIt();
						
						// LAZYCONTROL
						lazyControl();
						
						// VIDEO CONTROL
						videoControl();
						
						// iscroll active
						if( isMobile ) touch();
						
						// begin
						if( begin > 0 ){
							if( isMobile ) mfocused( begin );
							else focused( begin ); 
						}
						
						//
						$(window).resize( adjust );
					}
					
					// video
					function videoControl(){
						var counter = 0;
						$('> li', ul).each(function(i, k) {
							var _this = $( this ), videoID = _this.attr('data-video'), coverImg = _this.attr('data-cover'); 
							if( videoID != undefined && videoID != null && videoID != '' ){
								var cls = 'player' + ( counter++ );
								_this.append('<div class="playerWrapper '+ cls +'" videoID="'+ videoID +'"></div>');	
								vidArr.push( $( '.' + cls, _this ) );
								
								// cover
								if( coverImg != undefined && coverImg != null && coverImg != '' ){
									_this
									.addClass('videoCover');
								}
							}
						});
						pTotal = counter;
						
					}
					
					function playerReady(){
						if( vidArr.length > 0 ){
							for( var i = 0; i  < vidArr.length; ++i ){
								var dv = $( vidArr[i] ), videoID = dv.attr('videoID')
									dv.minusPlayer({ videoId: videoID, controls: isMobile ? 1 : 0, autoplay: 0, orientation: 'vertical', customClass: 'sliderVideoPlayer' }, 
									function(){
										playerReadyCounter();
									},
									function( k ){
										if( k == 'ended' ){
											onNextBtnClick();
										};	
									});							
							}
						}
					}
					
					function playerReadyCounter(){
						pCounter++;
						if( pCounter == pTotal ){
							if( isMobile ) detectVideo( 0 );
							else detectVideo( 1 );	
							
							// cover Event
							if( $('> li.videoCover .coverImage a.playVideo', ul).length > 0 )
								$('> li.videoCover .coverImage a.playVideo', ul).bind('click', function(){
									var _this = $( this ), prt = _this.parents('li.videoCover'), ind = prt.index();
									clearRotate();
									prt.addClass('videoStart');
									detectVideoHeight( ind, $('> li', ul).outerHeight( true ) );
									detectVideoHeight( ind );
									videoSeekTo( ind );
									playVideo( ind );
								});
						}
					}
					
					function detectVideoHeight( k, hgt, rst ){
						
						if( rst ){
							// msk height sıfırlama	
							msk.css('height', hgt);
							setTimeout(function(){ msk.css('height', ''); }, 555)
						}else{
							var el = $('> li:eq('+ k +')', ul);
							if( el.attr('data-cover') != undefined && el.hasClass('videoCover') ){
								var h = hgt || $('.playerWrapper .videoWrapper', el).outerHeight( true ); 
								msk.height( h );
							}
						}
					}
					
					function detectVideo( k ){

						if( temp == k ) return false;
						
						if( vidArr.length > 0 ){
					
							//pause video
							for( var i = 0; i  < vidArr.length; ++i ){
								if( typeof vidArr[ i ][ 0 ].pauseVideo !== 'undefined' )
									vidArr[ i ][ 0 ].pauseVideo();
							}
							
							//play video
							if( $('> li:eq('+ k +')', ul).attr('data-cover') == undefined )	
								playVideo( k );
						}
						
						temp = k;
					}
					
					function videoSeekTo( k ){
						var el = $('> li:eq('+ k +')', ul);
						if( el.attr('data-video') != undefined )
							$('div.playerWrapper', el)[ 0 ].seekTo( 0 );
					}
					
					function playVideo( k ){
						var el = $('> li:eq('+ k +')', ul);
						if( el.attr('data-video') != undefined && !isMobile )
							$('div.playerWrapper', el)[ 0 ].playVideo();
					}
					
					// touch
					function touch(){
						iscroll = new IScroll(msk[0], { probeType: 3, eventPassthrough: true, scrollX: true, scrollY: false, momentum: false, snap: true, snapSpeed: o.speed, preventDefault: false }, o.iScrollParam['children']);
						if( o.nav ){
							iscroll.on('scrollStart', function(){ clearRotate(); });
							iscroll.on('scroll', scrollPosition);
							iscroll.on('scrollEnd', scrollPosition);
							scrollPosition();
						}
					}
					
					function scrollPosition(){
						var x = this.x>>0;
						
						if( x == 0 ){ 
							prvBtn.addClass('hidden');
							nxtBtn.removeClass('hidden');
						}else if( x == -xMax ){
							nxtBtn.addClass('hidden');
							prvBtn.removeClass('hidden');	
						}else{
							prvBtn.removeClass('hidden');
							nxtBtn.removeClass('hidden');
						}

						current = iscroll.currentPage['pageX'];
						bulletSelected( current );
						
						//CALLBACK
						setTimeout(function(){
							if( callback != undefined ) 
								callback( current );
								
							// LAZYCONTROL
							lazyControl();
							
							//
							detectVideo( current );
							
						}, speed);
						
						
						//ROTATE
						if( rotate ) autoRotate();
						
						// COVER
						if( $('> li.videoCover.videoStart', ul).length > 0 ){
							detectVideoHeight( 0, $('> li', ul).outerHeight( true ), true );
							$('> li.videoCover.videoStart', ul).removeClass('videoStart');
						}
					}
					
					function mfocused( k ){
						if( k < 0 ) k = le - 1;
						if( k >= le ) k = 0;
						iscroll.goToPage( k, 0, o.speed );
					}					
					
					function onNextBtnClick(){
						if( clicklable ){ 
							current++; 
							if( isMobile ) mfocused( current );
							else focused( current ); 
						}
					}
					
					function onPrevBtnClick(){
						if( clicklable ){ 
							current--; 
							if( isMobile ) mfocused( current );
							else focused( current ); 
						}
					}
					
					function autoRotate(){
							
						var el = li.eq( current ),
							co = el.attr('data-cover')
							d = el.attr('data-duration'),
							dv = el.attr('data-video'),
							t = d != undefined ? parseFloat( d ) : duration;
					
						clearRotate();
						
						if( dv != undefined && co == undefined ) return false;//-->AKTİF LI VIDEO VARSA AUTO ROTATE SIFIRLANIR.
						else{
							stm = setTimeout(function(){
								onNextBtnClick();
							}, t + speed);
						}
						
					}
					
					function clearRotate(){
						if( stm != null ) clearTimeout( stm );
					}
					
					
					function bulletSelected( k ){
						if( bullet ){
							bulletLi.removeClass('selected').eq( k ).addClass('selected');
						}
						
						// .mask ul li
						$('> li', ul).removeClass('selected').eq( infinite && !isMobile ? k + 1 : k ).addClass('selected');
					}
					
					function focused( k ){
						
						clicklable = false;
	
						if( infinite && !isMobile ){
							if( k < 0 ){

								k = le - 1;
								ul.stop().animate({ left: 0 }, speed, easing, function(){ ul.css("left", - (k+s) * liW); clicklable = true; });
							}else if( k >= le ){
								k = 0;
								ul.stop().animate({ left: -(le+1) * liW }, speed, easing, function(){ ul.css("left", - (k+s)  * liW); clicklable = true; });
							}else{

								ul.stop().animate({ left: -(k+s) * liW }, speed, easing, function(){ clicklable = true; });
							}
						
							current = k;
							bulletSelected( current );
							
						}else{
							
							if( k < 0 ) k = le - 1;
							if( k >= le ) k = 0;
							current = k;
							
							if( bullet ) bulletSelected( k + s );
							
							ul.stop().animate({ left: -( k + s ) * liW }, speed, easing, function(){ clicklable = true; });
						}
						
						//CALLBACK
						setTimeout(function(){
							if( callback != undefined ) 
								callback( current );
						
							// LAZYCONTROL
							lazyControl();
							
							//
							detectVideo( current + 1 );
						
						}, speed);
						
						
						//ROTATE
						if( rotate ) autoRotate();
											
						// COVER
						if( $('> li.videoCover.videoStart', ul).length > 0 ){
							detectVideoHeight( 0, $('> li', ul).outerHeight( true ), true );
							$('> li.videoCover.videoStart', ul).removeClass('videoStart');
						}
					}
					
					
					// LAZYCONTROL
					function lazyControl(){
						if( o.lazyLoad != null ){
								var _this = $('> li.selected', ul);
									_this = _this.add( _this.next('li') );
									$(o.lazyLoad, _this).unveil().trigger("unveil");
						}
					}
					
					// RESIZE
					function adjust(){						
						resizeIt();
						if(tm != null) clearTimeout(tm);
						tm = setTimeout(function(){ resizeIt(); }, 555);
					}
					
					function resizeIt(){		
						
						if( o.fullscreen && o.ratio != null ){
							
							var wt = parseFloat( $( window ).width() ), ht = parseFloat( $( window ).height() ), ratio = o.ratio, wtR, htR;
	
							if ( wt / ht >= ratio ){
								wtR = wt;
								htR = wt / ratio;
							}else{
								wtR = ht * ratio;
								htR = ht;
							}
							
							$( '> li > img', ul ).css({ 'width':  Math.round( wtR ), 
													    'height': Math.round( htR ), 
													    'left': Math.round( ( wt - wtR ) * .5 ), 
													    'top': Math.round( ( ht - htR ) * .5 )
												  });						
						}
						
						
						liW = msk.outerWidth( true );
						xMax = ( infinite && !isMobile ) ? ( le + 1 ) * liW : ( le - 1 ) * liW;
						$('> li', ul).outerWidth( liW );
						
						if( isMobile ) {
							ul.width( ( infinite && !isMobile ) ? ( le + 2 ) * liW : le * liW );
							setTimeout(function(){ iscroll.refresh(); }, 0);
						}else{
							ul.css({ 'left': - liW * ( current + s ) }).width( ( infinite && !isMobile ) ? ( le + 2 ) * liW : le * liW );
						}
						
						// COVER
						if( $('> li.videoCover.videoStart', ul).length > 0 ){
							detectVideoHeight( $('> li.videoCover.videoStart', ul).index() );
						}
																	
					}
					
					init();
	
					//GLOBAL FUNC
					this.playerDetect = function(){
						playerReady();
					};
					
					this.nextSlide = function(){
						if( typeof onNextBtnClick !== 'undefined' && le > 1 ){
							onNextBtnClick();				
						}
					};
					
					this.prevSlide = function(){
						if( typeof onPrevBtnClick !== 'undefined' && le > 1 ){
							onPrevBtnClick();
						}
					};
								
			})
		}
	})
})(jQuery, window);

// FULLSCREEN
(function(){var fullScreenApi={supportsFullScreen:false,isFullScreen:function(){return false},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",prefix:""},browserPrefixes="webkit moz o ms khtml".split(" ");if(typeof document.cancelFullScreen!="undefined")fullScreenApi.supportsFullScreen=true;else for(var i=0,il=browserPrefixes.length;i<il;i++){fullScreenApi.prefix=browserPrefixes[i];if(typeof document[fullScreenApi.prefix+"CancelFullScreen"]!="undefined"){fullScreenApi.supportsFullScreen=
true;break}}if(fullScreenApi.supportsFullScreen){fullScreenApi.fullScreenEventName=fullScreenApi.prefix+"fullscreenchange";fullScreenApi.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[this.prefix+"FullScreen"]}};fullScreenApi.requestFullScreen=function(el){return this.prefix===""?el.requestFullScreen():el[this.prefix+"RequestFullScreen"]()};fullScreenApi.cancelFullScreen=function(el){return this.prefix===
""?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}}if(typeof jQuery!="undefined")jQuery.fn.requestFullScreen=function(){return this.each(function(){if(fullScreenApi.supportsFullScreen)fullScreenApi.requestFullScreen(this)})};window.fullScreenApi=fullScreenApi})();

// YOUTUBE PLAYER
(function($){$.fn.extend({minusPlayer:function(options,onReady,callback,onReadyStateChange){var defaults={videoId:null,controls:0,autoplay:0,showinfo:0,modestbranding:1,rel:0,color:"white",hd:1,playbackQuality:"hd720",customClass:"",sound:70,orientation:"horizontal"};var options=$.extend(defaults,options);return this.each(function(){var o=options,div=$(this),holder,player=null,stm,orientation=o.orientation,firstMouseDown=0,scrollerMouseDown=false,maxRate;function init(){if(o.videoId!=null){var cls=
div[0]["className"]!=undefined?div[0]["className"]:o.customClass;div.html('<div class="youtubePlayer '+cls+'"><div class="videoWrapper"><div class="video"></div></div><div class="overlay"></div><div class="controllerWrapper"><div class="controller"><a href="javascript:void(0);" class="playPauseBtn"><span>play/pause</span></a><div class="progressBarWrapper"><div class="progressBar"><div class="total"></div><div class="progressVideoBytes"></div><div class="progressVideoTimes"></div><div class="tracker"></div></div></div><div class="time"></div><div class="sound"><a href="javascript:void(0);" class="soundBtn"><span>sound</span></a><div class="soundController"><div class="total"></div><div class="progress"></div><div class="tracker"></div></div></div><a href="javascript:void(0);" class="fullScreenBtn"><span>fullscreenbtn</span><i></i></a></div></div></div>');
cls=cls.split(" ").toString().replace(",",".");holder=$(".youtubePlayer."+cls);player=new YT.Player($(".videoWrapper .video",div)[0],{height:"100%",width:"100%",videoId:o.videoId,playerVars:{"controls":o.controls,"autoplay":o.autoplay,"showinfo":o.showinfo,"modestbranding":o.modestbranding,"rel":o.rel,"color":o.color,"hd":o.hd,"origin":("https:"==document.location.protocol?"http://":"http://")+window.location.hostname+"/"},events:{"onError":onErrorHandler,"onReady":onPlayerReady,"onStateChange":onPlayerStateChange}})}$(".controller .playPauseBtn",
div).bind("click",function(){if(player)if($(".youtubePlayer",div).hasClass("playing"))player.pauseVideo();else player.playVideo()});$(".controller .fullScreenBtn",div).bind("click",function(){fullScreenApi.requestFullScreen($(".videoWrapper .video",div)[0])});$(".controller .sound",div).minusDropDown()}init();function onPlayerReady(evt){evt.target.setPlaybackQuality(o.playbackQuality);playerUpdate();$(".progressBar",holder).click(function(event){if(player){var rate=(event.pageX-$(".progressBar",holder).offset().left)/
$(".progressBar",holder).outerWidth(true);player.seekTo(Math.floor(rate*player.getDuration()),true)}});if(orientation=="horizontal")tracking(o.sound);else tracking(100-o.sound);$(".sound .soundBtn",holder).bind("click",function(){if($(this).hasClass("mute"))tracking(o.sound);else if(orientation=="horizontal")tracking(0);else tracking(maxRate)});$(".soundController",holder).bind("click",events.onClick);$(".soundController .tracker",holder).bind("mousedown",events.mousedown).bind("mouseup",events.mouseup);
$(document).bind("mousemove",events.mousemove).bind("mouseup",events.mouseup);if(onReady!=undefined)onReady()}function onErrorHandler(){}function onPlayerStateChange(evt){if(onReadyStateChange!=undefined)onReadyStateChange(evt)}function updatePlayer(){if(player){updateLoadProgress(parseFloat(player.getVideoBytesLoaded())/parseFloat(player.getVideoBytesTotal())*100);updateTimeProgress(parseFloat(player.getCurrentTime())/parseFloat(player.getDuration())*100);$(".controller .time",div).html('<span class="currentTime">'+
timeFormat(player.getCurrentTime())+"</span>"+'<span class="seperator">/</span><span class="getDuration">'+timeFormat(player.getDuration())+"</span>")}getPlayerStateControl()}function getPlayerStateControl(){if(player){var playerState=getPlayerState();if(playerState=="buffering");else if(playerState=="ended"){IntervalClear();player.seekTo(0,true);setTimeout(function(){player.pauseVideo();playerUpdate()},250)}else if(playerState=="playing")$(".youtubePlayer",div).removeClass("paused").addClass("playing");
else if(playerState=="paused")$(".youtubePlayer",div).removeClass("playing").addClass("paused");if(callback!=undefined)callback(playerState)}}function getPlayerState(){if(player){var playerState=player.getPlayerState();switch(playerState){case 5:return"video_cued";case 3:return"buffering";case 2:return"paused";case 1:return"playing";case 0:return"ended";case -1:return"unstarted";default:return"Status_uncertain"}}}function updateLoadProgress(percent){$(".progressBar .progressVideoBytes",holder).css({"width":percent+
"%"})}function updateTimeProgress(percent){$(".progressBar .progressVideoTimes",holder).css({"width":percent+"%"})}function timeFormat(time){var str="",t=time.toFixed();if(t<60)if(t<10)str="0:0"+t;else str="0:"+t;else{var m=Math.floor(t/60),s=t%60;if(s<10)str=m+":0"+s;else str=m+":"+s}return str}var events={mousedown:function(event){if(orientation=="horizontal")firstMouseDown=event.pageX-$(".soundController .tracker",holder).offset().left;else firstMouseDown=event.pageY-$(".soundController .tracker",
holder).offset().top;scrollerMouseDown=true;return false},mouseup:function(){scrollerMouseDown=false;return false},mousemove:function(event){if(scrollerMouseDown){var rate=0;if(orientation=="horizontal")rate=(event.pageX-$(".soundController",holder).offset().left-firstMouseDown)/$(".soundController",holder).outerWidth(true);else rate=(event.pageY-$(".soundController",holder).offset().top-firstMouseDown)/$(".soundController",holder).outerHeight(true);tracking(Math.floor(rate*100))}return false},onClick:function(event){var rate=
0;if(orientation=="horizontal")rate=(event.pageX-$(".soundController",holder).offset().left)/$(".soundController",holder).outerWidth(true);else rate=(event.pageY-$(".soundController",holder).offset().top)/$(".soundController",holder).outerHeight(true);tracking(Math.floor(rate*100))}};function tracking(val){var rate;if(orientation=="horizontal"){var scW=$(".soundController",holder).outerWidth(true),sctW=$(".soundController .tracker",holder).outerWidth(true);if(val<0)val=0;rate=Math.floor(val/scW*scW);
maxRate=100-Math.floor(sctW/scW*scW);if(rate<=maxRate){$(".soundController .tracker",holder).css({"left":rate+"%"});setSound(rate)}else{$(".soundController .tracker",holder).css({"left":maxRate+"%"});setSound(maxRate)}}else{var scH=$(".soundController",holder).outerHeight(true),sctH=$(".soundController .tracker",holder).outerHeight(true);if(val<0)val=0;rate=Math.floor(val/scH*scH),maxRate=100-Math.floor(sctH/scH*scH);if(rate<=maxRate){$(".soundController .tracker",holder).css({"top":rate+"%"});setSound(rate)}else{$(".soundController .tracker",
holder).css({"top":maxRate+"%"});setSound(maxRate)}}}function setSound(val){if(player){val=isNaN(val)?o.sound:val;if(orientation=="horizontal")$(".soundController .progress",holder).css({"width":val+"%"});else{val=maxRate-val;$(".soundController .progress",holder).css({"height":val+"%"})}if(val<=0)$(".sound .soundBtn",holder).addClass("mute");else $(".sound .soundBtn",holder).removeClass("mute");player.setVolume(val);if(val>0)if(orientation=="horizontal")o.sound=val;else o.sound=maxRate-val}}function IntervalClear(){if(stm!=
null){clearInterval(stm);stm=null}}function playerUpdate(){if(stm==null){stm=setInterval(updatePlayer,100);updatePlayer()}}this.seekTo=function(k){if(typeof player.seekTo!=="undefined")player.seekTo(k,true)};this.pauseVideo=function(){if(typeof player.pauseVideo!=="undefined")player.pauseVideo()};this.playVideo=function(){if(typeof player.playVideo!=="undefined")player.playVideo()};this.dispose=function(){if(stm!=null)clearTimeout(stm);stm=null;player=null;$(".controller .playPauseBtn",div).unbind("click");
$(".controller .fullScreenBtn",div).unbind("click");$(".progressBar",holder).unbind("click");$(".sound .soundBtn",holder).unbind("click");$(".soundController",holder).unbind("click",events.onClick);$(".soundController .tracker",holder).unbind("mousedown",events.mousedown).unbind("mouseup",events.mouseup);$(document).unbind("mousemove",events.mousemove).unbind("mouseup",events.mouseup)}})}})})(jQuery,window);


//MINUS DROPDOWN
(function($){
	$.fn.extend({
		
		minusDropDown : function(options, callback){
			
			var defaults = {
				type: 'hover', //--> hover ve click parametrelerini alÄ±r
				customClass: 'hover', //--> holder nesnesinin Ã¼zerine gelince alacaÄŸÄ± class
				delay: 555, //--> type hover seÃ§ildiÄŸinde mouseenter ve mouseleave kullanÄ±lÄ±r 
				className: '', //--> type click seÃ§ildiÄŸinde body tÄ±klanÄ±nca divin kapanmasÄ± iÃ§in gerekli. gÃ¶nderilmezse holdere atanmÄ±ÅŸ classlardan ilkini alÄ±r
				clicked: '', //-->tÄ±klanarak aÃ§Ä±lacak ID yollanÄ±r, type click seÃ§ilirse mutalaka gÃ¶nderilmeli
				openedControl: '',
				hideDropDown: [], //-->bu Ã¶zellik ile aÃ§Ä±k olan diÄŸer dropdownlarÄ± kapatabiliriz
				openedTime: null
			};
			
			var options = $.extend(defaults, options);
			
			return this.each(function(){
				
				var holder = $(this), o = options, className = '', stm = null;

				function init(){
					if( o.type == 'hover' )	holder.mouseenter( events.mouseenter ).mouseleave( events.mouseleave );
					else{ 
						$(o.clicked, holder).click( events.clicked );				
						className = o.className != '' ? o.className : holder.context.className.split(' ')[ 0 ];
						$("body, html").click( events.bodyClicked );
					}
				}
				
				var animate = {
					opened: function(){ controls(); holder.addClass( o.customClass ); if( callback != undefined ) callback('opened'); },
					closed: function(){ holder.removeClass( o.customClass ); if( callback != undefined ) callback('closed'); }
				}
				
				var events = {
					mouseenter: function(){
						if( stm != null ) clearTimeout( stm ); 
						if( o.openedControl != '' ){
							var ID = o.openedControl;							
							if( ID.html() == '' ) return false;
						}

						stm = setTimeout(function(){
							animate.opened();
						}, o.openedTime == null ? 0 : o.openedTime); 
					},
					mouseleave: function(){
						if( stm != null ) clearTimeout( stm );
						stm = setTimeout(function(){
							animate.closed();
						}, o.delay);
					}, 
					clicked: function(){ 
						if( holder.hasClass( o.customClass ) ) animate.closed();
						else animate.opened();  
					},
					bodyClicked: function( e ){
						if( holder.hasClass( o.customClass ) ){ 
							if( e.target.className != className && $( e.target ).parents( '.' + className ).size() != 1 ){ 
								animate.closed();	
							}
						}
					}
				}
				
				function controls(){
					if( o.hideDropDown.length > 0 ){
						for( var i = 0; i < o.hideDropDown.length;  ++i ){
							if( o.hideDropDown[i].lenght > 0 )
								o.hideDropDown[i][0].closed();
						}
					}
				}
				
				//PUBLIC FUNC
				this.opened = function(){ animate.opened(); }
				this.closed = function(){ if( stm != null ) clearTimeout( stm ); animate.closed();	}
				this.dispose = function(){ 
					if( o.type == 'hover' )	holder.unbind('mouseenter').unbind('mouseleave');
					else $(o.clicked, holder).unbind('click');				
				}
				this.live = function(){
					if( o.type == 'hover' )	holder.mouseenter( events.mouseenter ).mouseleave( events.mouseleave );
					else $(o.clicked, holder).click( events.clicked );			
				}		
	
				init();
			});
		}
	})
})(jQuery, window);