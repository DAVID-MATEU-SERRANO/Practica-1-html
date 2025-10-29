const form = document.querySelector(".login");
const usuario_input = document.getElementById("usuario");
const password_input = document.getElementById("contraseña");

let usuario_activo = localStorage.getItem("usuario_actual");

// Si existe, lo eliminas
if (usuario_activo) {
  localStorage.removeItem("usuario_actual");
  console.log("✅ Sesión cerrada: usuario_actual eliminado.");
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que recargue la página

  const user = usuario_input.value.trim();
  const password = password_input.value.trim();

  // Leemos del localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  if (!usuarios[user]){
      alert("Debes registrarte.");
      window.location.href = "versionA.html";
  }

  // Comprobamos si coinciden
  if (usuarios[user]  && password === usuarios[user].password) {
    localStorage.setItem("usuario_actual", user);
    window.location.href = "versionB.html";
  } else {
    alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
});
