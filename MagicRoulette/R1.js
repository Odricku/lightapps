var pc = ["https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20DG.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20DRAW.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20FG.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20GB.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20GMOD.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta GTA.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20HFF.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20HS.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20JMC.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20JMD.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20JMP.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20LL.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20MOD.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20OC2.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20PA.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20PP.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20PU.png", "https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20RL.png", "https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20SR.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20UCH.png"];
var cel =["https://www.odricku.cl/resources/img/tarjetas/Tarjeta JMD.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20JMP.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20PU.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20SG.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20BF.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20UNO.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20DRAW.png","https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20PS.png", "https://www.odricku.cl/resources/img/tarjetas/Tarjeta%20G.png"];
var ruletaclasica =['text:1;#ffffff;#ff0000', 'text:2;#ffffff;#000000', 'text:3;#ffffff;#ff0000', 'text:4;#ffffff;#000000', 'text:5;#ffffff;#ff0000', 'text:6;#ffffff;#000000', 'text:7;#ffffff;#ff0000', 'text:8;#ffffff;#000000', 'text:9;#ffffff;#ff0000', 'text:10;#ffffff;#000000', 'text:11;#ffffff;#000000', 'text:12;#ffffff;#ff0000', 'text:13;#ffffff;#000000', 'text:14;#ffffff;#ff0000', 'text:15;#ffffff;#000000', 'text:16;#ffffff;#ff0000', 'text:17;#ffffff;#000000', 'text:18;#ffffff;#ff0000', 'text:19;#ffffff;#ff0000', 'text:20;#ffffff;#000000', 'text:21;#ffffff;#ff0000', 'text:22;#ffffff;#000000', 'text:23;#ffffff;#ff0000', 'text:24;#ffffff;#000000', 'text:25;#ffffff;#ff0000', 'text:26;#ffffff;#000000', 'text:27;#ffffff;#ff0000', 'text:28;#ffffff;#000000', 'text:29;#ffffff;#000000', 'text:30;#ffffff;#ff0000', 'text:31;#ffffff;#000000', 'text:32;#ffffff;#ff0000', 'text:33;#ffffff;#000000', 'text:34;#ffffff;#ff0000', 'text:35;#ffffff;#000000', 'text:36;#ffffff;#ff0000', 'text:0;#ffffff;#008f18'];
var custom = []
var names = [];
var num = 0;

var regex = /\-{0,1}(\d+)/g;

let timerId;
var flag = 1;
var flaggirointerno = true;

var audioLoop = new Audio('https://www.odricku.cl/resources/media/audio/Item roulette Loop.mp3');
audioLoop.loop = true;
audioLoop.volume = 0.3;
var audioEnd = new Audio('https://www.odricku.cl/resources/media/audio/Item roulette End.mp3');
audioEnd.volume = 0.3;

function init(){
	if(document.URL.indexOf("?") != -1){
		try {
			custom = JSON.parse(window.atob(decodeURI(document.URL.split("?")[1])));
			importar();
			rellenoInicial(2);
		} catch (error) {
			//console.error("Importación Invalida");
			
			console.error(error);
		}
	}else{
		rellenoInicial(2);
	}
}

function rellenoInicial(mode){
	if(flag == 1){

		if(mode == 0){
			custom = pc;
		}else if(mode == 1){
			custom = cel;
		}
			
		slot1.innerHTML = "";
		slot2.innerHTML = "";
		slot3.innerHTML = "";
		slot4.innerHTML = "";
		slot5.innerHTML = "";
		slot6.innerHTML = "";
		
		names = null;
		names = Object.create(custom);

		if(flagrandom.checked){
			for(var i = 0; i < names.length; i++){

				num = Math.floor(Math.random() * names.length);
				[names[i], names[num]] = [names[num], names[i]];
			
			}
		}
		
		if(names.length != 0){
			var iteracion = 0;
			while(names.length < 6){
				for(var i = 0; i < custom.length; i++){
					names.push(custom[i]);
				}
				iteracion++;
			}
			slot1.appendChild(createContent(names[num++ % names.length], "elem"));
			slot2.appendChild(createContent(names[num++ % names.length], "elem"));
			slot3.appendChild(createContent(names[num++ % names.length], "elem"));
			slot4.appendChild(createContent(names[num++ % names.length], "elem"));
			slot5.appendChild(createContent(names[num++ % names.length], "elem"));
			slot6.appendChild(createContent(names[num++ % names.length], "elem"));
			
		
		}
		else{
			
			slot1.appendChild(createContent("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png", "elem"));
			slot2.appendChild(createContent("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png", "elem"));
			slot3.appendChild(createContent("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png", "elem"));
			slot4.appendChild(createContent("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png", "elem"));
			slot5.appendChild(createContent("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png", "elem"));
			slot6.appendChild(createContent("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png", "elem"));
			
			names.push("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png");
			names.push("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png");
			names.push("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png");
			names.push("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png");
			names.push("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png");
			names.push("https://www.odricku.cl/resources/img/tarjetas/Placeholder.png");
		}
			
		crearPizza();
	}	
}

