'use strict';

svg4everybody();

$(function() {
    FastClick.attach(document.body);
});

// Show the progress bar 
NProgress.start();

// Increase randomly
var interval = setInterval(function() { NProgress.inc(); }, 1000);        

// Trigger finish when page fully loaded
$(window).on('load', function() {
NProgress.start();
    clearInterval(interval);
    NProgress.done();
});

// Trigger bar when exiting the page
$(window).on("unload", function () {
    NProgress.start();
});

// Modules
//= require source/modules/**/!(_)*.js
