const usuario_activo = JSON.parse(localStorage.getItem("usuario_actual"));
const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const usuario = usuarios[usuario_activo];

if (!usuario_activo){
    alert("Debes registrarte.");
}

if (!usuario) {
    alert("Debes iniciar sesión.");
}


document.querySelector(".nombre-usuario").textContent = usuario.nombre;
document.querySelector(".foto-usuario").src = usuario.foto_perfil;

let consejos = JSON.parse(localStorage.getitem("consejos"));
if (!consejos){
    consejos={};
}