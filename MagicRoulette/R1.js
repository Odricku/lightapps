var pc = ["Tarjeta DG.png","Tarjeta DRAW.png","tarjeta FG.png","Tarjeta GB.png","Tarjeta GMOD.png","Tarjeta GTA.png","Tarjeta HFF.png","Tarjeta HS.png","Tarjeta JMC.png","Tarjeta JMD.png","Tarjeta JMP.png","Tarjeta LL.png","Tarjeta MOD.png","Tarjeta OC2.png","Tarjeta PA.png","Tarjeta PP.png","Tarjeta PU.png", "Tarjeta RL.png", "Tarjeta SR.png","Tarjeta UCH.png"];
var cel =["Tarjeta JMD.png","Tarjeta JMP.png","Tarjeta PU.png","Tarjeta SG.png","Tarjeta BF.png","Tarjeta UNO.png","Tarjeta DRAW.png","Tarjeta PS.png", "Tarjeta G.png"];
var custom = []
var names = [];
var num = 0;

var regex = /\-{0,1}(\d+)/g;

let timerId;
var flag = 1;

var audioLoop = new Audio('Item roulette Loop.mp3');
audioLoop.loop = true;
audioLoop.volume = 0.3;
var audioEnd = new Audio('Item roulette End.mp3');
audioEnd.volume = 0.3;

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

		for(var i = 0; i < names.length; i++){

			num = Math.floor(Math.random() * names.length);
			[names[i], names[num]] = [names[num], names[i]];
		
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
			
			slot1.appendChild(createContent("Placeholder.png", "elem"));
			slot2.appendChild(createContent("Placeholder.png", "elem"));
			slot3.appendChild(createContent("Placeholder.png", "elem"));
			slot4.appendChild(createContent("Placeholder.png", "elem"));
			slot5.appendChild(createContent("Placeholder.png", "elem"));
			slot6.appendChild(createContent("Placeholder.png", "elem"));
			
			names.push("Placeholder.png");
			names.push("Placeholder.png");
			names.push("Placeholder.png");
			names.push("Placeholder.png");
			names.push("Placeholder.png");
			names.push("Placeholder.png");
		}
			
		crearPizza();
	}	
}

function createContent(content, clase){
	if(content.startsWith("text:")){
		var divelem = document.createElement("div");
		divelem.classList.add(clase);
		var infoelem = content.split(";");
		divelem.innerText = infoelem[0].replace("text:", "");
		divelem.style.color = infoelem[infoelem.length - 2];
		divelem.style.backgroundColor = infoelem[infoelem.length - 1];
		divelem.style.fontSize = "50px";
		divelem.style.display = "flex";
		divelem.style.alignItems = "center";
		
		return divelem;
	}
	else{
		var imgelem = document.createElement("img");
		imgelem.classList.add(clase);
		imgelem.src = content;
		
		return imgelem;
	}	
}

