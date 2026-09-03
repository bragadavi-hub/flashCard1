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
        resposta: "O MQ-2 monitora a qualidade do ar em tempo real. Em condições normais mantém o LED verde aceso; ao detectar gás ou fumaça perigosa, o Arduino aciona o LED vermelho e o buzzer sonoro de alerta."
    },
    {
        pergunta: "8. Seguidor de Luz (LDR + Servo): Qual é o objetivo do sistema automático que combina LDRs e Servo Motor?",
        resposta: "Os sensores LDR analisam a luminosidade ambiente e o Arduino orienta o servo motor até o ponto mais iluminado, técnica muito usada para melhorar a eficiência de painéis solares."
    },
    {
        pergunta: "9. Experimento de Fendas: O que acontece com o feixe de laser ao passar por uma fenda e por duas fendas?",
        resposta: "Com uma fenda a luz sofre difração (espalha-se); com duas fendas ocorre interferência, gerando faixas alternadas claras e escuras (medidas automaticamente por LDRs com Arduino)."
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
    
    const flipCard = document.querySelector(".flip-card");
    if (flipCard) {
        // Desvira o card antes de ir para a próxima pergunta
        flipCard.classList.remove("virado");
    }

    // Pequeno atraso para trocar o conteúdo após o card desvirar
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % flashcards.length;
        atualizarCard();
    }, 250);
}

window.addEventListener("DOMContentLoaded", () => {
    atualizarCard();
});