$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow"></img>',
    asNavFor: '.slider-line',
  });

  $('.slider-line').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow"></img>',
    asNavFor: '.slider-map',
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  });

  $('.holder__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow"></img>',
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/Plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/Minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      const spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        let oldValue = parseFloat(input.val());
        let newVal;

        if (oldValue >= max) {
          newVal = oldValue;
        } else {
          newVal = oldValue + 1;
        }

        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");

        summa();
      });

      btnDown.click(function() {
        let oldValue = parseFloat(input.val());
        let newVal;

        if (oldValue <= min) {
          newVal = oldValue;
        } else {
          newVal = oldValue - 1;
        }

        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");

        summa();
      });
    });

  function summa() {
    let summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1) * $('.summ').data('guest');
    $('.summ').html(summ);
  }

  $('.shop__picture-box__circle').on('click', function() {
    $(this).toggleClass('active');
  });
  

});