/* Menampilkan Menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu Show */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menyembunyikan Menu */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Menyembunyikan menu di Mobile */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Menambahkan efek blur di header */
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* Menampilkan Scroll Up */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Scroll Section Active Link */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/* Scroll Reveal Animation */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .home__social, .footer__container`, {delay: 600, origin: 'top'})
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .genre__data`, {origin: 'left'})
sr.reveal(`.about__image, .genre__content`, {origin: 'right'})
sr.reveal(`.hobby__card, .games__card`, {interval: 100})

