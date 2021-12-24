class NavbarView {
	_parentEl = document.querySelector('.nav__list');

	addHandlerClick(handlerLoadNews, handlerPagination) {
		this._parentEl.addEventListener('click', function (e) {
			const link = e.target.closest('.nav__link');
			if (!link) return;
			const headerEl = e.target.closest('.header');
			headerEl.classList.remove('nav-open');

			const category = link.getAttribute('href').slice(1);
			handlerLoadNews(category);
			handlerPagination(1);
		});
	}
}

export default new NavbarView();
