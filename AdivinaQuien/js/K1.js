var pokelist;

var pokelist2 = [];
	
var disc = "Pokémon es una marca registrada de Nintendo desde el 1995 a la fecha. Esta pagina es sin animos de lucro y no esta de ninguna manera afiliada a Nintendo ni oficialmente respaldada. Esta pagina solo tiene el objetivo de pasar un buen rato y para el disfrute gratuito de aquellas almas perdidas que se pierdan por estos rincones de internet. La intencion no es competir con la marca registrada de Nintendo.";

var llave = " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+";

var tipos = ["acero","agua","bicho","dragón","eléctrico","fantasma","fuego","hada","hielo","lucha","normal","planta","psíquico","roca","siniestro","tierra","veneno","volador"];
var alola = ["Rattata","Raticate","Raichu","Sandshrew","Sandslash","Vulpix","Ninetales","Diglett","Dugtrio","Meowth","Persian","Geodude","Graveler","Golem","Grimer","Muk","Exeggutor","Marowak"];
var galar = ["Meowth","Ponyta","Rapidash","Slowpoke","Farfetch'd","Weezing","Mr._Mime","Corsola","Zigzagoon","Linoone","Darumaka","Darmanitan","Yamask","Stunfisk"];
var hisui = ["Growlithe", "Arcanine", "Voltorb", "Electrode", "Typhlosion", "Qwilfish", "Sneasel", "Samurott", "Lilligant", "Zorua", "Zoroark", "Braviary", "Sliggoo", "Goodra", "Avalugg", "Decidueye"];
var paldea = ["Tauros", "Wooper"];
var mega = ["Mega-Venusaur","Mega-Charizard X","Mega-Charizard Y","Mega-Blastoise","Mega-Alakazam","Mega-Gengar","Mega-Kangaskhan","Mega-Pinsir","Mega-Gyarados","Mega-Aerodactyl","Mega-Mewtwo X","Mega-Mewtwo Y","Mega-Ampharos","Mega-Scizor","Mega-Heracross","Mega-Houndoom","Mega-Tyranitar","Mega-Blaziken","Mega-Gardevoir","Mega-Mawile","Mega-Aggron","Mega-Medicham","Mega-Manectric","Mega-Banette","Mega-Absol","Mega-Garchomp","Mega-Lucario","Mega-Abomasnow","Mega-Beedrill","Mega-Pidgeot","Mega-Slowbro","Mega-Steelix","Mega-Sceptile","Mega-Swampert","Mega-Sableye","Mega-Sharpedo","Mega-Camerupt","Mega-Altaria","Mega-Glalie","Mega-Salamence","Mega-Metagross","Mega-Latias","Mega-Latios","Mega-Rayquaza","Mega-Lopunny","Mega-Gallade","Mega-Audino","Mega-Diancie"];
var cambios2 = ["Absorbe agua", "Absor. agua","Absorbe electricidad", "Absor. elec.","Electricidad estática", "Elec. estát.","Electricidad estática", "Elect. estát.","Espíritu vital", "Espír. vital","Efecto espora", "Efec. espora","Modo Daruma", "Modo daruma"];
var cambios = ["Cabeza de hierro", "Cabeza hierro", "Fulgor semilla", "Fogonazo", "Luminicola", "Ráfaga", "Patada salto alta", "Pat. salto alta", "Velocidad extrema", "Veloc. extrema", "Empapar", "Anegar", "Placaje eléctrico", "Placaje eléc", "Esquirla helada", "Canto helado","Ovocuración", "Amortiguador", "Llave vital", "Tiro vital", "Rayo señal", "Doble rayo", "Cascabel cura", "Campana cura", "Saña", "Golpe", "Tormenta de arena", "Tormenta arena", "Meteoros" ,"Rapidez", "Autosugestión", "Más psique", "Bombardeo", "Presa", "Constricción", "Repetición","Contraataque", "Contador","Espejo", "Movimiento espejo","Espejo", "Mov. Espejo","Retribución", "Retroceso","Rodar", "Desenrollar","Sellar", "Cerca","Semilladora", "Recurrente","Sísmico", "Movimiento sísmico","Colmillo ígneo", "Colmillo fuego","Colmillo hielo", "Colmillo Hielo","Golpe cabeza", "Golpe Cabeza","Hidrocañón", "Hidrocañon","Cambio de banda", "Cambio banda", "Treparrocas", "Treparocas","Divide dolor", "Divide Dolor", "Atadura", "atadura","Pantalla de luz", "Pantalla Luz","Pantalla de luz", "Pantalla luz","Pantalla de humo", "Pantallahumo","Cola férrea", "Cola ferrea","Onda voltio", "Onda Voltio","Otra vez", "Otra Vez","Garra metal", "Garra Metal","Onda ígnea", "Onda Ígnea","Foco energía", "Foco energia","Rayo confuso", "Rayo Confuso","Psicorrayo", "Psicorayo","Puño hielo", "Puño Hielo","Represión metal", "Repr. metal","Bomba germen", "Bomba Germen","Trampa rocas", "Trampa Rocas","Pisotón", "Pisoton","Tijera X", "Tijera x","Bola sombra", "Bola Sombra","Látigo cepa", "Latigo cepa","Hierba lazo", "Hierba Lazo","Látigo", "Latigo","Disparo demora", "Disparo Demora"];

