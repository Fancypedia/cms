import { getCookie } from "./cookies.js";

export default function checkCookie() {
    let token = getCookie("token");
	if (token != "") {
	alert("Hi Welcome to Fancypedia");
	} else {
		alert("Biasakan Login Dulu Ya Bang!")

		// ATTENTION : Ini dinyalakan dan body onload check cookies 
		// window.location.href="https://fancypedia.my.id/theme/signin/";

		window.location.href="https://fancypedia.my.id/pages/signin/index.html";
	}
}