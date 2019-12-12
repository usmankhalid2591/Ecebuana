$(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  $(".new-arrivals-slides").slick({
    dots: true,
    autoplay: false,
    slidesToShow: 1
  });
});
