# Scottish Rollerski Atlas

Find suitable routes for rollerskiing in Scotland by navigating the map
     
<iframe id="mainmap" src="https://www.google.com/maps/d/embed?mid=1JsZ0qoeoCehcQnX9fXjmDTCpxYl9QLdc" style="width:100%;height:300%;"></iframe>
     
<button onclick="mapFocus('https://www.google.com/maps/d/embed?mid=1JsZ0qoeoCehcQnX9fXjmDTCpxYl9QLdc&ll=55.89130019521464%2C-3.165987915639006&z=12')">Sheriffhall to Roslyn</button>

<script>
function mapFocus(url) {
  document.getElementById("mainmap").src = url;
}
</script>
