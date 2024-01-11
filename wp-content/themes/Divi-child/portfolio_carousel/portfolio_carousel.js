(function($) {
  $(document).ready(function() {
    var carousel_portfolio = $(".or_portolio_carousel_inner");
    if (carousel_portfolio.length > 0) {
      carousel_portfolio.slick({
        dots: false,
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 6000,
        speed: 1000,
        arrows: true,
        fade: false,
        nextArrow: '<div class="next"></div>',
        prevArrow: '<div class="prev"></div>',
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        swipe:false,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    }

  });
})(jQuery);