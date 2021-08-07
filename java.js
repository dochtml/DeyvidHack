window.addEventListener("load", function () {
	console.log('Mmmm... ¡¿Que haces en la consola?!');
});

function colorChanger() {
	var selectValue = document.getElementById("seccionColores").value;
	
	if (selectValue === "defecto") {
		document.getElementById("imagen").style.display = "block"
	} else {
		document.getElementById("imagen").style.display = "none"
	};

	if (selectValue === "azul") {
		document.getElementById("imagen3").style.display = "block"
	} else {
		document.getElementById("imagen3").style.display = "none"
	}

	if (selectValue === "rojo") {
		document.getElementById("imagen4").style.display = "block"
	} else {
		document.getElementById("imagen4").style.display = "none"
	}

	if (selectValue === "verde") {
		document.getElementById("imagen5").style.display = "block"
	} else {
		document.getElementById("imagen5").style.display = "none"
	}

	if (selectValue === "blanco") {
		document.getElementById("imagen2").style.display = "block"
	} else {
		document.getElementById("imagen2").style.display = "none"
	}
};