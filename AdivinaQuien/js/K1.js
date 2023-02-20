var pokelist;
	
var CANTIDAD_HABS = 259;
var CANTIDAD_MOVS = 778;
var CANTIDAD_POKES = 891;
var CANTIDAD_BALL = 27;	
var disc = "Pokémon es una marca registrada de Nintendo desde el 1995 a la fecha. Esta pagina es sin animos de lucro y no esta de ninguna manera afiliada a Nintendo ni oficialmente respaldada. Esta pagina solo tiene el objetivo de pasar un buen rato y para el disfrute gratuito de aquellas almas perdidas que se pierdan por estos rincones de internet. La intencion no es competir con la marca registrada de Nintendo.";

var llave = " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+";

var tipos = ["acero","agua","bicho","dragón","eléctrico","fantasma","fuego","hada","hielo","lucha","normal","planta","psíquico","roca","siniestro","tierra","veneno","volador"];
var alola = ["Rattata","Raticate","Raichu","Sandshrew","Sandslash","Vulpix","Ninetales","Diglett","Dugtrio","Meowth","Persian","Geodude","Graveler","Golem","Grimer","Muk","Exeggutor","Marowak"];
var galar = ["Meowth","Ponyta","Rapidash","Slowpoke","Farfetch'd","Weezing","Mr._Mime","Corsola","Zigzagoon","Linoone","Darumaka","Darmanitan","Yamask","Stunfisk"];
var paldea = [];
var mega = ["Mega-Venusaur","Mega-Charizard X","Mega-Charizard Y","Mega-Blastoise","Mega-Alakazam","Mega-Gengar","Mega-Kangaskhan","Mega-Pinsir","Mega-Gyarados","Mega-Aerodactyl","Mega-Mewtwo X","Mega-Mewtwo Y","Mega-Ampharos","Mega-Scizor","Mega-Heracross","Mega-Houndoom","Mega-Tyranitar","Mega-Blaziken","Mega-Gardevoir","Mega-Mawile","Mega-Aggron","Mega-Medicham","Mega-Manectric","Mega-Banette","Mega-Absol","Mega-Garchomp","Mega-Lucario","Mega-Abomasnow","Mega-Beedrill","Mega-Pidgeot","Mega-Slowbro","Mega-Steelix","Mega-Sceptile","Mega-Swampert","Mega-Sableye","Mega-Sharpedo","Mega-Camerupt","Mega-Altaria","Mega-Glalie","Mega-Salamence","Mega-Metagross","Mega-Latias","Mega-Latios","Mega-Rayquaza","Mega-Lopunny","Mega-Gallade","Mega-Audino","Mega-Diancie"];
var cambios2 = ["Absorbe agua", "Absor. agua","Absorbe electricidad", "Absor. elec.","Electricidad estática", "Elec. estát.","Electricidad estática", "Elect. estát.","Espíritu vital", "Espír. vital","Efecto espora", "Efec. espora","Modo Daruma", "Modo daruma"];
var cambios = ["Bombardeo", "Presa", "Constricción", "Repetición","Contraataque", "Contador","Espejo", "Movimiento espejo","Espejo", "Mov. Espejo","Retribución", "Retroceso","Rodar", "Desenrollar","Sellar", "Cerca","Semilladora", "Recurrente","Sísmico", "Movimiento sísmico","Colmillo ígneo", "Colmillo fuego","Colmillo hielo", "Colmillo Hielo","Golpe cabeza", "Golpe Cabeza","Hidrocañón", "Hidrocañon","Cambio de banda", "Cambio banda", "Treparrocas", "Treparocas","Divide dolor", "Divide Dolor", "Atadura", "atadura","Pantalla de luz", "Pantalla Luz","Pantalla de luz", "Pantalla luz","Pantalla de humo", "Pantallahumo","Cola férrea", "Cola ferrea","Onda voltio", "Onda Voltio","Otra vez", "Otra Vez","Garra metal", "Garra Metal","Onda ígnea", "Onda Ígnea","Foco energía", "Foco energia","Rayo confuso", "Rayo Confuso","Psicorrayo", "Psicorayo","Puño hielo", "Puño Hielo","Represión metal", "Repr. metal","Bomba germen", "Bomba Germen","Trampa rocas", "Trampa Rocas","Pisotón", "Pisoton","Tijera X", "Tijera x","Bola sombra", "Bola Sombra","Látigo cepa", "Latigo cepa","Hierba lazo", "Hierba Lazo","Látigo", "Latigo","Disparo demora", "Disparo Demora"];

var accion = 1;
	
window.onload = function(){
	cargajson();
}

function cargajson(){
	
	var bandera = 0;
	
	var pokejsonurl = encodeURI("./base/pokelist.json");
	request = new XMLHttpRequest();	
	request.open('GET', pokejsonurl);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		pokelist = request.response;
		document.getElementById("pokelist").innerHTML = "";
		document.getElementById("Gen1").disabled = false;
		document.getElementById("Gen2").disabled = false;
		document.getElementById("Gen3").disabled = false;
		document.getElementById("Gen4").disabled = false;
		document.getElementById("Gen5").disabled = false;
		document.getElementById("Gen6").disabled = false;
		document.getElementById("Gen7").disabled = false;
		document.getElementById("Gen8").disabled = false;
		document.getElementById("Otrasformas").disabled = false;
		
		if(document.URL.indexOf("?") != -1){
			var key = document.URL.slice(document.URL.split("?")[0].length + 1).replace(/%20/g, " ");
			if(key.length > 0){
				showhid();
				verseed();
				document.getElementById("semilla").value = key;
				cargalista();
			}
		}
	}
	
	request.onerror = function() {
		pokejsonurl = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("./base/pokelist.json");
		request = new XMLHttpRequest();	
		request.open('GET', pokejsonurl);
		request.responseType = 'json';
		request.send();
		request.onload = function() {
			pokelist = request.response;
			document.getElementById("pokelist").innerHTML = "";
			document.getElementById("Gen1").disabled = false;
			document.getElementById("Gen2").disabled = false;
			document.getElementById("Gen3").disabled = false;
			document.getElementById("Gen4").disabled = false;
			document.getElementById("Gen5").disabled = false;
			document.getElementById("Gen6").disabled = false;
			document.getElementById("Gen7").disabled = false;
			document.getElementById("Gen8").disabled = false;
			document.getElementById("Otrasformas").disabled = false;
			
			if(document.URL.indexOf("?") != -1){
				var key = document.URL.slice(document.URL.split("?")[0].length + 1).replace(/%20/g, " ");
				if(key.length > 0){
					showhid();
					verseed();
					document.getElementById("semilla").value = key;
					cargalista();
				}
			}
		}
	}
	
	return 1;
		
}

