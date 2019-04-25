import Parallax from 'parallax-js';

$(document).ready(function(){
	$('#testimonial-slider').slick({
		slidesToShow: 3,
		slidesToSlide: 3,
		prevArrow: '<button type="button" class="slick-prev"><img src="./src/img/icons/angle-left.png"/></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./src/img/icons/angle-right.png"/></button>'
	})
	const scene = document.getElementById('parallaxed-menu');
	const parallax = new Parallax(scene);
})