const fs = require('fs');
const path = require('path');

const p = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'articles.json'
);

const getArticlesFromFile = cb => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Article {
	constructor(hashtag, headline, text) {
		this.hashtag = hashtag;
		this.headline = headline;
		this.text = text;
	}

	static fetchAll(cb) {
		getArticlesFromFile(cb);
	}

	static filterByHashtag(hashtag, cb) {
		getArticlesFromFile(articles => {
			const arr = articles.filter(p => p.hashtag === hashtag);
			cb(arr);
		})
	}
};

