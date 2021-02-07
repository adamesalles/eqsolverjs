var a = document.getElementById('aconst');
var b = document.getElementById('bconst');
var c = document.getElementById('cconst');
var btn = document.getElementById('calc');
var ansElement = document.getElementById('ans');
var ansText = document.getElementById('ansText');
// ainda não sei como usar var e let
btn.onclick = () => {
  let aC = Number(a.value);
  let bC = Number(b.value);
  let cC = Number(c.value);
  let delta = bC**2 - (4 * aC * cC);
  let ans = [(-bC + (delta)**(1/2))/(2*aC), (-bC - (delta)**(1/2))/(2*aC)];
  (delta >= 0) ? showAnswer("As raízes são: " + ans) : showAnswer('Delta é negativo, logo a equação não tem raízes reais.');};

function showAnswer(ans){
  ansElement.className = "card-panel teal lighten-2";
  ansText.innerText = ans;
};