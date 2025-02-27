const switchToggle = document.querySelector('input[type ="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
        imageSwitchMode('dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
        imageSwitchMode('light');
    }
}

function darkMode(){
    toggleIcon.children[0].textContent="Dark mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    // nav.style.backgroundColor='rgb(0 0 0 /50%)';
}

function lightMode(){
    toggleIcon.children[0].textContent="Light mode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    // nav.style.backgroundColor ='rgb(255 255 255 / 50%)';
}

function imageSwitchMode(mode){
    img1.src=`img/undraw_website_${mode}.svg`;
    img2.src=`img/undraw_smart_home_${mode}.svg`;
    img3.src=`img/undraw_designer_girl_${mode}.svg`;
}

switchToggle.addEventListener('change',switchMode);