function createContent(content, clase){
	if(content.startsWith("text:")){
		var divelem = document.createElement("div");
		divelem.classList.add(clase);
		var infoelem = content.split(";");
		var a = document.createElement("a");
		a.innerText = infoelem[0].replace("text:", "");
		divelem.appendChild(a);
		 
		divelem.style.color = infoelem[infoelem.length - 2];
		divelem.style.backgroundColor = infoelem[infoelem.length - 1];
		divelem.style.fontSize = "50px";
		divelem.dataset.id = custom.indexOf(content);
		
		return divelem;
	}
	else{
		var imgelem = document.createElement("img");
		imgelem.classList.add(clase);
		imgelem.src = content;
		imgelem.dataset.id = custom.indexOf(content);
		
		return imgelem;
	}	
}

function girar(velGiro){
	edit.style.display = "none";
	if(names.length > 3){
	
		if(flag == 1){
			audioLoop.play();
			flag = 0;
			if(tombola.style.display != 'none'){
				
				var angulo = 60 * (Math.floor(Math.random() * (10 * names.length + 1)) + names.length * velGiro);
				
				var finales = ["(0.3,0.18,0.83,1.05)", "(0.14,0.13,0.42,1)", "(.32,1.01,.99,1.02)"];
				var finalactual = Math.floor(Math.random() * finales.length);
				
				[...tombola.querySelectorAll(".divcontainer")].forEach(elem => {
					elem.style.transition = "transform " + velGiro + "s cubic-bezier" + finales[finalactual];
					elem.vuelta = true;
					elem.style.transform = elem.style.transform.replace(/-*[0-9\.]*deg/, parseInt(elem.style.transform.match(/-*[0-9\.]*deg/)[0].replace("deg","")) + angulo + "deg");
				});
				
				timerId = setInterval(()=> {
					
					[...tombola.querySelectorAll(".divcontainer")].forEach(elem => {
						var anguloactual = parseFloat(window.getComputedStyle(elem,null)['-webkit-transform'].split(',')[5]);
						if(anguloactual > 0){
							if(!elem.vuelta){
								elem.vuelta = true;
							}
						}else{
							if(elem.vuelta){
								elem.firstElementChild.remove();
								elem.appendChild(createContent(names[num++ % names.length], "elem"));
								elem.vuelta = false;
							}
						}
					});
				},50);
				
				setTimeout(() => { 
					clearInterval(timerId);
					tombola.querySelectorAll(".divcontainer").forEach(elem => {
						elem.style.transition = "";
						var angulomaestro = parseInt(elem.style.transform.match(/-*[0-9\.]*deg/)[0].replace("deg",""))%360;
						if(angulomaestro == 0){
							winnershow(elem.firstElementChild);
							setTimeout(() => {
								winnerunshow();
							}, (5000));
						}
						else if(angulomaestro > 90 ){
							elem.style.transform = elem.style.transform.replace(/-*[0-9\.]*deg/, (angulomaestro - 360) + "deg");
						}
						else{
							elem.style.transform = elem.style.transform.replace(/-*[0-9\.]*deg/, angulomaestro + "deg");
						}
					});
					flag = 1;
					audioLoop.pause();
					audioEnd.play();

					num = num % names.length;
					
					setTimeout(() => { 
						confetticontainer.style.display = "none";
					}, (5000));
					
				}, (1000 * velGiro));
				
			}
			else if(pizza.parentElement.style.display != 'none'){
				
				var listTarj = pizza.querySelectorAll(".slice-cont");

				var angulo = 360/listTarj.length * (Math.floor(Math.random() * (10 * listTarj.length + 1)) + listTarj.length * velGiro);
				
				var finales = ["(0.14, 0.62, 0.44, 1)", "(0.11, 0.68, 0.73, 1.02)", "(0.11, 0.68, 0.77, 0.96)"];
				var finalactual = Math.floor(Math.random() * finales.length);
				
				var angulofinal = parseFloat(pizza.style.transform.match(/-*[0-9\.]*deg/)[0].replace("deg","")) + angulo;
				
				cono.style.transition = "transform 5s cubic-bezier" + finales[1];
				cono.style.transform = cono.style.transform.replace(/-*[0-9\.]*deg/, "3600deg");
				if(flaggirointerno){
					pizza.style.transition = "transform " + velGiro + "s cubic-bezier" + finales[finalactual];
					pizza.style.transform = pizza.style.transform.replace(/-*[0-9\.]*deg/, angulofinal + "deg");
				}
				else{
					bolacontainer.style.transition = "transform " + velGiro + "s cubic-bezier" + finales[finalactual];
					arrowcontainer.style.transition = "transform " + velGiro + "s cubic-bezier" + finales[finalactual];
					bolacontainer.style.transform = bolacontainer.style.transform.replace(/-*[0-9\.]*deg/, angulofinal + "deg");	
					arrowcontainer.style.transform = arrowcontainer.style.transform.replace(/-*[0-9\.]*deg/, angulofinal + "deg");
				}				
				setTimeout(() => { 
					clearInterval(timerId);
					var minerror = 360;
					ganador = -1;
					anguloganador = 360;
					
					listTarj.forEach(elem => {
						
						angulofinal = angulofinal % 360;
						if(flaggirointerno)
							var anguloactual = 360 - parseFloat(elem.style.transform.match(/-*[0-9\.]*deg/)[0].replace("deg",""));
						else
							var anguloactual = parseFloat(elem.style.transform.match(/-*[0-9\.]*deg/)[0].replace("deg",""));
						if(Math.abs(anguloactual - angulofinal) < minerror){
							minerror = Math.abs(anguloactual - angulofinal);
							ganador = elem.firstElementChild.firstElementChild.dataset.id;
							anguloganador = anguloactual;
						}
					});

					winnershow(pizza.querySelector(".tarjetapizza[data-id='" + ganador + "']"));
					
					setTimeout(() => {
						if(flaggirointerno){
							pizza.style.transition = "transform 0s linear";
							pizza.style.transform = pizza.style.transform.replace(/-*[0-9\.]*deg/, anguloganador + "deg");
						}
						else{
							bolacontainer.style.transition = "transform 0s linear";							
							arrowcontainer.style.transition = "transform 0s linear";
							bolacontainer.style.transform = bolacontainer.style.transform.replace(/-*[0-9\.]*deg/, anguloganador + "deg");
							arrowcontainer.style.transform = arrowcontainer.style.transform.replace(/-*[0-9\.]*deg/, anguloganador + "deg");
						}
						cono.style.transition = "transform 0s linear";
						cono.style.transform = cono.style.transform.replace(/-*[0-9\.]*deg/, "0deg");
					}, (200));

					setTimeout(() => { 
						
						winnerunshow();
						flag = 1;
					}, (5000));
					
					audioLoop.pause();
					audioEnd.play();
										
				}, (1000 * velGiro));
			}
		}
	}
	if (flagrender){
		render();
		flagrender = false;
	}
}
var anguloganador = null;

