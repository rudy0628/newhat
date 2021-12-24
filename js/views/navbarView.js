class NavbarView {
	_parentEl = document.querySelector('.nav__list');

	addHandlerClick(handler) {
		this._parentEl.addEventListener('click', function (e) {
			const link = e.target.closest('.nav__link');
			if (!link) return;
			const headerEl = e.target.closest('.header');
			headerEl.classList.remove('nav-open');

			const category = link.getAttribute('href').slice(1);
			handler(category);
		});
	}
}

export default new NavbarView();
