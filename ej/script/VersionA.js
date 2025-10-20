const form = document.querySelector(".Registro");
const nombreInput = document.querySelector(".nombre");
const apellidosInput = document.querySelector(".apellidos");
const mail = document.querySelector(".mail");
const mail_confirmation = document.querySelector(".mail-confirmation");
const fnacim = document.querySelector(".fnacim");
const usuario = document.getElementById("usuario");
const password = document.getElementById("contraseña");
const img_perfil = document.getElementById("img-perfil");
const privacidad = document.getElementById("privacidad");


form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que se recargue la página

    const nombre = nombreInput.value.trim();
    const apellidos = apellidosInput.value.trim();

    // --- VALIDACIONES ---
    if (!nombre || !apellidos) {
    return alert("❌ Los campos marcados con * son obligatorios.", "error");
    }

    // 1️⃣ Nombre: mínimo 3 caracteres
    if (nombre.length < 3) {
    return alert("❌ El nombre debe tener al menos 3 caracteres.", "error");
    }

    // 2️⃣ Apellidos: al menos dos palabras, cada una de mínimo 3 letras
    const partes = apellidos.split(" ").filter(p => p !== "");
    if (partes.length < 2 || partes.some(p => p.length < 3)) {
    return alert("❌ Los apellidos deben tener al menos dos palabras de 3 letras cada una.", "error");
    }

    // 3️⃣ Política de privacidad
    if (!privacidad.checked) {
    return alert("⚠️ Debes aceptar la política de privacidad.", "error");
    }

    // --- Si todo es correcto ---
    const usuario = { nombre, apellidos };
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    alert("✅ Registro completado correctamente. Redirigiendo...", "ok");

    // Redirigir tras 2 segundos
    setTimeout(() => {
    window.location.href = "https://www.google.com";
    }, 2000);
    });


