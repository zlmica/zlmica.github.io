(function ($) {
  "user strict";
  // Preloader Js
  $(window).on("load", function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
    background();
    galleryMasonary();
    galleryMasonaryTwo();
  });
  $(document).ready(function () {
    // Lightcase
    $("a[data-rel^=lightcase]").lightcase();
    // Singer Slider
    var swiper = new Swiper(".sponsor-slider", {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    // Testimonial Slider
    var swiper = new Swiper(".testimonial-slider", {
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  });
  //Create Background Image
  function background() {
    var img = $(".bg_img");
    img.css("background-image", function () {
      var bg = "url(" + $(this).data("background") + ")";
      return bg;
    });
  }

  //Menu Dropdown Icon Adding
  $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
  // Header Background
  var fixed_top_two = $(".header-section");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() < 1) {
      // fixed_top_two.addClass("style-two");
      fixed_top_two.removeClass("header-bg-color");
    } else {
      // fixed_top_two.removeClass("style-two");
      fixed_top_two.addClass("header-bg-color");
    }
  });
  // drop down menu width overflow problem fix
  $("ul")
    .parent()
    .hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos,
        });
      }
    });
  //MenuBar
  $(document).on("click", ".navbar-toggler", function () {
    $(".menu").toggleClass("show");
    // $(".collapse").toggleClass("show");
  });
  //Mobile Menu Accordion
  $(".menu>li>a, .menu ul.submenu>li>a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
    } else {
      element.addClass("open");
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
    }
  });
  //Side Bar Toggler
  $(document).on("click", ".sideNavView , .overlay", function () {
    $(".ace-sidnav").toggleClass("active");
    $(".overlay").toggleClass("active");
  });
  // Scroll To Top
  var fixed_top_three = $(".scrollToTop");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() < 500) {
      fixed_top_three.removeClass("active");
    } else {
      fixed_top_three.addClass("active");
    }
  });
  //Faq Questions
  $(".faq-section .faq-item .faq-item-title").on("click", function (e) {
    var element = $(this).parent(".faq-item");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find(".faq-item").removeClass("open");
      element.find(".faq-content").slideUp(1000, "swing");
    } else {
      element.addClass("open");
      element.children(".faq-content").slideDown(1000, "swing");
      element
        .siblings(".faq-item")
        .children(".faq-content")
        .slideUp(1000, "swing");
      element.siblings(".faq-item").removeClass("open");
      element.siblings(".faq-item").find(".faq-item").removeClass("open");
      element.siblings(".faq-item").find(".faq-content").slideUp(1000, "swing");
    }
  });

  // gallery Page Masonary
  function galleryMasonary() {
    $(".gallery-section .section-wrapper").isotope({
      itemSelector: ".gallery-item-two",
      masonry: {
        columnWidth: 0,
        // horizontalOrder: true,
      },
    });
  }
  //Isotope Masonary
  function galleryMasonaryTwo() {
    $(".gallery-wrapper").isotope({
      itemSelector: ".gallery-item",
      masonry: {
        columnWidth: 0,
      },
    });
  }
  var $grid = $(".gallery-wrapper");
  // filter functions
  var filterFns = {};
  // bind filter button click
  $("ul.filter").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue,
    });
  });
  // change is-checked class on buttons
  $("ul.filter").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "li", function () {
      $buttonGroup.find(".active").removeClass("active");
      $(this).addClass("active");
    });
  });

  // BLog SLider
  var slider = new Swiper(".blog-slider", {
    navigation: {
      nextEl: ".blog-prev",
      prevEl: ".blog-next",
    },
  });
  //wow.min.js
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
  });
  wow.init();
})(jQuery);
