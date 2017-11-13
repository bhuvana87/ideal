// JavaScript Document	

$(document).ready(function () {
 
	  'use strict';
	  
/* ==============================================
	Page Loader
=============================================== */
	 //Page Loader
	$(window).load(function() {
		$(".loader-item").delay(1800).fadeOut();
		$("#pageloader").delay(2200).fadeOut("slow");
	}); 
	

	/* ==============================================
Home Super Slider 
=============================================== */
 $('#slides_background').superslides({
      animation: 'fade'
    });
	
	
/* ==============================================
	 SmoothScroll
=============================================== */	
	
	$('.nav a').smoothScroll({
		speed: 900
	});
	
/* ==============================================
	Nice Scroll
=============================================== */	

    $("html").niceScroll({scrollspeed:"120"});

/* ==============================================
	Active Nav
=============================================== */	
 // Active Nav
	$('.navigation').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });
	
	
// Jack In The Box CSS Animation
	$('body').jackInTheBox();

	
	
 /* ==============================================
	Scroll Navigation
=============================================== */	

$(function() {
		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
});
	
	/* ==============================================
	Flex Slider Home Main
=============================================== */		
      $('.flexslider').flexslider({
        animation: "slide",
		selector: ".home-slides > li",
		controlNav: false,
		directionNav: false ,
		direction: "vertical"
       
      });
	
	/* ==============================================
	Flex Slider service_background_parallax
=============================================== */
	$('.flexslider_service').flexslider({
        animation: "slide",
		selector: ".service_back_anim > li",
		controlNav: false,
		directionNav: false ,
		direction: "horizontal"
       
      });

	  /* ==============================================
	Flex Slider LATSET PROJECT
=============================================== */
	$('.flexslider_project').flexslider({
        animation: "slide",
		selector: ".slides > li",
		direction: "horizontal"
       
      });
	  
	
	  /* ==============================================
	Navigation Menu, Sticky             FIXED NAVIGATION TOP
=============================================== */
	  $("#navigation").sticky({ topSpacing: 0 });
	  
	 
 /* ==============================================
	Team animation show hide
=============================================== */

	$('.col3_row1').css("opacity","0");
	$('.col2_row3').css("opacity","0");
	$('.col3_row3').css("opacity","0");
	
	$('.col4_row1').css("opacity","0.6");
	$('.col1_row3').css("opacity","0.6");
	$('.col4_row3').css("opacity","0.6");
	
	
	$(".col4_row1").hover(function(){
	
		$('.col4_row1').css("opacity","1");
		$('.col3_row1').css("opacity","1").css("transform","translateX(-50%)").css("-webkit-transition","translateX(-50%)").css("-moz-transition","translateX(-50%)").css("-o-transition","translateX(-50%)");
		
		$('.col2_row2').css("opacity","0.6");
		$('.col1_row3').css("opacity","0.6");
		$('.col4_row3').css("opacity","0.6");
		$('.col3_row2').css("opacity","0").css("transition","all 1s ease-in-out");
		$('.col2_row3').css("opacity","0").css("transform","translateX(-100%)").css("-webkit-transition","translateX(-100%)").css("-moz-transition","translateX(-100%)").css("-o-transition","translateX(-100%)");
		$('.col3_row3').css("opacity","0").css("transform","translateX(50%)").css("-webkit-transition","translateX(50%)").css("-moz-transition","translateX(50%)").css("-o-transition","translateX(50%)");
		
	});
	
	$(".col2_row2").hover(function(){
	
		$('.col2_row2').css("opacity","1");
		$('.col3_row2').css("opacity","1").css("transition","all 1s ease-in-out");
		$('.col3_row1').css("opacity","0").css("transform","translateX(50%)").css("-webkit-transition","translateX(50%)").css("-moz-transition","translateX(5%)").css("-o-transition","translateX(50%)");
		$('.col2_row3').css("opacity","0").css("transform","translateX(-100%)").css("-webkit-transition","translateX(-100%)").css("-moz-transition","translateX(-100%)").css("-o-transition","translateX(-100%)");
		$('.col3_row3').css("opacity","0").css("transform","translateX(50%)").css("-webkit-transition","translateX(50%)").css("-moz-transition","translateX(50%)").css("-o-transition","translateX(50%)");
		$('.col4_row1').css("opacity","0.6");
		$('.col1_row3').css("opacity","0.6");
		$('.col4_row3').css("opacity","0.6");
		
		
	});
	
	$(".col1_row3").hover(function(){
	
		$('.col1_row3').css("opacity","1");
		$('.col2_row3').css("opacity","1").css("transform","translateX(50%)").css("-webkit-transition","translateX(50%)").css("-moz-transition","translateX(50%)").css("-o-transition","translateX(50%)");
		
		$('.col2_row2').css("opacity","0.6");
		$('.col3_row2').css("opacity","0").css("transition","all 1s ease-in-out");
		
		$('.col4_row3').css("opacity","0.6");
		$('.col3_row3').css("opacity","0").css("transform","translateX(50%)").css("-webkit-transition","translateX(50%)").css("-moz-transition","translateX(50%)").css("-o-transition","translateX(50%)");
		
		$('.col4_row1').css("opacity","0.6");
		$('.col3_row1').css("opacity","0").css("transform","translateX(50%)").css("-webkit-transition","translateX(50%)").css("-moz-transition","translateX(50%)").css("-o-transition","translateX(50%)");
		
		
	});
	
	$(".col4_row3").hover(function(){
	
		$('.col4_row3').css("opacity","1");
		$('.col3_row3').css("opacity","1").css("transform","translateX(-50%)").css("-webkit-transition","translateX(-50%)").css("-moz-transition","translateX(-50%)").css("-o-transition","translateX(-50%)");
		
		$('.col1_row3').css("opacity","0.6");
		$('.col2_row3').css("opacity","0").css("transform","translateX(-100%)").css("-webkit-transition","translateX(-100%)").css("-moz-transition","translateX(-100%)").css("-o-transition","translateX(-100%)");
		
		$('.col2_row2').css("opacity","0.6");
		$('.col3_row2').css("opacity","0").css("transition","all 1s ease-in-out");
		
		$('.col4_row1').css("opacity","0.6");
		$('.col3_row1').css("opacity","0").css("transform","translateX(50%)").css("-webkit-transition","translateX(50%)").css("-moz-transition","translateX(50%)").css("-o-transition","translateX(50%)");
		
		
	});
	
	

	

	 
	/* ==============================================
	GOOGLE MAPS
=============================================== */	  
	  
	  // GOOGLE MAPS
	$('#my_map').gmap3({
		 map: {
			options: {
			  maxZoom: 14 ,
			  scrollwheel: false,
			}  
		 },
		 
		 marker:{
			latLng:[34.743561,10.756027],
			options: {
			 icon: new google.maps.MarkerImage(
			   "img/map.png",
			   new google.maps.Size(30, 38, "px", "px")
			 )
			}
		 }
		},"autofit" );
	$("#my_map").width("100%").height("460px").gmap3();
	$('#my_map').show().gmap3().css('border-top', '1px solid #111111').css('border-bottom', '1px solid #111111').css('margin', '47px 0');
	