var juegos = ["USUL", "N2B2", "ROZA", "Rubí Omega"];

var ataquesnoregistrados = [{name: "Lanza glacial",	tipo: "hielo", categoria: "físico"}, {name: "Orbes espectro",	tipo: "fantasma", categoria: "especial"}];

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

function buscapoke(name){
	
	for(var i = 1; i < pokelist.length; i++){
		if(pokelist[i][0].name == name){
			return i;
		}
	}
	return -1;

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
function generacion(){}

function generapokelist(){
	
	pokelist2 = [{
		ball: [],
		habs: [],
		movs: [],
		obj: [],
		tipos: {}
	}];
	
	generaball();
	generahabs();
	generaobj();
	generatipos();
	generamovs();
	generapokes();
	
}

function generaball(){

	pokelist2[0]["ball"] = [];

	try{
		var url = "https://www.wikidex.net/wiki/Pok%C3%A9_Ball";
		$.get("https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI(url), function(data) {
			
			var posini;
			var posfin = data.indexOf("<table style=\"padding: 0.5em;");
			
			var labelball;
			var imgball;
			
			var detaball;
			
			while(posini != -1 && posfin != -1){
				
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
				
				pokelist2[0]["ball"].push(detaball);
				
				posfin = data.indexOf("<table style=\"padding: 0.5em;", posfin);
				
			}
		});
	}catch(error){
	}
}

function generatipos(){
	try{
		var link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/Tipo");
		$.get(link, function(data) {
			var tipotabla = data.replace(/(\r\n|\n|\r)/gm,"");
			var posini = tipotabla.indexOf("<td>", tipotabla.indexOf("class=\"lista"));
			var posfin = tipotabla.indexOf("</table>", posini);
			
			var pos1 = posini;
			var pos2 = posini;
			
			var tabla = {};
			var mapa = [];
			
			var tipoarray = tipotabla.substring(posini, posfin).split("</tr><tr>");
			var tipoarray2 = tipoarray[0].split("</td><td>");
			
			for(var i = 0; i < tipoarray2.length; i++){
				pos1 = tipoarray2[i].indexOf("title=\"Tipo ") + 12;
				pos2 = tipoarray2[i].indexOf("\"", pos1);
				
				mapa.push(tipoarray2[i].substring(pos1, pos2));
				tabla[mapa[i]] = {
					image: "",
					inmune: [],
					fuerte: [],
					debil: []
				};
				
			}
			
			for(var i = 1; i < tipoarray.length; i++){
				
				tipoarray2 = tipoarray[i].split("</td><td>");
				
				pos1 = tipoarray2[0].indexOf("title=\"Tipo ") + 12;
				pos2 = tipoarray2[0].indexOf("\"", pos1);
				
				var tiponombre = tipoarray2[0].substring(pos1, pos2);
				
				pos1 = tipoarray2[0].indexOf("src=\"", pos2) + 5;
				pos2 = tipoarray2[0].indexOf("\"", pos1);
				
				var tipoimagen = tipoarray2[0].substring(pos1, pos2);
				
				tabla[tiponombre]["image"] = tipoimagen;
				
				for(var j = 1; j < tipoarray2.length; j++){

					if (tipoarray2[j].includes("X2.png")){
						tabla[tiponombre]["fuerte"].push(mapa[j-1]);
						tabla[mapa[j-1]]["debil"].push(tiponombre);
					}
					else if (tipoarray2[j].includes("X0.png")){
						tabla[mapa[j-1]]["inmune"].push(tiponombre);
					}
				}
			}
			
			pokelist2[0]["tipos"] = tabla;
			
		});
	}catch(error){
		console.log(error);
	}
}

