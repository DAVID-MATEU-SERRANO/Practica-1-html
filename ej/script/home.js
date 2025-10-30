const form = document.querySelector(".login");
const usuario_input = document.getElementById("usuario");
const password_input = document.getElementById("contraseña");

let usuario_activo = localStorage.getItem("usuario_actual");

// Si existe usuario_activo se elimina para evitar errores
if (usuario_activo) {
  localStorage.removeItem("usuario_actual");
}
// Lógica del formulario de login
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que recargue la página

  const user = usuario_input.value.trim();
  const password = password_input.value.trim();

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  if (!usuarios[user]){
      alert("Este usuario no está registrado.");
      return;
  }

  // Comprobamos si coinciden el usuario y la contraseña almacenados 
  if (usuarios[user]  && password === usuarios[user].password) {
    localStorage.setItem("usuario_actual", user);
    window.location.href = "versionB.html";
  } else {
    alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
});
