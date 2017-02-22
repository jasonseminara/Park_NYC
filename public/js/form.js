$(document).ready(function() {
  //$.get('/zone_search', renderZone, 'json');
  console.log('connected');
  $('#zone_number').blur(function(){
    $(this).val()
  });
});

var renderZone = function(data) {
  var zoneNumber = data.zone_number;
  var price = data.price;
  var timeLimit = data.time_limit;
  console.log('I got it');
};
