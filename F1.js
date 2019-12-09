function calculo() {
	randomiz();
	operatoria1();
}
function operatoria1(){
	var hpwiki = document.getElementsByName("base")[0].value;
	var ataquewiki = document.getElementsByName("base")[1].value;
	var ataquespwiki = document.getElementsByName("base")[2].value;
	var defensawiki = document.getElementsByName("base")[3].value;
	var defensaspwiki = document.getElementsByName("base")[4].value;
	var velocidadwiki = document.getElementsByName("base")[5].value;
	
	var evhp = document.getElementsByName("ev")[0].value;
	var evataque = document.getElementsByName("ev")[1].value;
	var evataquesp = document.getElementsByName("ev")[2].value;
	var evdefensa = document.getElementsByName("ev")[3].value;
	var evdefensasp = document.getElementsByName("ev")[4].value;
	var evvelocidad = document.getElementsByName("ev")[5].value;
	
	var nivel = document.getElementsByName("nivel")[0].value;
	var shiny = 0;
	if(document.getElementsByName("shiny")[0].checked){
		shiny = 1;
	}
	if(hpwiki.length == 0 || !/^([0-9])*$/.test(hpwiki)){
		alert("PS base no valido." );
	}
	else if(ataquewiki.length == 0 || !/^([0-9])*$/.test(ataquewiki) || ataquewiki < 0){
		alert("Ataque base no valido." );
	}
	else if(ataquespwiki.length == 0 || !/^([0-9])*$/.test(ataquespwiki) || ataquespwiki < 0){
		alert("Ataque Especial base no valido." );
	}
	else if(defensawiki.length == 0 || !/^([0-9])*$/.test(defensawiki) || defensawiki < 0){
		alert("Defensa base no valido." );
	}
	else if(defensaspwiki.length == 0 || !/^([0-9])*$/.test(defensaspwiki) || defensaspwiki < 0){
		alert("Defensa Especial base no valido." );
	}
	else if(velocidadwiki.length == 0|| !/^([0-9])*$/.test(velocidadwiki) || velocidadwiki < 0){
		alert("Velocidad base no valido." );
	}
	else if(evhp.length == 0 || !/^([0-9])*$/.test(evhp) || evhp > 25 || evhp < 0){
		alert("PS EV no valido." );
	}
	else if(evataque.length == 0 || !/^([0-9])*$/.test(evataque) || evataque > 25 || evataque < 0){
		alert("Ataque EV no valido." );
	}
	else if(evataquesp.length == 0 || !/^([0-9])*$/.test(evataquesp) || evataquesp > 25 || evataquesp < 0){
		alert("Ataque Especial EV no valido." );
	}
	else if(evdefensa.length == 0 || !/^([0-9])*$/.test(evdefensa) || evdefensa > 25 || evdefensa < 0){
		alert("Defensa EV no valido." );
	}
	else if(evdefensasp.length == 0 || !/^([0-9])*$/.test(evdefensasp) || evdefensasp > 25 || evdefensasp < 0){
		alert("Defensa Especial EV no valido." );
	}
	else if(evvelocidad.length == 0|| !/^([0-9])*$/.test(evvelocidad) || evvelocidad > 25 || evvelocidad < 0){
		alert("Velocidad EV no valido." );
	}
	else if(nivel.length == 0|| !/^([0-9])*$/.test(nivel) || nivel < 1){
		alert("Nivel no valido." );
	}
	else if(parseInt(evhp) + parseInt(evataque) + parseInt(evataquesp) + parseInt(evdefensa) + parseInt(evdefensasp) + parseInt(evvelocidad) > 50){
		alert("Se excede el limite de EV repartidos, recuerde que entre todas las estadistica la suma de EV debe ser menor o igual a 50, por favor verifique");
		alert(evhp + evataque + evataquesp + evdefensa + evdefensasp + evvelocidad);
	}				
	else{
		var hpiv = document.getElementsByName("iv")[0].value;
		var ataqueiv = document.getElementsByName("iv")[1].value;
		var ataquespiv = document.getElementsByName("iv")[2].value;
		var defensaiv = document.getElementsByName("iv")[3].value;
		var defensaspiv = document.getElementsByName("iv")[4].value;
		var velocidadiv = document.getElementsByName("iv")[5].value;
		
		var naturalezaataque = 0;
		var naturalezaataquesp = 0;
		var	naturalezadefensa = 0;
		var naturalezadefensasp = 0;
		var naturalezavelocidad = 0;
		
		if(document.getElementsByName("selplus")[0].value != document.getElementsByName("selminus")[0].value){
			switch(document.getElementsByName("selplus")[0].value){
				case "a": naturalezaataque = 1; break;
				case "ae": naturalezaataquesp = 1; break;
				case "d": naturalezadefensa = 1; break;
				case "de": naturalezadefensasp = 1; break;
				case "v": naturalezavelocidad = 1; break;
			}
			switch(document.getElementsByName("selminus")[0].value){
				case "a": naturalezaataque = 2; break;
				case "ae": naturalezaataquesp = 2; break;
				case "d": naturalezadefensa = 2; break;
				case "de": naturalezadefensasp = 2; break;
				case "v": naturalezavelocidad = 2; break;
			}
		}
		
		var shiny2 = 0
		if (shiny == 1){
			shiny2 = 0.2;
		}
		
		
		document.getElementsByName("res")[0].innerText = truncar((200 + (nivel * 5)) * (1 + shiny2 + calculoEV(evhp) + calculoIV(hpiv) + calculoBase(hpwiki)));
		document.getElementsByName("res")[1].innerText = truncar(1 + calculoEV(evataque)+calculoNat(naturalezaataque) + calculoIV(ataqueiv) + shiny2 + calculoBase(ataquewiki));
		document.getElementsByName("res")[2].innerText = truncar(1 + calculoEV(evataquesp) + calculoNat(naturalezaataquesp) + calculoIV(ataquespiv) + shiny2 + calculoBase(ataquespwiki));
		document.getElementsByName("res")[3].innerText = truncar(calculoRango(nivel) * (1 + calculoEV(evdefensa) + calculoIV(defensaiv) + calculoBase(defensawiki)+ calculoNat(naturalezadefensa) + shiny2));
		document.getElementsByName("res")[4].innerText = truncar(calculoRango(nivel) * (1 + calculoEV(evdefensasp) + calculoIV(defensaspiv) + calculoBase(defensaspwiki)+ calculoNat(naturalezadefensasp) + shiny2));
		document.getElementsByName("res")[5].innerText = truncar(velocidadwiki * (1 + calculoEV(evvelocidad) + calculoIV(velocidadiv) + shiny2 + calculoNat(naturalezavelocidad)));
		
		var velocidad = document.getElementsByName("res")[5].innerText;
		var casillas = 0;
		
		if ( velocidad <= 39 )
			casillas = 2;
		else if (velocidad >= 40 && velocidad <= 150)
			casillas = 3;
		else if (velocidad >= 151 && velocidad <= 225)
			casillas = 4;
		else if (velocidad > 225) 
			casillas = 5;			
		
		var bgpk = ["Scyther", "Gyarados", "snorlax", "dragonite", "charmander", "pikachu"];
		var bg = "https://andro4all.com/files/2019/02/Fondo-pantalla-pokemon-" + bgpk[Math.floor(Math.random() * 5) + 1] + "-400x702.jpg";
		
		document.getElementsByClassName("diploma")[0].style.background = "url('"+ bg +"') center";
		
		document.getElementsByName("resultado")[0].innerText = "- El HP de su pokémon es: " +  document.getElementsByName("res")[0].innerText + "\n" +
			"- Cualquier Ataque físico que lance su pokémon será multiplicado por: " + document.getElementsByName("res")[1].innerText + "\n" +
			"- Cualquier Ataque especial que lance su pokémon será multiplicado por: " + document.getElementsByName("res")[2].innerText + "\n" +
			"- La Defensa física de su pokémon es: " + document.getElementsByName("res")[3].innerText + "\n" +
			"-  Defensa especial de su pokémon es: " + document.getElementsByName("res")[4].innerText + "\n" +
			"- La Velocidad de su pokémon es: " + document.getElementsByName("res")[5].innerText + "\n" +
			"- Y puede desplazarse " + casillas + " casillas por turno\n" +
			"- La tabla correspondiente es la de: " +  (1 + shiny2 + calculoEV(evhp) + calculoIV(hpiv) + calculoBase(hpwiki)).toPrecision(2);
		
	}
}
function truncar( num ){
	
	var numStr = num + "";
	var pos = numStr.indexOf(".");
	
	if(pos == -1)
		return num;
	
	return num.toPrecision(pos + 1);
}
function calculoEV( ev ){
	if (ev >= 0 && ev <= 24)
		return 0;
	if (ev == 25)
		return 0.2;
}
function calculoBase( wiki ){
	if (wiki >= 0 && wiki <= 49)
		return -0.1;
	if (wiki >= 50 && wiki <= 100)
		return 0;
	if (wiki >= 101 && wiki <= 150)
		return 0.1;
	if (wiki >= 151 && wiki <= 200)
		return 0.2;
	if (wiki >= 201 && wiki <= 300)
		return 0.3;
}
function calculoIV( iv ){
	if (iv >= 0 && iv <= 19)
		return 0;
	if (iv >= 20 && iv <= 25)
		return 0.1;
	if (iv >= 26 && iv <= 30)
		return 0.2;
	if (iv == 31)
		return 0.3;
}
function calculoNat( nat ){

	if (nat == 0)
		return 0;
	if (nat == 1)
		return 0.1;
	if (nat == 2)
		return -0.1;
}
function calculoRango( nivel ){
	if (nivel >= 1 && nivel <= 20)
		return 0;
	if (nivel >= 21 && nivel <= 40)
		return 5;
	if (nivel >= 41 && nivel <= 60)
		return 10;
	if (nivel >= 61 && nivel <= 80)
		return 15;
	if (nivel >= 81 && nivel <= 100)
	return 20;
}
function naturaleza(){
	switch(document.getElementsByName("selplus")[0].value){
		case "a": 
			switch(document.getElementsByName("selminus")[0].value){
				case "a": document.getElementsByName("naturaleza")[0].innerText = "Fuerte"; break;
				case "ae": document.getElementsByName("naturaleza")[0].innerText = "Firme"; break;
				case "d": document.getElementsByName("naturaleza")[0].innerText = "Huraña"; break;
				case "de": document.getElementsByName("naturaleza")[0].innerText = "Pícara"; break;
				case "v": document.getElementsByName("naturaleza")[0].innerText = "Audaz"; break;
			}
			break;
		case "ae":
			switch(document.getElementsByName("selminus")[0].value){
				case "a": document.getElementsByName("naturaleza")[0].innerText = "Modesta"; break;
				case "ae": document.getElementsByName("naturaleza")[0].innerText = "Tímida"; break;
				case "d": document.getElementsByName("naturaleza")[0].innerText = "Afable"; break;
				case "de": document.getElementsByName("naturaleza")[0].innerText = "Alocada"; break;
				case "v": document.getElementsByName("naturaleza")[0].innerText = "Mansa"; break;
			}
			break;
		case "d":
			switch(document.getElementsByName("selminus")[0].value){
				case "a": document.getElementsByName("naturaleza")[0].innerText = "Osada"; break;
				case "ae": document.getElementsByName("naturaleza")[0].innerText = "Agitada"; break;
				case "d": document.getElementsByName("naturaleza")[0].innerText = "Dócil"; break;
				case "de": document.getElementsByName("naturaleza")[0].innerText = "Floja"; break;
				case "v": document.getElementsByName("naturaleza")[0].innerText = "Plácida"; break;
			}
			break;
		case "de":
			switch(document.getElementsByName("selminus")[0].value){
				case "a": document.getElementsByName("naturaleza")[0].innerText = "Serena"; break;
				case "ae": document.getElementsByName("naturaleza")[0].innerText = "Cauta"; break;
				case "d": document.getElementsByName("naturaleza")[0].innerText = "Amable"; break;
				case "de": document.getElementsByName("naturaleza")[0].innerText = "Rara"; break;
				case "v": document.getElementsByName("naturaleza")[0].innerText = "Grosera"; break;
			}
			break;
		case "v":
			switch(document.getElementsByName("selminus")[0].value){
				case "a": document.getElementsByName("naturaleza")[0].innerText = "Miedosa"; break;
				case "ae": document.getElementsByName("naturaleza")[0].innerText = "Alegre"; break;
				case "d": document.getElementsByName("naturaleza")[0].innerText = "Activa"; break;
				case "de": document.getElementsByName("naturaleza")[0].innerText = "Ingenua"; break;
				case "v": document.getElementsByName("naturaleza")[0].innerText = "Seria"; break;
			}
			break;
	}
}
function randomiz(){
	var cant = 1;
	var time = 2;
	
	for(var i = 0; i < document.getElementsByName("iv").length; i++){
		if(document.getElementsByName("iv")[i].value.length == 0 ||!/^([0-9])*$/.test(document.getElementsByName("iv")[i].value)){
			random(0, time * (++cant), i);
		}
	}
	cant = 1;
}
function random(pos, maxi, num) {
	if(pos != maxi){
		document.getElementsByName("iv")[num].style.fontWeight="normal"
		document.getElementsByName("iv")[num].value = Math.floor(Math.random() * 32);
		setTimeout(() => { random(pos + 1, maxi, num) }, 100);
	}
	else{
		document.getElementsByName("iv")[num].style.fontWeight="bold"
	}
}
function clean(){
	for(var i = 0; i < document.getElementsByName("iv").length; i++){
		document.getElementsByName("iv")[i].value = "";
		document.getElementsByName("res")[i].value = "";
		document.getElementsByName("iv")[i].style.fontWeight="normal"
	}
}
function exportar() {
	var data = "";
	
	for(var i = 0; i < document.getElementsByName("iv").length; i++){
		if(document.getElementsByName("iv")[i].value.length == 0 ||!/^([0-9])*$/.test(document.getElementsByName("iv")[i].value)||document.getElementsByName("ev")[i].value.length == 0 ||!/^([0-9])*$/.test(document.getElementsByName("ev")[i].value)||document.getElementsByName("base")[i].value.length == 0 ||!/^([0-9])*$/.test(document.getElementsByName("base")[i].value)){
			alert("Hay casillas en blanco o no numericas.")
			return;
		}
		else{
			data = data + document.getElementsByName("iv")[i].value +";" + document.getElementsByName("ev")[i].value + ";" + document.getElementsByName("base")[i].value + ";";
		}
	}
	
	if (document.getElementsByName("nivel")[0].value.length == 0 ||!/^([0-9])*$/.test(document.getElementsByName("nivel")[0].value)|| document.getElementsByName("nivel")[0].value < 1 || document.getElementsByName("nivel")[0].value > 100 ){
		alert("Nivel no valido.")
		return;
	}
	data = data + document.getElementsByName("nivel")[0].value +";";
	
	if(document.getElementsByName("shiny")[0].checked){
		data = data + "1;";
	}
	else{
		data = data + "0;";
	}
	
	data = data + document.getElementsByName("selplus")[0].value + ";" + document.getElementsByName("selminus")[0].value;
	
	var filename = prompt("Ingrese en nombre de su pokémon", "Petreds");
	if(filename == null)
		return;

    var file = new Blob([data], {type: "text/plain"});
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
	alert(filename + " guardado.");
}
function leerArchivo(e) {
	var archivo = e.target.files[0];
	if (!archivo) {
		return;
	}
	var lector = new FileReader();
	lector.onload = function(e) {
		var contenido = e.target.result;
		cargacontenido(contenido);
	};
	lector.readAsText(archivo);
}

function cargacontenido( contenido ){
	var pos = 0;
	var data = contenido.split(";");
	for(var i =0; i < 6; i++){
		document.getElementsByName("iv")[i].value = data[pos*3];
		document.getElementsByName("ev")[i].value = data[pos*3 + 1];
		document.getElementsByName("base")[i].value = data[pos*3 + 2];
		pos++;
	}
	document.getElementsByName("nivel")[0].value = data[18];
	if(data[19] == 1)
		document.getElementsByName("shiny")[0].checked = true;
	
	document.getElementsByName("selplus")[0].value = data[20];
	document.getElementsByName("selminus")[0].value = data[21];
	
	importar();
	calculo();
}

function importar(){
	if (document.getElementById("fileinput").style.visibility == "visible")
		document.getElementById("fileinput").style.visibility = "hidden";
	else
		document.getElementById("fileinput").style.visibility = "visible";
}

window.onload = function(){
  document.getElementById("fileinput").addEventListener("change", leerArchivo, false);
}
