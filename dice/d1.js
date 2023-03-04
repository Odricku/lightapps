var largo = 128;
var escala = 1;
var neon = false;

var movs = ["transition: transform 1.25s ease-out;", "transition: transform 1s ease 0.25s;", ""]

function rollDice() {
	const dice = [...document.querySelectorAll(".die-list")];
	if(dice.length == 0){
		cantDado = 0;
		addDado();
	}
	else{
		posiciones = [];
		transformaciones = {};
		redflag = false;
		dice.forEach(die => {
			preparaescala(die);
		});
		if(redflag){
			escala = escala - 0.1;
			rollDice();
		}else{
			if(escala < 1)
				escala = escala + 0.1;
			dice.forEach(die => {
				lanzar(die, true);
			});
		}
	editdice.style.display = "none";
	}
}

function preparaescala(die){
	
	var pos = die.parentElement.getBoundingClientRect();
	
	var posactual = die.parentElement.style.transform.match(/-*[0-9\.]*px/g);
		
	flag = true;
	global = 0;
	
	while(flag){
		var angulo = getRandomNumber(-45, 45);
		
		var posx = getRandomNumber(Math.max(0, 0 + angulo * 1.4 * largo * escala/90), container.clientWidth - 1.4 * largo * escala);
		var posy = getRandomNumber(Math.max(0, - angulo * 1.4 * largo * escala/90), container.clientHeight - Math.max(largo * escala, angulo * 1.4 * largo * escala/45));
		var equis = Math.min(posx - pos.x + parseInt(posactual[0].replace("px","")), container.clientWidth - 1.4 * largo * escala);
		var ygriega = Math.min(posy - pos.y + parseInt(posactual[1].replace("px","")), container.clientHeight - Math.max(largo * escala, angulo * 1.4 * largo * escala/45));

		cont = 0;
		
		var fc = getfuturecoords(angulo, posx, posy);
		posiciones.forEach(posicion => {
			if(centros(posicion, fc) 
				||inside(fc.n.x, fc.n.y, posicion)
				||inside(fc.e.x, fc.e.y, posicion)
				||inside(fc.o.x, fc.o.y, posicion)
				||inside(fc.s.x, fc.s.y, posicion)
			){
				cont++;
			}
		});
		
		global++;
		
		if(cont == 0){
			fc["id"] = die.id;
			transformaciones[die.id] = die.parentElement.style.transform.replace(/-*[0-9\.]*deg/, angulo + "deg").replace(/-*[0-9\.]*px, -*[0-9\.]*px/, Math.trunc(equis) + "px, " + Math.trunc(ygriega) + "px").replace(/scale\(.*\)/, "scale(" + escala + ")");
			posiciones.push(fc);
			flag = false;
		}
		if(global >= 100){
			redflag = true;
			flag = false;
		}
	}
}

function lanzar(die, lanzamiento){
	if(lanzamiento){
		toggleClasses(die);
		die.dataset.roll = getRandomNumber(1, 6);
	}
	die.parentElement.style.transform = transformaciones[die.id];
	
}

var redflag = false;

var posiciones = [];
var transformaciones = {};

function centros(posicion, fc){
	
	if(Math.pow((posicion.n.x + posicion.s.x)/2 - (fc.n.x + fc.s.x)/2 , 2) + Math.pow((posicion.n.y + posicion.s.y)/2 - (fc.n.y + fc.s.y)/2 , 2) <= Math.pow(largo * escala, 2))
		return true;
	return false;
	
}

function inside(x, y , pos){
	
	var contlargos = 0;
	
	if(Math.pow(x - pos.n.x, 2) + Math.pow(y - pos.n.y,2) <= 2* Math.pow(largo * escala, 2)){
		contlargos++;
	}
	if(Math.pow(x - pos.e.x, 2) + Math.pow(y - pos.e.y,2) <= 2* Math.pow(largo * escala, 2)){
		contlargos++;
	} 
	if(Math.pow(x - pos.o.x, 2) + Math.pow(y - pos.o.y,2) <= 2* Math.pow(largo * escala, 2)){
		contlargos++;
	} 
	if(Math.pow(x - pos.s.x, 2) + Math.pow(y - pos.s.y,2) <= 2* Math.pow(largo * escala, 2)){
		contlargos++
	}
	if(contlargos >= 3){
		return true;
	}
	
	
	return false;

}

