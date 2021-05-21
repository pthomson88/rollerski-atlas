//start with a new div
var div4iframe = document.createElement('div');
div4iframe.id = "div4iframe";
div4iframe.style.centre.margin = "auto";
document.body.appendChild(div4iframe);

// next up a map
var mapUrl = 'https://www.google.com/maps/d/embed?mid=1JsZ0qoeoCehcQnX9fXjmDTCpxYl9QLdc&ll=55.87827418515526%2C-3.1336741860674344&z=12';
// create the embedded map as an iframe
var iframe = document.createElement('iframe');
iframe.src = mapUrl;
iframe.width = "600";
iframe.height = "450";
iframe.allowFullscreen = false;
// add the iframe to the body of the document
document.getElementById("div4iframe").appendChild(iframe);
