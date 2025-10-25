const form = document.querySelector(".login");
const usuario_input = document.getElementById("usuario");
const password_input = document.getElementById("contraseña");
const boton1 = document.querySelector(".pack-info-button-0");
const boton2 = document.querySelector(".pack-info-button-1");
const boton3 = document.querySelector(".pack-info-button-2");


form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que recargue la página

  const user = usuario_input.value.trim();
  const password = password_input.value.trim();

  // Leemos del localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const usuario_activo = usuarios[user];

  if (!usuario_activo){
      alert("Debes registrarte.");
      window.location.href = "versionA.html";
  }

  // Comprobamos si coinciden
  if (user === usuario_activo  && password === usuarios[user].password) {
  window.location.href = "versionB.html";
  } else {
  alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
});

boton1.addEventListener("click", () => {
  let compra_actual = JSON.parse(localStorage.getItem("compra_actual"));
  if (!compra_actual) {
    compra_actual = {};
  }
  compra_actual.pack = "Pack Sudesde Asiático";
  compra_actual.precio = 600;
  compra_actual.subtitulo = "Indonesia: buses, hostales y guia de visados";
  compra_actual.imagen = "images/img_pack.jpg";
  compra_actual.descripcion = "Este pack está pensado para mochileros que quieren recorrer el Sudeste Asiático con libertad y buen ritmo." +
                        "Incluye transporte en buses locales para moverte entre ciudades y pueblos, alojamiento en hostales seleccionados donde podrás conocer a otros viajeros y una guía práctica de visados que te ahorrará tiempo en frontera." +
                        "Con un presupuesto de 600 €, tendrás lo esencial para explorar templos, playas y volcanes, disfrutando del día a día como un local. " +
                        "El enfoque es flexible: tú decides cuántos días quedarte en cada lugar y qué experiencias añadir. "+
                        "Indonesia te espera con su mezcla de naturaleza, cultura y hospitalidad: este pack es tu punto de partida.";
  localStorage.setItem("compra_actual", JSON.stringify(compra_actual));
  window.location.href = "versionC.html";
});

boton2.addEventListener("click", () => {
  if (!compra_actual) {
    compra_actual = {};
  }
  compra_actual.pack = "Pack Sudesde Asiático";
  compra_actual.precio = 600;
  compra_actual.subtitulo = "Indonesia: buses, hostales y guia de visados";
  compra_actual.imagen = "images/img_pack.jpg";
  compra_actual.descripcion = "Este pack está pensado para mochileros que quieren recorrer el Sudeste Asiático con libertad y buen ritmo." +
                        "Incluye transporte en buses locales para moverte entre ciudades y pueblos, alojamiento en hostales seleccionados donde podrás conocer a otros viajeros y una guía práctica de visados que te ahorrará tiempo en frontera." +
                        "Con un presupuesto de 600 €, tendrás lo esencial para explorar templos, playas y volcanes, disfrutando del día a día como un local. " +
                        "El enfoque es flexible: tú decides cuántos días quedarte en cada lugar y qué experiencias añadir. "+
                        "Indonesia te espera con su mezcla de naturaleza, cultura y hospitalidad: este pack es tu punto de partida.";
  localStorage.setItem("compra_actual", JSON.stringify(compra_actual));
  window.location.href = "versionC.html";
}); 
boton3.addEventListener("click", () => {
  window.location.href = "versionC.html";
});