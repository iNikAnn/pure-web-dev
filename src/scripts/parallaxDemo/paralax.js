// add 'will-change' to all img
document
	.querySelectorAll('.slide__img')
	.forEach((el) => el.style['will-change'] = 'transform');

// slides
const slides1 = document.querySelectorAll('.slide1__img');
const slides2 = document.querySelectorAll('.slide2__img');

// shift img pos of slides2
slides2.forEach((el, i) => {
	el.style.top = `-${100 / Math.pow(2, i + 1)}vh`;
});

document.addEventListener('scroll', () => {
	[slides1, slides2].forEach((el) => moveImages(el));
});

function moveImages(array) {
	array.forEach((el, i) => {
		el.style.transform = `translate3D(0, ${scrollY / Math.pow(2, i + 1)}px, 0)`;
	});
}