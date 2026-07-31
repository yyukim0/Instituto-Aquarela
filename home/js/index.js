//carrossel de imagens no index.html

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

// coisinha que abre quando você clica no dropdown/drawer

const dropdownBtn = document.querySelector('.image-dropdown');
const sidebarMenu = document.getElementById('sidebarMenu');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
    sidebarMenu.classList.add('open');
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; 
}

function closeMenu() {
    sidebarMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
    document.body.style.overflow = ''; 
}

if (dropdownBtn) {
    dropdownBtn.addEventListener('click', openMenu);
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
}