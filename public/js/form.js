$(document).ready(function() {
  //$.get('/zone_search', renderZone, 'json');
  console.log('connected');
  $('#zone_number').blur(function(){
    const zone_number = $(this).val();
    $.get('/zones/' + zone_number, function(data) {
      var $price = $('<p>').html('Zone Price Per Hour: $' + data[0].price);
      var $timeLimit = $('<p>').html('Zone Time Limit: ' + data[0].time_limit);
      $('.price').empty();
      $('.price').append($price);
      $('.time_limit').empty();
      $('.time_limit').append($timeLimit);
      $('#price').val(data[0].price);
      $('#time_limit').val(data[0].time_limit);
    });
  });
  /*$('#duration').blur(function(){


    const duration = $(this).val()
    $.get('/zones/' + zone_number, function(data) {
      var total = data[0].price * duration;
      console.log(total);
      var $totalPrice = $('<p>').html('Total Price: ' + $('#price'.val));
      console.log($('#price'.val))
      $('.total_price').empty();
      $('.total_price').append($totalPrice);
    });
  })*/
});

/*var renderZone = function(data) {
  var zoneNumber = data.zone_number;
  var price = data.price;
  var timeLimit = data.time_limit;
  console.log('I got it');
};
*/
/*var test = function(){

console.log('connected')
};*/
