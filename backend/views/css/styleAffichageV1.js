var listeContainer = document.getElementById("liste-container");
var edificeContainer = document.getElementById("edifice-container");
var acteurContainer = document.getElementById("acteur-container");
var galerieContainer = document.getElementById("galerie-container");
var documentationContainer = document.getElementById("documentation-container");

var edificeBare = document.getElementById("edificeBare");
var acteurBare = document.getElementById("acteurBare");
var galerieBare = document.getElementById("galerieBare");
var documentationBare = document.getElementById("documentationBare");


edificeBare.addEventListener("click", () => {
  edificeContainer.classList.toggle("edificeContainer-toggle");
  console.log("liste bare clicked");
});

acteurBare.addEventListener("click", () => {
  acteurContainer.classList.toggle("acteurContainer-toggle");
  console.log("liste bare clicked");
});

galerieBare.addEventListener("click", () => {
  galerieContainer.classList.toggle("galerieContainer-toggle");
  console.log("liste bare clicked");
});

documentationBare.addEventListener("click", () => {
  documentationContainer.classList.toggle("documentationContainer-toggle");
  console.log("liste bare clicked");
});

