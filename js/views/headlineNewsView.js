import View from './View';

class HeadlineNewsView extends View {
	_parentEl = document.querySelector('.headline');

	addHandlerRender(handler) {
		window.addEventListener('load', function () {
			handler('');
		});
	}

	_generateMarkUp() {
		let i = 1;
		return `${this._data
			.map(result => {
				const html = `
          <div class="headline-news headline-news--${i}">
            <img src="${result.urlToImage}" alt="${result.title}" class="headline-news__img" />
            <div class="headline-news__text-box">
              <h3 class="subheading">${result.source.name}</h3>
              <a href="${result.url}" class="headline-news__link" target="_blank">連結</a>
              <h2 class="heading-secondary headline-news__title">${result.title}</h2>
            </div>
          </div>
        `;
				i++;
				return html;
			})
			.join('')}`;
	}
}

export default new HeadlineNewsView();