function winnershow(winnerelem){
	
	if(winnerelem.naturalHeight == null){
								
		var colortexto = winnerelem.style.color;
		var colorback = winnerelem.style.backgroundColor;

		if(colortexto.startsWith("rgb(")){
			color = colortexto.replace("rgb(","").replace(")").split(",");
			colortexto = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
		}
		if(colorback.startsWith("rgb(")){
			color = colorback.replace("rgb(","").replace(")").split(",");
			colorback = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
		}
		var winnertarj = createContent(custom[winnerelem.dataset.id], "winner");
		winnercontainer.appendChild(winnertarj);
	}
	else{
		winnercontainer.appendChild(createContent(winnerelem.src, "winner"));
	}
	
	winnercontainer.style.transform = "scale(1.5)";
	if(flagconfeti.checked){
		confetticontainer.style.display = "block";
		initConfetti();
	}
	
}

function winnerunshow(){
	confetticontainer.style.display = "none";
	winnercontainer.style.transform = "scale(0)";
	setTimeout(() => {
		if(winnercontainer.children.length > 0)
			winnercontainer.firstElementChild.remove();
	}, (300));
	
}

var flagrender = true;

function limpiar(){
	edit.style.display = "none";
	if(flag == 1){
		var res = confirm("Esto eliminara todo y no puede deshacerse, ¿estas seguro?")
		if (res == true){
			thereallimpiar();
		}
	}
}

