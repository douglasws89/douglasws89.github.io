$(document).ready(function(){

	// Shows my name initally
	$("span.myName").fadeIn(2000);
//	
	
//	$("span.myName").slideDown("slow","easeInBounce");
	
	// Loads the line, profission, and icons
	$("div.separator").animate({
		"bottom": "0px"
	},1500, function(){
		$("div.professionTitle").animate({
			"bottom": "0px"
		},1000, function(){
			$("ul").animate({
				"bottom": "0px"
			},600);
		});
	});
	
	// Shows the "about" label when hover over
	$("span.myName").mouseover(function(){
		$(".label.me").animate({
			"color":"#223abf",
			"border-color":"#223abf",
		},"fast");
	});

	$("span.myName").mouseout(function(){
		$(".label.me").animate({
			"color":"black",
			"border-color":"black"
		},"fast");
	});
	
	// Sitchs portfolio for arrow up and shows label
	$('.portfolio').hover(function() {
			$(this).find('#portfolioIcon').hide();
			$(this).find('#arrowUp').show();
			$(".label.port").animate({
				"color":"#223abf",
				"border-color":"#223abf",
			},"fast");
		}, function() {
			$(this).find('#arrowUp').hide();
			$(this).find('#portfolioIcon').show();
			$(".label.port").animate({
				"color":"black",
				"border-color":"black",
			},"fast");
	});
	
	// Sitchs menu for arrow right and shows label
	$('.col-sm-1.menu').hover(function() {
		$(this).find('#menuIcon').hide();
		$(this).find('#arrowRight').show();
		$(".label.menu").animate({
			"color":"#223abf",
			"border-color":"#223abf",
		},"fast");
		}, function() {
			$(this).find('#arrowRight').hide();
			$(this).find('#menuIcon').show();
			$(".label.menu").animate({
				"color":"black",
				"border-color":"black"
			},"fast");
	});
	
	// Sitchs contact for arrow down and shows label
	$('.contact').hover(function() {
		$(this).find('#contactIcon').hide();
		$(this).find('#arrowDown').show();
		$(".label.contact").animate({
			"color":"#223abf",
			"border-color":"#223abf",
		},"fast");
		}, function() {
			$(this).find('#arrowDown').hide();
			$(this).find('#contactIcon').show();
			$(".label.contact").animate({
				"color":"black",
				"border-color":"black"
			},"fast");
	});
	
	// Sitchs about for arrow left and shows label
	$('.col-sm-1.about').hover(function() {
		$(this).find('#aboutIcon').hide();
		$(this).find('#arrowLeft').show();
		$(".label.about").animate({
			"color":"#223abf",
			"border-color":"#223abf",
		},"fast");
		}, function() {
			$(this).find('#arrowLeft').hide();
			$(this).find('#aboutIcon').show();
			$(".label.about").animate({
				"color":"black",
				"border-color":"black"
			},"fast");
	});
	
	// Make menu on the right side appear
	$('.col-sm-1.menu').click(function(){
		$('#sidemenuRight').show("slide",{direction: 'right'}, "slow");
	});
	
	$('#closeMenu').click(function(){
		$('#sidemenuRight').hide("slide",{direction: 'right'}, "slow");
		$('#arrowRight').hide();
		$('#menuIcon').show();
		$(".label.menu").animate({
			"color":"black",
			"border-color":"black"
		},"fast");
		return false;
	});
	
});
	
	