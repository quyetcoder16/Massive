$(".massiveNavbar .nav-link").on("click", function () {
    $(".massiveNavbar").find(".active").removeClass("active");
    $(this).addClass("active");
});

window.onscroll = function () { setupScroll() };

function setupScroll() {
    resizeNav();
    progressBar();
}

function resizeNav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".massiveNavbar").classList.add("nav--resize");
    } else {
        document.querySelector(".massiveNavbar").classList.remove("nav--resize");
    }
}

function progressBar() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        var listProgressBar = document.querySelectorAll(".progressBar")
        for (var progressBar of listProgressBar) {
            progressBar.classList.add("active");
        }
    } else {
        var listProgressBar = document.querySelectorAll(".progressBar")
        for (var progressBar of listProgressBar) {
            progressBar.classList.remove("active");
        }
    }
}

$(".massiveShowcase .nav-link").on("click", function () {
    $(".massiveShowcase").find(".active").removeClass("active");
    $(this).addClass("active");
});

let iso = new Isotope(".showcase__content", {
    itemSelector: ".showcase__item",
    // layoutMode: "fitRows"
});


let filtersElem = document.querySelector(".filter-nav");
filtersElem.addEventListener("click", function (event) {

    if (!matchesSelector(event.target, "a")) {
        return;
    }
    let filterValue = event.target.getAttribute("data-filter");
    // use matching filter function
    iso.arrange({ filter: filterValue });
});

// MAGNIFIC POPUP
$(".popup-link").magnificPopup({
    type: "image"
});

$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});


// count up 

$('.numbers__counter').countUp();


// owl js 

$(".feedback___carousel").owlCarousel({
    loop: Infinity,
    margin: 0,
    nav: false,
    autoplay: true,
    autoWidth: false,
    // autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 1
        },
        784: {
            items: 1
        },
        1215: {
            items: 1
        }
    }
});

$(".partners___carousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoWidth: false,
    // autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        784: {
            items: 3
        },
        1215: {
            items: 6
        }
    }
});