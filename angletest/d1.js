function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 5);
  });
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

document.getElementById("roll-button").addEventListener("click", rollDice);

var cantDado = 0;
var dicefocus;

function addDado(){
	
	container.innerHTML = container.innerHTML + "<div><div onclick=\"changeName(this)\" class=\"die-list even-roll\" data-roll=\"1\" id=\"die-" + (cantDado + 1) + "\" style=\"transform:rotateX(0deg);\">" + xPuntitos(1) + xPuntitos(2) + xPuntitos(3) + xPuntitos(4) + xPuntitos(5) + "</div><div style=\"text-align:center;width:100%;margin-top:-140px\" id=\"die-" + (cantDado + 1) + "\"></div></div>";
	cantDado++;
	
}

function removeDado(){

	dicefocus.parentElement.remove();
	ocultarEdit();

}

function xPuntitos(num){
	
	var res = "<div class=\"die-item\" data-side=\"" + num + "\">";
	return res + "</div>";

}

function changeName(node){

	dicefocus = node;
	
	backeditdice.style.display = "block";
	editdice.style.display = "block";
	
	nombreDado.value = node.nextElementSibling.innerHTML;

}

function changesbutton(){
	dicefocus.nextElementSibling.innerHTML = nombreDado.value
	dicefocus.nextElementSibling.style.color = colorDado.value;
	dicefocus.children[0].style.backgroundColor = colorDado.value;
	dicefocus.children[1].style.backgroundColor = colorDado.value;
	dicefocus.children[2].style.backgroundColor = colorDado.value;
	dicefocus.children[3].style.backgroundColor = colorDado.value;
	dicefocus.children[4].style.backgroundColor = colorDado.value;
	dicefocus.children[5].style.backgroundColor = colorDado.value;
	
	ocultarEdit();
}

function ocultarEdit(){
	backeditdice.style.display = "none";
	editdice.style.display = "none";
}
