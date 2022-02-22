const menu = document.getElementById("menu");
const ul = document.getElementById("ul");
const text = document.getElementById("headerText")

menu.addEventListener('click', () => {
    ul.classList.toggle("show");
    text.classList.toggle("show")
});



document.getElementById('walkArray').addEventListener('click', function () {
    let ExtremeArray = ['path 1', 'path 2', 'path 3', 'path 4', 'path 5'];
    const randomItem = ExtremeArray[Math.floor(Math.random()*ExtremeArray.length)];
    document.getElementById('RandomArray').innerHTML = randomItem;

});    