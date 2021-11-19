// preloader
$(window).on("load", () => {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

// Team
$(() => {
  $("#team-members").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    navText: [
      "<i class='fa fa-angle-left nav-arrow'></i>",
      "<i class='fa fa-angle-right nav-arrow'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
    },
  });
});

// Progress bars
$(() => {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate({ width: `${$(this).attr("aria-valuenow")}%` }, 2000);
      });
      this.destroy();
    },
    { offset: "bottom-in-view" }
  );
});

// Responsive tabs
$(() => {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

// Portfolio
$(window).on("load", () => {
  // Initialize Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    // get filter value
    var filterValue = $(this).attr("data-filter");

    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue,
    });

    // active button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

// Magnifier
$(() => {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });
});

/*Testimonials */
$(() => {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

// stats
$(() => {
  $(".counter").counterUp({ delay: 10, time: 2000 });
});

// Clients
$(() => {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// Navigation
// show / hide nav
$(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand > img").attr("src", "img/logo/logo-dark.png");
      $("#back-to-top").fadeIn();
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand > img").attr("src", "img/logo/logo.png");
      $("#back-to-top").fadeOut();
    }
  });
});

/*Mobile Menu*/
$(function () {
  // Show mobile nav
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
    $("#mobile-nav").css("height", "0%");
  });
});

// Animation
// animate on scroll
$(() => {
  new WOW().init();
});

// home animation on page load
$(window).on("load", () => {
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});
