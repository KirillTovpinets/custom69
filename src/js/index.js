import parallax from './parallaxObj';
import { clickMenuButtonAct } from './functions';
$(document).ready(function(){
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