function dibujadots(posi){
	
	var dot1 = document.createElement("span")
	var dot2 = document.createElement("span")
	var dot3 = document.createElement("span")
	var dot4 = document.createElement("span")
	
	dot1.style.position = "absolute";
	dot1.classList.add("dot");
	dot1.style.float = "left";
	dot1.style.top = posiciones[posi].n.y - 10 + "px";
	dot1.style.left = posiciones[posi].n.x - 10 + "px";
	
	dot2.style.position = "absolute";
	dot2.classList.add("dot");
	dot2.style.float = "left";
	dot2.style.top = posiciones[posi].e.y - 10 + "px";
	dot2.style.left = posiciones[posi].e.x - 10 + "px";
	
	dot3.style.position = "absolute";
	dot3.classList.add("dot");
	dot3.style.float = "left";
	dot3.style.top = posiciones[posi].o.y - 10 + "px";
	dot3.style.left = posiciones[posi].o.x - 10 + "px";
	
	dot4.style.position = "absolute";
	dot4.classList.add("dot");
	dot4.style.float = "left";
	dot4.style.top = posiciones[posi].s.y - 10 + "px";
	dot4.style.left = posiciones[posi].s.x - 10 + "px";
	
	document.getElementsByTagName("body")[0].appendChild(dot1);
	document.getElementsByTagName("body")[0].appendChild(dot2);
	document.getElementsByTagName("body")[0].appendChild(dot3);
	document.getElementsByTagName("body")[0].appendChild(dot4);
	
}


function getfuturecoords(angulo, posx, posy){
	
	return {
		n:{x: posx, y: posy},
		e:{x: Math.trunc(posx + largo * escala * Math.cos(Math.PI * angulo/180)), y: Math.trunc(posy + largo * escala * Math.sin(Math.PI * angulo/180))},
		o:{x: Math.trunc(posx - largo * escala * Math.sin(Math.PI * angulo/180)), y: Math.trunc(posy + largo * escala * Math.cos(Math.PI * angulo/180))},
		s:{x: Math.trunc(posx - largo * escala * Math.sin(Math.PI * angulo/180) + largo * escala * Math.cos(Math.PI * angulo/180)), y: Math.trunc(posy + largo * escala * Math.cos(Math.PI * angulo/180) + largo * escala * Math.sin(Math.PI * angulo/180))}
	};
	
	

}

function toggleClasses(die) {
	die.classList.toggle("odd-roll");
	die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
  
}

var cantDado = 0;
var dicefocus;

