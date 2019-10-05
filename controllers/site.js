const Articles = require('../models/articles');
const Contacts = require('../models/contacts');
const Emails = require('../models/emails');

exports.getIndex = (req, res, next) => {
	res.render('index', {
		pageTitle: 'Старая Школа',
		path: '/',
	});
};

exports.getCourses = (req, res, next) => {
	res.render('404', { // TODO: change render page to 'courses'
		pageTitle: 'Отзывы',
		path: '/courses',
	});
};

exports.getArticles = (req, res, next) => {
	Articles.fetchAll(articles => {
		res.render('article', {
			pageTitle: 'Статьи',
			path: '/articles',
			articles: articles,
		});
	});
};

exports.postArticles = (req, res, next) => {
	const htg = req.body.selection;
	if (htg !== 'all') {
		Articles.filterByHashtag(htg, articles => {
			res.render('article', {
				pageTitle: 'Статьи',
				path: '/articles',
				articles: articles,
			});
		})
	} else {
		Articles.fetchAll(articles => {
			res.render('article', {
				pageTitle: 'Статьи',
				path: '/articles',
				articles: articles,
			});
		});
	}
};

exports.getReviews = (req, res, next) => {
	res.render('reviews', {
		pageTitle: 'Отзывы',
		path: '/reviews',
	});
};

exports.getContacts = (req, res, next) => {
	res.render('contacts', {
		pageTitle: 'Контакты',
		path: '/contacts',
	});
};

exports.postContacts = (req, res, next) => {
	const info = {
		email: req.body.email,
		title: req.body.title,
		text: req.body.text
	};
	Contacts.addContact(info);
	res.redirect('/contacts');
};

exports.getFAQ = (req, res, next) => {
	res.render('FAQ', {
		pageTitle: 'FAQ',
		path: '/FAQ',
	});
};

exports.postEmails = (req, res, next) => {
	Emails.addEmail(req.body.emailFooter);
	res.redirect('back');
};