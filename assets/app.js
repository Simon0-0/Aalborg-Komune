const menu = document.getElementById("menu");
const ul = document.getElementById("ul");
const text = document.getElementById("headerText")

menu.addEventListener('click', () => {
    ul.classList.toggle("show");
    text.classList.toggle("show")
});