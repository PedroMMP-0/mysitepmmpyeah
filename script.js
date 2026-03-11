document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const emailCorreto = "pmmp2104@gmail.com";
  const senhaCorreta = "jogoslinks";

  if (email === emailCorreto && password === senhaCorreta) {
    message.style.color = "green";
    message.textContent = "Login realizado com sucesso! Redirecionando...";

    setTimeout(() => {
      window.location.href = "index2.html";
    }, 1000);

  } else {
    message.style.color = "red";
    message.textContent = "Usuário ou senha incorretos.";
  }
});
