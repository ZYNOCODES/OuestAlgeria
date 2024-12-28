var listeContainer = document.getElementById("liste-container");
var edificeContainer = document.getElementById("edifice-container");
var acteurContainer = document.getElementById("acteur-container");
var documentationContainer = document.getElementById("documentation-container");

var listeBare = document.getElementById("listeBare");
var edificeBare = document.getElementById("edificeBare");
var acteurBare = document.getElementById("acteurBare");
var documentationBare = document.getElementById("documentationBare");


listeBare.addEventListener("click", () => {
  listeContainer.classList.toggle("listeContainer-toggle");
  console.log("liste bare clicked");
});

edificeBare.addEventListener("click", () => {
  edificeContainer.classList.toggle("edificeContainer-toggle");
  console.log("liste bare clicked");
});

acteurBare.addEventListener("click", () => {
  acteurContainer.classList.toggle("acteurContainer-toggle");
  console.log("liste bare clicked");
});

documentationBare.addEventListener("click", () => {
  documentationContainer.classList.toggle("documentationContainer-toggle");
  console.log("liste bare clicked");
});

