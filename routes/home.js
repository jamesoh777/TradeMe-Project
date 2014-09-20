var index = function(req, res) {
    res.render('home', { watchlist: req.trademe.watchlist })
};

exports.index = index;