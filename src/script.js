var swiper = new Swiper('.swiper-slideshow', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.right-nav-fixed a').click( function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

// $(function(){
// if($(window).width()<480){ //當視窗小於480時才運作
// $('.navbar-for-phone').on('click', function(){
//     $('.navbar-toggle').click();
//   });
// }
// });