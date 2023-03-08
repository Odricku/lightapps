function girar(angulo){
	
	[...document.querySelectorAll(".moneda-item")].forEach(elem => {
		elem.style.transform = elem.style.transform.replace(/-*[0-9\.]*deg/, parseInt(elem.style.transform.match(/-*[0-9\.]*deg/)[0].replace("deg", "")) + angulo + "deg")
	});
}