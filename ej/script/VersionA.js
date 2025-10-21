const form = document.querySelector(".Registro");
const nombreInput = document.querySelector(".nombre");
const apellidosInput = document.querySelector(".apellidos");
const mail = document.querySelector(".mail");
const mail_confirmation = document.querySelector(".mail-confirmation");
const fnacim = document.getElementById("fnacim");
const login = document.querySelector(".usuario");
const password = document.querySelector(".contraseña");
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
    const partes = apellidos.split(" ").filter(no_vacio);
    const tieneApellidoCorto = partes.some(es_corto);
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

    const usuario = login.value.trim();

    if (usuario.length<5){
        return alert("El usuario tiene longitud mínima de 5 caracteres.");
    }

    //Contraseña

    const contraseña = password.value.trim();

    let validacion = validar_contraseña(contraseña);

    if (validacion !== "Todo ok"){
        return alert("Contraseña inválida. " + validacion+ "\n Recuerda que el formato válido es 8 caracteres de " +
            "longitud, con mínimo 2 números, 1 carácter especial, 1 letra mayúscula y 1 letra minúscula ");
    }

    // Imagen

    const archivo = img_perfil.files[0]; // Tomamos el primer archivo seleccionado

    // 1️⃣ Comprobar si hay archivo
    if (!archivo) {
        mensaje.textContent = "❌ Debes seleccionar una imagen de perfil.";
        mensaje.style.color = "red";
        return;
    }

    // 2️⃣ Validar por extensión
    const nombreArchivo = archivo.name.toLowerCase(); 
    const extensionesPermitidas = [".webp", ".png", ".jpg", ".jpeg"];

    // Comprobamos si el nombre termina con alguna de las extensiones válidas
    const esValida = extensionesPermitidas.some(ext => nombreArchivo.endsWith(ext));

    if (!esValida) {
        mensaje.textContent = "❌ Formato no válido. Solo se permiten .webp, .png y .jpg.";
        mensaje.style.color = "red";
        return;
    }

    //  Política de privacidad
    if (!privacidad.checked) {
        return alert("⚠️ Debes aceptar la política de privacidad.", "error");
    }

    // --- Si todo es correcto ---
    const usuario_actual = {nombre, apellidos};
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario_actual));

    alert("✅ Registro completado correctamente. Redirigiendo...", "ok");

    // Redirigir tras 2 segundos
    setTimeout(() => {
        window.location.href = "https://www.google.com";
    }, 2000);
});


function no_vacio(palabra) {
    return palabra !== "";
}

function es_corto(palabra) {
        return palabra.length < 3;
    }


function validar_contraseña(contraseña) {
    // 1️⃣ Longitud exacta
    if (contraseña.length !== 8) {
        return "❌ La contraseña debe tener exactamente 8 caracteres.";
    }

    // 2️⃣ Contadores
    let numeros = 0;
    let mayus = 0;
    let minus = 0;
    let especiales = 0;

    // 3️⃣ Recorrer carácter a carácter
    for (const c of contraseña) {
        if (c >= '0' && c <= '9') numeros++;
        else if (c >= 'A' && c <= 'Z') mayus++;
        else if (c >= 'a' && c <= 'z') minus++;
        else especiales++;
    }

    // 4️⃣ Comprobaciones
    if (numeros < 2) return "❌ Debe contener al menos 2 números.";
    if (mayus < 1) return "❌ Debe contener al menos 1 letra mayúscula.";
    if (minus < 1) return "❌ Debe contener al menos 1 letra minúscula.";
    if (especiales < 1) return "❌ Debe contener al menos 1 carácter especial.";

    // ✅ Si pasa todo:
    return "Todo ok";
}