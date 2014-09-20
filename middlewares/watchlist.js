var request = require('request');

// Middleware to retrieve the user home timeline
exports.watchlist = function(req, res, next) {
	req.trademe = req.trademe || {};

	var oauth = {
		consumer_key: req.app.set('oauth consumer key'),
		consumer_secret: req.app.set('oauth consumer secret'),
		token: req.session.oauth.access_token,
		token_secret: req.session.oauth.access_token_secret
	},
url = 'https://api.' + req.app.set('api domain') + '/v1/MyTradeMe/Watchlist.json';

	request.get({
		url: url,
		oauth: oauth,
		json: true
	}, function(e, r, result) {
		req.trademe.watchlist = result;
		next();
	});
};
