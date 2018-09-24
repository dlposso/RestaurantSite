/*
Name: David Posso
Date Created: 9/23/2018
Most recent revision: 9/23/2018
*/


function info(){
	alert("To best view this site, make sure JavaScript is enabled on your device!");
}

function validation(){

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var info = document.getElementById("info").value;

	/*Could not quite figure out how to add these to the is statement
	var M = document.getElementById("monday");
	var T = document.getElementById("tuesday");
	var W = document.getElementById("wednesday");
	var Th = document.getElementById("thursday");
	var F = document.getElementById("friday");*/

	if(name && email && phone && info){

		alert("Dear " + name + ", your request was received. We will contact you soon. \n Thank You!!");

	}

	else{
		alert("Make sure you complete all the fields!!!");
	}
}
