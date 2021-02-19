var a = document.getElementById('aconst');
var b = document.getElementById('bconst');
var c = document.getElementById('cconst');
var btn = document.getElementById('calc');
var eqShow = document.getElementById('eqShow')
var ansElement = document.getElementById('ans');
var ansText = document.getElementById('ansText');
btn.onclick = () => {
  let aC = Number(a.value);
  let bC = Number(b.value);
  let cC = Number(c.value);
  let delta = bC**2 - (4 * aC * cC);
  eqShow.innerText = `$$ ${aC != 1 ? aC : ''}x^2 + ${bC}x + ${cC} = 0 $$ $$ \\Delta = ${bC}^2 - 4 \\cdot ${aC} \\cdot ${cC} = ${delta}  $$ $$ x = \\dfrac{-${bC} \\pm \\sqrt{${delta}}}{2\\cdot ${aC}} = \\dfrac{-${bC} \\pm ${math.sqrt(delta)}}{${2 * aC}}$$`
  let scope = {
    A: aC,
    B: bC,
    C: cC,
    Delta: math.sqrt(delta)
  };
  let ans = math.evaluate(['-B + Delta/(2*A)','-B - Delta/(2*A)'], scope);
  (ans[0].re != undefined) ? showAnswer(`$x_1 = ${ans[0].re} + ${ans[0].im}i$ \n $ x_2 = ${ans[1].re} + ${ans[1].im}i$`) : showAnswer(`$ x_1 = ${ans[0]}$ \n $ x_2 = ${ans[1]}$`);};

function showAnswer(ans){
  ansElement.className = "card-panel teal lighten-2";
  ansText.innerText = 'As raízes são: \n' + ans;
  MathJax.typeset()
};