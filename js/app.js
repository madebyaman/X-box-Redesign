$('.menu-icon1').click(function(e) {
  e.preventDefault();
  $('.dropdown').slideToggle();
});

$('.carousel').slick({
  dots: true,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.slides').slick({
  infinite: true,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true
});

$('.slides .slick-prev').hide();
$('.slides .slick-next').addClass('icon');
