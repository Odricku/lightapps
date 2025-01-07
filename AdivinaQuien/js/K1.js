var pokelist;

var pokelist = [];
	
var disc = "Pokémon es una marca registrada de Nintendo desde el 1995 a la fecha. Esta pagina es sin animos de lucro y no esta de ninguna manera afiliada a Nintendo ni oficialmente respaldada. Esta pagina solo tiene el objetivo de pasar un buen rato y para el disfrute gratuito de aquellas almas perdidas que se pierdan por estos rincones de internet. La intencion no es competir con la marca registrada de Nintendo.";
	
var tipos = ["acero","agua","bicho","dragón","eléctrico","fantasma","fuego","hada","hielo","lucha","normal","planta","psíquico","roca","siniestro","tierra","veneno","volador"];
var alola = ["Rattata","Raticate","Raichu","Sandshrew","Sandslash","Vulpix","Ninetales","Diglett","Dugtrio","Meowth","Persian","Geodude","Graveler","Golem","Grimer","Muk","Exeggutor","Marowak"];
var galar = ["Meowth","Ponyta","Rapidash","Slowpoke","Slowbro","Farfetch'd","Weezing","Mr. Mime","Articuno","Zapdos","Moltres","Slowking","Corsola","Zigzagoon","Linoone","Darumaka","Darmanitan","Yamask","Stunfisk"];
var hisui = ["Growlithe", "Arcanine", "Voltorb", "Electrode", "Typhlosion", "Qwilfish", "Sneasel", "Samurott", "Lilligant", "Zorua", "Zoroark", "Braviary", "Sliggoo", "Goodra", "Avalugg", "Decidueye"];
var paldea = ["Tauros", "Wooper"];
var mega = ["Mega-Venusaur","Mega-Charizard X","Mega-Charizard Y","Mega-Blastoise","Mega-Alakazam","Mega-Gengar","Mega-Kangaskhan","Mega-Pinsir","Mega-Gyarados","Mega-Aerodactyl","Mega-Mewtwo X","Mega-Mewtwo Y","Mega-Ampharos","Mega-Scizor","Mega-Heracross","Mega-Houndoom","Mega-Tyranitar","Mega-Blaziken","Mega-Gardevoir","Mega-Mawile","Mega-Aggron","Mega-Medicham","Mega-Manectric","Mega-Banette","Mega-Absol","Mega-Garchomp","Mega-Lucario","Mega-Abomasnow","Mega-Beedrill","Mega-Pidgeot","Mega-Slowbro","Mega-Steelix","Mega-Sceptile","Mega-Swampert","Mega-Sableye","Mega-Sharpedo","Mega-Camerupt","Mega-Altaria","Mega-Glalie","Mega-Salamence","Mega-Metagross","Mega-Latias","Mega-Latios","Mega-Rayquaza","Mega-Lopunny","Mega-Gallade","Mega-Audino","Mega-Diancie"];
var cambios2 = ["Absorbe agua", "Absor. agua","Absorbe electricidad", "Absor. elec.","Electricidad estática", "Elec. estát.","Electricidad estática", "Elect. estát.","Espíritu vital", "Espír. vital","Efecto espora", "Efec. espora","Modo Daruma", "Modo daruma"];
var cambios = ["Cabeza de hierro", "Cabeza hierro", "Fulgor semilla", "Fogonazo", "Luminicola", "Ráfaga", "Patada salto alta", "Pat. salto alta", "Velocidad extrema", "Veloc. extrema", "Empapar", "Anegar", "Placaje eléctrico", "Placaje eléc", "Esquirla helada", "Canto helado","Ovocuración", "Amortiguador", "Llave vital", "Tiro vital", "Rayo señal", "Doble rayo", "Cascabel cura", "Campana cura", "Saña", "Golpe", "Tormenta de arena", "Tormenta arena", "Meteoros" ,"Rapidez", "Autosugestión", "Más psique", "Bombardeo", "Presa", "Constricción", "Repetición","Contraataque", "Contador","Espejo", "Movimiento espejo","Espejo", "Mov. Espejo","Retribución", "Retroceso","Rodar", "Desenrollar","Sellar", "Cerca","Semilladora", "Recurrente","Sísmico", "Movimiento sísmico","Colmillo ígneo", "Colmillo fuego","Colmillo hielo", "Colmillo Hielo","Golpe cabeza", "Golpe Cabeza","Hidrocañón", "Hidrocañon","Cambio de banda", "Cambio banda", "Treparrocas", "Treparocas","Divide dolor", "Divide Dolor", "Atadura", "atadura","Pantalla de luz", "Pantalla Luz","Pantalla de luz", "Pantalla luz","Pantalla de humo", "Pantallahumo","Cola férrea", "Cola ferrea","Onda voltio", "Onda Voltio","Otra vez", "Otra Vez","Garra metal", "Garra Metal","Onda ígnea", "Onda Ígnea","Foco energía", "Foco energia","Rayo confuso", "Rayo Confuso","Psicorrayo", "Psicorayo","Puño hielo", "Puño Hielo","Represión metal", "Repr. metal","Bomba germen", "Bomba Germen","Trampa rocas", "Trampa Rocas","Pisotón", "Pisoton","Tijera X", "Tijera x","Bola sombra", "Bola Sombra","Látigo cepa", "Latigo cepa","Hierba lazo", "Hierba Lazo","Látigo", "Latigo","Disparo demora", "Disparo Demora"];
var excepciones = ["inicial", "Letra ", "Signo", "Sin corte", "Sin ROM", "Forma normal", "habitual", "Sin disco", "on tabla", "Autostar", "Con disco", "encubierta", "descubierta", " (inactivo)", "Cuando el tipo", "Patrón ", "Ejemplar ", "Flor ", "Tamaño ", "falsificada", "coqueta", "genuina", "descubierto", "ascendente", "llena", "descubierto", "Ritmo propio", "Vista lince", "Fuerte afecto", "Mutatipo", "Rompeaura", "Agrupamiento"];
var solounaforma = ["Flabébé", "Floette", "Florges", "Unown"];
var parchesfront = {
		"Lycanroc": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/3b/latest/20160920132330/Lycanroc_diurno.png/150px-Lycanroc_diurno.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/53/latest/20160920131938/Lycanroc_nocturno.png/150px-Lycanroc_nocturno.png","https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a7/latest/20170811134424/Lycanroc_crepuscular.png/155px-Lycanroc_crepuscular.png"],
		"Darmanitan": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/68/latest/20191128022527/Darmanitan.png/180px-Darmanitan.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/7e/latest/20171215214153/Darmanitan_daruma.png/180px-Darmanitan_daruma.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/8e/latest/20200307024234/Darmanitan_de_Galar.png/180px-Darmanitan_de_Galar.png", "https://images.wikidexcdn.net/mwuploads/wikidex/e/e3/latest/20191115171345/Darmanitan_de_Galar_daruma_EpEc.png"],
		"Groudon": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d5/latest/20150621183212/Groudon.png/180px-Groudon.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/7a/latest/20160922145218/Groudon_primigenio.png/180px-Groudon_primigenio.png"],
		"Burmy": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/73/latest/20200720111309/Burmy_planta.png/180px-Burmy_planta.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/29/latest/20200720111604/Burmy_arena.png/180px-Burmy_arena.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a5/latest/20200720111716/Burmy_basura.png/180px-Burmy_basura.png"], 
		"Wormadam": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/42/latest/20150819141822/Wormadam_planta.png/180px-Wormadam_planta.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/33/latest/20150819141944/Wormadam_arena.png/180px-Wormadam_arena.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/bb/latest/20150819142037/Wormadam_basura.png/180px-Wormadam_basura.png"],
		"Tauros": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/98/latest/20080909115022/Tauros.png/200px-Tauros.png", "https://images.wikidexcdn.net/mwuploads/wikidex/4/4c/latest/20230113084158/Tauros_de_Paldea_combatiente.png", "https://images.wikidexcdn.net/mwuploads/wikidex/9/90/latest/20230113084247/Tauros_de_Paldea_ardiente.png", "https://images.wikidexcdn.net/mwuploads/wikidex/3/3f/latest/20230113084403/Tauros_de_Paldea_acu%C3%A1tica.png"],
		"Shellos": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/cb/latest/20200720161045/Shellos_oeste.png/180px-Shellos_oeste.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/35/latest/20200720161208/Shellos_este.png/180px-Shellos_este.png"],
		"Gastrodon": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/31/latest/20200720161434/Gastrodon_oeste.png/180px-Gastrodon_oeste.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b8/latest/20200720161557/Gastrodon_este.png/180px-Gastrodon_este.png"],
		"Cherrim": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b2/latest/20190819024532/Cherrim_encapotado.png/180px-Cherrim_encapotado.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20160604222136/Cherrim_soleado.png/180px-Cherrim_soleado.png"],
		"Unfezant": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c6/latest/20230202062853/Unfezant_%28macho%29.png/180px-Unfezant_%28macho%29.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/75/latest/20230202062952/Unfezant_%28hembra%29.png/180px-Unfezant_%28hembra%29.png"],
		"Deerling": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f8/latest/20200720123311/Deerling_primavera.png/180px-Deerling_primavera.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9a/latest/20200720123533/Deerling_verano.png/180px-Deerling_verano.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/66/latest/20200720124108/Deerling_oto%C3%B1o.png/180px-Deerling_oto%C3%B1o.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e3/latest/20200720124342/Deerling_invierno.png/180px-Deerling_invierno.png"],
		"Sawsbuck": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/63/latest/20200720122314/Sawsbuck_primavera.png/180px-Sawsbuck_primavera.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/01/latest/20200720122521/Sawsbuck_verano.png/180px-Sawsbuck_verano.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/39/latest/20200720122713/Sawsbuck_oto%C3%B1o.png/180px-Sawsbuck_oto%C3%B1o.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/51/latest/20200720122914/Sawsbuck_invierno.png/180px-Sawsbuck_invierno.png"],
		"Frillish": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20110403184010/Frillish_%28macho%29.png/180px-Frillish_%28macho%29.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5a/latest/20110403184030/Frillish_%28hembra%29.png/180px-Frillish_%28hembra%29.png"],
		"Jellicent": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f9/latest/20151017020603/Jellicent_%28macho%29.png/180px-Jellicent_%28macho%29.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/24/latest/20151017021546/Jellicent_%28hembra%29.png/180px-Jellicent_%28hembra%29.png"],
		"Meowstic": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d3/latest/20150301201353/Meowstic_%28macho%29.png/180px-Meowstic_%28macho%29.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/15/latest/20150301215403/Meowstic_%28hembra%29.png/180px-Meowstic_%28hembra%29.png"],
		"Aegislash":["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5b/latest/20190423163114/Aegislash_escudo.png/180px-Aegislash_escudo.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/33/latest/20170615170150/Aegislash_filo.png/180px-Aegislash_filo.png"],
		"Oricorio": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/33/latest/20160801140413/Oricorio_animado.png/180px-Oricorio_animado.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d2/latest/20160801143146/Oricorio_pl%C3%A1cido.png/180px-Oricorio_pl%C3%A1cido.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5d/latest/20160801135918/Oricorio_apasionado.png/180px-Oricorio_apasionado.png","https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/98/latest/20160801144731/Oricorio_refinado.png/180px-Oricorio_refinado.png"],
		"Toxtricity":["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/31/latest/20200205205551/Toxtricity_aguda.png/180px-Toxtricity_aguda.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b0/latest/20200205205457/Toxtricity_grave.png/180px-Toxtricity_grave.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b5/latest/20200205155134/Toxtricity_Gigamax.png/180px-Toxtricity_Gigamax.png"],
		"Indeedee": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f8/latest/20220313074627/Indeedee_%28macho%29.png/180px-Indeedee_%28macho%29.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/8f/latest/20200207100725/Indeedee_%28hembra%29.png/180px-Indeedee_%28hembra%29.png"],
		"Morpeko": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/05/latest/20190807163025/Morpeko_saciada.png/180px-Morpeko_saciada.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f6/latest/20190807164038/Morpeko_voraz.png/180px-Morpeko_voraz.png"],
		"Urshifu": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/3e/latest/20200604024122/Urshifu_brusco.png/180px-Urshifu_brusco.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9a/latest/20200604210736/Urshifu_fluido.png/180px-Urshifu_fluido.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/6f/latest/20200602142230/Urshifu_brusco_Gigamax.png/180px-Urshifu_brusco_Gigamax.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d6/latest/20200602142155/Urshifu_fluido_Gigamax.png/180px-Urshifu_fluido_Gigamax.png"],
		"Maushold": ["https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20230220190625/Maushold_familia_de_tres_%28dream_world%29.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9a/latest/20230207191700/Maushold_%28dream_world%29.png/180px-Maushold_%28dream_world%29.png"],
		"Tatsugiri": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f0/latest/20230113081634/Tatsugiri_curvada.png/180px-Tatsugiri_curvada.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/22/latest/20230113081711/Tatsugiri_l%C3%A1nguida.png/180px-Tatsugiri_l%C3%A1nguida.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/87/latest/20230113081837/Tatsugiri_recta.png/180px-Tatsugiri_recta.png"],
		"Pyroar": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/29/latest/20130912171144/Pyroar_%28macho%29.png/180px-Pyroar_%28macho%29.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/18/latest/20131001145813/Pyroar_%28hembra%29.png/180px-Pyroar_%28hembra%29.png"],
		"Basculin": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/4b/latest/20151017160840/Basculin_raya_roja.png/150px-Basculin_raya_roja.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/bf/latest/20151017160613/Basculin_raya_azul.png/150px-Basculin_raya_azul.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/ae/latest/20220518205153/Basculin_raya_blanca_HOME.png/150px-Basculin_raya_blanca_HOME.png"],
		"Basculegion": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/69/latest/20220216160854/Basculegion_%28macho%29.png/180px-Basculegion_%28macho%29.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/57/latest/20220216071507/Basculegion_%28hembra%29.png/180px-Basculegion_%28hembra%29.png"],
		"Kyurem": ["https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f0/latest/20160510085327/Kyurem.png/150px-Kyurem.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a0/latest/20120613170850/Kyurem_blanco_2.png/200px-Kyurem_blanco_2.png", "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fc/latest/20120613171031/Kyurem_negro_2.png/200px-Kyurem_negro_2.png"]
	}		

