const quadro = Array(9).fill(null);
let atualPlayer = "X";
let saidVitoria=document.querySelector('#placar');

function Fazer_move(index) {
  if (quadro[index] === null) {
    quadro[index] = atualPlayer;
    document.getElementsByClassName("celula")[index].innerText = atualPlayer;
    saidVitoria.innerHTML="";

    if (verificar_vitoria()) {
    saidVitoria.innerHTML=`Parabéns (${ atualPlayer}) vencedor!`;
      resetBoard();
    } else if (quadro.every(celula => celula !== null)) {
    saidVitoria.innerHTML=`Ops  Empate (@@@@)`;
      resetBoard();
    } else {
        atualPlayer = atualPlayer === "X" ? "O" : "X";
    }
  }
}

function verificar_vitoria() {  
  const Combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combinação of Combos) { 
    const [a, b, c] = combinação;
    if (quadro[a] && quadro[a] === quadro[b] && quadro[a] === quadro[c]) {
      return true;
    }
  }
  return false;
}
function resetBoard() {   
  quadro.fill(null);
  document.querySelectorAll(".celula").forEach(celula => celula.innerText = "");
  atualPlayer = "X";
 
}