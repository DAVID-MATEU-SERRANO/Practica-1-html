const form = document.querySelector(".login");
const usuario_input = document.getElementById("usuario");
const password_input = document.getElementById("contraseña");


form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que recargue la página

  const usuario = usuario_input.value.trim();
  const password = password_input.value.trim();

  // Leemos del localStorage
  const usuario_guardado = localStorage.getItem("usuario");
  const password_guardada = localStorage.getItem("contraseña");

  // Comprobamos si coinciden
  if (usuario === usuario_guardado && password === password_guardada) {
  window.location.href = "versionB.html";
  } else {
  alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
});
