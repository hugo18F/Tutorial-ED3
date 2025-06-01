/***************************
* Autor: Equipo 3
* Estructuras Discretas
* 2025-1
****************************/

/* 

	FILE: global.js 
	DESCRIPTION: Actions for user interface.

*/

$(document).ready(function() {
	/* 
	LEFT AND RIGHT BARS
	============================================================== 
	*/
	
	var $nlTrigger = $('#nav-left-trigger');
	var $nrTrigger = $('#nav-right-trigger');
	var $nLeft = $('#nav-left');
	var $nRight = $('#nav-right');
	var speed = 400;
	var show = 0;
	var hide = -220;
	
	$nLeft.hide();
	$nRight.hide();
	
	$nlTrigger.mouseenter(function() {
		$(this).hide();
		$nLeft.show().stop().animate({left: show}, speed);
	});
	$nLeft.mouseleave(function() {
		$(this).stop().animate({left: hide}, speed, function() {
			$(this).hide();
			$nlTrigger.show();
		});
	});
	
	$nrTrigger.mouseenter(function() {
		$(this).hide();
		$nRight.show().stop().animate({right: show}, speed);
	});
	
	$nRight.mouseleave(function() {
		$(this).stop().animate({right: hide}, speed, function() {
			$(this).hide();
			$nrTrigger.show();
		});
	});
	
	/* 
	THEMES
	============================================================== 
	*/
	
	var $theme = $('div#theme');
	
	var $theme1 = $('ul#themes li#nlt-theme1');
	var $theme2 = $('ul#themes li#nlt-theme2');
	var $theme3 = $('ul#themes li#nlt-theme3');
	var $theme4 = $('ul#themes li#nlt-theme4');
	var $theme5 = $('ul#themes li#nlt-theme5');
	var $theme6 = $('ul#themes li#nlt-theme6');
	var $theme7 = $('ul#themes li#nlt-theme7');
	var $theme8 = $('ul#themes li#nlt-theme8');
	var $theme9 = $('ul#themes li#nlt-theme9');
	
	$theme1.click( function() {
		$theme.removeClass().addClass('theme1');
	});
	
	$theme2.click( function() {
		$theme.removeClass().addClass('theme2');
	});
	
	$theme3.click( function() {
		$theme.removeClass().addClass('theme3');
	});
	
	$theme4.click( function() {
		$theme.removeClass().addClass('theme4');
	});
	
	$theme5.click( function() {
		$theme.removeClass().addClass('theme5');
	});
	
	$theme6.click( function() {
		$theme.removeClass().addClass('theme6');
	});
	
	$theme7.click( function() {
		$theme.removeClass().addClass('theme7');
	});
	
	$theme8.click( function() {
		$theme.removeClass().addClass('theme8');
	});
	
	$theme9.click( function() {
		$theme.removeClass().addClass('theme9');
	});
		
});