function addDado(){
	
	dados = [...document.querySelectorAll(".die-list")];

	dados.forEach(die => {
		die.parentElement.style.transform = die.parentElement.style.transform.replace(/-*[0-9\.]*px, -*[0-9\.]*px/, "0px, 0px");
	});
	
	var dice = document.createElement("div");
	
	dice.classList.add("dice");
	dice.style.transform = "translate(0px,0px) rotate(0deg) scale(" + escala + ")";
		
	var forma = document.createElement("ol");
	forma.setAttribute("onclick","changeName(this)");
	forma.id = "die-" + (cantDado + 1);
	forma.classList.add("die-list");
	forma.classList.add("even-roll");
	forma.dataset.roll = "1";
	
	var name = document.createElement("div");
	name.id = forma.id + "name"
	name.style.textAlign = "center";
	name.style.width = "100%";
	name.style.marginTop = "-140px";
	
	for(var i = 1; i < 7; i++){
		var face = document.createElement("li");
		face.classList.add("die-item");
		if(cantDado == 0){
			face.style.color = "#fefefe";
		}
		else{
			face.style.color = colorDado.value;
		}
		if(!neon){
			face.style.backgroundColor = colorDado.value;
		}else{
			face.classList.add("neon");
		}
		
		face.dataset.side = i.toString();

		for(var k = 0; k < i;k++){
			var dot = document.createElement("span");
			dot.classList.add("dot");
			if(cantDado == 0){
				dot.style.color = "#676767";
				dot.style.backgroundColor = "#676767";
			}
			else{
				dot.style.color = colorPunto.value;
				dot.style.backgroundColor = colorPunto.value;
				if(neon){
					dot.classList.add("neon");
				}
			}
			face.appendChild(dot);
		}
		forma.appendChild(face);
	}
	dice.appendChild(forma);
	dice.appendChild(name);
	container.appendChild(dice);
	
	dicefocus = forma;
	cantDado++;

	dados = [...document.querySelectorAll(".die-list")];

	redflag = true;
	
	while(redflag){
		redflag = false;
		posiciones = [];
		transformaciones = {};
		dados.forEach(die => {
			preparaescala(die);
		});
		if(!redflag){
			if(escala < 1)
				escala = escala + 0.1;
			dados.forEach(die => {
				die.parentElement.style.transform = transformaciones[die.id].replace(/-*[0-9\.]*px, -*[0-9\.]*px/, "0px, 0px").replace(/-*[0-9\.]*deg/, "0deg");
			});
		}
		else{
			escala = escala - 0.1;
		}
	}

}

function removeDado(){

	dicefocus.parentElement.remove();
	ocultarEdit();

}

function changeName(node){

	dicefocus = node;
	if(dicefocus.firstElementChild.style.color != ""){
		var color = dicefocus.firstElementChild.style.color.replace("rgb(","").replace(")").split(",");
		colorDado.value = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	else{
		colorDado.value = "#FFFFFF";
	}
	if(dicefocus.firstElementChild.firstElementChild.style.color != ""){
		var color = dicefocus.firstElementChild.firstElementChild.style.color.replace("rgb(","").replace(")").split(",");
		colorPunto.value = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
		
	}
	else{
		colorPunto.value = "#FFFFFF";
	}
	nombreDado.value = dicefocus.nextElementSibling.innerHTML
	editdice.style.display = "block";

}

function changenombre(){
	
	dicefocus.nextElementSibling.innerHTML = nombreDado.value;

}

function changecolor(){
	
	dicefocus.nextElementSibling.style.color = colorDado.value;
	[...dicefocus.querySelectorAll(".die-item")].forEach(side => {
		if(!neon){
			side.style.backgroundColor = colorDado.value;
		}
		side.style.color = colorDado.value;
	});

}

function changepunto(){
	
	[...dicefocus.querySelectorAll(".dot")].forEach(dot => {
		dot.style.backgroundColor = colorPunto.value;
		dot.style.color = colorPunto.value;
	});
	
}

function ocultarEdit(){
	editdice.style.display = "none";
}

function doneon(){
	if(!neon){
		neon = true;
		[...document.querySelectorAll(".dot")].forEach(dot => {
			dot.classList.add("neon");
		});
		[...document.querySelectorAll(".die-item")].forEach(lado => {
			lado.classList.add("neon");
			lado.style.backgroundColor = "";
		});
		container.classList.remove("mesa");
		editdice.classList.add("neon");
		onoff.classList.remove("off");
		onoff.classList.add("on");
	}
	else{
		neon = false;
		[...document.querySelectorAll(".dot")].forEach(dot => {
			dot.classList.remove("neon");
		});
		[...document.querySelectorAll(".die-item")].forEach(lado => {
			lado.classList.remove("neon");
			lado.style.backgroundColor = lado.style.color;
		});
		container.classList.add("mesa");
		editdice.classList.remove("neon");
		onoff.classList.add("off");
		onoff.classList.remove("on");
	}
	
}

addDado();