function ocultar(){
	document.getElementById('xgen').style.display= 'none';
	document.getElementById('xseed').style.display= 'none';
	document.getElementById('xrandom').style.display= 'none';
	document.getElementById('xacciones').style.display= 'none';
}

function vergen(){
	document.getElementById('xgen').style.display= 'block';
	document.getElementById('xseed').style.display= 'none';
	document.getElementById('xrandom').style.display= 'none';
	document.getElementById('xacciones').style.display= 'none';
	
}

function verseed(){
	document.getElementById('xgen').style.display= 'none';
	document.getElementById('xseed').style.display= 'block';
	document.getElementById('xrandom').style.display= 'none';
	document.getElementById('xacciones').style.display= 'none';
}

function verrandom(){
	document.getElementById('xgen').style.display= 'block';
	document.getElementById('xseed').style.display= 'none';
	document.getElementById('xrandom').style.display= 'block';
	document.getElementById('xacciones').style.display= 'none';
}

function veracciones(){
	document.getElementById('xgen').style.display= 'none';
	document.getElementById('xseed').style.display= 'none';
	document.getElementById('xrandom').style.display= 'none';
	document.getElementById('xacciones').style.display= 'block';
}

function cargadebilidades(){
	
	var linea = "";
	var debs;
	
	for(var i = 0; i < tipos.length; i++){
		debs = "##" + tipos[i] + "##\n> Debil a (";
		
		var debil = "";
		for(var j = 0; j < tipos.length; j++){
			if(pokelist[0]["tipos"][tipos[j]]["fuerte"].includes(tipos[i])){
				if (debil == "")
					debil = tipos[j];
				else
					debil = debil + ", " + tipos[j];
			}
		}
		
		if(debil == "")
			debil = "nada"
		debs = debs + debil + "). ";
				
		debs = debs + "\n> Fuerte a (";
		
		if(pokelist[0].tipos[tipos[i]]["fuerte"].length == 0)
			debs = debs + "nada)";
		else{
			for(var j = 0; j < pokelist[0].tipos[tipos[i]]["fuerte"].length; j++){
				if (j == 0)
					debs = debs + pokelist[0].tipos[tipos[i]]["fuerte"][j];
				else				
					debs = debs + ", " + pokelist[0].tipos[tipos[i]]["fuerte"][j];
			}
			debs = debs + "). ";
		}
		
		debs = debs + "\n> Inmune a (";
		var inmune = "";
		for(var j = 0; j < tipos.length; j++){
			if(pokelist[0]["tipos"][tipos[j]]["inmune"].includes(tipos[i])){
				if (inmune == "")
					inmune = tipos[j];
				else
					inmune = inmune + ", " + tipos[j];
			}
		}
		
		if(inmune == "")
			inmune = "nada"
		debs = debs + inmune + "). ";
		
		
		linea = linea + "<img alt='" + debs + "' width='45px' src='" + pokelist[0]["tipos"][tipos[i]]["image"] + "' onclick='document.getElementById(\"detatipo\").value = this.alt'/>";
	}
	
	document.getElementById("debilidades").innerHTML = linea;
	
}

function tachatipo(tipostr){
	
	if(tipostr == "") 
		return;
	
	var tipoelej = tipostr.substring(2, tipostr.indexOf("##", 2));
	
	for(var i = 0; i < document.getElementsByClassName("pokevista").length; i++){
		var pokeactual = document.getElementsByClassName("pokevista")[i];
		
		var pokenum = parseInt(pokeactual.id.substring(0, 3));
		var poketipo = pokeactual.id.substring(3, pokeactual.id.length);
		
		var nombrepoke = pokeactual.name;
		var j = 0;
		
		while(pokelist[pokenum][j]["name"] != nombrepoke || pokelist[pokenum][j]["title"] != poketipo)
			j++;
		
		if(pokelist[pokenum][j]["tipo"].includes(tipoelej)){
			pokeactual.getElementsByClassName("equis")[0].style.visibility = "visible";
			pokeactual.style.backgroundColor = "#222222";
		}
		
	}
}

function tachanotipo(tipostr){
	
	if(tipostr == "") 
	return;
	
	var tipoelej = tipostr.substring(2, tipostr.indexOf("##", 2));
	
	for(var k = 0; k < tipos.length; k++){
		if(tipoelej != tipos[k]){
	
			for(var i = 0; i < document.getElementsByClassName("pokevista").length; i++){
				var pokeactual = document.getElementsByClassName("pokevista")[i];
				
				var pokenum = parseInt(pokeactual.id.substring(0, 3));
				var poketipo = pokeactual.id.substring(3, pokeactual.id.length);
				
				var nombrepoke = pokeactual.name;
				
				var j = 0;
				
				while(pokelist[pokenum][j]["name"] != nombrepoke || pokelist[pokenum][j]["title"] != poketipo)
					j++;
				
				if(!pokelist[pokenum][j]["tipo"].includes(tipoelej)){
					pokeactual.getElementsByClassName("equis")[0].style.visibility = "visible";
					pokeactual.style.backgroundColor = "#222222";
				}
				
			}
		}
	}
}

