// TODO: redigir si no hay usuario activo
const usuario_activo = JSON.parse(localStorage.getItem("usuario_actual"));
const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const usuario = usuarios[usuario_activo];
const enviar_consejos = document.querySelector(".enviar-consejos");
const cerrar_sesion = document.querySelector(".cerrar-sesion");

if (!usuario_activo){
    alert("Debes registrarte.");
}

if (!usuario) {
    alert("Debes iniciar sesión.");
}


document.querySelector(".nombre-usuario").textContent = usuario.nombre;
document.querySelector(".foto-usuario").src = usuario.foto_perfil;

let consejos = JSON.parse(localStorage.getItem("consejos"));
actualizar_titulo_consejos(consejos);


function actualizar_titulo_consejos(consejos) {
    const titulo = document.querySelector(".consejos-titulo");
    if (!consejos || consejos.length === 0) {
        titulo.innerHTML = "Aún no hay consejos.<br>¡Sé el primero en compartir uno!";
        consejos = []
        localStorage.setItem("consejos", JSON.stringify(consejos));
    } else {
        lista_consejos = document.querySelectorAll(".consejo");
        titulo.textContent = "Últimos consejos";
        let ultimos =[];
        if (consejos.length>2){
            ultimos = consejos.slice(0, 3);
        } else{
            ultimos = consejos.slice(0,consejos.length)
        }

        // Recorremos los consejos y los añadimos al HTML
        ultimos.forEach((elem, i) => {
            lista_consejos[i].textContent = elem[0];
        });

    }
}

enviar_consejos.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo_actual = document.querySelector(".titulo-consejo").value.trim();
    if (titulo_actual.length <14){
        return alert("El título del consejo debe tener al menos 15 caracteres.");
    }
    const descripcion_actual = document.querySelector(".descripcion-consejo").value.trim();
    if (titulo_actual.length <29){
        return alert("La descripción consejo debe tener al menos 30 caracteres.");
    }
    const nuevo =[
        titulo_actual,
        descripcion_actual,
    ]
    actualizar_consejos(consejos, nuevo)
});

function actualizar_consejos(consejos, nuevo){
    consejos.unshift(nuevo);
    localStorage.setItem("consejos", JSON.stringify(consejos));
    actualizar_titulo_consejos(consejos);
}

cerrar_sesion.addEventListener("click", () => {
    const confirmacion = confirm("¿Desea cerrar sesión?");

    if (confirmacion) {
    // ✅ El usuario confirmó
        localStorage.removeItem("usuario_actual");
        window.location.href = "home.html"; // redirección
    } 
});