function girar(velGiro){
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
					[...tombola.querySelectorAll(".divcontainer")].forEach(elem => {
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
				
				var listTarj = [...pizza.querySelectorAll(".slice-cont")];

				var angulo = 360/listTarj.length * (Math.floor(Math.random() * (10 * listTarj.length + 1)) + listTarj.length * velGiro);
				
				var finales = ["(0.14, 0.62, 0.44, 1)", "(0.11, 0.68, 0.73, 1.02)", "(0.11, 0.68, 0.77, 0.96)"];
				var finalactual = Math.floor(Math.random() * finales.length);
				
				listTarj.forEach(elem => {
					elem.style.transition = "transform " + velGiro + "s cubic-bezier" + finales[finalactual];
					elem.style.transform = elem.style.transform.replace(/-*[0-9\.]*deg/, parseInt(elem.style.transform.match(/-*[0-9\.]*deg/)[0].replace("deg","")) + angulo + "deg");
				});
				
				setTimeout(() => { 
					clearInterval(timerId);
					
					listTarj.forEach(elem => {
						elem.style.transition = "";
						var angulofinal = parseInt(elem.style.transform.match(/-*[0-9\.]*deg/)[0].replace("deg",""))%360;
						elem.style.transform = elem.style.transform.replace(/-*[0-9\.]*deg/, angulofinal + "deg");
						if (angulofinal == 0){
							winnershow(elem.firstElementChild.firstElementChild);
							setTimeout(() => { 
								winnerunshow();
							}, (5000));
							
						}
					});
					flag = 1;
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
		
		winnercontainer.appendChild(createContent("text:" + winnerelem.innerText + ";" + colortexto +";" + colorback), "winner");
	}
	else{
		winnercontainer.appendChild(createContent(winnerelem.src, "winner"));
	}
	
	winnercontainer.style.transform = "scale(1.5)";
	confetticontainer.style.display = "block";
	initConfetti();
	
}

function winnerunshow(){
	confetticontainer.style.display = "none";
	winnercontainer.style.transform = "scale(0)";
	setTimeout(() => {
		if(winnercontainer.children.length > 0)
			winnercontainer.firstElementChild.remove();
		}
	}, (300));
	
}

var flagrender = true;

function limpiar(){
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
					custom.push(urltarj.value); 
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
					divelem.innerText = urltarj.value;
					divelem.setAttribute("onclick","changecolor(this)");
					
					var colortext = document.createElement("input");
					colortext.setAttribute("type","color");
					colortext.classList.add("colortarj");
					colortext.value = "ffffff#";
					colortext.setAttribute("onchange","changetextcolor(this)");
					colortext.style.display = "none";
				
					var colorback = document.createElement("input");
					colorback.setAttribute("type","color");
					colorback.classList.add("colortarj");
					colorback.value = "#000000";
					colorback.setAttribute("onchange","changebackcolor(this)");
					colorback.style.display = "none";
					
					divelem.appendChild(colortext);
					divelem.appendChild(colorback);
				
					imagelem.remove();
					tdelem.appendChild(divelem);
					
					custom.push("text:" + urltarj.value + ";#ffffff;#000000");
					urltarj.value = "";
					rellenoInicial(2);
					
				}
			});
		}			
	}
}

function changecolor(elem){
	if(flag == 1){
		elem.firstElementChild.click();
	}
}

