// Seleciona os botões e as imagens
const btnAzul = document.getElementById('btn-azul');
const btnAmarelo = document.getElementById('btn-amarelo');
const btnAngulo = document.getElementById('btn-angulo');
const imagemPrincipal = document.getElementById('imagem');
const imagemAuxiliar = document.getElementById('imagem-auxiliar');

// Variáveis para armazenar a cor atual
let corAtual = 'azul'; // Inicialmente, a cor é azul
let anguloAtual = false; // Variável para verificar se a rotação foi ativada

// Função para trocar a imagem com efeito de transição
function trocarImagem(novaImagem) {
    // Começa a animação de deslizamento
    imagemAuxiliar.style.transform = 'translateX(0)';  // A imagem vai deslizar da direita para a esquerda
    imagemAuxiliar.style.opacity = 1;  // A imagem auxiliar aparece

    // A imagem principal desaparece e sai da tela
    imagemPrincipal.style.transform = 'translateX(-100%)';  // A imagem principal vai para a esquerda (fora da tela)
    imagemPrincipal.style.opacity = 0;

    // Após a animação, a imagem principal troca de src e volta à posição original
    setTimeout(() => {
        imagemPrincipal.src = novaImagem;
        imagemPrincipal.style.transform = 'translateX(0)';  // A imagem volta ao centro
        imagemPrincipal.style.opacity = 1;  // A imagem volta a aparecer
    }, 1000); // O tempo da transição de 1 segundo

    // Imagem auxiliar retorna para fora da tela à direita
    setTimeout(() => {
        imagemAuxiliar.style.transform = 'translateX(100%)';  // Move a imagem auxiliar para fora
        imagemAuxiliar.style.opacity = 0;  // A imagem auxiliar desaparece
    }, 1000); // O tempo da transição de 1 segundo
}

// Função para trocar o ângulo sem transição
function trocarAngulo() {
    // Remove a transição antes de mudar a imagem
    imagemPrincipal.classList.add('no-transition');
    
    // Troca a imagem para o novo ângulo, mantendo a cor atual
    if (corAtual === 'azul') {
        imagemPrincipal.src = 'azul_roda_1T-removebg-preview.png'; // Novo ângulo com a cor azul
    } else if (corAtual === 'amarelo') {
        imagemPrincipal.src = 'amarelo_roda_1T-removebg-preview.png'; // Novo ângulo com a cor amarela
    }

    // Após a troca da imagem, removemos a classe `no-transition` para permitir transições futuras
    setTimeout(() => {
        imagemPrincipal.classList.remove('no-transition');
    }, 0); // O tempo de delay é 0 para garantir que a transição seja restaurada imediatamente
}

// Evento de clique para o botão "Azul"
btnAzul.addEventListener('click', () => {
    corAtual = 'azul'; // Armazena a cor selecionada
    trocarImagem('azul_roda_1-removebg-preview.png'); // Imagem azul
});

// Evento de clique para o botão "Amarelo"
btnAmarelo.addEventListener('click', () => {
    corAtual = 'amarelo'; // Armazena a cor selecionada
    trocarImagem('amarelo_roda_1-removebg-preview.png'); // Imagem amarela
});

// Evento de clique para o botão "Trocar Ângulo"
btnAngulo.addEventListener('click', () => {
    trocarAngulo(); // Troca o ângulo sem transição
});
