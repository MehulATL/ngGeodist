angular.module('ngGeodist.service', [])

.factory('ngGeodist', function() {

  var radiusUnits = {
    'feet': 20908800,
    'yards': 6969600,
    'miles': 3960,
    'mi': 3960,
    'kilometers': 6371,
    'km': 6371,
    'meters': 6371000
  };

  var parseCoordinates = function(point) {
    if (point === null) {
      point = [0, 0];
    }
    var coords = [];
    if (Array.isArray(point)) {
      coords = point;
    } else if ((point.lat !== null) && (point.lon !== null)) {
      coords = [point.lat, point.lon];
    } else if (typeof point === 'object') {
      for (var key in point) {
        var val = point[key];
        coords.push(val);
      }
    } else {
      coords = point;
    }
    return coords;
  };

  var getEarthRadius = function(unit) {
    if (unit === null) {
      unit = "miles";
    }
    unit = unit.toLowerCase();
    if (!radiusUnits[unit]) {
      unit = "miles";
    }
    return radiusUnits[unit];
  };

  return {

    getDistance: function(start, end, options) {

      if (options === null) {
        options = {};
      }

      var _ref = parseCoordinates(start);
      var lat1 = _ref[0];
      var lon1 = _ref[1];
      var _ref1 = parseCoordinates(end);
      var lat2 = _ref1[0];
      var lon2 = _ref1[1];
      var earthRadius = getEarthRadius('options.unit');
      var latDelta = (lat2 - lat1) * Math.PI / 180;
      var lonDelta = (lon2 - lon1) * Math.PI / 180;
      var lat1Rad = lat1 * Math.PI / 180;
      var lat2Rad = lat2 * Math.PI / 180;
      var a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) + Math.sin(lonDelta / 2) * Math.sin(lonDelta / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distance = earthRadius * c;

      if (!options.exact) {
        distance = Math.floor(distance);
      }

      if (options.limit) {
        if (options.limit > distance) {
          return true;
        } else {
          return false;
        }
      }

      if (options.format) {
        distance = "" + distance + " " + (options.unit || 'miles');
      }

      return distance;

    }

  };

});