  /*=====================
     01.Pre loader
     ==========================*/
     $(window).on('load', function () {
      setTimeout(function(){
          $('.loader_skeleton').fadeOut('slow');
          $('body').css({
              'overflow': 'auto'
          });
      }, 500);
      $('.loader_skeleton').remove('slow');
      $('body').css({
          'overflow': 'hidden'
      });
  });
  $('#preloader').fadeOut('slow', function() {
      $(this).remove();
  });
  
// Top SLider:
$(".carousel-1 ").owlCarousel({
  loop: true,
  center: true,
  stagePadding: 510,
  margin: 1,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 20
    },
    600: {
      items: 1,
      stagePadding: 0,
    },
    1000: {
      items: 1.1,
      stagePadding: 0
    },
    1200: {
      items: 1.4,
      stagePadding: 0
    },
    1300: {
      items: 1.5,
      stagePadding: 0
    },
    1500: {
      items: 1.7,
      stagePadding: 0
    },
    1700: {
      items: 2,
      stagePadding: 0
    }
  }
});
// Category:
$(".carousel-2").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 2,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true
    },
    768: {
      items: 3,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true
    },
    1200: {
      items: 4,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true
    }
  }
});
// Single Product:
$('.carousel-3').owlCarousel({
  loop: false,
  margin: 20,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 3
    },
    1400: {
      items: 4,

    }
  }
})
// Author:
$('.carousel-4').owlCarousel({
  loop: true,
  margin: 60,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    992: {
      items: 1
    }
  }
})

$('.carousel-5').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})

$(".carousel-8 ").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0
    },
    600: {
      items: 1,
      stagePadding: 0
    },
    800: {
      items: 2,
      stagePadding: 0
    },
    1200: {
      items: 3
    }
  }
});

/*---New js added---*/

/*---slider-range here---*/
$("#slider-range").slider({
  range: true,
  min: 0,
  max: 500,
  values: [0, 500],
  slide: function (event, ui) {
    $("#amount").val("৳" + ui.values[0] + " - ৳" + ui.values[1]);
  }
});
$("#amount").val("৳" + $("#slider-range").slider("values", 0) +
  " - ৳" + $("#slider-range").slider("values", 1));
/*---single product activation---*/
$('.single-product-active').owlCarousel({
  autoplay: true,
  loop: true,
  nav: true,
  autoplay: false,
  autoplayTimeout: 8000,
  items: 4,
  margin: 15,
  dots: false,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    320: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },


  }
});
/*---elevateZoom---*/
$("#zoom1").elevateZoom({
  gallery: 'gallery_01',
  responsive: true,
  cursor: 'crosshair',
  zoomType: 'inner'

});
$(window).on('scroll', function () {
           
  /*--show and hide scroll to top start--*/ 
  var scrollToTop = $('.scroll-to-top a')
  if ($(window).scrollTop() > 900) {
      scrollToTop.fadeIn(1000);
  } else {
      scrollToTop.fadeOut(1000);
  }
  /*--show and hide scroll to top end--*/
  
  });
