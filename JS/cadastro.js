const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const senha = document.getElementById("senha").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Formato de email inválido.");
    return;
  }

  if (senha.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres.");
    return;
  }

  const chave = `user:${email}`;

  if (localStorage.getItem(chave)) {
    alert("Este email já está cadastrado!");
    return;
  }

  const usuario = {
    email,
    senha, // sem hash — apenas para teste local
    criadoEm: new Date().toISOString(),
  };

  localStorage.setItem(chave, JSON.stringify(usuario));

  alert("Conta criada com sucesso!");
  window.location.href = "../HTML/login.html";
});