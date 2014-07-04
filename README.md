#ngGeodist

A simple AngularJS module used to calculate the distance between two geolocations using the haversine forumla based on the [Node.js Geodist Module by cmoncrief](https://github.com/cmoncrief/geodist) 


###Installation

Install using Bower:

`bower install ngGeodist --save`

Include the `ngGeodist` module in your app,
and the don't forget to include `ng-geodist.js` in your index.html

###Basic Useage
`ngGeodist.getDistance(start, end, [options]);`

[options] = object with key, value pairs - more info below.

####Example
```
angular.module('myApp', [
  'myApp.controllers',
  'ngGeodist'
])

angular.module('myApp.controllers', [])

.controller('SearchCtrl', function($scope, ngGeodist) {

  var geolocation1 = {
    lat: 37.8077113, 
    lng: -122.2558667
  };
  
  var geolocation2 = {
    lat: 37.7729,
    lng: -122.214
  };

  $scope.distance = ngGeodist.getDistance(geolocation1, geolocation2);
  console.log($scope.distance);
  // => 5.3

});
```

###[Options]
* `unit` - String - returns result in specified unit. Defaults to miles.
  * Available units are - 
  * `miles` or `mi`
  * `yards`
  * `feet`
  * `meters`
  * `kilometers` or `km`
* `format` - Boolean - returns result as a string with the unit type appended to the end. Defaults to false.
* `exact` - Boolean - returns result as a floating point number. Defaults to false.
* `limit` - Number - returns true or false if result is less than or equal to the provided limit number.

####Example

```
var tokyo = {lat: 35.6833, lon: 139.7667}    
var osaka = {lat: 34.6603, lon: 135.5232}

ngGeodist.getDistance(tokyo, osaka)                                // => 249

ngGeodist.getDistance(tokyo, osaka, {exact: true, unit: 'km'})     // => 402.09212137829695

ngGeodist.getDistance(tokyo, osaka, {format: true, unit: 'feet'})  // => 1319614 feet

ngGeodist.getDistance(tokyo, osaka, {limit: 200})                  // => false 

ngGeodist.getDistance(tokyo, osaka, {limit: 250})                  // => true 
```
