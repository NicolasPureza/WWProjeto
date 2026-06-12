const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (localStorage.getItem(email)) {
    alert("Este email já está cadastrado!");
    return;
  }

  const usuario = {
    email: email,
    senha: senha,
  };

  localStorage.setItem(email, JSON.stringify(usuario));

  alert("Conta criada com sucesso!");

  window.location.href = "integrador.html";
});
