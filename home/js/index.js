const track = document.querySelector('.moviment');
const images = document.querySelectorAll('.moviment img');

let currentIndex = 0;
const totalImages = images.length;
const delay = 4000; 

function nextSlide() {
    currentIndex++;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, delay);