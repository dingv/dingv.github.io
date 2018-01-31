function pressEnter() {
	var input = document.getElementById("message").value;

	if (input == ":clear") {
		document.getElementById("output").innerHTML = "";
	} else {
		document.getElementById("output").innerHTML += input + "<br>";
	}

	document.getElementById("message").value = "";
}