/**
 * Created by John on 20/09/2014.
 */
var assert = require('assert');
var should = require('should');

var watchListItems = [{ ListingId: 3839084,
    Title: 'Open Home 2',
    Category: '0350-5748-3399-',
    StartPrice: 0,
    StartDate: '/Date(1410922341490)/',
    EndDate: '/Date(1415757141490)/',
    ListingLength: null,
    AsAt: '/Date(1411175954056)/',
    CategoryPath: '/Trade-Me-Property/Residential/For-Sale',
    RegionId: 2,
    Region: 'Auckland City',
    Suburb: 'Mount Roskill',
    Note: '',
    NoteDate: '/Date(0)/',
    CategoryName: 'For Sale',
    ReserveState: 3,
    Attributes:
        [ { Name: 'bedrooms',
            DisplayName: 'Bedrooms',
            Value: '3 bedrooms',
            EncodedValue: '3bedrooms' },
            { Name: 'bathrooms',
                DisplayName: 'Bathrooms',
                Value: '2 bathrooms',
                EncodedValue: '2bathrooms' },
            { Name: 'property_type',
                DisplayName: 'Property type',
                Value: 'House',
                EncodedValue: 'House' },
            { Name: 'price',
                DisplayName: 'Price',
                Value: 'Asking price $500,000',
                EncodedValue: 'Askingprice$500,000' },
            { Name: 'location',
                DisplayName: 'Location',
                Value: '29 Cormack Street, Mount Roskill, Auckland City, Auckland' },
            { Name: 'district',
                DisplayName: 'District',
                Value: 'Auckland City' },
            { Name: 'suburb', DisplayName: 'Suburb', Value: 'Mount Roskill' },
            { Name: 'region', DisplayName: 'Region', Value: 'Auckland' },
            { Name: 'property_id',
                DisplayName: 'Property ID#',
                Value: 'AAE880' } ],
    IsClassified: true,
    OpenHomes:
        [ { Start: '/Date(1411432200000+1200)/',
            End: '/Date(1411433100000+1200)/' } ],
    IsOnWatchList: true,
    GeographicLocation:
    { Latitude: -36.9182964,
        Longitude: 174.7313273,
        Northing: 5912791,
        Easting: 1754218,
        Accuracy: 1 },
    PriceDisplay: 'Asking price: $500,000',
    IsDealer: false,
    IsLeading: false,
    IsOutbid: false,
    IsInCart: false }];

describe("Retrieve Open Homes", function() {
//   describe("Watchlist is empty", function() {
//       it("Should return empty list", function() {
//
//       })
//   })
   describe("Watchlist contains Open Homes only", function() {
       var OpenHomeBuilder = require('../controller/openHomesBuilder.js');
       var openHomes = OpenHomeBuilder.getOpenHomes(watchListItems);
       var openHome = openHomes[0];

       it("Should return exact watch list", function() {
           openHomes.length.should.be.exactly(1);
       });

       it("Check title", function() {
           openHome.title.should.be.exactly("Open Home 2");
       })

       it("Check location", function() {
           openHome.location.should.be.exactly("29 Cormack Street, Mount Roskill, Auckland City, Auckland");
       })

       it("Check time", function() {
           openHome.visitTimeList[0].startTime.should.be.exactly("Tue Sep 23 2014 12:30:00");
       })

       it("Check end time", function() {
           openHome.visitTimeList[0].endTime.should.be.exactly("Tue Sep 23 2014 12:45:00");

       })
   })
//   describe("Watchlist contains Open Homes and other item types", function() {
//       it("Should return Open Homes and no other types", function() {
//
//       })
//   })
});