function eliminatacha(){
	
	if(document.getElementsByClassName("pokevista").length == 0)
		return;

	var pokes = document.getElementsByClassName("pokevista");
	for(var i = pokes.length -1; i >= 0; i--){
		if(pokes[i].getElementsByClassName("equis")[0].style.visibility == "visible" && !pokes[i].classList.contains("oculto") ){
			pokes[i].classList.add("oculto");
			pokes[i].value = accion;
		}
	}
	accion++;
}

function deshacer(){
	
	var pokes = document.getElementsByClassName("oculto");
	for(var i = pokes.length - 1; i >= 0; i--){
		try{
			if(pokes[i].value + 1 == accion){
				pokes[i].value = 0;
				pokes[i].classList.remove("oculto");
			}
		}
		catch(error){}
	}
	accion--;
	
}

function creaficha(poke, forma){
	
	var opcion = document.createElement("a");
	opcion.id = poke["id"] + poke.title;
	opcion.value = 0;
	opcion.name = poke["name"];
	opcion.setAttribute("class", "pokevista");
	opcion.addEventListener("click", seleccion, false);
	var complem = "<br>";

	for(var k = 0; k < poke["tipo"].length; k++)
		complem = complem + "<img width='50px' src='" + pokelist[0]["tipos"][poke["tipo"][k]]["image"] + "'/>";
	
	if(poke["habs"]["normal"].length > 0){
		complem = complem + "<br><br><b>Habilidades:</b><br><i>"
		for(var k = 0; k < poke["habs"]["normal"].length; k++){
			if (k == 0)
				complem = complem + pokelist[0]["habs"][poke["habs"]["normal"][k]]["name"];
			else
				complem = complem + ", " + pokelist[0]["habs"][poke["habs"]["normal"][k]]["name"];
		}
		complem = complem + "</i>"
	}
	
	if(poke["habs"]["oculta"].length > 0){
		complem = complem + "<br><b>Oculta:</b><br><i>"
		for(var k = 0; k < poke["habs"]["oculta"].length; k++){
			complem = complem + pokelist[0]["habs"][poke["habs"]["oculta"][k]]["name"];
		}
		complem = complem + "</i>"
	}
	
	if(poke.title == "normal" || !forma){
		opcion.innerHTML = "<div><img width='100px' height='100px' src='" + poke["front"] + "'/><br>" + poke["name"].replace("_", "") + complem + "<a class='equis' style='visibility:hidden'></a></div>";
	}
	else
		opcion.innerHTML = "<img width='100px' height='100px' src='" + poke["front"] + "'/><br>" + poke["name"].replace("_", "") + " " + poke.title + complem + "<a class='equis' style='visibility:hidden'></a></div>";
	document.getElementById("pokelist").appendChild(opcion);
	
}

function cargalista(){

	var i = 1;
	var j;
	var rand = 0;
	var key = "";
	
		if (document.getElementById('xacciones').style.display == "block") return;
		
		if (document.getElementById('xseed').style.display == "block"){
			if(document.getElementById('semilla').value.length <= 0){
				alert("Debe indicar una seed");
				return;
			}
			key = invtransform(document.getElementById("semilla").value);
		}
	
	try{
		if (document.getElementById('xrandom').style.display == "block"){
			if(parseInt(document.getElementById('cantrand').value) <= 0){
				alert("Debe indicar una cantidad");
				return;
			}
			rand = parseInt(document.getElementById('cantrand').value);
		}
	}catch(error){
		alert("Debe indicar una cantidad");
		return;
	}
		
	document.getElementById("pokelist").innerHTML = "<div class='pokeselect' id='pokeselect'></div>";
	cargadebilidades();
	var pos = 0;
	accion = 1;
	
	while(i < pokelist.length){
		
		try{
			if(document.getElementById("Otrasformas").checked || key != ""){

				for(var j = 0; j < pokelist[i].length; j++){
					if (key != ""){	
						if(llave.indexOf(key[Math.trunc(pos/6)]).toString(2).padStart(6,0)[pos%6] == "1"){
							creaficha(pokelist[i][j], masformas(key, i, j , pos));
						}
					}
					else{
						var poke = pokelist[i][j];
						if (document.getElementById("Gen" + poke.gen).checked && evalforma(poke, j))
							creaficha(poke, masformas(key, i, j,  pos));
					}
					pos++;
				}
			}
			else{
				
				var poke = pokelist[i][0];
				if (document.getElementById("Gen" + poke.gen).checked) 
					creaficha(poke, false);
				
			}
			i++;
		}catch(error){
			alert(error);
		}
	}
	
	if(rand != 0){
		if(rand > document.getElementsByClassName('pokevista').length){
			alert("Cantidad especificada mayor a cantidad existente");
			document.getElementById("pokelist").innerHTML = "";
			return;
		}
		while(document.getElementsByClassName('pokevista').length > rand){
			document.getElementsByClassName("pokevista")[~~(Math.random()*document.getElementsByClassName("pokevista").length)].remove();
		}	
	}
	
	if(document.getElementsByClassName('pokevista').length == 0){
		document.getElementById("pokelist").innerHTML = "";
		return;
	}
	
	try{
		veracciones();
		document.getElementById("pokeselect").innerHTML = "<textarea placeholder='Campo de texto libre, usalo para anotar ideas o cosas que no quieras marcar.' style='float:right; width:70%; height:180px;resize: none;'></textarea>" + document.getElementsByClassName("pokevista")[~~(Math.random()*document.getElementsByClassName("pokevista").length)].innerHTML;
	}catch(error){};
}

