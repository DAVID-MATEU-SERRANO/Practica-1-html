const form = document.querySelector(".login");
const usuarioInput = document.getElementById("usuario");
const passwordInput = document.getElementById("contraseña");

// --- Al enviar el formulario ---
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que recargue la página

    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();

  // Leemos del localStorage
    const usuarioGuardado = localStorage.getItem("usuario");
    const passwordGuardada = localStorage.getItem("contraseña");

  // Comprobamos si coinciden
    if (usuario === usuarioGuardado && password === passwordGuardada) {
    window.location.href = "versionB.html";
    } else {
    alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
});
