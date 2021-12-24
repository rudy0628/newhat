import * as model from './model.js';
import * as layoutView from './views/layoutView.js';
import headlineNewsView from './views/headlineNewsView.js';
import moreNewsView from './views/moreNewsView.js';
import paginationView from './views/paginationView.js';
import navbarView from './views/navbarView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const controlLoadNews = async function (category) {
	// 0. render spinner
	headlineNewsView.renderSpinner();
	moreNewsView.renderSpinner();
	// 1. loading news
	await model.loadNews(category);
	// 2. render news
	headlineNewsView.render(model.state.headlineNews);
	moreNewsView.render(model.getSearchResultPage());
};

const controlPagination = function (goToPage) {
	// 0. render spinner
	moreNewsView.renderSpinner();
	// 1. render news
	moreNewsView.render(model.getSearchResultPage(goToPage));
	// 2. render pagination
	paginationView.render(model.state.moreNews);
};

const init = function () {
	headlineNewsView.addHandlerRender(controlLoadNews);
	paginationView.addHandlerClick(controlPagination);
	navbarView.addHandlerClick(controlLoadNews);
	layoutView.mobileNavClick();
	layoutView.stickyNav();
};

init();
