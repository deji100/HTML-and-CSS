const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll("img");

// buttons
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// counter 
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// eventListener
nextBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener("transitionend", ()=> {
    if (carouselImages[counter].id == "lastClone") {
        carouselImages.style.transform = "none";
        counter = carouselImages.length -2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id == "firstClone") {
        carouselImages.style.transform = "none";
        counter = carouselImages.length - counter
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})