/*
 * jQuery Panel Hashtag Navigation 1.2.1
 * https://github.com/elationbase/jquery.ebPanelNavHashtag/
 * http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/
 * Copyright 2014, elationbase
 * A complete navigation system with panel transitions and hashtag enabled
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
$.fn.ebPanelNavHashtag = function( options ) {
	
	var theW = $(window).width(); //console.log(theW);
	var theH = $(window).height(); //console.log(theH);
	var headerH = $("header").innerHeight(); //console.log(headerH);
	var dataHash;
	var dataLoad;
	var settings = $.extend({
		wrapperClass: ".eb-wrapper",
		panelClass: ".eb-panel",
		homePanel: "#eb-panel1",
		linkClass: ".eb-link-item",
		activeClass: ".eb-nav-active",
		navClass: ".eb-nav-item",
		headerHeight: headerH,
		layout: "horizontal", // Options: horizontal, vertical 
		rememberPanel: false,
		easing : "swing",
		transitionTime: 500,
		onStart: function() {},
		onEnd: function() {}
	 }, options );
	
	function intialSet () {
		$(settings.wrapperClass).css({height:theH,width:theW});
		$(settings.panelClass).css({width:theW,height:theH-headerH,top:headerH});
	};
	intialSet ();
	
	if (settings.rememberPanel === true) {
		var oldPanel = window.location.hash; //console.log(oldPanel);
		if(oldPanel != ''){
			settings.homePanel = oldPanel;
		} 
	} else {
		history.pushState(null, null, '#');
	};
	
	if (settings.layout === "horizontal") {
		$(settings.panelClass).css({left: "100%"});
		$(settings.homePanel).addClass("eb-active").css({left: "0"});
		var activeAni = {left: "-100%"},
		    offAni = {left:"100%", display:"none"},
		    locationAni = {left: "0%"}
	};
	if (settings.layout === "vertical") {
		$(settings.panelClass).css({top: "-100%"});
		$(settings.homePanel).addClass("eb-active").css({top: headerH});
		var activeAni = {top: "100%"},
		    offAni = {top:"-100%", display:"none"},
		    locationAni = {top: headerH}
	};
	if (settings.layout === "fade") {
		$(settings.panelClass).css({opacity: 0});
		$(settings.homePanel).addClass("eb-active").css({top: headerH, opacity:1});
		var activeAni = {opacity: 0},
		    offAni = {},
		    locationAni = {opacity: 1}
	};
	function addActive() {
		var findActivePanel = $(".eb-active").attr("id"); //console.log("findActivePanel: " + findActivePanel);
		$('a[data-hash*='+ findActivePanel + ']').parent("li").addClass(settings.activeClass.slice(1));
	};
	addActive();
	
	function changePanel(location) {
		settings.onStart.call(this);
		$(".eb-active").stop(true).animate(activeAni, settings.transitionTime, settings.easing, function() {
			$(this).removeClass("eb-active").css(offAni);
		});
		$(location).stop(true).addClass("eb-move").show().animate(locationAni, settings.transitionTime, settings.easing, function() {
			$(this).toggleClass("eb-move eb-active");
			settings.onEnd.call(this);
			addActive();
		});
	};
	function locationHashChanged() {
		dataHash = document.location.hash; //console.log(dataHash);
		if ( dataHash != ''){
			changePanel(dataHash);
		};
	};
	
	window.onhashchange = locationHashChanged;
	
	var linksItems = $(settings.linkClass + ", " + settings.navClass + " a"); //console.log(linksItems);
	linksItems.on("click", function(event){
		event.preventDefault();
		dataHash = $(this).attr("data-hash"); //console.log(dataHash);
		if ( !$(dataHash).hasClass("eb-active") && typeof dataHash != 'undefined' )  {
			linksItems.parent("li").removeClass(settings.activeClass.slice(1));
			window.location.hash = dataHash;
		}
	});
	
	
	
	
	function loadPanel(dataHash,dataLoad) {
		settings.onStart.call(this);
		$(".eb-active").stop(true).animate(activeAni, settings.transitionTime, settings.easing, function() {
			$(this).removeClass("eb-active").css(offAni).empty();
		});
		$(dataHash).stop(true).addClass("eb-move").show().load(dataLoad).animate(locationAni, settings.transitionTime, settings.easing, function() {
			$(this).toggleClass("eb-move eb-active");
			settings.onEnd.call(this);
			addActive();
		});
	};
	
	var linksLoad = $(".eb-nav-load a"); console.log(linksLoad);
	linksLoad.on("click", function(event){
		event.preventDefault();
		dataLoad = $(this).attr("data-load"); console.log(dataLoad);
		dataHash = $(this).attr("data-hash"); console.log(dataHash);
		loadPanel(dataHash,dataLoad);
		window.location.hash = dataHash;
	});
	
	
	
	
	
	$(window).on('resize', function(){
		theW = $(window).width();
		theH = $(window).height();
		headerH = $("header").innerHeight();
		intialSet ();
	});
	
};
