$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next">next</button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev">prev</button>',
    infinite: true
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});