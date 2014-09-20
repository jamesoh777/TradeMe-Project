var OpenHome = function (title, location, visitTimeList, geolocation) {
	var o = {};
    o.title = title;
	o.location = location;
	o.geolocation = geolocation;
	o.visitTimeList = visitTimeList;
	return o;
};

module.exports = OpenHome;

