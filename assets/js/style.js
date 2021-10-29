let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchBar = document.querySelector('#search-icon')
let searchForm = document.querySelector('.search-bar-container')


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchBar.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBar.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

searchBar.onclick = () => {
    searchBar.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}