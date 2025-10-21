const form = document.querySelector(".Registro");
const nombreInput = document.querySelector(".nombre");
const apellidosInput = document.querySelector(".apellidos");
const mail = document.querySelector(".mail");
const mail_confirmation = document.querySelector(".mail-confirmation");
const fnacim = document.getElementById("fnacim");
const login = document.getElementById("usuario");
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
    const partes = apellidos.split(" ").filter(noVacio);
    const tieneApellidoCorto = partes.some(esCorto);
    if (partes.length < 2 || tieneApellidoCorto) {
        return alert("❌ Los apellidos deben tener al menos dos palabras de 3 letras cada una.", "error");
    }

    // Correo

    const correo = mail.value.trim();
    const correo_conf = mail_confirmation.value.trim();
    // Perimitimos nombre@dominio.extensión como mínimo una letra por 
    const patronCorreo = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]+$/;


    if (!correo){
        return alert("El correo es obligatorio.")
    }
    if (!correo_conf){
        return alert("Tienes que confirmar el correo.")
    }

    if (!patronCorreo.test(correo)) {
        return alert("❌ El correo electrónico no tiene un formato válido (debe ser nombre@dominio.extensión).");        
    }
    if (correo !== correo_conf) {
        return alert("❌ Los correos electrónicos no coinciden. Revisa que los correos sean iguales.");        
    }

    // Fecha

    let fecha = fnacim.value;
    if (!fecha){
        return alert("Seleccione una fecha");
    }

    fecha = new Date(fecha);
    const hoy = new Date();

    if (fecha > hoy) {
        return alert("Los viajes al futuro no se han inventado todavía!! Pon una fecha real por favor.");
    }

    if (fecha.getFullYear() < 1900){
        return alert("Es IMPOSIBLE que hayas nacido antes del S.XX!! Pon una fecha real por favor.");
    }

    // Login



    //  Política de privacidad
    if (!privacidad.checked) {
        return alert("⚠️ Debes aceptar la política de privacidad.", "error");
    }

    // --- Si todo es correcto ---
    const usuario = {nombre, apellidos};
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    alert("✅ Registro completado correctamente. Redirigiendo...", "ok");

    // Redirigir tras 2 segundos
    setTimeout(() => {
        window.location.href = "https://www.google.com";
    }, 2000);
});


function noVacio(palabra) {
    return palabra !== "";
}

function esCorto(palabra) {
        return palabra.length < 3;
    }