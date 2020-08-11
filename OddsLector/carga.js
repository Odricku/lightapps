var data;
var ext = ["png", "jpg", "gif", "bmp", "jpeg", "tif", "tiff"];
var pre = ["0", "00"];
	
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
			opcion.innerText = "Capitulo " + data[i].num + " By " + data[i].edit + " (Traducido x " + data[i].trad + ")";
			document.getElementById('chosecap').appendChild(opcion);
		}
	}
}
	

function cargacap(item){
	
	var cap = data[parseInt(item.value)];
	
	document.getElementById('repositorio').innerHTML = "";
	
	for(var i = 0; i < cap.page + 1; i++){
		var container = document.createElement("div");
		var numpage = document.createElement("div");
		var imagen = document.createElement("img");
		numpage.classList.add("numpage");
		numpage.innerText = i;
			
		var pose = 0;
		var posp = 0;
				
		while(imagen.naturalHeight == 0){
			while(imagen.naturalHeight == 0){
				imagen.src = "https://odricku.cl/oddslector/caps/" + cap.num + "/" + pre[posp]+ i + "." + ext[pose];
				posp = posp + 1;
			}
			pose = pose + 1;
			
			if (pose == ext.length && posp == pre.length){
				imagen.src = "https://odricku.cl/oddslector/caps/error.png";
			}	
		}
		
		container.appendChild(numpage);
		container.appendChild(imagen);
		document.getElementById('repositorio').appendChild(container);
	}
}
