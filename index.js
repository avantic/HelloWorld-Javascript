
function onLoad() {
	alert("¡Hola Mundo!");
	
	var txt = "<p>Navegador: " + navigator.appVersion + "</p>";
		txt+= "<p>S.O.: " + navigator.platform + "</p>";

	document.getElementById("info").innerHTML = txt;
}

function toggleText() {
	if (document.getElementById('text').style.display == "none")
		document.getElementById('text').style.display = "";
	else if (document.getElementById('text').style.display == "")
		document.getElementById('text').style.display = "none";
}