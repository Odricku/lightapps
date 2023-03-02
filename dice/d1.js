var largo = 150;
var escala = 1;

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
			rollDice();
		}else{
			dice.forEach(die => {
				lanzar(die, true);
			});
		}
	editdice.style.display = "none";
	}
}

function preparaescala(die){
	
	var pos = die.parentElement.getBoundingClientRect();
	var posactual = die.parentElement.style.transform.match(/-*[0-9]*px/g);
		
	flag = true;
	global = 0;
	
	while(flag){
		var posx = getRandomNumber(100, container.clientWidth - 120);
		var posy = getRandomNumber(13, container.clientHeight - 180);
		var equis = posx - pos.x + parseInt(posactual[0].replace("px",""));
		if(equis > container.clientWidth -120){
			equis = container.clientWidth -120;
		}
		var ygriega = posy - pos.y + parseInt(posactual[1].replace("px",""));
		if(ygriega > container.clientHeight -180){
			ygriega = container.clientHeight - 180;
		}
		var angulo = getRandomNumber(0, 45);
	
		cont = 0;
		
		var fc = getfuturecoords(angulo, posx, posy);
		posiciones.forEach(posicion => {
			if(inside(fc.n.x, fc.n.y, posicion)
				||inside(fc.e.x, fc.e.y, posicion)
				||inside(fc.o.x, fc.o.y, posicion)
				||inside(fc.s.x, fc.s.y, posicion)
				||inside(posicion.n.x, posicion.n.y, fc)
				||inside(posicion.e.x, posicion.e.y, fc)
				||inside(posicion.o.x, posicion.o.y, fc)
				||inside(posicion.s.x, posicion.s.y, fc)
				||centros(posicion, fc)
			){
				cont++;
			}
		});
		
		global++;
		
		if(cont == 0){
			fc["id"] = die.id;
			transformaciones[die.id] = die.parentElement.style.transform.replace(/-*[0-9]*deg/, angulo + "deg").replace(/-*[0-9]*px, -*[0-9]*px/, Math.trunc(equis) + "px, " + Math.trunc(ygriega) + "px").replace(/scale\(.*\)/, "scale(" + escala + ")");
			posiciones.push(fc);
			die.parentElement.style.transform = 
			flag = false;
		}
		if(global >= 50){
			escala = escala - 0.1;
			largo = largo * escala;
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
	
	if(Math.pow((posicion.n.x + posicion.s.x)/2 - (fc.n.x + fc.s.x)/2 , 2) + Math.pow((posicion.n.y + posicion.s.y)/2 - (fc.n.y + fc.s.y)/2 , 2) <= Math.pow(largo, 2))
		return true;
	return false;
	
}

function inside(x, y , pos){
	
	var contlargos = 0;
	
	if(Math.pow(x - pos.n.x, 2) + Math.pow(y - pos.n.y,2) <= 2* Math.pow(largo, 2)){
		contlargos++;
	}
	if(Math.pow(x - pos.e.x, 2) + Math.pow(y - pos.e.y,2) <= 2* Math.pow(largo, 2)){
		contlargos++;
	} 
	if(Math.pow(x - pos.o.x, 2) + Math.pow(y - pos.o.y,2) <= 2* Math.pow(largo, 2)){
		contlargos++;
	} 
	if(Math.pow(x - pos.s.x, 2) + Math.pow(y - pos.s.y,2) <= 2* Math.pow(largo, 2)){
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
	dot1.style.top = posiciones[posi].n.y + "px";
	dot1.style.left = posiciones[posi].n.x + "px";
	
	dot2.style.position = "absolute";
	dot2.classList.add("dot");
	dot2.style.float = "left";
	dot2.style.top = posiciones[posi].e.y + "px";
	dot2.style.left = posiciones[posi].e.x + "px";
	
	dot3.style.position = "absolute";
	dot3.classList.add("dot");
	dot3.style.float = "left";
	dot3.style.top = posiciones[posi].o.y + "px";
	dot3.style.left = posiciones[posi].o.x + "px";
	
	dot4.style.position = "absolute";
	dot4.classList.add("dot");
	dot4.style.float = "left";
	dot4.style.top = posiciones[posi].s.y + "px";
	dot4.style.left = posiciones[posi].s.x + "px";
	
	document.getElementsByTagName("body")[0].appendChild(dot1);
	document.getElementsByTagName("body")[0].appendChild(dot2);
	document.getElementsByTagName("body")[0].appendChild(dot3);
	document.getElementsByTagName("body")[0].appendChild(dot4);
	
}

function choque(){
	const dice = [...document.querySelectorAll(".die-list")];
	
	dice.forEach(die => {
		dice.forEach(die2 => {
			if(die.id != die2.id && Math.abs(die.parentElement.getBoundingClientRect().x - die2.parentElement.getBoundingClientRect().x) + Math.abs(die.parentElement.getBoundingClientRect().y - die2.parentElement.getBoundingClientRect().y) < largo){
				revolver(die);
			}
		});
	});
	
	return false;
	
}


function getfuturecoords(angulo, posx, posy){
	
	return {
		n:{x: posx, y: posy},
		e:{x: Math.trunc(posx + largo * Math.cos(Math.PI * angulo/180)), y: Math.trunc(posy + largo * Math.sin(Math.PI * angulo/180))},
		o:{x: Math.trunc(posx - largo * Math.sin(Math.PI * angulo/180)), y: Math.trunc(posy + largo * Math.cos(Math.PI * angulo/180))},
		s:{x: Math.trunc(posx - largo * Math.sin(Math.PI * angulo/180) + largo * Math.cos(Math.PI * angulo/180)), y: Math.trunc(posy + largo * Math.cos(Math.PI * angulo/180) + largo * Math.sin(Math.PI * angulo/180))}
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

var cantDado = 1;
var dicefocus;

function addDado(){
	
	var dice = document.createElement("div");
	
	dice.classList.add("dice");
	dice.style.cssFloat = "left";
	dice.style.top = "0";
	dice.style.left = "0";
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
		face.dataset.side = i.toString();

		for(var k = 0; k < i;k++){
			var dot = document.createElement("span");
			dot.classList.add("dot");
			face.appendChild(dot);
		}
		forma.appendChild(face);
	}
	dice.appendChild(forma);
	dice.appendChild(name);
	container.appendChild(dice);
	
	dicefocus = forma;
	cantDado++;
	
	const dados = [...document.querySelectorAll(".die-list")];

	redflag = true;
	
	while(redflag){
		redflag = false;
		posiciones = [];
		transformaciones = {};
		dados.forEach(die => {
			preparaescala(die);
		});
		if(!redflag){
			dados.forEach(die => {
				lanzar(die, false);
			});
		}
	}

}

function removeDado(){

	dicefocus.parentElement.remove();
	ocultarEdit();

}

function changeName(node){

	dicefocus = node;
	if(dicefocus.style.backgroundColor != ""){
		colorDado.value = dicefocus.style.backgroundColor;
	}
	else{
		colorDado.value = "#FFFFFF";
	}
	if(dicefocus.firstElementChild.firstElementChild.style.Color != ""){
		colorPunto.value = dicefocus.firstElementChild.firstElementChild.style.Color
	}
	else{
		colorPunto.value = "#676767";
	}
	colorPunto.value = dicefocus.firstElementChild.firstElementChild.style.Color;
	nombreDado.value = dicefocus.nextElementSibling.innerHTML
	editdice.style.display = "block";
	nombreDado.value = dicefocus.nextElementSibling.innerHTML;

}

function changenombre(){
	
	dicefocus.nextElementSibling.innerHTML = nombreDado.value;

}

function changecolor(){
	
	dicefocus.nextElementSibling.style.color = colorDado.value;
	[...dicefocus.querySelectorAll(".die-item")].forEach(side => {
		side.style.backgroundColor = colorDado.value;
	});

}

function changepunto(){
	
	[...dicefocus.querySelectorAll(".dot")].forEach(dot => {
		dot.style.backgroundColor = colorPunto.value;
	});
	
}

function ocultarEdit(){
	editdice.style.display = "none";
}
