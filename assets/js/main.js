let ul = document.querySelector('nav ul');
let menuBtn = document.querySelector('.menu-btn i');
let closeMenu = document.querySelector('.close-menu i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
        
    }else{
        ul.classList.add('open');
    }
}