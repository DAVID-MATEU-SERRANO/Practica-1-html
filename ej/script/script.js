const track = document.querySelector(".pack-info");
const items = document.querySelectorAll(".carrusel-item");
const prevBtn = document.querySelector(".nav-button-1");
const nextBtn = document.querySelector(".nav-button-2");

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
