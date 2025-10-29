const track = document.querySelector(".pack-info");
const items = document.querySelectorAll(".carrusel-item");
const prevBtn = document.querySelector(".nav-button-1");
const nextBtn = document.querySelector(".nav-button-2");
const boton1 = document.querySelector(".pack-info-button-0");
const boton2 = document.querySelector(".pack-info-button-1");
const boton3 = document.querySelector(".pack-info-button-2");

let index = 0;
let timer;
const DURATION = 4000; // Pongo 4s porque le tengo puesto 2 a la transicición pa q no vaya muy rápido y 4-2=2s q es lo q nos piden
// Lo único es q la primera transición tarda más en irse q las demás


function showSlide(n) {
    if (n < 0) {
    index = items.length - 1;
    } else if (n >= items.length) {
    index = 0;
    } else {
    index = n;
    }

    const offset = -index * 105.5;
    track.style.transform = `translateX(${offset}%)`;
}



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


prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
    stopAutoPlay();
    startAutoPlay();

});
nextBtn.addEventListener("click", () => {
    showSlide(index + 1)
    stopAutoPlay();
    startAutoPlay();
});


function startAutoPlay() {
    timer = setTimeout(function auto() {
    showSlide(index + 1);
    timer = setTimeout(auto, DURATION); 
    }, DURATION);
}

function stopAutoPlay() {
    clearTimeout(timer);
}

showSlide(0);
startAutoPlay();
