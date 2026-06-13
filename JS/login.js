const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const senha = document.getElementById("senha").value;

  const chave = `user:${email}`;
  const usuario = JSON.parse(localStorage.getItem(chave));

  if (usuario && usuario.senha === senha) {
    alert("Login realizado com sucesso!");
    
    // CORREÇÃO AQUI: Salva o estado de login que o arquivo senha.js vai procurar
    localStorage.setItem('usuarioLogado', JSON.stringify({ email: email }));

    window.location.href = "../HTML/mainpage.html";
  } else {
    alert("Email ou senha incorretos!");
  }
});