// Banco de perguntas
const perguntas = [
    {
        pergunta: "O que significa HTML?",
        opcoes: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Machine Language"
        ],
        correta: 0
    },
    {
        pergunta: "Qual linguagem estiliza páginas web?",
        opcoes: [
            "HTML",
            "CSS",
            "Python"
        ],
        correta: 1
    },
    {
    pergunta: "Qual linguagem adiciona interatividade às páginas web?",
    opcoes: [
        "CSS",
        "JavaScript",
        "HTML"
    ],
    correta: 1
    },
    {
    pergunta: "Qual tag é usada para criar um link?",
    opcoes: [
        "&lt;img&gt;",
        "&lt;a&gt;",
        "&lt;link&gt;"
    ],
    correta: 1
    },
    {
    pergunta: "Qual propriedade CSS altera a cor do texto?",
    opcoes: [
        "font-color",
        "text-color",
        "color"
    ],
    correta: 2
    }
];

let perguntaAtual = 0;
let pontos = 0;

// Elementos HTML
const tituloPergunta = document.getElementById("titulo-pergunta");
const textoPergunta = document.getElementById("texto-pergunta");
const opcoesContainer = document.getElementById("opcoes");
const botao = document.getElementById("botao-proxima");
const progresso = document.getElementById("progresso");

// Função para mostrar pergunta
function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    tituloPergunta.textContent = `Pergunta ${perguntaAtual + 1}`;
    textoPergunta.textContent = pergunta.pergunta;

    progresso.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    opcoesContainer.innerHTML = "";

    pergunta.opcoes.forEach((opcao, index) => {

        const label = document.createElement("label");

    label.innerHTML = `
    <input type="radio" name="opcao" value="${index}">
    <span>${opcao}</span>
`;
        opcoesContainer.appendChild(label);
        opcoesContainer.appendChild(document.createElement("br"));
    });
}
// Inicia o quiz mostrando a primeira pergunta
mostrarPergunta();

botao.addEventListener("click", function () {

    // se terminou o quiz → reiniciar
    if (perguntaAtual >= perguntas.length) {

    perguntaAtual = 0;
    pontos = 0;

    botao.style.display = "block";
    botao.textContent = "Próxima Pergunta";

    mostrarPergunta();
    return;
}
    const respostaSelecionada = document.querySelector('input[name="opcao"]:checked');

    if (!respostaSelecionada) {
        alert("Selecione uma opção!");
        return;
    }

    const respostaCorreta = perguntas[perguntaAtual].correta;
    // Seleciona todas as opções da pergunta atual
    const labels = document.querySelectorAll(".quiz label");

    labels.forEach((label, index) => {

        const input = label.querySelector("input");

        if (index === respostaCorreta) {
            label.classList.add("correto");
        }

        if (input.checked && index !== respostaCorreta) {
            label.classList.add("errado");
        }

        input.disabled = true;
    });

    setTimeout(() => {

        if (parseInt(respostaSelecionada.value) === respostaCorreta) {
            pontos++;
        }

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }

    }, 1000);

});

function mostrarResultado() {

    opcoesContainer.innerHTML = "";

    tituloPergunta.textContent = "Resultado Final";

    // mensagem personalizada
    let mensagem = "";

    const porcentagem = (pontos / perguntas.length) * 100;

    if (porcentagem === 100) {
        mensagem = "Perfeito! Você acertou tudo!";
    } else if (porcentagem >= 50) {
        mensagem = "Bom trabalho! Você foi bem.";
    } else {
        mensagem = "Continue estudando e tente novamente para melhorar sua pontuação!";
    }

    textoPergunta.textContent =
        `Você acertou ${pontos} de ${perguntas.length} perguntas.\n${mensagem}`;

    botao.textContent = "Reiniciar Quiz";
    botao.style.display = "block";
}