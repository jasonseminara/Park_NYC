$(document).ready(function() {
  console.log('connected');
  $('#zone_number').blur(function(){
    const zone_number = $(this).val();
    $.get('/zones/' + zone_number, function(data) {
      var $price = $('<p>').html('Zone Price Per Hour: $' + data[0].price);
      var $timeLimit = $('<p>').html('Zone Time Limit: ' + data[0].time_limit + ' Hours');
      $('.price').empty();
      $('.price').append($price);
      $('.time_limit').empty();
      $('.time_limit').append($timeLimit);
      $('#price').val(data[0].price);
      $('#time_limit').val(data[0].time_limit);
    });
  });
  $('#duration').blur(function(){
    const duration = $(this).val();
    var $price = $('#price').val();
    var $timeLimit = $('#time_limit').val();
    if (duration <= $timeLimit) {
      totalPrice = duration * $price;
      var $totalPrice = $('<p>').html('Total Price: $' + totalPrice);
      $('.total_price').empty();
      $('.total_price').append($totalPrice);
      $('.duration_error').empty();
    } else {
      $(this).val("");
      var $errorMessage = $('<p>').html("You have exceed this zone's time limit. Please choose a shorter time.");
      $('.duration_error').append($errorMessage);
      $('.total_price').empty();
    }
  });
  (function() {
    $('form > div > input').keyup(function() {
        var empty = false;
        $('form > div > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });
        if (empty) {
            $('#purchase').attr('disabled', 'disabled');
        } else {
            $('#purchase').removeAttr('disabled');
        }
    });
  })()
});
