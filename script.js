let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo', {delay:200, origin: 'left'});
sr.reveal('.navbar', {delay:400, origin: 'top'});
sr.reveal('.menu-icon', {delay:520, origin: 'right'});

sr.reveal('.anasayfa-text span',{delay:600, origin: 'top'});
sr.reveal('.anasayfa-text h1',{delay:680, origin: 'left'});
sr.reveal('.anasayfa-text p',{delay:750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});

sr.reveal('.social-media',{delay:950, origin: 'bottom'});

sr.reveal('.anasayfa-img',{delay:1000, origin: 'right'});