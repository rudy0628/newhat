import View from './View';

class PaginationView extends View {
	_parentEl = document.querySelector('.pagination');
	addHandlerClick(handler) {
		this._parentEl.addEventListener('click', function (e) {
			const btn = e.target.closest('.pagination__btn');
			const moreEl = document.querySelector('.more');
			moreEl.scrollIntoView({ behavior: 'smooth' });
			if (!btn) return;

			const goToPage = +btn.dataset.goto;
			handler(goToPage);
		});
	}

	_generateMarkUp() {
		const curPage = this._data.newsPage;
		const numPages = Math.ceil(this._data.result.length / this._data.resultPerPage);

		// page 1, and have other page
		if (curPage === 1 && numPages > 1) {
			return `
      <div class="pagination">
        <button class="pagination__btn pagination__btn--hide" data-goto="1">&leftarrow;</button>
        <p class="pagination__page">${curPage}</p>
        <button class="pagination__btn" data-goto="${curPage + 1}">&rightarrow;</button>
      </div>
      `;
		}

		// last page
		if (curPage === numPages && numPages > 1) {
			return `
      <div class="pagination">
        <button class="pagination__btn" data-goto="${curPage - 1}">&leftarrow;</button>
        <p class="pagination__page">${curPage}</p>
        <button class="pagination__btn pagination__btn--hide" data-goto="1">&rightarrow;</button>
      </div>
      `;
		}

		// other page

		if (curPage < numPages) {
			return `
      <div class="pagination">
        <button class="pagination__btn" data-goto="${curPage - 1}">&leftarrow;</button>
        <p class="pagination__page">${curPage}</p>
        <button class="pagination__btn" data-goto="${curPage + 1}">&rightarrow;</button>
      </div>
      `;
		}

		// page 1, have no other page
		return '';
	}
}

export default new PaginationView();
