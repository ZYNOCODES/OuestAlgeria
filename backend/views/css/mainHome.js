let barNavigation = document.querySelector(".liste-du-patrimoine");
let geoButton = document.querySelector("#geo-btn");
let garesButton = document.querySelector("#gares-btn");
let pontsButton = document.querySelector("#ponts-btn");
let haltesButton = document.querySelector("#haltes-btn");

geoButton.addEventListener("click", () => {
  barNavigation.classList.toggle("geo-class-active");
  barNavigation.classList.remove("gares-class-active");
  barNavigation.classList.remove("ponts-class-active");
  barNavigation.classList.remove("haltes-class-active");
  
});

garesButton.addEventListener("click", () => {
  barNavigation.classList.toggle("gares-class-active");
  barNavigation.classList.remove("geo-class-active");
  barNavigation.classList.remove("ponts-class-active");
  barNavigation.classList.remove("haltes-class-active");
});

haltesButton.addEventListener("click", () => {
  barNavigation.classList.toggle("haltes-class-active");
  barNavigation.classList.remove("geo-class-active");
  barNavigation.classList.remove("gares-class-active");
  barNavigation.classList.remove("ponts-class-active");
});
pontsButton.addEventListener("click", () => {
  barNavigation.classList.toggle("ponts-class-active");
  barNavigation.classList.remove("geo-class-active");
  barNavigation.classList.remove("gares-class-active");
  barNavigation.classList.remove("haltes-class-active");
});