function masformas(key, i, j, pos){
	if(pokelist[i].length == 1) return false;
	if(j != 0) return true;
	
	for(var j = 1; j < pokelist[i].length; j++)
		if(llave.indexOf(key[Math.trunc((pos + j)/6)]).toString(2).padStart(6,0)[(pos + j) % 6] == "1")
			return true;
	return false;
}

function tacha1tipo(){
	for(var i = 0; i < document.getElementsByClassName("pokevista").length; i++){
		var poke = document.getElementsByClassName("pokevista")[i];
		if(poke.getElementsByTagName("img").length == 2){
			poke.style.backgroundColor = "#222222";
			poke.getElementsByClassName("equis")[0].style.visibility = "visible";
		}
	}
}

function tacha2tipo(){
	
	for(var i = 0; i < document.getElementsByClassName("pokevista").length; i++){
		var poke = document.getElementsByClassName("pokevista")[i];
		if(poke.getElementsByTagName("img").length == 3){
			poke.style.backgroundColor = "#222222";
			poke.getElementsByClassName("equis")[0].style.visibility = "visible";
		}
	}
}

function exportar(){
	
	var key1 = "";
	var key2 = "¡";
	var elem = "";
	
	var pos = 0;
	
	var lista = document.getElementsByClassName("pokevista");
		
	for(var i = 1; i < pokelist.length; i++){
		for(var j = 0; j< pokelist[i].length; j++){
			var temp = 0;
			
			for(var k = 0; k < lista.length; k++){
				var poke = lista[k];
				if(pokelist[i][j]["name"] == poke.name && pokelist[i][j]["title"] == poke.id.substring(3, poke.id.length) && !poke.classList.contains("oculto")){
					temp = 1;
					k = document.getElementsByClassName("pokevista").length;
				}
			}
			
			elem = elem + temp;
			
			if(Math.trunc(pos % 6) == 5 || (i == pokelist.length - 1) && (j == pokelist[i].length - 1)){
				var char1 = llave.charAt(parseInt(elem.padEnd(6,0),2));
				key1 = key1 + char1 ;
				key2 = key2 + llave.charAt(llave.length - 1 - llave.indexOf(char1));
				elem = "";
			}
			
			pos++;
		}
	}
	
	key1 = transform(("!" + key1).trim().slice(1));
	key2 = transform(("!" + key2).trim().slice(1));
	
	if(key1.length <= key2.length)
		document.getElementById("detatipo").value = key1;
	else
		document.getElementById("detatipo").value = key2;

	veracciones();
}

function transform(key){
	
	var i = 0;
	var espini = -1;
	var espfin = -1;
	var salida = "";
	while(i < key.length){
		if(key.charAt(i) == " "){
			if(espini == -1)
				espini = i;
			espfin = i;
		}
		else{
			if(espini != espfin){
				if(espfin - espini >= 2)
					salida = salida +  "!" + (espfin - espini + 1).toString(36).padStart(2,0);
				else
					salida = salida + " ".padStart(espfin - espini + 1, " ");				
			}
			else if(espini != -1)
				salida = salida + " ";
			
			espini = -1;
			espfin = -1;
			salida = salida + key.charAt(i);
		}
		i++;
	}
	return salida;
	
}

function invtransform(seed){
	
	var semilla = "";
	
	var cant = 0;
		for(var f = 1; f < pokelist.length; f++)
			cant = cant + pokelist[f].length;
		
	var llenado = llave.charAt(0);
	if(seed.charAt(0) == "¡")
		llenado = llave.charAt(llave.length - 1);
	
	for(var i = 0; i < seed.length; i++){
		
		if(seed.charAt(i) == "!"){
			semilla = semilla + "".padStart( parseInt(seed.substring(i + 1, i + 3), 36) , llenado);
			i = i + 2;
		}
		else{
			if(seed.charAt(0) != "¡")
				semilla = semilla + seed.charAt(i);
			else if(i != 0)
				semilla = semilla + llave.charAt(llave.length - 1 - llave.indexOf(seed.charAt(i)));
		}
	}
	
	return semilla.padEnd(Math.trunc(cant/6) + 1, llenado);
}

function evalforma(poke, pos){
	
	if(poke.name.indexOf("Mega-") != -1){
		if(!document.getElementById("Mega").checked) return false;
		return true;
	}
	
	if(poke.title == "Gigamax" || poke.title == "Dinamax Infinito"){
		if(!document.getElementById("Giga").checked) return false;
		return true;
	}
	
	if(poke.title.indexOf("de Alola") != -1 || poke.title.indexOf("de Galar") != -1 || poke.title.indexOf("de Paldea") != -1){
		if(!document.getElementById("Reg").checked) return false;
		return true;
	}
	
	if (pos != 0)
		if(!document.getElementById("Otros").checked) return false;

	return true;	
}

function seleccion(evt){
	
	if (this.getElementsByClassName("equis")[0].style.visibility == "hidden"){
		this.style.backgroundColor = "#222222";
  		this.getElementsByClassName("equis")[0].style.visibility = "visible";
	}
    else{
		this.style.backgroundColor = "#FFFFFF";
		this.getElementsByClassName("equis")[0].style.visibility = "hidden";
	}
}

function atadelete(item){

	if(document.getElementsByName("mov" + item.value).length > 0){
		var elem = document.getElementsByName("mov" + item.value)[0];
		item.removeChild(elem);
	}			
	
}

