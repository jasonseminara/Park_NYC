$(document).ready(function() {
  //$.get('/zone_search', renderZone, 'json');
  console.log('connected');
  $('#zone_number').blur(function(){
    const zone_number = $(this).val()
    $.get('/zones/' + zone_number, function(data) {
      console.log(data[0].price);
    });
  });
});

/*var renderZone = function(data) {
  var zoneNumber = data.zone_number;
  var price = data.price;
  var timeLimit = data.time_limit;
  console.log('I got it');
};
*/
var test = function(){

console.log('connected')
};