function thereallimpiar(){
	if(flag == 1){

		var listTarj = document.getElementById("tarjetacontainer").children;
		
		for(var i = listTarj.length - 1; i > 0 ; i--){
			listTarj[i].remove();
		}
		
		custom = [];
		rellenoInicial(2);
	}
}

function addTarjeta(){
	edit.style.display = "none";
	if(flag == 1){
	
		if(urltarj.value.length != 0){
			
			var trelem = document.createElement("tr");
			var tdelem = document.createElement("td");
			var td2elem = document.createElement("td");
			var imagelem = document.createElement("img");
			imagelem.src = urltarj.value;
			imagelem.width = "400";
			imagelem.height = "160";
			
			tdelem.appendChild(imagelem);

			var inputelem = document.createElement("input");
			inputelem.type = "button";
			inputelem.value = "ELIMINAR";
			inputelem.classList.add("btn");
			inputelem.classList.add("lg");
			inputelem.classList.add("btn-primary");
			inputelem.classList.add("btn-block");
			inputelem.setAttribute("onclick","deleteTarjeta(this)");
			
			td2elem.appendChild(inputelem);
			
			trelem.appendChild(tdelem);
			trelem.appendChild(td2elem);
			
			tarjetacontainer.appendChild(trelem);
			
			new Promise(() => {
				imagelem.onload = () => {
					imagelem.dataset.id = custom.push(urltarj.value) - 1; 
					urltarj.value = "";
					rellenoInicial(2)
				};
				imagelem.onerror = () => {
					var divelem = document.createElement("div");
					divelem.style.backgroundColor = "#000000";
					divelem.style.color = "#FFFFFF";
					divelem.style.fontSize = "50px";
					divelem.style.display = "flex";
					divelem.style.justifyContent = "center";
					divelem.style.alignItems = "center";
					divelem.style.margin = "auto";
					divelem.style.width = "400px";
					divelem.style.height = "160px";
					divelem.innerText = urltarj.value.trim();
					
					var colortext = document.createElement("input");
					colortext.setAttribute("type","color");
					colortext.classList.add("colortarj");
					colortext.value = "ffffff#";
					colortext.setAttribute("onchange","changetextcolor(this)");
				
					var colorback = document.createElement("input");
					colorback.setAttribute("type","color");
					colorback.classList.add("colortarj");
					colorback.value = "#000000";
					colorback.setAttribute("onchange","changebackcolor(this)");
					
					divelem.appendChild(colortext);
					divelem.appendChild(colorback);
				
					imagelem.remove();
					tdelem.appendChild(divelem);
					
					divelem.dataset.id = custom.push("text:" + urltarj.value.trim() + ";#ffffff;#000000") - 1;
					urltarj.value = "";
					rellenoInicial(2);
					
				}
			});
		}			
	}
}

