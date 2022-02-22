const menu = document.getElementById("menu");
const ul = document.getElementById("ul");
const text = document.getElementById("headerText")
const track1 = document.getElementById("track1")
const expanded1 = document.getElementById("expanded1")
const expandedHeader = document.getElementById("expandedHeader")

menu.addEventListener('click', () => {
    ul.classList.toggle("show");
    text.classList.toggle("show")
});

track1.addEventListener('click', () => {
    expanded1.classList.toggle("show")
})




document.getElementById('walkArray').addEventListener('click', function () {
    let ExtremeArray = ['path 1', 'path 2', 'path 3', 'path 4', 'path 5'];
    const randomItem = ExtremeArray[Math.floor(Math.random()*ExtremeArray.length)];
    document.getElementById('RandomArray').innerHTML = randomItem;

});    