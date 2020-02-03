var pokelist;
	
var CANTIDAD_HABS = 259;
var CANTIDAD_MOVS = 778;
var CANTIDAD_POKES = 891;
var CANTIDAD_BALL = 27;	

var alola = [
	"Rattata",
	"Raticate",
	"Raichu",
	"Sandshrew",
	"Sandslash",
	"Vulpix",
	"Ninetales",
	"Diglett",
	"Dugtrio",
	"Meowth",
	"Persian",
	"Geodude",
	"Graveler",
	"Golem",
	"Grimer",
	"Muk",
	"Exeggutor",
	"Marowak"
];

var galar = [
	"Meowth",
	"Ponyta",
	"Rapidash",
	"Slowpoke",
	"Farfetch'd",
	"Weezing",
	"Mr._Mime",
	"Corsola",
	"Zigzagoon",
	"Linoone",
	"Darumaka",
	"Darmanitan",
	"Yamask",
	"Stunfisk"
];

var mega = [
	"Mega-Venusaur",
	"Mega-Charizard X",
	"Mega-Charizard Y",
	"Mega-Blastoise",
	"Mega-Alakazam",
	"Mega-Gengar",
	"Mega-Kangaskhan",
	"Mega-Pinsir",
	"Mega-Gyarados",
	"Mega-Aerodactyl",
	"Mega-Mewtwo X",
	"Mega-Mewtwo Y",
	"Mega-Ampharos",
	"Mega-Scizor",
	"Mega-Heracross",
	"Mega-Houndoom",
	"Mega-Tyranitar",
	"Mega-Blaziken",
	"Mega-Gardevoir",
	"Mega-Mawile",
	"Mega-Aggron",
	"Mega-Medicham",
	"Mega-Manectric",
	"Mega-Banette",
	"Mega-Absol",
	"Mega-Garchomp",
	"Mega-Lucario",
	"Mega-Abomasnow",
	"Mega-Beedrill",
	"Mega-Pidgeot",
	"Mega-Slowbro",
	"Mega-Steelix",
	"Mega-Sceptile",
	"Mega-Swampert",
	"Mega-Sableye",
	"Mega-Sharpedo",
	"Mega-Camerupt",
	"Mega-Altaria",
	"Mega-Glalie",
	"Mega-Salamence",
	"Mega-Metagross",
	"Mega-Latias",
	"Mega-Latios",
	"Mega-Rayquaza",
	"Mega-Lopunny",
	"Mega-Gallade",
	"Mega-Audino",
	"Mega-Diancie"
];
 
var cambios2 = [
	"Absorbe agua", "Absor. agua",
	"Absorbe electricidad", "Absor. elec.",
	"Electricidad estática", "Elec. estát.",
	"Electricidad estática", "Elect. estát.",
	"Espíritu vital", "Espír. vital",
	"Efecto espora", "Efec. espora",
	"Modo Daruma", "Modo daruma"
]

var cambios = [
	"Bombardeo", "Presa", 
	"Constricción", "Repetición",
	"Contraataque", "Contador",
	"Espejo", "Movimiento espejo",
	"Espejo", "Mov. Espejo",
	"Retribución", "Retroceso",
	"Rodar", "Desenrollar",
	"Sellar", "Cerca",
	"Semilladora", "Recurrente",
	"Sísmico", "Movimiento sísmico",
	"Colmillo ígneo", "Colmillo fuego",
	"Colmillo hielo", "Colmillo Hielo",
	"Golpe cabeza", "Golpe Cabeza",
	"Hidrocañón", "Hidrocañon",
	"Cambio de banda", "Cambio banda", 
	"Treparrocas", "Treparocas",
	"Divide dolor", "Divide Dolor", 
	"Atadura", "atadura",
	"Pantalla de luz", "Pantalla Luz",
	"Pantalla de luz", "Pantalla luz",
	"Pantalla de humo", "Pantallahumo",
	"Cola férrea", "Cola ferrea",
	"Onda voltio", "Onda Voltio",
	"Otra vez", "Otra Vez",
	"Garra metal", "Garra Metal",
	"Onda ígnea", "Onda Ígnea",
	"Foco energía", "Foco energia",
	"Rayo confuso", "Rayo Confuso",
	"Psicorrayo", "Psicorayo",
	"Puño hielo", "Puño Hielo",
	"Represión metal", "Repr. metal",
	"Bomba germen", "Bomba Germen",
	"Trampa rocas", "Trampa Rocas",
	"Pisotón", "Pisoton",
	"Tijera X", "Tijera x",
	"Bola sombra", "Bola Sombra",
	"Látigo cepa", "Latigo cepa",
	"Hierba lazo", "Hierba Lazo",
	"Látigo", "Latigo",
	"Disparo demora", "Disparo Demora"
];
	
window.onload = function(){
	cargajson();
}

function cargajson(){

	var pokejsonurl = "https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI("https://odricku.cl/PKAW/base/pokelist.json");
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
	}
	return 1;
}

