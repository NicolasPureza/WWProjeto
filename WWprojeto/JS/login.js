const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = JSON.parse(localStorage.getItem(email));

  if (usuario && usuario.senha === senha) {
    alert("Login realizado com sucesso!");
  } else {
    alert("Email ou senha incorretos!");
  }
});