function changetextcolor(elem){
	
	var colorelem = elem.value;
	
	if(colorelem.startsWith("rgb(")){
		color = colorelem.replace("rgb(","").replace(")").split(",");
		colorelem = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	
	var data = custom[elem.parentElement.dataset.id].split(";#");
	custom[elem.parentElement.dataset.id] = data[0] + ";" + colorelem + ";#" + data[2];
	elem.parentElement.style.color = elem.value;
	rellenoInicial(2);
		
}

function changebackcolor(elem){
	
	var colorelem = elem.value;
	
	if(colorelem.startsWith("rgb(")){
		color = colorelem.replace("rgb(","").replace(")").split(",");
		colorelem = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	
	var data = custom[elem.parentElement.dataset.id].split(";#");
	custom[elem.parentElement.dataset.id] = data[0] + ";#" + data[1] + ";" + colorelem;
	elem.parentElement.style.backgroundColor = elem.value;
	rellenoInicial(2);
}

function pasteTarjeta(fil){
	if(flag == 1){
		
		if(fil){
			urltarj.value = URL.createObjectURL(fil).trim();
			addTarjeta();
		}			
	}
}

function deleteTarjeta(node){
	if(flag == 1 && custom.length > 0){
		
		var identif = node.parentElement.parentElement.firstElementChild.firstElementChild.dataset.id;
		if(node.parentElement.parentElement.firstElementChild.firstElementChild.naturalHeight != null){
			custom.splice(node.parentElement.parentElement.firstElementChild.firstElementChild.dataset.id, 1);				
		}
		else{
			var colortextoactual = node.parentElement.parentElement.firstElementChild.firstElementChild.style.color;
			var colorbackactual = node.parentElement.parentElement.firstElementChild.firstElementChild.style.backgroundColor;
		
			if(colortextoactual.startsWith("rgb(")){
				color = colortextoactual.replace("rgb(","").replace(")").split(",");
				colortextoactual = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
			}
			if(colorbackactual.startsWith("rgb(")){
				color = colorbackactual.replace("rgb(","").replace(")").split(",");
				colorbackactual = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
			}
			
			custom.splice(identif ,1);
			
		}
		node.parentElement.parentElement.remove();
		
		document.querySelectorAll("#tarjetacontainer div, #tarjetacontainer img").forEach((elem) => {
			if(elem.dataset.id > identif){
				elem.dataset.id = elem.dataset.id - 1;
			}
		});
		
		rellenoInicial(2);
	}
}

function palanca(){

	if(flag == 1 && names.length > 3){
		perilla.style.transform = 'translate(470px, 350px) scale(1)';
		palillo.style.transform = 'translate(480px, 30px) scaleY(-1)';
		setTimeout(()=> {
			fixPalanca();
		}, 1000);
	}
	else{
		palancaTraba();
	}
}

function palancaTraba(){
	perilla.style.transform = 'translate(470px, 80px) scale(1)';
	palillo.style.transform = 'translate(480px, 30px) scaleY(0.7)';
	setTimeout(()=> {
		fixPalanca();
	}, 500);
	
}

function fixPalanca(){
	perilla.style.transform = 'translate(470px, 0px) scale(1) ';
	palillo.style.transform = 'translate(480px, 30px) scale(1)';
}

window.addEventListener('paste', e => {
	if(flag == 1){
		if(edit.style.display == "block"){
			for(var i = 0; i < e.clipboardData.files.length; i++){
				urltapa = e.clipboardData.files[i];
				addtapa();
			}
		}
		else{
			for(var i = 0; i < e.clipboardData.files.length; i++){
				pasteTarjeta(e.clipboardData.files[0]);
			}
		}
	}
});

window.addEventListener("dragover", (e)=>{
	e.preventDefault();
});

window.addEventListener("drop", (e)=>{
	if(flag == 1){
		e.preventDefault(); 
		
		for(var i = 0; i < event.dataTransfer.files.length; i++){
			pasteTarjeta(event.dataTransfer.files[i]);
		}
	}
});

function crearPizza(){

	pizza.innerHTML = "";

	for(var i = 0; i < names.length; i++){
		var elem = document.createElement("div");
		elem.classList.add("slice-cont");
	
		var eleminterno = document.createElement("div");
		eleminterno.classList.add("slice");
		
		eleminterno.appendChild(createContent(names[i], "tarjetapizza"));
		elem.appendChild(eleminterno);
		
		pizza.appendChild(elem);
		
	}
	trozar();

}

var listTrozos = document.getElementsByClassName("slice-cont");

function trozar(){

	var listTrozos = document.getElementsByClassName("slice-cont");
				
	if (listTrozos.length > 3){
		
		for (var i = 0; i < listTrozos.length; i++){
			listTrozos[i].style.height =  2 * apotema * Math.tan(Math.PI/listTrozos.length) + "px";
			
			listTrozos[i].style.transform = "rotate(" + (i * 360/ listTrozos.length)+ "deg)";
			var tamano = 2 * apotema * Math.tan(Math.PI/listTrozos.length);
			listTrozos[i].firstElementChild.firstElementChild.style.height = tamano + "px";	
			listTrozos[i].firstElementChild.firstElementChild.style.fontSize =  Math.min(166, 4/3 * apotema * Math.tan(Math.PI/listTrozos.length)) + "px";	
			
		}
	} 
}

function palabralarga(texto){
	var sentence = texto.split(" ");
	var largo = 0;
	
	for(var i = 0; i < sentence.length; i++){
		if(sentence[i].length > largo){
			largo = sentence[i].length;
		}
	}
	
	return largo;
}

var apotema = 600;

function cambio(){
	edit.style.display = "none";
	if (flag == 1){
		if(pizza.parentElement.style.display == "none"){
			pizza.parentElement.style.display = "block";
			flagtombola.checked = false;
			flagclasic.checked = true;
			editruleta.style.display = "block";
			tombola.style.display = "none";
		}
		else{
			tombola.style.display = "block";
			flagtombola.checked = true;
			flagclasic.checked = false;
			editruleta.style.display = "none";
			pizza.parentElement.style.display = "none";
		}
	}
}

function streammode(){
	
	if(stream.classList.contains("streamoff")){
		stream.classList.remove("streamoff")
		stream.classList.add("streamon")
		cuerpo.classList.add("cuerpostream");
		adicional.style.display = "none";
	}
	else{
		stream.classList.remove("streamon")
		stream.classList.add("streamoff")
		cuerpo.classList.remove("cuerpostream");
		adicional.style.display = "block";
	}
}

let confetti = [];
const confettiCount = 100;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Confetti--------------
var ctx;
var cx;
var cy;

function resizeCanvas(){
  confetticontainer.width = window.innerWidth;
  confetticontainer.height = window.innerHeight;
  cx = window.innerWidth / 2;
  cy = window.innerHeight / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

function initConfetti(){
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, confetticontainer.width),
        y: confetticontainer.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-20, 20),
        y: randomRange(0, -30) } });

  }
};

