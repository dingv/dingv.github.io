var basket = {};

function generate() {
	var treats = ["Butterfinger", 
	"KitKat", 
	"Mr. Goodbar",
	"Crunch Bar", 
	"Raisins",
	"Dum Dum"];
	
	var rindex = Math.floor(Math.random() * treats.length);
	treat = treats[rindex];
	if (basket.hasOwnProperty(treat)) {
		basket[treat] += 1;
	} else {
		basket[treat] = 1;
	}
	document.getElementById("treat").innerHTML = treat;
	
	baskettxt = "";
	for (var k in basket) {
		if (basket.hasOwnProperty(k)) {
			baskettxt = baskettxt + k + ": " + basket[k] + "<br>";
		}
	}
	document.getElementById("basket").innerHTML = "<b>Your basket:</b><br>" + baskettxt;
}