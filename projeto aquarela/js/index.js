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

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalBox = modal.querySelector(".modal-box");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");

    const projectImages = document.querySelectorAll(".projeto-item img");

    const fecharModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    };

    projectImages.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modalImg.alt = img.getAttribute("data-title") || "Projeto";

            modalTitle.textContent = img.getAttribute("data-title") || "Projeto";
            modalDesc.textContent = img.getAttribute("data-desc") || "Sem descrição disponível.";

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // Fecha ao clicar em qualquer lugar fora da modal-box (fundo escuro)
    modal.addEventListener("click", (e) => {
        if (!modalBox.contains(e.target)) {
            fecharModal();
        }
    });

    // Fecha ao pressionar ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            fecharModal();
        }
    });

    const sidebarLinks = document.querySelectorAll('.sidebar-content a[href^="#"]');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
});