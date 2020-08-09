var data;
	
window.onload = function(){
	cargajson();
}

function cargajson(){
		
	var urls = encodeURI("https://odricku.cl/oddslector/data.json");
	
	request = new XMLHttpRequest();	
	request.open('GET', urls);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		data = request.response;
				
		for(var i = 0; i < data.length; i++){
			var opcion = document.createElement("option");
			opcion.value = i;
			opcion.innerText = "Capitulo " + data[i].num;
			document.getElementById('chosecap').appendChild(opcion);
		}
	}
}
	

function cargacap(item){
	
	var cap = data[parseInt(item.value)];
	
	document.getElementById('repositorio').innerHTML = "";
	
	for(var i = 1; i < cap.page - 1; i++){
		var container = document.createElement("div");
		var imagen = document.createElement("img");
		imagen.src = "https://odricku.cl/oddslector/caps/" + cap.num + "/" + i + ".png";
		container.appendChild(imagen);
		document.getElementById('repositorio').appendChild(container);
	}
}
