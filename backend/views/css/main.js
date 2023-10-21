var ListeBare = document.getElementById("ListeBar");
var EdificeBare = document.getElementById("EdificeBare");
var ActeurBare = document.getElementById("ActeurBare");
var GalerieBare = document.getElementById("GalerieBare");
var DocumentationBare = document.getElementById("DocumentationBare");
var AllContainer = document.getElementById("Container");


ListeBare.addEventListener('click', () => {
    console.log('hello');
    AllContainer.classList.toggle("ListeBareToggle");
});

EdificeBare.addEventListener('click', () => {
    console.log('hello');
    AllContainer.classList.toggle("EdificeBareToggle");
});

ActeurBare.addEventListener('click', () => {
    console.log('hello');
    AllContainer.classList.toggle("ActeurBareToggle");
});

GalerieBare.addEventListener('click', () => {
    console.log('hello');
    AllContainer.classList.toggle("GalerieBareToggle");
});

DocumentationBare.addEventListener('click', () => {
    console.log('hello');
    AllContainer.classList.toggle("DocumentationBareToggle");
});
