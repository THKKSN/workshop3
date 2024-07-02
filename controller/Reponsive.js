function checkWindowSize() {
    const elements = document.querySelectorAll('.toggle-text');
    if (window.innerWidth <= 1165) {
        elements.forEach(el => el.classList.add('hidden'));
    } else {
        elements.forEach(el => el.classList.remove('hidden'));
    }
}

function toggleNavBar() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("responsive");
}

window.addEventListener('resize', checkWindowSize);
document.addEventListener('DOMContentLoaded', checkWindowSize);