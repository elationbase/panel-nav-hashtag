/*
 * jQuery Panel Hashtag Navigation 1.0
 * https://github.com/elationbase/jquery.ebPanelNavHashtag
 * Copyright 2013, elationbase
 * A complete navigation system with horizontal and vertical layouts and hashtag enabled
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
$.fn.ebPanelNavHashtag = function() {
	
	var theW = $(window).width(); //console.log(theW);
	var theH = $(window).height(); //console.log(theH);
	var headerH = $("header").innerHeight(); //console.log(headerH);
	var dataHash;
	var defaults = {
		wrapperClass: ".eb-wrapper",
		panelClass: ".eb-panel",
		homePanel: "#eb-panel1",
		linkClass: ".eb-link-item",
		navClass: ".eb-nav-item",
		headerHeight: headerH,
		layout: "horizontal", // Options: horizontal, vertical
		rememberPanel: true,
		easing : "swing"
	}
	
	var options =  $.extend(defaults, options);
	
	function intialSet () {
		$(defaults.wrapperClass).css({height:theH,width:theW});
		$(defaults.panelClass).css({width:theW,height:theH-headerH,top:headerH});
	}
	
	intialSet ();
	
	function initialPanel () {
		if (defaults.rememberPanel === true) {
			var oldPanel = window.location.hash; console.log(oldPanel);
			if(oldPanel != ''){
				changePanel(oldPanel);
			} 
		} else {
			history.pushState(null, null, '#');
		}
	}
	
	initialPanel ();
	
	if (defaults.layout === "horizontal") {
		$(defaults.panelClass).css({left: "100%"});
		$(defaults.homePanel).addClass("eb-active").css({left: "0"});
		var activeAni = {left: "-100%"},
		    offAni = {left:"100%", display:"none"},
		    locationAni = {left: "0%"}
	} 
	if (defaults.layout === "vertical") {
		$(defaults.panelClass).css({top: "-100%"});
		$(defaults.homePanel).addClass("eb-active").css({top: headerH});
		var activeAni = {top: "100%"},
		    offAni = {top:"-100%", display:"none"},
		    locationAni = {top: headerH}
	}
	
	function changePanel(location) {
		$(".eb-active").stop(true,false).animate(activeAni, 500, defaults.easing, function() {
			$(this).removeClass("eb-active").css(offAni);
		});
		$(location).addClass("eb-move").show().animate(locationAni, 500, defaults.easing, function() {
			$(this).toggleClass("eb-move eb-active");
		});
	}
	function locationHashChanged() {
		dataHash = document.location.hash; //console.log(dataHash);
		changePanel(dataHash);
	}
	
	window.onhashchange = locationHashChanged;
	var linksItems = $(defaults.linkClass + ", " + defaults.navClass + " a"); //console.log(linksItems);
	linksItems.on("click", function(event){
		event.preventDefault();
		dataHash = $(this).attr("data-hash"); //console.log(dataHash);
		if ( !$(dataHash).hasClass("eb-active") ) {
			linksItems.removeClass("eb-nav-active");
			$(this).addClass("eb-nav-active");
			window.location.hash = dataHash;
		}
	});
	
	$(window).on('resize', function(){
		theW = $(window).width();
		theH = $(window).height();
		headerH = $("header").innerHeight();
		intialSet ();
	});
	
};