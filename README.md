#ngGeodist

A simple AngularJS module used to calculate the distance between two geolocations using the haversine forumla based on the [Node.js Geodist Module by cmoncrief](https://github.com/cmoncrief/geodist) 


###Installation

Install using Bower:

`bower install ngGeodist --save`

Include the `ngGeodist` module in your app,
and the don't forget to include `ng-geodist.js` in your index.html

###Example
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
  // => 5.3

});
```
