function checkInput(){
	var uname = document.forms["login-form"]["username"].value;
	var pass = document.forms["login-form"]["password"].value;
	if (uname == "" || pass == ""){
		alert("Empty username or password field!");
	} else {
		alert("Welcome to our site, " + uname + "!");
	}
}