### jQuery Plugin 
# [eb Panel Nav Hashtag](http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/)
## A complete navigation system with panel transitions and hashtag enabled
================================

### Usage
1.) Add CSS before the opening of the &lt;body&gt; tag
`````html
<link rel="stylesheet" href="_/css/global.css">
`````
2.) Add jQuery and plugin.
(recommended to place at the end before the close of the &lt;body&gt; tag for faster loading )
`````html
<!-- Grab Google CDN's jQuery. fall back to local if necessary -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write("<script src='_/js/lib/jquery-1.10.2.min.js'>\x3C/script>")</script>
<script src="_/js/jquery.easing.1.3.js"></script>
<script src="_/js/jquery.eb-panel-nav-hashtag.min.js"></script>
`````
3.) Call the plugin Inside of a &lt;script&gt; block after the include of the step 2
`````javascript
$(document).ready(function (){
    $("body").ebPanelNavHashtag();
});
`````
4.) HTML5 markup
`````html
<nav class="eb-nav-item">
    <ul>
        <li><a href="#" data-hash="#link1">Link 1</a></li>
        <li><a href="#" data-hash="#link2">Link 2</a></li>
        <li><a href="#" data-hash="#link3">Link 3</a></li>
    </ul>
</nav>
<div class="eb-wrapper">
    <section id="link1" class="eb-panel">
        <!-- Your Content for link 1 -->
    </section>
    <section id="link2" class="eb-panel">
        <!-- Your Content for link 2 -->
    </section>
    <section id="link3" class="eb-panel">
        <!-- Your Content for link 3 -->
    </section>
</div>
`````
### Options
jQuery eb Panel Nav Hashtag plugin is packed full of options that allow you to adapt to the project’s specific needs. Check the <a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/#demos">demo page</a> for detailed implementations.

####Transitions
<b>layout</b> (Type of transition between panels)
`````html
default: 'horizontal'
options: 'horizontal', 'vertical', 'fade'
`````
<b>transitionTime</b> (Time in milliseconds of transition between slides)
`````html
default: 500
options: integer
`````
<b>easing</b> (The type of "easing" to use during transitions. You may include jquery.easing.1.3.js for many options)
`````html
default: 'swing'
options (if not using jquery.easing.1.3): 'swing', 'linear'
options (if use jquery.easing.1.3): 'swing', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce'
`````
<b>rememberPanel</b> (If hashtag available jump to hastag panel not to initial)
`````html
default: false
options: boolean (true / false)
`````
####Selectors

<b>wrapperClass</b> (The class name that wraps the content panels)
`````html
default: '.eb-wrapper'
options: CSS selector
`````
<b>panelClass</b> (One class of all panels)
`````html
default: '.eb-panel'
options: CSS selector
`````
<b>homePanel</b> (The panel you want to start)
`````html
default: '#eb-panel1'
options: CSS selector
`````
<b>navClass</b> (The class of your navigation wrapper)
`````html
default: '.eb-nav-item'
options: CSS selector
`````
<b>activeClass</b> (The class for the navigation link selected state)
`````html
default: '.eb-nav-active'
options: CSS selector
`````
<b>linkClass</b> (the class of individual links)
`````html
default: '.eb-link-item'
options: CSS selector
`````
<b>headerHeight</b> (The height of the header)
`````html
default: headerH
options: size in px
`````
####Callbacks

<b>onStart</b> (Fires your custon function before the panel transition start)
`````html
default: function(){}
options: function(){ // your code here }
`````
<b>onEnd</b> (Fires your custon function after the panel transition finsh)
`````html
default: function(){}
options: function(){ // your code here }
`````

###Demos
Find below a smattering of examples demonstrating many different features of jQuery eb Panel Nav Hashtag plugin. Let’s get on with it!

1.) <b>The very basic</b> (without any options)<a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/demos/basic.html" target="_blank">view</a>

2.) <b>Vertical</b> (change of transition style)<a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/demos/vertical.html" target="_blank">view</a>

3.) <b>Fade</b> (change of transition style)<a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/demos/fade.html" target="_blank">view</a>

4.) <b>Vertical + Time</b> (change of transition style and time)<a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/demos/vertical-time.html" target="_blank">view</a>

5.) <b>Vertical + Time + easeing</b> (change of transition style, time and easeing)<a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/demos/vertical-time-easing.html" target="_blank">view</a>

6.) <b>Change of selector</b> (Learn how to use your custom selectors)<a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/demos/selectors.html" target="_blank">view</a>

7.) <b>With callbacks</b> (how to use onStart and onEnd Callbacks)<a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/demos/callbacks.html" target="_blank">view</a>

8.) <b>Bootstrap Integration</b> (how to use the plugin with Bootstrap)<a href="http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/demos/bootstrap.html" target="_blank">view</a>


### License
Copyright (c) 2014 Elation Base
Licensed under the MIT license.
`````html
/*
 * jQuery Panel Hashtag Navigation 1.1
 * https://github.com/elationbase/jquery.ebPanelNavHashtag/
 * http://elationbase.com/jquery/jquery-eb-panel-nav-hashtag/
 * Copyright 2014, elationbase
 * A complete navigation system with panel transitions and hashtag enabled
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
`````
