

const supabaseUrl = 'https://thfagkwulnssnpqayzhi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZmFna3d1bG5zc25wcWF5emhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODMyMzgsImV4cCI6MjA3NDY1OTIzOH0.93dh-_qWKSmbnJ3OccataitHJax4nDYn5s_nn-oxI5I';

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

document.addEventListener("DOMContentLoaded",() =>{

      document.querySelector('button[onclick="login()"]').addEventListener('click', login);
      document.querySelector('button[onclick="cadastrar()"]').addEventListener('click', cadastrar);

})

 async function login() {
        if (typeof supabase === 'undefined') {
          document.getElementById("mensagemCadastro").innerText = "Supabase não carregado. Tente novamente.";
          return;
        }

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
        if (typeof supabase === 'undefined') {
          document.getElementById("mensagemCadastro").innerText = "Supabase não carregado. Tente novamente.";
          return;
        }

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

// const supabase = window.supabase.createClient(                                                                                                                                                                                       
//   "https://peihaqxmkhxwwbiasgjo.supabase.co",                                                                                                                                                                                        
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlaWhhcXhta2h4d3diaWFzZ2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNTA4MjEsImV4cCI6MjA1OTcyNjgyMX0.fe-bGM9-eQAvGGTUo75o5k-gYQjRxRYD5-GZx51FtsY"                 
// );      