function render(){
	resizeCanvas();
	ctx = confetticontainer.getContext("2d");
	ctx.clearRect(0, 0, confetticontainer.width, confetticontainer.height);

	confetti.forEach((confetto, index) => {
		let width = confetto.dimensions.x * confetto.scale.x;
		let height = confetto.dimensions.y * confetto.scale.y;

		ctx.translate(confetto.position.x, confetto.position.y);
		ctx.rotate(confetto.rotation);

		confetto.velocity.x -= confetto.velocity.x * drag;
		
		confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
		confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

		confetto.position.x += confetto.velocity.x;
		confetto.position.y += confetto.velocity.y;

		if (confetto.position.y >= confetticontainer.height) confetti.splice(index, 1);

		if (confetto.position.x > confetticontainer.width) confetto.position.x = 0;
		if (confetto.position.x < 0) confetto.position.x = confetticontainer.width;

		confetto.scale.y = Math.cos(confetto.position.y * 0.1);
		ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

		ctx.fillRect(-width / 2, -height / 2, width, height);

		ctx.setTransform(1, 0, 0, 1, 0, 0);
	});

	window.requestAnimationFrame(render);
};

window.addEventListener('resize', function () {
	resizeCanvas();
});

window.addEventListener('click', function () {
	initConfetti();
});

function exportar(){
	
	if(custom.length == 0)
		alert("La ruleta esta vacia.");
	else{
	
		var flagtemporales = false;
		
		custom.forEach((item) => {
			if(!flagtemporales && item.startsWith("blob:"))
				flagtemporales = true;
		});
		
		if(flagtemporales){
			if(confirm("Al menos una de las opciones ha sido cargada a la sesion (imagen copiada y pegada directamente), estas imagenes no son aceptables para la exportacion.\n Si desea evitar esto, por favor reemplazelas con la url directa de la imagen. ¿Deseas resaltar las opciones no aceptables? Se demarcaran en un cuadro rojo.") == true){
				custom.forEach((item) => {
					if(item.startsWith("blob:"))
						item.parentElement.classList.add("temporal");
				});
			}	
		}
		else{
			return "https://odricku.cl/magicroulette/?" + encodeURI(btoa(JSON.stringify(custom)));
		}
	}
}

