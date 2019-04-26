import parallax from './parallaxObj';
const clickMenuButtonAct = (e) => {
	e.preventDefault();
	let attr = e.target.getAttribute('href');
	attr = attr.slice(1);
	if (e.target.classList.contains('active')) {
		e.target.classList.remove('active');
		$('.menu').removeClass(`${attr}-active`);
		$('.slide-button').removeClass('active');
		parallax.enable();
		$(`#${attr}`).removeClass('active');
	} else {
		e.target.classList.add('active');
		$('.menu').addClass(`${attr}-active`);
		$('.slide-button').addClass('active');
		$(`#${attr}`).addClass('active');
		parallax.disable();
	}
}
export { clickMenuButtonAct }