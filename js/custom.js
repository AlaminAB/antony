(function($) {

  // Add smooth scrolling to all links in navbar
  $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {

    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top-90
      }, 900);
    }

  });


   // Add smooth scrolling to all links in navbar
   $(".navbar-nav li a").on('click', function(event) {

    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top-90
      }, 900);
    }

  });





  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  // Testomonials Slider
  $('.testomonials-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },{
        breakpoint: 1350,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },{
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // Testomonials Slider emd















})(jQuery);
