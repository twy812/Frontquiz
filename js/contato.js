const form = document.getElementById("formContato");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const mensagemStatus = document.getElementById("mensagem-status");

form.addEventListener("submit", function (e) {
    // Impede que a página seja recarregada
    e.preventDefault();

    mensagemStatus.textContent = "";

    if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
        mensagemStatus.style.color = "red";
        mensagemStatus.textContent = "Preencha todos os campos!";
        return;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        mensagemStatus.style.color = "red";
        mensagemStatus.textContent = "E-mail inválido!";
        return;
    }

        mensagemStatus.style.color = "green";
        mensagemStatus.textContent = "Mensagem enviada com sucesso!";

    form.reset(); 
});