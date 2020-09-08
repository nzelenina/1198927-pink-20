var doc = document.body;
var link = document.querySelector(".menu-toggle");
var wind = document.querySelector(".header");

doc.classList.remove("no-js");
wind.classList.remove("header--nav-opened");

link.addEventListener ("click" , function (evt) {
  evt.preventDefault();
  wind.classList.toggle("header--nav-opened");
});

var tariff_items = document.querySelectorAll(".tariff-item");
// tariff_items.forEach(function(item, i){
//   item.classList.add('t${i}');
// });

console.log("tariff_item ",tariff_items.length);

var bullits = document.querySelectorAll(".bullits__item");
var bullit_list = document.querySelector(".bullits");

bullits.forEach(function(item, i){
  item.remove();
});

var tariff = document.querySelector(".tariff");
tariff_items.forEach(function(item, i){
  var bullit_element = '<li class="bullits__item"><a href="#" class="bullits__link" data-tariff="' + i + '"><span class="visually-hidden">страница ' + i + '</span></a></li>';
  bullit_list.insertAdjacentHTML("beforeend", bullit_element);
});
bullits = document.querySelectorAll(".bullits__item > .bullits__link");
bullits[0].classList.add("bullits__link--active");
bullits.forEach(function(item, i){
  console.log(item);
  item.addEventListener("click", function(evt){
    evt.preventDefault();
    var active = document.querySelector(".bullits__link--active");
    if (active) {
      active.classList.remove("bullits__link--active");
    }
    item.classList.add("bullits__link--active");
    console.log(item.dataset.tariff, " width win = ",document.documentElement.clientWidth, '  ',"-" + ((item.dataset.tariff) * (document.documentElement.clientWidth - 20 - 40) + (document.documentElement.clientWidth - 20 - 40)/2) + 'px');

    tariff.style.marginLeft = "-" + ((item.dataset.tariff) * (document.documentElement.clientWidth - 20 - 22) + (document.documentElement.clientWidth - 20 - 22)/2) + 'px';

  });
});
window.addEventListener("resize", function(){
  var active_bullit = document.querySelector(".bullits__link--active");
  tariff.style.marginLeft = "-" + ((active_bullit.dataset.tariff) * (document.documentElement.clientWidth - 20 - 22) + (document.documentElement.clientWidth - 20 - 22)/2) + 'px';
});