/* ==============================================
Pretty Photo
=============================================== */	
	
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
			  animationSpeed: 'fast',
			  opacity: 0.7,
			  social_tools: "",
			  deeplinking: false
		
	});
	
	
/* ==============================================
Isotop Portfolio	
=============================================== */	
	
	// Isotop Portfolio	
    var $container = $('#portfolio-wrap');
	$container.imagesLoaded( function() {
		$container.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows',
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
    });
	
    $('#portfolio-filter a').click(function(){
        $('#portfolio-filter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 250,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
	
	//,tween2T = TweenLite.to(top2T, 10, {width:"100%", delay:10});
	$( ".panel" ).hover(function() {
		
		var topT = $( ".bardragn.T",$(this) )
		,top2T = $( ".bardragn2.T",$(this) )
		,topR = $( ".bardragn.R",$(this) )
		,top2R = $( ".bardragn2.R",$(this) )
		,topL = $( ".bardragn.L",$(this) )
		,top2L = $( ".bardragn2.L",$(this) )
		,topB = $( ".bardragn.B",$(this) )
		,top2B = $( ".bardragn2.B",$(this) );
		
		TweenMax.to(topT, 0.3, {right:"100%"});	
		TweenMax.to(top2T, 0.3, {width:"100%", delay:0.4});	
		TweenMax.to(topR, 0.3, {bottom:"100%"});	
		TweenMax.to(top2R, 0.3, {height:"100%", delay:0.4});	
		TweenMax.to(topL, 0.3, {top:"100%"});	
		TweenMax.to(top2L, 0.3, {height:"100%", delay:0.4});	
		TweenMax.to(topB, 0.3, {left:"100%"});	
		TweenMax.to(top2B, 0.3, {width:"100%", delay:0.4});	
		
	},
	function () {
	
		var topT = $( ".bardragn.T",$(this) )
		,top2T = $( ".bardragn2.T",$(this) )
		,topR = $( ".bardragn.R",$(this) )
		,top2R = $( ".bardragn2.R",$(this) )
		,topL = $( ".bardragn.L",$(this) )
		,top2L = $( ".bardragn2.L",$(this) )
		,topB = $( ".bardragn.B",$(this) )
		,top2B = $( ".bardragn2.B",$(this) );
		
		TweenMax.to(topT, 0.3, {right:"0", delay:0.4});	
		TweenMax.to(top2T, 0.3, {width:"0"});
		TweenMax.to(topR, 0.3, {bottom:"0", delay:0.4});	
		TweenMax.to(top2R, 0.3, {height:"0"});	
		TweenMax.to(topL, 0.3, {top:"0", delay:0.4});	
		TweenMax.to(top2L, 0.3, {height:"0"});	
		TweenMax.to(topB, 0.3, {left:"0", delay:0.4});	
		TweenMax.to(top2B, 0.3, {width:"0"});
		
	});
	

	
	
 });
 
 /* ==============================================
Owl Carousel
=============================================== */	
 
$(document).ready(function () {
	
	
	// Owl Carousel
	$("#owl-customer").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		autoPlay : false,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		navigation : false,
		pagination : false
	});
	
	
	// Radial progress bar
	$('.cart').appear(function() {
		var easy_pie_chart = {};
		$('.circular-item').removeClass("hidden");
		$('.circular-pie').each(function() {
			var text_span = $(this).children('span');
			$(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
				size : 183,
				animate : 3000,
				lineWidth : 6,
				lineCap : 'square',
				barColor: '#111111',
				trackColor: '#b7b7b7',
				lineWidth: 3,
				lineCap: 'square',
				scaleColor : false,
				onStep : function(value) {
					text_span.text(parseInt(value, 10) + '%');
				}
			}));
		});
	});
	
	
});




/* ==============================================
	Video Script
=============================================== */

	jQuery(function(){
				jQuery(".player").mb_YTPlayer();
	});	
		
	
/* ==============================================
SEND MSESSAGE
=============================================== */	
	// validate and process form here 
	$(".btn_send").click(function() { 
		
		var name = $("input#name").val();  
		var email = $("input#email").val();
		var message = $("textarea#message").val(); 
		var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
		
		//alert (dataString);return false;  
		$.ajax({  
		  type: "POST",  
		  url: "mailer.php",  
		  data: dataString,  
		  success: function() { 
			$('.formulaire').html("<div id='message'> <i class='fa fa-rocket fa-4x'></i> <h2>Contact Form Submitted!</h2> <p>We will be in touch soon.</p> </div>");
			  
		  }
		});  
		return false;		
     
	});  
	
