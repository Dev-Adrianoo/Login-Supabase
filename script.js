const supabase = window.supabase.createClient(
    "https://glexqscrnswyklapwpbk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsZXhxc2NybnN3eWtsYXB3cGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTA1NTQsImV4cCI6MjA1ODU2NjU1NH0.FDZQP4pFl4bZkgzd7HH0xfLBePtiRDrRUV2bRaMBm38"
  );

  async function login() {
    console.log("Tentando fazer login...");
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
      document.getElementById("mensagemCadastro").innerText =
        "Preencha todos os campos!";
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      document.getElementById("mensagemCadastro").innerText =
        "Erro: " + error.message;
    } else {
      document.getElementById("mensagemCadastro").innerText =
        "Login realizado com sucesso!";
      localStorage.setItem("usuarioEmail", email);
      setTimeout(() => {
        window.location.href = "bem-vindo.html";
      }, 2000);
    }
  }

  async function cadastrar() {
    console.log("Tentando cadastrar...");
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
      document.getElementById("mensagemCadastro").innerText =
        "Preencha todos os campos!";
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
    });

    if (error) {
      document.getElementById("mensagemCadastro").innerText =
        "Erro: " + error.message;
    } else {
      document.getElementById("mensagemCadastro").innerText =
        "Cadastro realizado com sucesso!";
    }
  }

const usuarioEmail = localStorage.getItem("usuarioEmail");
document.getElementById("mensagem").innerText =
  usuarioEmail || "Usuário não autenticado!";
function logout() {
  localStorage.removeItem("usuarioEmail");
  window.location.href = "cadastro.html";
}
function filtrarItens() {
  const filtro = document.getElementById("SearchBar").value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const titulo = card.querySelector("h2").textContent.toLowerCase();

    if (titulo.includes(filtro)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

function fecharModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  card.addEventListener("click", (event) => {
    if (!event.target.classList.contains("close")) {
      abrirModal(`modal-${index + 1}`);
    }
  });
});