function importar(){
	
	custom.forEach((item) => {
		var trelem = document.createElement("tr");
		var tdelem = document.createElement("td");
		var td2elem = document.createElement("td");
		if(item.startsWith("text:")){
			var elem = document.createElement("div");
			var infoelem = item.split(";");
			
			elem.style.backgroundColor = infoelem[infoelem.length - 1];
			elem.style.color = infoelem[infoelem.length - 2];
			elem.style.fontSize = "50px";
			elem.style.display = "flex";
			elem.style.justifyContent = "center";
			elem.style.alignItems = "center";
			elem.style.margin = "auto";
			elem.style.width = "400px";
			elem.style.height = "160px";
			elem.innerText = infoelem[0].replace("text:", "");
			
			var colortext = document.createElement("input");
			colortext.setAttribute("type","color");
			colortext.classList.add("colortarj");
			colortext.value = infoelem[infoelem.length - 2];
			colortext.setAttribute("onchange","changetextcolor(this)");
		
			var colorback = document.createElement("input");
			colorback.setAttribute("type","color");
			colorback.classList.add("colortarj");
			colorback.value = infoelem[infoelem.length - 1];
			colorback.setAttribute("onchange","changebackcolor(this)");
			
			elem.appendChild(colortext);
			elem.appendChild(colorback);
		}
		else{
			var elem = document.createElement("img");
			elem.src = item;
			elem.width = "400";
			elem.height = "160";
		}
		
		tdelem.appendChild(elem);

		var inputelem = document.createElement("input");
		inputelem.type = "button";
		inputelem.value = "ELIMINAR";
		inputelem.classList.add("btn");
		inputelem.classList.add("lg");
		inputelem.classList.add("btn-primary");
		inputelem.classList.add("btn-block");
		inputelem.setAttribute("onclick","deleteTarjeta(this)");
		
		td2elem.appendChild(inputelem);
		
		trelem.appendChild(tdelem);
		trelem.appendChild(td2elem);
		
		tarjetacontainer.appendChild(trelem);
		
		elem.dataset.id = custom.indexOf(item);
		
	});
	
}

function editar(){
	if(flag == 1){
		edit.style.display = "block";
	}
}

function rotaletras(){
	if(flag == 1){
		if(!flagletras.checked)
			pizza.classList.remove("rotado");
		else
			pizza.classList.add("rotado");
	}else{
		if(pizza.classList.contains("rotado"))
			flagletras.checked = true;
		else
			flagletras.checked = false;
		
	}
}

function refreshsettings(){
	if (flag == 1){
		if(!flagtombola.checked){
			pizza.parentElement.style.display = "block";
			editruleta.style.display = "block";
			tombola.style.display = "none";
		}
		else{
			tombola.style.display = "block";
			editruleta.style.display = "none";
			pizza.parentElement.style.display = "none";
		}
	}
	else{
		if(pizza.parentElement.style.display == "none"){
			flagclasic.cheched = false;
			flagtombola.checked = true;
		}
		else{
			flagclasic.checked = true;
			flagclasic.checked = false;
		}
	}
}

function addtapa(){
	if(flag == 1){
		tapa.src = urltapa.value;
		tapa.style.display = "block";
		url.value = "";
	}
	
}

function deletetapa(){
	if(flag == 1)
		tapa.style.display = "none";
	
}

function editflecha(){
	if(flag == 1){
		if (flagflecha.checked){
			arrowcontainer.style.display = "block";
			bolacontainer.style.display = "none";
		}
		else{
			arrowcontainer.style.display = "none";
			bolacontainer.style.display = "block";
		}
	}else{
		if(arrowcontainer.style.display = "block"){
			flagflecha.checked = true;
			flagbolita.checked = false;
		}else{
			flagflecha.checked = false;
			flagbolita.checked = true;
		}
	}
}



function editformagiro(){
	if(flag == 1){
		if (flaginterior.checked){
			flaggirointerno = true;
		}
		else{
			flaggirointerno = false;
		}
		
		bolacontainer.style.transform = bolacontainer.style.transform.replace(/-*[0-9\.]*deg/, "0deg");
		arrowcontainer.style.transform = arrowcontainer.style.transform.replace(/-*[0-9\.]*deg/, "0deg");
		pizza.style.transform = pizza.style.transform.replace(/-*[0-9\.]*deg/, "0deg");
	}else{
		if(flaggirointerno){
			flaginterior.checked = true;
			flagexterior.checked = false;
		}else{
			flaginterior.checked = false;
			flagexterior.checked = true;
		}
	}
}