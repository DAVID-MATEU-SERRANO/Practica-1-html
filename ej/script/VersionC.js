const form = document.querySelector(".right-content");
const nombreInput = document.querySelector(".nombre");
const mail = document.querySelector(".mail");
const tipo_tarjeta = document.getElementById("tipo-tarjeta");
const numero_tarjeta = document.querySelector(".numero-tarjeta");
const nombre_titular = document.querySelector(".nombre_titular");
const fecha = document.getElementById("fcad");
const cvv = document.querySelector("CVV");

const compra_actual = JSON.parse(localStorage.getItem("compra_actual"));
const imagen_pack = document.querySelector(".imagen-pack");
const pack_info_1 = document.querySelector(".pack-info-1");
const pack_info_2 = document.querySelector(".pack-info-2");
const pack_info_3 = document.querySelector(".pack-info-3");
const descripcion_pack = document.querySelector(".descipcion-pack");

pack_info_1.textContent = compra_actual.pack;
pack_info_2.textContent = compra_actual.precio + "€";
pack_info_3.textContent = compra_actual.subtitulo;
if (compra_actual.pack === "Pack Sudesde Asiático") {
    imagen_pack.src = "images/img_pack.jpg";
    descripcion_pack.textContent = compra_actual.descripcion;
}else if (compra_actual.pack === "Pack Mina de la Jayona") {
    imagen_pack.src = "images/Extremadura.jpg";
    pack_info_1.textContent = compra_actual.pack;
} else if (compra_actual.pack === "Pack La Serena") {
    imagen_pack.src = "images/Medellin.jpg";
    pack_info_1.textContent = compra_actual.pack;
}


form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que se recargue la página

    const nombre = nombreInput.value.trim();

    // 1️⃣ Nombre: mínimo 3 caracteres
    if (nombre.length < 3) {
        return alert("❌ El nombre debe tener al menos 3 caracteres.");
    }

    // Correo

    const correo = mail.value.trim();
    const patronCorreo = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]+$/;


    if (!correo){
        return alert("El correo es obligatorio.")
    }

    if (!patronCorreo.test(correo)) {
        return alert("❌ El correo electrónico no tiene un formato válido (debe ser nombre@dominio.extensión).");        
    }
    // Tipo de tarjera

    if (tipo_tarjeta==""){
        return alert("Selecciona un tipo de tarjeta.");
    }
    // Número de tarjeta

    if (![13, 15, 16, 19].includes(numero_tarjeta.length)){
        return alert("El número de tarjeta debe tener longitud 13,15,16 o 19.")
    }
    // Nombre titular
    const nombre_t = nombre_titular.value.trim();

    // 1️⃣ Nombre: mínimo 3 caracteres
    if (nombre_t.length < 3) {
        return alert("❌ El nombre del titular de la tarjeta debe tener al menos 3 caracteres.");
    }

    // Fecha

    let caducidad = fecha.value;
    if (!caducidad){
        return alert("Seleccione la fecha de caducidad de la tarjeta.");
    }

    caducidad = new Date(caducidad);
    const hoy = new Date();

    if (caducidad < hoy) {
        return alert("La tarjeta está caducada.");
    }

    // CVV
    if (cvv.length !== 3) {
        return alert("❌ El cvv de la tarjeta debe tener 3 dígitos.");
    }



    alert("✅ Compra realizada");

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