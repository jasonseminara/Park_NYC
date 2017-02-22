$(document).ready(function() {
  $.get('/zone_search', renderZone, 'json');
  console.log('connected')
});

var renderZone = function(data) {
  var zoneNumber = data.zone_number;
  var price = data.price;
  var timeLimit = data.time_limit;
}
