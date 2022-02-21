const menu = document.getElementById("menu");
const ul = document.getElementById("ul");

menu.addEventListener('click', () => {
    ul.classList.toggle("show");
});