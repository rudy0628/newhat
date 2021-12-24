import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

export const state = {
	headlineNews: [],
	moreNews: {
		result: [],
		newsPage: 1,
		resultPerPage: 8,
	},
};

export const loadNews = async function (category = '') {
	try {
		const res = await fetch(`https://newsapi.org/v2/top-headlines?country=tw&apiKey=6bd45246dbee4c06be01a87c7dedc6e9&pageSize=30&category=${category}`);
		const data = await res.json();
		state.headlineNews = data.articles.slice(0, 10);
		state.moreNews.result = data.articles.slice(10);
	} catch (e) {
		throw e;
	}
};

export const getSearchResultPage = function (page = state.moreNews.newsPage) {
	state.moreNews.newsPage = page;

	const start = (page - 1) * state.moreNews.resultPerPage;
	const end = page * state.moreNews.resultPerPage;

	return state.moreNews.result.slice(start, end);
};
