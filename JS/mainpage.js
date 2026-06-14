const botaoNewsletter = document.getElementById("btnNewsletter");
const emailInput = document.getElementById("emailNewsletter");

botaoNewsletter.addEventListener("click", () => {

    if (emailInput.value.trim() === "") {
        alert("Digite um e-mail válido.");
        return;
    }

    alert("Seu e-mail foi enviado com sucesso!");
    emailInput.value = "";

});