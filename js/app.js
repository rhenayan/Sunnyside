const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelectorAll('.header__menu > *');
const navMenu = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
   navMenu.classList.toggle('active');

})


navLink.forEach(n => n.addEventListener('click', () => {
    

    navMenu.classList.remove('active');
}))


console.log(navLink);