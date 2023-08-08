const headerCompanyName = document.querySelector('.header__company-name');
const header = document.querySelector('.header');
const headerLink = document.querySelectorAll('.header__link');
const headerBtn = document.querySelector('.header__btn');
const headerBtnBurger = document.querySelector('.header__btn-burger');

let scrollPos = 0;

window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;

    if (scrollPos > 75 && !header.classList.contains('invert')) {
        invertHeader()
        invertHeaderLink();
        invertHeaderBtn();
        invertHeaderCompanyName();
        invertHeaderBtnBurger()
    };

    if (scrollPos < 75 && header.classList.contains('invert')) {
        invertHeader()
        invertHeaderLink();
        invertHeaderBtn();
        invertHeaderCompanyName();
        invertHeaderBtnBurger()
    };
})

function invertHeaderCompanyName() {
    headerCompanyName.classList.toggle('invert');
}

function invertHeader() {
    header.classList.toggle('invert');
}

function invertHeaderLink() {
    headerLink.forEach(el => {
        el.classList.toggle('invert');
    });
}

function invertHeaderBtn() {
    headerBtn.classList.toggle('invert');
}

function invertHeaderBtnBurger() {
    headerBtnBurger.classList.toggle('invert');
}