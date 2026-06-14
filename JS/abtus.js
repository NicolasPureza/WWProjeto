const form = document.getElementById("contactForm");
const mensagem = document.getElementById("mensagem-enviada");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    mensagem.textContent = "✓ E-mail enviado com sucesso!";
    form.reset();

    setTimeout(() => {
        mensagem.textContent = "";
    }, 3000);
});