function vergen(){
	document.getElementById('xgen').style.display= 'block'
	document.getElementById('xseed').style.display= 'none'
	document.getElementById('xrandom').style.display= 'none'
}

function verseed(){
	document.getElementById('xgen').style.display= 'none'
	document.getElementById('xseed').style.display= 'block'
	document.getElementById('xrandom').style.display= 'none'
}

function verrandom(){
	document.getElementById('xgen').style.display= 'block'
	document.getElementById('xseed').style.display= 'none'
	document.getElementById('xrandom').style.display= 'block'
}

function cargadebilidades(){
	
	var tipos = [
		"acero",
		"agua",
		"bicho",
		"dragón",
		"eléctrico",
		"fantasma",
		"fuego",
		"hada",
		"hielo",
		"lucha",
		"normal",
		"planta",
		"psíquico",
		"roca",
		"siniestro",
		"tierra",
		"veneno",
		"volador"
	];
	
	var linea = "";
	var debs;
	
	for(var i = 0; i < tipos.length; i++){
		debs ="> Debil a (";
		
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

function creaficha(poke, j){
	
	var opcion = document.createElement("a");
	opcion.id = poke["id"] + poke.title;
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
	
	if(poke.title == "normal" || (j == 0 && !document.getElementById("Otros").checked))
		opcion.innerHTML = "<div><img width='100px' height='100px' src='" + poke["front"] + "'/><br>" + poke["name"].replace("_", "") + complem + "<a class='equis' style='visibility:hidden'></a></div>";
	else
		opcion.innerHTML = "<img width='100px' height='100px' src='" + poke["front"] + "'/><br>" + poke["name"].replace("_", "") + " " + poke.title + complem + "<a class='equis' style='visibility:hidden'></a></div>";
	document.getElementById("pokelist").appendChild(opcion);
	
}

function cargalista(){

	var i = 1;
	var j;
	var rand = 0;
	
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
		
	document.getElementById("pokelist").innerHTML = "<div style='font-size:50%' id='pokeselect'></div>";
	cargadebilidades();
	while(i < pokelist.length){
		try{
			if(document.getElementById("Otrasformas").checked){
				for(j = 0; j < pokelist[i].length; j++){
					
					var poke = pokelist[i][j];
					if (document.getElementById("Gen" + poke.gen).checked && evalforma(poke, j))
						creaficha(poke, j);
				}
			}
			else{
				
				var poke = pokelist[i][0];
				
				if (document.getElementById("Gen" + poke.gen).checked) 
					creaficha(poke, 0);
			}
			i++;
		}catch(error){
			alert(pokelist.length + " " + i + " " + j);
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
	
	try{
		document.getElementById("pokeselect").innerHTML = "<textarea style='float:right; width:70%; height:180px;resize: none;'></textarea>" + document.getElementsByClassName("pokevista")[~~(Math.random()*document.getElementsByClassName("pokevista").length)].innerHTML;
	}catch(error){};
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
	
	if(poke.title.indexOf("de Alola") != -1 || poke.title.indexOf("de Galar") != -1){
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
	
	for(var i = 1; i < pokelist.length; i++)
		if(pokelist[i][0].name == name)
			return i;
	
	
}

function cargaregionales(){
	
	for(var i = 0; i < alola.length; i++){
		console.log(i);
		cargapokes(buscapoke(alola[i]), "de Alola");
	}
	
	for(var i = 0; i < galar.length; i++){
		console.log(i);
		cargapokes(buscapoke(galar[i]), "de Galar");
	}
}

function cargapokes(pos, vartitle){

	try{
		var url = "https://www.wikidex.net/wiki/" + pokelist[pos][0]["name"] + "_" + vartitle.replace(/ /g, "_");
		$.get("https://images"+(~~(Math.random()*32) + 1)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI(url), function(data) {
			
			var poke = {
				id: " ",
				title: vartitle,
				name: pokelist[pos][0]["name"],
				img: {sprite: " ", otros:[]},
				tipo: [],
				habs: {normal: [], oculta: []},
				stats: [0, 0, 0, 0, 0, 0],
				movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
				front: " ",
				gen: 7
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
			
			pokelist[pos].push(poke);
		});
	}catch(error){
		cargapokes( pos );
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

function readseed(seed){
		
	var listactual = new Array(seed.length/4);
	
	for(var i = 0; i < seed.length; i = i + 4){
		
		var numpoke = parseInt(seed.substring(i, i + 3)); 
		var tipopoke = parseInt(seed.substring(i + 3, i + 4));
		
		try{
			if( numpoke > CANTIDAD_POKES + 1 ||  numpoke == 0 || pokelist[numpoke][tipo] == null){
				alert("seed erronea");
				return;
			}
		}catch(error){
			alert("seed erronea");
			return;
		}
		
		listactual[i/4] = pokelist[numpoke][tipopoke];
			
	}
	
}


