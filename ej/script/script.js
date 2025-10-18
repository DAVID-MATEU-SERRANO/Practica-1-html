const track = document.querySelector(".pack-info");
const items = document.querySelectorAll(".carrusel-item");
const prevBtn = document.querySelector(".nav-button-1");
const nextBtn = document.querySelector(".nav-button-2");

let index = 0;


function showSlide(n) {
    console.count("AAAAAAAAAAAAAAAA")
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


const offset = -index * 100;
track.style.transform = `translateX(${offset}%)`;


prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));
