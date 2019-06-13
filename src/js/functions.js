import parallax from './parallaxObj';
const clickMenuButtonAct = (e) => {
	e.preventDefault();
	let attr = e.target.getAttribute('href');
	attr = attr.slice(1);
	const windowCenter = $(window).width() / 2;
	const menuPosition = $('.menu-items').offset().left;
	const width = $(`.${attr}`).outerWidth();
	const itemOffset = $(`.${attr}`).position().left;
	const left = windowCenter - menuPosition - width/2 - itemOffset;
	if (e.target.classList.contains('active')) {
		e.target.classList.remove('active');
		$('.menu').removeClass(`${attr}-active`);
		$('.slide-button').removeClass('active');
		parallax.enable();
		$(`#${attr}`).removeClass('active');
		$(`.${attr}`).removeAttr('style');
		if (attr === 'remont') {
			$('#testimonial-slider').slick('unslick')
		}
	} else {
		e.target.classList.add('active');
		$('.menu').addClass(`${attr}-active`);
		$('.slide-button').addClass('active');
		$(`#${attr}`).addClass('active');
		$(`.${attr}`).css('transform', `translate3d(${left}px, 0%, 0)`);
		if (attr === 'remont') {
			$('#testimonial-slider').slick({
				slidesToShow: 3,
				slidesToSlide: 3,
				prevArrow: '<button type="button" class="slick-prev"><img src="./src/img/icons/angle-left.png"/></button>',
				nextArrow: '<button type="button" class="slick-next"><img src="./src/img/icons/angle-right.png"/></button>'
			})
		}
		if (attr === 'accesuary'){
			const imgHeight = $('.horizontal .item-stock').outerHeight();
			$('.horizontal img').outerHeight(imgHeight);
		}
		parallax.disable();
	}
}
export { clickMenuButtonAct }