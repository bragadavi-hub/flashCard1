const flashcards = [
    {
        pergunta: "1. Propriedades da Luz: Como chamamos a linha reta que representa a direção e o sentido de propagação da luz?",
        resposta: "Raio de luz."
    },
    {
        pergunta: "2. Reflexão da Luz: Qual lei da reflexão afirma que o ângulo de incidência é sempre igual a quê?",
        resposta: "Igual ao ângulo de reflexão."
    },
    {
        pergunta: "3. Espelhos: Que tipo de imagem (real ou virtual) é sempre formada por um espelho plano?",
        resposta: "Uma imagem virtual, direita e do mesmo tamanho do objeto."
    },
    {
        pergunta: "4. Fenômenos da Luz: Qual fenômeno óptico explica a formação do arco-íris na atmosfera?",
        resposta: "A refração e a dispersão da luz solar nas gotas de água."
    },
    {
        pergunta: "5. Lentes: As lentes que possuem as bordas mais finas que o centro e convergem a luz são chamadas de quê?",
        resposta: "Lentes convergentes (ou convexas)."
    },
    {
        pergunta: "6. Óptica do Corpo Humano: Qual é a parte do olho humano responsável por focar a luz e formar a imagem na retina?",
        resposta: "O cristalino (lente natural do olho)."
    }
];

let indiceAtual = 0;

const elementoPergunta = document.getElementById("pergunta");
const elementoResposta = document.getElementById("resposta");

function atualizarCard() {
    if (elementoPergunta && elementoResposta) {
        elementoPergunta.textContent = flashcards[indiceAtual].pergunta;
        elementoResposta.textContent = flashcards[indiceAtual].resposta;
        elementoResposta.classList.add("escondido");
    }
}

function virarCard() {
    if (elementoResposta) {
        elementoResposta.classList.toggle("escondido");
    }
}

function proximoCard(event) {
    if (event) {
        event.stopPropagation();
    }
    indiceAtual = (indiceAtual + 1) % flashcards.length;
    atualizarCard();
}

window.addEventListener("DOMContentLoaded", () => {
    atualizarCard();
});