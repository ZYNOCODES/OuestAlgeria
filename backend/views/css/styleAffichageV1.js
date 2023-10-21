var ListeBare = document.getElementById("ListeBar");
var EdificeBare = document.getElementById("EdificeBare");
var ActeurBare = document.getElementById("ActeurBare");
var GalerieBare = document.getElementById("GalerieBare");
var DocumentationBare = document.getElementById("DocumentationBare");
var AllContainer = document.getElementById("Container");


ListeBare.addEventListener('click', () => {
    AllContainer.classList.toggle("ListeBareToggle");
});

EdificeBare.addEventListener('click', () => {
    AllContainer.classList.toggle("EdificeBareToggle");
});

ActeurBare.addEventListener('click', () => {
    AllContainer.classList.toggle("ActeurBareToggle");
});

GalerieBare.addEventListener('click', () => {
    AllContainer.classList.toggle("GalerieBareToggle");
});

DocumentationBare.addEventListener('click', () => {
    AllContainer.classList.toggle("DocumentationBareToggle");
});
