import './styles/main.scss'

import Glide from '@glidejs/glide'

import AOS from 'aos'

import $ from 'jquery'

new Glide('.js-glide').mount()
AOS.init()

$(document).ready(function () {
  // Smooth scroll
  $('.js-smooth-scroll').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000)
  })

  // Back to top
  function topFunction () {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 500)
  }
  $('.js-to-top').on('click', topFunction)
})

$(document).on('scroll', function (ev) {
  var scrollOffset = $(document).scrollTop()

  if (scrollOffset > 600) {
    $('.js-to-top').addClass('visible')
  } else {
    $('.js-to-top').removeClass('visible')
  }
})

// Mobile Navi HideShow Button //
$('.js-show-mob-menu').on('click', function (event) {
  $('.mobile-nav__list').toggleClass('show')
})

$('.js-show-mob-menu').on('click', function (event) {
  $('.hide-show__item').toggleClass('close')
})
