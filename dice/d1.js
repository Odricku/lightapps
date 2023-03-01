function rollDice() {
	const dice = [...document.querySelectorAll(".die-list")];
	if(dice.length == 0){
		cantDado = 0;
		addDado();
	}
	else{
	dice.forEach(die => {
		toggleClasses(die);
		die.dataset.roll = getRandomNumber(1, 6);
	});
	editdice.style.display = "none";
	}
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
	
	container.innerHTML = container.innerHTML + "<div><ol onclick=\"changeName(this)\" class=\"die-list even-roll\" data-roll=\"1\" id=\"die-" + (cantDado + 1) + "\">" + xPuntitos(1) + xPuntitos(2) + xPuntitos(3) + xPuntitos(4) + xPuntitos(5) + xPuntitos(6) + "</ol><div style=\"text-align:center;width:100%;margin-top:-140px\" id=\"die-" + (cantDado + 1) + "name\"></div></div>";
	cantDado++;
	ocultarEdit();
	
}

function removeDado(){

	dicefocus.parentElement.remove();
	ocultarEdit();

}

function xPuntitos(num){
	
	var res = "<li class=\"die-item\" data-side=\"" + num + "\">";
	for(var i = 0; i < num ; i++){
		res = res + "<span class=\"dot\"></span>"
	}

	return res + "</li>";

}

function changeName(node){

	dicefocus = node;
	if(node.nextElementSibling.style.color != null)
		colorDado.value = node.nextElementSibling.style.color;
	colorPunto.value = node.firstChild.firstChild.style.backgroundColor;
	nombreDado.value = dicefocus.nextElementSibling.innerHTML
	editdice.style.display = "block";
	nombreDado.value = node.nextElementSibling.innerHTML;

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