function generahabs(){

	var habsarray;
	try{
		var link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/Lista_de_habilidades");
		$.get(link, function(data) {
			var habstabla = data.replace(/(\r\n|\n|\r)/gm,"");
			var posini = habstabla.indexOf("<tr><td>", habstabla.indexOf("tabpokemon sortable mergetable")) + 4;
			var posfin = habstabla.indexOf("</table>", posini);
			
			habsarray = habstabla.substring(posini, posfin).split("<tr><td>");
			
			for(var i = 0; i < habsarray.length; i++){
				
				pos1 = habsarray[i].indexOf("title=") + 7;
				pos2 = habsarray[i].indexOf("\">", pos1);
				
				var nombrehab = habsarray[i].substring(pos1, pos2);
				
				pos1 = habsarray[i].indexOf("<td>", (habsarray[i].indexOf(">", pos1) + 1)) + 4;
				pos2 = habsarray[i].indexOf("</td>", pos1);
				
				var labelhab = sacaetiq(habsarray[i].substring(pos1, pos2));
				
				var habilidad = {
					name: nombrehab,
					label: labelhab.charAt(0).toUpperCase() + labelhab.slice(1)
				}
				
				pokelist2[0]["habs"].push(habilidad);
				
			}
			
		});
	}catch(error){
		console.log(error);
	}
}

