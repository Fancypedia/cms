import { getCookie } from "./cookies.js";

export default function checkCookie() {
    let username = getCookie("username");
	if (username != "") {
	alert("Hi " + username +" Welcome to Fancypedia");
	} else {
		alert("Biasakan Login Dulu Ya Bang!")

		// ATTENTION : Ini dinyalakan dan body onload check cookies 
		// window.location.href="https://fancypedia.my.id/theme/signin/";

		window.location.href="https://fancypedia.my.id/pages/signin/index.html";
	}
}