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
    },
    {
        pergunta: "7. Detecção de Gás e Fumaça: Como funciona o sistema automático de detecção de incêndio com Arduino Uno e MQ-2?",
        resposta: "O MQ-2 monitora o ar em tempo real. Em condições normais, mantém o LED verde aceso. Ao detectar fumaça ou gás, o Arduino ativa o LED vermelho e o buzzer de alerta."
    },
    {
        pergunta: "8. Seguidor de Luz (LDR + Servo): Qual a função do servo motor acionado por LDRs em painéis solares?",
        resposta: "Os sensores LDR analisam a luminosidade e o Arduino aciona o servo motor para mover a estrutura até o ponto mais iluminado, otimizando o rendimento do painel solar."
    },
    {
        pergunta: "9. Experimento de Fendas: Qual a diferença entre os padrões gerados por uma e duas fendas ao passar um laser?",
        resposta: "Com uma fenda ocorre difração (espalhamento da luz). Com duas fendas ocorre interferência, criando faixas alternadas claras e escuras (medidas via LDRs)."
    }
];

let indiceAtual = 0;

const elementoPergunta = document.getElementById("pergunta");
const elementoResposta = document.getElementById("resposta");

function atualizarCard() {
    if (elementoPergunta && elementoResposta) {
        elementoPergunta.textContent = flashcards[indiceAtual].pergunta;
        elementoResposta.textContent = flashcards[indiceAtual].resposta;
    }
}

function virarCard() {
    const flipCard = document.querySelector(".flip-card");
    if (flipCard) {
        flipCard.classList.toggle("virado");
    }
}

function proximoCard(event) {
    if (event) {
        event.stopPropagation();
    }
    
    // Desvira o card antes de mudar o conteúdo
    const flipCard = document.querySelector(".flip-card");
    if (flipCard) {
        flipCard.classList.remove("virado");
    }

    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % flashcards.length;
        atualizarCard();
    }, 200);
}

window.addEventListener("DOMContentLoaded", () => {
    atualizarCard();
});