function generamovs(){

	var movsarray;
	try{
		var link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/Lista_de_movimientos");
		$.get(link, function(data) {
			var movstabla = data.replace(/(\r\n|\n|\r)/gm,"");
			
			var posini = movstabla.indexOf("lista sortable mergetable");
			var posfin = posini;
			
			while(posini != -1){
			
				posini = movstabla.indexOf("<tr><td>", posini) + 4;
				posfin = movstabla.indexOf("</table>", posini);
				
				movsarray = movstabla.substring(posini, posfin).split("<tr><td>");
				
				for(var i = 0; i < movsarray.length; i++){
					
					pos1 = movsarray[i].indexOf("title=") + 7;
					pos2 = movsarray[i].indexOf("\">", pos1);
					
					var nombremov = movsarray[i].substring(pos1, pos2);
					
					pos1 = movsarray[i].indexOf("title=", pos1) + 12;
					pos2 = movsarray[i].indexOf("\">", pos1);
					
					var tipomov = movsarray[i].substring(pos1, pos2).toLowerCase();
					
					pos1 = movsarray[i].indexOf("title=", pos1) + 13;
					pos2 = movsarray[i].indexOf("\">", pos1);
					
					var catemov = movsarray[i].substring(pos1, pos2);
					
					var movimiento = {
						name: nombremov,
						tipo: tipomov,
						categoria: catemov,
						stats:{
							potencia: "",
							precision: "",
							efecto: "",
							prioridad: "",
							contacto: ""
						}
					}
					
					pokelist2[0]["movs"].push(movimiento);
					
				}
				posini = movstabla.indexOf("lista sortable mergetable", posfin);
			}
			
			for(var i = 0; i < ataquesnoregistrados.length; i++){
				
				var movimiento = {
					name: ataquesnoregistrados[i].name,
					tipo: ataquesnoregistrados[i].tipo,
					categoria: ataquesnoregistrados[i].categoria,
					stats:{
						potencia: "",
						precision: "",
						efecto: "",
						prioridad: "",
						contacto: ""
					}
				}
					
				pokelist2[0]["movs"].push(movimiento);
			}
			
		});
	}catch(error){
		console.log(error);
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

function generaobj(){
	
	try{
		var link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/Lista_de_objetos");
		$.get(link, function(data) {
			var objtabla = data.replace(/(\r\n|\n|\r)/gm,"");
			
			var posini = 1;
			var posfin = 0;
			
			while(posini != -1 && posfin != -1){
				
				posini = objtabla.indexOf("class=\"celdaobjeto\"><a", posfin);
				if(posini != -1){
					posfin = objtabla.indexOf("</a>", posini);
					
					var imgobj = objtabla.substring(posini, posfin).match(/(https:[^"]*[\.png|\.gif])/gi);
					
					if(imgobj == null){
						imgobj = "";
					}
					
					posini = objtabla.indexOf("\">", objtabla.indexOf("</a> <a ", posini)) + 2;
					posfin = objtabla.indexOf("<", posini);
			
					while(objtabla.substring(posini, posfin).length == 0){
						posini = objtabla.indexOf("\">", objtabla.indexOf("</a> <a ", posini)) + 2;
						posfin = objtabla.indexOf("<", posini);
					}
			
					var imgdet = {
						name: objtabla.substring(posini, posfin),
						img: imgobj[0]
					};
					
					pokelist2[0]["obj"].push(imgdet);
				}
			}
			
		});
	}catch(error){
		console.log(error);
	}
}

function generapokes(){

	try{
		var link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/Lista_de_Pok%C3%A9mon");
		$.get(link, function(data) {
			var poketabla = data.replace(/(\r\n|\n|\r)/gm,"");
			
			var posinitable = poketabla.indexOf("<table class=\"tabpokemon");
			var posfintable = poketabla.indexOf("</table>", posinitable);
			var posini = poketabla.indexOf("<td>", posinitable);
			var posfin = poketabla.indexOf("<", posini + 4);
			
			var generacion = 1;
			while(posini != -1 && posinitable != -1){
				
				var idpoke = poketabla.substring(posini + 4, posfin);
				
				posini = poketabla.indexOf("\">", poketabla.indexOf("<td><a href=", posfin)) + 2;
				posfin = poketabla.indexOf("</a>", posini);
				
				var nombrepoke = poketabla.substring(posini, posfin);
		
				var poke = {
					id: idpoke,
					title: "normal",
					name: nombrepoke,
					img: {sprite: " ", otros:[]},
					tipo: [],
					habs: {normal: [], oculta: []},
					stats: [0, 0, 0, 0, 0, 0],
					movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
					front: " ",
					gen: generacion
				};
				pokelist2[parseInt(idpoke)] = [poke];
				
				cargapoke(parseInt(idpoke), 0, "normal", 0);
				
				if(alola.includes(nombrepoke)){
					poke = {
						id: idpoke,
						title: "de Alola",
						name: nombrepoke,
						img: {sprite: " ", otros:[]},
						tipo: [],
						habs: {normal: [], oculta: []},
						stats: [0, 0, 0, 0, 0, 0],
						movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
						front: " ",
						gen: 7
					};
					pokelist2[parseInt(idpoke)].push(poke);
					cargapoke(parseInt(idpoke), pokelist2[parseInt(idpoke)].length - 1, "de Alola", 0);
				}
				
				if(galar.includes(nombrepoke)){
					var poke = {
						id: idpoke,
						title: "de Galar",
						name: nombrepoke,
						img: {sprite: " ", otros:[]},
						tipo: [],
						habs: {normal: [], oculta: []},
						stats: [0, 0, 0, 0, 0, 0],
						movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
						front: " ",
						gen: 8
					};
					pokelist2[parseInt(idpoke)].push(poke);
					cargapoke(parseInt(idpoke), pokelist2[parseInt(idpoke)].length - 1, "de Galar", 0);
				}
				
				if(hisui.includes(nombrepoke)){
					var poke = {
						id: idpoke,
						title: "de Hisui",
						name: nombrepoke,
						img: {sprite: " ", otros:[]},
						tipo: [],
						habs: {normal: [], oculta: []},
						stats: [0, 0, 0, 0, 0, 0],
						movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
						front: " ",
						gen: 8
					};
					pokelist2[parseInt(idpoke)].push(poke);
					cargapoke(parseInt(idpoke), pokelist2[parseInt(idpoke)].length - 1, "de Hisui", 0);
				}
				
				if(paldea.includes(nombrepoke)){
					var poke = {
						id: idpoke,
						title: "de Paldea",
						name: nombrepoke,
						img: {sprite: " ", otros:[]},
						tipo: [],
						habs: {normal: [], oculta: []},
						stats: [0, 0, 0, 0, 0, 0],
						movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
						front: " ",
						gen: 9
					};
					pokelist2[parseInt(idpoke)].push(poke);
					cargapoke(parseInt(idpoke), pokelist2[parseInt(idpoke)].length - 1, "de Paldea", 0);
				}
				
				posfin = poketabla.indexOf("</tr>", posini);
				posini = poketabla.indexOf("<td>", posfin);
				posfin = poketabla.indexOf("<", posini + 4);
				
				if(posini > posfintable){
					posinitable = poketabla.indexOf("<table class=\"tabpokemon", posfintable);
					posfintable = poketabla.indexOf("</table>", posinitable);
					generacion = generacion + 1;
				}
			}
		});
	}catch(error){
		console.log(error);
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

function cargapoke(id, variacion ,titulo, sprite){
	
	var link;
	
	try{
		if(titulo == "normal"){
			link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/" + pokelist2[id][variacion].name.replace(" ", "_"));
		}
		else{
			link = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://www.wikidex.net/wiki/" + (pokelist2[id][variacion].name + "_" + titulo).replace(" ", "_"));
		}
		$.get(link, function(data) {
			var pokeinfo = data.replace(/(\r\n|\n|\r)/gm,"").replace("> <", "><");
			
			var posini = pokeinfo.indexOf("src=\"", pokeinfo.indexOf("alt=\"Ilustración")) + 5;
			var posfin = pokeinfo.indexOf("\"", posini);
			
			pokelist2[id][variacion].front = pokeinfo.substring(posini, posfin);

			posini = pokeinfo.indexOf("<td>", pokeinfo.indexOf("title=\"Tipos a los que pertenece\"")) + 4;
			posfin = pokeinfo.indexOf("</td>", posini);
			
			var tipospoke = pokeinfo.substring(posini, posfin).split("<br>")[0].split("</a><a ");
			
			for(var i = 0; i < tipospoke.length; i++){
			
				posini = tipospoke[i].indexOf("title=\"Tipo ") + 12;
				posfin = tipospoke[i].indexOf("\"", posini);
				
				pokelist2[id][variacion].tipo.push(tipospoke[i].substring(posini, posfin));
				
			}
			
			posini = pokeinfo.indexOf("<td>", pokeinfo.indexOf("title=\"Habilidades que puede conocer\"")) + 4;
			posfin = pokeinfo.indexOf("</td>", posini);
			
			var habspoke = pokeinfo.substring(posini, posfin).split("</a><br><a ");
			
			for(var i = 0; i < habspoke.length; i++){
			
				posini = habspoke[i].indexOf("title=\"") + 7;
				posfin = habspoke[i].indexOf("\"", posini);
				
				pokelist2[id][variacion].habs.normal.push(inthab(habspoke[i].substring(posini, posfin)));
				
			}

			if(pokeinfo.indexOf("title=\"Habilidad oculta\"") != -1){
				
				posini = pokeinfo.indexOf("title=\"", pokeinfo.indexOf("<td>", pokeinfo.indexOf("title=\"Habilidad oculta\""))) + 7;
				posfin = pokeinfo.indexOf("\"", posini);
				
				pokelist2[id][variacion].habs.oculta.push(inthab(pokeinfo.substring(posini, posfin)));
				
			}
			
			var posinitable = pokeinfo.indexOf("<table class=\"movnivel");
			var posfintable = pokeinfo.indexOf("</table>", posinitable);
			
			while(posinitable != -1){
				
				var movarray = pokeinfo.substring(pokeinfo.indexOf("<tr>", posinitable), posfintable).split("</tr><tr>");
				
				for(var i = 0; i < movarray.length; i++){
					
					posini = movarray[i].indexOf("title=\"",movarray[i].indexOf("<td>",movarray[i].indexOf("<td>") + 4) + 4) + 7;
					posfin = movarray[i].indexOf("\"", posini);
					
					var intmov = intataq(movarray[i].substring(posini, posfin));
					
					if(intmov == -1)
						console.log(pokelist2[id][variacion].name + " " + movarray[i].substring(posini, posfin));
					
					if(!pokelist2[id][variacion].movs.niv.includes(intmov)){
						pokelist2[id][variacion].movs.niv.push(intmov);
					}
					
				}
				
				posinitable = pokeinfo.indexOf("<table class=\"movnivel", posfintable);
				posfintable = pokeinfo.indexOf("</table>", posinitable);

			}
			
			posinitable = pokeinfo.indexOf("<table class=\"movmtmo");
			posfintable = pokeinfo.indexOf("</table>", posinitable);

			
			while(posinitable != -1){
				
				var movarray = pokeinfo.substring(pokeinfo.indexOf("<tr>", posinitable), posfintable).split("</tr><tr>");
				
				for(var i = 0; i < movarray.length; i++){
					
					posini = movarray[i].indexOf("title=\"",movarray[i].indexOf("<td>",movarray[i].indexOf("<td>") + 4) + 4) + 7;
					posfin = movarray[i].indexOf("\"", posini);
					
					var intmov = intataq(movarray[i].substring(posini, posfin));
					
					if(intmov == -1)
						console.log(pokelist2[id][variacion].name + " " + movarray[i].substring(posini, posfin));
					
					if(!pokelist2[id][variacion].movs.mt.includes(intmov)){
						pokelist2[id][variacion].movs.mt.push(intmov);
					}
					
				}
				
				posinitable = pokeinfo.indexOf("<table class=\"movmtmo", posfintable);
				posfintable = pokeinfo.indexOf("</table>", posinitable);

			}
			
			posinitable = pokeinfo.indexOf("<table class=\"movtutor");
			posfintable = pokeinfo.indexOf("</table>", posinitable);

			
			if(posinitable != -1){
				
				var movarray = pokeinfo.substring(pokeinfo.indexOf("<tr>", posinitable), posfintable).split("</tr><tr>");
				
				for(var i = 0; i < movarray.length; i++){
					
					posini = movarray[i].indexOf("<td>",movarray[i].indexOf("<td>") + 4) + 4;
					posfin = movarray[i].indexOf("\"", movarray[i].indexOf("title=\"", posini) + 7);
					
					var intmov = intataq(movarray[i].substring(movarray[i].indexOf("title=\"", posini) + 7, posfin));
					
					if(!movarray[i].substring(movarray[i].indexOf("title=\"", posini) + 7, posfin).includes("Pokémon")){
					
						while(posini != -1 && intmov == -1){
													
							posini = movarray[i].indexOf("<td>", posfin);
							posfin = movarray[i].indexOf("\"", movarray[i].indexOf("title=\"", posini) + 7);
						
							intmov = intataq(movarray[i].substring(movarray[i].indexOf("title=\"", posini) + 7, posfin));
						
						}
					
						if(intmov == -1)
							console.log(pokelist2[id][variacion].name + " " + movarray[i]);
						else if(!pokelist2[id][variacion].movs.tut.includes(intmov)){
							pokelist2[id][variacion].movs.tut.push(intmov);
						}
					}
				}
			}
			
			posinitable = pokeinfo.indexOf("<table class=\"movhuevo");
			posfintable = pokeinfo.indexOf("</table>", posinitable);

			if(posinitable != -1){
				
				var movarray = pokeinfo.substring(pokeinfo.indexOf("<tr>", posinitable), posfintable).split("</tr><tr>");
				
				for(var i = 0; i < movarray.length; i++){
					
					posini = movarray[i].indexOf("<td>",movarray[i].indexOf("<td>") + 4) + 4;
					posfin = movarray[i].indexOf("\"", movarray[i].indexOf("title=\"", posini) + 7);
					
					var intmov = intataq(movarray[i].substring(movarray[i].indexOf("title=\"", posini) + 7, posfin));
					
					if(!movarray[i].substring(movarray[i].indexOf("title=\"", posini) + 7, posfin).includes("Pokémon")){
						while(posini != -1 && intmov == -1){
													
							posini = movarray[i].indexOf("<td>", posfin);
							posfin = movarray[i].indexOf("\"", movarray[i].indexOf("title=\"", posini) + 7);
						
							intmov = intataq(movarray[i].substring(movarray[i].indexOf("title=\"", posini) + 7, posfin));

						}
						
						if(intmov == -1)
							console.log(pokelist2[id][variacion].name + " " + movarray[i]);
						else if(!pokelist2[id][variacion].movs.egg.includes(intmov)){
							pokelist2[id][variacion].movs.egg.push(intmov);
						}
					}
				}
			}
			
			posinitable = pokeinfo.indexOf("<table class=\"movespecial");
			posfintable = pokeinfo.indexOf("</table>", posinitable);
						
			while(posinitable != -1){
				if(pokeinfo.substring(posinitable, posfintable).includes("Movimiento Z")){

					var movarray = pokeinfo.substring(pokeinfo.indexOf("<tr>", posinitable), posfintable).split("</tr><tr>");
					
					for(var i = 0; i < movarray.length; i++){
						
						posini = movarray[i].indexOf("title=\"",movarray[i].indexOf("<td>") + 4) + 7;
						posfin = movarray[i].indexOf("\"", posini);
						
						var intmov = intataq(movarray[i].substring(posini, posfin));
						
						if(intmov == -1)
							console.log(pokelist2[id][variacion].name + " " + movarray[i].substring(posini, posfin));
						
						if(!pokelist2[id][variacion].movs.z.includes(intmov)){
							pokelist2[id][variacion].movs.z.push(intmov);
						}
						
					}
				}
				else{

					var movarray = pokeinfo.substring(pokeinfo.indexOf("<tr>", posinitable), posfintable).split("</tr><tr>");
					
					for(var i = 0; i < movarray.length; i++){
						
						posini = movarray[i].indexOf("title=\"",movarray[i].indexOf("<td>",movarray[i].indexOf("<td>") + 4) + 4) + 7;
						posfin = movarray[i].indexOf("\"", posini);
						
						var intmov = intataq(movarray[i].substring(posini, posfin));
						
						if(intmov == -1)
							console.log(pokelist2[id][variacion].name + " " + movarray[i].substring(posini, posfin));
						
						if(!pokelist2[id][variacion].movs.otro.includes(intmov)){
							pokelist2[id][variacion].movs.otro.push();
						}
						
					}
				}
				
				posinitable = pokeinfo.indexOf("<table class=\"movmtmo", posfintable);
				posfintable = pokeinfo.indexOf("</table>", posinitable);
			}
			
			//Stats
			
			var posstats = pokeinfo.indexOf("id=\"Características_de_combate\"");
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">PS</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist2[id][variacion].stats[0] = parseInt(pokeinfo.substring(posini, posfin));
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">Ataque</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist2[id][variacion].stats[1] = parseInt(pokeinfo.substring(posini, posfin));
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">Defensa</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist2[id][variacion].stats[2] = parseInt(pokeinfo.substring(posini, posfin));
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">At. esp.</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist2[id][variacion].stats[3] = parseInt(pokeinfo.substring(posini, posfin));
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">Def. esp.</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist2[id][variacion].stats[4] = parseInt(pokeinfo.substring(posini, posfin));

			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">Velocidad</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist2[id][variacion].stats[5] = parseInt(pokeinfo.substring(posini, posfin));
			
			//sprite
			posinitable = pokeinfo.indexOf("src=\"", pokeinfo.indexOf("class=\"otrosdatos")) + 5;
			posfintable = pokeinfo.indexOf("</div>", posinitable);
			
			var spritearray = pokeinfo.substring(posinitable, posfintable).split("src=\"");
			
			pokelist2[id][variacion].img.sprite = spritearray[sprite].substring(0, spritearray[0].indexOf("\""));

			//imgs
			posinitable = pokeinfo.indexOf("<table class=\"galeria-sprites");
			posfintable = pokeinfo.indexOf("</table>", posinitable);
			
			while(posinitable != -1){
				
				var tablesprite = pokeinfo.substring(posinitable, posfintable);
				posini = tablesprite.indexOf("src=\"");
				posfin = tablesprite.indexOf("\"", posini + 5);
				
				while(posini != -1){
					
					if(tablesprite.substring(posini + 5, posfin).startsWith("http"))
						pokelist2[id][variacion].img.otros.push(tablesprite.substring(posini + 5, posfin));
					
					posini = tablesprite.indexOf("src=\"", posfin);
					posfin = tablesprite.indexOf("\"", posini + 5);
					
				}
				
				posinitable = pokeinfo.indexOf("<table class=\"galeria-sprites", posfintable);
				posfintable = pokeinfo.indexOf("</table>", posinitable);

			}
			
		});
	}catch(error){
		console.log(error);
	}
}

function inthab(hab){

	var i = 0;
	try{
		while(pokelist2[0]["habs"][i]["name"].replace(" ", "") != validanamehab(hab).replace(" ", "") && i < pokelist2[0]["habs"].length){
			i++;
		}
			
		if (i == pokelist2[0]["habs"].length){
			return -1;
		}
	}
	catch(error){
		return -1;
	}
	return i;
	
}

function intataq(ata){

	var i = 0;
	var ataque = ata;
	
	if(juegos.includes(ata))
		return -1;
	
	if(ata.includes("(")){
		ataque = ata.substring(0, ata.indexOf("(") - 1);
	}
	
	try{
		while(pokelist2[0]["movs"][i]["name"].replace(" ", "") != validaname(ataque).replace(" ", "") && i < pokelist2[0]["movs"].length){
			i++;
		}
			
		if (i == pokelist2[0]["movs"].length){
			return -1;
		}
	}
	catch(error){
		return -1;
	}
	return i;
	
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