const menuBtn = document.querySelector('.header__mobile-btn');
const headLineEl = document.querySelector('.headline');

export const mobileNavClick = function () {
	menuBtn.addEventListener('click', function () {
		const headerEl = this.closest('.header');
		headerEl.classList.toggle('nav-open');
	});
};

export const stickyNav = function () {
	const obs = new IntersectionObserver(
		function (entries) {
			const ent = entries[0];

			if (!ent.isIntersecting) {
				document.body.classList.add('sticky');
			}

			if (ent.isIntersecting) {
				document.body.classList.remove('sticky');
			}
		},
		{
			root: null,
			threshold: 0,
			rootMargin: '-80px',
		}
	);

	obs.observe(headLineEl);
};
