const form = document.querySelector(".login");
const usuario_input = document.getElementById("usuario");
const password_input = document.getElementById("contraseña");


form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que recargue la página

  const user = usuario_input.value.trim();
  const password = password_input.value.trim();

  // Leemos del localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const usuario_activo = usuarios[user];

  if (!usuario_activo){
      alert("Debes registrarte.");
      window.location.href = "versionA.html";
  }

  // Comprobamos si coinciden
  if (user === usuario_activo  && password === usuarios[user].password) {
  window.location.href = "versionB.html";
  } else {
  alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
});
