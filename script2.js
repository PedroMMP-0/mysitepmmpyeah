async function salvarNota() {
  const texto = document.getElementById("nota").value;

  await fetch("/.netlify/functions/notas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto })
  });

  alert("Nota salva!");
}

async function carregarNota() {
  const resposta = await fetch("/.netlify/functions/notas");
  const dados = await resposta.json();

  document.getElementById("nota").value = dados.texto || "";
}