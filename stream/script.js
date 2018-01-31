function pressEnter() {
	var input = document.getElementById("message").value;
	document.getElementById("output").innerHTML += input + "<br>";
	document.getElementById("message").value = "";
}

function clearf() {
	document.getElementById("output").innerHTML = "";
}