function savedata(){
	var filename = "pokelist";
	var a = document.createElement("a");
	var file = new Blob([JSON.stringify(pokelist)], {type: "text/plain"});
	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();
	
	alert(filename + " guardado.");
}

function buscapoke(name){
	
	for(var i = 1; i < pokelist.length; i++){
		if(pokelist[i][0].name == name){
			return i;
		}
	}
	return -1;
	
	
}

function cargaregionales(){
	
	for(var i = 0; i < alola.length; i++){
		console.log(i);
		cargapokes(buscapoke(alola[i]), "de Alola", 7);
	}
	
	for(var i = 0; i < galar.length; i++){
		console.log(i);
		cargapokes(buscapoke(galar[i]), "de Galar", 8);
	}
	
	for(var i = 0; i < paldea.length; i++){
		console.log(i);
		cargapokes(buscapoke(paldea[i]), "de Paldea", 9);
	}
}

function cargapokes(nombre, vartitle, generacion){
	
	try{
		var url;
		if(vartitle == "normal"){ 
			url = "https://www.wikidex.net/wiki/" + nombre.replace(/ /g, "_");
		}
		else{ 
			url = "https://www.wikidex.net/wiki/" + nombre.replace(/ /g, "_") + "_" + vartitle.replace(/ /g, "_");
		}
		$.get("https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI(url), function(data) {
			
			var poke = {
				id: " ",
				title: vartitle,
				name: nombre,
				img: {sprite: " ", otros:[]},
				tipo: [],
				habs: {normal: [], oculta: []},
				stats: [0, 0, 0, 0, 0, 0],
				movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
				front: " ",
				gen: generacion
			};
			
			var wikipage = data.replace(/(\r\n|\n|\r)/gm,"");
								
			var idpokeini = wikipage.indexOf(">", wikipage.indexOf(">#<") + 3) + 1;
			poke["id"] = wikipage.substring(idpokeini, wikipage.indexOf("<", idpokeini));
			
			var tipoini = wikipage.indexOf("<td>", wikipage.indexOf("Tipos a los que pertenece") + 25);
			var tipofin = wikipage.indexOf("</tr>" , tipoini);
			
			var tipostr = wikipage.substring(tipoini, tipofin);

			tipoini = tipostr.indexOf("title=\"Tipo ") + 12;
			poke["tipo"].push(tipostr.substring(tipoini, tipostr.indexOf("\"", tipoini)));
			
			tipoini = tipostr.indexOf("title=\"Tipo ", tipoini) + 12;
			if(tipoini != 11)
				poke["tipo"].push(tipostr.substring(tipoini, tipostr.indexOf("\"", tipoini)));
			
			var spriteini = wikipage.indexOf("src=\"" , wikipage.indexOf("class=\"float-app")) + 5;
			poke["img"]["sprite"] = wikipage.substring(spriteini, wikipage.indexOf(".png", spriteini) + 4);
			
			var frontini = wikipage.indexOf("src=\"" , wikipage.indexOf("class=\"vnav_datos")) + 5; ;
			poke["front"] = wikipage.substring(frontini, wikipage.indexOf("\"", frontini));
			
			spriteini = wikipage.indexOf("class=\"galeria-sprites");
			var spritefin;
			var sprite;
			
			var spritedata;
	
			while (spriteini != -1){
				spritefin = wikipage.indexOf("</table>", spriteini);
				sprite = wikipage.substring(spriteini, spritefin);
				
				spritedata = sprite.match(/(https:[^"]*[\.png|\.gif])/gi);
				try{
					for(var i = 0; i < spritedata.length; i++){
						poke["img"]["otros"].push(spritedata[i]);
					}
				}catch(error){}
			
				spriteini = wikipage.indexOf("class=\"galeria-sprites", spritefin + 1);
			}
			
			var posini = wikipage.indexOf("class=\"movnivel") + 15;
			var posfin = wikipage.indexOf("</table>", posini);
			
			var tabla1 = wikipage.substring(wikipage.indexOf("<tr>", posini), posfin);
			var posmov1 = 0;
			var posmov2 = 0;
			
			var atname;
			var atnum;
			
			while(posmov1 != -1){
				
				posmov1 = tabla1.indexOf(">", tabla1.indexOf("title=", tabla1.indexOf("href=", tabla1.indexOf("<td><", tabla1.indexOf("<tr>", posmov2))))) + 1;
				posmov2 = tabla1.indexOf("<", posmov1);
				
				if(tabla1.substring(posmov1,posmov2) != ""){
					atname = validaname(tabla1.substring(posmov1,posmov2));
					
					atnum = intataq(atname);
					if(!poke["movs"]["niv"].includes(atnum))
						poke["movs"]["niv"].push(atnum);
					
				}
				
				posmov1 = tabla1.indexOf("<tr>", posmov2);
				
			}
								
			posini = wikipage.indexOf("class=\"movmtmo", posfin) + 14;
			
			while(posini != 13){
			
				posmov1 = 0;
			
				while(posmov1 != -1){
				
					posfin = wikipage.indexOf("</table>", posini);
					tabla1 = wikipage.substring(wikipage.indexOf("<tr>", posini), posfin);
				
					posmov1 = tabla1.indexOf(">", tabla1.indexOf("title=", tabla1.indexOf("href=", tabla1.indexOf("</td>", tabla1.indexOf("<tr>", posmov1))))) + 1;
					posmov2 = tabla1.indexOf("<", posmov1);
					
					if(tabla1.substring(posmov1,posmov2) != ""){
						atname = validaname(tabla1.substring(posmov1,posmov2));
						
						atnum = intataq(atname);
						
						if(!poke["movs"]["mt"].includes(atnum))
							poke["movs"]["mt"].push(atnum);
						
					}
						
					posmov1 = tabla1.indexOf("<tr>", posmov2);
				
				}
				posini = wikipage.indexOf("class=\"movmtmo", posini) + 14;
										
			} 
			
			posini = wikipage.indexOf("class=\"movtutor", posfin) + 15;
			
			if(posini != 14){
			
				posmov1 = 0;
			
				while(posmov1 != -1){
				
					posfin = wikipage.indexOf("</table>", posini);
					tabla1 = wikipage.substring(wikipage.indexOf("<tr>", posini), posfin);
				
					posmov1 = tabla1.indexOf(">", tabla1.indexOf("title=", tabla1.indexOf("href=", tabla1.indexOf("</td>", tabla1.indexOf("<tr>", posmov1))))) + 1;
					posmov2 = tabla1.indexOf("<", posmov1);
					
					if(tabla1.substring(posmov1,posmov2) != ""){
						atname = validaname(tabla1.substring(posmov1,posmov2));
						
						atnum = intataq(atname);
						
						if(!poke["movs"]["tut"].includes(atnum))
							poke["movs"]["tut"].push(atnum);
						
					}
					posmov1 = tabla1.indexOf("<tr>", posmov2);
				
				}
										
			}
								
			posini = wikipage.indexOf("class=\"movhuevo", posfin) + 15;
			
			if(posini != 14){
			
				posmov1 = 0;
			
				while(posmov1 != -1){
				
					posfin = wikipage.indexOf("</table>", posini);
					tabla1 = wikipage.substring(wikipage.indexOf("<tr>", posini), posfin);
				
					posmov1 = tabla1.indexOf(">", tabla1.indexOf("title=", tabla1.indexOf("href=", tabla1.indexOf("</td>", tabla1.indexOf("<tr>", posmov1))))) + 1;
					posmov2 = tabla1.indexOf("<", posmov1);
					
					if(tabla1.substring(posmov1,posmov2) != ""){
						atname = validaname(tabla1.substring(posmov1,posmov2));
						
						atnum = intataq(atname);
						
						if(!poke["movs"]["egg"].includes(atnum))
							poke["movs"]["egg"].push(atnum);
						
					}
						
					posmov1 = tabla1.indexOf("<tr>", posmov2);
				}												
			}
			
			posini = wikipage.indexOf("title=\"Movimiento Z\"", posfin);
			
			if(posini != -1){

				posmov1 = 0;
				
				if(wikipage.indexOf("<a href=\"/wiki/Cristal_Z\" title=\"Cristal Z\">Cristal Z</a>",posini) == -1){
					posmov1 = -1;
					posini = -1;
				}
					
				while(posmov1 != -1){
					
					posfin = wikipage.indexOf("</table>", posini);
					
					tabla1 = wikipage.substring(wikipage.indexOf("<tr>", posini), posfin);
				
					posmov1 = tabla1.indexOf(">", tabla1.indexOf("title=", tabla1.indexOf("href=", tabla1.indexOf("<td>", tabla1.indexOf("<tr>", posmov1))))) + 1;
					posmov2 = tabla1.indexOf("<", posmov1);
					
					if(tabla1.substring(posmov1,posmov2) != ""){
						atname = validaname(tabla1.substring(posmov1,posmov2));
						
						atnum = intataq(atname);
						
						if(!poke["movs"]["z"].includes(atnum))
							poke["movs"]["z"].push(atnum);
						
					}
						
					posmov1 = tabla1.indexOf("<tr>", posmov2);
				}												
			}
			
			posini = wikipage.indexOf("class=\"movespecial sortable", posfin) + 18;
			
			if(posini != 17){
			
				posmov1 = 0;
			
				while(posmov1 != -1){
				
					posfin = wikipage.indexOf("</table>", posini);
					tabla1 = wikipage.substring(wikipage.indexOf("<tr>", posini), posfin);
				
					posmov1 = tabla1.indexOf(">", tabla1.indexOf("title=", tabla1.indexOf("href=", tabla1.indexOf("</td>", tabla1.indexOf("<tr>", posmov1))))) + 1;
					posmov2 = tabla1.indexOf("<", posmov1);
					
					if(tabla1.substring(posmov1,posmov2) != ""){
						atname = validaname(tabla1.substring(posmov1,posmov2));
						
						atnum = intataq(atname);
						
						if(!poke["movs"]["otro"].includes(atnum))
							poke["movs"]["otro"].push(atnum);
						
					}
						
					posmov1 = tabla1.indexOf("<tr>", posmov2);
				}												
			}
			posini = wikipage.indexOf("class=\"base\"");
			
			for (var i = 0; i < 6; i++){
				posini = wikipage.indexOf("<td>", posini) + 4;
				poke["stats"][i] = parseInt(wikipage.substring(posini, wikipage.indexOf("</td>", posini)));
			}
			
			posini = wikipage.indexOf("title=\"Habilidades que puede conocer\"") + 37;
			
			if(posini != 36){
			
				posfin = wikipage.indexOf("</tr>", posini);
				
				posmov1 = wikipage.indexOf(">", wikipage.indexOf("title=",  wikipage.indexOf("<a" , wikipage.indexOf("<td>", posini)))) + 1;
				posmov2 = wikipage.indexOf("<", posmov1);
				
				poke["habs"]["normal"].push(inthab(validanamehab(wikipage.substring(posmov1, posmov2))));
					
				posmov1 = wikipage.indexOf(">", wikipage.indexOf("title=", wikipage.indexOf("<a", posmov2))) + 1;

				if(posmov1 < posfin){
					posmov2 = wikipage.indexOf("<", posmov1);
					poke["habs"]["normal"].push(inthab(validanamehab(wikipage.substring(posmov1, posmov2))));
				}
			}
			
			posini = wikipage.indexOf("title=\"Habilidad oculta\"") + 24;
								
			if(posini != 23){
									
				posmov1 = wikipage.indexOf(">", wikipage.indexOf("title=",  wikipage.indexOf("<td>" ,posini))) + 1;
				posmov2 = wikipage.indexOf("<", posmov1);
				
				poke["habs"]["oculta"].push(inthab(validanamehab(wikipage.substring(posmov1, posmov2))));
					
			}

			return poke;
		});
	}catch(error){
		console.log(error);
	}
}

function validaname(nombre){

	var val = cambios.indexOf(nombre);
	if(val == -1 || val%2 == 0)
		return nombre;
	return cambios[val-1];
}

function validanamehab(nombre){

	var val = cambios2.indexOf(nombre);
	if(val == -1 || val%2 == 0)
		return nombre;
	return cambios2[val-1];
}

function numataq(){
	for(var i = 1; i< pokelist.length; i++){
		for(var j = 0; j< pokelist[i][0]["movs"]["niv"].length; j++)
			pokelist[i][0]["movs"]["niv"][j] = intataq(pokelist[i][0]["movs"]["niv"][j]);
		for(var j = 0; j< pokelist[i][0]["movs"]["mt"].length; j++)
			pokelist[i][0]["movs"]["mt"][j] = intataq(pokelist[i][0]["movs"]["mt"][j]);
		for(var j = 0; j< pokelist[i][0]["movs"]["tut"].length; j++)
			pokelist[i][0]["movs"]["tut"][j] = intataq(pokelist[i][0]["movs"]["tut"][j]);
		for(var j = 0; j< pokelist[i][0]["movs"]["egg"].length; j++)
			pokelist[i][0]["movs"]["egg"][j] = intataq(pokelist[i][0]["movs"]["egg"][j]);
		for(var j = 0; j< pokelist[i][0]["movs"]["z"].length; j++)
			pokelist[i][0]["movs"]["z"][j] = intataq(pokelist[i][0]["movs"]["z"][j]);
		for(var j = 0; j< pokelist[i][0]["movs"]["otro"].length; j++)
			pokelist[i][0]["movs"]["otro"][j] = intataq(pokelist[i][0]["movs"]["otro"][j]);
		for(var j = 0; j< pokelist[i][0]["habs"]["normal"].length; j++)
			pokelist[i][0]["habs"]["normal"][j] = inthab(pokelist[i][0]["habs"]["normal"][j], i);
		for(var j = 0; j< pokelist[i][0]["habs"]["oculta"].length; j++)
			pokelist[i][0]["habs"]["oculta"][j] = inthab(pokelist[i][0]["habs"]["oculta"][j], i);
		
	}
}

function intataq(ataque){

	var i = 0;
	try{
		while(pokelist[0]["movs"][i]["name"].replace(" ", "") != ataque.replace(" ", "") && i != CANTIDAD_POKES){
			i++;
		}
			
		if (i == CANTIDAD_POKES)
			alert(ataque + " con problemas");
	}
	catch(error){
		alert("Ataque " + ataque + " fallo");
	}
	return i;
	
}

function inthab(hab){

	var i = 0;
	try{
		while(pokelist[0]["habs"][i]["name"].replace(" ", "") != hab.replace(" ", "") && i != CANTIDAD_HABS){
			i++;
		}
			
		if (i == CANTIDAD_HABS)
			alert("Habilidad " + hab + " con problemas");
	}
	catch(error){
		//alert("Habilidad " + hab + " de " + pokelist[poke][0]["name"] + " fallo");
	}
	return i;
	
}

function formaseval(item){
	
	if(!document.getElementById("Otrasformas").checked)
		document.getElementById("detalleotras").style.display = "none";
	else{
		document.getElementById("detalleotras").style.display = "block";
		document.getElementById("Mega").checked = true;
		document.getElementById("Giga").checked = true;
		document.getElementById("Reg").checked = true;
		document.getElementById("Otros").checked = true;
	}

}

function tipoformaseval(){
	
	if(!document.getElementById("Mega").checked && 
		!document.getElementById("Giga").checked &&
		!document.getElementById("Reg").checked &&
		!document.getElementById("Otros").checked){
		document.getElementById("Otrasformas").checked = false;
		document.getElementById("detalleotras").style.display = "none";
	}

}

function showhid(){
	
	if(!document.getElementsByTagName("button")[0].classList.contains("ballocul")){
		document.getElementsByTagName("button")[0].classList.add("ballocul");
		document.getElementsByClassName("details")[0].classList.add("detocul");
		document.getElementsByClassName("content")[0].classList.add("contocul");
		document.getElementsByClassName("detailswrap")[0].classList.add("detailwrapocul");
	}
	else{
		document.getElementsByTagName("button")[0].classList.remove("ballocul");
		document.getElementsByClassName("details")[0].classList.remove("detocul");
		document.getElementsByClassName("content")[0].classList.remove("contocul");
		document.getElementsByClassName("detailswrap")[0].classList.remove("detailwrapocul");
	}
}

//////////////////////////////////////////////////////
// Cargas
//////////////////////////////////////////////////////
function cargaball(){

	pokelist[0]["ball"] = new Array(27);

	try{
		var url = "https://www.wikidex.net/wiki/Pok%C3%A9_Ball";
		$.get("https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI(url), function(data) {
			
			var posini;
			var posfin = data.indexOf("<table style=\"padding: 0.5em;");
			
			var labelball;
			var imgball;
			
			var detaball;
			
			for(var i = 0; i < 27; i++){
				
				posini = data.indexOf(">" , data.indexOf("title=", posfin)) + 1;
				posfin = data.indexOf("<", posini);
				
				labelball = data.substring(posini, posfin);
				
				posini = data.indexOf(">" , data.indexOf("title=", posfin)) + 1;
				posfin = data.indexOf("width=", posini);
				
				imgball = data.substring(posini, posfin).match(/(https:[^"]*[\.png|\.gif])/gi);
				
				detaball = {
					name: labelball,
					img: imgball[0]
				}
				
				pokelist[0]["ball"][i] = detaball;
				
				posfin = data.indexOf("<table style=\"padding: 0.5em;", posfin);
				
			}
		});
	}catch(error){
	}
}

function cargahabs(){

	var habsarray;
	var infoarray;
	try{
		var link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/Lista_de_habilidades");
		$.get(link, function(data) {
			var habstabla = data.replace(/(\r\n|\n|\r)/gm,"");
			var posini = habstabla.indexOf("<tr><td>", habstabla.indexOf("tabpokemon sortable mergetable")) + 4;
			var posfin = habstabla.indexOf("</table>", posini);
			
			habsarray = habstabla.substring(posini, posfin).split("<tr><td>");
			
			for(var i = 0; i < habsarray.length; i++){
				
				var pos1 = habsarray[i].indexOf("<td>", (habsarray[i].indexOf(">", habsarray[i].indexOf("title=")) + 1)) + 4;
				var pos2 = habsarray[i].indexOf("</td>", pos1);
				
				var labelhab = sacaetiq(habsarray[i].substring(pos1, pos2));
				
				var habilidad = {
					name: pokelist[0]["habs"][i],
					label: labelhab.charAt(0).toUpperCase() + labelhab.slice(1)
				}
				
				pokelist[0]["habs"][i] = habilidad;
				
			}
			
		});
	}catch(error){
		cargahabs();
	}
}

function sacaetiq(linea){

	var salida = linea;
	
	while(salida.indexOf("<") != -1){
		posini = salida.indexOf("<");
		posfin = salida.indexOf(">", posini);
		
		salida = salida.substring(0, posini) + salida.substring(posfin + 1, salida.length);
	
	}
	
	return salida;
	
}

function savedata(){
	var filename = "pokelist";
	var a = document.createElement("a");
	var file = new Blob([JSON.stringify(pokelist)], {type: "text/plain"});
	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();
	
	alert(filename + " guardado.");
}

function cargaobj(){

	pokelist[0]["obj"] = new Array(621);
	
	var imgobj;
	
	try{
		var link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/Lista_de_objetos");
		$.get(link, function(data) {
			var objtabla = data.replace(/(\r\n|\n|\r)/gm,"");
			
			var posini;
			var posfin = 0;
			
			for(var i = 0; i < pokelist[0]["obj"].length; i++){
				
				var posini = objtabla.indexOf("class=\"celdaobjeto\"><a", posfin);
				var posfin = objtabla.indexOf("</a>", posini);
				
				imgobj = objtabla.substring(posini, posfin).match(/(https:[^"]*[\.png|\.gif])/gi);
				
				if(imgobj == null){
					imgobj = "";
					posini = objtabla.indexOf(">", objtabla.indexOf("title=", posini)) + 1;
					posfin = objtabla.indexOf("<", posini);
				
				}
				else{
					posini = objtabla.indexOf(">", objtabla.indexOf("title=", posfin)) + 1;
					posfin = objtabla.indexOf("<", posini);
				}
				
				
				
				var imgdet = {
					name: objtabla.substring(posini, posfin),
					img: imgobj[0]
				};
				
				pokelist[0]["obj"][i] = imgdet;
				
			}
			
		});
	}catch(error){
		cargahabs();
	}
}

function generajson(){}

var pokelistTemp;

function generapoke(){

	pokelistTemp = [];
	
	var imgobj;
	
	try{
		var link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/Lista_de_Pok%C3%A9mon");
		$.get(link, function(data) {
			var poketabla = data.replace(/(\r\n|\n|\r)/gm,"");
			
			var posinitable = poketabla.indexOf("<table class=\"tabpokemon");
			var posfintable = poketabla.indexOf("</table>", posinitable);
			var posini = poketabla.indexOf("<td><a href=", posfin);
			var posfin = poketabla.indexOf("</a>", posini);
			
			var generacion = 1;
			
			while(posinitable != -1){
/*
				var poke = {
					id: " ",
					title: "normal",
					name: pokelist[pos][0]["name"],
					img: {sprite: " ", otros:[]},
					tipo: [],
					habs: {normal: [], oculta: []},
					stats: [0, 0, 0, 0, 0, 0],
					movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
					front: " ",
					gen: generacion
				};
*/			
				posini = poketabla.indexOf("\">", posini) + 2;
				
				pokelistTemp.push(poketabla.substring(posini, posfin) + " GEN= " + generacion + " " +  posini + " " + posinitable);
				
				console.log(poketabla.substring(posini, posfin) + " GEN= " + generacion + " " +  posini + " "  + posfin + " "+ posinitable);

				posfin = poketabla.indexOf("</tr>", posini);
				posini = poketabla.indexOf("<td><a href=", posfin);
				posfin = poketabla.indexOf("</a>", posini);
				
				if(posfin == -1 || posini > posfintable){
					posinitable = poketabla.indexOf("<table class=\"tabpokemon", posfintable);
					posfintable = poketabla.indexOf("</table>", posinitable);
					generacion = generacion + 1;
				}
				
			}
			
		});
	}catch(error){
		cargahabs();
	}
}