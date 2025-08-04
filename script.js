// Seletores principais do jogo
const conteudoPrincipal = document.querySelector(".conteudo-principal");
const areaPerguntas = document.querySelector(".area-perguntas");
const areaAlternativas = document.querySelector(".area-alternativas");
const areaResultado = document.querySelector(".area-resultado");
const mensagemResultado = document.querySelector(".mensagem-resultado");

// Lista de perguntas e alternativas
const quiz = [
    {
        enunciado: "Você acaba de sair da escola e descobre uma tecnologia incrível: um chat que responde dúvidas, gera imagens e até sons realistas. Qual é sua primeira reação?",
        alternativas: [
            { texto: "Achei meio assustador...", tag: "reflexão" },
            { texto: "Isso parece fantástico!", tag: "entusiasmo" }
        ]
    },
    {
        enunciado: "Após essa descoberta, sua professora inicia um projeto sobre Inteligência Artificial. Ela pede que você escreva um trabalho sobre o uso de IA nas escolas. Como você resolve isso?",
        alternativas: [
            { texto: "Uso IA para buscar conteúdos explicados de forma simples.", tag: "curiosidade" },
            { texto: "Pesquiso por conta própria e com amigos.", tag: "autonomia" }
        ]
    },
    {
        enunciado: "Durante um debate na sala, surge a pergunta: como a IA impacta o futuro do trabalho? Como você se posiciona?",
        alternativas: [
            { texto: "A IA pode gerar novas oportunidades e aumentar o potencial humano.", tag: "otimismo" },
            { texto: "É preciso garantir proteção aos empregos atuais.", tag: "cautela" }
        ]
    },
    {
        enunciado: "Agora é hora de representar visualmente sua visão sobre IA. O que você faz?",
        alternativas: [
            { texto: "Crio uma imagem manualmente em um app de design.", tag: "criatividade" },
            { texto: "Uso um gerador de imagens com IA.", tag: "inovação" }
        ]
    },
    {
        enunciado: "Em um trabalho em grupo, um colega copia 100% do conteúdo gerado por IA. O que você faz?",
        alternativas: [
            { texto: "Acho válido, já que usamos um bom comando no chat.", tag: "flexível" },
            { texto: "Prefiro revisar e adicionar contribuições pessoais.", tag: "responsável" }
        ]
    }
];

// Variáveis de controle
let indice = 0;
let perguntaAtual;
let resumoFinal = "";

// Exibe a pergunta atual
function exibirPergunta() {
    if (indice >= quiz.length) {
        mostrarResultado();
        return;
    }

    perguntaAtual = quiz[indice];
    areaPerguntas.textContent = perguntaAtual.enunciado;
    areaAlternativas.textContent = "";
    exibirAlternativas();
}

// Cria os botões com as alternativas
function exibirAlternativas() {
    for (const opcao of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = opcao.texto;
        botao.addEventListener("click", () => processarResposta(opcao));
        areaAlternativas.appendChild(botao);
    }
}

// Processa a escolha feita
function processarResposta(opcaoEscolhida) {
    resumoFinal += opcaoEscolhida.tag + " ";
    indice++;
    exibirPergunta();
}

// Exibe a mensagem final
function mostrarResultado() {
    areaPerguntas.textContent = "Como será seu futuro com a IA?";
    mensagemResultado.textContent = resumoFinal;
    areaAlternativas.textContent = "";
}

// Inicia o quiz
exibirPergunta();
