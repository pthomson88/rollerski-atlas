// functions for the button examples
function mapFocus(url) {
  document.getElementById("mainmap").src = url;
  document.getElementById("button1").onclick = "mapUnFocus('https://www.google.com/maps/d/embed?mid=1JsZ0qoeoCehcQnX9fXjmDTCpxYl9QLdc')";
  document.getElementById("button1").innerHTML = "Original View";
}
function mapUnFocus(url) {
  document.getElementById("mainmap").src = url;
  document.getElementById("button1").onclick = "mapFocus('https://www.google.com/maps/d/embed?mid=1JsZ0qoeoCehcQnX9fXjmDTCpxYl9QLdc&ll=55.89130019521464%2C-3.165987915639006&z=12')";
  document.getElementById("button1").innerHTML = "Sheriffhall to Roslyn";
}
