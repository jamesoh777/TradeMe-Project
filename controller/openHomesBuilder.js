exports.getOpenHomes = function (watchListItems) {
    console.log('getOpenHomes() !');
    console.log("###length: " + watchListItems.length);

    var openHomeList = [];

    var i;
    for(i = 0; i < watchListItems.length; i++) {

        console.log("this is an openHome: " + watchListItems[i]);
        var openHomes = watchListItems[i].OpenHomes;

        var attributes = watchListItems[i].Attributes;

        var title = watchListItems[i].Title;
        var location;

        var j;
        for (j=0; j< attributes.length;j ++) {
            if (attributes[j].Name == "location") {
                location = attributes[j].Value;
                break;
            }
        }


        var geolocation = watchListItems[i].GeographicLocation.Latitude+","+watchListItems[i].GeographicLocation.Longitude;
        
        var k;

        var visitTimeList = [];

        for (k=0; k< openHomes.length;k ++) {
            var OpenHome = require('../models/openHome.js');
            var VisitTime = require('../models/visitTime.js');
            var VisitTimeInstance = new VisitTime(openHomes[k].Start, openHomes[k].End);
            visitTimeList.push(VisitTimeInstance);
            
        }
        var openHomeModelInstance = new OpenHome(title, location, visitTimeList, geolocation);
        openHomeList.push(openHomeModelInstance);
    }

    return openHomeList;
};