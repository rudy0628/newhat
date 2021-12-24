export default class View {
	_data;

	render(data) {
		this._data = data;
		const markup = this._generateMarkUp();

		this._clear();
		this._parentEl.insertAdjacentHTML('beforeend', markup);
	}

	_clear() {
		this._parentEl.innerHTML = '';
	}

	renderSpinner() {
		const markup = `
		<div class="spinner">
			<i class="fas fa-spinner"></i>
		</div>
		`;

		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderError(message = this._errorMessage) {
		const markup = `
		<div class="error">
				<p>${message}</p>
		</div>
		`;

		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}
}
