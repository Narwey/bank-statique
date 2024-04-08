const menu = document.querySelector(".menu");
const Links = document.querySelector(".nav-links");

menu.addEventListener('click',()=> {
    Links.classList.toggle('mobile-menu')
})