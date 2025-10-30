const track = document.querySelector(".pack-info");
const items = document.querySelectorAll(".carrusel-item");
const prevBtn = document.querySelector(".nav-button-1");
const nextBtn = document.querySelector(".nav-button-2");
const boton1 = document.querySelector(".pack-info-button-0");
const boton2 = document.querySelector(".pack-info-button-1");
const boton3 = document.querySelector(".pack-info-button-2");

let index = 0;
let timer;
const DURATION = 4000; // Pongo 4s porque le tengo puesto 2s a la transicición pa q no vaya muy rápido y 4-2=2s q es lo q nos piden
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

// Lógica de los botones del carrusel

boton1.addEventListener("click", () => {
  let compra_actual = JSON.parse(localStorage.getItem("compra_actual"));
  if(compra_actual){
    localStorage.removeItem("compra_actual");
  } else {
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
  let compra_actual = JSON.parse(localStorage.getItem("compra_actual"));
  if(compra_actual){
    localStorage.removeItem("compra_actual");
  } else {
    compra_actual = {};
  }
  compra_actual.pack = "Pack Mina de la Jayona";
  compra_actual.precio = 300;
  compra_actual.subtitulo = "Sur Extremadura";
  compra_actual.imagen = "images/Carrusel-2.png";
  compra_actual.descripcion = "Este pack está diseñado para quienes buscan una escapada diferente en el corazón del sur de Extremadura. " +
                        "El punto culminante es la visita guiada a la Mina de la Jayona, un enclave natural y geológico único, donde la luz se filtra entre las rocas creando un espectáculo visual inolvidable. " +
                        "El recorrido se complementa con alojamiento en hoteles rurales con encanto, rodeados de dehesas y pueblos blancos, donde podrás disfrutar de la gastronomía extremeña más auténtica. " +
                        "Con un presupuesto de 300 €, este pack ofrece transporte local, entradas y atención personalizada. "+
                        "Perfecto para quienes desean desconectar sin renunciar a la comodidad ni a la exclusividad: naturaleza, historia y tranquilidad en su máxima expresión.";
  localStorage.setItem("compra_actual", JSON.stringify(compra_actual));
  window.location.href = "versionC.html";
});

boton3.addEventListener("click", () => {
  let compra_actual = JSON.parse(localStorage.getItem("compra_actual"));
  if(compra_actual){
    localStorage.removeItem("compra_actual");
  } else {
    compra_actual = {};
  }
  compra_actual.pack = "Pack exclusivo La Serena";
  compra_actual.precio = 6000;
  compra_actual.subtitulo = "La Serena: historia, naturaleza y tranquilidad";
  compra_actual.imagen = "images/Carrusel-3.png";
  compra_actual.descripcion = "Este pack propone una inmersión en la comarca de La Serena, una de las zonas más singulares y menos transitadas de Extremadura.  " +
                        "La experiencia incluye una visita al histórico Medellín, cuna de Hernán Cortés, donde pasado y paisaje se funden entre ruinas romanas, río y llanura. " +
                        "El alojamiento será en la acogedora Casa Manchado, una vivienda rural con trato cercano y ambiente familiar, ideal para disfrutar de la calma y el silencio de la comarca. " +
                        "Cabe señalar que el itinerario no incluye Don Benito, localidad cercana pero que no aporta un interés especial a una propuesta centrada en naturaleza y patrimonio; no así Villanueva de la Serena, que sí destaca por su vida cultural, gastronomía y ambiente agradable junto al Guadiana. " +
                        "Este es un viaje pensado para quienes buscan exclusividad, desconexión y la Extremadura más pura.";
  localStorage.setItem("compra_actual", JSON.stringify(compra_actual));
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

// Funciones para el cambio automático en el carrusel

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
