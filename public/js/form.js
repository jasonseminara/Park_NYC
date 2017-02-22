$(document).ready(function() {
  //$.get('/zone_search', renderZone, 'json');
  console.log('connected');
  $('#zone_number').blur(function(){
    const zone_number = $(this).val()
    $.get()
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

const zones {
	"1": [1.5, 2],
}
