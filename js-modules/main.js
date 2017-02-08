console.log("hello from the main js file! - Please delete this line.");

var $ = require('jquery');

global.jQuery = require('jquery');

var lightbox = require('lightbox2');

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
