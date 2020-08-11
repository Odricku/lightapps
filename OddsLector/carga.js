var data;
var ext = ["png", "jpg", "gif", "bmp", "jpeg", "tif", "tiff"];
var pre = ["", "0", "00"];
	
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
			
		container.appendChild(numpage);
		container.appendChild(imagen);
		document.getElementById('repositorio').appendChild(container);
		
		imagen.src = "https://odricku.cl/oddslector/caps/" + cap.num + "/" + pre[0]+ i + "." + ext[0];
		imagen.pre = 0;
		imagen.ext = 0;
		imagen.cap = cap.num;
		imagen.num = i;
		
		imagen.onerror = function(){verificaimg(this)};
	}
}

function verificaimg(item) {
	console.log(item.naturalHeight);
	if (item.naturalHeight == 0){
		if(item.pre == pre.length && item.ext == ext.length){
			item.src = "https://odricku.cl/oddslector/caps/error.png";
		}
		else{
			if(item.pre == pre.length){
				item.ext = item.ext + 1;
				item.pre = 0;
			}
			else{
				item.pre = item.pre + 1;
			}
			
			item.src = "https://odricku.cl/oddslector/caps/" + item.cap + "/" + pre[item.pre] + item.num + "." + ext[item.ext];
		}
	}
}	
