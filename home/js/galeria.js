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

// muda a frase ao abrir o site

document.addEventListener("DOMContentLoaded", () => {
    const frases = [
        "A arte transforma vidas e constrói caminhos.",
        "Cada cor conta uma história diferente.",
        "Acolhimento, afeto e transformação social.",
        "Expressar-se é o primeiro passo para se curar.",
        "Um espaço seguro para despertar talentos."
    ];

    const elementoFrase = document.getElementById("phrase");

    if (elementoFrase) {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        elementoFrase.textContent = frases[indiceAleatorio];

        elementoFrase.animate([
            { opacity: 0, transform: 'translateY(10px)' }, 
            { opacity: 1, transform: 'translateY(0)' }     
        ], {
            duration: 800, 
            easing: 'ease-out',
            fill: 'forwards'
        });
    }
});