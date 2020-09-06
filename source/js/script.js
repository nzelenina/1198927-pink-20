var doc = document.body;
var link = document.querySelector (".menu-toggle");
var wind = document.querySelector (".header");

doc.classList.remove("no-js");
wind.classList.remove("header--nav-opened");

link.addEventListener ("click" , function (evt) {
  evt.preventDefault();
  wind.classList.toggle("header--nav-opened");
});
