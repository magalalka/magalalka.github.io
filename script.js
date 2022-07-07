function validateForm() {
	var a = document.forms["nameForm"]["name"].value;
	if (a == '') {
		alert("Enter your name");
	} else {
		alert("Hello, " + a + ". Nice to meet you");
	}
}
