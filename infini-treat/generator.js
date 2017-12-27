var basket = {};

var treats = 
["Butterfinger", 
"KitKat", 
"Mr. Goodbar",
"Crunch Bar", 
"Raisins",
"Dum Dum",
"Skittles",
"Ghirardelli"];

function generate() {
	var rindex = Math.floor(Math.random() * treats.length);
	treat = treats[rindex];
	if (basket.hasOwnProperty(treat)) {
		basket[treat] += 1;
	} else {
		basket[treat] = 1;
	}
	document.getElementById("treat").innerHTML = "<img src=" + "\"img/" + treat + ".jpg\">";
	
	baskettxt = "";
	for (var k in basket) {
		if (basket.hasOwnProperty(k)) {
			baskettxt = baskettxt + k + ": " + basket[k] + "<br>";
		}
	}
	document.getElementById("basket").innerHTML = "<b>Your basket:</b><br>" + baskettxt;
}