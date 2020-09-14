var doc = document.body;
var link = document.querySelector(".menu-toggle");
var wind = document.querySelector(".header");

doc.classList.remove("no-js");
wind.classList.remove("header--nav-opened");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  wind.classList.toggle("header--nav-opened");
});

var tariff_items = document.querySelectorAll(".tariff-item");
var bullits = document.querySelectorAll(".bullits__item");
if (bullits) {
  var bullit_list = document.querySelector(".bullits");

  bullits.forEach(function (item, i) {
    item.remove();
  });

  var tariff = document.querySelector(".tariff");
  tariff_items.forEach(function (item, i) {
    var bullit_element = '<li class="bullits__item"><a href="#" class="bullits__link" data-tariff="' + i + '"><span class="visually-hidden">страница ' + i + '</span></a></li>';
    bullit_list.insertAdjacentHTML("beforeend", bullit_element);
  });
  bullits = document.querySelectorAll(".bullits__item > .bullits__link");
  if (bullits) {

    bullits.forEach(function (item, i) {
      if (i == 0) {
        item.classList.add("bullits__link--active");
      }
      item.addEventListener("click", function (evt) {
        evt.preventDefault();
        var active = document.querySelector(".bullits__link--active");
        if (active) {
          active.classList.remove("bullits__link--active");
        }
        item.classList.add("bullits__link--active");
        tariff.style.marginLeft = "-" + ((item.dataset.tariff) * (document.documentElement.clientWidth - 20 - 22) + (document.documentElement.clientWidth - 20 - 22) / 2) + 'px';
      });
    });
    if (tariff) {
      window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth < 650) {
          var active_bullit = document.querySelector(".bullits__link--active");
          tariff.style.marginLeft = "-" + ((active_bullit.dataset.tariff) * (document.documentElement.clientWidth - 20 - 22) + (document.documentElement.clientWidth - 20 - 22) / 2) + 'px';
        } else {
          tariff.style.marginLeft = "0px";
        }
      });
    }
  }
}

var reviews_labels = document.querySelectorAll(".reviews__label");
if (reviews_labels) {
  reviews_labels.forEach(function (item, i) {
    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      var active_slider = document.querySelector(".reviews__item--active");
      active_slider.classList.remove("reviews__item--active");
      var new_active_slider = this.dataset.slide;
      document.querySelector("." + new_active_slider).classList.add("reviews__item--active");
      var active = document.querySelector(".reviews__label--active");
      active.classList.remove("reviews__label--active");
      this.classList.add("reviews__label--active");
    });
  });

  var review_arrows = document.querySelectorAll(".reviews__arrow");
  if (review_arrows) {
    var reviews_items = document.querySelectorAll(".reviews__item");

    review_arrows.forEach(function (item, i) {
      item.addEventListener("click", function (evt) {
        evt.preventDefault();
        var reviews_active = document.querySelector(".reviews__item--active");
        var direction = this.dataset.direction;

        var number = reviews_active.dataset.number * 1;
        if (direction === "r") {
          if (number >= reviews_items.length) {
            number = 1;
          } else {
            number++;
          };
        } else {
          if (number <= 1) {
            number = reviews_items.length;
          } else {
            number--;
          };
        }
        reviews_active.classList.remove("reviews__item--active");
        document.querySelector(".review-" + (number)).classList.add("reviews__item--active");

        var reviews_label_active = document.querySelector(".reviews__label--active");
        reviews_label_active.classList.remove("reviews__label--active");
        document.querySelector(".reviews__label-" + number).classList.add("reviews__label--active");
      });
    });
  }
}

var form_data = document.querySelector(".users-form");
if (form_data) {
  var form_email = document.querySelector(".email");
  var modal_fail = document.querySelector('.fail');
  var modal_success = document.querySelector('.success');
  var required_fields = document.querySelectorAll('.required');

  if (form_data) {
    required_fields.forEach(function (item, i) {
      item.removeAttribute('required');
    });

    form_email.removeAttribute('pattern');
    form_email.removeAttribute('type');

    form_data.addEventListener('submit', function (evt) {
      var email_pattern = /\S+@\S+\.\S+/;
      evt.preventDefault();
      var flag = 0;
      required_fields.forEach(function (item, i) {
        if (item.value === '') {
          item.classList.add('error');
          flag = 1;
        }
      });

      if (!form_email.value.match(email_pattern)) {
        form_email.classList.add('error');
        flag = 1;
      }

      var invalid_elements = document.querySelectorAll('.error');
      if (invalid_elements) {
        invalid_elements.forEach(function (item, i) {
          item.addEventListener('focus', function () {
            item.classList.remove('error');
          });
        });
      }

      if (flag == 1) {
        modal_fail.classList.add('modal--active');
      } else {
        modal_success.classList.add('modal--active');
        form_data.reset();
      }
    });
  }
}
var close_btns = document.querySelectorAll(".close-modal");
if (close_btns) {
  close_btns.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      item.parentElement.classList.remove('modal--active');
    });
  });
}
