import View from './View.js';

class MoreNewsView extends View {
	_parentEl = document.querySelector('.more');
	_errorMessage = 'Get news data failed, please reload page!';

	_generateMarkUp() {
		return `${this._data
			.map(
				result => `
      <div class="more-news">
        <div class="more-news__img-box">
          <img src="${result.urlToImage}" alt="${result.title}" class="more-news__img" />
        </div>
        <div class="more-news__text-box">
          <h3 class="subheading">${result.source.name}</h3>
          <a href="${result.url}" class="more-news__link" target="_blank">連結</a>
          <h2 class="heading-secondary more-news__title">${result.title}</h2>
        </div>
      </div>
      `
			)
			.join('')}`;
	}
}

export default new MoreNewsView();
