const burger = document.querySelector('#burger');
const navList = document.querySelector('#nav-list')
const triangle = document.querySelector('#triangle');

burger.addEventListener('click', () => {
    navList.classList.toggle('show');
    triangle.classList.toggle('show');
    burger.classList.toggle('menu-open');
})