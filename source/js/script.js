var link = document.querySelector (".menu-toggle");

        var wind = document.querySelector (".header");


        link.addEventListener ("click" , function (evt) {
        evt.preventDefault();
        wind.classList.toggle ("header--nav-opened");
    });


