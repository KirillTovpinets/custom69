import parallax from './parallaxObj';
import { clickMenuButtonAct } from './functions';
$(document).ready(function(){
	$('#testimonial-slider').slick({
		slidesToShow: 3,
		slidesToSlide: 3,
		prevArrow: '<button type="button" class="slick-prev"><img src="./src/img/icons/angle-left.png"/></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./src/img/icons/angle-right.png"/></button>'
	})

	$('.menu-button').click(clickMenuButtonAct);
	$('.button-down').click((e) => {
		let target = e.currentTarget.getAttribute('href');
		const from = $(target).offset().top;

		$('html, body').animate({
			scrollTop: from
		}, 1000);
		return false;
	})
	$('.button-up').click((e) => {
		let attr = $('.menu-button.active').attr('href');
		attr = attr.slice(1);
		$('.menu-button.active').removeClass('active');
		e.target.classList.remove('active');
		$('.menu').removeClass(`${attr}-active`);
		$('.slide-button').removeClass('active');
		parallax.enable();
		$(`#${attr}`).removeClass('active');
	});
})