var custom = []
		
		var names = [];
		var num;
		
		var regex = /\-{0,1}(\d+)/g;
		var lap = 10;
		var per = 8;
		var rand = 0;
		
		var topValue = 0;
		
		var slots = [];
		
		let timerId;
		var flag = 1;
		var flag2 = 0;
		
		var audioLoop = new Audio('Item roulette Loop.mp3');
		audioLoop.loop = true;
		audioLoop.volume = 0.3;
		var audioEnd = new Audio('Item roulette End.mp3');
		audioEnd.volume = 0.3;
		
		function rellenoInicial(){

			names = custom;
		
			for(var i = 0; i < names.length; i++){
		
				num = Math.floor(Math.random() * names.length);
				[names[i], names[num]] = [names[num], names[i]];
			
			}
			
			if(custom.length > 3){
		
				document.getElementById("slot1").src = names[(num++) % names.length];
				document.getElementById("slot2").src = names[(num++) % names.length];
				document.getElementById("slot3").src = names[(num++) % names.length];
				document.getElementById("slot4").src = names[(num++) % names.length];
						
				slots = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3"), document.getElementById("slot4")];
				rellenoRes();
				crearPizza();
			}
			else{
				document.getElementById("slot1").src = "Placeholder.png";
				document.getElementById("slot2").src = "Placeholder.png";
				document.getElementById("slot3").src = "Placeholder.png";
				document.getElementById("slot4").src = "Placeholder.png";
				
				pizza.innerHTML = "";
			}
		}
		
		function rellenoRes(){
		
			var num = [parseInt(slots[0].style.top.match(regex)[0]), parseInt(slots[1].style.top.match(regex)[0]), parseInt(slots[2].style.top.match(regex)[0]),parseInt(slots[3].style.top.match(regex)[0])];
			
			var pos1 = num.indexOf(Math.min(...num));
			num[pos1] = 9999;
			var pos2 = num.indexOf(Math.min(...num));
			num[pos2] = 9999;
			var pos3 = num.indexOf(Math.min(...num));
			num[pos3] = 9999;
			var pos4 = num.indexOf(Math.min(...num));
			num[pos4] = 9999;
			
			slots[pos1].style.transform = "translate(-50%, 0%) perspective(50em) rotateX(66deg)";
			slots[pos1].width = 504;
			slots[pos1].height = 202; 
			slots[pos1].style.top = topValue + 22 + "px";
			
			slots[pos2].style.transform = "translate(-50%, 0%) perspective(50em) rotateX(0deg)";
			slots[pos2].width = 600;
			slots[pos2].height = 240;
			slots[pos2].style.top = topValue + 186 + "px";
			
			slots[pos3].style.transform = "translate(-50%, 0%) perspective(50em) rotateX(-66deg)";
			slots[pos3].width = 504;
			slots[pos3].height = 202;
			slots[pos3].style.top = topValue + 386 + "px";
			
			slots[pos4].style.transform = "translate(-50%, 0%) perspective(50em) rotateX(-86deg)";
			slots[pos4].width = 424;
			slots[pos4].height = 170;
			slots[pos4].style.top = topValue + 447 + "px";
			
			
		}
		
		function girar(velGiro){
			if(names.length > 3){
			
				if(flag == 1){
				
					if(tombola.style.display != 'none'){
						audioLoop.play();
							
						flag = 0;
						flag2 = 0;
					
						slots = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3"), document.getElementById("slot4")];
						
						timerId = setInterval(() => girar2(velGiro), velGiro);
						setTimeout(() => { flag = 1;}, (30000/velGiro) + Math.floor(Math.random() * 1000));
					}
					else if(pizza.parentElement.style.display != 'none'){
						audioLoop.play();
						
						flag = 0;
						flag2 = 0;
						
						pizzaGiro(velGiro);
						setTimeout(() => { flag = 1;}, (20000/velGiro) + Math.floor(Math.random() * 1000));
					}
				}
			}else{
				alert("Deben haber al menos 4 opciones");
			}
		}
		
		function pizzaGiro(velGiro){
			var listTarj = document.getElementsByClassName("slice-cont"); 
			
			timerId = setInterval(()=> {
				console.log(velGiro);
				for(var i = 0; i < listTarj.length; i++){
					listTarj[i].style.transform = "rotateZ(" + (parseInt(listTarj[i].style.transform.match(regex)[0]) + 15)+ "deg)";
					listTarj[i].style.transition = "linear " + (velGiro/1000 + 0.25) + "s";
				}
				if(flag == 1){
					clearInterval(timerId);
					if(velGiro < 160){
						girar(2 * velGiro);
					}
					else{
						clearInterval(timerId);
						for(var i = 0; i < listTarj.length; i++){
							listTarj[i].style.transform = "rotateZ(" + (parseInt(listTarj[i].style.transform.match(regex)[0]) + 45)+ "deg)";
							listTarj[i].style.transition = "ease-out " + (10 * velGiro/1000) + "s";
						}
						setTimeout(() => { audioLoop.pause(); audioEnd.play();}, 1500 + 5 * velGiro/1000);
					}
				}
			},velGiro);
			
			
			
		}
		
		function girar2(velGiro){
		
			for (var i = 0; i < slots.length; i++) {

				var elem = slots[i];
				
				var angel = parseInt(elem.style.transform.match(regex)[3])
				
				if(angel > 74){
					elem.style.transform = "translate(-50%, 0%) perspective(50em) rotateX(" + ((angel) - 4) + "deg)";
					elem.width = elem.width + 16;
					elem.height = elem.height + 6;
				}
				else if(angel > 42){
					elem.style.transform = "translate(-50%, 0%) perspective(50em) rotateX(" + ((angel) - 4) + "deg)";
					elem.width = elem.width + 16;
					elem.height = elem.height + 6;
					elem.style.top = (parseInt(elem.style.top.match(regex)[0]) + 11) + "px";

				}
				else if(angel > -42){
					elem.style.transform = "translate(-50%, 0%) perspective(50em) rotateX(" + ((angel) - 21) + "deg)";
					elem.style.top = (parseInt(elem.style.top.match(regex)[0]) + 49) + "px";
				}
				
				else if(angel > -74){
					elem.style.transform = "translate(-50%, 0%) perspective(50em) rotateX(" + ((angel) - 4) + "deg)";
					elem.width = elem.width - 16;
					elem.height = elem.height - 6;
					elem.style.top = (parseInt(elem.style.top.match(regex)[0]) + 17) + "px";

				}
				
				else if(angel > -90){
					elem.style.transform = "translate(-50%, 0%) perspective(50em) rotateX(" + ((angel) - 4) + "deg)";
					elem.width = elem.width - 16;
					elem.height = elem.height - 6;
					elem.style.top = (parseInt(elem.style.top.match(regex)[0]) + 9) + "px";

				}
				else{
					elem.src = names[(num++) % names.length];
					elem.style.transform = "translate(-50%, 0%) perspective(50em) rotateX(90deg)";
					elem.width = 408;
					elem.height = 166;
					elem.style.top = topValue + "px";
				}
				
				if(angel == 21 && flag == 1){
					flag2 = 1;
				}
			}	
			if(flag2 == 1){
				clearInterval(timerId);
				rellenoRes();
				if(velGiro < 40){
					girar(2 * velGiro);
				}
				else{
					audioLoop.pause();
					audioEnd.play();
				}
			}			
		}
		
		function limpiar(){
			var res = confirm("Esto eliminara todo y no puede deshacerse, ¿estas seguro?")
			if (res == true){
				thereallimpiar();
			}
		}
		
		function thereallimpiar(){
		
			var listTarj = document.getElementById("tarjetacontainer").children;
			
			for(var i = listTarj.length - 1; i > 0 ; i--){
				listTarj[i].remove();
			}
			
			custom = [];
			rellenoInicial();
		}
		
		function addTarjeta(){
			
			if(urltarj.value.length != 0){
				tarjetacontainer.innerHTML = tarjetacontainer.innerHTML + "<tr><td><img src=\"" + urltarj.value + "\" width=\"400\" height=\"160\"></td><td><input type=\"button\" value=\"ELIMINAR\" class=\"btn btn lg btn-primary btn-block\" onclick=\"deleteTarjeta(this)\"></td></tr>"
				custom.push(urltarj.value);
				urltarj.value = "";
				rellenoInicial();
			}			
		}
		
		function pasteTarjeta(fil){
			
			if(fil){
				var urlpaste = URL.createObjectURL(fil);
			
				tarjetacontainer.innerHTML = tarjetacontainer.innerHTML + "<tr><td><img src=\"" + urlpaste + "\" width=\"400\" height=\"160\"></td><td><input type=\"button\" value=\"ELIMINAR\" class=\"btn btn lg btn-primary btn-block\" onclick=\"deleteTarjeta(this)\"></td></tr>"
				custom.push(urlpaste);
				rellenoInicial();
			}			
		}

		function deleteTarjeta(node){
		
			custom.splice(custom.indexOf(node.parentElement.parentElement.children[0].children[0].src),1);
			node.parentElement.parentElement.remove();
			rellenoInicial();

		}
		
		function palanca(){
		
			if(flag == 1 && custom.length > 3){
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
			e.preventDefault();
		});
		
		window.addEventListener("drop", (e)=>{
			e.preventDefault(); 
			if(flag == 1){
				for(var i = 0; i < event.dataTransfer.files.length; i++){
					pasteTarjeta(event.dataTransfer.files[i]);
				}
			}
		});
		
		function crearPizza(){
		
			pizza.innerHTML = "";
		
			for(var i = 0; i < names.length; i++){
				pizza.innerHTML = pizza.innerHTML + "<div class=\"slice-cont\"><div class=\"slice\"><img class=\"tarjetapizza\" src=\"" + names[i] + "\"></div></div>";
			}
			
			trozar();
		
		}
		
		function trozar(){
		
			var listTrozos = document.getElementsByClassName("slice-cont");
						
			if (listTrozos.length > 3){
						//i
				pizza.style.transform = "translate(-1000px, " + (-100 - 800/listTrozos.length) + "px) scale(0.33)";
				
				for (var i = 0; i < listTrozos.length; i++){
					listTrozos[i].style.height =  2* apotema * Math.tan(Math.PI/listTrozos.length) + "px";
					
					listTrozos[i].style.transform = "rotateZ(" + (i * 360/ listTrozos.length)+ "deg)";
					listTrozos[i].children[0].children[0].style.height =  2* apotema * Math.tan(Math.PI/listTrozos.length) + "px";	
					listTrozos[i].children[0].children[0].style.width =  "75%";	
				
				}
			} //-300 = i           f = -50
		}

		var apotema = 600;
		
		function cambio(){
			if(pizza.parentElement.style.display == "none"){
				pizza.parentElement.style.display = "block";
				tombola.style.display = "none";
			}
			else{
				tombola.style.display = "block";
				pizza.parentElement.style.display = "none";
			}
		}