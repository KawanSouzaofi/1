const imgMain = document.getElementById('imagem');
const imgAux = document.getElementById('imagem-auxiliar');
const btnAmarelo = document.getElementById('btn-amarelo');
const btnAzul = document.getElementById('btn-azul');
const btnRoda1 = document.getElementById('btn-roda1');
const btnRoda2 = document.getElementById('btn-roda2');
const btnPos = document.getElementById('btn-posicao');
const btnSom = document.getElementById('btn-som');
const musica = document.getElementById('musica');

let corAtual = 'azul';
let rodaAtual = 1;
let anguloAtual = false;
let somLigado = true;

function gerarNome() {
  const suf = anguloAtual ? '_T' : '';
  return `${corAtual}_roda_${rodaAtual}${suf}-removebg-preview.png`;
}

function atualizarFundo() {
  document.body.style.backgroundColor = corAtual === 'azul' ? '#90caf9' : '#fff59d';
}

function trocarImagem() {
  const nova = gerarNome();
  imgAux.src = nova;
  imgAux.style.transform = 'translateY(0)';
  imgAux.style.opacity = 1;
  imgMain.style.opacity = 0;

  setTimeout(() => {
    imgMain.src = nova;
    imgMain.style.opacity = 1;
    imgAux.style.opacity = 0;
    imgAux.style.transform = 'translateY(100%)';
  }, 1000);
}

btnAmarelo.addEventListener('click', () => {
  corAtual = 'amarelo';
  atualizarFundo();
  trocarImagem();
});

btnAzul.addEventListener('click', () => {
  corAtual = 'azul';
  atualizarFundo();
  trocarImagem();
});

btnRoda1.addEventListener('click', () => {
  rodaAtual = 1;
  trocarImagem();
});

btnRoda2.addEventListener('click', () => {
  rodaAtual = 2;
  trocarImagem();
});

btnPos.addEventListener('click', () => {
  anguloAtual = !anguloAtual;
  trocarImagem();
});

btnSom.addEventListener('click', () => {
  if (somLigado) {
    musica.pause();
    btnSom.textContent = 'SOM: OFF';
  } else {
    musica.play();
    btnSom.textContent = 'SOM: ON';
  }
  somLigado = !somLigado;
});
