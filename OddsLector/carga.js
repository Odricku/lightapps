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
		
		var combobox = document.getElementById('chosecap').appendChild;
		
		for(var i = 0; i < data.length; i++){
			var opcion = document.createElement("option");
			opcion.value = i;
			opcion.innerText = "Capitulo " + data[i].num;
			combobox.appendChild(opcion);
		}
	}
}
	

function cargacap(item){
	
	var cap = data[parseInt(item.value)];
	var repo = document.getElementById('repositorio');
	
	repo.innerHTML = "";
	
	for(var i = 0; i < cap[page]; i++){
		var container = document.createElement("div");
		var imagen = document.createElement("img");
		imagen.src = "https://odricku.cl/oddslLector/caps/" + cap.num + "/" + i + ".png";
		container.appendChild(imagen);
		repo.appendChild(container);
	}
}