function changetextcolor(elem){
	
	var colortextoactual = elem.parentElement.style.color;
	var colorbackactual = elem.parentElement.style.backgroundColor;
	var colorelem = elem.value;
	
	if(colortextoactual.startsWith("rgb(")){
		color = colortextoactual.replace("rgb(","").replace(")").split(",");
		colortextoactual = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	if(colorbackactual.startsWith("rgb(")){
		color = colorbackactual.replace("rgb(","").replace(")").split(",");
		colorbackactual = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	if(colorelem.startsWith("rgb(")){
		color = colorelem.replace("rgb(","").replace(")").split(",");
		colorelem = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	
	var elemanterior = custom.indexOf("text:" + elem.parentElement.innerText + ";" + colortextoactual +";" + colorbackactual);
	
	if(elemanterior != -1){
		elem.parentElement.style.color = colorelem;
		custom[elemanterior] = "text:" + elem.parentElement.innerText + ";" + colorelem +";" + colorbackactual;
		elem.parentElement.lastElementChild.click();
		rellenoInicial(2);
	}
}

function changebackcolor(elem){
	
	var colortextoactual = elem.parentElement.style.color;
	var colorbackactual = elem.parentElement.style.backgroundColor;
	var colorelem = elem.value;
	
	if(colortextoactual.startsWith("rgb(")){
		color = colortextoactual.replace("rgb(","").replace(")").split(",");
		colortextoactual = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	if(colorbackactual.startsWith("rgb(")){
		color = colorbackactual.replace("rgb(","").replace(")").split(",");
		colorbackactual = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	if(colorelem.startsWith("rgb(")){
		color = colorelem.replace("rgb(","").replace(")").split(",");
		colorelem = "#" + (parseInt(color[0])).toString(16).padStart(2, "0") + (parseInt(color[1])).toString(16).padStart(2, "0") + (parseInt(color[2])).toString(16).padStart(2, "0");
	}
	
	var elemanterior = custom.indexOf("text:" + elem.parentElement.innerText + ";" + colortextoactual +";" + colorbackactual);
	
	if(elemanterior != -1){
		elem.parentElement.style.backgroundColor = colorelem;
		custom[elemanterior] = "text:" + elem.parentElement.innerText + ";" + colortextoactual +";" + colorelem;
		rellenoInicial(2);
	}
}

function pasteTarjeta(fil){
	if(flag == 1){
		
		if(fil){
			urltarj.value = URL.createObjectURL(fil);
			addTarjeta();
		}			
	}
}

function deleteTarjeta(node){
	if(flag == 1 && custom.length > 0){
		if(node.parentElement.parentElement.firstElementChild.firstElementChild.src != null){
			custom.splice(custom.indexOf(node.parentElement.parentElement.firstElementChild.firstElementChild.src),1);
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
			
			custom.splice(custom.indexOf("text:" + node.parentElement.parentElement.firstElementChild.firstElementChild.innerText + ";" + colortextoactual + ";" + colorbackactual),1);
			
		}
		node.parentElement.parentElement.remove();
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
	for(var i = 0; i < e.clipboardData.files.length; i++){
		pasteTarjeta(e.clipboardData.files[i]);
	}
});

window.addEventListener("dragover", (e)=>{
	if(flag == 1){
		e.preventDefault();
	}
});

window.addEventListener("drop", (e)=>{
	if(flag == 1){
		e.preventDefault(); 
		if(flag == 1){
			for(var i = 0; i < event.dataTransfer.files.length; i++){
				pasteTarjeta(event.dataTransfer.files[i]);
			}
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
			listTrozos[i].firstElementChild.firstElementChild.style.height =  2 * apotema * Math.tan(Math.PI/listTrozos.length) + "px";	
			
			listTrozos[i].firstElementChild.firstElementChild.style.width =  "75%";

			if(listTrozos[i].firstElementChild.firstElementChild.naturalHeight == null){
				listTrozos[i].firstElementChild.firstElementChild.style.width =  "95%";
				listTrozos[i].firstElementChild.firstElementChild.style.marginLeft =  "293px";
				
				var maxpalabra = palabralarga(listTrozos[i].firstElementChild.firstElementChild.innerText);
				if(maxpalabra < 3){
					listTrozos[i].firstElementChild.firstElementChild.style.textAlign = "center";
					listTrozos[i].firstElementChild.firstElementChild.style.paddingLeft =  "250px";
					listTrozos[i].firstElementChild.firstElementChild.style.fontSize = 0.8 * apotema * Math.PI/names.length + "px";
				}
				else if(maxpalabra > 6){
					if(names.length < 8){
						if(maxpalabra > 15){
							listTrozos[i].firstElementChild.firstElementChild.style.fontSize = 0.4 * apotema * Math.PI/names.length + "px";
							listTrozos[i].firstElementChild.firstElementChild.style.paddingLeft =  "105px";
						}
						else{
							listTrozos[i].firstElementChild.firstElementChild.style.fontSize = 0.5 * apotema * Math.PI/names.length + "px";
							listTrozos[i].firstElementChild.firstElementChild.style.paddingLeft =  "105px";
						}
					}						
					else{
						listTrozos[i].firstElementChild.firstElementChild.style.fontSize = 0.6 * apotema * Math.PI/names.length + "px";
						listTrozos[i].firstElementChild.firstElementChild.style.paddingLeft =  "105px";
					}
				}
				else{
					listTrozos[i].firstElementChild.firstElementChild.style.fontSize = 0.8 * apotema * Math.PI/names.length + "px";
					listTrozos[i].firstElementChild.firstElementChild.style.paddingLeft =  "105px";
				}
			}
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
	if (flag == 1){
		if(pizza.parentElement.style.display == "none"){
			pizza.parentElement.style.display = "block";
			tombola.style.display = "none";
		}
		else{
			tombola.style.display = "block";
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