var otros = [];
var cantotros = 0;
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
		document.getElementById("Gen9").disabled = false;
		document.getElementById("Otrasformas").disabled = false;
		
		if(document.URL.indexOf("?") != -1){
			var key = document.URL.slice(document.URL.split("?")[0].length + 1).replaceAll(/%20/g, " ");
			if(key.length > 0){
				showhid();
				verseed();
				document.getElementById("semilla").value = key;
				cargalista();
			}
		}
	}
	
	request.onerror = function() {
		pokejsonurl = encodeURI("./base/pokelist.json");
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
			document.getElementById("Gen9").disabled = false;
			document.getElementById("Otrasformas").disabled = false;
			
			if(document.URL.indexOf("?") != -1){
				var key = document.URL.slice(document.URL.split("?")[0].length + 1).replaceAll(/%20/g, " ");
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
		
		var pokenum = parseInt(pokeactual.id.substring(0, 4));
		var poketipo = pokeactual.id.substring(4, pokeactual.id.length);
		
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
				
				var pokenum = parseInt(pokeactual.id.substring(0, 4));
				var poketipo = pokeactual.id.substring(4, pokeactual.id.length);
				
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

function animate(){

	for(var i = 1; i < pokelist.length; i++){
		for(var k = 0; k < pokelist[i].length; k++){

			var complemento = "";
			if(pokelist[i][k].title == "hembra"){
				complemento = "_hembra";
			}
			if(pokelist[i][k].frontanim != null){
				for(var j = 0; j < pokelist[i][k].img.otros.length; j++){
					if(pokelist[i][k].img.otros[j].endsWith("EP" + complemento + ".gif")){pokelist[i][k].frontanim = pokelist[i][k].img.otros[j]; break;}
				}   
				if(pokelist[i][k].frontanim == null){
					for(var j = 0; j < pokelist[i][k].img.otros.length; j++){
						if(pokelist[i][k].img.otros[j].endsWith("Ec" + complemento + ".gif")){pokelist[i][k].frontanim = pokelist[i][k].img.otros[j]; break;}
					}
					if(pokelist[i][k].frontanim == null){
						for(var j = 0; j < pokelist[i][k].img.otros.length; j++){
							if(pokelist[i][k].img.otros[j].endsWith("PE" + complemento + ".gif")){pokelist[i][k].frontanim = pokelist[i][k].img.otros[j]; break;}
						}
						if(pokelist[i][k].frontanim == null){
							for(var j = 0; j < pokelist[i][k].img.otros.length; j++){
								if(pokelist[i][k].img.otros[j].endsWith("Ep" + complemento + ".gif")){pokelist[i][k].frontanim = pokelist[i][k].img.otros[j]; break;}
							}
							if(pokelist[i][k].frontanim == null){
								for(var j = 0; j < pokelist[i][k].img.otros.length; j++){
									if(pokelist[i][k].img.otros[j].endsWith("UL" + complemento + ".gif")){pokelist[i][k].frontanim = pokelist[i][k].img.otros[j]; break;}
								}
								if(pokelist[i][k].frontanim == null){
									for(var j = 0; j < pokelist[i][k].img.otros.length; j++){
										if(pokelist[i][k].img.otros[j].endsWith("SL" + complemento + ".gif")){pokelist[i][k].frontanim = pokelist[i][k].img.otros[j]; break;}  
									}
									if(pokelist[i][k].frontanim == null){
										for(var j = 0; j < pokelist[i][k].img.otros.length; j++){
											if(pokelist[i][k].img.otros[j].endsWith("ZA" + complemento + ".gif")){pokelist[i][k].frontanim = pokelist[i][k].img.otros[j]; break;}  
										}
										if(pokelist[i][k].frontanim == null){
											for(var j = 0; j < pokelist[i][k].img.otros.length; j++){
												if(pokelist[i][k].img.otros[j].endsWith("XY" + complemento + ".gif")){pokelist[i][k].frontanim = pokelist[i][k].img.otros[j]; break;}  
											}
										}
									}
								}
							}
						}
					} 
				}
			}
		}
	}
}

function creaficha(poke, forma){
	
	var opcion = document.createElement("a");
	opcion.id = poke.id.padStart(4, "0") + poke.title;
	opcion.value = 0;
	opcion.name = poke["name"];
	opcion.setAttribute("class", "pokevista");
	opcion.addEventListener("click", seleccion, false);
	
	var nombre = poke.name.replaceAll("_", "");
	
	if(poke.title != "normal" && forma){
		nombre =  poke.name.replaceAll("_", "") + " " + poke.title;
	}
	
	var divinterno = document.createElement("div");
	divinterno.classList.add("imgcontainer");
	divinterno.dataset.poke = poke.id;
	divinterno.dataset.nombre = poke.name;
	divinterno.dataset.forma = poke.title;
	var imginterno = document.createElement("img");
	if(flaganimado.value == true && poke.frontanim != null)
		imginterno.src = poke.frontanim;
	else
		imginterno.src = poke.front;
	imginterno.height = 100;
	imginterno.width = 100;
	
	divinterno.appendChild(imginterno);
	opcion.appendChild(divinterno);
	opcion.appendChild(document.createTextNode(nombre));
	opcion.appendChild(document.createElement("br"));
	
	for(var k = 0; k < poke.tipo.length; k++){
		var imgtipo = document.createElement("img");
		imgtipo.src = pokelist[0].tipos[poke.tipo[k]].image;
		imgtipo.width = 50;
		
		opcion.appendChild(imgtipo);
	}

	if(poke.habs.normal.length > 0){
		opcion.appendChild(document.createElement("br"));
		opcion.appendChild(document.createElement("br"));
		var habblabel = document.createElement("b");
		habblabel.innerText = "Habilidades";
		opcion.appendChild(habblabel);
		opcion.appendChild(document.createElement("br"));
		var habb = document.createElement("i");
		
		var complem = "";
		for(var k = 0; k < poke.habs.normal.length; k++){
			if (k == 0)
				complem = pokelist[0].habs[poke.habs.normal[k]].name;
			else
				complem = complem + ", " + pokelist[0].habs[poke.habs.normal[k]].name;
		}
		habb.innerText = complem;
		opcion.appendChild(habb);
	}
	
	if(poke["habs"]["oculta"].length > 0){
		opcion.appendChild(document.createElement("br"));
		var habbocullabel = document.createElement("b");
		habbocullabel.innerText = "Oculta";
		opcion.appendChild(habbocullabel);
		opcion.appendChild(document.createElement("br"));
		var habbocul = document.createElement("i");
		
		var complem = "";
		for(var k = 0; k < poke.habs.oculta.length; k++){
			if (k == 0)
				complem = pokelist[0].habs[poke.habs.oculta[k]].name;
			else
				complem = complem + ", " + pokelist[0].habs[poke.habs.oculta[k]].name;
		}
		habbocul.innerText = complem;
		opcion.appendChild(habbocul);
	}
	
	var ainterno = document.createElement("a");
	ainterno.classList.add("equis");
	ainterno.style.visibility = "hidden";
	
	opcion.appendChild(ainterno);
	
	document.getElementById("pokelist").appendChild(opcion);
	
	new Promise(() => {
		imginterno.onload = () => {
			var h = imginterno.naturalHeight;
			var w = imginterno.naturalWidth;
			
			if (w < 100 && h < 100){
				imginterno.height = h;
				imginterno.width = w;
			}
			else if(h > w){
				imginterno.height = 100;
				imginterno.width = w * 100/h;
			}
			else{
				imginterno.height = h * 100/w;
				imginterno.width = 100;
			}
		}
	});
	
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
			key = decode(document.getElementById("semilla").value).join("");
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
			
			
			if(document.getElementById("Otrasformas").checked || key != ""){

				for(var j = 0; j < pokelist[i].length; j++){
					if (key != ""){	
						if(key[pos] == "1"){
							creaficha(pokelist[i][j], masformas(i, j , pos));
						}
					}
					else{
						var poke = pokelist[i][j];
						if (document.getElementById("Gen" + poke.gen).checked && evalforma(poke, j))
							creaficha(poke, masformas(i, j,  pos));
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

function masformas(i, j, pos){
	if(pokelist[i].length == 1) return false;
	if(j != 0) return true;
	
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

	var lista = document.getElementsByClassName("pokevista");
	var elem = "";
	
	var bytearr = [];
	
	for(var i = 1; i < pokelist.length; i++){
		for(var j = 0; j< pokelist[i].length; j++){
			var temp = 0;
			
			for(var k = 0; k < lista.length; k++){
				var poke = lista[k];
				if(pokelist[i][j]["name"] == poke.name && pokelist[i][j]["title"] == poke.id.substring(4, poke.id.length) && !poke.classList.contains("oculto")){
					temp = 1;
					k = document.getElementsByClassName("pokevista").length;
				}
			}
			
			elem = elem + temp;
			
			if(elem.length == 8){
				bytearr.push(elem);
				elem = "";
			}
		}
	}
	
	if(elem.length > 0){
		for (var i = elem.length; i < 8; i++){
			elem = elem + "0";
		}
		bytearr.push(elem);
		elem = "";
	}
	
	
	while(bytearr[bytearr.length - 1] == "00000000"){
		bytearr.pop();
	}
	
	document.getElementById("detatipo").value = encodeURI("./") + "?" + encode(bytearr);

	veracciones();
}

function encode(arrbytes){
	
	var base64 = "";
	var exclusiones = [];
	var extext = "";
	
	for (var i = 0; i < arrbytes.length; i++) {
		if(arrbytes[i] == "00000000" && (arrbytes[i + 1] == "00000000" || arrbytes[i - 1] == "00000000"))
			exclusiones.push(i);
		else
			base64 =  base64 + String.fromCharCode(parseInt(arrbytes[i], 2));
	}
	
	if(exclusiones.length > 0){
		for(var i = 0; i < exclusiones.length; i++){
			if(i != 0 && exclusiones.includes(exclusiones[i] - 1)){
				cantidad = parseInt(extext.substring(extext.lastIndexOf("-") + 1)) + 1;
				extext = extext.substring(0, extext.lastIndexOf("-") + 1) + (cantidad);
			}
			else{
				extext = extext + "," + exclusiones[i] + "-1"; 
			}
		}
		extext = extext.substring(1);
	}
	
	return encodeURI(extext + ";" + window.btoa(base64));
}

function decode(base64){
	
	var entrada = "";
	var exclusionesentrada = [];
	var exclusiones = [];
	
	if(base64.startsWith(";")){
		entrada = decodeURI(base64.substring(1));
	}
	else{
		entrada = decodeURI(base64.substring(base64.indexOf(";") + 1));
		exclusionesentrada = base64.substring(0, base64.indexOf(";")).split(",");
	}
	for(var i = 0; i < exclusionesentrada.length; i++){
		var asubir = exclusionesentrada[i].split("-");
		exclusiones.push(parseInt(asubir[0]));
		for(var j = 1; j < parseInt(parseInt(asubir[1])); j++){
			exclusiones.push(parseInt(asubir[0]) + j);
		}
	}
	var raw = window.atob(entrada);
	var array = [];

	var pos = 0;

	for(i = 0; i < raw.length + exclusiones.length; i++) {
		if(exclusiones.includes(i)){
			array[i] = "00000000";
			pos++;
		}else{
			array[i] = (raw.charCodeAt(i - pos).toString(2)).padStart(8, "0");
		}
	}
	
	return array;

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
	
	if(poke.title.indexOf("de Alola") != -1 || poke.title.indexOf("de Galar") != -1 || poke.title.indexOf("de Hisui") != -1 || poke.title.indexOf("de Paldea") != -1){
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

function generapokelist(){
	
	otros = [];
	cantotros = 0;
	
	pokelist = [{
		ball: [],
		habs: [],
		movs: [],
		obj: [],
		tipos: {}
	}];
	
	otrospokes();
	generaball();
	generahabs();
	generaobj();
	generatipos();
	generamovs();
	generapokes();
	
}

function generaball(){

	try{
		var url = "https://www.wikidex.net/wiki/Poké_Ball";
		$.get(encodeURI(url), function(data) {
			
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
				
				pokelist[0]["ball"].push(detaball);
				
				posfin = data.indexOf("<table style=\"padding: 0.5em;", posfin);
				
			}
		});
	}catch(error){
	}
}

function generatipos(){
	try{
		var link = encodeURI("https://www.wikidex.net/wiki/Tipo");
		$.get(link, function(data) {
			var tipotabla = data.replaceAll(/(\r\n|\n|\r)/gm,"");
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
			
			pokelist[0]["tipos"] = tabla;
			
		});
	}catch(error){
		console.log(error);
	}
}

function generaobj(){
	
	try{
		var link = encodeURI("https://www.wikidex.net/wiki/Lista_de_objetos");
		$.get(link, function(data) {
			var objtabla = data.replaceAll(/(\r\n|\n|\r)/gm,"");
			
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
					
					pokelist[0]["obj"].push(imgdet);
				}
			}
			
		});
	}catch(error){
		console.log(error);
	}
}

function generahabs(){

	try{
		var link = encodeURI("https://www.wikidex.net/wiki/Lista_de_habilidades");
		$.get(link, function(data) {
			var habstabla = data.replaceAll(/(\r\n|\n|\r)/gm,"");
			var posini = habstabla.indexOf("<tr><td>", habstabla.indexOf("tabpokemon sortable mergetable")) + 4;
			var posfin = habstabla.indexOf("</table>", posini);
			
			var habsarray = habstabla.substring(posini, posfin).split("<tr><td>");
			
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
				
				pokelist[0]["habs"].push(habilidad);
				
			}
			
		});
	}catch(error){
		console.log(error);
	}
}

function generamovs(){

	try{
		var link = encodeURI("https://www.wikidex.net/wiki/Lista_de_movimientos");
		$.get(link, function(data) {
			var movstabla = data.replaceAll(/(\r\n|\n|\r)/gm,"");
			
			var posini = movstabla.indexOf("lista sortable mergetable");
			var posfin = posini;
			
			while(posini != -1){
			
				posini = movstabla.indexOf("<tr><td>", posini) + 4;
				posfin = movstabla.indexOf("</table>", posini);
				
				var movsarray = movstabla.substring(posini, posfin).split("<tr><td>");
				
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
					
					pokelist[0]["movs"].push(movimiento);
					
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
					
				pokelist[0]["movs"].push(movimiento);
			}
			
			completamov(10);
		});
	}catch(error){
		console.log(error);
	}
}

function completamov(salto){
	
	for(var i = 0; i < salto; i++){
		if(i < pokelist[0].movs.length){
			cargamov(pokelist[0].movs[i].name, salto);
		}
	}
}

function cargamov(movname, salto){
	
	try{

		var link = encodeURI("https://www.wikidex.net/wiki/" + movname.replaceAll(" ", "_"));
		
		$.get(link, function(data) {
			
			var idmov = intataq(movname);
			var movinfo = data.replaceAll(/(\r\n|\n|\r)/gm,"").replaceAll("> <", "><");
			
			var posini = movinfo.indexOf("<td>", movinfo.indexOf("title=\"Movimiento\">Potencia</a>")) + 4;
			var posfin = movinfo.indexOf("<", posini);
			
			pokelist[0].movs[idmov].stats.potencia = movinfo.substring(posini, posfin).replaceAll("\"", "").replaceAll(" ", "");
			
			posini = movinfo.indexOf("<td>", movinfo.indexOf("title=\"Precisión\">Precisión</a>")) + 4;
			posfin = movinfo.indexOf("<", posini);
			
			pokelist[0].movs[idmov].stats.precision = movinfo.substring(posini, posfin).replaceAll("\"", "").replaceAll(" ", "");
			
			posini = movinfo.indexOf("<td>", movinfo.indexOf("title=\"Movimiento\">Efecto secundario</a>")) + 4;
			posfin = movinfo.indexOf("<", posini);
			
			pokelist[0].movs[idmov].stats.efecto = movinfo.substring(posini, posfin).replaceAll("\"", "");
			
			posini = movinfo.indexOf("<td>", movinfo.indexOf("title=\"Prioridad\">Prioridad</a>")) + 4;
			posfin = movinfo.indexOf("<", posini);
			
			pokelist[0].movs[idmov].stats.prioridad = movinfo.substring(posini, posfin).replaceAll("\"", "").replaceAll(" ", "");
			
			posini = movinfo.indexOf("<td>", movinfo.indexOf("title=\"Movimiento\">Contacto</a>")) + 4;
			posfin = movinfo.indexOf("<", posini);
			
			pokelist[0].movs[idmov].stats.contacto = movinfo.substring(posini, posfin).replaceAll("\"", "").replaceAll(" ", "");
			
			if(idmov + salto < pokelist[0].movs.length){
				cargamov(pokelist[0].movs[idmov + salto].name, salto);
			}
			
		});
	}catch(error){
		cargamov(movname);
	}
}

function generapokes(){

	try{
		var link = encodeURI("https://www.wikidex.net/wiki/Lista_de_Pokémon");
		$.get(link, function(data) {
			var poketabla = data.replaceAll(/(\r\n|\n|\r)/gm,"");
			
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
					gen: generacion,
					value: "" 
				};
				pokelist[parseInt(idpoke)] = [poke];
				
				posfin = poketabla.indexOf("</tr>", posini);
				posini = poketabla.indexOf("<td>", posfin);
				posfin = poketabla.indexOf("<", posini + 4);
				
				if(posini > posfintable){
					posinitable = poketabla.indexOf("<table class=\"tabpokemon", posfintable);
					posfintable = poketabla.indexOf("</table>", posinitable);
					generacion = generacion + 1;
				}
			}
			completapokes(10);
		});
	}catch(error){
		console.log(error);
	}
}

function completapokes(salto){
		
	for(var i = 1; i < salto + 1; i++){
		if(i < pokelist.length){
			cargapoke(i, 0, "normal", 0, salto);
		}
	}
}

function cargapoke(id, variacion ,titulo, sprite, salto){
	
	var link;
	
	try{
		if(titulo == "normal"){
			link = encodeURI("https://www.wikidex.net/wiki/" + pokelist[id][variacion].name.replaceAll(" ", "_"));
		}
		else{
			link = encodeURI("https://www.wikidex.net/wiki/" + (pokelist[id][variacion].name + "_" + titulo).replaceAll(" ", "_"));
		}
		$.get(link, function(data) {
			var pokeinfo = data.replaceAll(/(\r\n|\n|\r)/gm,"").replaceAll("> <", "><").replaceAll("<br />", "<br/>");
			

			if(["Appletun", "Flapple"].includes(pokelist[id][variacion].name)){
				pokelist[id][variacion].img.otros = pokeinfo.match(new RegExp("(https:[^ ,\"]*(Appletun|Flapple)[^ ,\"]*\.(?:gif|png))", "gi"));
			}
			else{
				pokelist[id][variacion].img.otros = pokeinfo.match(new RegExp("(https:[^ ,\"]*" + pokelist[id][variacion].name + "[^ ,\"]*\.(?:gif|png))", "gi"));
			}
			
			var posini = pokeinfo.indexOf("src=\"", pokeinfo.indexOf("alt=\"Ilustración")) + 5;
			var posfin = pokeinfo.indexOf("\"", posini);
			
			if(parchesfront[pokelist[id][0].name] != null)
				pokelist[id][variacion].front = parchesfront[pokelist[id][variacion].name][variacion];
			else
				pokelist[id][variacion].front = pokeinfo.substring(posini, posfin);

			posini = pokeinfo.indexOf("<td>", pokeinfo.indexOf("title=\"Tipos a los que pertenece\"")) + 4;
			posfin = pokeinfo.indexOf("</td>", posini);
			
			var tipospoke = pokeinfo.substring(posini, posfin).split("<br>")[0].split("</a><a ");
			
			for(var i = 0; i < tipospoke.length; i++){
			
				posini = tipospoke[i].indexOf("title=\"Tipo ") + 12;
				posfin = tipospoke[i].indexOf("\"", posini);
				
				pokelist[id][variacion].tipo.push(tipospoke[i].substring(posini, posfin).toLowerCase());
				
			}
			
			posini = pokeinfo.indexOf("<td>", pokeinfo.indexOf("title=\"Habilidades que puede conocer\"")) + 4;
			posfin = pokeinfo.indexOf("</td>", posini);
			
			var habspoke = pokeinfo.substring(posini, posfin).split("</a><br/><a ");
			
			for(var i = 0; i < habspoke.length; i++){
			
				posini = habspoke[i].indexOf("title=\"") + 7;
				posfin = habspoke[i].indexOf("\"", posini);
				
				pokelist[id][variacion].habs.normal.push(inthab(habspoke[i].substring(posini, posfin)));
				
			}

			if(pokeinfo.indexOf("title=\"Habilidad oculta\"") != -1){
				
				posini = pokeinfo.indexOf("title=\"", pokeinfo.indexOf("<td>", pokeinfo.indexOf("title=\"Habilidad oculta\""))) + 7;
				posfin = pokeinfo.indexOf("\"", posini);
				
				pokelist[id][variacion].habs.oculta.push(inthab(pokeinfo.substring(posini, posfin)));
				
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
						console.log(pokelist[id][variacion].name + " " + movarray[i].substring(posini, posfin));
					
					if(!pokelist[id][variacion].movs.niv.includes(intmov)){
						pokelist[id][variacion].movs.niv.push(intmov);
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
						console.log(pokelist[id][variacion].name + " " + movarray[i].substring(posini, posfin) + " " + posini + " " + posfin);
					
					if(!pokelist[id][variacion].movs.mt.includes(intmov)){
						pokelist[id][variacion].movs.mt.push(intmov);
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
							console.log(pokelist[id][variacion].name + " " + movarray[i]);
						else if(!pokelist[id][variacion].movs.tut.includes(intmov)){
							pokelist[id][variacion].movs.tut.push(intmov);
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
							console.log(pokelist[id][variacion].name + " " + movarray[i]);
						else if(!pokelist[id][variacion].movs.egg.includes(intmov)){
							pokelist[id][variacion].movs.egg.push(intmov);
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
							console.log(pokelist[id][variacion].name + " " + movarray[i].substring(posini, posfin));
						
						if(!pokelist[id][variacion].movs.z.includes(intmov)){
							pokelist[id][variacion].movs.z.push(intmov);
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
							console.log(pokelist[id][variacion].name + " " + movarray[i].substring(posini, posfin));
						
						if(!pokelist[id][variacion].movs.otro.includes(intmov)){
							pokelist[id][variacion].movs.otro.push();
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
			pokelist[id][variacion].stats[0] = parseInt(pokeinfo.substring(posini, posfin));
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">Ataque</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist[id][variacion].stats[1] = parseInt(pokeinfo.substring(posini, posfin));
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">Defensa</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist[id][variacion].stats[2] = parseInt(pokeinfo.substring(posini, posfin));
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">At. esp.</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist[id][variacion].stats[3] = parseInt(pokeinfo.substring(posini, posfin));
			
			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">Def. esp.</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist[id][variacion].stats[4] = parseInt(pokeinfo.substring(posini, posfin));

			posini = pokeinfo.indexOf(">", pokeinfo.indexOf("<td", pokeinfo.indexOf(">Velocidad</a>", posstats)) + 3) + 1;
			posfin = pokeinfo.indexOf("<", posini);
			pokelist[id][variacion].stats[5] = parseInt(pokeinfo.substring(posini, posfin));
			
			//sprite
			posinitable = pokeinfo.indexOf("src=\"", pokeinfo.indexOf("class=\"otrosdatos")) + 5;
			posfintable = pokeinfo.indexOf("</div>", posinitable);
			
			var spritearray = pokeinfo.substring(posinitable, posfintable).split("src=\"");
			
			if(pokelist[id][0].name == "Basculin"){
				spritearray.push("https://www.wikidex.net/wiki/Archivo:Basculin_raya_blanca_icono_HD.png\"");
			}
			else if(pokelist[id][0].name == "Dudunsparce"){
				spritearray.push("https://images.wikidexcdn.net/mwuploads/wikidex/0/04/latest/20221218211059/Dudunsparce_trinodular_icono_HD.png\"");
			}
			else if(pokelist[id][0].name == "Zygarde"){	
				spritearray = [spritearray[1], spritearray[0], spritearray[2]];
			}			
			else if(pokelist[id][0].name == "Xerneas"){	
				spritearray = [spritearray[1], spritearray[0]];
			}
			else if(pokelist[id][0].name == "Urshifu"){
				spritearray = [spritearray[0], spritearray[0], spritearray[1], spritearray[2]];
			}
			
			pokelist[id][variacion].img.sprite = spritearray[sprite].substring(0, spritearray[0].indexOf("\""));
			
			if(spritearray.length > 1 && !solounaforma.includes(pokelist[id][0].name)){

				pokextra(pokelist[id][variacion].name, pokelist[id][variacion].img.sprite, id, variacion);

				for(var i = 1; i < spritearray.length; i++){
					if(!spritearray[i].substring(0, spritearray[i].indexOf("\"")).includes("coqueta") && !spritearray[i].substring(0, spritearray[i].indexOf("\"")).includes("inicial")){
						var poke = {
							id: pokelist[id][variacion].id,
							title: "",
							name: pokelist[id][variacion].name,
							img: {sprite: spritearray[i].substring(0, spritearray[i].indexOf("\"")), otros:[]},
							tipo: [],
							habs: {normal: [], oculta: []},
							stats: [0, 0, 0, 0, 0, 0],
							movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
							front: " ",
							gen: pokelist[id][variacion].gen
						};
						
						var posicion = pokelist[id].push(poke);
						
						for(var k = 0; k < pokelist[id][variacion].habs.normal.length ;k++){
							pokelist[id][posicion-1].habs.normal.push(pokelist[id][variacion].habs.normal[k]);
						}
						for(var k = 0; k < pokelist[id][variacion].habs.oculta.length ;k++){
							pokelist[id][posicion-1].habs.oculta.push(pokelist[id][variacion].habs.oculta[k]);
						}
						
						if(parchesfront[pokelist[id][variacion].name] != null){
							pokelist[id][posicion -1].front = parchesfront[pokelist[id][variacion].name][posicion -1];
						}
						pokextra(pokelist[id][0].name, spritearray[i].substring(0, spritearray[i].indexOf("\"")), id, posicion - 1);
						if(poke.img.sprite.includes("Mega-")){
							pokelist[id][posicion -1].habs.normal = [inthab(pokeinfo.split("<br/><b>" + poke.img.sprite.substring(poke.img.sprite.indexOf("Mega-" + pokelist[id][0].name), poke.img.sprite.indexOf("_icon")).replaceAll("_", " ") + "</b><br/>")[1].split("Habilidad")[1].split("title=\"")[1].split("\"")[0])];
							pokelist[id][posicion -1].habs.oculta = [];
							getimages(id, posicion - 1, poke.img.sprite.substring(poke.img.sprite.indexOf("Mega-" + pokelist[id][0].name) , poke.img.sprite.indexOf("_icon")));
						}
						else if(pokelist[id][0].name == "Darmanitan" && posicion == 4){
							getimages(id, posicion - 1, "Darmanitan_de_Galar_daruma");		
						}else if(poke.img.sprite.includes("Ultra-Necrozma")){
							getimages(id, posicion - 1, "Ultra-Necrozma");
						}else if(poke.img.sprite.includes("Kyurem")){
							if(poke.img.sprite.includes("negro")){
								pokelist[id][posicion -1].habs.normal = [inthab("Terravoltaje")];
							}else if(poke.img.sprite.includes("blanco")){
								pokelist[id][posicion -1].habs.normal = [inthab("Turbollama")];
							}
						}else{
							getimages(id, posicion - 1, poke.img.sprite.substring(poke.img.sprite.indexOf(pokelist[id][0].name) , poke.img.sprite.indexOf("_icon")));
						}
					}
				}
				
				otros[pokelist[id][0].name]["page"] = pokeinfo;
				if(variacion == 0){
					cantotros++;
					if(cantotros == Object.keys(otros).length -1)
						completainfo();
				}
			}
			
			if (variacion == 0){
				if((id + salto) < pokelist.length){
					cargapoke(id + salto, variacion ,titulo, sprite, salto);
				}
				if(alola.includes(pokelist[id][variacion].name)){
					var pokealola = {
						id: pokelist[id][variacion].id,
						title: "de Alola",
						name: pokelist[id][variacion].name,
						img: {sprite: " ", otros:[]},
						tipo: [],
						habs: {normal: [], oculta: []},
						stats: [0, 0, 0, 0, 0, 0],
						movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
						front: " ",
						gen: 7
					};
					var posicion = pokelist[id].push(pokealola);
					cargapoke(id, posicion - 1, "de Alola", sprite, salto);
				}
				if(galar.includes(pokelist[id][variacion].name)){
					var pokegalar = {
						id: pokelist[id][variacion].id,
						title: "de Galar",
						name: pokelist[id][variacion].name,
						img: {sprite: " ", otros:[]},
						tipo: [],
						habs: {normal: [], oculta: []},
						stats: [0, 0, 0, 0, 0, 0],
						movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
						front: " ",
						gen: 8
					};
					var posicion = pokelist[id].push(pokegalar);					
					cargapoke(id, posicion - 1, "de Galar", sprite, salto);
				}
				if(hisui.includes(pokelist[id][variacion].name)){
					var pokehisui = {
						id: pokelist[id][variacion].id,
						title: "de Hisui",
						name: pokelist[id][variacion].name,
						img: {sprite: " ", otros:[]},
						tipo: [],
						habs: {normal: [], oculta: []},
						stats: [0, 0, 0, 0, 0, 0],
						movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
						front: " ",
						gen: 8
					};
					var posicion = pokelist[id].push(pokehisui);					
					cargapoke(id, posicion - 1, "de Hisui", sprite, salto);
				}
				if(paldea.includes(pokelist[id][variacion].name)){
					var pokepaldea = {
						id: pokelist[id][variacion].id,
						title: "de Paldea",
						name: pokelist[id][variacion].name,
						img: {sprite: " ", otros:[]},
						tipo: [],
						habs: {normal: [], oculta: []},
						stats: [0, 0, 0, 0, 0, 0],
						movs: {niv:[], mt:[], tut:[], egg:[], z:[], otro:[]},
						front: " ",
						gen: 9
					};
					var posicion = pokelist[id].push(pokepaldea);					
					cargapoke(id, posicion - 1, "de Paldea", sprite, salto);
				}
			}
		});
	}catch(error){
		console.log(error);
	}
}

function getimages(id, posicion, regex){
	
	for(var i = posicion - 1; i > -1; i--){
		for(var j = 0; j < pokelist[id][i].img.otros.length; j++){
			
			if(pokelist[id][0].name == "Urshifu"){
				if(regex.includes("Gigamax")){
					if(pokelist[id][i].img.otros[j].includes(regex)){
						var posimg = pokelist[id][posicion].img.otros.push(pokelist[id][i].img.otros[j]);
						pokelist[id][i].img.otros.splice(j, 1);
						if(!pokelist[id][posicion].img.otros[posimg - 1].includes("_icon.png") && pokelist[id][posicion].front == " "){
							pokelist[id][posicion].front = pokelist[id][posicion].img.otros[posimg - 1];
						}
						j--;
					}
				}
				else if(pokelist[id][i].img.otros[j].includes(regex) && !pokelist[id][i].img.otros[j].includes("Gigamax")){
					var posimg = pokelist[id][posicion].img.otros.push(pokelist[id][i].img.otros[j]);
					pokelist[id][i].img.otros.splice(j, 1);
					if(!pokelist[id][posicion].img.otros[posimg - 1].includes("_icon.png") && pokelist[id][posicion].front == " "){
						pokelist[id][posicion].front = pokelist[id][posicion].img.otros[posimg - 1];
					}
					j--;
				}
			}
			else{
				if(regex.includes("Gigamax") && pokelist[id][i].img.otros[j].includes("Gigamax")){
					var posimg = pokelist[id][posicion].img.otros.push(pokelist[id][i].img.otros[j]);
					pokelist[id][i].img.otros.splice(j, 1);
					if(!pokelist[id][posicion].img.otros[posimg - 1].includes("_icon.png") && pokelist[id][posicion].front == " "){
						pokelist[id][posicion].front = pokelist[id][posicion].img.otros[posimg - 1];
					}
					j--;
				}
				else if(pokelist[id][i].img.otros[j].includes(regex)){
					
					var posimg = pokelist[id][posicion].img.otros.push(pokelist[id][i].img.otros[j]);
					pokelist[id][i].img.otros.splice(j, 1);
					if(!pokelist[id][posicion].img.otros[posimg - 1].includes("_icon.png") && pokelist[id][posicion].front == " "){
						pokelist[id][posicion].front = pokelist[id][posicion].img.otros[posimg - 1];
					}
					j--;
				}
			}	
		}	
	}
}

function pokextra(nombrepoke, sprite, id, pos){
	
	for(var i = 0; i < otros[nombrepoke].length; i++){
		if(!otros[nombrepoke][i].flag){
			if(otros[nombrepoke][i].nombre.startsWith("Mega-") && (sprite.toLowerCase()).includes(encodeURI((otros[nombrepoke][i].nombre + "_" + otros[nombrepoke][i].variacion).replace("_normal", "") + "_").toLowerCase())){

				otros[nombrepoke][i].flag = true;
				pokelist[id][pos].name = otros[nombrepoke][i].nombre;
				pokelist[id][pos].title = otros[nombrepoke][i].variacion;
				pokelist[id][pos].tipo = otros[nombrepoke][i].tipos;
				pokelist[id][pos].gen = 6;
				
			}
			else{
				if(otros[nombrepoke][i].variacion != "normal" && otros[nombrepoke][i].variacion != "macho"){
					var value = ("_" + encodeURI(otros[nombrepoke][i].variacion.replace("vetusto", "vetusta").replace("Signo ", "").replace("Forma al ", "").replace("Forma ", "").replace("Raya ", "").replace("Letra ", "").replace(" de ", " ").replace("Modo ", "").replace("Corte ", "").replace("Con ", "").replace("Color ", "").replace("Núcleo ", "").replace("Estilo ", "").replace("Gorra ", "").replace("Plumaje ", "").replace("Variedad ", "").replace("Motivo ", "").replace("completa", "completo").replaceAll(" ", "_") + "_").toLowerCase()).replace("soleada", "soleado").replace("encapotada", "encapotado").replace("tronco_","").replace("_de_galar_daruma_", "daruma_de_galar_").replace("nocturna", "nocturno").replace("!", "%21").replace("?", "%3f").replace("hembra_", "hembra").replace("_ultra", "ultra").replace("familia_", "");

					if(sprite.toUpperCase().includes("GIGAMAX") && otros[nombrepoke][i].variacion.includes("Gigamax") || !sprite.toUpperCase().includes("GIGAMAX") && !otros[nombrepoke][i].variacion.includes("Gigamax")){
						if((sprite.toLowerCase()).includes(value)){
							otros[nombrepoke][i].flag = true;
							pokelist[id][pos].title = otros[nombrepoke][i].variacion;
							pokelist[id][pos].tipo = otros[nombrepoke][i].tipos;
						}
					}
				}
			}
		}
	}
}

function otrospokes(){

	try{
		var link = encodeURI("https://www.wikidex.net/wiki/Lista_de_Pokémon_con_diferentes_formas");
		$.get(link, function(data) {
			var poketabla = data.replaceAll(/(\r\n|\n|\r)/gm,"");
			
			insertaotros({"nombre": "Unfezant", "variacion": "macho", "tipos": ["normal", "volador"], "flag":false});
			insertaotros({"nombre": "Unfezant", "variacion": "hembra", "tipos": ["normal", "volador"], "flag":false});

			insertaotros({"nombre": "Frillish", "variacion": "macho", "tipos": ["agua", "fantasma"], "flag":false});
			insertaotros({"nombre": "Frillish", "variacion": "hembra", "tipos": ["agua", "fantasma"], "flag":false});
			
			insertaotros({"nombre": "Jellicent", "variacion": "macho", "tipos": ["agua", "fantasma"], "flag":false});
			insertaotros({"nombre": "Jellicent", "variacion": "hembra", "tipos": ["agua", "fantasma"], "flag":false});

			insertaotros({"nombre": "Pyroar", "variacion": "macho", "tipos": ["fuego", "normal"], "flag":false});
			insertaotros({"nombre": "Pyroar", "variacion": "hembra", "tipos": ["fuego", "normal"], "flag":false});
			
			var listabloques = poketabla.split("<div class=\"cajaflexible");
			for(var i = 1; i < listabloques.length; i++){
				var listacajas = listabloques[i].split("<div class=\"float-app cntpad theme-wiki border-theme center-text");
				if(listacajas.length > 1){
					for(var j = 1; j < listacajas.length; j++){
						procesacaja(listacajas[j], j -1);
					}
				}
			}
		});
	}catch(error){
		console.log(error);
	}
}

function procesacaja(caja, variacion){
	
	var tipos = [];
	var nombre = "";
	var nombrevariacion = "";
	
	var posini = caja.indexOf("title=\"");
	var posfin = caja.indexOf("\"", posini + 7);
	
	if(caja.length > 0){
		nombre = caja.substring(posini + 7, posfin);
		
		if(nombre.indexOf(" ") != -1){
			if(nombre.indexOf("Mr. Mime") != -1){
				nombrevariacion = nombre.substring(nombre.indexOf(" ") + 1, 4).replaceAll(nombre + " ", "");
				nombre = nombre.substring(0, nombre.indexOf(" ", 4));
			}
			else{
				nombrevariacion = nombre.substring(nombre.indexOf(" ") + 1).replaceAll(nombre + " ", "");
				nombre = nombre.substring(0, nombre.indexOf(" "));
			}
		}
		
		posini = caja.indexOf("title=\"Tipo ");
		var posinivar = caja.indexOf("style=\"border-top:1px solid #88a\"");
		
		if(nombre == "Pikachu"){
			tipos.push("eléctrico");
		}
		else{
			while (posini != -1 && (posinivar == -1 || posinivar > posini)){
				posfin = caja.indexOf("\"", posini + 12);
				tipos.push(caja.substring(posini + 12, posfin).toLowerCase());
				
				posini = caja.indexOf("title=\"Tipo ", posfin);
			}
		}
				
		posini = posinivar;
		if(posini != -1){
			posini = caja.indexOf(">", posini) + 1;
			posfin = caja.indexOf("</div>", posini);
			
			var var2 = sacaetiq(caja.substring(posini, posfin).replaceAll(nombre + " ", "").replaceAll("<br />", " ").replaceAll("&#160;", " ").replace(" (activo)", ""));
			
			if(nombrevariacion == "" || var2.includes(nombrevariacion)){
				nombrevariacion = var2;
			}
			else{
				if(var2 != "normal" && var2 != nombrevariacion){
					nombrevariacion = nombrevariacion + " " + var2;
				}
			}
		}
	}
	
	if(nombre == "Darmanitan" && tipos.includes("hielo") && variacion == 1){
		nombrevariacion = "de Galar Modo daruma";
	}
	
	if(nombre == "Meowstic" && variacion == 0){
		nombrevariacion = "macho";
	}
	
	if(nombre == "Meowstic" && variacion == 1){
		nombrevariacion = "hembra";
	}
	
	if(nombre == "Indeedee" && variacion == 2){
		nombrevariacion = "macho";
		variacion = 0;
	}
	
	if(nombre == "Indeedee" && variacion == 3){
		nombrevariacion = "hembra";
	}
	
	if(nombre == "Basculegion" && variacion == 4){
		nombrevariacion = "macho";
		variacion = 0;
	}
	
	if(nombre == "Basculegion" && variacion == 5){
		nombrevariacion = "hembra";
	}
	
	if(nombre == "Ultra-Necrozma"){
		nombre = "Necrozma";
		nombrevariacion = "Ultra-Necrozma";
	}
	
	if(nombre == "Necrozma" && nombrevariacion != "normal" ){
		variacion = variacion + 1;
	}
	
	if(nombre == "Zygarde" && variacion == 1){
		variacion = 0;
	}
	
	if(nombre == "Zygarde" && variacion == 0){
		variacion = 1;
	}
	
	if(nombre == "Scatterbug") return;
	if(nombre == "Spewpa") return;
	
	
	var flag = 0;
	for(var i = 0; i < excepciones.length; i++){
		if(nombrevariacion.includes(excepciones[i])){
			flag = 1;
		}
	}
	
	if(nombrevariacion == "") nombrevariacion = "normal";
	
	if (flag == 0){
		if(nombrevariacion != "de Alola" && nombrevariacion != "de Galar" && nombrevariacion != "de Hisui" && nombrevariacion != "de Paldea"){
			if(nombre.startsWith("Mega-") || nombrevariacion != "normal"){
				insertaotros({"nombre": nombre, "variacion": nombrevariacion.replaceAll(nombre + " ", ""), "tipos": tipos, "flag":false});
			}
		}
	}
}

function insertaotros(poke){
	
	var name = poke.nombre;
	if(poke.nombre.startsWith("Mega-")){
		name = poke.nombre.replaceAll("Mega-", "");
	}
	if(otros[name] == null){
		otros[name] = [];
		otros[name].push(poke);
	}
	else{
		var flag = 0;
		for(var i = 0; i < otros[name].length; i++){
			if(otros[name][i].nombre == poke.nombre && otros[name][i].variacion == poke.variacion){
				flag = 1;
			}
		}
		if(flag == 0){
			otros[name].push(poke);
		}
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

function inthab(hab){

	var i = 0;
	try{
		while(pokelist[0]["habs"][i]["name"].replaceAll(" ", "") != validanamehab(hab).replaceAll(" ", "") && i < pokelist[0]["habs"].length){
			i++;
		}
			
		if (i == pokelist[0]["habs"].length){
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
		while(pokelist[0]["movs"][i]["name"].replaceAll(" ", "") != validaname(ataque).replaceAll(" ", "") && i < pokelist[0]["movs"].length){
			i++;
		}
			
		if (i == pokelist[0]["movs"].length){
			return -1;
		}
	}
	catch(error){
		return -1;
	}
	return i;
	
}

function intpoke(name){
	
	for(var i = 1; i < pokelist.length; i++){
		if(pokelist[i][0].name.replaceAll(" ", "") == name.replaceAll(" ", "")){
			return i;
		}
	}
	return -1;

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

function savedata(){
	var filename = "pokelist.json";
	var a = document.createElement("a");
	var file = new Blob([JSON.stringify(pokelist)], {type: "text/plain"});
	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();
	
	alert(filename + " guardado.");
}

function completainfo(){
	
	for(var i = 1; i < pokelist.length; i++){

		if(otros[pokelist[i][0].name] != null){
			var flag2 = false;
			for(var j = 0; j < otros[pokelist[i][0].name].length; j++){
				if(!otros[pokelist[i][0].name][j].flag){
					if(!flag2){
						pokelist[i][0].title = otros[pokelist[i][0].name][j].variacion;
						pokelist[i][0].tipo = otros[pokelist[i][0].name][j].tipos;
						flag2 = true;
					}
					else{
						pokelist[i][1].title = otros[pokelist[i][0].name][j].variacion;
						pokelist[i][1].tipo = otros[pokelist[i][0].name][j].tipos;
					}
					otros[pokelist[i][0].name][j].flag = true;
				}
			}
		}
	}
	habilitacion();	
}

function habilitacion(){
	document.getElementById("pokelist").innerHTML = "";
	document.getElementById("Gen1").disabled = false;
	document.getElementById("Gen2").disabled = false;
	document.getElementById("Gen3").disabled = false;
	document.getElementById("Gen4").disabled = false;
	document.getElementById("Gen5").disabled = false;
	document.getElementById("Gen6").disabled = false;
	document.getElementById("Gen7").disabled = false;
	document.getElementById("Gen8").disabled = false;
	document.getElementById("Gen9").disabled = false;
	document.getElementById("Otrasformas").disabled = false;
}

function animar(){
	
	flaganimado.disabled = true;
	
	setTimeout(() => { 
		flaganimado.disabled = false;							
	}, (5000));
	
	document.querySelectorAll(".imgcontainer").forEach((poke) => {

		if(flaganimado.checked){
			pokelist[poke.dataset.poke * 1].forEach((forma) => {
				if(poke.dataset.nombre == forma.name && poke.dataset.forma == forma.title && forma.frontanim != null){
					poke.firstElementChild.src = forma.frontanim;
				}
			});
			
			new Promise(() => {
				poke.firstElementChild.onload = () => {
					var h = poke.firstElementChild.naturalHeight;
					var w = poke.firstElementChild.naturalWidth;
					
					if (w < 100 && h < 100){
						poke.firstElementChild.height = h;
						poke.firstElementChild.width = w;
					}
					else if(h > w){
						poke.firstElementChild.height = 100;
						poke.firstElementChild.width = w * 100/h;
					}
					else{
						poke.firstElementChild.height = h * 100/w;
						poke.firstElementChild.width = 100;
					}
				}
			});
		}
		else{
			pokelist[poke.dataset.poke * 1].forEach((forma) => {
				if(poke.dataset.nombre == forma.name && poke.dataset.forma == forma.title){
					poke.firstElementChild.src = forma.front;
				}
			});
			
			new Promise(() => {
				poke.firstElementChild.onload = () => {
					var h = poke.firstElementChild.naturalHeight;
					var w = poke.firstElementChild.naturalWidth;
					
					if (w < 100 && h < 100){
						poke.firstElementChild.height = h;
						poke.firstElementChild.width = w;
					}
					else if(h > w){
						poke.firstElementChild.height = 100;
						poke.firstElementChild.width = w * 100/h;
					}
					else{
						poke.firstElementChild.height = h * 100/w;
						poke.firstElementChild.width = 100;
					}
				}
			});
		}
	});
}